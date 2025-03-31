// 导入腾讯云SDK
const tencentcloud = require("tencentcloud-sdk-nodejs");

// 导入邮件推送相关的模块
const sesClient = tencentcloud.ses.v20201002.Client;

// 创建SDK客户端实例
const client = new sesClient({
  credential: {
    secretId: process.env.TENCENT_SECRET_ID || "YOUR_SECRET_ID", 
    secretKey: process.env.TENCENT_SECRET_KEY || "YOUR_SECRET_KEY",
  },
  region: "ap-guangzhou", // 使用广州区域，支持SendEmail接口
  profile: {
    httpProfile: {
      reqTimeout: 30,
    },
  },
});

/**
 * 使用腾讯云邮件推送服务发送联系表单邮件
 * @param {Object} formData - 表单数据
 * @returns {Promise} - 发送结果
 */
async function sendContactFormEmail(formData) {
  const { name, email, phone, message } = formData;
  
  try {
    // 检查是否所有必要信息都存在
    if (!name || !email || !phone || !message) {
      throw new Error("缺少必要的表单信息");
    }
    
    // 获取模板ID
    const templateIdStr = process.env.TENCENT_TEMPLATE_ID || "31089";
    // 将模板ID转换为数字类型 - 必须是uint64类型
    const templateId = Number(templateIdStr);
    
    // 准备用于模板的变量数据
    const templateData = {
      name,
      email,
      phone,
      message: message.replace(/\n/g, '<br>')
    };
    
    // 收件人邮箱 - 可以从环境变量中读取或使用默认值
    const recipientEmail = process.env.RECIPIENT_EMAIL || "18936968621@163.com";
    // 发件人地址 - 从环境变量中读取或使用默认值
    const fromEmailAddress = process.env.FROM_EMAIL_ADDRESS ? 
      `WordsWave <${process.env.FROM_EMAIL_ADDRESS}>` : 
      "WordsWave <noreply@wordswavetest.online>";

    // 创建请求参数 - 使用模板ID发送邮件
    const params = {
      // 必须填写已验证的发信地址，格式为"发件人昵称 <邮箱地址>"
      FromEmailAddress: fromEmailAddress,  
      // 收件人地址，这里用数组表示，即使只有一个收件人
      Destination: [recipientEmail],  
      // 邮件主题
      Subject: `新的客户联系请求：${name}`,
      // 使用Template参数发送模板邮件
      Template: {
        TemplateID: templateId, // 确保这是数字类型
        TemplateData: JSON.stringify(templateData)
      },
      // 触发类型，设置为验证码类型
      TriggerType: 1
    };

    // 输出参数用于调试
    console.log("发送邮件请求参数:", JSON.stringify(params, null, 2));

    try {
      // 调用API发送邮件
      const response = await client.SendEmail(params);
      console.log("邮件发送成功:", response);
      
      return {
        success: true,
        messageId: response.MessageId || 'success'
      };
    } catch (error) {
      // 输出详细错误信息
      console.error("邮件发送失败 - 错误详情:", error);
      
      // 返回友好的错误提示，但仍将处理为成功，确保表单功能正常
      return {
        success: false,
        error: error.message || "邮件发送失败",
        code: error.code || "UNKNOWN_ERROR"
      };
    }
  } catch (error) {
    // 输出详细错误信息
    console.error("邮件发送准备阶段失败 - 错误详情:", error);
    
    // 返回友好的错误提示
    return {
      success: false,
      error: error.message || "邮件发送失败",
      code: error.code || "UNKNOWN_ERROR"
    };
  }
}

module.exports = {
  sendContactFormEmail
}; 
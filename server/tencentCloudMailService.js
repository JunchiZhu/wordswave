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
    // 准备HTML内容
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #333;">新的联系表单提交</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>电子邮箱：</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>电话：</strong> ${phone}</p>
        <h3 style="color: #555;">留言内容：</h3>
        <div style="background-color: #f9f9f9; padding: 15px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #999; margin-top: 20px; font-size: 12px;">
          此邮件由网站自动发送，请勿直接回复此邮件。若需回复，请发送邮件至：${email}
        </p>
      </div>
    `;

    // 创建请求参数 - 使用Simple内容发送，不使用Template
    const params = {
      // 发信地址
      FromEmailAddress: "WordsWave <noreply@wordswavetest.online>",
      // 收件人地址
      Destination: ["18936968621@163.com"],
      // 邮件主题
      Subject: `新的网站联系请求：${name}`,
      // 纯文本内容，非必选
      Simple: {
        // 邮件HTML正文
        Html: htmlContent,
        // 邮件纯文本正文
        Text: `新的联系表单提交\n姓名：${name}\n电子邮箱：${email}\n电话：${phone}\n留言内容：${message}`
      }
    };

    // 输出参数用于调试
    console.log("发送邮件请求参数:", JSON.stringify(params, null, 2));

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
}

module.exports = {
  sendContactFormEmail
}; 
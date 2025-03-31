const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// 加载环境变量
require('dotenv').config();

// 导入邮件服务 - 使用腾讯云邮件推送服务
const { sendContactFormEmail } = require('./tencentCloudMailService');
// const { sendContactFormEmail } = require('./tencentMailService');

// 导入简化版服务（本地文件存储）
const { saveContactForm, getAllContacts, deleteContact } = require('./simpleEmailService');

// 创建Express应用
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 静态文件
app.use(express.static(path.join(__dirname, '../dist')));

// 基本认证中间件
const basicAuth = (req, res, next) => {
  // 检查是否有Authorization头
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');
    return res.status(401).send('Authentication required');
  }
  
  // 解析认证信息
  const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];
  
  // 简单的用户名和密码验证，生产环境应该更安全
  if (user === 'admin' && pass === 'password123') {
    return next();
  }
  
  res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');
  return res.status(401).send('Authentication failed');
};

// 管理页面 - 添加基本认证
app.get('/admin', basicAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// API路由
app.post('/api/send-email', async (req, res) => {
  try {
    const formData = req.body;
    
    // 验证表单数据
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return res.status(400).json({ 
        success: false, 
        message: '请填写所有必填字段' 
      });
    }
    
    console.log('收到表单提交:', formData);
    
    // 先保存到本地，确保数据不丢失
    const saveResult = await saveContactForm(formData);
    
    // 尝试发送邮件
    let emailResult;
    try {
      emailResult = await sendContactFormEmail(formData);
    } catch (emailError) {
      console.error('邮件发送失败:', emailError);
      emailResult = { 
        success: false, 
        error: emailError.message 
      };
    }
    
    // 如果本地保存成功，则返回成功
    if (saveResult.success) {
      return res.json({
        success: true,
        message: emailResult.success 
          ? '表单提交成功，已发送通知邮件' 
          : '表单提交成功，但邮件通知发送失败',
        emailSuccess: emailResult.success,
        savedTo: saveResult.filePath
      });
    } else {
      // 如果本地保存失败
      return res.status(500).json({ 
        success: false, 
        message: '保存表单数据失败', 
        error: saveResult.error 
      });
    }
  } catch (error) {
    console.error('处理请求时出错:', error);
    return res.status(500).json({ 
      success: false, 
      message: '服务器处理请求时出错', 
      error: error.message 
    });
  }
});

// 管理API - 同样添加保护
app.get('/api/admin/contacts', basicAuth, async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error('获取联系表单列表失败:', error);
    res.status(500).json({ 
      success: false, 
      message: '获取联系表单列表失败', 
      error: error.message 
    });
  }
});

// 管理API - 删除联系表单
app.delete('/api/admin/contacts/:id', basicAuth, async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: '缺少联系表单ID'
      });
    }
    
    const result = await deleteContact(id);
    if (result.success) {
      res.json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    console.error('删除联系表单失败:', error);
    res.status(500).json({
      success: false,
      message: '删除联系表单失败',
      error: error.message
    });
  }
});

// 所有其他请求重定向到前端应用
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
}); 
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);
const mkdirAsync = promisify(fs.mkdir);

// 联系表单数据保存路径
const CONTACTS_DIR = path.join(__dirname, 'contacts');

// 确保contacts目录存在
async function ensureContactsDir() {
  try {
    await mkdirAsync(CONTACTS_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

/**
 * 保存联系表单信息到本地文件
 * 这是一个不依赖外部SMTP服务的备选方案
 * @param {Object} formData - 表单数据
 * @returns {Promise} - 保存结果
 */
async function saveContactForm(formData) {
  const { name, email, phone, message } = formData;
  
  try {
    // 确保目录存在
    await ensureContactsDir();
    
    // 生成唯一文件名
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `contact_${timestamp}_${name.replace(/\s+/g, '_')}.json`;
    const filePath = path.join(CONTACTS_DIR, filename);
    
    // 构建要保存的数据，包含提交时间
    const dataToSave = {
      ...formData,
      submittedAt: new Date().toISOString()
    };
    
    // 保存到文件
    await writeFileAsync(filePath, JSON.stringify(dataToSave, null, 2), 'utf8');
    
    console.log(`联系表单已保存到文件: ${filePath}`);
    return { 
      success: true, 
      message: '联系表单已保存',
      filePath
    };
  } catch (error) {
    console.error('保存联系表单失败:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
}

/**
 * 获取所有已保存的联系表单
 * @returns {Promise<Array>} - 联系表单列表
 */
async function getAllContacts() {
  try {
    await ensureContactsDir();
    
    const files = await promisify(fs.readdir)(CONTACTS_DIR);
    const contactForms = [];
    
    for (const file of files) {
      if (file.startsWith('contact_') && file.endsWith('.json')) {
        const filePath = path.join(CONTACTS_DIR, file);
        const content = await readFileAsync(filePath, 'utf8');
        contactForms.push(JSON.parse(content));
      }
    }
    
    return contactForms.sort((a, b) => 
      new Date(b.submittedAt) - new Date(a.submittedAt)
    );
  } catch (error) {
    console.error('获取联系表单列表失败:', error);
    throw error;
  }
}

/**
 * 删除指定的联系表单
 * @param {string} id - 表单ID（通常是时间戳）
 * @returns {Promise<Object>} - 删除结果
 */
async function deleteContact(id) {
  try {
    await ensureContactsDir();
    
    // 获取所有文件
    const files = await promisify(fs.readdir)(CONTACTS_DIR);
    
    // 查找匹配ID的文件
    let foundFile = null;
    for (const file of files) {
      if (file.includes(id) && file.endsWith('.json')) {
        foundFile = file;
        break;
      }
    }
    
    if (!foundFile) {
      return { 
        success: false, 
        message: '找不到指定的联系表单'
      };
    }
    
    // 删除文件
    const filePath = path.join(CONTACTS_DIR, foundFile);
    await promisify(fs.unlink)(filePath);
    
    return {
      success: true,
      message: '联系表单已成功删除',
      deletedFile: foundFile
    };
  } catch (error) {
    console.error('删除联系表单失败:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = {
  saveContactForm,
  getAllContacts,
  deleteContact
}; 
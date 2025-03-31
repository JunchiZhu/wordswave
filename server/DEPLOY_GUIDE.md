# 网站部署指南

## 服务器环境准备

### Node.js环境
1. 安装Node.js：建议使用v16+
2. 安装npm：随Node.js安装

### 依赖安装
在项目根目录运行：
```bash
npm install
```

### 构建前端
```bash
npm run build
```

## 服务器运行

### 开发模式
```bash
npm run dev
```

### 生产模式
使用PM2来管理Node.js应用：
1. 安装PM2：`npm install -g pm2`
2. 启动服务：`pm2 start server/index.js --name "webserver"`
3. 设置开机自启：`pm2 startup` 然后按照提示操作
4. 保存当前进程列表：`pm2 save`

## 邮件发送服务配置

### 腾讯云邮件推送服务

腾讯云邮件推送服务(SES)是一款专业的邮件发送API服务，比传统SMTP服务更稳定可靠，完全避免了SMTP服务的各种限制和问题。

1. **注册腾讯云账号**:
   - 访问 [腾讯云官网](https://cloud.tencent.com/) 注册账号
   - 实名认证您的账号(中国区域要求)

2. **开通邮件推送服务**:
   - 登录腾讯云控制台
   - 搜索"邮件推送"或直接访问 [邮件推送控制台](https://console.cloud.tencent.com/ses)
   - 点击开通服务
   - 基础套餐每月有1000封免费邮件额度

3. **创建发信域名**:
   - 在邮件推送控制台中选择"发信域名"
   - 如果您有自己的域名，添加并按照指引进行DNS验证
   - 如果没有域名，可以先使用腾讯云提供的共享域名

4. **创建发信地址**:
   - 在发信域名验证成功后，添加发信地址
   - 例如: `no-reply@yourdomain.com`

5. **创建API密钥**:
   - 访问 [访问密钥管理](https://console.cloud.tencent.com/cam/capi)
   - 创建新的SecretId和SecretKey
   - 保存这些密钥信息，用于API调用

6. **配置邮件服务**:
   - 打开 `server/tencentCloudMailService.js` 文件
   - 填入您的密钥和发信地址信息:
   
   ```javascript
   // 创建SDK配置
   const clientConfig = {
     credential: {
       secretId: "YOUR_TENCENT_CLOUD_SECRET_ID",     // 替换为您的SecretId
       secretKey: "YOUR_TENCENT_CLOUD_SECRET_KEY",   // 替换为您的SecretKey
     },
     // ... 其他配置保持不变
   };
   
   // 发件人设置
   const mailConfig = {
     fromEmailAddress: "noreply@wordswavetest.online",  // 替换为您在腾讯云验证过的发件地址
     // ... 其他配置保持不变
   };
   ```

7. **使用环境变量** (推荐做法):
   - 通过环境变量存储敏感的密钥信息，修改代码:
   
   ```javascript
   // 创建SDK配置
   const clientConfig = {
     credential: {
       secretId: process.env.TENCENT_CLOUD_SECRET_ID || "YOUR_FALLBACK_SECRET_ID",
       secretKey: process.env.TENCENT_CLOUD_SECRET_KEY || "YOUR_FALLBACK_SECRET_KEY",
     },
     // ... 其他配置
   };
   ```
   
   - 在服务器上设置环境变量 `TENCENT_CLOUD_SECRET_ID` 和 `TENCENT_CLOUD_SECRET_KEY`

8. **发送限制和配额**:
   - 基础套餐每月免费额度: 1000封
   - 发送频率上限: 每秒最多120封
   - 单次请求收件人上限: 50个
   - 更多详情请参考 [腾讯云邮件推送配额](https://cloud.tencent.com/document/product/1288/51383)

9. **优势**:
   - 专业的邮件发送API，稳定可靠
   - 内置邮件队列，避免并发问题
   - 高发送成功率和送达率
   - 完善的错误处理和日志记录
   - 不受SMTP协议各种限制的影响
   - 提供国内和海外节点，全球覆盖

### 其他邮件服务选项

### 腾讯企业邮箱配置

腾讯企业邮箱是一款稳定可靠的企业级邮箱服务，适合国内企业使用。

1. **申请腾讯企业邮箱**:
   - 访问 [腾讯企业邮箱官网](https://exmail.qq.com/) 注册账号
   - 可以使用您的域名，也可以使用腾讯提供的域名

2. **创建邮箱账号**:
   - 登录腾讯企业邮箱管理控制台
   - 创建一个新邮箱账号用于发送网站邮件，例如 `contact@yourdomain.com`
   - 设置并记住该邮箱的密码

3. **开启SMTP服务**:
   - 登录到您的企业邮箱帐户
   - 进入"设置" -> "帐户设置" -> "邮件收发"
   - 确保"POP3/SMTP服务"已开启
   - 如果使用授权码，请在此处生成并保存

4. **配置邮箱服务**:
   - 打开 `server/tencentMailService.js` 文件
   - 将您的邮箱信息替换到以下位置:
   
   ```javascript
   const config = {
     // ...其他配置保持不变
     auth: {
       user: 'your-email@your-company.com', // 替换为您创建的腾讯企业邮箱地址
       pass: 'your-email-password'          // 替换为您的邮箱密码或授权码
     }
   };
   ```

5. **使用环境变量** (生产环境推荐):
   - 修改代码，使用环境变量存储敏感信息:
   
   ```javascript
   const config = {
     // ...其他配置
     auth: {
       user: process.env.TENCENT_EMAIL_USER || 'your-email@your-company.com',
       pass: process.env.TENCENT_EMAIL_PASS || 'your-email-password'
     }
   };
   ```
   
   - 在部署服务时设置环境变量 `TENCENT_EMAIL_USER` 和 `TENCENT_EMAIL_PASS`

6. **测试邮箱连接**:
   - 启动服务后，检查控制台日志是否显示"腾讯企业邮箱连接成功"
   - 如果连接失败，请确认邮箱地址和密码是否正确，SMTP服务是否已开启

7. **解决可能的问题**:
   - 如果遇到"频繁登录"错误，可以尝试在邮箱安全设置中设置白名单
   - 对于连续发送失败的问题，已添加随机延迟机制缓解该问题
   - 如果仍有问题，可以联系腾讯企业邮箱客服

## 常见问题

### 服务启动失败
1. 检查端口是否被占用：`lsof -i:3000`
2. 如被占用，可修改`server/index.js`中的端口号

### 文件权限问题
1. 确保contacts目录可写：`chmod 755 server/contacts`
2. 确保用户有足够权限：`chown -R youruser:yourgroup server/contacts`

### 邮件发送失败
1. 检查邮箱凭据是否正确
2. 确认SMTP服务已开启
3. 查看服务器日志获取详细错误信息

## 更新与维护

### 代码更新
1. 拉取最新代码：`git pull`
2. 安装新依赖：`npm install`
3. 重新构建：`npm run build`
4. 重启服务：`pm2 restart webserver`

### 日志查看
1. 查看应用日志：`pm2 logs webserver`
2. 查看错误日志：`pm2 logs webserver --err`

### 监控应用
1. 查看应用状态：`pm2 status`
2. 查看详细信息：`pm2 show webserver` 
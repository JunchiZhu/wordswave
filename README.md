# Words Wave 官方网站

基于Vue.js开发的企业官方网站，包含主页、产品介绍、服务内容、行业解决方案、公司简介和联系我们等页面。

## 功能特点

- 响应式设计，适配各种设备
- 优化的用户界面和交互体验
- 后端表单处理功能
- 管理界面可查看和管理表单提交

## 技术栈

- 前端：Vue 3, Vue Router, CSS3, HTML5
- 后端：Node.js, Express
- 邮件服务：腾讯云邮件推送服务

## 本地开发

1. 安装依赖
```
npm install
```

2. 配置环境变量
创建 `.env` 文件并配置以下内容：
```
TENCENT_SECRET_ID=您的腾讯云SecretId
TENCENT_SECRET_KEY=您的腾讯云SecretKey
```

3. 启动开发服务器
```
npm run serve
```

4. 启动后端服务
```
node server/index.js
```

## 部署

```
npm run build
```

详细部署指南请参考 `/server/DEPLOY_GUIDE.md`

## 联系我们

如有任何问题或建议，请联系我们。 
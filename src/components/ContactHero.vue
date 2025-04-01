<template>
  <section class="contact-container">
    <!-- 主要内容区域 -->
    <div class="content-container">
      <h2 class="section-title">联系我们</h2>
      <p class="section-description">
        有任何疑问或合作需求？欢迎联系我们，我们将尽快回复您的信息！
      </p>

      <!-- 通知区域 -->
      <div class="notification" :class="{ show: showNotification, success: notificationSuccess, error: !notificationSuccess }">
        <div class="notification-content">
          <div class="notification-icon">
            <i :class="notificationSuccess ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
          </div>
          <div class="notification-message">
            <h4>{{ notificationTitle }}</h4>
            <p>{{ notificationMessage }}</p>
          </div>
          <button class="notification-close" @click="closeNotification">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- 联系信息和表单区域 -->
      <div class="contact-main">
        <!-- 联系方式信息 -->
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>公司地址</h3>
            <p>北京市海淀区</p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>电子邮箱</h3>
            <p><a href="mailto:contact@wordswave.com">contact@wordswave.com</a></p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <h3>联系电话</h3>
            <p><a href="tel:+8613812345678">+86 138-1234-5678</a></p>
          </div>

          <!-- 公司地图 -->
          <div class="map-container">
            <iframe 
              src="https://map.baidu.com/poi/%E6%B5%B7%E6%B7%80%E5%8C%BA/@12949579.835,4838523.13,16z?uid=b83c312e94ef3bce7d7f6a3d&ugc_type=3&ugc_ver=1&device_ratio=2&wd=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA&da_src=shareurl"
              frameborder="0"
              scrolling="no"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- 联系表单 -->
        <div class="contact-form" id="contact-form">
          <div class="form-header">
            <h3>给我们留言</h3>
            <p>我们期待听到您的声音，请填写下面的表单与我们取得联系。</p>
          </div>
          <form ref="contactForm" @submit.prevent="sendEmail">
            <div class="form-group">
              <label for="name">您的姓名：</label>
              <input type="text" id="name" name="user_name" v-model="form.name" required />
            </div>

            <div class="form-group">
              <label for="email">您的邮箱：</label>
              <input type="email" id="email" name="user_email" v-model="form.email" required />
            </div>

            <div class="form-group">
              <label for="phone">您的电话号码：</label>
              <input type="tel" id="phone" name="user_phone" v-model="form.phone" required />
            </div>

            <div class="form-group">
              <label for="message">您的需求：</label>
              <textarea id="message" name="message" v-model="form.message" rows="4" required></textarea>
            </div>

            <button type="submit" :disabled="isLoading">提交信息</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "ContactHero",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      isLoading: false,
      showNotification: false,
      notificationSuccess: true,
      notificationTitle: "",
      notificationMessage: "",
    };
  },
  methods: {
    async sendEmail() {
      try {
        this.isLoading = true;
        
        // 使用后端API提交表单
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        });
        
        const result = await response.json();
        
        if (result.success) {
          // 滚动到页面顶部后再显示通知
          window.scrollTo({ top: 0, behavior: 'smooth' });
          
          // 延迟显示通知，等待页面滚动完成
          setTimeout(() => {
            this.showSuccessNotification(`谢谢您的留言，${this.form.name}！`, '我们会尽快与您联系，感谢您对我们的关注。');
          }, 500);
          
          // 清空表单
          this.form.name = "";
          this.form.email = "";
          this.form.phone = "";
          this.form.message = "";
        } else {
          // 显示错误通知
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            this.showErrorNotification('提交失败', result.message || '请稍后再试，或通过其他联系方式与我们联系。');
          }, 500);
        }
      } catch (error) {
        console.error("提交表单错误:", error);
        // 显示错误通知
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          this.showErrorNotification('提交失败', '发生了未知错误，请稍后再试或通过其他方式联系我们。');
        }, 500);
      } finally {
        this.isLoading = false;
      }
    },
    
    // 显示成功通知
    showSuccessNotification(title, message) {
      this.notificationTitle = title;
      this.notificationMessage = message;
      this.notificationSuccess = true;
      this.showNotification = true;
      
      // 8秒后自动关闭
      setTimeout(() => {
        this.closeNotification();
      }, 8000);
    },
    
    // 显示错误通知
    showErrorNotification(title, message) {
      this.notificationTitle = title;
      this.notificationMessage = message;
      this.notificationSuccess = false;
      this.showNotification = true;
      
      // 8秒后自动关闭
      setTimeout(() => {
        this.closeNotification();
      }, 8000);
    },
    
    // 关闭通知
    closeNotification() {
      this.showNotification = false;
    }
  },
};
</script>

<style scoped>
/* 主容器 */
.contact-container {
  width: 100%;
  max-width: 100%;
  color: #333333;
  background-color: #ffffff;
}

/* 内容区域 */
.content-container {
  width: 100%;
}

.section-title {
  font-size: clamp(2.8rem, 4.4vw, 4.4rem);
  text-align: center;
  margin-bottom: calc(1vw + 10px);
  color: #1f2937;
}

.section-description {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  text-align: center;
  color: #4b5563;
  max-width: min(90vw, 800px);
  margin: 0 auto calc(3vw + 30px);
  line-height: 1.6;
}

/* 联系信息和表单区域 */
.contact-main {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: calc(3vw + 30px);
}

/* 联系信息样式 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: calc(1.5vw + 15px);
}

.info-card {
  background-color: #ffffff;
  padding: calc(1.5vw + 15px);
  border-radius: clamp(8px, 1vw, 12px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.1);
}

.info-icon {
  font-size: clamp(2rem, 3vw, 3rem);
  color: #2563eb;
  margin-bottom: calc(1vw + 10px);
}

.info-card h3 {
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  color: #1f2937;
  margin-bottom: calc(0.8vw + 7px);
}

.info-card p {
  font-size: clamp(1.3rem, 2vw, 2rem);
  color: #4b5563;
}

.info-card a {
  color: #4b5563;
  text-decoration: none;
  transition: color 0.3s;
}

.info-card a:hover {
  color: #2563eb;
}

/* 地图容器 */
.map-container {
  border-radius: clamp(8px, 1vw, 12px);
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  height: clamp(250px, 30vh, 300px);
  border: 1px solid #e5e7eb;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* 表单样式 */
.contact-form {
  background-color: #ffffff;
  padding: calc(2vw + 20px);
  border-radius: clamp(8px, 1vw, 12px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

.form-header {
  text-align: center;
  margin-bottom: calc(1.5vw + 15px);
}

.form-header h3 {
  font-size: clamp(2rem, 3vw, 3rem);
  color: #1f2937;
  margin-bottom: calc(0.8vw + 7px);
}

.form-header p {
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  color: #4b5563;
}

.form-group {
  text-align: left;
  margin-bottom: calc(1.2vw + 12px);
}

label {
  display: block;
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  color: #4b5563;
  margin-bottom: calc(0.5vw + 5px);
}

input,
textarea {
  width: 100%;
  padding: calc(0.8vw + 7px);
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: clamp(5px, 0.8vw, 8px);
  color: #1f2937;
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
textarea:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
  outline: none;
}

button {
  background: linear-gradient(90deg, #2563eb, #0891b2);
  color: white;
  border: none;
  padding: calc(0.8vw + 7px) calc(1.5vw + 15px);
  font-size: clamp(1.3rem, 2vw, 2rem);
  border-radius: clamp(6px, 0.8vw, 8px);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  font-weight: 600;
  width: 100%;
}

button:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(37, 99, 235, 0.4);
}

/* 通知样式 */
.notification {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(120%) translateY(-50px) translateX(-50%);
  width: 500px;
  max-width: 90vw;
  background-color: white;
  border-radius: clamp(8px, 1vw, 10px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
  opacity: 0;
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.4s ease;
  z-index: 1000;
  overflow: hidden;
}

.notification.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
  animation: notification-pulse 2s infinite;
}

@keyframes notification-pulse {
  0% {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
  }
  50% {
    box-shadow: 0 15px 70px rgba(37, 99, 235, 0.4);
  }
  100% {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
  }
}

.notification::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 100%;
}

.notification.success::before {
  background: linear-gradient(to bottom, #4ade80, #10b981);
}

.notification.error::before {
  background: linear-gradient(to bottom, #ef4444, #b91c1c);
}

.notification-content {
  display: flex;
  align-items: center;
  padding: calc(1.5vw + 15px);
}

.notification-icon {
  margin-right: calc(1.2vw + 10px);
  font-size: clamp(2.2rem, 3.2vw, 3.2rem);
}

.notification.success .notification-icon {
  color: #10b981;
}

.notification.error .notification-icon {
  color: #ef4444;
}

.notification-message {
  flex-grow: 1;
}

.notification-message h4 {
  margin: 0 0 calc(0.5vw + 5px) 0;
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  color: #1f2937;
}

.notification-message p {
  margin: 0;
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  color: #6b7280;
}

.notification-close {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: clamp(1.4rem, 2vw, 2rem);
  cursor: pointer;
  padding: 8px;
  margin-left: calc(0.8vw + 8px);
  transition: color 0.3s;
  width: auto;
  height: auto;
}

.notification-close:hover {
  color: #4b5563;
  transform: none;
  box-shadow: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-main {
    gap: calc(2vw + 20px);
  }
}

@media (max-width: 768px) {
  .contact-main {
    grid-template-columns: 1fr;
    gap: calc(2vw + 20px);
  }
  
  .section-title {
    font-size: clamp(2.4rem, 3.6vw, 3.6rem);
  }
  
  .section-description {
    font-size: clamp(1.3rem, 2vw, 2rem);
    margin-bottom: calc(2vw + 20px);
  }
  
  .contact-info {
    gap: calc(1vw + 10px);
  }
  
  .info-card {
    padding: calc(1.2vw + 12px);
  }
  
  .info-icon {
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
    margin-bottom: calc(0.8vw + 7px);
  }
  
  .info-card h3 {
    font-size: clamp(1.4rem, 2vw, 2rem);
    margin-bottom: calc(0.5vw + 5px);
  }
  
  .info-card p {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  .form-header h3 {
    font-size: clamp(1.8rem, 2.4vw, 2.4rem);
  }
  
  .form-header p {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  .contact-form {
    padding: calc(1.5vw + 15px);
  }
  
  label {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  input,
  textarea {
    padding: calc(0.6vw + 6px);
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  button {
    padding: calc(0.6vw + 6px) calc(1.2vw + 10px);
    font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: clamp(2rem, 3vw, 3rem);
  }
  
  .section-description {
    font-size: clamp(1.1rem, 1.8vw, 1.8rem);
  }
  
  .contact-form {
    padding: calc(1.2vw + 12px) calc(1vw + 5px);
  }
  
  .form-header h3 {
    font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  }
  
  .form-header p {
    font-size: clamp(1rem, 1.6vw, 1.6rem);
  }
  
  .form-group {
    margin-bottom: calc(1vw + 10px);
  }
  
  label {
    font-size: clamp(1rem, 1.6vw, 1.6rem);
  }
  
  input,
  textarea {
    padding: calc(0.5vw + 5px);
    font-size: clamp(1rem, 1.6vw, 1.6rem);
  }
  
  button {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  .notification {
    width: calc(100% - 40px);
    max-width: none;
    top: 10px;
    right: 20px;
  }
}
</style>

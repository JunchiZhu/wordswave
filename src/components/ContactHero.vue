<template>
  <section class="contact-container">
    <!-- 主要内容区域 -->
    <div class="content-container">
      <h2 class="section-title">联系我们</h2>
      <p class="section-description">
        有任何疑问或合作需求？欢迎联系我们，我们将尽快回复您的信息！
      </p>

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.073041679124!2d113.6254!3d34.7466!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5YyX5Lqs5biC5Lit5Zu95Lit5Zu9!5e0!3m2!1szh-CN!2sus!4v1618100447587!5m2!1szh-CN!2sus"
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
              <label for="name">您的姓名</label>
              <input type="text" id="name" name="user_name" v-model="form.name" required />
            </div>

            <div class="form-group">
              <label for="email">您的邮箱</label>
              <input type="email" id="email" name="user_email" v-model="form.email" required />
            </div>

            <div class="form-group">
              <label for="phone">您的电话号码</label>
              <input type="tel" id="phone" name="user_phone" v-model="form.phone" required />
            </div>

            <div class="form-group">
              <label for="message">您的需求</label>
              <textarea id="message" name="message" v-model="form.message" rows="4" required></textarea>
            </div>

            <button type="submit">提交信息</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "@emailjs/browser";

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
    };
  },
  methods: {
    async sendEmail() {
      const serviceID = "service_g29ji7r";
      const templateID = "template_0c0fhpk";
      const publicKey = "ZvLCxe7nfAthMFvNM";

      try {
        await emailjs.sendForm(serviceID, templateID, this.$refs.contactForm, { publicKey });
        alert(`谢谢您的留言，${this.form.name}！我们会尽快回复您。`);

        // 清空表单
        this.form.name = "";
        this.form.email = "";
        this.form.phone = "";
        this.form.message = "";
      } catch (error) {
        alert("发送邮件失败，请稍后再试。");
        console.error("邮件发送错误:", error);
      }
    },
  },
};
</script>

<style scoped>
/* 主容器 */
.contact-container {
  width: 100%;
  color: #333333;
  background-color: #ffffff;
}

/* 内容区域 */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
}

.section-title {
  font-size: 4.4rem;
  text-align: center;
  margin-bottom: 20px;
  color: #1f2937;
}

.section-description {
  font-size: 2.2rem;
  text-align: center;
  color: #4b5563;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
}

/* 联系信息和表单区域 */
.contact-main {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
}

/* 联系信息样式 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
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
  font-size: 3rem;
  color: #2563eb;
  margin-bottom: 20px;
}

.info-card h3 {
  font-size: 2.4rem;
  color: #1f2937;
  margin-bottom: 15px;
}

.info-card p {
  font-size: 2rem;
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
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  height: 300px;
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
  padding: 40px;
  border-radius: 12px;
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
  margin-bottom: 30px;
}

.form-header h3 {
  font-size: 3rem;
  color: #1f2937;
  margin-bottom: 15px;
}

.form-header p {
  font-size: 1.8rem;
  color: #4b5563;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  font-size: 1.8rem;
  color: #4b5563;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 15px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #1f2937;
  font-size: 1.8rem;
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
  padding: 15px 30px;
  font-size: 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  font-weight: 600;
  width: 100%;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(37, 99, 235, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-main {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-title {
    font-size: 3.6rem;
  }
  
  .section-description {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .content-container {
    padding: 40px 20px;
  }
  
  .contact-info {
    gap: 20px;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .info-icon {
    font-size: 2.5rem;
  }
  
  .info-card h3 {
    font-size: 2rem;
  }
  
  .info-card p {
    font-size: 1.6rem;
  }
  
  .form-header h3 {
    font-size: 2.4rem;
  }
  
  .form-header p {
    font-size: 1.6rem;
  }
  
  label {
    font-size: 1.6rem;
  }
  
  input,
  textarea {
    padding: 12px;
    font-size: 1.6rem;
  }
  
  button {
    padding: 12px 25px;
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 3rem;
  }
  
  .section-description {
    font-size: 1.8rem;
  }
  
  .contact-form {
    padding: 30px 20px;
  }
}
</style>

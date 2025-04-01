<template>
  <div class="contact-page">
    <Header :isHover="false" />

    <!-- Hero Section with Cover Image -->
    <div class="hero-section">
      <div class="hero-overlay">
        <h1 class="hero-title">联系我们</h1>
      </div>
    </div>

    <section class="contact-content">
      <div class="content-container">
        <ContactHero />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import ContactHero from '@/components/ContactHero.vue';

export default {
  components: {
    Header: HomeHeader,
    Footer: HomeFooter,
    ContactHero,
  },
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  color: #333333;
  background-color: #ffffff;
  overflow-x: hidden;
}

/* 添加动画关键帧 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  height: clamp(300px, 60vh, 800px);
  min-height: 300px;
  background-image: url('https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: clamp(50px, 10vh, 100px);
  animation: fadeInUp 1s ease forwards;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 8rem);
  color: #ffffff;
  letter-spacing: clamp(0.3rem, 1vw, 1rem);
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.3s;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.contact-content {
  background-color: #ffffff;
  color: #333333;
  width: 100%;
  position: relative;
  padding: calc(5vw + 50px) 3vw;
  text-align: center;
  z-index: 2;
}

.content-container {
  max-width: min(94vw, 1400px);
  margin: 0 auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 5rem);
    letter-spacing: clamp(0.3rem, 0.5vw, 0.8rem);
  }
  
  .contact-content {
    padding: calc(4vw + 30px) 3vw;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(2rem, 3.5vw, 3.5rem);
    letter-spacing: clamp(0.2rem, 0.5vw, 0.5rem);
  }
  
  .hero-section {
    height: clamp(200px, 40vh, 400px);
  }
  
  .contact-content {
    padding: calc(3vw + 20px) 3vw;
  }
}
</style>

<template>
  <div class="software-page">
    <Header :isHover="false" />

    <!-- Hero Section with Cover Image -->
    <div class="hero-section">
      <div class="hero-overlay">
        <h1 class="hero-title">AI软件方案</h1>
      </div>
    </div>

    <main class="main-section">
      <SoftwareIntroduction />
    </main>

    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import HomeFooter from '@/components/HomeFooter.vue';
import SoftwareIntroduction from '@/components/SoftwareIntroduction.vue'

export default {
  components: {
    Header: HomeHeader,
    Footer: HomeFooter,
    SoftwareIntroduction
  },
}
</script>

<style scoped>
.software-page {
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
  height: 60vh;
  min-height: 400px;
  background-image: url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
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
  font-size: 8rem;
  color: #ffffff;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.3s;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.6s;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 5rem;
  }
  
  .main-section {
    padding: 3vh 3vw;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
  }
  
  .hero-section {
    height: 40vh;
  }
}
</style>

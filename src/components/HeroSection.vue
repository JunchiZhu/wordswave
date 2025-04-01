<template>
  <section class="hero" :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }">
    <div class="hero-content" :style="textStyle">
      <h1 class="hero-title">把AI <br> 变成你公司的员工</h1>
      <p class="hero-subtitle">让数据 可触达 可使用</p>

      <div class="heroNews-content">
        <div class="heroNews-section">
          <p><strong>变革 2025：</strong> <br>
            定制化AI Agent深入到您的业务里。
          </p>
        </div>

        <div class="heroNews-section">
          <p><strong>采取行动： </strong> <br>
            抓取，分析，报告，一站式解决。
          </p>
        </div>

        <div class="heroNews-section">
          <p><strong>启动您的AI计划：</strong> <br>
            不要再尝试人工智能了，开始用它工作。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    scrollY: Number,
    heroHeight: Number,
  },
  data() {
    return {
      lastScrollY: 0,
      textOpacity: 1,
    };
  },
  watch: {
    scrollY(newScrollY) {
      if (newScrollY > this.lastScrollY) {
        this.textOpacity = Math.max(0, this.textOpacity - 0.005);
      } else if (newScrollY < this.lastScrollY) {
        this.textOpacity = Math.min(1, this.textOpacity + 0.05);
      }
      this.lastScrollY = newScrollY;
    },
  },
  computed: {
    textStyle() {
      return {
        opacity: this.textOpacity,
        color: `rgba(255, 255, 255, ${this.textOpacity})`,
      };
    },
  },
};
</script>

<style scoped>

.hero {
  height: 100vh;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  padding: 0 3vw;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/background.gif') no-repeat center center;
  background-size: cover;
  opacity: 0.2;
  z-index: 0;
}

.hero-content {
  text-align: center;
  width: min(94vw, 1400px);
  max-width: 94vw;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-size: clamp(2.5rem, 4vw, 5rem);
  font-weight: bold;
  margin-bottom: calc(1vw + 5px);
  line-height: 1.2;
  text-transform: uppercase;
  color: white;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  font-weight: 600;
  margin-bottom: calc(2vw + 20px);
  color: white;
}

.heroNews-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: calc(1.5vw + 10px);
  flex-wrap: wrap;
  margin-top: calc(5vw + 30px);
}

.heroNews-section {
  text-align: left;
  flex: 1;
  min-width: 30%;
  border-left: 3px solid white;
  padding-left: calc(1vw + 10px);
  margin-top: calc(1vw + 10px);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.heroNews-section:hover {
  transform: scale(1.03);
  border-left: 3px solid #ccc;
}

.heroNews-section p {
  font-size: clamp(1.2rem, 1.8vw, 2.2rem);
  font-weight: 500;
  line-height: 1.5;
  color: white;
}

.heroNews-section strong {
  font-size: clamp(1.4rem, 2vw, 2.4rem);
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.heroNews-section a {
  color: white;
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.3s ease;
}

.heroNews-section a:hover {
  color: #ffcc00;
  text-decoration: none;
}

@media (max-width: 1000px) {
  .hero-content {
    width: min(90vw, 800px);
  }

  .heroNews-content {
    flex-direction: column;
    align-items: flex-start;
    gap: calc(2vw + 15px);
  }

  .heroNews-section {
    width: 100%;
    text-align: left;
    padding-left: calc(2vw + 10px);
  }

  .heroNews-section p {
    font-size: clamp(1.3rem, 2.5vw, 2.2rem);
  }
  
  .heroNews-section strong {
    font-size: clamp(1.5rem, 2.8vw, 2.5rem);
  }
}

@media (max-width: 640px) {
  .hero-content {
    width: 90%;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 4rem);
  }

  .hero-subtitle {
    font-size: clamp(1.2rem, 3vw, 2rem);
  }

  .heroNews-section p {
    font-size: clamp(1.1rem, 3vw, 2rem);
  }
  
  .heroNews-section strong {
    font-size: clamp(1.3rem, 3.3vw, 2.2rem);
  }

  .heroNews-section {
    padding-left: calc(3vw + 5px);
  }
}
</style>
4
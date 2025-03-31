<template>
  <section class="hero" :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }">
    <div class="hero-content" :style="textStyle">
      <h1 class="hero-title">这是 <br> 企业级 AI</h1>
      <p class="hero-subtitle">15 年企业 AI 成功经验</p>

      <div class="heroNews-content">
        <div class="heroNews-section">
          <p><strong>C3 变革 2025:</strong> <br>
            参加为期两天的行业峰会，探索 AI 如何重塑商业未来。
          </p>
          <a href="#" class="hero-link">注册参与</a>
        </div>

        <div class="heroNews-section">
          <p><strong>C3 AI 与微软 Forge</strong> <br>
            建立战略联盟，加速企业 AI 采用进程。
          </p>
          <a href="#" class="hero-link">了解更多</a>
        </div>

        <div class="heroNews-section">
          <p><strong>启动您的 AI 计划</strong> <br>
            使用 C3 生成式 AI 加速器，迈向智能未来。
          </p>
          <a href="#" class="hero-link">立即注册</a>
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
  z-index: 1; /* 保持你的 z-index */
  overflow: hidden;
  padding: 0 5vw;
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
  width: 60%;
  max-width: 90vw;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 1vw;
  line-height: 1.2;
  text-transform: uppercase;
  color: white;
}

.hero-subtitle {
  font-size: 2vw;
  font-weight: 600;
  margin-bottom: 4vh;
  color: white;
}

.heroNews-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2vw;
  flex-wrap: wrap;
  margin-top: 10vh;
}

.heroNews-section {
  text-align: left;
  flex: 1;
  min-width: 30%;
  border-left: 3px solid white;
  padding-left: 2vw;
  margin-top: 2vh;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.heroNews-section:hover {
  transform: scale(1.03);
  border-left: 3px solid #ccc;
}

.heroNews-section p {
  font-size: 1.3vw;
  font-weight: 500;
  line-height: 1.5;
  color: white;
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
    width: 80%;
  }

  .hero-title {
    font-size: 4vw;
  }

  .hero-subtitle {
    font-size: 2.5vw;
  }

  .heroNews-content {
    flex-direction: column;
    align-items: center;
    gap: 5vw;
  }

  .heroNews-section {
    width: 100%;
    text-align: left;
    padding-left: 4vw;
  }

  .heroNews-section p {
    font-size: 2vw;
  }
}

@media (max-width: 640px) {
  .hero-content {
    width: 90%;
  }

  .hero-title {
    font-size: 5vw;
  }

  .hero-subtitle {
    font-size: 3vw;
  }

  .heroNews-section p {
    font-size: 2.5vw;
  }

  .heroNews-section {
    padding-left: 5vw;
  }
}
</style>
4
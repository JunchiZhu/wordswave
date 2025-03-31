<template>
  <div class="carousel-card-container">
    <!-- 显示当前 Slide -->
    <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
        v-show="index === currentIndex"
    >


      <!-- 标题 -->
      <h2 class="slide-title">{{ slide.title }}</h2>

      <!-- 左右布局容器：描述 + 图片 -->
      <div class="slide-content">
        <!-- 描述部分 -->
        <div class="description-container">
          <p class="slide-description">
            {{ slide.description }}
          </p>
        </div>

        <!-- 图片部分 -->
        <div class="slide-image-container">
          <img
              v-if="slide.src"
              :src="slide.src"
              alt="App Chart"
              class="slide-image"
          />
        </div>
      </div>

      <!-- 按钮组 -->
      <div class="button-group">
        <a :href="slide.demoLink" target="_blank" class="button-demo">
          观看视频
        </a>
        <a :href="slide.moreInfoLink" target="_blank" class="button-info">
          了解更多
        </a>
      </div>
    </div>

    <!-- 轮播控制按钮 -->
    <div class="carousel-controls">
      <button @click="prevSlide" class="carousel-button left">‹</button>
      <button @click="nextSlide" class="carousel-button right">›</button>
    </div>

    <!-- 底部指示点 -->
    <div class="carousel-indicators">
      <span
          v-for="(slide, idx) in slides"
          :key="idx"
          :class="['dot', { active: idx === currentIndex }]"
          @click="goToSlide(idx)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselCard',
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    autoPlay: {
      type: Boolean,
      default: true, // 是否自动播放
    },
    interval: {
      type: Number,
      default: 5000, // 切换间隔（默认 5 秒）
    },
  },
  data() {
    return {
      currentIndex: 0,
      autoPlayTimer: null, // 定时器
    };
  },
  mounted() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoPlay() {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    },
    stopAutoPlay() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
      }
    },
  },
};
</script>

<style scoped>
/* 外层容器 */
.carousel-card-container {
  position: relative;
  width: 95%;
  max-width: 1100px;
  margin: 0 auto;
  overflow: visible; /* 允许箭头可见 */
  background: #ebedf0;
  padding: 3vh;
  font-size: 1.1rem;
}

/* Slide 样式 */
.carousel-slide {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}



/* 标题 */
.slide-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* 主要内容布局 */
.slide-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
}

/* 描述区 */
.description-container {
  flex: 1;
}
.slide-description {
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* 图片区 */
.slide-image-container {
  flex: 1;
  text-align: center;
}
.slide-image {
  max-width: 100%;
  height: auto;
}

/* 小屏幕适配 */
@media (max-width: 640px) {
  .slide-content {
    flex-direction: column;
  }
  .slide-title {
    font-size: 1.4rem;
  }
  .slide-description {
    font-size: 1.1rem;
  }
}

.button-group {
  display: flex;
  gap: 1.2rem; /* 适当增加间距，使按钮更美观 */
  margin-top: 1.2rem; /* 让按钮与上方元素的距离稍大 */
}

.button-demo,
.button-info {
  background-color: #000;
  color: #fff;
  text-decoration: none;
  padding: 0.6rem 1.4rem; /* 增加横向填充，使按钮更宽 */
  font-weight: 500;
  font-size: 1rem;
  border: 2px solid transparent; /* 初始边框透明，避免 hover 变化导致跳动 */
  transition: all 0.3s ease-in-out; /* 平滑过渡，提升用户体验 */
}

.button-demo:hover,
.button-info:hover {
  background-color: white;
  color: black;
  border-color: black; /* 显示黑色边框 */
}


/* 轮播控制按钮 */
.carousel-controls {
  position: absolute;
  top: 50%; /* 让箭头在垂直居中 */
  left: -50px; /* **向外移动箭头** */
  right: -50px; /* **向外移动箭头** */
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  background: transparent;
  pointer-events: none;
}

/* **让左右箭头与两侧保持更大距离，并居中对齐** */
.carousel-button {
  background: transparent;
  border: none;
  font-size: 3rem;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.3s, transform 0.3s ease, background 0.3s ease;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: relative;
  transform: translateY(-50%); /* 确保箭头在圆圈正中央 */
}



/* 指示点 */
.carousel-indicators {
  margin-top: 1rem;
  text-align: center;
}
.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}
.dot.active {
  background-color: #333;
}
</style>

<template>
  <section class="video-section">
    <div class="section-header">
      <h2 class="title">应用产品 - 展示视频</h2>
      <p class="description">
        直观了解我们的产品功能与应用场景
      </p>
    </div>

    <!-- 桌面端显示 VideoComponent -->
    <div v-if="!isMobile" class="video-container">
      <VideoComponent
          v-for="(video, index) in videos"
          :key="index"
          :videoSrc="video.src"
          :iconSrc="video.icon"
          :videoDescription="video.description"
      />
    </div>

    <!-- 移动端显示 CarouselCard -->
    <div v-else>
      <CarouselCard :slides="videos" />
    </div>
  </section>
</template>

<script>
import VideoComponent from '@/components/VideoComponent.vue';
import CarouselCard from '@/components/CarouselCard.vue';

import chart from '@/assets/product_card_1.png';

export default {
  name: 'VideoSection',
  components: {
    VideoComponent,
    CarouselCard,
  },
  data() {
    return {
      isMobile: false,
      videos: [
        { src: chart, title: 'AI舆情分析', description: 'AI舆情分析' },
        { src: chart, title: 'AI律师', description: 'AI律师' },
        { src: chart, title: 'AI数据库', description: 'AI数据库' },
        { src: chart, title: '持续更新', description: '持续更新...' },
      ],
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.matchMedia('(max-width: 1000px)').matches;
    },
  },
};
</script>

<style scoped>
.video-section {
  width: 100%;
  color: #ffffff;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* 标题样式 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header .title {
  font-size: 4.4rem;
  color: #fff;
  margin-bottom: 15px;
}

.section-header .description {
  font-size: 2.2rem;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
}

/* 视频组件容器 */
.video-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* 响应式设计 */
@media (max-width: 900px) {
  .section-header .title {
    font-size: 3.6rem;
  }
  
  .section-header .description {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .section-header .title {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .section-header .title {
    font-size: 2.8rem;
  }
  
  .section-header .description {
    font-size: 1.7rem;
  }
}
</style>

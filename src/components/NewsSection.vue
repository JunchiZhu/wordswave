<template>
  <section class="news-section" :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }">
    <div class="news-container">
      <!-- 新闻卡片标题 -->
      <div class="title-section">
        <h2 class="section-title">最新动态</h2>
        <div class="title-underline"></div>
      </div>

      <!-- 小新闻卡片 -->
      <div class="news-cards">
        <NewsCard v-for="(news, index) in news" :key="index" :news="news" />
      </div>
    </div>
  </section>
</template>

<script>
import NewsCard from "@/components/NewsCard.vue";

export default {
  components: {
    NewsCard,
  },
  props: {
    scrollY: Number,
    heroHeight: Number,
  },
  data() {
    return {
      news: [
        {
          img: require("@/assets/products/product_card_2.jpg"),
          title: "新一代AI技术实现重大突破",
          description: "我们最新的大语言模型在多项基准测试中超越行业标准，为企业客户带来更智能的解决方案。",
          link: "#",
          date: "2023-06-15"
        },
        {
          img: require("@/assets/products/product_card_1.png"),
          title: "公司荣获2023科技创新奖",
          description: "凭借在人工智能领域的突出贡献，我们公司被评为年度最具创新力科技企业之一。",
          link: "#",
          date: "2023-05-20"
        },
        {
          img: require("@/assets/products/product_card_3.png"),
          title: "与全球500强企业达成战略合作",
          description: "我们将为多家世界500强企业提供定制化的AI解决方案，帮助他们实现数字化转型。",
          link: "#",
          date: "2023-04-08"
        },
        {
          img: require("@/assets/products/product_card_3.png"),
          title: "与全球500强企业达成战略合作",
          description: "我们将为多家世界500强企业提供定制化的AI解决方案，帮助他们实现数字化转型。",
          link: "#",
          date: "2023-04-08"
        }
      ],
    };
  }
};
</script>

<style scoped>
.news-section {
  background-color: #f0f7ff; /* 深青色背景 */

  color: #333333;
  width: 100%;
  padding: 120px 5vw;
  text-align: center;
  position: relative;
  z-index: 2;
}

.news-container {
  max-width: 1200px;
  margin: 0 auto;
}

.title-section {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 15px;
  letter-spacing: 0.3rem;
  color: #333333;
  position: relative;
  display: inline-block;
}

.title-underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  margin: 0 auto 20px;
}

/* 新闻卡片区域 */
.news-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  justify-content: center;
}

@media (max-width: 1100px) {
  .section-title {
    font-size: 3.2rem;
  }
  
  .news-cards {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: 80px 20px;
  }
  
  .section-title {
    font-size: 2.8rem;
  }
  
  .news-cards {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.3rem;
  }
}
</style>

<template>
  <div class="news-card" @click="goToNewsDetails">
    <div class="news-image">
      <img :src="news.img" :alt="news.title">
      <div class="news-date">
        <span>{{ formatDate(news.date) }}</span>
      </div>
    </div>
    <div class="news-content">
      <h3 class="news-title">{{ news.title }}</h3>
      <p class="news-description">{{ news.description }}</p>
      <div class="news-footer">
        <a href="#" class="read-more" @click.prevent="goToNewsDetails">阅读更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    goToNewsDetails() {
      // 可以根据需要导航到新闻详情页
      if (this.news.link) {
        window.open(this.news.link, '_blank');
      }
    }
  }
}
</script>

<style scoped>
.news-card {
  background-color: #f8f9ff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15);
}

.news-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-date {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 600;
  z-index: 1;
}

.news-content {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}

.news-title {
  color: #333333;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: 0.3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 48px;
}

.news-description {
  color: #666666;
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 77px;
}

.news-footer {
  margin-top: auto;
}

.read-more {
  display: inline-block;
  color: #3b82f6;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 10px 0;
  position: relative;
  transition: color 0.3s ease;
}

.read-more::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #4ade80, #3b82f6);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.read-more:hover {
  color: #4ade80;
}

.read-more:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

@media (max-width: 1200px) {
  .news-title {
    font-size: 1.8rem;
    min-height: 43px;
  }
  
  .news-description {
    font-size: 1.5rem;
    min-height: 72px;
  }
}

@media (max-width: 768px) {
  .news-image {
    height: 200px;
  }
  
  .news-content {
    padding: 20px;
  }
  
  .news-title {
    font-size: 1.6rem;
    margin-bottom: 10px;
    min-height: 38px;
  }
  
  .news-description {
    font-size: 1.4rem;
    margin-bottom: 15px;
    min-height: 67px;
  }
}
</style>

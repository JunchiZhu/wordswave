<template>
  <div>
    <div class="feature-card" @click="openModal">
      <img :src="feature.img" :alt="feature.title" class="feature-img" />
      <div class="feature-content">
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
      <div class="card-overlay">
        <span class="view-details">查看详情</span>
      </div>
    </div>

    <!-- 模态窗口 -->
    <transition name="modal-fade">
      <div v-if="showModal" class="modal-overlay" @click="closeModal" @keydown.esc="closeModal" tabindex="0">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal" aria-label="关闭">
            ×
          </button>
          <div class="modal-header">
            <img :src="feature.img" :alt="feature.title" class="modal-img" />
            <h2>{{ feature.title }}</h2>
          </div>
          <div class="modal-body">
            <p class="modal-description">{{ feature.description }}</p>
            <div v-if="feature.longDescription" class="modal-long-description">
              <h3>详细介绍</h3>
              <p>{{ feature.longDescription }}</p>
            </div>
            <div v-if="feature.features && feature.features.length" class="modal-features">
              <h3>产品特点</h3>
              <ol class="feature-list">
                <li v-for="(item, index) in feature.features" :key="index">{{ item }}</li>
              </ol>
            </div>
            <div v-if="feature.links && feature.links.length" class="modal-links">
              <h3>相关链接</h3>
              <a v-for="(link, index) in feature.links" :key="index" :href="link.url" target="_blank" class="modal-link">
                <span class="link-icon">&#128279;</span>
                <span class="link-text">{{ link.text }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    feature: Object,
  },
  data() {
    return {
      showModal: false,
      scrollPosition: 0
    };
  },
  methods: {
    openModal() {
      this.scrollPosition = window.pageYOffset;
      this.showModal = true;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = '100%';
      // 添加Escape键监听
      window.addEventListener('keydown', this.handleKeyDown);
      // 设置焦点到模态窗口
      this.$nextTick(() => {
        const modalElement = document.querySelector('.modal-overlay');
        if (modalElement) modalElement.focus();
      });
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, this.scrollPosition);
      // 移除Escape键监听
      window.removeEventListener('keydown', this.handleKeyDown);
    },
    handleKeyDown(e) {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    }
  },
  beforeUnmount() {
    // 组件销毁时确保清理事件监听器
    window.removeEventListener('keydown', this.handleKeyDown);
  }
};
</script>

<style scoped>
.feature-card {
  background-color: #f8f9ff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  border-radius: clamp(8px, 1vw, 12px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #4ade80, #3b82f6);
  z-index: 1;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15);
}

.feature-img {
  width: 100%;
  height: clamp(180px, 22vw, 220px);
  object-fit: cover;
}

.feature-content {
  padding: calc(1.5vw + 15px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}

.feature-title {
  font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  margin-bottom: calc(1vw + 10px);
  font-weight: 600;
  color: #333333;
  letter-spacing: 0.3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.6em;
}

.feature-description {
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  margin-bottom: calc(1vw + 10px);
  color: #666666;
  flex-grow: 1;
  line-height: 1.6;
  letter-spacing: 0.2px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 4.8em;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .card-overlay {
  opacity: 1;
}

.view-details {
  color: white;
  background-color: #3b82f6;
  padding: calc(0.8vw + 8px) calc(1.5vw + 15px);
  border-radius: clamp(4px, 0.6vw, 6px);
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  font-weight: 600;
  transition: transform 0.3s ease;
}

.feature-card:hover .view-details {
  transform: scale(1.1);
}

/* 模态窗口样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  padding: 0 20px;
  backdrop-filter: blur(5px);
  overflow-y: auto;
}

.modal-content {
  background-color: #ffffff;
  border-radius: clamp(8px, 1vw, 12px);
  width: min(90vw, 800px);
  max-height: none;
  position: relative;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  margin: calc(5vw + 50px) auto calc(3vw + 30px);
  animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 添加滚动条样式 */
.modal-content::-webkit-scrollbar {
  width: 10px;
}

.modal-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #333333;
  font-size: 3rem;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(59, 130, 246, 0.1);
  transition: background-color 0.3s;
  line-height: 0.8;
}

.modal-close:hover {
  background-color: rgba(59, 130, 246, 0.2);
}

.modal-header {
  position: relative;
}

.modal-img {
  width: 100%;
  height: clamp(180px, 25vw, 250px);
  object-fit: cover;
  border-top-left-radius: clamp(8px, 1vw, 12px);
  border-top-right-radius: clamp(8px, 1vw, 12px);
}

.modal-header h2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: calc(1vw + 15px);
  background: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
  color: #333333;
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  margin: 0;
  letter-spacing: 0.3px;
}

.modal-body {
  padding: calc(2vw + 20px);
}

.modal-description {
  font-size: clamp(1.2rem, 2vw, 2rem);
  color: #666666;
  margin-bottom: calc(1.5vw + 15px);
  line-height: 1.6;
  letter-spacing: 0.2px;
}

.modal-long-description,
.modal-features {
  margin-bottom: 25px;
}

.modal-long-description h3,
.modal-features h3,
.modal-links h3 {
  font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  color: #3b82f6;
  margin-bottom: calc(1vw + 10px);
  letter-spacing: 0.3px;
  text-align: left;
  position: relative;
  padding-left: calc(1vw + 10px);
}

.modal-long-description h3::before,
.modal-features h3::before,
.modal-links h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 22px;
  background: linear-gradient(to bottom, #4ade80, #3b82f6);
  border-radius: 2px;
}

.modal-long-description p {
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  line-height: 1.6;
  color: #666666;
  letter-spacing: 0.2px;
}

.modal-features ul {
  padding-left: 20px;
}

.modal-features li {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #666666;
  line-height: 1.5;
  letter-spacing: 0.2px;
}

.feature-list {
  padding-left: 0;
  margin-left: 0;
  counter-reset: feature-counter;
  list-style: none;
}

.feature-list li {
  position: relative;
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  margin-bottom: calc(1vw + 10px);
  color: #666666;
  line-height: 1.5;
  letter-spacing: 0.2px;
  display: flex;
  align-items: baseline;
}

.feature-list li::before {
  counter-increment: feature-counter;
  content: counter(feature-counter) ". ";
  position: static;
  color: #3b82f6;
  font-weight: 600;
  margin-right: 8px;
  min-width: 22px;
}

.modal-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.modal-link {
  display: flex;
  align-items: center;
  color: #3b82f6;
  text-decoration: none;
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  transition: color 0.3s ease, transform 0.2s ease;
  background-color: rgba(59, 130, 246, 0.05);
  padding: calc(0.8vw + 8px) calc(1vw + 10px);
  border-radius: clamp(6px, 0.8vw, 8px);
  letter-spacing: 0.2px;
}

.link-icon {
  margin-right: 10px;
  font-size: 1.6rem;
}

.link-text {
  border-bottom: 1px dotted #3b82f6;
}

.modal-link:hover {
  color: #4ade80;
  transform: translateX(5px);
  background-color: rgba(74, 222, 128, 0.05);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .feature-title {
    font-size: 2rem;
  }

  .feature-description {
    font-size: 1.7rem;
  }
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 80px auto 30px; /* 适当减少顶部边距，但仍确保不被header遮挡 */
  }

  .feature-title {
    font-size: 1.8rem;
    height: auto;
    -webkit-line-clamp: 2;
  }

  .feature-description {
    font-size: 1.6rem;
    -webkit-line-clamp: 3;
  }

  .modal-header h2 {
    font-size: 2.2rem;
  }

  .modal-description {
    font-size: 1.6rem;
  }

  .modal-long-description h3,
  .modal-features h3,
  .modal-links h3 {
    font-size: 1.8rem;
  }

  .modal-long-description p,
  .modal-features li,
  .modal-link {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .modal-content {
    width: 100%;
    margin: 70px auto 20px; /* 适当减少边距 */
  }
  
  .feature-img {
    height: 180px;
  }

  .feature-content {
    padding: 20px;
  }

  .modal-img {
    height: 180px;
  }

  .modal-body {
    padding: 20px;
  }
}

/* 模态窗口过渡动画 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

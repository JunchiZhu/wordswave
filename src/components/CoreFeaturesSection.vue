<template>
  <section class="core-features-section" :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }">
    <div class="core-features-container">
      <!-- 标题与副标题 -->
      <div class="title-section">
        <h2 class="section-title">核心功能</h2>
        <div class="title-underline"></div>
        <p class="subtitle">我们的AI智能平台提供全面的解决方案，帮助企业高效利用数据并做出明智决策</p>
      </div>

      <!-- 核心功能卡片 -->
      <div class="core-features-cards">
        <div v-for="(feature, index) in features" :key="index" class="feature-card" 
             :class="{'no-modal': !feature.hasModal}"
             @click="feature.hasModal ? openModal(feature) : null">
          <div class="feature-image">
            <img :src="feature.img" :alt="feature.title">
          </div>
          <div class="feature-content">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- 弹出窗口，使用teleport移动到body下 -->
  <teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>
        <div class="modal-header">
          <img :src="currentFeature.img" :alt="currentFeature.title" class="modal-image">
          <div class="modal-title-wrapper">
            <h2 class="modal-title">{{ currentFeature.title }}</h2>
            <div class="modal-divider"></div>
            <p class="modal-description">{{ currentFeature.description }}</p>
          </div>
        </div>
        <div class="modal-details">
          <p class="modal-detail-text">{{ currentFeature.longDescription }}</p>
          <div class="modal-features">
            <h3 class="modal-features-title">主要特点</h3>
            <ul class="modal-feature-list" v-if="currentFeature.featureList && currentFeature.featureList.length">
              <li v-for="(item, i) in currentFeature.featureList" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    scrollY: Number,
    heroHeight: Number,
  },
  data() {
    return {
      showModal: false,
      currentFeature: {},
      features: [
        {
          img: require("@/assets/product_images/industry.jpg"),
          title: "智能舆情系统—AI赋能，实时洞察",
          description: "监测与筛选：对海量数据进行实时监控和筛选，发现企业关键信息",
          longDescription: "融合传统舆情监控与AI数据处理技术，我们的智能舆情系统为您提供全方位、精准实时的舆情监控和深度数据洞察。无论面对高峰流量还是复杂业务场景，都能确保数据准确、性能卓越，助您迅速捕捉市场脉动，把握决策先机。",
          featureList: [
            "利用AI智能解析，瞬间识别热点，提前预警潜在风险",
            "强大系统架构，稳定应对流量高峰，确保业务高效运行",
            "自动报告生成与方案建议",
            "严格数据校验，提供全方位、多层次深度洞察",
            "一体化平台简化流程，灵活支持未来业务增长"
          ],
          hasModal: true
        },
        {
          img: require("@/assets/product_images/legal.jpg"),
          title: "AI法律助理—智慧法律，精准决策",
          description: "智能化法律检索与风险管理系统，提供全面的法律辅助服务",
          longDescription: "融合领先的AI技术与法律大数据，我们的智能法律助理帮助律师迅速检索相似案例、精准分析合同风险、智能总结判决文书，并提供专业法律咨询。助您在海量法律信息中快速提炼关键信息，实现高效、精准办案。",
          featureList: [
            "快速匹配历史案例，为案件分析提供有力数据支持",
            "自动识别合同潜在风险，提供专业合规建议",
            "高效梳理判决文书关键信息，助力快速理解裁判逻辑",
            "基于深度学习的法律知识图谱，实时提供精准法律建议"
          ],
          hasModal: true
        },
        {
          img: require("@/assets/product_images/database.jpg"),
          title: "AI数据库—智能SQL，数据洞察",
          description: "自然语言交互的智能数据库系统，实现高效数据查询与分析",
          longDescription: "融合领先的AI技术与全面的数据库管理功能，AI数据库助手为您提供一站式解决方案。无论是编写高效SQL查询、管理10+主流数据库，还是自动生成精准报表和同步数据结构，都能帮助您快速探索数据价值、优化决策流程，轻松驾驭复杂数据环境。",
          featureList: [
            "AI驱动智能开发，自动生成优化的SQL查询语句，大幅缩短开发周期",
            "支持MySQL、PostgreSQL、Oracle、SQLServer等多达10+数据库，实现跨平台高效管理",
            "利用AI技术快速生成动态数据看板，直观展示数据趋势与洞察",
            "实现数据库表结构的高效同步，确保数据一致性，提升系统协同效率"
          ],
          hasModal: true
        },
        {
          img: require("@/assets/product_images/industry.jpg"),
          title: "更多功能",
          description: "",
          longDescription: "",
          hasModal: false
        }
      ],
    };
  },
  methods: {
    openModal(feature) {
      this.currentFeature = feature;
      this.showModal = true;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = ''; // 恢复背景滚动
    }
  }
};
</script>

<style scoped>
.core-features-section {
  background-color: white;
  color: #333333;
  width: 100%;
  position: relative;
  padding: calc(5vw + 50px) 3vw;
  text-align: center;
  z-index: 2;
}

.core-features-container {
  max-width: min(94vw, 1400px);
  margin: 0 auto;
}

.title-section {
  text-align: center;
  margin-bottom: calc(3vw + 30px);
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  font-weight: 300;
  margin-bottom: calc(1vw + 10px);
  letter-spacing: 0.3rem;
  color: #333333;
  position: relative;
  display: inline-block;
}

.title-underline {
  width: clamp(40px, 4vw, 60px);
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  margin: 0 auto calc(1vw + 15px);
}

.subtitle {
  font-size: clamp(1.2rem, 2vw, 2rem);
  color: #666666;
  max-width: min(94vw, 800px);
  margin: 0 auto;
  line-height: 1.6;
}

.core-features-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(2vw + 20px);
  justify-content: center;
}

.feature-card {
  background-color: #ffffff;
  border-radius: clamp(8px, 1vw, 12px);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  cursor: pointer;
}

.feature-card.no-modal {
  cursor: default;
  position: relative;
}

.feature-card.no-modal::before {
  content: "即将推出";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  z-index: 10;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-image {
  height: clamp(180px, 25vw, 250px);
  overflow: hidden;
  position: relative;
  background-color: #f8f9fa;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.feature-card:hover .feature-image img {
  transform: scale(1.05);
}

.feature-content {
  padding: calc(1.5vw + 15px);
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.feature-title {
  font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  color: #333333;
  margin-bottom: calc(1vw + 10px);
  font-weight: 600;
  line-height: 1.3;
  min-height: 2.8em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: visible;
}

.feature-description {
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  line-height: 1.6;
  color: #666666;
  flex-grow: 1;
}

/* 弹出窗口样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: #ffffff;
  border-radius: clamp(8px, 1.6vw, 16px);
  padding: calc(2vw + 20px);
  max-width: min(90vw, 900px);
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: modal-appear 0.3s ease-out forwards;
  z-index: 100000;
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.close-button {
  position: absolute;
  top: calc(1vw + 15px);
  right: calc(1vw + 15px);
  background: none;
  border: none;
  font-size: clamp(2rem, 3vw, 30px);
  color: #666;
  cursor: pointer;
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  outline: none;
  z-index: 100001;
}

.close-button:hover {
  background-color: #f0f0f0;
  color: #333;
}

.modal-header {
  display: flex;
  gap: calc(1.5vw + 15px);
  margin-bottom: calc(2vw + 20px);
  align-items: flex-start;
}

.modal-image {
  width: 40%;
  border-radius: clamp(8px, 1vw, 12px);
  object-fit: cover;
  aspect-ratio: 16/9;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.modal-title-wrapper {
  flex: 1;
  text-align: left;
}

.modal-title {
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  color: #333;
  margin-bottom: calc(1vw + 10px);
  text-align: left;
  line-height: 1.3;
}

.modal-divider {
  height: 4px;
  width: clamp(40px, 6vw, 60px);
  background: linear-gradient(90deg, #6366f1, #a855f7);
  margin-bottom: calc(1vw + 10px);
}

.modal-description {
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  color: #555;
  line-height: 1.5;
  text-align: left;
}

.modal-details {
  text-align: left;
}

.modal-detail-text {
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  line-height: 1.7;
  color: #666;
  margin-bottom: calc(1.5vw + 15px);
}

.modal-features-title {
  font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  color: #333;
  margin-bottom: calc(1vw + 10px);
}

.modal-feature-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.modal-feature-list li {
  position: relative;
  padding-left: calc(1.4vw + 14px);
  margin-bottom: calc(0.8vw + 8px);
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  color: #555;
  line-height: 1.5;
}

.modal-feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(90deg, #6366f1, #a855f7);
}

@media (max-width: 1100px) {
  .section-title {
    font-size: 3.2rem;
  }
  
  .subtitle {
    font-size: 1.8rem;
  }
  
  .core-features-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .modal-header {
    flex-direction: column;
  }
  
  .modal-image {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .core-features-section {
    padding: 80px 20px;
  }
  
  .section-title {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.6rem;
  }
  
  .core-features-cards {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .modal-content {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.3rem;
  }
  
  .subtitle {
    font-size: 1.4rem;
  }
}
</style> 
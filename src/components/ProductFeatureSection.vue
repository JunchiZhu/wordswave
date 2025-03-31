<template>
  <section class="product-features" :style="{ top: Math.max(heroHeight - scrollY, 0) + 'px' }">
    <div class="features-container">
      <div class="title-section">
        <h2 class="section-title">我们的案例</h2>
        <div class="title-underline"></div>
      </div>
      <p class="subheading">
        我们提供人工智能驱动的解决方案，满足现代企业的核心需求。
      </p>

      <div class="features">
        <FeatureCard v-for="(feature, index) in features" :key="index" :feature="feature" />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  components: {
    FeatureCard,
  },
  props: {
    scrollY: Number,
    heroHeight: Number,
  },
  data() {
    return {
      features: [
        {
          img: require("@/assets/product_card_1.png"),
          title: "人工智能数据分析",
          description: "提供实时洞察的高级分析平台，助力商业智能决策",
          longDescription: "我们的人工智能数据分析平台将复杂的数据集转化为可行的商业智能。通过实时处理能力和可定制的仪表板，企业可以识别趋势、预测市场变化，并以前所未有的精确度优化运营。",
          features: [
            "实时数据处理和可视化",
            "用于预测分析的机器学习算法",
            "具有交互式元素的可定制仪表板",
            "与现有数据源的无缝集成",
            "自动报告和见解生成"
          ],
          links: [
            { text: "查看演示", url: "#" },
            { text: "案例研究", url: "#" },
          ],
        },
        {
          img: require("@/assets/product_card_2.jpg"),
          title: "云安全解决方案",
          description: "企业级安全基础设施，保护关键数据资产",
          longDescription: "我们的云安全解决方案为各种规模的企业提供全面保护。使用先进的威胁检测算法和零信任架构，我们确保您的数据在不断发展的网络威胁中得到保护，同时保持符合全球安全标准。",
          features: [
            "所有数据交易的端到端加密",
            "人工智能驱动的威胁检测和预防",
            "自动安全合规报告",
            "多因素认证系统",
            "实时安全监控和警报"
          ],
          links: [
            { text: "安全白皮书", url: "#" },
            { text: "客户评价", url: "#" },
          ],
        },
        {
          img: require("@/assets/product_card_3.png"),
          title: "物联网企业平台",
          description: "可扩展的物联网基础设施，管理组织内的连接设备",
          longDescription: "我们的物联网企业平台使企业能够轻松部署、管理和分析来自数千个连接设备的数据。该平台提供无与伦比的可扩展性、强大的安全性和无缝集成能力，为您的物联网计划从原型到生产提供支持。",
          features: [
            "集中式设备管理控制台",
            "安全的设备配置和认证",
            "边缘计算能力，减少延迟",
            "用于物联网数据的定制分析仪表板",
            "面向第三方集成的API驱动架构"
          ],
          links: [
            { text: "平台文档", url: "#" },
            { text: "案例研究", url: "#" },
          ],
        },
        {
          img: require("@/assets/product_card_1.png"),
          title: "即将推出：人工智能助手",
          description: "为企业工作流程和生产力量身定制的下一代人工智能助手",
          longDescription: "我们即将推出的人工智能助手代表了企业生产力工具的新一代进化。它采用先进的自然语言处理技术，并针对商业工作流程量身定制，将彻底改变组织处理任务、知识管理和团队协作的方式。",
          features: [
            "上下文感知的任务自动化",
            "与主要企业软件集成",
            "个性化工作流程和建议",
            "多语言支持，适用于全球团队",
            "企业级隐私和安全控制"
          ],
          links: [
            { text: "加入等候名单", url: "#" },
            { text: "预览功能", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-features {
  background-color: #f7f8fc;
  color: #333333;
  width: 100%;
  position: relative;
  padding: 100px 5vw;
  text-align: center;
  z-index: 2;
}

.title-section {
  text-align: center;
  margin-bottom: 30px;
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

.subheading {
  font-size: 2rem;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.6;
  color: #666666;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  justify-content: center;
}

@media (max-width: 1100px) {
  .section-title {
    font-size: 3.2rem;
  }
  
  .subheading {
    font-size: 1.8rem;
  }
  
  .features {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .product-features {
    padding: 60px 20px;
  }
  
  .section-title {
    font-size: 2.8rem;
  }
  
  .subheading {
    font-size: 1.6rem;
    max-width: 90%;
  }
  
  .features {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>

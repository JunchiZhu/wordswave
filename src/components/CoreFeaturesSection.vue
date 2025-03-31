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
          title: "AI 舆情分析",
          description: "监测与筛选：对海量数据进行实时监控和筛选，发现企业关键信息",
          longDescription: "我们的AI数据监测与筛选系统能够对新闻、社交媒体、行业网站及各类信息渠道进行多维数据搜集，在预测与专业领域关系的基础上，关联消费负面信息后，及时发出预警。\n\n通过影响分析，利用自然语言处理和情感分析模型，评估消息的积极/消极评估，预测热点或负面信息对企业造成的潜在影响。\n\n系统还能自动生成报告，提供情感概况、风险等级评估、核心话题等，并根据应对案例，为企业提供处理方案，减少人工决策压力。",
          features: [
            "监测与筛选多维数据",
            "影响分析评估潜在风险",
            "自动报告生成与方案建议",
            "应对策略推荐",
            "实时预警系统"
          ],
          links: [
            { text: "查看演示", url: "#" },
            { text: "案例研究", url: "#" },
          ],
        },
        {
          img: require("@/assets/product_card_2.jpg"),
          title: "AI 律师",
          description: "智能化法律检索与风险管理系统，提供全面的法律辅助服务",
          longDescription: "我们的AI律师系统通过智能检索功能，用户可通过自然语言描述所需案例，系统自动从海量判决文书、法律法规中检索相似案例和适用条款。\n\n结合合同风险管理功能，基于合同文本和相关法律体系，系统能自动识别风险条款并提出修改建议。同时支持合同自动补全，根据知识图谱与法律模型库，对未完成的关键信息进行自动补充研究。\n\n系统还提供诉讼策略制定功能，根据模拟算法的案例判例结果，给出证据提交和诉讼策略建议，为法律团队提供参考。",
          features: [
            "智能化法律文书检索",
            "合同风险条款智能识别",
            "合同自动补全与完善",
            "诉讼策略智能制定"
          ],
          links: [
            { text: "法律白皮书", url: "#" },
            { text: "成功案例", url: "#" },
          ],
        },
        {
          img: require("@/assets/product_card_3.png"),
          title: "AI 数据库",
          description: "自然语言交互的智能数据库系统，实现高效数据查询与分析",
          longDescription: "我们的AI数据库系统提供自然语言转SQL功能，用户只需以自然语言描述查询需求，系统自动转换为SQL语句并执行数据查询操作。\n\n通过多模态数据分析技术，系统能对文本、表格、图像、音频等多种信息进行提取和结构化处理，帮助企业获取全面的数据洞察。\n\n语义匹配功能支持通过文本输入、文件上传等多种方式，对数据库中的语义内容进行准确检索，支持用户用自然语言描述定位文档或数据内容。",
          features: [
            "自然语言转SQL查询",
            "多模态数据智能分析",
            "语义化精准检索",
            "文档内容自动摘要",
            "跨数据源集成查询"
          ],
          links: [
            { text: "技术白皮书", url: "#" },
            { text: "案例分析", url: "#" },
          ],
        },
        {
          img: require("@/assets/product_card_1.png"),
          title: "更多功能。。。",
          description: "",
          longDescription: "我们的AI数据监测与筛选系统能够对新闻、社交媒体、行业网站及各类信息渠道进行多维数据搜集，在预测与专业领域关系的基础上，关联消费负面信息后，及时发出预警。\n\n通过影响分析，利用自然语言处理和情感分析模型，评估消息的积极/消极评估，预测热点或负面信息对企业造成的潜在影响。\n\n系统还能自动生成报告，提供情感概况、风险等级评估、核心话题等，并根据应对案例，为企业提供处理方案，减少人工决策压力。",
          features: [
            "监测与筛选多维数据",
            "影响分析评估潜在风险",
            "自动报告生成与方案建议",
            "应对策略推荐",
            "实时预警系统"
          ],
          links: [
            { text: "查看演示", url: "#" },
            { text: "案例研究", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.core-features-section {
  background-color: #f0f7ff; /* 深青色背景 */
  color: #333333;
  width: 100%;
  position: relative;
  padding: 100px 5vw;
  text-align: center;
  z-index: 2;
}

.core-features-container {
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

.subtitle {
  font-size: 2rem;
  color: #666666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.core-features-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  justify-content: center;
}

@media (max-width: 1100px) {
  .section-title {
    font-size: 3.2rem;
  }
  
  .subtitle {
    font-size: 1.8rem;
  }
  
  .core-features-cards {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
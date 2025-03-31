<template>
  <section class="software-intro">
    <div class="section-header">
      <h2 class="title">系统定位与总体目标</h2>
      <p class="description">
        面向企业的智能化数据决策平台，让数据价值最大化
      </p>
    </div>

    <section class="system-overview">
      <div class="content-box">
        <div class="positioning">
          <h3>系统定位</h3>
          <ul>
            <li>面向金融、法律、咨询等知识密集型行业，提供一站式的智能文档分析和企业数据洞察平台。</li>
            <li>利用自然语言搜索、多模态数据解析、知识图谱与实时风险评估，为企业决策提供高效、可靠的辅助。</li>
          </ul>
        </div>
        <div class="goals">
          <h3>目标</h3>
          <ul>
            <li>通过企业级AI技术，显著提高文档处理效率（数倍于传统方式），并提升风险洞察能力。</li>
            <li>整合企业内部和外部舆情数据，实现自动化监测与决策支持。</li>
            <li>建立一个可扩展、可持续学习的AI平台，使复杂数据处理变得像使用Google和百度搜索一样简单。</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="core-features">
      <div class="section-header">
        <h2 class="title">核心功能概述</h2>
        <p class="description">
          全面的企业数据智能化解决方案
        </p>
      </div>
      
      <div class="features-grid">
        <div class="feature" v-for="feature in features" :key="feature.title">
          <div class="feature-header">
            <h3>{{ feature.title }}</h3>
          </div>
          <div class="feature-content">
            <ul>
              <li v-for="(item, idx) in feature.details" :key="idx">
                <strong>{{ item.name }}</strong>{{ item.desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: 0,
      features: [
        {
          title: "AI舆情分析",
          details: [
            { name: "监测与预警：", desc: "针对新闻、社交媒体、行业网站及各类信息源进行多渠道数据抓取，并提供实时预警。" },
            { name: "影响分析：", desc: "通过自然语言处理和情感分析模型，评估热点或负面信息对企业的潜在影响。" },
            { name: "自动报告生成：", desc: "自动生成舆情分析报告，包含核心话题、风险评估和应对方案。" },
            { name: "应对策略推荐：", desc: "结合企业历史应对案例和行业规范，自动生成处理方案。" },
          ],
        },
        {
          title: "AI律师",
          details: [
            { name: "智能检索：", desc: "支持自然语言查询，自动匹配判决文书、法律法规和案例。" },
            { name: "合同风险审查：", desc: "识别合同潜在风险点（如违约责任、争议解决条款等），提供修订建议。" },
            { name: "合同自动补全：", desc: "基于法律知识图谱，补全合同关键条款，确保合规性。" },
            { name: "诉讼策略制定：", desc: "分析相似案例的判决结果，提供初步诉讼策略建议。" },
          ],
        },
        {
          title: "AI数据库",
          details: [
            { name: "自然语言转化SQL：", desc: "用户输入自然语言，系统自动解析为SQL语句并查询数据库。" },
            { name: "多模态数据分析：", desc: "支持文本、表格、音视频等数据格式的智能分析与查询。" },
            { name: "语义匹配检索文件：", desc: "基于文本嵌入技术，实现语义搜索，提高文档定位效率。" },
            { name: "数据可视化与报告：", desc: "自动生成图表和分析报告，帮助用户快速洞察数据价值。" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.software-intro {
  width: 100%;
  color: #333333;
  max-width: 100%;
  box-sizing: border-box;
}

/* 标题样式 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header .title {
  font-size: 4.4rem;
  background: linear-gradient(45deg, #4ade80, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
}

.section-header .description {
  font-size: 2.2rem;
  color: #666666;
  max-width: 800px;
  margin: 0 auto;
}

/* 系统概述 */
.system-overview {
  margin-bottom: 80px;
}

.content-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;
}

.positioning, .goals {
  background-color: #ffffff;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f0f0;
}

.positioning::before, .goals::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #4ade80, #3b82f6);
}

.positioning h3, .goals h3 {
  color: #3b82f6;
  font-size: 2.8rem;
  margin-bottom: 25px;
  position: relative;
}

.positioning ul, .goals ul {
  padding-left: 20px;
}

.positioning li, .goals li {
  color: #666666;
  font-size: 1.8rem;
  margin-bottom: 15px;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* 核心功能 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f0f0;
}

.feature:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(74, 222, 128, 0.15);
}

.feature-header {
  padding: 25px 30px;
  background: linear-gradient(45deg, rgba(74, 222, 128, 0.1), rgba(59, 130, 246, 0.1));
  border-bottom: 1px solid #f0f0f0;
}

.feature-header h3 {
  color: #3b82f6;
  font-size: 2.4rem;
  margin: 0;
}

.feature-content {
  padding: 25px 30px;
}

.feature-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-content li {
  color: #666666;
  font-size: 1.6rem;
  margin-bottom: 15px;
  line-height: 1.6;
}

.feature-content li:last-child {
  margin-bottom: 0;
}

.feature-content strong {
  color: #333333;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header .title {
    font-size: 3.6rem;
  }
  
  .section-header .description {
    font-size: 1.8rem;
  }
  
  .positioning h3, .goals h3 {
    font-size: 2.4rem;
  }
  
  .positioning li, .goals li {
    font-size: 1.6rem;
  }
}
</style>

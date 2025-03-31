<template>
  <section class="industry-use-cases">
    <!-- 内容导航 -->
    <div class="tab-navigation">
      <div class="tab" :class="{ active: activeTab === 'cases' }" @click="activeTab = 'cases'">行业案例</div>
      <div class="tab" :class="{ active: activeTab === 'advantages' }" @click="activeTab = 'advantages'">我们的优势</div>
      <div class="tab" :class="{ active: activeTab === 'comparison' }" @click="activeTab = 'comparison'">对比分析</div>
    </div>

    <!-- 内容区域 -->
    <div class="tab-content">
      <!-- 用户案例 -->
      <div v-if="activeTab === 'cases'" class="content-section">
        <div class="section-intro">
          <h2 class="section-title">行业案例</h2>
          <p class="section-description">
            我们的技术方案已在多个行业领域得到广泛应用，通过深度定制化的解决方案解决各行业痛点问题，提升业务效率和智能化水平。
          </p>
        </div>

        <div class="case-container">
          <div class="case-card">
            <div class="case-header">
              <div class="case-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3 class="case-title">法律场景</h3>
            </div>
            <p class="case-industry"><strong>行业：</strong>法律行业（律师事务所、企业法务、法律顾问）</p>
            <div class="case-content">
              <h4>产品使用场景</h4>
              <ul>
                <li>案例检索与快速决策：律师或法务在处理复杂案件时，通过自然语言输入案件要点，平台自动检索海量判决文书与相关法律法规，快速定位关键案例并输出裁判要点摘要。</li>
                <li>合同审查与风险识别：面对大量商业合同，法务部门可批量上传文本，平台自动提取关键条款并标记潜在风险条款，如违约责任、争议解决条款缺失等。</li>
                <li>合同自动补全：为未完成或缺少信息的合同提供补全建议，结合行业最佳实践与法规要求，自动插入标准化条款，减少重复工作。</li>
              </ul>
            </div>
          </div>

          <div class="case-card">
            <div class="case-header">
              <div class="case-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3 class="case-title">金融场景</h3>
            </div>
            <p class="case-industry"><strong>行业：</strong>金融行业（银行、证券、保险、信托等）</p>
            <div class="case-content">
              <h4>产品使用场景</h4>
              <ul>
                <li>快速风险评估：面对各类借款合同、项目投融资资料，金融从业者可批量上传文档，平台利用智能分析模型识别其中的财务、合规或法律风险点，并生成风险报告。</li>
                <li>自然语言查询与数据分析：业务人员无需学习SQL即可直接输入"查询上个月交易额前十的客户"，平台自动转换成数据库查询语句并返回结果，可视化呈现交易趋势。</li>
                <li>内外部合规文件管理：将合规手册、监管文件、内部政策文件上传并建立语义检索，员工在审批、风控或审计过程中可一键检索相应规定，确保业务操作符合监管要求。</li>
              </ul>
            </div>
          </div>

          <div class="case-card">
            <div class="case-header">
              <div class="case-icon">
                <i class="fas fa-comment-dots"></i>
              </div>
              <h3 class="case-title">舆情场景</h3>
            </div>
            <p class="case-industry"><strong>行业：</strong>适用于所有对外部声誉、市场口碑高度关注的企业和机构</p>
            <div class="case-content">
              <h4>产品使用场景</h4>
              <ul>
                <li>全网舆情监测：平台对媒体报道、社交媒体动态、论坛评论进行实时抓取，识别与企业或产品相关的关键词，一旦检测到重大负面信息或舆情爆发，即刻推送预警。</li>
                <li>舆情分析与情感倾向判断：系统根据语义和情感分析模型，对外部评价分为正面、中立、负面，并提供舆情热度和演变趋势图表。</li>
                <li>自动生成应对方案：平台结合历次舆情处理经验和企业的应对策略库，提供可行的应对文本和行动建议（如官方声明模版、问题排查清单），让公关部门更快采取措施。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 我们的优势 -->
      <div v-if="activeTab === 'advantages'" class="content-section">
        <div class="section-intro">
          <h2 class="section-title">我们的优势</h2>
          <p class="section-description">
            相较于传统方案和通用大模型，我们提供专业化、定制化的解决方案，能有效解决各行业特定场景的实际问题。
          </p>
        </div>

        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fas fa-database"></i>
            </div>
            <h3>专业领域知识</h3>
            <p>构建专属行业知识库，结合最新法规和专业信息，确保分析结果的专业性和可靠性</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>数据安全保障</h3>
            <p>提供私有化部署方案，保证敏感数据不出企业内网，满足各行业的合规要求</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fas fa-rocket"></i>
            </div>
            <h3>高效率处理</h3>
            <p>通过优化算法和专用模型，大幅提升处理速度，将耗时任务缩短至原来的1/10</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fas fa-cogs"></i>
            </div>
            <h3>定制化方案</h3>
            <p>根据企业特定业务场景定制解决方案，无缝融入现有工作流程，降低使用门槛</p>
          </div>
        </div>
      </div>

      <!-- 对比分析 -->
      <div v-if="activeTab === 'comparison'" class="content-section">
        <div class="section-intro">
          <h2 class="section-title">对比分析</h2>
          <p class="section-description">
            我们的解决方案专为解决大模型在专业领域的局限性而设计，提供更精准、更安全、更高效的服务体验。
          </p>
        </div>

        <div class="limitation-container">
          <div class="limitation-card">
            <h3 class="limitation-title">法律场景</h3>
            <div class="comparison-content">
              <div class="comparison-item problem">
                <h4>大模型的局限性</h4>
                <p>通用大模型往往无法追踪最新法规更新，也缺乏对地方法规和实际案例的深度理解，极易产生"看似正确但事实错误"的输出。</p>
              </div>
              <div class="comparison-item solution">
                <h4>我们的优势</h4>
                <p>我们通过构建专属法规数据库和Advanced RAG、搭建条款级风险识别模型，并提供私有化部署，让法务、律所能够实时掌握法条变动并获得可解释的合规审查报告。</p>
              </div>
            </div>
          </div>

          <div class="limitation-card">
            <h3 class="limitation-title">金融场景</h3>
            <div class="comparison-content">
              <div class="comparison-item problem">
                <h4>大模型的局限性</h4>
                <p>大模型难以对接银行等机构的内部数据库与实时业务指标，单靠生成式输出无法满足合规审查与精细化数据分析的需求。</p>
              </div>
              <div class="comparison-item solution">
                <h4>我们的优势</h4>
                <p>我们将自然语言查询（NL2SQL）与金融风控模型结合，在企业内部私有化部署，通过优化算法提高模型对关键信息的理解并辅助业务人员决策。</p>
              </div>
            </div>
          </div>

          <div class="limitation-card">
            <h3 class="limitation-title">舆情场景</h3>
            <div class="comparison-content">
              <div class="comparison-item problem">
                <h4>大模型的局限性</h4>
                <p>一般大模型缺乏对多渠道舆情的实时抓取能力，也无法针对行业特定的负面情感和关键词进行精准监测与主题聚类。</p>
              </div>
              <div class="comparison-item solution">
                <h4>我们的优势</h4>
                <p>我们通过多渠道数据采集加分布式爬取，第一时间捕捉社交媒体、论坛、新闻源的舆情，并利用自研情感分析与主题聚类算法，识别深度负面评论和传播路径。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndustryUseCases',
  data() {
    return {
      activeTab: 'cases'
    };
  }
};
</script>

<style scoped>
.industry-use-cases {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  color: #333333;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  position: relative;
}

.tab-navigation::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100vw;
  right: -100vw;
  height: 1px;
  background-color: #e5e7eb;
  z-index: 1;
  width: 300%;
  left: -100%;
}

.tab {
  padding: 20px 40px;
  cursor: pointer;
  font-size: 2.4rem;
  position: relative;
  color: #666666;
  transition: all 0.3s;
  z-index: 2;
}

.tab.active {
  color: #333333;
  font-weight: 600;
}

.tab.active:after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
  z-index: 2;
}

.tab:hover {
  color: #333333;
}

/* Section Intro */
.section-intro {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 4.4rem;
  margin-bottom: 20px;
  color: #333333;
}

.section-description {
  font-size: 2.2rem;
  line-height: 1.6;
  color: #666666;
  max-width: 900px;
  margin: 0 auto;
}

/* 案例卡片样式 */
.case-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
}

.case-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #f0f0f0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(74, 222, 128, 0.15);
}

.case-header {
  padding: 30px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
  display: flex;
  align-items: center;
  gap: 20px;
}

.case-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: white;
}

.case-title {
  font-size: 2.8rem;
  color: #ffffff;
  margin: 0;
}

.case-industry {
  padding: 0 30px;
  margin: 20px 0;
  font-size: 1.8rem;
  color: #666666;
}

.case-content {
  padding: 0 30px 30px;
  flex-grow: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-content h4 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #2563eb;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 10px;
}

.case-content ul {
  margin: 0;
  padding-left: 20px;
}

.case-content li {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #666666;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* 优势卡片样式 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 50px;
}

.advantage-card {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(74, 222, 128, 0.15);
}

.advantage-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

.advantage-icon {
  font-size: 4rem;
  color: #2563eb;
  margin-bottom: 30px;
}

.advantage-card h3 {
  margin-bottom: 20px;
  color: #333333;
  font-size: 2.6rem;
}

.advantage-card p {
  color: #666666;
  line-height: 1.6;
  font-size: 2rem;
}

/* 对比分析样式 */
.limitation-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.limitation-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.limitation-title {
  padding: 30px;
  margin: 0;
  font-size: 2.8rem;
  color: #ffffff;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

.comparison-content {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.comparison-item {
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.comparison-item.problem {
  background-color: #f8fafc;
  border-left: 3px solid #2563eb;
}

.comparison-item.solution {
  background-color: #f0fdf4;
  border-left: 3px solid #0891b2;
}

.comparison-item h4 {
  font-size: 2.2rem;
  margin-bottom: 15px;
  color: #333333;
}

.comparison-item p {
  font-size: 1.8rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex: 1;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .case-container,
  .advantages-grid,
  .limitation-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .industry-use-cases {
    padding: 40px 20px;
  }
  
  .tab {
    padding: 15px 20px;
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 3.2rem;
  }
  
  .section-description {
    font-size: 1.8rem;
  }
  
  .case-container,
  .advantages-grid,
  .limitation-container {
    grid-template-columns: 1fr;
  }
  
  .case-title {
    font-size: 2.4rem;
  }
  
  .case-content h4 {
    font-size: 2rem;
  }
  
  .advantage-card h3 {
    font-size: 2.2rem;
  }
  
  .limitation-title {
    font-size: 2.4rem;
    padding: 20px;
  }
  
  .comparison-item h4 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .tab-navigation {
    flex-direction: column;
    align-items: center;
  }
  
  .tab {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .tab.active:after {
    height: 2px;
  }
}
</style>

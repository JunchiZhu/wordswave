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
              <h4>AI法律助理使用场景</h4>
              <div class="use-case-text">
                <ul class="bullet-points">
                  <li>
                    <strong>高效案例匹配：</strong> 律师可一键快速检索并精准匹配历史相似案例，节省大量人工查阅时间，显著提高办案效率。
                  </li>
                  <li>
                    <strong>合同风险智能扫描与摘要生成：</strong> AI自动扫描合同文件，快速识别并提示潜在风险点，同时智能生成判决文书摘要，降低人工审阅出错率，提高法律风险控制水平。
                  </li>
                  <li>
                    <strong>专业法律咨询支持：</strong> AI助理实时提供专业法律咨询建议，帮助律师更精准地分析案件和决策，有效提升客户满意度，强化律所竞争优势，吸引投资者关注。
                  </li>
                </ul>
              </div>
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
              <h4>智能舆情系统使用场景</h4>
              <div class="use-case-text">
                <ul class="bullet-points">
                    <li>
                      <strong>实时多平台舆情监控：</strong> 全天候监测社交媒体、新闻网站及论坛的实时信息，第一时间捕获潜在危机事件，避免信息滞后导致品牌损害。
                    </li>
                    <li>
                      <strong>AI深度分析与风险预警：</strong> 利用AI技术自动分类信息、进行情感分析并及时预警风险，确保公关团队迅速掌握事件动向与严重程度。
                    </li>
                    <li>
                      <strong>异常事件即时推送与报告生成：</strong> 在异常情况发生时，系统立即推送详细的舆情分析报告，助力企业公关团队迅速制定精准的危机应对策略，遏制负面影响扩散，有效维护品牌形象，提升投资人及用户关注。
                    </li>
                  </ul>
               </div>
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
              <h4>AI数据库助手使用场景</h4>
              <div class="use-case-text">
                  <ul class="bullet-points">
                    <li>
                      <strong>智能化多库统一管理：</strong> AI数据库助手支持MySQL、PostgreSQL、Oracle等多种数据库的无缝集成与统一管理，彻底打破数据孤岛，显著提升数据查询效率。
                    </li>
                    <li>
                      <strong>自动SQL优化与查询生成：</strong>  数据分析师仅需输入业务需求，系统自动生成高效优化的SQL查询，快速获得准确分析结果，大幅缩短报表制作周期。
                    </li>
                    <li>
                      <strong>AI驱动动态报表与实时同步：</strong> 系统智能生成交互式动态数据看板，并自动同步数据库结构，确保数据实时更新与一致性，全面提高企业决策速度和数据处理效率，有效节约成本，增强市场竞争力与投资吸引力。
                    </li>
                  </ul>
              </div>
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
                <h4>通用大模型的局限性：</h4>
                <p>大多数通用大模型虽然具备广泛知识，但在法律领域常因缺乏专业语料和案例训练，导致处理复杂法律文书、案例匹配及合同风险扫描时存在精准度不足、专业性欠缺的问题。</p>
              </div>
              <div class="comparison-item solution">
                <h4>我们的优势：</h4>
                <p>我们的AI法律助理基于垂直法律领域数据深度训练，能够精准匹配相似案例、快速检测合同风险、智能提炼判决文书精华，并提供专业法律咨询，有效提升案件分析效率和决策质量。</p>
              </div>
            </div>
          </div>

          <div class="limitation-card">
            <h3 class="limitation-title">金融场景</h3>
            <div class="comparison-content">
              <div class="comparison-item problem">
                <h4>通用大模型的局限性：</h4>
                <p>通用大模型无法进入舆情系统里面，难以快速准确地进行情感识别和风险预警，且在高并发监控场景下响应速度不足，难以满足企业对舆情实时监控的定制化需求。</p>
              </div>
              <div class="comparison-item solution">
                <h4>我们的优势：</h4>
                <p>我们的智能舆情系统专注于舆情数据的实时监控和深度分析，通过优化算法实现全网信息快速整合、情绪打分和多维预警，帮助企业及时捕捉危机苗头并迅速制定应对策略，保护品牌形象。</p>
              </div>
            </div>
          </div>

          <div class="limitation-card">
            <h3 class="limitation-title">舆情场景</h3>
            <div class="comparison-content">
              <div class="comparison-item problem">
                <h4>通用大模型的局限性：</h4>
                <p>通用大模型在数据查询和报表生成方面，虽能处理一定规模数据，但面对多数据库异构环境、高并发查询及数据结构同步需求时，缺乏专门的SQL优化和跨库管理能力，容易导致效率低下和数据不一致问题。</p>
              </div>
              <div class="comparison-item solution">
                <h4>我们的优势：</h4>
                <p>我们的AI数据库助手专注于数据库领域，通过AI驱动自动生成优化SQL、支持10+数据库无缝管理、智能生成动态报表及数据结构自动同步，实现高效数据探索与实时更新，助力企业实现数据驱动决策。</p>
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
  max-width: 100%;
  margin: 0 auto;
  color: #333333;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: calc(4vw + 30px);
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
  padding: calc(1vw + 10px) calc(2vw + 20px);
  cursor: pointer;
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
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
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  z-index: 2;
}

.tab:hover {
  color: #333333;
}

/* Section Intro */
.section-intro {
  text-align: center;
  margin-bottom: calc(3vw + 30px);
}

.section-title {
  font-size: clamp(2.5rem, 4.4vw, 4.4rem);
  margin-bottom: calc(1vw + 10px);
  color: #333333;
}

.section-description {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  line-height: 1.6;
  color: #666666;
  max-width: min(90vw, 900px);
  margin: 0 auto;
  text-align: left;
}

/* 案例卡片样式 */
.case-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(2vw + 10px);
  margin-top: calc(2.5vw + 25px);
}

.case-card {
  background-color: #ffffff;
  border-radius: clamp(8px, 1vw, 12px);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #f0f0f0;
  height: 100%;
  min-height: clamp(450px, 55vh, 550px);
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(74, 222, 128, 0.15);
}

.case-header {
  padding: calc(1vw + 10px) calc(1.5vw + 10px);
  background: linear-gradient(90deg, #2563eb, #0891b2);
  display: flex;
  align-items: center;
  gap: calc(0.8vw + 7px);
}

.case-icon {
  width: clamp(35px, 5vw, 50px);
  height: clamp(35px, 5vw, 50px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: white;
}

.case-title {
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  color: #ffffff;
  margin: 0;
}

.case-industry {
  padding: 0 calc(1.5vw + 10px);
  margin: calc(1vw + 10px) 0;
  font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  color: #666666;
  text-align:left;
}

.case-content {
  padding: 0 calc(1.5vw + 10px) calc(1.5vw + 10px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.case-content h4 {
  font-size: clamp(1.4rem, 2vw, 2rem);
  margin: 0 0 calc(1vw + 10px) 0;
  color: #2563eb;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: calc(0.5vw + 5px);
  text-align: left;
  font-weight: 600;
}

.case-content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.case-content ul {
  font-size: 1.6rem;
  color: #444444;
  line-height: 1.5;
  text-align: left;
  letter-spacing: 0.02em;
}

/* 优势卡片样式 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(2vw + 20px);
  margin-top: calc(2.5vw + 25px);
}

.advantage-card {
  background-color: #ffffff;
  padding: calc(2vw + 20px);
  border-radius: clamp(8px, 1vw, 12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
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
  font-size: clamp(2.5rem, 4vw, 4rem);
  color: #2563eb;
  margin-bottom: calc(1.5vw + 15px);
}

.advantage-card h3 {
  margin-bottom: calc(1vw + 10px);
  color: #333333;
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
}

.advantage-card p {
  color: #666666;
  line-height: 1.6;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

/* 对比分析样式 */
.limitation-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(2vw + 20px);
}

.limitation-card {
  background-color: #ffffff;
  border-radius: clamp(8px, 1vw, 12px);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.limitation-title {
  padding: calc(1.5vw + 15px);
  margin: 0;
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  color: #ffffff;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

.comparison-content {
  padding: calc(1.5vw + 15px);
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(1.5vw + 15px);
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.comparison-item {
  padding: calc(1vw + 10px);
  border-radius: clamp(6px, 0.8vw, 8px);
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
  font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  margin-bottom: calc(0.8vw + 7px);
  color: #333333;
}

.comparison-item p {
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  color: #666666;
  line-height: 1.6;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex: 1;
}

.use-case-text {
  font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  color: #444444;
  line-height: 1.5;
  text-align: left;
  letter-spacing: 0.02em;
  background-color: #f9fafb;
  padding: calc(1vw + 10px);
  border-radius: clamp(6px, 1vw, 10px);
  box-shadow: inset 0 0 5px rgba(0,0,0,0.05);
  border-left: 4px solid #2563eb;
  margin-top: calc(0.5vw + 5px);
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* Bullet Points */
.bullet-points {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.bullet-points li {
  position: relative;
  padding-left: calc(1vw + 8px);
  margin-bottom: calc(1vw + 10px);
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  line-height: 1.5;
  color: #666666;
}

.bullet-points li:last-child {
  margin-bottom: 0;
}

.bullet-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background: linear-gradient(to right, #9c5cff, #ff72b1);
  border-radius: 50%;
}

.bullet-points li strong {
  color: #333333;
  font-weight: 600;
  display: block;
  margin-bottom: calc(0.2vw + 3px);
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);
}

/* 响应式调整 */
@media (max-width: 1400px) {
  .case-container,
  .advantages-grid,
  .limitation-container {
    gap: calc(1.5vw + 10px);
  }
  
  .case-card {
    min-height: clamp(400px, 50vh, 600px);
  }
}

@media (max-width: 1200px) {
  .case-container,
  .advantages-grid,
  .limitation-container {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(2vw + 10px);
  }
  
  .case-card {
    min-height: clamp(350px, 45vh, 550px);
  }
  
  .tab-navigation {
    margin-bottom: calc(3vw + 20px);
  }
  
  .section-intro {
    margin-bottom: calc(2.5vw + 25px);
  }
}

@media (max-width: 768px) {
  .tab {
    padding: calc(0.8vw + 7px) calc(1.2vw + 10px);
    font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  }
  
  .section-title {
    font-size: clamp(2.2rem, 3.2vw, 3.2rem);
  }
  
  .section-description {
    font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  }
  
  .case-container,
  .advantages-grid,
  .limitation-container {
    grid-template-columns: 1fr;
    gap: calc(1.5vw + 15px);
  }
  
  .case-card {
    min-height: auto;
  }
  
  .limitation-title {
    font-size: clamp(1.6rem, 2.4vw, 2.4rem);
    padding: calc(1vw + 10px);
  }
  
  .comparison-item h4 {
    font-size: clamp(1.4rem, 2vw, 2rem);
  }
  
  .comparison-item p {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  .advantage-card h3 {
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
  }
  
  .advantage-card p {
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  }
}

@media (max-width: 480px) {
  .tab-navigation {
    flex-direction: column;
    align-items: center;
    margin-bottom: calc(2vw + 15px);
  }
  
  .tab {
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  }
  
  .section-title {
    font-size: clamp(2rem, 2.8vw, 2.8rem);
  }
  
  .section-description {
    font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  }
  
  .case-title {
    font-size: clamp(1.4rem, 2vw, 2rem);
  }
  
  .bullet-points li,
  .bullet-points li strong {
    font-size: clamp(1rem, 1.3vw, 1.3rem);
  }
}
</style>

<template>
  <section class="about-us-container">
    <!-- 主要内容区域 -->
    <div class="content-container">
      <!-- 导航标签 -->
      <div class="tab-navigation">
        <div class="tab" :class="{ active: activeTab === 'who' }" @click="activeTab = 'who'">公司简介</div>
        <div class="tab" :class="{ active: activeTab === 'mission' }" @click="activeTab = 'mission'">我们的使命</div>
        <div class="tab" :class="{ active: activeTab === 'why' }" @click="activeTab = 'why'">为什么选择我们</div>
      </div>

      <!-- 内容区域 -->
      <div class="tab-content">
        <!-- 公司简介 -->
        <div v-if="activeTab === 'who'" class="content-section company-intro">
          <div class="content-grid">
            <div class="text-content">
              <h2 class="section-title">{{ companyInfo.name }}</h2>
              <h3 class="company-alias">{{ companyInfo.chineseName }} ({{ companyInfo.englishName }})</h3>
              <p class="vision">{{ companyInfo.vision }}</p>
              <p class="description">{{ companyInfo.software }}</p>
            </div>
            <div class="image-content">
              <img src="@/assets/company/office.jpg" alt="公司办公室" />
            </div>
          </div>
        </div>

        <!-- 我们的使命 - 改进后的布局 -->
        <div v-if="activeTab === 'mission'" class="content-section mission">
          <!-- 顶部介绍文字 -->
          <div class="mission-intro">
            <h2 class="section-title">我们的使命</h2>
            <p class="mission-description">
              我们致力于通过先进的AI技术，为企业提供智能化的数据决策平台。我们相信数据的力量，相信技术能够改变企业的运营方式，让数据从信息转化为智慧，成为企业决策的核心驱动力。
            </p>
          </div>
          
          <!-- 交错布局部分 -->
          <div class="feature-layout">
            <!-- 特性块1：左文本右卡片 -->
            <div class="feature-row">
              <div class="feature-text">
                <div class="feature-title">
                  <h3 class="feature-heading">智能解析</h3>
                </div>
                <p class="feature-summary">
                  我们的平台打破传统数据孤岛，实现企业内部各种形式数据的无缝连接。从非结构化文档到结构化数据库，所有的信息资源都能被轻松获取和使用。
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-content">
                  <p class="feature-description">
                    运用AI技术智能解析各类文档，提取关键信息和潜在风险。我们的AI模型经过大量行业数据训练，能够智能识别和理解复杂文档中的关键信息，自动提取重要内容并分析潜在风险。
                  </p>
                </div>
              </div>
            </div>
            
            <!-- 特性块2：左卡片右文本 -->
            <div class="feature-row reverse">
              <div class="feature-text">
                <div class="feature-title">
                  <h3 class="feature-heading">智能化处理</h3>
                </div>
                <p class="feature-summary">
                  我们的AI模型经过大量行业数据训练，能够理解复杂文档中的关键信息，系统会不断从新数据中学习，持续提升理解能力和处理精度。
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-content">
                  <p class="feature-description">
                    我们的AI模型能够智能识别和理解复杂文档中的关键信息，自动提取重要内容并分析潜在风险。系统会不断从新数据中学习，持续提升理解能力和处理精度。
                  </p>
                </div>
              </div>
            </div>
            
            <!-- 特性块3：左文本右卡片 -->
            <div class="feature-row">
              <div class="feature-text">
                <div class="feature-title">
                  <h3 class="feature-heading">决策加速</h3>
                </div>
                <p class="feature-summary">
                  通过智能技术将繁琐的数据处理工作自动化，大幅提升企业决策效率。让企业能够更快速地响应市场变化。
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-content">
                  <p class="feature-description">
                    通过智能技术将繁琐的数据处理工作自动化，大幅提升企业决策效率。我们的平台能将原本需要数天甚至数周的文档分析工作缩短至几小时或几分钟，让企业能够更快速地响应市场变化。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 为什么选择我们 -->
        <div v-if="activeTab === 'why'" class="content-section why-us">
          <h2 class="section-title">为什么选择我们</h2>
          <div class="advantages-grid">
            <div class="advantage-card">
              <div class="advantage-icon">
                <i class="fas fa-code"></i>
              </div>
              <h3>先进技术</h3>
              <p>采用最前沿的自然语言处理和多模态AI技术，持续创新和优化</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">
                <i class="fas fa-industry"></i>
              </div>
              <h3>行业专精</h3>
              <p>深耕金融、法律、咨询等知识密集型行业，了解行业痛点和需求</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <h3>数据安全</h3>
              <p>企业级数据安全保障，确保敏感信息不泄露</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>专业团队</h3>
              <p>由AI专家和行业顾问组成的精英团队，提供全方位支持</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      activeTab: 'who',
      companyInfo: {
        name: '河南智韵未来科技有限公司',
        chineseName: '鸿观',
        englishName: 'WordsWave',
        vision: '让企业内部的数据可触达，可用，可变为决策的动力！',
        software: '我们正在打造一款企业级AI驱动的智能文档分析平台，专为金融、法律、咨询等知识密集型行业设计。通过自然语言搜索、多模态数据解析和实时风险评估，帮助企业以数倍于传统方法的效率完成文档分析，快速做出关键决策。我们的目标是让复杂数据处理变得像使用Google和百度搜索一样简单，就像是了解所有企业数据和文档业务的超级员工。'
      }
    };
  }
};
</script>

<style scoped>
.about-us-container {
  width: 100%;
  max-width: 100%;
  color: #333333;
  background-color: #ffffff;
  overflow-x: hidden;
}

/* Content Container */
.content-container {
  width: 100%;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: calc(4vw + 10px);
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
}

.tab {
  padding: calc(1vw + 10px) calc(2vw + 15px);
  cursor: pointer;
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  position: relative;
  color: #666666;
  transition: all 0.3s;
  z-index: 2;
}

.tab.active {
  color: #2563eb;
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
  color: #2563eb;
}

/* Content Section */
.content-section {
  margin-bottom: calc(5vw + 30px);
}

.section-title {
  font-size: clamp(2.8rem, 4.4vw, 4.4rem);
  margin-bottom: calc(2vw + 20px);
  color: #1f2937;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(3vw + 20px);
  align-items: center;
}

.text-content {
  text-align: left;
}

.company-alias {
  font-size: clamp(2rem, 3vw, 3rem);
  color: #4b5563;
  margin-bottom: calc(1.5vw + 15px);
}

.vision {
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
  color: #2563eb;
  margin-bottom: calc(1.5vw + 15px);
  font-weight: 600;
}

.description {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  line-height: 1.6;
  color: #4b5563;
}

.image-content img {
  width: 100%;
  border-radius: clamp(8px, 1vw, 12px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

/* 任务部分样式 */
.mission-intro {
  margin-bottom: calc(4vw + 30px);
  text-align: center;
}

.mission-description {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  line-height: 1.6;
  color: #4b5563;
  max-width: min(90vw, 900px);
  margin: 0 auto;
}

/* 新的交错布局样式 */
.feature-layout {
  display: flex;
  flex-direction: column;
  gap: calc(5vw + 30px);
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(4vw + 20px);
  align-items: center;
}

.feature-row.reverse {
  direction: rtl;
  gap: calc(5vw + 20px);
}

.feature-row.reverse > * {
  direction: ltr;
}

.feature-text {
  text-align: left;
}

.feature-title::before {
  content: '';
  position: absolute;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 200%;
  background: linear-gradient(to bottom, transparent, #2563eb, transparent);
  border-radius: 4px;
}

.feature-title {
  margin-bottom: calc(1.5vw + 15px);
  position: relative;
  display: inline-block;
}

.feature-heading {
  font-size: clamp(2.4rem, 3.6vw, 3.6rem);
  color: #2563eb;
  margin-bottom: 0;
  position: relative;
}

.feature-summary {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  line-height: 1.6;
  color: #4b5563;
  margin-top: calc(1vw + 10px);
}

.feature-card {
  width: 100%;
}

.feature-content {
  background-color: #ffffff;
  padding: calc(2vw + 20px);
  border-radius: clamp(8px, 1vw, 12px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;
}

.feature-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.1);
}

.feature-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

.feature-description {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
  text-align:left;
}

/* Why Us Section */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: calc(2vw + 20px);
  margin-top: calc(2.5vw + 25px);
}

.advantage-card {
  background-color: #ffffff;
  padding: calc(2vw + 20px);
  border-radius: clamp(8px, 1vw, 12px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.1);
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
  color: #1f2937;
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
}

.advantage-card p {
  color: #4b5563;
  line-height: 1.6;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

/* 修改响应式设计 */
@media (max-width: 1024px) {
  .feature-title::before {
    left: -40px;
    width: 30px;
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .tab {
    padding: calc(0.8vw + 7px) calc(1.2vw + 10px);
    font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  }
  
  .section-title {
    font-size: clamp(2.4rem, 3.6vw, 3.6rem);
  }
  
  .company-alias {
    font-size: clamp(1.8rem, 2.6vw, 2.6rem);
  }
  
  .vision {
    font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  }
  
  .description {
    font-size: clamp(1.3rem, 2vw, 2rem);
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .image-content {
    order: -1;
  }
  
  .mission-description {
    font-size: clamp(1.3rem, 2vw, 2rem);
  }
  
  .feature-row {
    display: flex;
    flex-direction: column;
    gap: calc(1.5vw + 15px);
  }
  
  .feature-row.reverse {
    direction: ltr;
  }
  
  .feature-text {
    text-align: center;
    order: 1;
  }
  
  .feature-card {
    order: 2;
  }
  
  .feature-title {
    display: block;
    margin-bottom: calc(1vw + 10px);
  }
  
  .feature-title::before {
    display: none;
  }
  
  .feature-heading {
    font-size: clamp(2rem, 2.8vw, 2.8rem);
  }
  
  .feature-summary {
    font-size: clamp(1.2rem, 1.8vw, 1.8rem);
    margin-bottom: calc(1.5vw + 15px);
  }
  
  .feature-content {
    padding: calc(1.5vw + 15px);
  }
  
  .feature-description {
    font-size: clamp(1.2rem, 1.8vw, 1.8rem);
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
    padding: calc(0.6vw + 6px) calc(1vw + 5px);
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  }
  
  .section-title {
    font-size: clamp(2rem, 2.8vw, 2.8rem);
    margin-bottom: calc(1.5vw + 10px);
  }
  
  .company-alias {
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
  }
  
  .vision {
    font-size: clamp(1.4rem, 2vw, 2rem);
  }
  
  .description {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  .feature-heading {
    font-size: clamp(1.8rem, 2.4vw, 2.4rem);
  }
  
  .feature-summary, 
  .feature-description {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  .advantage-card {
    padding: calc(1.5vw + 15px);
  }
  
  .advantage-card h3 {
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
  }
  
  .advantage-card p {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
}
</style>

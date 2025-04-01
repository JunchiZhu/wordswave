<!-- 定价方案 -->
<template>
  <section class="pricing">
    <div class="section-header">
      <h2 class="title">企业级解决方案，满足不同行业需求</h2>
      <p class="description">我们提供专业化定制服务，为各行业客户打造专属智能解决方案，全方位满足您的业务需求。</p>
    </div>

    <div class="pricing-options">
      <div class="pricing-card">
        <div class="price-header">
          <div class="plan-icon">
            <i class="fas fa-rocket"></i>
          </div>
          <h3>初创方案</h3>
          <div class="price-desc">为小型企业和创业团队设计</div>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li>基础数据分析功能</li>
          <li>标准 AI 模型接入</li>
          <li>每月最多处理 5GB 数据</li>
          <li>基础舆情监控</li>
          <li>单一业务场景应用</li>
          <li>标准技术支持</li>
        </ul>
        <a @click="scrollToContact" class="pricing-button">联系我们</a>
      </div>

      <div class="pricing-card featured">
        <div class="popular-tag">热门选择</div>
        <div class="price-header">
          <div class="plan-icon">
            <i class="fas fa-building"></i>
          </div>
          <h3>企业方案</h3>
          <div class="price-desc">适合中型企业和成长型组织</div>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li>高级数据分析套件</li>
          <li>定制化 AI 模型训练</li>
          <li>每月最多处理 50GB 数据</li>
          <li>全方位舆情监控与预警</li>
          <li>多业务场景深度整合</li>
          <li>优先技术支持与咨询</li>
          <li>API 开放接口</li>
        </ul>
        <a @click="scrollToContact" class="pricing-button">联系我们</a>
      </div>

      <div class="pricing-card">
        <div class="price-header">
          <div class="plan-icon">
            <i class="fas fa-crown"></i>
          </div>
          <h3>旗舰方案</h3>
          <div class="price-desc">为大型企业与机构量身定制</div>
        </div>
        <div class="divider"></div>
        <ul class="features-list">
          <li>全套企业级数据分析方案</li>
          <li>专属定制垂直领域模型</li>
          <li>无限数据处理能力</li>
          <li>行业专属知识库构建</li>
          <li>多系统无缝集成</li>
          <li>私有化部署选项</li>
          <li>专属客户成功团队</li>
          <li>全天候技术支持</li>
        </ul>
        <a @click="scrollToContact" class="pricing-button">联系我们</a>
      </div>
    </div>
    
    <div class="cta-section">
      <div class="cta-content">
        <h3>需要专业咨询？</h3>
        <p>立即预约产品演示，了解我们如何为您的业务提供智能化解决方案，提升业务效率和决策质量。</p>
      </div>
      <a @click="scrollToContact" class="cta-button">预约咨询</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductPricing',
  methods: {
    scrollToContact() {
      // 导航到联系我们页面的留言部分
      this.$router.push({ path: '/contact', query: { section: 'contact-form' } });
    }
  }
};
</script>

<style scoped>
.pricing {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #333333;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* 标题样式 */
.section-header {
  text-align: center;
  margin-bottom: calc(3vw + 30px);
}

.section-header .title {
  font-size: clamp(2.5rem, 4.4vw, 4.4rem);
  color: #333333;
  margin-bottom: calc(1vw + 10px);
}

.section-header .description {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  color: #666666;
  max-width: min(90vw, 900px);
  margin: 0 auto;
  line-height: 1.6;
}

/* 定价方案卡片 */
.pricing-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(2vw + 10px);
  margin: calc(3vw + 30px) 0;
}

.pricing-card {
  background-color: #ffffff;
  padding: calc(2vw + 20px);
  border-radius: clamp(8px, 1vw, 12px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.1);
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

/* 特色卡片样式 */
.pricing-card.featured {
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 0 15px 50px rgba(37, 99, 235, 0.15);
  border: 2px solid #2563eb;
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-tag {
  position: absolute;
  top: 20px;
  right: -30px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
  color: white;
  padding: 5px 30px;
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  transform: rotate(45deg) translateX(22px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

/* 价格头部 */
.price-header {
  margin-bottom: calc(1.5vw + 15px);
}

.plan-icon {
  font-size: clamp(2.5rem, 4vw, 4rem);
  color: #2563eb;
  margin-bottom: calc(1vw + 10px);
}

.price-header h3 {
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  font-weight: 600;
  margin-bottom: calc(0.8vw + 7px);
  color: #333333;
}

.price-desc {
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  color: #666666;
  max-width: 85%;
  margin: 0 auto;
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent);
  margin: calc(1.5vw + 15px) 0;
}

/* 功能列表 */
.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 calc(2vw + 20px);
  text-align: left;
  flex-grow: 1;
}

.features-list li {
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  color: #666666;
  padding: calc(0.6vw + 6px) 0 calc(0.6vw + 6px) calc(1.5vw + 10px);
  position: relative;
  line-height: 1.5;
}

.features-list li::before {
  content: '✓';
  color: #2563eb;
  position: absolute;
  left: 0;
  font-weight: 600;
}

/* 按钮样式 */
.pricing-button {
  display: block;
  width: 100%;
  padding: calc(0.8vw + 7px) 0;
  background: linear-gradient(90deg, #2563eb, #0891b2);
  color: white;
  border-radius: clamp(6px, 0.8vw, 8px);
  font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: auto;
}

.pricing-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
}

/* CTA区域 */
.cta-section {
  margin-top: calc(3vw + 30px);
  background-color: #ffffff;
  padding: calc(2.5vw + 25px) calc(3vw + 30px);
  border-radius: clamp(8px, 1vw, 12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: calc(1.5vw + 15px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f0f0;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #0891b2);
}

.cta-content {
  text-align: left;
  flex: 1;
  min-width: 280px;
}

.cta-content h3 {
  font-size: clamp(1.8rem, 3vw, 3rem);
  margin-bottom: calc(0.8vw + 7px);
  color: #333333;
}

.cta-content p {
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  color: #666666;
  margin: 0;
  line-height: 1.6;
}

.cta-button {
  padding: calc(0.8vw + 7px) calc(1.5vw + 15px);
  background: linear-gradient(90deg, #2563eb, #0891b2);
  border: none;
  border-radius: clamp(6px, 0.8vw, 8px);
  color: white;
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .pricing-options {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(2vw + 15px);
  }
  
  .pricing-card.featured {
    grid-column: span 2;
    margin: 0 auto;
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .pricing-options {
    grid-template-columns: 1fr;
    gap: calc(2vw + 20px);
  }
  
  .pricing-card {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }
  
  .pricing-card.featured {
    grid-column: auto;
    transform: scale(1);
    max-width: 500px;
  }
  
  .pricing-card.featured:hover {
    transform: translateY(-10px);
  }
  
  .cta-section {
    flex-direction: column;
    text-align: center;
    padding: calc(2vw + 20px) calc(1.5vw + 15px);
  }
  
  .cta-content {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .section-header .title {
    font-size: clamp(2rem, 3vw, 3rem);
  }
  
  .section-header .description {
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  }
  
  .features-list li {
    font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  }
  
  .price-header h3 {
    font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  }
  
  .pricing-button,
  .cta-button {
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  }
}
</style>

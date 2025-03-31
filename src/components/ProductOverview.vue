<!-- 产品介绍 -->
<template>
  <section class="product-overview">
    <h2>AI 赋能，打造智能化企业</h2>
    <p>我们的 AI 驱动解决方案，帮助企业优化运营、提升效率，实现数据驱动的精准决策。</p>

    <div class="key-features">
      <div class="feature-item">
        <img src="@/assets/ai-icon.png" alt="AI分析" class="feature-icon" />
        <h3>智能分析</h3>
        <p>实时处理海量数据，自动识别业务趋势，提升决策效率。</p>
      </div>

      <div class="feature-item">
        <img src="@/assets/automation-icon.png" alt="自动化流程" class="feature-icon" />
        <h3>自动化运营</h3>
        <p>利用 AI 预测模型，减少重复任务，让企业专注于核心业务。</p>
      </div>

      <div class="feature-item">
        <img src="@/assets/security-icon.png" alt="安全合规" class="feature-icon" />
        <h3>安全 & 合规</h3>
        <p>先进的数据加密技术，确保企业数据安全，符合全球标准。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductOverview',
};
</script>

<style scoped>
.product-overview {
  width: 80%;
  text-align: center;
  padding: 6vh 12vw 5vw;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


h2 {
  font-size: 2.8vh;
  margin-bottom: 2vh;
}

/* **核心产品特性** */
.key-features {
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
}

.feature-item {
  width: 30%;
  text-align: center;
}

.feature-icon {
  width: 5vh;
  height: 5vh;
  margin-bottom: 1vh;
}

h3 {
  font-size: 2.2vh;
  margin-bottom: 1vh;
}

p {
  font-size: 1.8vh;
  color: #555;
}
</style>

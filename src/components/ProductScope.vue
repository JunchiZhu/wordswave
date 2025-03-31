<!-- 产品适用范围 -->
<template>
  <section class="product-scope">
    <h2>广泛适用于多个行业</h2>
    <p>我们的 AI 解决方案适用于多个行业，助力企业数字化转型。</p>

    <div class="industries">
      <div class="industry-item">
        <img src="@/assets/finance-icon.png" alt="金融" class="industry-icon" />
        <h3>金融科技</h3>
        <p>AI 风险评估，智能投资决策，精准客户画像。</p>
      </div>

      <div class="industry-item">
        <img src="@/assets/healthcare-icon.png" alt="医疗健康" class="industry-icon" />
        <h3>医疗健康</h3>
        <p>AI 诊断辅助，医疗影像分析，个性化治疗推荐。</p>
      </div>

      <div class="industry-item">
        <img src="@/assets/retail-icon.png" alt="电商零售" class="industry-icon" />
        <h3>电商零售</h3>
        <p>智能推荐引擎，供应链优化，个性化客户体验。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductScope',
};
</script>

<style scoped>
.product-scope {
  width: 80%;
  text-align: center;
  padding: 5vh 3vw;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2.8vh;
  margin-bottom: 2vh;
}

/* **适用行业** */
.industries {
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
}

.industry-item {
  width: 30%;
  text-align: center;
}

.industry-icon {
  width: 5vh;
  height: 5vh;
  margin-bottom: 1vh;
}
</style>

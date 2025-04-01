<template>
  <section class="product-features" :style="{ top: Math.max(heroHeight - scrollY, 0) + 'px' }">
    <div class="features-container">
      <div class="title-section">
        <h2 class="section-title">我们的优势</h2>
        <div class="title-underline"></div>
      </div>
      <p class="subheading">
        我们提供人工智能驱动的解决方案，满足现代企业的核心需求。
      </p>

      <div class="features">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    scrollY: Number,
    heroHeight: Number,
  },
  data() {
    return {
      features: [
        {
          title: "进阶RAG",
          description: "通过高效版Graph-RAG精准检索通用模型不具备的企业内外部知识"
        },
        {
          title: "跨域信息无缝整合",
          description: "融合结构化与非结构化数据，实现多源数据的无缝对接，突破通用模型的局限，形成全域数据联动。"
        },
        {
          title: "全景知识图谱",
          description: "利用先进图谱技术，将分散的信息网络化呈现，多维度关联分析，助您洞察业务全貌，发现潜在价值。"
        },
        {
          title: "极速响应查询",
          description: "强大的实时查询引擎，实现秒级响应，快速检索到关键知识点，为决策提供及时支持。"
        },
        {
          title: "动态数据实时更新",
          description: "自动捕捉企业与外部最新信息，实时同步更新，确保知识库始终保持前沿数据状态。"
        },
        {
          title: "安全隐私护航",
          description: "多层加密和严格权限管理机制，全面保障数据传输与存储安全，让企业信息防护无忧。"
        }
      ],
    };
  }
};
</script>

<style scoped>
.product-features {
  background-color: #f0f7ff;
  color: #333333;
  width: 100%;
  position: relative;
  padding: calc(5vw + 50px) 3vw;
  text-align: center;
  z-index: 2;
}

.title-section {
  text-align: center;
  margin-bottom: calc(2vw + 20px);
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

.subheading {
  font-size: clamp(1.2rem, 2vw, 2rem);
  max-width: min(90vw, 700px);
  margin: 0 auto calc(4vw + 30px);
  line-height: 1.6;
  color: #666666;
}

.features-container {
  max-width: min(94vw, 1400px);
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(2vw + 20px);
  justify-content: center;
}

.feature-card {
  background-color: #ffffff;
  border-radius: clamp(8px, 1vw, 12px);
  padding: calc(2vw + 20px);
  text-align: left;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-title {
  font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  color: #333333;
  margin-bottom: calc(1vw + 15px);
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
}

@media (max-width: 1100px) {
  .section-title {
    font-size: 3.2rem;
  }
  
  .subheading {
    font-size: 1.8rem;
  }
  
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-features {
    padding: 80px 20px;
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
  
  .feature-title {
    font-size: 1.8rem;
  }
  
  .feature-description {
    font-size: 1.4rem;
  }
}
</style>

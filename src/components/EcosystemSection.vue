<template>
  <section class="ecosystem-section" :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }">
    <div class="ecosystem-wrapper">
      <!-- 标题与副标题 -->
      <div class="title-section">
        <h2 class="section-title">广泛的生态兼容</h2>
        <div class="title-underline"></div>
        <p class="subtitle">我们的平台支持多种数据源和云服务，为您打造全面的技术解决方案</p>
      </div>

      <!-- 生态兼容区域 -->
      <div class="ecosystem-container">
        <div class="ecosystem-content">
          <div class="ecosystem-list">
            <div class="ecosystem-item">
              <div class="dot-icon"></div>
              <p>支持多种数据源（数据库、数据仓库和数据湖）和文件类型（Excel、CSV、TSV、PDF、Word、PPT、URL、Markdown等）</p>
            </div>
            <div class="ecosystem-item">
              <div class="dot-icon"></div>
              <p>支持跨多个云平台部署（AWS、Azure、Google Cloud、阿里云、腾讯云等）</p>
            </div>
            <div class="ecosystem-item">
              <div class="dot-icon"></div>
              <p>兼容主流商业化、开源大模型</p>
            </div>
          </div>
        </div>
        <div class="icon-carousel-container">
          <!-- 文件类型图标 - 从左到右 -->
          <div class="icon-carousel-wrapper">
            <div class="icon-carousel left-to-right" ref="fileIconsTrack">
              <div class="icon-carousel-inner" :style="{ transform: `translateX(${fileIconsPosition}px)` }">
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in fileIcons" :key="`file-pre-${index}`" class="carousel-icon file-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 主要图标 -->
                <div v-for="(icon, index) in fileIcons" :key="`file-${index}`" class="carousel-icon file-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in fileIcons" :key="`file-post-${index}`" class="carousel-icon file-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 云平台图标 - 从右到左 -->
          <div class="icon-carousel-wrapper">
            <div class="icon-carousel right-to-left" ref="cloudIconsTrack">
              <div class="icon-carousel-inner" :style="{ transform: `translateX(${cloudIconsPosition}px)` }">
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in cloudIcons" :key="`cloud-pre-${index}`" class="carousel-icon cloud-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 主要图标 -->
                <div v-for="(icon, index) in cloudIcons" :key="`cloud-${index}`" class="carousel-icon cloud-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in cloudIcons" :key="`cloud-post-${index}`" class="carousel-icon cloud-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 模型图标 - 从左到右 -->
          <div class="icon-carousel-wrapper">
            <div class="icon-carousel left-to-right" ref="modelIconsTrack">
              <div class="icon-carousel-inner" :style="{ transform: `translateX(${modelIconsPosition}px)` }">
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in modelIcons" :key="`model-pre-${index}`" class="carousel-icon model-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 主要图标 -->
                <div v-for="(icon, index) in modelIcons" :key="`model-${index}`" class="carousel-icon model-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in modelIcons" :key="`model-post-${index}`" class="carousel-icon model-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
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
  props: {
    scrollY: Number,
    heroHeight: Number,
  },
  data() {
    return {
      fileIconsPosition: 0,
      cloudIconsPosition: 0,
      modelIconsPosition: 0,
      fileIcons: [
        { img: require("@/assets/product_card_1.png"), name: "Excel" },
        { img: require("@/assets/product_card_2.jpg"), name: "PDF" },
        { img: require("@/assets/product_card_3.png"), name: "Word" },
        { img: require("@/assets/product_card_1.png"), name: "PowerPoint" },
        { img: require("@/assets/product_card_2.jpg"), name: "CSV" },
        { img: require("@/assets/product_card_3.png"), name: "Markdown" },
        { img: require("@/assets/product_card_1.png"), name: "JSON" },
        { img: require("@/assets/product_card_2.jpg"), name: "HTML" },
      ],
      cloudIcons: [
        { img: require("@/assets/product_card_3.png"), name: "AWS" },
        { img: require("@/assets/product_card_1.png"), name: "Azure" },
        { img: require("@/assets/product_card_2.jpg"), name: "Google Cloud" },
        { img: require("@/assets/product_card_3.png"), name: "Alibaba Cloud" },
        { img: require("@/assets/product_card_1.png"), name: "Tencent Cloud" },
        { img: require("@/assets/product_card_2.jpg"), name: "Docker" },
        { img: require("@/assets/product_card_3.png"), name: "Kubernetes" },
        { img: require("@/assets/product_card_1.png"), name: "DigitalOcean" },
      ],
      modelIcons: [
        { img: require("@/assets/product_card_2.jpg"), name: "GPT" },
        { img: require("@/assets/product_card_3.png"), name: "BERT" },
        { img: require("@/assets/product_card_1.png"), name: "LLaMA" },
        { img: require("@/assets/product_card_2.jpg"), name: "Stable Diffusion" },
        { img: require("@/assets/product_card_3.png"), name: "Claude" },
        { img: require("@/assets/product_card_1.png"), name: "Gemini" },
        { img: require("@/assets/product_card_2.jpg"), name: "Transformer" },
        { img: require("@/assets/product_card_3.png"), name: "DALL-E" },
      ]
    };
  },
  mounted() {
    // 为了确保无缝滚动，我们需要等待DOM渲染完成后获取宽度
    this.$nextTick(() => {
      this.startCarousels();
    });
  },
  methods: {
    startCarousels() {
      // 启动所有轮播图的滚动动画
      this.animateFileIcons();
      this.animateCloudIcons();
      this.animateModelIcons();
    },
    
    animateFileIcons() {
      const speed = 0.1; // 每毫秒移动的像素
      const iconWidth = 140; // 图标宽度(包含margin)
      const totalIcons = this.fileIcons.length;
      const totalWidth = iconWidth * totalIcons;
      
      // 初始化位置
      if (this.fileIconsPosition === 0) {
        this.fileIconsPosition = 0; // 从第一组开始
      }
      
      let position = this.fileIconsPosition;
      
      const animate = () => {
        position -= speed;
        
        // 当第一组完全移出视图，跳回开始位置
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }
        
        this.fileIconsPosition = position;
        requestAnimationFrame(animate);
      };
      
      animate();
    },
    
    animateCloudIcons() {
      const speed = 0.1; // 稍微慢一点
      const iconWidth = 140; // 图标宽度(包含margin)
      const totalIcons = this.cloudIcons.length;
      const totalWidth = iconWidth * totalIcons;
      
      // 设置初始位置在中间组图标的位置
      if (this.cloudIconsPosition === 0) {
        this.cloudIconsPosition = -totalWidth;
      }
      
      let position = this.cloudIconsPosition;
      
      const animate = () => {
        position += speed; // 向右移动
        
        // 当中间组完全移出视图，回到初始位置
        if (position >= 0) {
          position = -totalWidth;
        }
        
        this.cloudIconsPosition = position;
        requestAnimationFrame(animate);
      };
      
      animate();
    },
    
    animateModelIcons() {
      const speed = 0.1; // 稍微快一点
      const iconWidth = 140; // 图标宽度(包含margin)
      const totalIcons = this.modelIcons.length;
      const totalWidth = iconWidth * totalIcons;
      
      // 初始化位置
      if (this.modelIconsPosition === 0) {
        this.modelIconsPosition = 0; // 从第一组开始
      }
      
      let position = this.modelIconsPosition;
      
      const animate = () => {
        position -= speed;
        
        // 当第一组完全移出视图，跳回开始位置
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }
        
        this.modelIconsPosition = position;
        requestAnimationFrame(animate);
      };
      
      animate();
    }
  }
};
</script>

<style scoped>
.ecosystem-section {
  background-color: #f7f8fc; /* 与ProductFeatureSection相同的黑色背景 */
  color: #333333;
  width: 100%;
  padding: 120px 5vw;
  text-align: center;
  position: relative;
  z-index: 2;
}

.ecosystem-wrapper {
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

/* 生态兼容区域样式 */
.ecosystem-container {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  overflow: hidden;
}

.ecosystem-content {
  margin-bottom: 40px;
  text-align: left;
  z-index: 5;
}

.ecosystem-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ecosystem-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.dot-icon {
  width: 10px;
  height: 10px;
  background: linear-gradient(to right, #9c5cff, #ff72b1);
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
}

.ecosystem-item p {
  font-size: 1.8rem;
  line-height: 1.6;
  margin: 0;
  color: #666666;
}

/* 轮播图标区域样式 */
.icon-carousel-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.icon-carousel-wrapper {
  margin-bottom: 30px;
  overflow: hidden;
}

.icon-carousel {
  position: relative;
  width: 100%;
  height: 100px;
}

.icon-carousel-inner {
  display: flex;
  position: absolute;
  height: 100%;
  will-change: transform;
}

.carousel-icon {
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  margin: 0 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.carousel-icon:hover {
  transform: translateY(-5px) scale(1.05);
  background-color: rgba(255, 255, 255, 0.1);
}

.carousel-icon img {
  width: 60%;
  height: 60%;
  object-fit: contain;
  margin-bottom: 8px;
  filter: grayscale(30%);
  transition: filter 0.3s ease;
}

.carousel-icon:hover img {
  filter: grayscale(0%);
}

.icon-name {
  font-size: 1.2rem;
  color: #666666;
  transition: color 0.3s ease;
}

.carousel-icon:hover .icon-name {
  color: #333333;
}

@media (max-width: 1100px) {
  .section-title {
    font-size: 3.2rem;
  }
  
  .subtitle {
    font-size: 1.8rem;
  }
  
  .ecosystem-item p {
    font-size: 1.6rem;
  }
  
  .carousel-icon {
    width: 90px;
    height: 90px;
    margin: 0 15px;
  }
}

@media (max-width: 768px) {
  .ecosystem-section {
    padding: 80px 20px;
  }
  
  .section-title {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.6rem;
  }
  
  .ecosystem-container {
    padding: 30px 20px;
  }
  
  .ecosystem-item p {
    font-size: 1.5rem;
  }
  
  .icon-carousel-container {
    height: 350px;
  }
  
  .carousel-icon {
    width: 80px;
    height: 80px;
    margin: 0 10px;
  }
  
  .icon-name {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.3rem;
  }
  
  .subtitle {
    font-size: 1.4rem;
  }
  
  .ecosystem-item p {
    font-size: 1.3rem;
  }
  
  .carousel-icon {
    width: 70px;
    height: 70px;
    margin: 0 8px;
  }
}
</style> 
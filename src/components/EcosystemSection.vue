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
                <div v-for="(icon, index) in fileSupport" :key="`file-pre-${index}`" class="carousel-icon file-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 主要图标 -->
                <div v-for="(icon, index) in fileSupport" :key="`file-${index}`" class="carousel-icon file-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in fileSupport" :key="`file-post-${index}`" class="carousel-icon file-icon">
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
                <div v-for="(icon, index) in cloudPlatform" :key="`cloud-pre-${index}`" class="carousel-icon cloud-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 主要图标 -->
                <div v-for="(icon, index) in cloudPlatform" :key="`cloud-${index}`" class="carousel-icon cloud-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in cloudPlatform" :key="`cloud-post-${index}`" class="carousel-icon cloud-icon">
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
                <div v-for="(icon, index) in aiSupport" :key="`model-pre-${index}`" class="carousel-icon model-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 主要图标 -->
                <div v-for="(icon, index) in aiSupport" :key="`model-${index}`" class="carousel-icon model-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 复制同样的图标确保无缝循环 -->
                <div v-for="(icon, index) in aiSupport" :key="`model-post-${index}`" class="carousel-icon model-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <!-- 额外的两组图标 -->
                <div v-for="(icon, index) in aiSupport" :key="`model-extra1-${index}`" class="carousel-icon model-icon">
                  <img :src="icon.img" :alt="icon.name" />
                  <span class="icon-name">{{ icon.name }}</span>
                </div>
                <div v-for="(icon, index) in aiSupport" :key="`model-extra2-${index}`" class="carousel-icon model-icon">
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
      fileSupport: [
        { img: require("@/assets/icons/file_types/excel_icon.png"), name: "Excel" },
        { img: require("@/assets/icons/file_types/pdf_icon.png"), name: "PDF" },
        { img: require("@/assets/icons/file_types/word_icon.png"), name: "Word" },
        { img: require("@/assets/icons/file_types/powerpoint_icon.png"), name: "PowerPoint" },
        { img: require("@/assets/icons/file_types/csv_icon.png"), name: "CSV" },
        { img: require("@/assets/icons/file_types/markdown_icon.png"), name: "Markdown" },
        { img: require("@/assets/icons/file_types/json_icon.png"), name: "JSON" },
        { img: require("@/assets/icons/file_types/html_icon.png"), name: "HTML" },
      ],
      cloudPlatform: [
        { img: require("@/assets/icons/cloud_platforms/aws_icon.png"), name: "AWS" },
        { img: require("@/assets/icons/cloud_platforms/azure_icon.png"), name: "Azure" },
        { img: require("@/assets/icons/cloud_platforms/google_cloud_icon.png"), name: "Google Cloud" },
        { img: require("@/assets/icons/cloud_platforms/oracle_cloud_icon.png"), name: "Oracle Cloud" },
        { img: require("@/assets/icons/cloud_platforms/kubernetes_icon.png"), name: "Kubernetes" },
        { img: require("@/assets/icons/cloud_platforms/digitalocean_icon.png"), name: "DigitalOcean" },
      ],
      aiSupport: [
        { img: require("@/assets/icons/ai_models/deepseek_icon.png"), name: "Deepseek" },
        { img: require("@/assets/icons/ai_models/chatgpt_icon.png"), name: "ChatGPT" },
        { img: require("@/assets/icons/ai_models/olama_icon.png"), name: "Ollama" },
        { img: require("@/assets/icons/ai_models/test_icon.png"), name: "Claude" },
        
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
      const totalIcons = this.fileSupport.length;
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
      const totalIcons = this.cloudPlatform.length;
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
      const speed = 0.1; 
      const iconWidth = 140; // 图标宽度(包含margin)
      const totalIcons = this.aiSupport.length;
      const totalWidth = iconWidth * totalIcons;
      
      // 初始化位置
      if (this.modelIconsPosition === 0) {
        this.modelIconsPosition = 0;
      }
      
      let position = this.modelIconsPosition;
      
      const animate = () => {
        position -= speed;
        
        // 当移动距离超过一组图标的宽度时，重置位置
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
  background-color: #f0f7ff;
  color: #333333;
  width: 100%;
  padding: calc(5vw + 50px) 3vw;
  text-align: center;
  position: relative;
  z-index: 2;
}

.ecosystem-wrapper {
  max-width: min(94vw, 1400px);
  margin: 0 auto;
}

.title-section {
  text-align: center;
  margin-bottom: calc(3vw + 30px);
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

.subtitle {
  font-size: clamp(1.2rem, 2vw, 2rem);
  color: #666666;
  max-width: min(94vw, 800px);
  margin: 0 auto;
  line-height: 1.6;
}

/* 生态兼容区域样式 */
.ecosystem-container {
  display: flex;
  flex-direction: column;
  border-radius: clamp(8px, 1.6vw, 16px);
  padding: calc(2vw + 20px);
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  overflow: hidden;
}

.ecosystem-content {
  margin-bottom: calc(2vw + 20px);
  text-align: left;
  z-index: 5;
}

.ecosystem-list {
  display: flex;
  flex-direction: column;
  gap: calc(1vw + 10px);
}

.ecosystem-item {
  display: flex;
  align-items: flex-start;
  gap: calc(0.8vw + 8px);
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
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  line-height: 1.6;
  margin: 0;
  color: #666666;
}

/* 轮播图标区域样式 */
.icon-carousel-container {
  position: relative;
  height: clamp(300px, 40vw, 400px);
  overflow: hidden;
}

.icon-carousel-wrapper {
  margin-bottom: calc(1.5vw + 15px);
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
  width: clamp(70px, 10vw, 100px);
  height: clamp(70px, 10vw, 100px);
  margin: 0 clamp(8px, 2vw, 20px);
  background-color: white;
  border-radius: clamp(6px, 1.2vw, 12px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: calc(0.8vw + 8px);
}

.carousel-icon:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.carousel-icon img {
  width: 60%;
  height: 60%;
  object-fit: contain;
  margin-bottom: 8px;
  transition: transform 0.3s ease;
}

.carousel-icon:hover img {
  transform: scale(1.1);
}

.icon-name {
  font-size: clamp(0.8rem, 1.2vw, 1.2rem);
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
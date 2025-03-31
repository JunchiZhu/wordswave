<template>
  <section class="logo-section">
    <div class="section-header">
      <h2 class="title">合作伙伴</h2>
      <p class="description">
        与行业领先企业携手推动技术创新
      </p>
    </div>
    
    <!-- 遍历 rowData，渲染多行 -->
    <div
        v-for="(row, rowIndex) in rowData"
        :key="`row-${rowIndex}`"
        class="logo-row-container"
    >
      <div class="logo-row">
        <!-- 每行里遍历多个 LogoCard -->
        <HoverLogoCard
            v-for="(logoItem, logoIndex) in row"
            :key="`logo-${logoIndex}`"
            :logoSrc="logoItem.logoSrc"
            :description="logoItem.description"
            :link="logoItem.link"
            :linkText="logoItem.linkText"
        />
      </div>
      <!-- 行间分割线（若不是最后一行，就显示） -->
      <div
          v-if="rowIndex < rowData.length - 1"
          class="row-divider"
      ></div>
    </div>
  </section>
</template>

<script>
import LogoCard from '@/components/LogoCard.vue'

export default {
  name: 'LogoSection',
  components: { HoverLogoCard: LogoCard },
  data() {
    return {
      rowData: [
        [
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 1',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 2',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 3',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 4',
            link: '#'
          }
        ],
        [
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 5',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 6',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 7',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 8',
            link: '#'
          }
        ],
        [
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 9',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 10',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 11',
            link: '#'
          },
          {
            logoSrc: require('@/assets/icon.svg'),
            description: 'Description for Logo 12',
            link: '#'
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>
.logo-section {
  width: 100%;
  color: #ffffff;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* 标题样式 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header .title {
  font-size: 4.4rem;
  color: #fff;
  margin-bottom: 15px;
}

.section-header .description {
  font-size: 2.2rem;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
}

/* Logo行容器 */
.logo-row-container {
  margin-bottom: 40px;
}

/* Logo行 */
.logo-row {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  padding: 30px 10px;
  width: 100%;
  gap: 20px; 
  background-color: rgba(29, 30, 44, 0.5);
  border-radius: 12px;
  box-sizing: border-box;
}

/* 分割线 */
.row-divider {
  max-width: 80%; 
  height: 1px;
  background-color: #333;
  margin: 30px auto; 
}

/* LogoCard 宽度 */
.logo-row > * {
  flex: 0 0 22%; 
}

/* 响应式设计 */
@media (max-width: 900px) {
  .section-header .title {
    font-size: 3.6rem;
  }
  
  .section-header .description {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .logo-row {
    flex-wrap: wrap;
    padding: 20px 10px;
  }
  
  .logo-row > * {
    flex: 0 0 48%; 
  }
  
  .section-header .title {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .logo-row > * {
    flex: 0 0 100%;
  }
  
  .section-header .title {
    font-size: 2.8rem;
  }
  
  .section-header .description {
    font-size: 1.7rem;
  }
}
</style>

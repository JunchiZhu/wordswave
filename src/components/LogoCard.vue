<template>
  <div
      class="hover-logo-card"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      @click="goToLink"
  >
    <!-- 默认显示：logo 图片 -->
    <img
        :class="['logo-image', { hidden: isHovered }]"
        :src="logoSrc"
        :alt="altText"
    />

    <!-- 悬停时显示：描述 + learn more -->
    <div
        v-if="isHovered"
        class="hover-content"
    >
      <p class="hover-description">{{ description }}</p>
      <a class="learn-more-link">{{ linkText }} →</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverLogoCard',
  props: {
    logoSrc: { type: String, required: true },
    altText: { type: String, default: '' },
    description: { type: String, default: 'Reduce costs and free up working capital' },
    link: { type: String, default: '#' },
    linkText: { type: String, default: 'Learn more' }
  },
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    goToLink() {
      window.open(this.link, '_blank')
    }
  }
}
</script>

<style scoped>
.hover-logo-card {
  width: 7vh;               /* 你也可改成 7vw 或固定 px，看设计需求 */
  height: 7vh;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;    /* 保持在父容器里可并排、可换行 */
  overflow: hidden;         /* 避免文字溢出 */
  padding: 0.5vh;           /* 为 logo 留一点内边距 */
}

/* 默认显示的 logo */
.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保持比例，完整显示 logo */
}

/* 隐藏态，用于鼠标悬停时 */
.hidden {
  display: none;
}

/* 悬停时出现的文字层：覆盖原 logo 区域 */
.hover-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;  /* 垂直居中，可改为flex-start贴上边 */
  align-items: center;      /* 水平居中，可改为flex-start贴左边 */
  padding: 0.5vh;           /* 文字与边框的距离 */
}

/* 悬停时文字的样式 */
.hover-description,
.learn-more-link {
  margin: 0;
  font-size: 1.5vh;
  color: #000;
}

.hover-description {
  margin-bottom: 0.5vh;
}

.learn-more-link {
  text-decoration: none;
  font-weight: 500;
}

.learn-more-link:hover {
  text-decoration: underline;
}
</style>

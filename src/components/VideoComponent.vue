<template>
  <div class="video-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <img :src="videoSrc" alt="image" class="video-image-element" />

    <div v-if="hover" class="hover-content">
      <p class="video-description">{{ videoDescription }}</p>
      <div class="button-container">
        <button class="view-demo">观看视频</button>
        <button class="learn-more">了解更多</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "VideoComponent",
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    videoDescription: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
/* 统一视频卡片风格 */
.video-card {
  width: 100%;
  height: 22vw;
  position: relative;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 1px;
}

/* `hover` 时微调效果 */
.video-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}


/* 视频封面 */
.video-image-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1px;
}

/* Hover 内容 */
.hover-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* 半透明黑色遮罩 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* `hover` 时显示 */
.video-card:hover .hover-content {
  opacity: 1;
}

/* `description` 文字优化 */
.video-description {
  font-size: 1.3vw;
  color: white;
  text-align: center;
  width: 80%;
  margin-bottom: 1vw;
}

/* 按钮容器 */
.button-container {
  display: flex;
  gap: 1vw;
}

/* 统一按钮样式 */
button {
  padding: 0.7vw 1.5vw;
  font-size: 1vw;
  font-weight: bold;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1px;
}

/* `hover` 时按钮填充 */
button:hover {
  background-color: white;
  color: black;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
}
</style>

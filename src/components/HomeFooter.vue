<template>
  <footer
      class="footer"
      :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }"
  >
    <div class="full-width-divider"></div>

    <div class="footer-content">
      <div class="footer-main">
        <!-- 左侧链接 -->
        <div class="footer-links">
          <a href="#">开发使用</a>
          <a href="#">隐私政策</a>
          <a href="#">使用条款</a>
          <a href="#">法律声明</a>
          <a href="#">声明</a>
        </div>

        <!-- 中间版权信息 -->
        <div class="footer-copyright">
          <p>© 2025 wordswave. Inc. 版权所有。</p>
        </div>

        <!-- 右侧社交媒体链接 -->
        <div class="social-links">
          <a href="#" class="social-icon">领英</a>
          <a href="#" class="social-icon">推特</a>
          <a href="#" class="social-icon">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  props: {
    scrollY: Number,
    heroHeight: Number
  },
};
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #f8fafc, #ffffff);
  color: #1f2937;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
  width: 100%;
  padding: 0;
}

.footer-content {
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
}

.full-width-divider {
  height: 1px;
  background-color: #e5e7eb;
  width: 100%;
  margin: 0;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 3vw;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(10px, 1.5vw, 24px);
}

.footer-links a {
  color: #4b5563;
  text-decoration: none;
  font-size: clamp(0.8rem, 1.2vw, 1.2rem);
  transition: color 0.2s ease;
  white-space: nowrap;
}

.footer-links a:hover {
  color: #3b82f6;
}

.footer-copyright {
  text-align: center;
  color: #6b7280;
  font-size: clamp(0.8rem, 1.2vw, 1.2rem);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.footer-copyright p {
  margin: 0;
}

.social-links {
  display: flex;
  gap: clamp(10px, 1.5vw, 24px);
}

.social-links a {
  color: #4b5563;
  text-decoration: none;
  font-size: clamp(0.8rem, 1.2vw, 1.2rem);
  transition: color 0.2s ease;
}

.social-links a:hover {
  color: #3b82f6;
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 3vw;
  }
  
  .footer-links, .social-links {
    justify-content: center;
    width: 100%;
  }
  
  .footer-copyright {
    position: static;
    transform: none;
    margin: 0.5rem 0;
  }
}

@media (max-width: 480px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .social-links {
    gap: 1rem;
  }
}
</style>

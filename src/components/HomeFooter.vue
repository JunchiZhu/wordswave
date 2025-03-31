<template>
  <footer
      class="footer"
      :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }"
  >
    <div class="full-width-divider"></div>

    <div class="footer-content bottom-content">
      <div class="footer-bottom">
        <div class="footer-bottom-links">
          <a href="#">开发使用</a>
          <a href="#">隐私政策</a>
          <a href="#">使用条款</a>
          <a href="#">法律声明</a>
          <a href="#">声明</a>
        </div>
        <div class="social-links">
          <a href="#" class="social-icon">领英</a>
          <a href="#" class="social-icon">推特</a>
          <a href="#" class="social-icon">GitHub</a>
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      <p>© 2025 wordswave. Inc. 版权所有。</p>
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
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.full-width-divider {
  height: 1px;
  background-color: #e5e7eb;
  width: 100%;
  margin: 0;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  width: 100%;
}

.footer-links h3 {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  color: #1f2937;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.footer-links h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #0ea5e9);
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links ul li {
  margin-bottom: 0.7rem;
}

.footer-links ul li a {
  color: #4b5563;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  position: relative;
  display: inline-block;
}

.footer-links ul li a:hover {
  color: #3b82f6;
  padding-left: 5px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer-bottom-links a,
.social-links a {
  color: #4b5563;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 1.5rem;
  transition: color 0.2s ease;
  position: relative;
}

.footer-bottom-links a:hover,
.social-links a:hover {
  color: #3b82f6;
}

.bottom-content {
  padding: 1.5rem 2rem;
}

.footer-copyright {
  text-align: center;
  color: #6b7280;
  padding: 1rem 0;
  font-size: 1.2rem;
  width: 100%;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 2rem 1rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom-links a {
    display: block;
    margin-bottom: 0.8rem;
  }
}
</style>

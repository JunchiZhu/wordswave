<template>
  <footer class="site-footer">
    <!-- 顶部行：左侧链接 + 右侧社交图标 -->
    <div class="footer-top">
      <nav class="footer-links">
        <a href="#">新闻</a>
        <a href="#">联系我们</a>
        <a href="#">隐私政策</a>
        <a href="#">使用条款</a>
        <a href="#">网站地图</a>
      </nav>
      <div class="footer-socials">
        <a href="#" aria-label="LinkedIn">领英</a>
        <a href="#" aria-label="Twitter">推特</a>
        <a href="#" aria-label="GitHub">GitHub</a>
      </div>
    </div>

    <!-- 底部行：版权声明 -->
    <div class="footer-bottom">
      © 2025 C3.ai, Inc. 版权所有。
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
/* 让 footer 适应各种页面布局 */
.site-footer {
  background-color: white;
  color: black;
  padding: 4vh 4vw;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* 顶部行：左右对齐 */
.footer-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* 链接导航：均匀分布，适应不同屏幕 */
.footer-links {
  display: flex;
  gap: 2vw;
}

.footer-links a {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
}

.footer-links a:hover {
  color: #555;
}

/* 社交图标 */
.footer-socials {
  display: flex;
  gap: 1.5vw;
}

.footer-socials a {
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s, transform 0.2s;
}

.footer-socials a:hover {
  color: #555;
  transform: scale(1.1);
}

/* 底部版权信息 */
.footer-bottom {
  margin-top: 2vh;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}
</style>

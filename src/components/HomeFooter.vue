<template>
  <footer
      class="footer"
      :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }"
  >
    <div class="cta-container">
      <div class="cta-item">
        <h2 class="cta-title">迈出下一步</h2>
        <p class="cta-description">了解我们的行业领先企业AI软件产品如何帮助您的组织。</p>
        <button class="cta-button">联系销售 →</button>
      </div>
      <div class="cta-item">
        <h2 class="cta-title">迈出下一步</h2>
        <p class="cta-description">
          联系我们：<a href="mailto:IR@C3.ai" class="cta-link">IR@C3.ai</a>，了解更多关于C3 AI投资的信息。
        </p>
        <button class="cta-button">投资者关系 →</button>
      </div>
      <div class="cta-item">
        <h2 class="cta-title">迈出下一步</h2>
        <p class="cta-description">如有其他问题，请联系我们。</p>
        <button class="cta-button">请求信息 →</button>
      </div>
    </div>

    <div class="footer-links">
      <div>
        <h3>AI 软件</h3>
        <ul>
          <li><a href="#">C3 AI 平台</a></li>
          <li><a href="#">C3 AI 应用</a></li>
          <li><a href="#">C3 AI CRM</a></li>
        </ul>
      </div>
      <div>
        <h3>C3 AI 平台</h3>
        <ul>
          <li><a href="#">C3 AI Studio</a></li>
          <li><a href="#">Visual Studio Code</a></li>
          <li><a href="#">JupyterLab</a></li>
          <li><a href="#">应用画布</a></li>
        </ul>
      </div>
      <div>
        <h3>行业</h3>
        <ul>
          <li><a href="#">制造业</a></li>
          <li><a href="#">石油与天然气</a></li>
          <li><a href="#">公共事业</a></li>
          <li><a href="#">金融服务</a></li>
          <li><a href="#">政府</a></li>
          <li><a href="#">医疗保健</a></li>
          <li><a href="#">零售</a></li>
          <li><a href="#">电信</a></li>
          <li><a href="#">交通运输</a></li>
        </ul>
      </div>
      <div>
        <h3>客户</h3>
        <ul>
          <li><a href="#">美国空军</a></li>
          <li><a href="#">国际石油公司</a></li>
          <li><a href="#">财富50强银行—证券借贷</a></li>
          <li><a href="#">康爱迪生</a></li>
          <li><a href="#">财富200强制造企业</a></li>
          <li><a href="#">ENGIE</a></li>
          <li><a href="#">AEP</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-links">
        <a href="#">开始使用</a>
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

    <div class="footer-copyright">
      <p>© 2025 C3.ai, Inc. 版权所有。</p>
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
  background-color: white;
  color: black;
  padding: 5vh 2vw;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
  width: 100%;
}

.cta-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10vh;
  flex-wrap: wrap;
}

.cta-item {
  text-align: center;
  width: 30%;
  margin-bottom: 1rem;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
}

.cta-description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.cta-link {
  color: black;
  text-decoration: none;
}

.cta-button {
  background-color: transparent;
  color: black;
  border: 2px solid black;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.cta-button:hover {
  background-color: black;
  color: white;
}


.footer-links {
  padding: 10vh 10vh 0 10vh;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links div {
  width: 22%;
  margin-bottom: 2rem;
}

.footer-links h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.footer-links ul li a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.footer-links ul li a:hover {
  color: black;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 2rem;
}

.footer-bottom-links a,
.social-links a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  margin-right: 2rem;
}

.footer-bottom-links a:hover,
.social-links a:hover {
  color: black;
}

.footer-copyright {
  text-align: center;
  color: #333;
  padding-top: 2rem;
  font-size: 1rem;
}
</style>

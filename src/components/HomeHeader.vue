<template>
  <header
      :class="[
      'header',
      { hovered: hover && isHover, 'page1-header': isHover, 'page2-header': !isHover },
      { hidden: !headerVisible }
    ]"
      @mouseenter="isHover && (hover = true)"
      @mouseleave="isHover && (hover = false)"
  >
    <router-link to="/" class="logo">
      <h2>公司标志</h2>
    </router-link>


    <nav :class="{ 'desktop-nav': true, 'mobile-nav': isMobileMenuVisible }">
      <div v-if="!isMobileMenuVisible" class="desktop-nav-links">
        <div
            v-for="(item, index) in navItems"
            :key="index"
            class="nav-link-wrapper"
            @mouseenter="delayedOpen(index)"
            @mouseleave="delayedClose(index)"
        >
          <router-link
              :to="item.path"
              :class="['nav-link', { 'contact-link': item.text === '联系我们' }, { 'nav-link-hover': ['软件介绍', '行业案例', '服务流程', '公司介绍'].includes(item.text) }]"
          >
            {{ item.text }}
          </router-link>

          <div
              v-if="isPopupVisible[index] && ['软件介绍', '行业案例', '公司介绍'].includes(item.text)"
              class="popup"
              @mouseenter="clearCloseTimeout(index)"
              @mouseleave="delayedClose(index)"
          >
            <p>{{ item.text }}的悬停内容</p>
          </div>
        </div>
      </div>
    </nav>

    <div class="mobile-menu" @click="toggleMobileMenu">
      <div class="hamburger"></div>
    </div>

    <div :class="['slide-menu', { 'active': isMobileMenuVisible }]">
      <div class="close-button" @click="toggleMobileMenu">&times;</div>
      <router-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.path"
          class="slide-link"
      >
        {{ item.text }}
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    isHover: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hover: false,
      scrollingUp: false,
      isMobileMenuVisible: false,
      headerVisible: true,
      navItems: [
        { text: '软件介绍', path: '/software' },
        { text: '行业案例', path: '/industry' },
        { text: '服务流程', path: '/services' },
        { text: '公司介绍', path: '/company' },
        { text: '联系我们', path: '/contact' },
      ],
      lastScrollY: 0,
      isPopupVisible: [],
      closeTimeouts: [],
    };
  },

  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        this.scrollingUp = false;
        this.headerVisible = true;
      } else if (currentScrollY > this.lastScrollY) {
        if (this.headerVisible) {
          this.headerVisible = false;
        }
        this.scrollingUp = false;
      } else {
        if (!this.headerVisible) {
          this.headerVisible = true;
        }
        this.scrollingUp = true;
      }

      this.lastScrollY = currentScrollY;
    },
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
    handleResize() {
      if (window.innerWidth > 1000) {
        this.isMobileMenuVisible = false;
      }
    },
    delayedOpen(index) {
      this.clearCloseTimeout(index);
      this.isPopupVisible[index] = true;
    },
    delayedClose(index) {
      this.closeTimeouts[index] = setTimeout(() => {
        this.isPopupVisible[index] = false;
      }, 200);
    },
    clearCloseTimeout(index) {
      if (this.closeTimeouts[index]) {
        clearTimeout(this.closeTimeouts[index]);
        this.closeTimeouts[index] = null;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.isPopupVisible = this.navItems.map(() => false);
    this.closeTimeouts = this.navItems.map(() => null);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
/* 基本样式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 4vw; /* 维持上下 padding 比例 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 只左右拉伸 */
  height: 10vh; /* 固定高度 */
  min-width: 30%; /* 最小宽度，防止内容被挤压 */
  max-width: 100%; /* 确保不会超出屏幕 */
  z-index: 1000;
  transition: all 0.3s ease;
  box-sizing: border-box; /* 确保 padding 不影响总高度 */
}

/* 隐藏 header 样式 */
.header.hidden {
  top: -10vh; /* 将 header 向上移出视口 */
}

.page1-header {
  background-color: black;
  color: white;
}

.page1-header.hovered {
  background-color: white;
  color: black;
}

.page1-header .nav-link,
.page1-header .contact-link,
.page1-header .logo h2 {
  color: white;
}

.page1-header.hovered .contact-link {
  border: 0.2vh solid black !important; /* **修改 `border` 颜色** */
}

.page1-header.hovered .nav-link,
.page1-header.hovered .contact-link,
.page1-header.hovered .logo h2 {
  color: black;
}

.page2-header {
  background-color: white;
  color: black;
}

.page2-header .nav-link,
.page2-header .contact-link,
.page2-header .logo h2 {
  color: black;
}
.page2-header .contact-link {
  border: 0.2vh solid black;
}

.nav-link:hover {
  text-decoration: none;
}

/* 移除悬停效果 */
.nav-link.nav-link-hover {
  position: relative;
}

.nav-link.nav-link-hover:hover {
  color: black;
}

/* 移除下划线动画 */
.nav-link.nav-link-hover::after {
  display: none;
}

.logo {
  flex-shrink: 0; /* 防止被挤压 */
  font-size: 2.5vh;
  text-decoration: none; /* 移除链接下划线 */
}

.logo h2 {
  margin: 0;
  font-size: 2vh;
  white-space: nowrap;
  color: white;
}

.desktop-nav {
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap; /* 确保内容不会换行 */
  width: auto; /* 让其自适应 */
  min-width: 50%; /* 确保不会太小 */
  max-width: 70%; /* 限制最大宽度 */
}

.desktop-nav-links {
  display: flex;
  gap: 3vw;
  margin-left: auto;
  flex-wrap: nowrap; /* 避免换行 */
}

/* 统一导航链接和按钮样式 */
.nav-link,
.contact-link {
  font-size: 1.8vh; /* 统一字体大小 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: black;
  transition: color 0.3s ease, background-color 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
  position: relative;
}

/* 添加下划线动画效果 */
.nav-link:not(.contact-link)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:not(.contact-link):hover::after {
  width: 100%;
}

/* 移除之前的悬停效果覆盖 */
.nav-link.nav-link-hover::after {
  display: block;
}

.contact-link {
  font-size: 1.9vh; /* 按钮稍大 */
  padding: 1vh 2vw; /* 增大内边距，提高可读性 */
  height: 4.5vh; /* 让按钮高度与导航栏对齐 */
  border: 0.2vh solid white; /* 默认边框 */
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* 悬停时样式 */
.contact-link:hover {
  background-color: black;
  color: white !important;
  border: 0.2vh solid black; /* 默认边框 */
}

/* mobile menu 样式等 */
.mobile-menu {
  display: none;
  cursor: pointer;
}

.hamburger {
  width: 6vw;
  height: 0.5vh;
  background-color: #333;
  position: relative;
}

.hamburger::after,
.hamburger::before {
  content: "";
  position: absolute;
  width: 6vw;
  height: 0.5vh;
  background-color: #333;
  transition: all 0.3s;
}

.hamburger::before {
  top: -1vh;
}

.hamburger::after {
  top: 1vh;
}

.slide-menu {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: black;
  transition: left 0.3s ease;
  z-index: 999;
}

.slide-menu.active {
  left: 0;
}

.slide-link {
  display: block;
  padding: 5vw;
  font-size: 5vw;
  text-align: center;
  color: black;
  text-decoration: none;
  border-bottom: 0.1vh solid #ddd;
}

.slide-link:last-child {
  border-bottom: none;
}

.close-button {
  position: absolute;
  top: 2vw;
  right: 2vw;
  font-size: 3vw;
  color: black;
  cursor: pointer;
}

/* 移除弹出菜单样式 */
.popup {
  display: none;
}

@media (max-width: 1000px) {
  .desktop-nav {
    display: none;
  }
  .mobile-menu {
    display: block;
  }

  .mobile-nav {
    display: block;
    background-color: rgba(255, 255, 255, 0.95);
    position: absolute;
    top: 10vw;
    width: 100%;
    text-align: center;
  }

  .nav-link,
  .contact-link {
    font-size: 2.2vh; /* 在移动端适当放大字体 */
  }

  .contact-link {
    padding: 1.2vh 3vw; /* 增大触摸区域 */
    height: 5vh;
  }
}
</style>



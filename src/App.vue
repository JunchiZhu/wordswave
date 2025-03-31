<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%; /* 1rem = 10px */
  line-height: 1.6;
}

body {
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  background-color: #f7fafc;
  color: #2d3748;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Noto Sans SC', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 10px;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  html {
    font-size: 50%; /* 在小屏幕上缩小字体 */
  }
}
</style>
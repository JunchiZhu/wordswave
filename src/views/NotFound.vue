<template>
  <div class="not-found">
    <h1>Oops! 🤷‍♂️</h1>
    <p>Looks like you're lost in the internet wilderness.</p>
    <p>Maybe this page moved, or maybe it never existed at all... spooky, right?</p>

    <img src="@/assets/404-illustration.png" alt="Page Not Found" class="not-found-image" />

    <router-link to="/" class="back-home">Take Me Home 🏠</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 10vh 5vw;
  max-width: 600px;
  margin: auto;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 4vh;
  color: #333;
}

p {
  font-size: 2vh;
  color: #666;
  margin-bottom: 1.5vh;
}

.not-found-image {
  width: 60%;
  max-width: 300px;
  margin: 3vh 0;
}

.back-home {
  display: inline-block;
  margin-top: 2vh;
  padding: 1vh 2vw;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
}

.back-home:hover {
  background-color: #444;
}
</style>

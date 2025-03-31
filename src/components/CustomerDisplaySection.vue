<template>
  <section class="customer-display" :style="{ top: `${Math.max(heroHeight - scrollY, 0)}px` }">
    <div class="customers-container">
      <h2>我们的客户</h2>
      <div class="customers">
        <CustomerCard v-for="(customer, index) in customers" :key="index" :customer="customer" />
      </div>
    </div>
  </section>
</template>

<script>
import CustomerCard from "@/components/CustomerCard.vue";

export default {
  components: {
    CustomerCard
  },
  props: {
    scrollY: Number,
    heroHeight: Number
  },
  data() {
    return {
      customers: new Array(24).fill({
        img: require("@/assets/image.png")
      })
    };
  }
};
</script>

<style scoped>
.customer-display {
  background-color: #f8fafc;
  color: black;
  padding: 8vh 5vw;
  z-index: 2;
  position: relative;
  width: 100%;
}

.customers-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 3vh;
}

.customers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2vh;
  justify-content: center;
}

@media (max-width: 1000px) {
  .customers {
    grid-template-columns: repeat(4, 1fr);
  }

  h2 {
    font-size: 4vw;
  }
}

@media (max-width: 640px) {
  .customers {
    grid-template-columns: repeat(3, 1fr);
  }

  h2 {
    font-size: 5vw;
  }
}
</style>

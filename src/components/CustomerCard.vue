<template>
  <div class="customer-card">
    <img :src="customer.img" alt="客户标志" />
  </div>
</template>

<script>
export default {
  props: {
    customer: Object
  }
};
</script>

<style scoped>
.customer-card {
  width: 100%;
  padding-top: 100%; /* 让卡片始终保持正方形 */
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  position: relative;
  margin: auto;
}

.customer-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.customer-card img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 60%;
  max-height: 60%;
  object-fit: contain;
}
</style>

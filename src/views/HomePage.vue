<template>
  <div>
    <Header :isHover="true" />
    <HeroSection :scrollY="scrollY" />
    <div class="display-container">
      <ProductFeatureSection :scrollY="scrollY" :heroHeight="heroHeight" />
      <CoreFeaturesSection :scrollY="scrollY" :heroHeight="heroHeight" />
      <EcosystemSection :scrollY="scrollY" :heroHeight="heroHeight" />
<!--      <NewsSection :scrollY="scrollY" :heroHeight="heroHeight" />-->
      <Footer :scrollY="scrollY" :heroHeight="heroHeight" />
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductFeatureSection from '@/components/ProductFeatureSection.vue';
import CoreFeaturesSection from '@/components/CoreFeaturesSection.vue';
import EcosystemSection from '@/components/EcosystemSection.vue';
// import NewsSection from '@/components/NewsSection.vue';
import HomeFooter from '@/components/HomeFooter.vue';

export default {
  components: {
    Header: HomeHeader,
    Footer: HomeFooter,
    HeroSection,
    ProductFeatureSection,
    CoreFeaturesSection,
    EcosystemSection,
    // NewsSection,
  },
  data() {
    return {
      scrollY: 0,
      heroHeight: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.calculateHeights();
    window.addEventListener('resize', this.calculateHeights);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.calculateHeights);
  },
  methods: {
    calculateHeights() {
      this.heroHeight = document.querySelector('.hero')?.clientHeight || window.innerHeight;
    },
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
.display-container {
  width: 100%;
  position: relative;
}
</style>

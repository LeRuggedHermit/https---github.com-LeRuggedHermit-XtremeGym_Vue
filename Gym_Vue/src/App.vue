<script setup>
import { RouterView } from 'vue-router';
import  SiteHeader  from './components/Header.vue';
import SiteFooter from './components/Footer.vue';

</script>

<template>
  <div>
  <!--Sidhuvud: -->
  <SiteHeader />

<!--Sid-vy: -->
  <RouterView />

<!--Sidfot: -->
  <SiteFooter />
  </div>
</template>

<style scoped>

</style>

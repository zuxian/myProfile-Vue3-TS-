<script setup lang="ts">
import Home from '@/view/home/index.vue'
import About from '@/view/about/index.vue'
import Project from '@/view/project/index.vue'
import Life from '@/view/life/index.vue'
</script>


<template>
  <div class="main-container" mode="horizontal">
    <!-- <router-view> -->
      <Home />
      <About />
      <Project />
      <Life />
    <!-- </router-view> -->
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  margin-top: 70px;
  padding: 0px 150px 0px 150px;

  // background-color: $main-background-color;

}
</style>
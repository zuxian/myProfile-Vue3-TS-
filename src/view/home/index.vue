<template>
  <div>
    Home
    <div id="content-one">
      <p v-for="item in 20" :key="item+'11'" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>
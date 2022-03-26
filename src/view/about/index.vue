<template>
  <div>
    about
    <div id="content-one">
      <p v-for="item in 4" :key="item+'11'" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>
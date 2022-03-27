<template>
  <div>
    cmss
    <div id="content-one">
      <p v-for="item in 2" :key="item+'cmss'" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>
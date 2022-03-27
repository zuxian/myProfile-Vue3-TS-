<template>
  <div>
    Master
    <div id="content-one">
      <p v-for="item in 2" :key="item+'Master'" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>
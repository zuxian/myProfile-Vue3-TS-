<template>
  <div>
    <div>
      <p v-for="item in 5" :key="item+'11'" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>
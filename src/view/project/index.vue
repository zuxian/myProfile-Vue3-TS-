<template>
  <div>
    <div class="split-pane">
      <MySplitPane />
    </div>
  </div>
</template>

<script setup lang="ts">
import MySplitPane from "./splitPane/index.vue";
</script>

<style lang="scss" scoped>
.split-pane{
  margin: 50px 100px;
}
</style>
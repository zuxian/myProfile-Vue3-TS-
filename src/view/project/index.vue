<template>
  <div>
    <div class="split-pane-wrap">
      <MySplitPane />
    </div>
  </div>
</template>

<script setup lang="ts">
import MySplitPane from "./splitPane/index.vue";
</script>

<style lang="scss" scoped>
.split-pane-wrap {
  margin: 100px 100px;
}
</style>
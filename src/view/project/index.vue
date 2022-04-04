<template>
  <div>
    <div class="split-pane-wrap">
      <MySplitPane />
    </div>
    <div class="gallery-wrap">
      <Gallery />
    </div>
  </div>
</template>

<script setup lang="ts">
import MySplitPane from "./splitPane/index.vue";
import Gallery from "./Gallery/index.vue";
</script>

<style lang="scss" scoped>
.gallery-wrap, .split-pane-wrap {
  margin: 100px 100px;
}
</style>
<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";

const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <div @click="toggle">
    <el-tooltip
      effect="dark"
      :content="isFullscreen ? '退出全屏' : '全屏模式'"
      placement="bottom"
    >
      <span :class="['iconfont', isFullscreen ? 'icon-tuichuquanping' : 'icon-quanping']"></span>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.iconfont {
  font-size: 22px;
  margin-right: 12px;
}
</style>

<template>
  <div class="main-container" mode="horizontal">
    <el-main>
        <el-button type="primary">element-plus按钮</el-button>

        <p class="test"> Edit
          <code>components/Home.vue</code> to test hot module replacement.
        </p>
        <p v-for="item in 100" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </el-main>
  
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.main-container {
    padding: 0px 150px;

   background-color: $main-background-color;

}
</style>
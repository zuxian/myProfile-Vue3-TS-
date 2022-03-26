<template>
  <div :class="['header-container', {'opecity-background': !isScollTop}]" mode="horizontal">
    <div class="header-content">
      <div class="header-brand">
        <router-link to="/">fuzuxian</router-link>
      </div>
      <div class="header-tab">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Home" name="first">Home</el-tab-pane>
          <el-tab-pane label="About" name="second">About</el-tab-pane>
          <el-tab-pane label="Project" name="third">Project</el-tab-pane>
          <el-tab-pane label="Life" name="fourth">Life</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

let isScollTop = ref(true)
let activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// const refreshPage = () => {
// }

</script>

<style lang="scss" scoped>
.header-container{
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    z-index: 1001;
    color: aliceblue;
    .header-content{
      padding: 0px 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-brand{
        font-size: 24px;
      }
    }
}

.opecity-background {
  background-color: red;
}

</style>
<template>
  <div>
    <el-tabs v-model="activeName" tab-position="left" @tab-click="handleClick">
      <el-tab-pane label="中国移动苏州研发中心" name="Cmss">
        <Cmss />
        <!-- <component :is="compNameRef"></component> -->
      </el-tab-pane>
      <el-tab-pane label="访学-北卡罗来纳大学教堂山分校" name="Unc">
        <Unc />
        <!-- <component :is="compNameRef"></component> -->
      </el-tab-pane>
      <el-tab-pane label="硕士-杭州电子科技大学" name="Master">
        <Master />
        <!-- <component :is="compNameRef"></component> -->
      </el-tab-pane>
      <el-tab-pane label="本科-杭州电子科技大学" name="bachelor">
        <Bachelor />
        <!-- <component :is="compNameRef"></component> -->
      </el-tab-pane>
    </el-tabs>

    <div id="content-one">
      <p v-for="item in 20" :key="item+'11'" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cmss from './components/Cmss.vue'
import Unc from './components/Unc.vue'
import Master from './components/Master.vue'
import Bachelor from './components/Bachelor.vue'

import { ref } from 'vue'
const activeName = ref('first')
const compNameRef = ref<string>('CompA')


const handleClick = () => {
  console.log(activeName.value)

  compNameRef.value = activeName.value

}
</script>

<style lang="scss" scoped>
</style>
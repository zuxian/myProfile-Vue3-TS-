<template>
  <div class="chart-wrap">
    <div class="chart-item">
      <el-skeleton animated :rows="7" :loading="loading">
        <template #default>
          <MyLine />
          <!-- <MyFootPrint /> -->
        </template>
     </el-skeleton>
    </div>
    <div class="chart-item">
      <el-skeleton animated :rows="7" :loading="loading">
        <template #default>
          <MyRelation :index="22222"/>
        </template>
     </el-skeleton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MyLine, MyRelation, MyFootPrint } from "@/components/myChart/index";
import { ref } from "vue";

let loading = ref<boolean>(true);

setTimeout(() => {
  loading.value = !loading.value;
}, 800);

</script>

<style lang="scss" scoped>
.chart-wrap {
  display: flex;
  // justify-content: space-around;

  .chart-item {
    width: 50%;
    display: inline-block;

  }
}
</style>
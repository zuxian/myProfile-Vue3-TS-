<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()
import { onMounted } from 'vue';

onMounted(() => { 
});

const count = ref(0)
</script>

<template>
  <div class="common-layout">
      <Header />
      <Left-link />
      <Main-container />
      
      
        <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->

  </div>
</template>

<style lang="scss" scoped>
// .test{
//   color: $test-color;      
// }

// .common-layout {
//   width: 100%;
//   height: 100%;
// }


code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
// .scrollbar-demo-item {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 600px;
//   margin: 10px;
//   text-align: center;
//   border-radius: 4px;
//   background: var(--el-color-primary-light-9);
//   color: var(--el-color-primary);
// }
</style>

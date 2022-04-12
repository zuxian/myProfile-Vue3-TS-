<script setup lang="ts">
import { ref } from "vue";
import { useWatermark } from "@/utils/watermark";
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'


let color = ref("#409EFF");
let value = ref("fuzuxian");
let drawerVisible = ref(false);

const { setWatermark, clear } = useWatermark();

const openDrawer = () => {
  drawerVisible.value = true
}

// 默认显示的主题色列表
const defaultColorList = [
  '#1890ff',
  '#5ac8fa',
  '#5856D6',
  '#AF52DE',
  '#00C1D4',
  '#34C759',
  '#78DEC7',
  '#e53935',
  '#d81b60',
  '#f4511e',
  '#fb8c00',
  '#fdd835',
  '#6d4c41',
  '#546e7a'
]

const changeColor = (colorObj: any) => {
  color.value = colorObj.hex
}

</script>

<template>
<span class="iconfont icon-shuiyin" @click="openDrawer"></span>
  <el-drawer v-model="drawerVisible" size="20%" title="设置页面水印">
    <el-divider />
    <div>
      请输入要创建水印的值：
      <el-input
        class=""
        style="width: 80px"
        v-model="value"
        clearable
      />
    </div>
      <div>
        请选择要创建水印的颜色：
        <ColorPicker
          theme="dark"
          :color="color"
          :sucker-hide="true"
          :colors-default="defaultColorList"
        @changeColor="changeColor"
        ></ColorPicker>
      </div>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="setWatermark(value, { fillStyle: color })">创建</el-button>
        <el-button @click="clear">清除</el-button>
      </div>
    </template>
  </el-drawer>

</template>

<style lang="scss" scoped>
.iconfont {
  font-size: 22px;
  margin-right: 15px;
}
</style>
<template>
  <div style="position: relative;">
    <div class="proj-img-wrap">
      <img src="../../../../assets/images/fzx-proflie.jpg" class="proj-img" />
    </div>
    <div class="proj-header">
      工作项目
    </div>
    <div class="proj-briefly-wrap">
        简要介绍1111111111111111111111111111111
        1111111111111111111111111111111111111
    </div>
    <div class="proj-tag">
      <el-tag type="success">Vue2</el-tag>
      <el-tag type="success">Webpack</el-tag>
      <el-tag type="success">蓝绿发布</el-tag>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.proj-img-wrap {
  width: 40%;
  margin: 2vh 20px;
  position:absolute;
  right: 0;
  z-index: 10;
  background-color: $imp-text-color;
}
.proj-img{
  width: 100%;
  height: 20vh;
  display: block;
  cursor: pointer;
  &:hover{
    opacity:0.6; 
    filter: grayscale(100%) contrast(1) brightness(100%);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  }
}
.proj-header{
  position: absolute;
  top: 10px;
  left: 6%;
}
.proj-briefly-wrap {
  margin: 20px;
  height: 10vh;
  width: 62%;
  position: absolute;
  top: 20px;
  right: 30%;
  background-color: $btn-background-color;
  color: $white-text-color;
  // border: 1px solid $imp-text-color;
  // border-radius: 20px;
  z-index: 200;
}

.proj-tag {
  position: absolute;
  top: 18vh;
  left: 6%;
}
</style>
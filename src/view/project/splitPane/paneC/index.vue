<template>
  <div style="position: relative;">
    <div class="proj-img-wrap" >
      <a href="http://47.103.74.217" aria-label="博客" target="_blank" rel="noreferrer">
        <img src="../../../../assets/images/fuzuxian/fzx-proflie-1.jpg" class="proj-img" />
      </a>
    </div>
    <div class="proj-header">
      我的博客
    </div>
    <div class="proj-briefly-wrap">
        简要介绍1111111111111111111111111111111
        1111111111111111111111111111111111111
    </div>
    <div class="proj-tag">
      <el-tag type="success">VuePress</el-tag>
      <el-tag type="success">Markdown</el-tag>
      <el-tag type="success">blog</el-tag>
      <a href="https://github.com/zuxian/myProfile-Vue3-TS-" aria-label="GitHub" target="_blank" rel="noreferrer">
        <span class="iconfont icon-github"></span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.proj-img-wrap {
  width: 40%;
  margin: 2vh 20px;
  position: absolute;
  z-index: 10;
  background-color: $imp-text-color;
}
.proj-img {
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
  right: 6%;
}
.proj-briefly-wrap {
  margin: 20px;
  height: 10vh;
  width: 62%;
  position: absolute;
  top: 20px;
  left: 30%;
  background-color: $btn-background-color;
  color: $white-text-color;
  // border: 1px solid $imp-text-color;
  // border-radius: 20px;
  z-index: 200;
}

.proj-tag {
  position: absolute;
  top: 18vh;
  right: 6%;
}
</style>
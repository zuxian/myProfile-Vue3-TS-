<template>
  <div>
    <div class="proj-img-wrap" >
        <a href="https://github.com/zuxian/myProfile-Vue3-TS-" aria-label="邮箱" target="_blank" rel="noreferrer">
            <img src="../../../../assets/images/fzx-proflie.jpg" class="proj-img" />
        </a>
    </div>
    <div>
       项目：个人主页
    </div>
    <div class="proj-briefly-wrap">
        简要介绍
       <p v-for="item in 3" :key="item+'11'" class="scrollbar-demo-item">{{ item }}</p>
    </div>
    <div>
        <el-tag>Vue3</el-tag>
        <el-tag type="success">Vite2</el-tag>
        <el-tag type="warning">TypeScript</el-tag>
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
    margin: 20px;
    background-color: $imp-text-color;
}
.proj-img{
    width: 100%;
    height: 150px;
    display: block;
    cursor: pointer;
    &:hover{
        opacity:0.6; 
        filter: grayscale(100%) contrast(1) brightness(100%);
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    }
}

.proj-briefly-wrap{
  margin: 20px;
  background-color: $tab-hover-background-color;
  color: $white-text-color;
  border: 1px solid $imp-text-color;
  border-radius: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
}

.el-tag {
    margin-right: 10px;
}
</style>
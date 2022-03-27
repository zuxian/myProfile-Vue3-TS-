<template>
  <div class="home-main-wrap">
    <div class="home-main">

      <div id="content-one">
        <p v-for="item in 20" :key="item+'11'" class="scrollbar-demo-item">{{ item }}</p>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>





// .home-img {
//   width: 100%;
//   height: 950px;
// }

// .home-main-wrap{
//   background: url(../../assets/images/fzx-proflie-1.jpg) no-repeat 50% fixed;
//   background-size: cover;

//   .home-main {
//     background: rgba(8, 5, 15, 0);
//   }
// }
</style>
<template>
  <div class="chart-wrap">
    <el-row :gutter="25">
      <!-- :offset="index > 0 ? 2 : 0" -->
      <el-col
        v-for="(item, index) in projCardInfo"
        :key="index"
        :span="8"
        
      >
        <el-card :body-style="{ padding: '0px' }">
          <a :href="item.link" aria-label="博客" target="_blank" rel="noreferrer">
            <img :src="item.imgSrc" class="image" />
          </a>
          <div style="padding: 14px">
            <span>{{ item.title }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let loading = ref<boolean>(true);

// typescript不支持require，所以import.meta.globEager  或  await import
const projCardInfo = [
  {title: '我的生活映像', imgSrc: new URL('../../../assets/images/cat/7-2.jpg', import.meta.url).href, link: 'http://zuxian.gitee.io/album/'},
  {title: '我的生活映像', imgSrc: new URL('../../../assets/images/cat/7.jpg', import.meta.url).href, link: 'http://zuxian.gitee.io/album/'},
  {title: '我的生活映像', imgSrc: new URL('../../../assets/images/cat/7-1.jpg', import.meta.url).href, link: 'http://zuxian.gitee.io/album/'},
  {title: '我的生活映像', imgSrc: new URL('../../../assets/images/cat/8-3.jpg', import.meta.url).href, link: 'http://zuxian.gitee.io/album/'},
  {title: '我的生活映像', imgSrc: new URL('../../../assets/images/cat/8-1.jpg', import.meta.url).href, link: 'http://zuxian.gitee.io/album/'},
  {title: '我的生活映像', imgSrc: new URL('../../../assets/images/cat/8.jpg', import.meta.url).href, link: 'http://zuxian.gitee.io/album/'},
]


</script>

<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 24vh;
  display: block;
}
</style>
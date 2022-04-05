<template>
  <div class="gallery-container">
    <el-row :gutter="30">
      <el-col
        v-for="(item, index) in projCardInfo"
        :key="index"
        :span="8"
      >
        <el-card>
          <div class="gallery-card">
            <img :src="item.imgSrc" class="gallery-image" />
            <div class="gallery-card-mask">
              <!-- <div class="proj-title">{{ item.title }}</div> -->
              
              <div class="proj-btn"  @click="seeMoreDetail(index)">
                <span class="iconfont icon-lianjie"></span>查看详情
              </div>
            </div>
          </div>
          <div :class="['gallery-card-bottom', index<3 ? '' : 'blue-bottom']">
            <span>{{ item.title }}</span>
            <a :href="item.link" aria-label="GitHub" target="_blank" rel="noreferrer">
              <span class="iconfont icon-fenxiang"></span>
            </a>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";


// typescript不支持require，所以import.meta.globEager  或  await import
const projCardInfo = [
  {
    title: '我的生活映像', 
    imgSrc: new URL('../../../assets/images/cat/7-2.jpg', import.meta.url).href, 
    link: 'http://zuxian.gitee.io/album/', 
  },
  {
    title: '我的生活映像', 
    imgSrc: new URL('../../../assets/images/cat/7.jpg', import.meta.url).href, 
    link: 'http://zuxian.gitee.io/album/'},
  {
    title: '我的生活映像', 
    imgSrc: new URL('../../../assets/images/cat/7-1.jpg', import.meta.url).href, 
    link: 'http://zuxian.gitee.io/album/'},
  {
    title: '我的生活映像', 
    imgSrc: new URL('../../../assets/images/cat/8-3.jpg', import.meta.url).href, 
    link: 'http://zuxian.gitee.io/album/'
  },
  {
    title: '我的生活映像', 
    imgSrc: new URL('../../../assets/images/cat/8-1.jpg', import.meta.url).href, 
    link: 'http://zuxian.gitee.io/album/'
  },
  {
    title: '我的生活映像', 
    imgSrc: new URL('../../../assets/images/cat/8.jpg', import.meta.url).href, 
    link: 'http://zuxian.gitee.io/album/'
  },
]

const seeMoreDetail = (index: number) => {
  console.log('--------------', index)
}

</script>

<style lang="scss" scoped>

.el-card {
  border: unset;
  background-color: unset;
}

.gallery-card-bottom {
  background-color: $tab-hover-background-color;
  color: $white-text-color;
  padding: 14px;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  justify-content: space-between;
}

.blue-bottom {
  background-color:$blue-tab-hover-background-color;
}


.gallery-card{
  position: relative;

  &::before {
    background: $main-background-color;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
		transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
  }

  &:hover:before{
		width: 100%;
    height: 100%;
    top: 0;
		left: 0;
		opacity: 0.7;
	}

  .gallery-card-mask{
    position: absolute;
    top: 38%;
    left: 0;
    width: 100%;
    height: 24vh;
    color: $white-text-color;
  }

  .proj-btn {
    font-size: 16px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease 0s;
  }

  &:hover .proj-btn {
    opacity: 1;
		transition-delay: 0.5s;
  }

}

.gallery-image {
  width: 100%;
  height: 24vh;
  display: block;
}
</style>
<template>
  <div>
    <MySplitPane />
  </div>
  <div class="experience-wrap">
    <div class="tab-wrap">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="card-wrap">
      <el-row :gutter="25">
        <el-col v-for="(item, index) in cardInfo" :key="index"  :span="8">
          <span 
            @mouseover="mouseOver(index)"
            @mouseleave="mouseLeave"
            :class="[
              animatingIndex === index ? 'animate__animated' : '', 
              item.animateClassName, 
              'animate__infinite', 'my-card-item'
            ]"
            :style="{animationDuration: '1200ms'}"
          >
            <svg class="icon" aria-hidden="true" v-html="item.iconItem">    
            </svg>{{item.tips}}
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import MySplitPane from "./splitPane/index.vue";


const activities = [
  {
    content: '前端开发-中国移动苏州研发中心',
    timestamp: '2020.06 ~ 至今',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: '访学-北卡罗来纳大学教堂山分校',
    timestamp: '2018.11 ~ 2019.05',
    color: '#0bbd87',
  },
  {
    content: '硕士-杭州电子科技大学',
    timestamp: '2017.09 ~ 2020.04',
    size: 'large',
  },
  {
    content: '本科-杭州电子科技大学',
    timestamp: '2013.09 ~ 2017.06',
    type: 'primary',
    hollow: true,
  },
]

const htmlString = ref()
let animatingIndex = ref(-1)

const cardInfo = [
  { tips: '前端开发', animateClassName: 'animate__bounce', iconItem: `<use xlink:href='#icon-kaifa'></use>` },
  { tips: '运维-监控-部署', animateClassName: 'animate__swing', iconItem: `<use xlink:href='#icon-icon-test1'></use>`},
  { tips: '后台管理系统', animateClassName: 'animate__flash', iconItem: `<use xlink:href='#icon-xitongshezhi'></use>` },
  { tips: '自动化学院', animateClassName: 'animate__flipInY', iconItem: `<use xlink:href='#icon-Robot-bad'></use>` },
  { tips: '深度学习-图像处理', animateClassName: 'animate__heartBeat', iconItem: `<use xlink:href='#icon-Imagetuxiangshibie'></use>` },
  { tips: '数据结构-算法', animateClassName: 'animate__tada', iconItem: `<use xlink:href='#icon-icon-rgb_jiqixuexisuanfayinqing'></use>` },
  { tips: '宅女、自嗨、佛系', animateClassName: 'animate__shakeY', iconItem: `<use xlink:href='#icon-kaixinguo'></use>` },
  { tips: '搬砖、干饭', animateClassName: 'animate__shakeX', iconItem: `<use xlink:href='#icon-icon-test'></use>` },
  { tips: '汪汪汪-_-!!', animateClassName: 'animate__jello', iconItem: `<use xlink:href='#icon-gougou1'></use>` },
]

const mouseOver = (index: number) => {
  animatingIndex.value = index
}
const mouseLeave = () => {
  animatingIndex.value = -1
}

</script>

<style lang="scss" scoped>
.experience-wrap {
  padding: 0px 100px;
  display: flex;
  .tab-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .card-wrap {
    padding-left: 50px;
    width: 60%;
  }
}
.icon {
  width: 1em;
  height: 1em;
  font-size: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  padding-right: 5px;
}
.my-card-item{
  height: 50px;
  padding: 10px;
  background-color: $tab-hover-background-color;
  color: $white-text-color;
  border: 1px solid $imp-text-color;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
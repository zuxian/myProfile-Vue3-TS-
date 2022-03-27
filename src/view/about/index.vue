<template>
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
        <el-col :span="8">
          <span class="my-card-item"> 
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaifa"></use>
            </svg>前端开发 
          </span>
        </el-col>
        <el-col :span="8">
          <span class="my-card-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test1"></use>
            </svg>运维-监控-部署 
          </span>
        </el-col>
        <el-col :span="8">
          <span class="my-card-item"> 
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xitongshezhi"></use>
            </svg>后台管理系统 
          </span>
        </el-col>
      </el-row>
      <el-row :gutter="25">
        <el-col :span="8">
          <span class="my-card-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Robot-bad"></use>
            </svg>自动化学院 
          </span>
        </el-col>
        <el-col :span="8">
          <span class="my-card-item"> 
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Imagetuxiangshibie"></use>
            </svg>深度学习-图像处理 
          </span>
        </el-col>
        <el-col :span="8">
          <span class="my-card-item"> 
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-rgb_jiqixuexisuanfayinqing"></use>
            </svg>数据结构-算法 
          </span>
        </el-col>
      </el-row>
      <el-row :gutter="25">
        <el-col :span="8">
          <span class="my-card-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaixinguo"></use>
            </svg>宅女、自嗨、佛系
          </span>
        </el-col>
        <el-col :span="8">
          <span class="my-card-item"> 
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test"></use>
            </svg>搬砖、干饭 
          </span>
        </el-col>
        <el-col :span="8">
          <span class="my-card-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gougou1"></use>
            </svg>汪汪汪-_-!! 
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

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
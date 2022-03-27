<template>
  <div :class="['header-container', {'opecity-background': !isScollTop}]" mode="horizontal">
    <div class="header-content">
      <div class="header-brand">
        <router-link to="/">fuzuxian</router-link>
      </div>
      <div class="header-tab">
        <div :class="[activeName==='home' ? 'active-color' : '', 'header-tab-item', 'header-tab-item-hover']" @click="handleClick('home')">
          <span class="tab-item-content">
            <span class="iconfont icon-zhuye"></span>home
          </span>
        </div>
        <div :class="[activeName==='about' ? 'active-color' : '', 'header-tab-item', 'header-tab-item-hover']" @click="handleClick('about')">
          <span class="tab-item-content">
            <span class="iconfont icon-207yonghu_yonghunv"></span>about
          </span>
        </div>
        <div :class="[activeName==='project' ? 'active-color' : '', 'header-tab-item', 'header-tab-item-hover']" @click="handleClick('project')">
          <span class="tab-item-content">
            <span class="iconfont icon-xiangmu"></span>project
          </span>
        </div>
        <div :class="[activeName==='life' ? 'active-color' : '', 'header-tab-item', 'header-tab-item-hover']" @click="handleClick('life')">
          <span class="tab-item-content">
            <span class="iconfont icon-icon"></span>life
          </span>
        </div>
        <div class="header-tab-item" @click="handleClick('life')">
          <el-button round> <span class="iconfont icon-xiangmu1"></span>resume </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'

let isScollTop = ref(true)
let activeName = ref('home')

const handleClick = (tabName: string) => {
  activeName.value = tabName
  const anchor = document.querySelector(`#${tabName}`)
  document.documentElement.scrollTop = (anchor?.offsetTop || 0) - 70

  console.log('------activeName-----', activeName.value)
}



</script>

<style lang="scss" scoped>
.header-container{
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    z-index: 1001;
    color: aliceblue;
    .header-content{
      height: 90%;
      padding: 10px 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-brand{
        height: 100%;
        font-size: 24px;
      }

      .header-tab{
        height: 100%;
        font-size: 20px;
        display: flex;
        .header-tab-item{
          height: 100%;
          position: relative;
          margin: auto 10px;
          cursor: pointer;
          color: aliceblue;
          display: flex;
          justify-content: center;
          align-items: center;
          .tab-item-content {
            padding: 0px 20px;
          }
          .iconfont {
            margin-right: 6px;
            font-size: 20px;
          }
        }
        .active-color{
          background-color: $tab-hover-background-color;
          color: $imp-text-color;
        }
        .header-tab-item-hover {
          &::before {
            content: "";
            position: absolute;
            height: 3px;
            width: 0;
            border-radius: 5px;
            background: $imp-text-color;
            left: 50%;
            top: -5px;
            transition: all 0.3s ease-out 0s;
          }

          &:hover{
            color: $imp-text-color;

            &::before{
              left: 0;
              width: 100%;
            }
          }
        }

      }
    }
}

.opecity-background {
  background-color: red;
}

</style>
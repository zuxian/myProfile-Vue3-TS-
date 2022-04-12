<template>
  <div :class="['header-container', {'opecity-background': !isScollTop}]" mode="horizontal">
    <div class="header-content">
      <div class="header-brand">
        <router-link to="/">fuzuxian</router-link>
      </div>
      <div class="header-center">
        <div 
          v-for="(item, index) in headerCenterInfo" 
          :key="index"
          :class="[activeName === item.nameItem ? 'active-color' : '', 'header-tab-item', 'header-tab-item-hover']" 
          @click="handleClick(item.nameItem)"
        >
          <span class="tab-item-content">
            <span :class="['iconfont', item.iconItem]"></span>{{ item.nameItem }}
          </span>
        </div>
      </div>
      <div :class="['header-brand', 'header-mode']">
        <span class="iconfont icon-lkingboyewanyueliang"></span>
        <span class="iconfont icon-zhongyingwen"></span>   
        <Screenfull />
        <WaterFall />
        <span  @click="handleClick('life')">
          <el-button round> resume </el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Screenfull from "./screenfull/index.vue"
import WaterFall from "./WaterFall/index.vue"

let isScollTop = ref(false)
let activeName = ref('home')

let headerCenterInfo = [
  { nameItem: 'home', iconItem: 'icon-zhuye' },
  { nameItem: 'about', iconItem: 'icon-207yonghu_yonghunv' },
  { nameItem: 'project', iconItem: 'icon-xiangmu' },
  { nameItem: 'life', iconItem: 'icon-icon' },
]

const handleClick = (tabName: string) => {
  activeName.value = tabName
  const anchor = document.querySelector(`#${tabName}`)
  document.documentElement.scrollTop = (anchor?.offsetTop || 0) - 70
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

  .iconfont {
    font-size: 22px;
  }

  .header-content{
    height: 90%;
    padding: 10px 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    .header-brand{
      width: 25%;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .header-mode {
      justify-content: flex-end;
      .iconfont {
        margin-right: 15px;
      }
    }

    .header-center{
      flex: 1;
      height: 100%;
      font-size: 20px;
      display: flex;
      justify-content: center;
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
      }
      .active-color{
        background-color: $tab-hover-background-color;
        color: $imp-text-color;
        .iconfont {
          color: $imp-text-color;
        }
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
          .iconfont {
            color: $imp-text-color;
          }
          
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
  background-color: $btn-background-color;
}

</style>
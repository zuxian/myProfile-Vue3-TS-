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
      <div class="header-brand">
        <router-link to="/">fuzux222ian</router-link>
        <span  @click="handleClick('life')">
          <el-button round> <span class="iconfont icon-xiangmu1"></span>resume </el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

    .header-center{
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
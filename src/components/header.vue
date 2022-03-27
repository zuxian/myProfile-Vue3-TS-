<template>
  <div :class="['header-container', {'opecity-background': !isScollTop}]" mode="horizontal">
    <div class="header-content">
      <div class="header-brand">
        <router-link to="/">fuzuxian</router-link>
      </div>
      <div class="header-tab">
        <div class="header-tab-item" @click="handleClick('home')">
          <span class="iconfont icon-zhuye"></span>home
        </div>
        <div class="header-tab-item" @click="handleClick('about')">
          <span class="iconfont icon-207yonghu_yonghunv"></span>about
        </div>
        <div class="header-tab-item" @click="handleClick('project')">
          <span class="iconfont icon-xiangmu"></span>project
        </div>
        <div class="header-tab-item" @click="handleClick('life')">
          <span class="iconfont icon-icon"></span>life
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

// const router = useRouter()
let isScollTop = ref(true)
let activeName = ref('home')

const handleClick = (tabName: String) => {
  const anchor = document.querySelector(`#${tabName}`)
  console.log('-----anchor--anchor------', anchor.offsetTop)

  document.documentElement.scrollTop = anchor?.offsetTop - 70

  console.log('-----document.documentElement.scrollTop------', document.documentElement.scrollTop)

  // ?.scrollIntoView(
  //   false
  // );
  // console.log(activeName.value, '------tab-------', tab)
  // router.push({ name: activeName.value, })
}

// const refreshPage = () => {
// }

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
        // flex-direction: row;
        justify-content: center;
        align-items: center;
        .header-tab-item{

          height: 100%;
          position: relative;
          margin: auto 20px;

          &::before {
            content: "";
            position: absolute;
            height: 5px;
            width: 0;
            border-bottom: 5px solid $imp-text-color;
            left: 50%;
            top: -5px;
            transition: all 0.3s ease-out 0.3s;
          }

          &:hover{
            color: $imp-text-color;
            &::before{
              left: 0;
              width: 100%;
            }
          }


          .iconfont {
            margin-right: 6px;
            font-size: 20px;
          }
        }
      }
    }
}

.opecity-background {
  background-color: red;
}

</style>
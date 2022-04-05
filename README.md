

##  Vue3.2 + Typescript + Vite2 + ElementUI plus + Sass


## 搭建项目流程

```shell
# 安装vite
npm init vite@latest

npm create vite@latest my-vue-app -- --template vue
# 或者
npm install -g create-vite-app
create-vite-app my-vue-app
```

#### 上传代码到github上

```shell
git init
git remote add origin https://github.com/zuxian/myProfile-Vue3-TS-.git

git config user.name "zuxian"
git config user.email "zuxian_fu@163.com"

git chekcout -b vue3_ts_vite
git add .
git commit -m 'hahahah'
git push -f git@github.com:zuxian/myProfile-Vue3-TS-.git  vue3_ts_vite:vue3_ts_vite
```


#### 安装vue-router 4.x

`npm install vue-router@next -S`

本项目采用hash路由，src下创建router/index.ts

```ts
// createWebHashHistory, createWebHistory
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: (_) => { return { path: '/home' } }, },
  { path: '/home', name: 'HelloWorld', component: HelloWorld, },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => { return { path: '/home' } },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { el: '#app', top: 0, behavior: 'smooth', }
  },
})
export default router
```

main.ts

```ts
import router from './router/index'
const app = createApp(App)
app.use(router)
```


####  按需引进elementUI plus

[elementUI plus官网按需导入](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)

`npm install element-plus --save`
`npm i unplugin-vue-components unplugin-auto-import -D`

配置Vite---vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()], }),
    Components({ resolvers: [ElementPlusResolver()], }),
  ],
})
```
不需要配置main.ts，在页面中直接使用element组件，运行时，会自动生成auto-imports.d.ts文件导入组件


#### 配置css预处理器sass

`cnpm install --save-dev sass-loader node-sass sass`

在src/assets下新增style文件夹，用于存放全局样式文件，新建variables.scss

`$test-color: red;`

将这个全局样式文件全局注入到项目中呢？配置Vite

```js
import { resolve } from 'path'

  // 配置别名
  resolve: { alias: { '@': resolve(__dirname, 'src') }, },
  css: {
    preprocessorOptions: {
      scss: { additionalData: '@import "@/assets/style/variables.scss";' },
    },
  },
```

组件中不需要任何引入，直接使用全局scss定义的变量

`.test{ color: $test-color; }`

- 重置浏览器自带样式




#### 配置ts代码格式化校验


####  支持tsx文件

`cnpm install @vitejs/plugin-vue-jsx --save-dev`

vite.config.ts 文件配置

```js
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [ vue(), vueJsx() ],
})
```
tsconfig.json 文件配置

`"include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],`

- tsx文件写法例子






####  导航跳转-锚点设置

每个模块都要设置id

```vue
<script setup lang="ts">
import { ref } from 'vue'

let activeName = ref('home')

const handleClick = (tabName: string) => {
  activeName.value = tabName
  const anchor = document.querySelector(`#${tabName}`)
  document.documentElement.scrollTop = (anchor?.offsetTop || 0) - 70
}
</script>
```

####  使用动画animate.css

`cnpm install animate.css --save`

main.ts 引进 `import 'animate.css/animate.min.css'`

- 使用例子

```vue
<template>
<el-col v-for="(item, index) in cardInfo" :key="index"  :span="8">
  <span 
    @mouseover="mouseOver(index)"
    @mouseleave="mouseLeave"
    :class="[ animatingIndex === index ? 'animate__animated' : '', 
      item.animateClassName, 'animate__infinite', 'my-card-item']"
    :style="{animationDuration: '1200ms'}"
  >
    <svg class="icon" aria-hidden="true" v-html="item.iconItem"></svg>{{item.tips}}
  </span>
</el-col>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let animatingIndex = ref(-1)

const cardInfo = [
  { tips: '前端开发', animateClassName: 'animate__bounce', iconItem: `<use xlink:href='#icon-kaifa'></use>` },
  { tips: '后台管理系统', animateClassName: 'animate__flash', iconItem: `<use xlink:href='#icon-xitongshezhi'></use>` },
  { tips: '搬砖、干饭', animateClassName: 'animate__shakeX', iconItem: `<use xlink:href='#icon-icon-test'></use>` },
  { tips: '汪汪汪-_-!!', animateClassName: 'animate__jello', iconItem: `<use xlink:href='#icon-gougou1'></use>` },
]

const mouseOver = (index: number) => animatingIndex.value = index
const mouseLeave = () => animatingIndex.value = -1
</script>
```

#### 切割面板组件封装

https://juejin.cn/post/6844903890144493575

https://blog.csdn.net/weixin_44571638/article/details/120012214


js三大特效offset、scroll、client:  https://blog.csdn.net/muzidigbig/article/details/81062362

- 事件对象属性：
clientX/clientY: 鼠标位子相对于浏览器可视区域鼠标位于浏览器的左侧和顶部的距离。（可视页面，不会计算水平滚动的距离）
pageY/pageX: 鼠标位子相对于浏览器可视区域body的顶部和左侧部分的距离。（整个页面，受滚动条影响）
screenY/screenX: 鼠标位子相对于浏览器有效区域的上方和左侧的距离。（屏幕，X轴受滚动条的影响）
offsetX/offsetY:相对于定位父盒子最左上角的x，y坐标。（页面，受滚动条影响）

- 当前元素的偏移位置：
offsetTop/offsetLeft:相对于定位父盒子最左上角的x，y坐标。（页面，受滚动条影响）


![screenX、pageX、offsetX和clientX的区别](https://img-blog.csdnimg.cn/20200707075426281.png?…G4ubmV0L211emlkaWdiaWc=,size_16,color_FFFFFF,t_70)

// event.target和currentTarget属性的区别
// event.target 获取的是触发事件的标签元素
// event.currentTarget 获取到的是发起事件的标签元素，返回的是绑定事件的元素


offsetWidth和offsetHight （检测盒子自身宽高+padding+border）
offsetLeft和offsetTop（元素的left/top距离有定位的父盒子左/上面的距离，该元素的左上角与父容器（offsetParent对象）左上角的距离）
 // offsetParent(检测父系盒子中带有定位的父盒子节点）（position为absolute或relative，fixed）

mousedown--按键被按下 
三个事件的触发顺序 ------ 前一个事件执行完毕才会执行下一个事件
若在同一个元素上按下并松开鼠标左键，会依次触发mousedown、mouseup、click，
若在同一个元素上按下并松开鼠标右键，会依次触发mousedown、mouseup，不会触发click事件 


#### 页面水印

canvas的toDataURL()
通过将字体/图片绘制到canvas中，然后将canvas对象转换为base64编码，从而实现图片转为base64编码；



#### vue3+typescript中引入外部文件

比如  echart

https://www.cnblogs.com/ttjm/p/10494905.html



####  echart按需引进+自定义主题

> 下载或复制以下的主题保存至 *.json 文件；
> 读取该 JSON 文件，并使用 obj = JSON.parse(data) 将其转换成对象；
> 调用 echarts.registerTheme('purple-passion', obj) 注册主题；
> 使用 echarts.init(dom, 'purple-passion') 创建图表，第二个参数即为刚才注册的主题名字。




#### 遮罩动画、蒙层颜色过滤实现




#### 全屏模式

https://juejin.cn/post/7027537424318201863

`import { useFullscreen } from "@vueuse/core"`

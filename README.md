

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






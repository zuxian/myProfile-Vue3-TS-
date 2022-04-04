import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import { useElementPlus } from "../src/plugins/element-plus";


import '@/assets/style/index.scss'
import '@/assets/icons/iconfont.css'
import '@/assets/icons/iconfont.js'

// import animate from 'animate.css'
import 'animate.css/animate.min.css'

// import { createPinia } from 'pinia'
// import { ElButton  } from 'element-plus'

const app = createApp(App)

app.use(router)
app.use(useElementPlus)
// app.use(animate)
// app.component(ElButton.name, ElButton)


// app.use(createPinia())

app.mount('#app')

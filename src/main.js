import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'
// 判断图片是否进入视口
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
  mounted(el,bindling){
    //el:指令绑定的那个元素 img
    //bindling:binding.value 指令等于号后面绑定的表达式的值  图片URL
    console.log(el,bindling.value)
    useIntersectionObserver(
      el,
      ([{isIntersecting}])=>{
       console.log(isIntersecting)
       if (isIntersecting){
        //进入视口区域
        el.src = bindling.value
       }
      },
    )
  }
})

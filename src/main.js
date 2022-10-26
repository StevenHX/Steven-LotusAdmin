import { createApp } from 'vue'
import App from './App.vue'

// pinia
import store from './store'

// 加载全局样式
import '@/assets/styles/index.scss'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import animated from 'animate.css'
import  'animate.css'

import directive from './directive'

import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'

// 分页组件
import Pagination from '@/components/Pagination'


const app = createApp(App);

// 设置pinia
app.use(store)

// 设置element-plus
app.use(ElementPlus, {
    locale: locale,
    size: 'default'
})

// 设置animate-css
app.use(animated)

// 设置自定义指令
directive(app)

//设置svg
app.use(elementIcons)

app.component('svg-icon', SvgIcon)

// 全局组件挂载
app.component('Pagination', Pagination)

app.mount('#app')

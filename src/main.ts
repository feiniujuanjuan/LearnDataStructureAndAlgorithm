// 买一个花盆
import { createApp } from "vue";
// 买一朵花
import App from './App.vue';
import router from "./router";

import '@/assets/css/common.scss'

// 引入elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 把花养在花盆里
const app = createApp(App);

app.use(router);
app.use(ElementPlus);

// 把花盆放置在家里
app.mount('#app');
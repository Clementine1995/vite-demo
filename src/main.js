import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'

import { Menu } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';



createApp(App).use(Menu).use(router).mount('#app')

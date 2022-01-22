import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import viteCompression from 'vite-plugin-compression'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import postcssNesting from 'postcss-nesting'
import ViteComponents, {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      // https://github.com/vuejs/jsx-next
    }),
    Components({
      dts: true, // 启用ts支持
      resolvers: [
        // https://github.com/antfu/unplugin-vue-components
        AntDesignVueResolver(), // 配置 ant design vue 按需加载支持
      ],
    }),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})

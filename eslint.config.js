// import { defineConfig, globalIgnores } from 'eslint/config'
// import globals from 'globals'
// import js from '@eslint/js'
// import pluginVue from 'eslint-plugin-vue'

// export default defineConfig([
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{js,mjs,jsx,vue}'],
//   },

//   globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//       },
//     },
//   },

//   js.configs.recommended,
//   ...pluginVue.configs['flat/essential'],

// ])
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // 正确的忽略方式
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off', // 关闭 Vue 组件名必须为多单词的规则
      'no-console': 'warn', // 增加新规则，使用 console.log 触发警告
    },
    extends: [
      'eslint:recommended', // JavaScript 推荐规则
      ...pluginVue.configs['flat/essential'], // Vue 推荐规则
    ],
  },
])

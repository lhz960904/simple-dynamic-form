import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  title: 'JSON Form',
  mode: 'site',
  logo: false,
  locales: [['zh-CN', '中文']],
  navs: [
    {
      title: '教程',
      path: '/introduce',
    },
    {
      title: '自定义主题',
      path: '/custom-theme',
    },
    {
      title: 'playground',
      path: '/playground',
    },
    {
      title: '表单编辑器',
      path: '/editor',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/lhz960904/simple-dynamic-form',
    },
  ],
  alias: {
    '@jsonform/core': path.resolve(__dirname, 'packages/core'),
  },
  // more config: https://d.umijs.org/config
});

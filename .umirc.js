import { defineConfig } from 'dumi';
import path from 'path';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  title: 'JSON Form',
  mode: 'site',
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
  base: '/dynamic-form-website/',
  publicPath: '/dynamic-form-website/',
  extraBabelIncludes: ['react-monaco-editor'],
  chainWebpack(webpack) {
    webpack
      .plugin('monaco')
      .use(MonacoWebpackPlugin, [{ languages: ['json'] }]);

    return webpack;
  },
  // more config: https://d.umijs.org/config
});

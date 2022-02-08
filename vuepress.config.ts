import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  lang: 'zh-CN',
  title: `Naldo's Blog`,
  description: `欢迎来到我的博客`,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/svg/chick.svg',
    navbar: [
      { text: '主页', link: '/' },
      {
        text: '回忆',
        children: [
          { text: '1', link: '/memory' }
        ]
      }
    ]
  }
})
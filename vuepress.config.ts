import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/blog/',
  lang: 'zh-CN',
  title: `Naldo's Blog`,
  description: `欢迎来到我的博客`
})
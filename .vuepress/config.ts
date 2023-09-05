import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Ayan",
  description: '永远相信美好的事情即将发生',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Ayan",
    authorAvatar: "/aimyon.jpg",
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdatedText: "最近更新",
    navbar: [
      { text: "首页", link: "/",icon: "Home" },
      { text: "分类", link: "/categories/qianduan/1/", icon: "Category" },
      { text: "标签", link: "/tags/shenghuo/1/", icon: "Tag" },
      { text: "时间轴", link: "/timeline"},
      {text:'相册', link:"https://maybeayan.github.io/photoAlbum/"},
      { text: '留言板', link: '/docs/message-board', icon: 'Chat' },
      {text:'关于',link:'/docs/about-me'}
    ],
    VuePreviewDir:"./docs/.vuepress/vue-previews",
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'MaybeAyan/docsV2',
        repoId: 'R_kgDOKPJ_dw',
        category: 'Announcements',
        categoryId: 'DIC_kwDOKPJ_d84CZFjs',
        mapping: 'title',
        strict: '1',
        lang: 'zh-CN',
        crossorigin: 'anonymous'
      }
    },
    plugins:[
      prismjsPlugin({
        preloadLanguages:['markdown', 'jsdoc', 'yaml']
      })

    ]
  }),
});

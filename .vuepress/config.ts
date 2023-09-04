import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  lang: 'zh-CN',
  title: "林一彦",
  description: '永远相信美好的事情即将发生',
  head:[['link', {rel:'icon',href:'./'}]],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Ayan",
    authorAvatar: "/aimyon.jpg",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
     // 自动设置分类
     autoSetBlogCategories: true,
     // 自动将分类和标签添加至头部导航条
     autoAddCategoryToNavbar: {
       location: 1, // 默认 0
       categoryText: '分类', // 默认 categories
       tagText: '标签' // 默认 tags
     },
    lastUpdatedText: "",
    autoSetSeries: true,
    // catalogTitle: '自定义目录标题',
    // series 为原 sidebar
    // series: {
    //   "/docs/theme-reco/": [
    //     {
    //       text: "module one",
    //       children: ["home", "theme"],
    //     },
    //     {
    //       text: "module two",
    //       children: ["api", "plugin"],
    //     },
    //   ],
    // },
    navbar: [
      { text: "首页", link: "/" },
      { text: "时间轴", link: "/timeline"},
      {text:'相册', link:"https://maybeayan.github.io/photoAlbum/"}
    ],
    bulletin: {
      // body: [
      //   {
      //     type: "text",
      //     content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "title",
      //     content: "QQ 群",
      //   },
      //   {
      //     type: "text",
      //     content: `
      //     <ul>
      //       <li>QQ群1：1037296104</li>
      //       <li>QQ群2：1061561395</li>
      //       <li>QQ群3：962687802</li>
      //     </ul>`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "title",
      //     content: "GitHub",
      //   },
      //   {
      //     type: "text",
      //     content: `
      //     <ul>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
      //     </ul>`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "buttongroup",
      //     children: [
      //       {
      //         text: "打赏",
      //         link: "/docs/others/donate.html",
      //       },
      //     ],
      //   },
      // ],
    },
    commentConfig: {
      type: 'valie',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: 'ghDCBwuR22YO5rPLDfpSjdGu-gzGzoHsz',// your appId
        appKey: '8YImIiSkruo2HBkVxdQTURbP', // your appKey
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      },
    },
    plugins:[
      prismjsPlugin({
        preloadLanguages:['markdown', 'jsdoc', 'yaml']
      })

    ]
  }),
  // debug: true,
});

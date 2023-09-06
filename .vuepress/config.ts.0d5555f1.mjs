// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import recoTheme from "vuepress-theme-reco";
var config_default = defineUserConfig({
  lang: "zh-CN",
  title: "EveryDay All I love",
  description: "\u6C38\u8FDC\u76F8\u4FE1\u7F8E\u597D\u7684\u4E8B\u60C5\u5373\u5C06\u53D1\u751F",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Ayan",
    authorAvatar: "/aimyon.jpg",
    head: [
      ["link", { rel: "icon", href: "/favicon.ico" }]
    ],
    lastUpdatedText: "\u6700\u8FD1\u66F4\u65B0",
    navbar: [
      { text: "\u9996\u9875", link: "/", icon: "Home" },
      { text: "\u5206\u7C7B", link: "/categories/qianduan/1/", icon: "Category" },
      { text: "\u6807\u7B7E", link: "/tags/shenghuo/1/", icon: "Tag" },
      { text: "\u65F6\u95F4\u8F74", link: "/timeline" },
      { text: "\u76F8\u518C", link: "https://maybeayan.github.io/photoAlbum/" },
      { text: "\u7559\u8A00\u677F", link: "/docs/message-board", icon: "Chat" },
      { text: "\u5173\u4E8E", link: "https://maybeayan.github.io/about/" }
    ],
    VuePreviewDir: "./docs/.vuepress/vue-previews",
    componentsDir: "./docs/.vuepress/components",
    commentConfig: {
      type: "giscus",
      options: {
        repo: "MaybeAyan/docsV2",
        repoId: "R_kgDOKPJ_dw",
        category: "Announcements",
        categoryId: "DIC_kwDOKPJ_d84CZFjs",
        mapping: "title",
        strict: "1",
        lang: "zh-CN",
        crossorigin: "anonymous"
      }
    },
    plugins: [
      prismjsPlugin({
        preloadLanguages: ["markdown", "jsdoc", "yaml"]
      })
    ]
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvZG9jc1YyLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxkb2NzVjJcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9kb2NzVjIvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lT3B0aW9ucyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHsgcHJpc21qc1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tcHJpc21qcydcbmltcG9ydCByZWNvVGhlbWUgZnJvbSBcInZ1ZXByZXNzLXRoZW1lLXJlY29cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGxhbmc6ICd6aC1DTicsXG4gIHRpdGxlOiBcIkV2ZXJ5RGF5IEFsbCBJIGxvdmVcIixcbiAgZGVzY3JpcHRpb246ICdcdTZDMzhcdThGRENcdTc2RjhcdTRGRTFcdTdGOEVcdTU5N0RcdTc2ODRcdTRFOEJcdTYwQzVcdTUzNzNcdTVDMDZcdTUzRDFcdTc1MUYnLFxuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV1cbiAgXSxcbiAgdGhlbWU6IHJlY29UaGVtZSh7XG4gICAgc3R5bGU6IFwiQHZ1ZXByZXNzLXJlY28vc3R5bGUtZGVmYXVsdFwiLFxuICAgIGxvZ286IFwiL2xvZ28ucG5nXCIsXG4gICAgYXV0aG9yOiBcIkF5YW5cIixcbiAgICBhdXRob3JBdmF0YXI6IFwiL2FpbXlvbi5qcGdcIixcbiAgICBoZWFkOiBbXG4gICAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJyB9XVxuICAgIF0sXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiBcIlx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFwiLFxuICAgIG5hdmJhcjogW1xuICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIixpY29uOiBcIkhvbWVcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NTIwNlx1N0M3QlwiLCBsaW5rOiBcIi9jYXRlZ29yaWVzL3FpYW5kdWFuLzEvXCIsIGljb246IFwiQ2F0ZWdvcnlcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NjgwN1x1N0I3RVwiLCBsaW5rOiBcIi90YWdzL3NoZW5naHVvLzEvXCIsIGljb246IFwiVGFnXCIgfSxcbiAgICAgIHsgdGV4dDogXCJcdTY1RjZcdTk1RjRcdThGNzRcIiwgbGluazogXCIvdGltZWxpbmVcIn0sXG4gICAgICB7dGV4dDonXHU3NkY4XHU1MThDJywgbGluazpcImh0dHBzOi8vbWF5YmVheWFuLmdpdGh1Yi5pby9waG90b0FsYnVtL1wifSxcbiAgICAgIHsgdGV4dDogJ1x1NzU1OVx1OEEwMFx1Njc3RicsIGxpbms6ICcvZG9jcy9tZXNzYWdlLWJvYXJkJywgaWNvbjogJ0NoYXQnIH0sXG4gICAgICB7dGV4dDonXHU1MTczXHU0RThFJyxsaW5rOidodHRwczovL21heWJlYXlhbi5naXRodWIuaW8vYWJvdXQvJ31cbiAgICBdLFxuICAgIFZ1ZVByZXZpZXdEaXI6XCIuL2RvY3MvLnZ1ZXByZXNzL3Z1ZS1wcmV2aWV3c1wiLFxuICAgIGNvbXBvbmVudHNEaXI6IFwiLi9kb2NzLy52dWVwcmVzcy9jb21wb25lbnRzXCIsXG4gICAgY29tbWVudENvbmZpZzoge1xuICAgICAgdHlwZTogJ2dpc2N1cycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlcG86ICdNYXliZUF5YW4vZG9jc1YyJyxcbiAgICAgICAgcmVwb0lkOiAnUl9rZ0RPS1BKX2R3JyxcbiAgICAgICAgY2F0ZWdvcnk6ICdBbm5vdW5jZW1lbnRzJyxcbiAgICAgICAgY2F0ZWdvcnlJZDogJ0RJQ19rd0RPS1BKX2Q4NENaRmpzJyxcbiAgICAgICAgbWFwcGluZzogJ3RpdGxlJyxcbiAgICAgICAgc3RyaWN0OiAnMScsXG4gICAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICAgIGNyb3Nzb3JpZ2luOiAnYW5vbnltb3VzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGx1Z2luczpbXG4gICAgICBwcmlzbWpzUGx1Z2luKHtcbiAgICAgICAgcHJlbG9hZExhbmd1YWdlczpbJ21hcmtkb3duJywgJ2pzZG9jJywgJ3lhbWwnXVxuICAgICAgfSlcblxuICAgIF1cbiAgfSksXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVMsU0FBUyx3QkFBd0I7QUFFcFUsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxlQUFlO0FBRXRCLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsRUFDaEQ7QUFBQSxFQUNBLE9BQU8sVUFBVTtBQUFBLElBQ2YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsTUFBTTtBQUFBLE1BQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsSUFDaEQ7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLElBQ2pCLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxnQkFBTSxNQUFNLEtBQUksTUFBTSxPQUFPO0FBQUEsTUFDckMsRUFBRSxNQUFNLGdCQUFNLE1BQU0sMkJBQTJCLE1BQU0sV0FBVztBQUFBLE1BQ2hFLEVBQUUsTUFBTSxnQkFBTSxNQUFNLHFCQUFxQixNQUFNLE1BQU07QUFBQSxNQUNyRCxFQUFFLE1BQU0sc0JBQU8sTUFBTSxZQUFXO0FBQUEsTUFDaEMsRUFBQyxNQUFLLGdCQUFNLE1BQUssMENBQXlDO0FBQUEsTUFDMUQsRUFBRSxNQUFNLHNCQUFPLE1BQU0sdUJBQXVCLE1BQU0sT0FBTztBQUFBLE1BQ3pELEVBQUMsTUFBSyxnQkFBSyxNQUFLLHFDQUFvQztBQUFBLElBQ3REO0FBQUEsSUFDQSxlQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsSUFDZixlQUFlO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsUUFDWixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxRQUNaLGtCQUFpQixDQUFDLFlBQVksU0FBUyxNQUFNO0FBQUEsTUFDL0MsQ0FBQztBQUFBLElBRUg7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

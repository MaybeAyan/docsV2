// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import recoTheme from "vuepress-theme-reco";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
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
      }),
      googleAnalyticsPlugin({
        id: "G-TND2H804VN"
      })
    ]
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvZG9jc1YyLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxkb2NzVjJcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9kb2NzVjIvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lT3B0aW9ucyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHsgcHJpc21qc1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tcHJpc21qcydcbmltcG9ydCByZWNvVGhlbWUgZnJvbSBcInZ1ZXByZXNzLXRoZW1lLXJlY29cIjtcbmltcG9ydCB7IGdvb2dsZUFuYWx5dGljc1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tZ29vZ2xlLWFuYWx5dGljcydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGxhbmc6ICd6aC1DTicsXG4gIHRpdGxlOiBcIkV2ZXJ5RGF5IEFsbCBJIGxvdmVcIixcbiAgZGVzY3JpcHRpb246ICdcdTZDMzhcdThGRENcdTc2RjhcdTRGRTFcdTdGOEVcdTU5N0RcdTc2ODRcdTRFOEJcdTYwQzVcdTUzNzNcdTVDMDZcdTUzRDFcdTc1MUYnLFxuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV1cbiAgXSxcbiAgdGhlbWU6IHJlY29UaGVtZSh7XG4gICAgc3R5bGU6IFwiQHZ1ZXByZXNzLXJlY28vc3R5bGUtZGVmYXVsdFwiLFxuICAgIGxvZ286IFwiL2xvZ28ucG5nXCIsXG4gICAgYXV0aG9yOiBcIkF5YW5cIixcbiAgICBhdXRob3JBdmF0YXI6IFwiL2FpbXlvbi5qcGdcIixcbiAgICBoZWFkOiBbXG4gICAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJyB9XVxuICAgIF0sXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiBcIlx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFwiLFxuICAgIG5hdmJhcjogW1xuICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIixpY29uOiBcIkhvbWVcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NTIwNlx1N0M3QlwiLCBsaW5rOiBcIi9jYXRlZ29yaWVzL3FpYW5kdWFuLzEvXCIsIGljb246IFwiQ2F0ZWdvcnlcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NjgwN1x1N0I3RVwiLCBsaW5rOiBcIi90YWdzL3NoZW5naHVvLzEvXCIsIGljb246IFwiVGFnXCIgfSxcbiAgICAgIHsgdGV4dDogXCJcdTY1RjZcdTk1RjRcdThGNzRcIiwgbGluazogXCIvdGltZWxpbmVcIn0sXG4gICAgICB7dGV4dDonXHU3NkY4XHU1MThDJywgbGluazpcImh0dHBzOi8vbWF5YmVheWFuLmdpdGh1Yi5pby9waG90b0FsYnVtL1wifSxcbiAgICAgIHsgdGV4dDogJ1x1NzU1OVx1OEEwMFx1Njc3RicsIGxpbms6ICcvZG9jcy9tZXNzYWdlLWJvYXJkJywgaWNvbjogJ0NoYXQnIH0sXG4gICAgICB7dGV4dDonXHU1MTczXHU0RThFJyxsaW5rOidodHRwczovL21heWJlYXlhbi5naXRodWIuaW8vYWJvdXQvJ31cbiAgICBdLFxuICAgIFZ1ZVByZXZpZXdEaXI6XCIuL2RvY3MvLnZ1ZXByZXNzL3Z1ZS1wcmV2aWV3c1wiLFxuICAgIGNvbXBvbmVudHNEaXI6IFwiLi9kb2NzLy52dWVwcmVzcy9jb21wb25lbnRzXCIsXG4gICAgY29tbWVudENvbmZpZzoge1xuICAgICAgdHlwZTogJ2dpc2N1cycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlcG86ICdNYXliZUF5YW4vZG9jc1YyJyxcbiAgICAgICAgcmVwb0lkOiAnUl9rZ0RPS1BKX2R3JyxcbiAgICAgICAgY2F0ZWdvcnk6ICdBbm5vdW5jZW1lbnRzJyxcbiAgICAgICAgY2F0ZWdvcnlJZDogJ0RJQ19rd0RPS1BKX2Q4NENaRmpzJyxcbiAgICAgICAgbWFwcGluZzogJ3RpdGxlJyxcbiAgICAgICAgc3RyaWN0OiAnMScsXG4gICAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICAgIGNyb3Nzb3JpZ2luOiAnYW5vbnltb3VzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGx1Z2luczpbXG4gICAgICBwcmlzbWpzUGx1Z2luKHtcbiAgICAgICAgcHJlbG9hZExhbmd1YWdlczpbJ21hcmtkb3duJywgJ2pzZG9jJywgJ3lhbWwnXVxuICAgICAgfSksXG4gICAgICBnb29nbGVBbmFseXRpY3NQbHVnaW4oe1xuICAgICAgICBpZDogJ0ctVE5EMkg4MDRWTicsXG4gICAgICB9KSxcbiAgICBdXG4gIH0pLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1TLFNBQVMsd0JBQXdCO0FBRXBVLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sZUFBZTtBQUN0QixTQUFTLDZCQUE2QjtBQUV0QyxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUFBLEVBQ2hEO0FBQUEsRUFDQSxPQUFPLFVBQVU7QUFBQSxJQUNmLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLE1BQU07QUFBQSxNQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUFBLElBQ2hEO0FBQUEsSUFDQSxpQkFBaUI7QUFBQSxJQUNqQixRQUFRO0FBQUEsTUFDTixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxLQUFJLE1BQU0sT0FBTztBQUFBLE1BQ3JDLEVBQUUsTUFBTSxnQkFBTSxNQUFNLDJCQUEyQixNQUFNLFdBQVc7QUFBQSxNQUNoRSxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxxQkFBcUIsTUFBTSxNQUFNO0FBQUEsTUFDckQsRUFBRSxNQUFNLHNCQUFPLE1BQU0sWUFBVztBQUFBLE1BQ2hDLEVBQUMsTUFBSyxnQkFBTSxNQUFLLDBDQUF5QztBQUFBLE1BQzFELEVBQUUsTUFBTSxzQkFBTyxNQUFNLHVCQUF1QixNQUFNLE9BQU87QUFBQSxNQUN6RCxFQUFDLE1BQUssZ0JBQUssTUFBSyxxQ0FBb0M7QUFBQSxJQUN0RDtBQUFBLElBQ0EsZUFBYztBQUFBLElBQ2QsZUFBZTtBQUFBLElBQ2YsZUFBZTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsWUFBWTtBQUFBLFFBQ1osU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsUUFDWixrQkFBaUIsQ0FBQyxZQUFZLFNBQVMsTUFBTTtBQUFBLE1BQy9DLENBQUM7QUFBQSxNQUNELHNCQUFzQjtBQUFBLFFBQ3BCLElBQUk7QUFBQSxNQUNOLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

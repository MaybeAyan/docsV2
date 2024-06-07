---
title: vue3+electron+tailwindcss 集成踩坑指北~
date: 2024-06-07
tags:
  - electron
categories:
  - 前端
theme: channing-cyan
---

## 背景

手上有个项目使用 gulp 构建 ts 脚本打包 js 的流程，ts 脚本都是使用面向对象依赖注入那一套的，打包成 js 之前要注入 json 参数。本来计划是和后端一起处理的，后面想到既然 electron 有 node 的支持，那就试一下用 vue3 + electron 自己实现一下整个打包流程吧。

## 准备工作

参考 `小满zs` 文章 [Vue3 Vite electron 开发桌面程序\_vue3 vite 桌面应用开发-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/131713875?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171765394416800182740542%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=171765394416800182740542&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-2-131713875-null-null.nonecase&utm_term=electron&spm=1018.2226.3001.4450)

### 安装依赖

```bash
# 创建Vue项目
 npm init vue
# 安装依赖
npm install
# 一定要安装成开发依赖
npm install electron electron-builder -D
# 安装超时 请使用某宝镜像 或者XX上网
npm config set electron_mirror=https://registry.npmmirror.com/-/binary/electron/

```

### 目录准备

新建一个目录 plugins 编写 vite 插件启动 electron

#### background.ts

```javascript
import { app, BrowserWindow, ipcMain } from "electron";
import fs from "fs";
import path from "path";

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true, // 渲染进程使用 node
      contextIsolation: false, // 关闭渲染进程沙箱
      webSecurity: false, // 关闭跨越检测
    },
    title: "vite-electron",
  });
  win.setMenu(null); // 不设置顶部菜单
  win.setSize(1100, 700); // 设置初始窗口大小
  win.webContents.openDevTools(); // 打开开发者工具
  // 根据命令行参数加载URL或本地文件
  if (process.argv[2]) {
    win.loadURL(process.argv[2]);
  } else {
    win.loadFile("index.html");
  }
});
```

检查命令行参数，如果有参数则加载 URL，否则加载本地文件`index.html`。在开发模式下，可以将 URL 指向本地的开发服务器，以便实现热更新和实时调试。在生产模式下，需要将 URL 指向本地的`index.html`文件，以便在本地运行 Electron 应用程序。

#### vite.electron.dev.ts

```javascript
import type { AddressInfo } from 'net'
import type { Plugin } from 'vite'
import { spawn } from 'child_process'
import fs from 'fs'

export const ElectronDevPlugin = (): Plugin => {
  return {
    name: 'electron-dev',
    // 配置钩子
    configureServer(server) {
      const initElectron = () => {
        // 使用esbuild编译TypeScript代码为JavaScript
        require('esbuild').buildSync({
          entryPoints: ['src/background.ts'],
          bundle: true,
          outfile: 'dist/background.js',
          platform: 'node',
          target: 'node12',
          external: ['electron']
        })
      }
      initElectron()
      server?.httpServer?.once('listening', () => {
        const addressInfo = server.httpServer?.address() as AddressInfo
        const IP = `http://localhost:${addressInfo.port}`
        let electronProcess = spawn(require('electron'), ['dist/background.js', IP])
        console.log(IP)

        fs.watchFile('src/background.ts', () => {
          // 杀死当前的Electron进程
          electronProcess.kill()
          // 重新编译主进程代码并重新启动Electron进程
          initElectron()
          electronProcess = spawn(require('electron'), ['dist/background.js', IP])
        })
      })
    }
  }
}

```

`configureServer`是 Vite 的一个插件钩子函数，用于在 Vite 开发服务器启动时执行一些自定义逻辑。该函数接受一个`ServerOptions`对象作为参数，该对象包含有关当前 Vite 服务器的配置信息。在这个钩子函数中，您可以访问 Vite 服务器的 HTTP 服务器对象（`httpServer`），WebSocket 服务器对象（`wsServer`）和 Vite 的构建配置对象（`config`）等。您可以使用这些对象来实现各种功能，例如自定义路由、添加中间件、实现实时重载和调试等。

#### vite.electron.build.ts

```javascript
import type { Plugin } from "vite";
import * as electronBuilder from "electron-builder";
import path from "path";
import fs from "fs";

// 导出Vite插件函数
export const viteElectronBuild = (): Plugin => {
  return {
    name: "vite-electron-build",

    // closeBundle是Vite的一个插件钩子函数，用于在Vite构建完成后执行一些自定义逻辑。
    closeBundle() {
      // 定义初始化Electron的函数
      const initElectron = () => {
        // 使用esbuild编译TypeScript代码为JavaScript
        require("esbuild").buildSync({
          entryPoints: ["src/background.ts"],
          bundle: true,
          outfile: "dist/background.js",
          platform: "node",
          target: "node12",
          external: ["electron"],
        });
      };

      // 调用初始化Electron函数
      initElectron();

      // 修改package.json文件的main字段 不然会打包失败
      const json = JSON.parse(fs.readFileSync("package.json", "utf-8"));
      json.main = "background.js";
      fs.writeSync(
        fs.openSync("dist/package.json", "w"),
        JSON.stringify(json, null, 2)
      );

      // 创建一个空的node_modules目录 不然会打包失败
      fs.mkdirSync(path.join(process.cwd(), "dist/node_modules"));

      // 使用electron-builder打包Electron应用程序
      electronBuilder
        .build({
          config: {
            appId: "com.example.app",
            productName: "onlysdk_xyx",
            directories: {
              output: path.join(process.cwd(), "release"), //输出目录
              app: path.join(process.cwd(), "dist"), //app目录
            },
            nsis: {
              oneClick: false, //取消一键安装
            },
            extraFiles: [
              {
                from: "public",
                to: "public",
              },
            ],
          },
        })
        // Promise is returned
        .then((result) => {
          console.log(JSON.stringify(result));
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };
};
```

#### vite.config.ts

```javascript
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { ElectronDevPlugin } from "./plugins/vite.electron.dev";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";
import { viteElectronBuild } from "./plugins/vite.electron.build";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // 支持tsx，jsx
    ElectronDevPlugin(), // 开发环境插件
    viteElectronBuild(), // 生产打包插件
    // tdesign 自动导入组件插件
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: "vue-next",
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: "vue-next",
        }),
      ],
    }),
  ],
  base: "./", // 文件相对路径，不然打包后会白屏
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // tailwindcss 配置
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
```

### tailwindcss 集成

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```bash
npx tailwindcss init -p
```

#### tailwindcss.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
```

**tailwindcss 在 electron 打包后会和引用的组件库 tdesign 有样式冲突问题**

- [x] tailwindcss 没打包 css 样式文件到 electron release 工程；
- [x] tailwindcss 常见样式冲突 preflight 配置；
- [x] 调整引用 css 文件顺序；

以上引发冲突的常见配置都处理了，但 electron 打包后的产物 tailwindcss 还是没有生效，然后打开控制台检查页面元素，发现样式是已经生成打包进去的了，类名样式的权重和引入的组件库样式权重是一样，是组件库的样式把 tailwindcss 的样式给覆盖了。

**解决方法**

暂时没找到什么比较好的方案，只能在 `tailwindcss.config.js` 里配置权重`important: true`,将 tailwindcss 的样式权重都提升到最高暂时解决这个问题；

### 打包后的自定义文件夹（静态资源路径）

因为在项目中需要用到 node 操作一些 json 数据或者做一些 io 读写操作，所以希望打包后也能拿到对应配置文件的路径。

**打包 option 配置**

```JavaScript
      electronBuilder
        .build({
          config: {
            appId: 'com.example.app',
            productName: 'onlysdk_xyx',
            directories: {
              output: path.join(process.cwd(), 'release'), //输出目录
              app: path.join(process.cwd(), 'dist') //app目录
            },
            nsis: {
              oneClick: false //取消一键安装
            },
            extraFiles: [
              {
                from: 'public',
                to: 'public'
              }
            ]
          }
        })
```

取消所用资源打包成`asar`的配置，并且配置`extraFiles`，配置不参与打包进`resources`文件夹的文件路径；

**获取资源路径**

```javascript
// process.cwd() 获取当前目录
const getExtraFilesPath = (filename: string) => {
  return path.join(process.cwd(), `/存放资源的文件夹/${filename}`);
};
```

### 进程通信

**主进程注册方法**
使用 `ipcMain.handle` 注册方法。

```ts
// 创建文件夹
ipcMain.handle("create-directory", async (event, dirName) => {
  const dirPath = path.join(`${getExtraFilesPath("config")}`, dirName);
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
      return {
        code: 200,
        message: "Success",
      };
    } else {
      return { code: 0, status: "error", message: "Directory already exists" };
    }
  } catch (error) {
    console.error("Failed to create directory:", error);
    return { code: 0, status: "error", message: error };
  }
});
```

**渲染进程调用方法**
渲染进程使用`ipcRenderer`调用方法。

```ts
const createDirectory = async () => {
  try {
    const res =  await ipcRenderer.invoke('create-directory', 'test)
    if(res.code === 200){
       MessagePlugin.success('写入成功！')
    }
  } catch (error) {
    MessagePlugin.error('写入失败！')
  }
}
```

### 打包 npm 下载过慢问题

**解决方法**

- 换镜像源（不一定行）
- github 手动下载提示缺少的包体放到本地，参考文章[electron 项目打包慢、打包报错\_electron 打包很慢-CSDN 博客](https://blog.csdn.net/Dominic_W/article/details/137777660)

## 完结

关于 electron 还有很多需要学习，[electron-builder](https://www.electron.build/)打包配置，以及如何通知安装用户下载更新，打包包体优化等问题。共勉~

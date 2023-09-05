---
title: Vue 学习问题
date: 2021-12-17
tags:
  - Vue
categories:
  - 前端
next: /blogs/web/Vue
prev: /blogs/web/VueNote
---

### 项目中遇到的小问题

遇到 `TypeError: "\_vm.xxxx is not a function" ` 的报错

1、方法是否写在了 methods 内

2、检查 data 方法里返回的数据是否有和方法重名的元素

3、标签内的属性是否重复了，使用 ui 框架式多注意

<br/>
<hr />
<br />

在使用 elementUi tag 可编辑标签渲染数据的时候，遇到了展开了其中一行其他行文本框受影响的问题

原因：每一行的文本编辑框都使用了同一个布尔值进行控制展开与隐藏

解决方法：

1、在拿到数据的同时进行循环遍历给数组添加单独的布尔值属性

2、在绑定事件的同时传入数组参数，使用展开方法的时候接收参数，修改单独的布尔值

<br/>
<hr />
<br />

### Vue 项目优化策略

- 1、生成打包报告

- 2、第三方库启用 CDN

- 3、Element-UI 组件按需加载

- 4、路由懒加载

- 5、首页内容定制

- 6、跳转页面时候的进度加载 nprogress

- 7、发布上线 build 模式 使用 transform-remove-console 插件优化

- 8、chainWeback 通过链式编程的形式，来修改默认的 webpack 配置

- 9、configWeback 通过操作对象的形式，来修改默认的 webpack 配置

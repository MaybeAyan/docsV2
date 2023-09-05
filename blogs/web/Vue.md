---
title: Vue
date: 2021-12-17
tags:
  - Vue
categories:
  - 前端
next: /blogs/web/VueNote
prev: /blogs/web/VueStudy
---
### Vue 指令相关的使用

<hr />

`v-model` 其实是一个语法糖，背后的本质包含两个操作：

- 1、v-bind 是绑定一个 value 属性
- 2、v-on 指令给当前元素绑定 input 事件

```Html
<input type = 'text' v-model='message'>

<!-- 本质上等同于下列代码 -->

<input type = 'text' v-bind:value='message' v-on:input = 'message = $event.target.value'>

```

<hr />

### 插槽 slot

<hr />

- 组件中的插槽：

  - 组件的插槽能使我们封装的组件更加具有拓展性

  - 让使用者可以决定组件内部的展示内容

- 插槽的使用：

  -在组件中添加 `<slot></slot>` 标签

  -插槽的默认值 `<slot> xxx </slot> `

  -如果有多个值，同时放入到组件进行替换时，一起作为替换元素

<hr />

### $nextTick(callback) 的使用场景

<hr />

- 前提：Vue 是依靠数据驱动视图更新的，更新的过程是异步的

- 作用：获取更新之后的 DOM

- 应用场景：

  - 1、如果要在 created()钩子函数中进行的 DOM 操作，由于 created()钩子函数中还未对 DOM 进行任何渲染，所以无法直接操作，需要通过$nextTick()来完成。

  - 2、更新数据后，想要使用 js 对新的视图进行操作时。

  - 3、在使用某些第三方插件、组件时 ，这些插件需要 dom 动态变化后重新应用该插件，这时候就需要使用$nextTick()来重新应用插件的方法。

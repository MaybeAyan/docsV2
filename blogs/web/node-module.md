---
title: node 模块化
date: 2023-09-21
tags:
  - node
categories:
  - 前端
---

NodeJs 模块化遵循两套规范 `commonJS` 规范和 `esm` 规范

### CommonJS 规范

引入模块 （ require ）支持四种格式

1. 支持引入内置模块例如 `http` `os` `fs` `child_process` 等 nodejs 内置模块；
2. 支持引入第三方模块`express` `md5` `koa` 等；
3. 支持引入自己编写的模块 `./ ../` 等；
4. 支持引入 addon c++ 拓展模块 .node 文件；

```javascript
const fs = require('node:fs');  // 导入核心模块
const express = require('express');  // 导入 node_modules 目录下的模块
const myModule = require('./myModule.js');  // 导入相对路径下的模块
const nodeModule = require('./myModule.node');  // 导入扩展模块
```



导出模块 exports 和 module.exports

```js
module.exports = {
  hello: function() {
    console.log('Hello, world!');
  }
};
```



如果不想导出对象直接导出数值

```js
module.exports = 123
```



### ESM 模块规范

引入模块 `import` 必须写在头部

> 注意使用 ESM 模块时必须开启一个选项 package.json 设置 type: module

```js
import fs from 'node:fs'
```

> 如果要引入 json 文件需要特殊处理，需要增加断言并且指定类型 json， node 低版本不支持

```js
import data from './data.json' assert { type: "json" }
```



加载模块的整体对象

```js
import * as all from 'xxx.js'
```



动态导入模块

import 静态加载不支持掺杂在逻辑中，如果想动态加载请使用 import 函数模式

```js
if(true){
	import ('./test.js').then()
}
```



模块导出

- 导出一个默认对象 default 只能有一个不可重复的 export default

```js
export defalut {
	name:'test'
}
```

- 导出变量

```js
export const a = 1
```



### CJS 和 ESM 的区别

1. Cjs 是基于运行时的同步加载，esm 是基于编译时的异步加载；

2. Cjs 是可以修改值的，esm 值不可修改，是可读的；

3. Cjs 不可以 tree shaking，esm 支持 tree shaking；

4. commonJs 中顶层的 this 指向模块本身，而 esm 中顶层的 this 指向undefined；

   
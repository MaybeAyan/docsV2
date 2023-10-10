---
title: Node-Path模块
date: 2023-10-10
tags:
  - node
categories:
  - 前端
prev: /blogs/web/CSRSSR
---

## node path模块

### 系统区别

> path 模块在不同的操作系统是由差异的

posix表示可移植操作系统接口，也就是定义了一套标准，遵守这套标准的操作系统有(unix,like unix,linux,macOs,windows wsl)，为什么要定义这套标准，比如在Linux系统启动一个进程需要调用`fork`函数,在windows启动一个进程需要调用`creatprocess`函数，这样就会有问题，比如我在linux写好了代码，需要移植到windows发现函数不统一，posix标准的出现就是为了解决这个问题。

Windows 并没有完全遵循 POSIX 标准。Windows 在设计上采用了不同于 POSIX 的路径表示方法。

在 Windows 系统中，路径使用反斜杠（`\`）作为路径分隔符。这与 POSIX 系统使用的正斜杠（`/`）是不同的。这是 Windows 系统的历史原因所致，早期的 Windows 操作系统采用了不同的设计选择。



### API

`path.basename() ` 方法返回的是给定路径中的最后一部分

```js
path.basename('C:\temp\myfile.html');
// 返回: 'C:\temp\myfile.html'
```



`path.dirname()` 返回除了最后一个路径的其他路径

```js
path.dirname('/aaaa/bbbb/cccc/index.html')
// 返回 /aaaa/bbbb/cccc
```



`path.extname` 返回拓展名

```js
path.extname('/aaaa/bbbb/cccc/index.html.ccc.ddd.aaa')
//.aaa
```



`path.join()` 拼接路劲

```js
path.join('/foo','/cxk','/ikun')
// /foo/cxk/ikun

// 支持 .. ../ ./操作符
path.join('/foo','/cxk','/ikun','../')
// /foo/cxk/

```



`path.resolve` 用于将相对路劲解析并且返回绝对路径

```js
// 如果传入了多个绝对路径，它将返回最右边的绝对路径
path.resolve('/aaa','/bbb','/ccc')
// /ccc

// 传入绝对路径 + 相对路径
path.resolve(__dirname,'./index.js')
//  /User/ayan/DeskTop/node/index.js

// 如果只传入相对路径
path.resolve('./index.js')
// 返回工作目录 + index.js
```



`path.parse` 用于解析文件路径。接受一个路径字符串作为输入，并返回一个包含路径各个组成部分的对象

```js
path.parse('/home/user/dir/file.txt')

{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}

```



`path.format` 将 parse 解析出来的对象转换为文件路径

```js
path.format({
    root: '/',
    dir: '/home/user/documents',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
 })
 // /home/user/dir/file.txt
```


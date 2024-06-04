---
title: Lua基本使用
date: 2024-06-04
tags:
  - lua
categories:
  - lua
---

Lua 是一种轻量级、高效、可嵌入的脚本语言，最初由巴西里约热内卢天主教大学（Pontifical Catholic University of Rio de Janeiro）的一个小团队开发而成。它的名字"Lua"在葡萄牙语中意为"月亮"，寓意着 Lua 作为一门明亮的语言。

Lua 具有简洁的语法和灵活的语义，被广泛应用于嵌入式系统、游戏开发、Web 应用、脚本编写等领域。它的设计目标之一是作为扩展和嵌入式脚本语言，可以与其他编程语言无缝集成。Lua 的核心只有很小的代码库，但通过使用模块和库可以轻松地扩展其功能。

### 安装

官网：lua.org
![](https://pic.imgdb.cn/item/665ee5225e6d1bfa054a4843.png)

使用 lua54 测试一下
![](https://pic.imgdb.cn/item/665ee5505e6d1bfa054a7eaf.png)

### vscode 插件

![](https://pic.imgdb.cn/item/665ee5545e6d1bfa054a83a6.png)

### 基本使用

#### 变量

```javascript
name = "test";

print(name);
```

```javascript
--local 定义局部变量
local name = 'test'

print(name)

```

#### 条件语句

```javascript
local name = 'test'

if name == "test" then
    print("test")
elseif name == "test1" then
    print("test1")
else
    print("not test")
end

```

#### 函数

```javascript
local name = 'test'

function func(name)
    if name == "test" then
        print("test")
        return 1
    elseif name == "test1" then
        print("test1")
        return 2
    else
        print("not test")
        return 3
    end
end

local result = func(name)
print(result)

```

#### 数据类型

1. nil：**表示无效值或缺失值**。
2. boolean：**表示布尔值，可以是 true 或 false**。
3. number：**表示数字，包括整数和浮点数**。
4. string：**表示字符串，由字符序列组成**。
5. table：**表示表，一种关联数组，用于存储和组织数据**。
6. function：**表示函数，用于封装可执行的代码块**。
7. userdata：**表示用户自定义数据类型，通常与 C 语言库交互使用。**
8. thread：**表示协程，用于实现多线程编程。**
9. metatable：**表示元表，用于定义表的行为。**

### 更多资料

> [小满 zs](<[https://juejin.cn/post/7342315772302655503](https://juejin.cn/post/7342315772302655503)>)

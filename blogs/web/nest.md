---
title: nest.js 学习
date: 2022-08-17
tags:
  - nest
categories:
  - 后端
---

## IOC控制反转
主要是用于改变基类与依赖基类的子类的强耦合关系，在引入 IOC 容器 Container 之后，A B C 之间的代码逻辑已经解耦了，可以单独拓展其他功能，也可以方便地加入其他模块D，在复杂的后端业务逻辑中，引入IOC可以降低组件之间的耦合度，实现系统各层之间的解耦，减少维护和理解成本；
```typescript
class A {
    name:string
    constructor(name:string){
    this.name=name
    }
}

class B {
    name:string
    constructor(name:string){
    this.name=name
    }
}

class C {
    name:string
    constructor(name:string){
    this.name=name
    }
}

class Container {
    mo:any
    constructor(){
    this.mo = {}
    }
    
    provide(key:string,mo:any){
    this.mo[key] = mo;
    }
    
    get(key:string){
    return this.mo[key]
    }
}

const mo = new Container()

mo.provide('a',new A('张三'))
mo.provide('b',new A('李四'))
mo.provide('c',new A('刘五'))

class D {
    a:any
    b:any
    c:any
    constructor(mo:Container){
        this.a = mo.get('a')
        this.b = mo.get('b')
        this.c = mo.get('c')
    }
}
```

## 装饰器
Decorator是ES7的一个新语法。  
Decorator通过对类、对象、方法、属性进行修饰。对其添加一些其他的行为。  
通俗来说:就是对一段代码进行二次包装。  
装饰器在 typescript 语言中属于实验性操作  
1. 类装饰器
```typescript
const doc:ClassDecorator = (target:any) =>{
    console.log(target)
    // 可以通过 prototype 添加一些属性
    target.prototype.name = "ikun"
}


@doc
class Name(){
    constructor(){
    }
}

const name:any = new Name()

console.log(name.name)


// 好处是不去破坏原有的类，对这个类进行额外的操作
```

2. 属性装饰器
```typescript
const doc:PropertyDecorator = (target:any,key:string) =>{
    console.log(target,key)
    // {} name
}

class Name(){
    @doc
    public name:string
    constructor(){
        this.name = "ikun"
    }
}
```
3. 方法装饰器
```typescript
const doc:MethodDecorator = (target:any,key:string | symbol,descriptor:any) =>{
    console.log(target,key,descriptor)
    // {} 
    // getName 
    // {value：[Function:getName],writeable:true,enumerable:false,configurable:true}
}

class Name(){
    public name:string
    constructor(){
        this.name = "ikun"
    }
    
    @doc
    getName(){
    
    }
}
```
4. 参数装饰器
```typescript
const doc:MethodDecorator = (target:any,key:string | symbol,index:any) =>{
    console.log(target,key,index)
    // {} 
    // getName 
    // 1
}

class Name(){
    public name:string
    constructor(){
        this.name = "ikun"
    }
    
   
    getName(name:string,@doc age:number){
        
    }
}
```
## nest cli 工程介绍
1. app.module.ts 根模块用于处理其它类的引用和共享；
2. app.controller.ts 常见功能是用来处理 http 请求以及调用其他 service 层的处理方法；
3. app.service.ts 封装通用的业务逻辑、与数据层的交互（例如数据库），其他额外的一些第三方请求；

## RESTful 风格设计
1. 一个接口完成所有的 curd 操作
2. 版本控制

## 验证码小案例
```typescript
npm install svg-captcha --save

import * as svgCaptcha from 'svg-captcha';

 @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

// axios 携带cookies
axios.defaults.withCredentials = true
```


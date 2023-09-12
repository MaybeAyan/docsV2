---
title: TypeScript学习笔记
date: 2022-07-04
tags:
  - typescript
categories:
  - 前端
---

# 关于
  整理自TS官方文档、阮一峰博客、b站大佬：小满zs 的教学视频，仅用作个人学习。

## 类型声明

```typescript
// 字符串
let a:string = "HelloWorld"

// 数字
let n:number = 123

// 布尔
let b:boolean = true

// 空值
function voidFn():void {
  console.log('test void');
}

// Null 和 undefined
let u: undefined = undefined;
let n: null = null;

// any 类型
let anys:any = 123
anys = "123"
anys = true

// unknow 类型
let value:unknow;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = null;             // OK
value = undefined;        // OK
value = Symbol("type");   // OK

// unknow 类型不能赋值给其他类型，只能赋值给 any 和 unknown
// unknow 不能调用属性和方法

// 数组类型
let arr:number[] = [1,2,5,9,5]
let arr2:string[] = ['张三','李四','刘五']

// 数组泛型
let arr:Array<number> = [1,5,3,9,6]
let arr2:Array<string> = ['张三','李四','刘五']

// 函数类型
const fn = (name:string,age:number):string => {
  return name + age
}
fn('张三',18)

// 定义剩余参数
const fn = (array:number[],...items:any[]):any[] => {
  console.log(array,items)
  return items
}

let a:number[] = [1,2,3]

fn(a,'4','5','6') // [1, 2, 3],  ["4", "5", "6"] 

// 元组类型 
let arr:[number,string] = [1,'str']
let arr2:readonly [number,boolean,string,undefined] = [1,true,'str',undefined]

// 当赋值或访问一个已知索引的元素时，会得到正确的类型
let arr:[number,string] = [1,'str']
arr[0].length // error 数字类型不存在 length 属性
arr[1].length // success 

// 元组中的越界元素
// 对于越界的元素他的类型被限制为 联合类型（就是你在元组中定义的类型）
let arr:[number,string] = [1,'str']
arr.push(true) // error


// 枚举类型
enum Types {
  Red, // 默认从0开始，步长为1
  Green, // 1
  Blue // 2
}

// 字符串枚举
enum Types{
   Red = 'red',
   Green = 'green',
   BLue = 'blue'
}
```


## 接口
```typescript
// 用接口 interface 来定义对对象的约束，使对象的数据结构满足约束的格式
interface Person {
  a:number
  b:string
}

const person:Person = {
  a:123
  b:'123'
}

// 重名的接口会合并
interface A{
  name:string
}

interface A{
  age:number
}

let x:A = {name:'zs',age:18}

// 接口可以继承
interface A {
  name:string
}

interface B extends A {
  age:number
}

let x:B = {name:'zs',age:18}

// 可选操作符 使用?操作符
interface Person {
  b?:string // 该属性可以不实现
  a:string
}

const person:Person = {
  a:"123"
} 

// 任意属性 [porpName:string]
interface Person {
  b?:string
  readonly a:string // 用 readonly 修饰的属性不允许被赋值，只能作读取操作
  [porpName:string]:any
  cb():void
}

const person:Person = {
  a:"123",
  c:"cccccc"
  cb:()=>{
    console.log(1123)
  }
}

// 用接口表示数组
interface NumberArray {
  [index:number]:number // 只要索引类型是数字，那么值的类型必须是数字
}

let fibonacci:NumberArray = [1,1,2,3,5,8]

// 多维数组
let data:number[][] = [[1,2],[3,4]];
// 二维
let data2: Array<Array<number>> = [[1, 2], [3, 4]]
// 三维
let data3:Array<Array<Array<number>>> = [[[2, 4], [3, 5]], [[4, 6], [5, 7]]]

// arguments 类数组
function Arr(...args:any):void {
    console.log(arguments)

    // 错误 arguments 类数组不能这样定义 
    let arr:number[] = arguments
}

function Arr2(...args:any):void {
    console.log(arguments)

    // arguments 类数组通过内置对象 IArguments 定义 
    let arr:IArguments = arguments
}
Arr2(111, 222, 333)

// 其中IArguments 是TS中定义好的类型，实际上是：
interface IArguments {
  [index:number]:any
  length:number
  callee:Function
}

// 接口定义函数
interface Add{
  (num:number,num2:number):number
}

const fn:Add = (num:number,num2:number):number =>{
  return num + num2
}

```

## 函数重载

```typescript
// 函数重载：函数名字相同，函数的参数及个数不同

type NumStr = string | number

// 注意函数重载需要写在一起
function add(x: string, y: string): string
function add(x: number, y: number): number
function add(x: NumStr, y: NumStr): NumStr | undefined {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
  return 
}

add(1, 2) // 3
add('张三', '李四') // 张三李四

```


## 联合类型
```typescript
//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
let myPhone: number | string  = '010-820'
 
//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
let myPhone: number | string  = true

// 函数使用联合类型
const fn = (something:number | boolean):boolean => {
  return !!something
}

```

## 交叉类型
  多种类型的集合，联合对象将具有所联合类型的所有成员
``` typescript
interface People {
  age:number
  height:number
}

interface Man {
  sex:string
}

const student = (man:People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}

student({age:18,height:180,sex:'male'})

```

## 类型断言
``` typescript
interface A {
       run: string
}
 
interface B {
       build: string
}
 
const fn = (type: A | B): string => {
       return type.run
}
//这样写是有警告的应为B的接口上面是没有定义run这个属性的


interface A {
       run: string
}
 
interface B {
       build: string
}
 
const fn = (type: A | B): string => {
       return (type as A).run
}
//可以使用类型断言来推断他传入的是A接口的值

// 需要注意的是，类型断言只能够「欺骗」typescript 编译器
// 无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误

// 类型断言是不具影响力的
// 在下面的例子中，将 something 断言为 boolean 虽然可以通过编译，但是并没有什么用 
// 并不会影响结果, 因为编译过程中会删除类型断言
function toBoolean(something: any): boolean {
    return something as boolean;
}
 
toBoolean(1);  // 返回值为 1

```

## 类 
``` typescript
// 定义类
class Person {
  name:string     
  age:number = 18 // 在严格模式下需要给默认值或者在实例化时进行赋值

  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
}

// 类的修饰符
class Person {
  // public 修饰符 可以让你定义的变量
  // 可以从该类内部访问 也可以外部访问 不写默认就是public
  public name:string 
  // 使用  private 修饰符 代表定义的变量私有 只能在内部访问 不能在外部访问
  private age:number
  // 使用  protected 修饰符 代表定义的变量私有
  // 只能在内部和继承的子类中访问 不能在外部访问
  protected some:any

  // static 修饰属性 代表静态属性，只能通过类名调用
  static filename:string = '666'

  constructor(name:string,age:number,some:any){
    this.name = name
    this.age = age
    this.some = some
  }

  static run():void {
      console.log('我只会跑,不会飞')
  }
}

let a = Person.filename 
console.log(a) // '666'

Person.run() // '我只会跑,不会飞'


// 用接口定义类
interface PersonClass {
  get(type:boolean):boolean
}

interface PersonClass2 {
  set():void,
  asd:string
}

class A {
  name:string

  constructor(){
    this.name = '123'
  }
}

// interface 定义类使用关键字 implements   
// 后面跟 interface 的名字多个用逗号隔开 继承还是用 extends
class Person extends A implements PersonClass,PersonClass2 {
  asd:string

  constructor(){
    super()
    this.asd = '123'
  }

  get(type:boolean){
    return type
  }

  set(){}
}

```

## 类型推断 
声明了一个变量但是没有定义类型

typescript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论

## 类型别名
type 关键字（可以给一个类型定义一个名字）多用于符合类型

``` typescript
// 定义类型别名
type str = string
let s:str = '我是张三'

// 定义函数别名
type str = () => string
let s:str = () => '我是张三'

// 定义联合类型别名
type str = string | number 
let s:str = 123
let s2:str = '123'

// 定义值的别名
type value = boolean | 0 | '213'
let s:value = true // 变量s的值 只能是上面 value 定义的值
```

## 泛型和泛型约束
```typescript
// 函数泛型
// 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如T U V K (相当于一个占位符)
// 当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）
function Add<T>(x:T,y:T):Array<T> {
  return [a,b]
}
Add<number>(1,2)
Add<string>('a','b')


function Sub<T,U>(a:T,b:U):Array<T|U> {
    const params:Array<T|U> = [a,b]
    return params
}
Sub<Boolean,number>(false,1) // [false,1]


// 泛型接口
interface Myinter<T>{
  (arg:T):T
}

function fn<T>(arg:T):T {
  return arg
}

let result: MyInter<number> = fn

result(123)

// 对象字面量泛型
let foo: { <T>(arg:T):T }

foo = function<T>(arg:T):T {
  return arg
}

foo(123) // 限定为字面量


// 泛型约束
// 我们希望在一个泛型的变量上，获取length参数，但是有的数据类型没有length属性

function getLength<T>(arg:T){
  return arg.length // error 类型T上不存在属性 length
}

// 这时我们可以用接口对泛型进行约束
interface Len {
  length:number
}

function getLength<T extends Len>(arg:T){
  return arg.length
}

getLength<string>('123')

// 使用 keyof 约束对象
function prop<T,K extends keyof T>(obj:T,key:K){
  return obj[key]
}

let o = {a:1,b:2,c:3}

prop(o,'a')
prop(0,'d') // 此时就会报错发现找不到


// 泛型类
class Sub<T>{
  attr:T[]=[]
  add(a:T):T[]{
    return [a]
  }
}
let s = new Sub<number>()
s.attr = [1,2,3,4] 
s.add(123) 

let str = new Sub<string>()
str.attr = ['1','2','3'] 
str.add('123') 

```

## tsconfig.json 的配置
 通过 tsc --init 命令生成 tsconfig.json 文件

```json
"include":[""]， // 编译制定的 ts 文件
"exclude": [""]， // 除了指定的ts文件，其他的ts文件都做编译
"target":"es2016"， // 指定编译的语法规范 默认是es2016版本（es7）
"outDir":"./"， // 编译文件的输出路径，默认是在同一级目录
"removeComments": true, // 编译后是否移除注释
"module":"CommonJS"， // 生成代码的模板标准 （ES6、Amd）
"allowJS":"true"， // 允许编译器编译JS、JSX文件
"strict":true, // 是否开启严格模式，默认开启
"experimentalDecorators": true,   // 装饰器Decorator 用于增加或修改类的功能
"declaration":true, // 自动生成声明文件
```

## 命名空间 namespace
```typescript
   1.使用 export 导出语句，不导出无法读取值

   2.使用 namespace a {} 开辟新的命名空间
   
   3.重名的命名空间会合并
```

## 三斜线导入指令
``` typescript
// 作用相当于 import
///<reference path="index.d.ts" /> 
// 用于引入声明文件
///<reference types="node" /> 
```

## 声明文件
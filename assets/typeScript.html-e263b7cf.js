import{_ as n,o as s,c as a,a as p}from"./app-d5c63569.js";const e={},t=p(`<h1 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h1><p>整理自TS官方文档、阮一峰博客、b站大佬：小满zs 的教学视频，仅用作个人学习。</p><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 字符串</span>
<span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;HelloWorld&quot;</span>

<span class="token comment">// 数字</span>
<span class="token keyword">let</span> n<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span>

<span class="token comment">// 布尔</span>
<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// 空值</span>
<span class="token keyword">function</span> <span class="token function">voidFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test void&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Null 和 undefined</span>
<span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// any 类型</span>
<span class="token keyword">let</span> anys<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">123</span>
anys <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
anys <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// unknow 类型</span>
<span class="token keyword">let</span> value<span class="token operator">:</span>unknow<span class="token punctuation">;</span>

value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>             <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>               <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>    <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>               <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>               <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>             <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>        <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// OK</span>

<span class="token comment">// unknow 类型不能赋值给其他类型，只能赋值给 any 和 unknown</span>
<span class="token comment">// unknow 不能调用属性和方法</span>

<span class="token comment">// 数组类型</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;刘五&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 数组泛型</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;刘五&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 函数类型</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> age
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>

<span class="token comment">// 定义剩余参数</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>array<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">...</span>items<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span>items<span class="token punctuation">)</span>
  <span class="token keyword">return</span> items
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>

<span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">)</span> <span class="token comment">// [1, 2, 3],  [&quot;4&quot;, &quot;5&quot;, &quot;6&quot;] </span>

<span class="token comment">// 元组类型 </span>
<span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">boolean</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">]</span>

<span class="token comment">// 当赋值或访问一个已知索引的元素时，会得到正确的类型</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">]</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token comment">// error 数字类型不存在 length 属性</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token comment">// success </span>

<span class="token comment">// 元组中的越界元素</span>
<span class="token comment">// 对于越界的元素他的类型被限制为 联合类型（就是你在元组中定义的类型）</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// error</span>


<span class="token comment">// 枚举类型</span>
<span class="token keyword">enum</span> Types <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span> <span class="token comment">// 默认从0开始，步长为1</span>
  Green<span class="token punctuation">,</span> <span class="token comment">// 1</span>
  Blue <span class="token comment">// 2</span>
<span class="token punctuation">}</span>

<span class="token comment">// 字符串枚举</span>
<span class="token keyword">enum</span> Types<span class="token punctuation">{</span>
   Red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
   Green <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
   BLue <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 用接口 interface 来定义对对象的约束，使对象的数据结构满足约束的格式</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span><span class="token builtin">number</span>
  b<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span>Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span><span class="token number">123</span>
  b<span class="token operator">:</span><span class="token string">&#39;123&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重名的接口会合并</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
  age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> x<span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>

<span class="token comment">// 接口可以继承</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> x<span class="token operator">:</span><span class="token constant">B</span> <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>

<span class="token comment">// 可选操作符 使用?操作符</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  b<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token comment">// 该属性可以不实现</span>
  a<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span>Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span><span class="token string">&quot;123&quot;</span>
<span class="token punctuation">}</span> 

<span class="token comment">// 任意属性 [porpName:string]</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  b<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span>
  <span class="token keyword">readonly</span> a<span class="token operator">:</span><span class="token builtin">string</span> <span class="token comment">// 用 readonly 修饰的属性不允许被赋值，只能作读取操作</span>
  <span class="token punctuation">[</span>porpName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span>
  <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span>Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
  c<span class="token operator">:</span><span class="token string">&quot;cccccc&quot;</span>
  <span class="token function-variable function">cb</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1123</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用接口表示数组</span>
<span class="token keyword">interface</span> <span class="token class-name">NumberArray</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token comment">// 只要索引类型是数字，那么值的类型必须是数字</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fibonacci<span class="token operator">:</span>NumberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>

<span class="token comment">// 多维数组</span>
<span class="token keyword">let</span> data<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 二维</span>
<span class="token keyword">let</span> data2<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment">// 三维</span>
<span class="token keyword">let</span> data3<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;&gt;&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment">// arguments 类数组</span>
<span class="token keyword">function</span> <span class="token function">Arr</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>

    <span class="token comment">// 错误 arguments 类数组不能这样定义 </span>
    <span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> arguments
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Arr2</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>

    <span class="token comment">// arguments 类数组通过内置对象 IArguments 定义 </span>
    <span class="token keyword">let</span> arr<span class="token operator">:</span>IArguments <span class="token operator">=</span> arguments
<span class="token punctuation">}</span>
<span class="token function">Arr2</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">)</span>

<span class="token comment">// 其中IArguments 是TS中定义好的类型，实际上是：</span>
<span class="token keyword">interface</span> <span class="token class-name">IArguments</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span>
  length<span class="token operator">:</span><span class="token builtin">number</span>
  callee<span class="token operator">:</span><span class="token builtin">Function</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口定义函数</span>
<span class="token keyword">interface</span> <span class="token class-name">Add</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>num<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>num2<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fn<span class="token operator">:</span>Add <span class="token operator">=</span> <span class="token punctuation">(</span>num<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>num2<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> num <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 函数重载：函数名字相同，函数的参数及个数不同</span>

<span class="token keyword">type</span> <span class="token class-name">NumStr</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>

<span class="token comment">// 注意函数重载需要写在一起</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> NumStr<span class="token punctuation">,</span> y<span class="token operator">:</span> NumStr<span class="token punctuation">)</span><span class="token operator">:</span> NumStr <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> 
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 张三李四</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机</span>
<span class="token comment">//所以我们就可以使用联合类型支持座机字符串</span>
<span class="token keyword">let</span> myPhone<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>  <span class="token operator">=</span> <span class="token string">&#39;010-820&#39;</span>
 
<span class="token comment">//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值</span>
<span class="token keyword">let</span> myPhone<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>  <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// 函数使用联合类型</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>something<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>something
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h2><p>多种类型的集合，联合对象将具有所联合类型的所有成员</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span><span class="token builtin">number</span>
  height<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Man</span> <span class="token punctuation">{</span>
  sex<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">student</span> <span class="token operator">=</span> <span class="token punctuation">(</span>man<span class="token operator">:</span>People <span class="token operator">&amp;</span> Man<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>man<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>man<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>man<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">student</span><span class="token punctuation">(</span><span class="token punctuation">{</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>height<span class="token operator">:</span><span class="token number">180</span><span class="token punctuation">,</span>sex<span class="token operator">:</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
       run<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
       build<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> type<span class="token punctuation">.</span>run
<span class="token punctuation">}</span>
<span class="token comment">//这样写是有警告的应为B的接口上面是没有定义run这个属性的</span>


<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
       run<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
       build<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">.</span>run
<span class="token punctuation">}</span>
<span class="token comment">//可以使用类型断言来推断他传入的是A接口的值</span>

<span class="token comment">// 需要注意的是，类型断言只能够「欺骗」typescript 编译器</span>
<span class="token comment">// 无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误</span>

<span class="token comment">// 类型断言是不具影响力的</span>
<span class="token comment">// 在下面的例子中，将 something 断言为 boolean 虽然可以通过编译，但是并没有什么用 </span>
<span class="token comment">// 并不会影响结果, 因为编译过程中会删除类型断言</span>
<span class="token keyword">function</span> <span class="token function">toBoolean</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> something <span class="token keyword">as</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token function">toBoolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回值为 1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span>     
  age<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span> <span class="token comment">// 在严格模式下需要给默认值或者在实例化时进行赋值</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类的修饰符</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// public 修饰符 可以让你定义的变量</span>
  <span class="token comment">// 可以从该类内部访问 也可以外部访问 不写默认就是public</span>
  <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span> 
  <span class="token comment">// 使用  private 修饰符 代表定义的变量私有 只能在内部访问 不能在外部访问</span>
  <span class="token keyword">private</span> age<span class="token operator">:</span><span class="token builtin">number</span>
  <span class="token comment">// 使用  protected 修饰符 代表定义的变量私有</span>
  <span class="token comment">// 只能在内部和继承的子类中访问 不能在外部访问</span>
  <span class="token keyword">protected</span> some<span class="token operator">:</span><span class="token builtin">any</span>

  <span class="token comment">// static 修饰属性 代表静态属性，只能通过类名调用</span>
  <span class="token keyword">static</span> filename<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;666&#39;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>some<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token keyword">this</span><span class="token punctuation">.</span>some <span class="token operator">=</span> some
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我只会跑,不会飞&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> Person<span class="token punctuation">.</span>filename 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// &#39;666&#39;</span>

Person<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;我只会跑,不会飞&#39;</span>


<span class="token comment">// 用接口定义类</span>
<span class="token keyword">interface</span> <span class="token class-name">PersonClass</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>type<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PersonClass2</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">,</span>
  asd<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// interface 定义类使用关键字 implements   </span>
<span class="token comment">// 后面跟 interface 的名字多个用逗号隔开 继承还是用 extends</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token keyword">implements</span> <span class="token class-name">PersonClass</span><span class="token punctuation">,</span>PersonClass2 <span class="token punctuation">{</span>
  asd<span class="token operator">:</span><span class="token builtin">string</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>asd <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span>type<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> type
  <span class="token punctuation">}</span>

  <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h2><p>声明了一个变量但是没有定义类型</p><p>typescript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论</p><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2><p>type 关键字（可以给一个类型定义一个名字）多用于符合类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">str</span> <span class="token operator">=</span> <span class="token builtin">string</span>
<span class="token keyword">let</span> s<span class="token operator">:</span>str <span class="token operator">=</span> <span class="token string">&#39;我是张三&#39;</span>

<span class="token comment">// 定义函数别名</span>
<span class="token keyword">type</span> <span class="token class-name">str</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
<span class="token keyword">let</span> s<span class="token operator">:</span><span class="token function-variable function">str</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;我是张三&#39;</span>

<span class="token comment">// 定义联合类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">str</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> 
<span class="token keyword">let</span> s<span class="token operator">:</span>str <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">let</span> s2<span class="token operator">:</span>str <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>

<span class="token comment">// 定义值的别名</span>
<span class="token keyword">type</span> <span class="token class-name">value</span> <span class="token operator">=</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token string">&#39;213&#39;</span>
<span class="token keyword">let</span> s<span class="token operator">:</span>value <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// 变量s的值 只能是上面 value 定义的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型和泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型和泛型约束" aria-hidden="true">#</a> 泛型和泛型约束</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 函数泛型</span>
<span class="token comment">// 语法为函数名字后面跟一个&lt;参数名&gt; 参数名可以随便写 例如T U V K (相当于一个占位符)</span>
<span class="token comment">// 当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">Add</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token generic-function"><span class="token function">Add</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token generic-function"><span class="token function">Add</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">Sub</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token constant">U</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">|</span><span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> params<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">|</span><span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span>
    <span class="token keyword">return</span> params
<span class="token punctuation">}</span>
<span class="token generic-function"><span class="token function">Sub</span><span class="token generic class-name"><span class="token operator">&lt;</span>Boolean<span class="token punctuation">,</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [false,1]</span>


<span class="token comment">// 泛型接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Myinter<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result<span class="token operator">:</span> MyInter<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> fn

<span class="token function">result</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>

<span class="token comment">// 对象字面量泛型</span>
<span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span> <span class="token punctuation">}</span>

<span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// 限定为字面量</span>


<span class="token comment">// 泛型约束</span>
<span class="token comment">// 我们希望在一个泛型的变量上，获取length参数，但是有的数据类型没有length属性</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">.</span>length <span class="token comment">// error 类型T上不存在属性 length</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这时我们可以用接口对泛型进行约束</span>
<span class="token keyword">interface</span> <span class="token class-name">Len</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Len<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 使用 keyof 约束对象</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">prop</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>key<span class="token operator">:</span><span class="token constant">K</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>c<span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span>

<span class="token function">prop</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token function">prop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 此时就会报错发现找不到</span>


<span class="token comment">// 泛型类</span>
<span class="token keyword">class</span> <span class="token class-name">Sub<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
  attr<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sub<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>attr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span> 
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> 

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sub<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
str<span class="token punctuation">.</span>attr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span> 
str<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tsconfig-json-的配置" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-的配置" aria-hidden="true">#</a> tsconfig.json 的配置</h2><p>通过 tsc --init 命令生成 tsconfig.json 文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;include&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>， <span class="token comment">// 编译制定的 ts 文件</span>
<span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>， <span class="token comment">// 除了指定的ts文件，其他的ts文件都做编译</span>
<span class="token property">&quot;target&quot;</span><span class="token operator">:</span><span class="token string">&quot;es2016&quot;</span>， <span class="token comment">// 指定编译的语法规范 默认是es2016版本（es7）</span>
<span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span><span class="token string">&quot;./&quot;</span>， <span class="token comment">// 编译文件的输出路径，默认是在同一级目录</span>
<span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 编译后是否移除注释</span>
<span class="token property">&quot;module&quot;</span><span class="token operator">:</span><span class="token string">&quot;CommonJS&quot;</span>， <span class="token comment">// 生成代码的模板标准 （ES6、Amd）</span>
<span class="token property">&quot;allowJS&quot;</span><span class="token operator">:</span><span class="token string">&quot;true&quot;</span>， <span class="token comment">// 允许编译器编译JS、JSX文件</span>
<span class="token property">&quot;strict&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启严格模式，默认开启</span>
<span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// 装饰器Decorator 用于增加或修改类的功能</span>
<span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动生成声明文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名空间-namespace" tabindex="-1"><a class="header-anchor" href="#命名空间-namespace" aria-hidden="true">#</a> 命名空间 namespace</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>   <span class="token number">1.</span>使用 <span class="token keyword">export</span> 导出语句，不导出无法读取值

   <span class="token number">2.</span>使用 <span class="token keyword">namespace</span> a <span class="token punctuation">{</span><span class="token punctuation">}</span> 开辟新的命名空间
   
   <span class="token number">3.</span>重名的命名空间会合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三斜线导入指令" tabindex="-1"><a class="header-anchor" href="#三斜线导入指令" aria-hidden="true">#</a> 三斜线导入指令</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 作用相当于 import</span>
<span class="token comment">///&lt;reference path=&quot;index.d.ts&quot; /&gt; </span>
<span class="token comment">// 用于引入声明文件</span>
<span class="token comment">///&lt;reference types=&quot;node&quot; /&gt; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="声明文件" tabindex="-1"><a class="header-anchor" href="#声明文件" aria-hidden="true">#</a> 声明文件</h2>`,33),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","typeScript.html.vue"]]);export{r as default};

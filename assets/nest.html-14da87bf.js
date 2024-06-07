import{_ as n,o as s,c as a,a as t}from"./app-d5c63569.js";const p={},e=t(`<h2 id="ioc控制反转" tabindex="-1"><a class="header-anchor" href="#ioc控制反转" aria-hidden="true">#</a> IOC控制反转</h2><p>主要是用于改变基类与依赖基类的子类的强耦合关系，在引入 IOC 容器 Container 之后，A B C 之间的代码逻辑已经解耦了，可以单独拓展其他功能，也可以方便地加入其他模块D，在复杂的后端业务逻辑中，引入IOC可以降低组件之间的耦合度，实现系统各层之间的解耦，减少维护和理解成本；</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Container</span> <span class="token punctuation">{</span>
    mo<span class="token operator">:</span><span class="token builtin">any</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">provide</span><span class="token punctuation">(</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>mo<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mo<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> mo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mo<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

mo<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mo<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mo<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">&#39;刘五&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">D</span></span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span><span class="token builtin">any</span>
    b<span class="token operator">:</span><span class="token builtin">any</span>
    c<span class="token operator">:</span><span class="token builtin">any</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>mo<span class="token operator">:</span>Container<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> mo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> mo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>c <span class="token operator">=</span> mo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><p>Decorator是ES7的一个新语法。<br> Decorator通过对类、对象、方法、属性进行修饰。对其添加一些其他的行为。<br> 通俗来说:就是对一段代码进行二次包装。<br> 装饰器在 typescript 语言中属于实验性操作</p><ol><li>类装饰器</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> doc<span class="token operator">:</span><span class="token function-variable function">ClassDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token comment">// 可以通过 prototype 添加一些属性</span>
    target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ikun&quot;</span>
<span class="token punctuation">}</span>


<span class="token decorator"><span class="token at operator">@</span><span class="token function">doc</span></span>
<span class="token keyword">class</span> <span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> name<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token comment">// 好处是不去破坏原有的类，对这个类进行额外的操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>属性装饰器</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> doc<span class="token operator">:</span><span class="token function-variable function">PropertyDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">)</span>
    <span class="token comment">// {} name</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">doc</span></span>
    <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ikun&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>方法装饰器</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> doc<span class="token operator">:</span><span class="token function-variable function">MethodDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span>key<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>descriptor<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">,</span>descriptor<span class="token punctuation">)</span>
    <span class="token comment">// {} </span>
    <span class="token comment">// getName </span>
    <span class="token comment">// {value：[Function:getName],writeable:true,enumerable:false,configurable:true}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ikun&quot;</span>
    <span class="token punctuation">}</span>
    
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">doc</span></span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>参数装饰器</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> doc<span class="token operator">:</span><span class="token function-variable function">MethodDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span>key<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>index<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">,</span>index<span class="token punctuation">)</span>
    <span class="token comment">// {} </span>
    <span class="token comment">// getName </span>
    <span class="token comment">// 1</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ikun&quot;</span>
    <span class="token punctuation">}</span>
    
   
    <span class="token function">getName</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">doc</span></span> age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nest-cli-工程介绍" tabindex="-1"><a class="header-anchor" href="#nest-cli-工程介绍" aria-hidden="true">#</a> nest cli 工程介绍</h2><ol><li>app.module.ts 根模块用于处理其它类的引用和共享；</li><li>app.controller.ts 常见功能是用来处理 http 请求以及调用其他 service 层的处理方法；</li><li>app.service.ts 封装通用的业务逻辑、与数据层的交互（例如数据库），其他额外的一些第三方请求；</li></ol><h2 id="restful-风格设计" tabindex="-1"><a class="header-anchor" href="#restful-风格设计" aria-hidden="true">#</a> RESTful 风格设计</h2><ol><li>一个接口完成所有的 curd 操作</li><li>版本控制</li></ol><h2 id="验证码小案例" tabindex="-1"><a class="header-anchor" href="#验证码小案例" aria-hidden="true">#</a> 验证码小案例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>npm install svg<span class="token operator">-</span>captcha <span class="token operator">--</span>save

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> svgCaptcha <span class="token keyword">from</span> <span class="token string">&#39;svg-captcha&#39;</span><span class="token punctuation">;</span>

 <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">)</span>
  <span class="token function">createCode</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Req</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token punctuation">,</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">Res</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> res<span class="token punctuation">,</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">Session</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> captcha <span class="token operator">=</span> svgCaptcha<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      size<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      fontSize<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">&#39;#cc9966&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    session<span class="token punctuation">.</span>code <span class="token operator">=</span> captcha<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&#39;image/svg+xml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>captcha<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token comment">// axios 携带cookies</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","nest.html.vue"]]);export{r as default};

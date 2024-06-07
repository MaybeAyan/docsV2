import{_ as n,o as s,c as a,a as e}from"./app-d5c63569.js";const t={},i=e(`<p>Lua 是一种轻量级、高效、可嵌入的脚本语言，最初由巴西里约热内卢天主教大学（Pontifical Catholic University of Rio de Janeiro）的一个小团队开发而成。它的名字&quot;Lua&quot;在葡萄牙语中意为&quot;月亮&quot;，寓意着 Lua 作为一门明亮的语言。</p><p>Lua 具有简洁的语法和灵活的语义，被广泛应用于嵌入式系统、游戏开发、Web 应用、脚本编写等领域。它的设计目标之一是作为扩展和嵌入式脚本语言，可以与其他编程语言无缝集成。Lua 的核心只有很小的代码库，但通过使用模块和库可以轻松地扩展其功能。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>官网：lua.org <img src="https://pic.imgdb.cn/item/665ee5225e6d1bfa054a4843.png" alt=""></p><p>使用 lua54 测试一下 <img src="https://pic.imgdb.cn/item/665ee5505e6d1bfa054a7eaf.png" alt=""></p><h3 id="vscode-插件" tabindex="-1"><a class="header-anchor" href="#vscode-插件" aria-hidden="true">#</a> vscode 插件</h3><p><img src="https://pic.imgdb.cn/item/665ee5545e6d1bfa054a83a6.png" alt=""></p><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><h4 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>name <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>

<span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">--</span>local 定义局部变量
local name <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>

<span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>local name <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>

<span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;test&quot;</span> then
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
elseif name <span class="token operator">==</span> <span class="token string">&quot;test1&quot;</span> then
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;not test&quot;</span><span class="token punctuation">)</span>
end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>local name <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;test&quot;</span> then
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    elseif name <span class="token operator">==</span> <span class="token string">&quot;test1&quot;</span> then
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">2</span>
    <span class="token keyword">else</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;not test&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">3</span>
    end
end

local result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h4><ol><li>nil：<strong>表示无效值或缺失值</strong>。</li><li>boolean：<strong>表示布尔值，可以是 true 或 false</strong>。</li><li>number：<strong>表示数字，包括整数和浮点数</strong>。</li><li>string：<strong>表示字符串，由字符序列组成</strong>。</li><li>table：<strong>表示表，一种关联数组，用于存储和组织数据</strong>。</li><li>function：<strong>表示函数，用于封装可执行的代码块</strong>。</li><li>userdata：<strong>表示用户自定义数据类型，通常与 C 语言库交互使用。</strong></li><li>thread：<strong>表示协程，用于实现多线程编程。</strong></li><li>metatable：<strong>表示元表，用于定义表的行为。</strong></li></ol><h3 id="更多资料" tabindex="-1"><a class="header-anchor" href="#更多资料" aria-hidden="true">#</a> 更多资料</h3><blockquote><p><a href="%5Bhttps://juejin.cn/post/7342315772302655503%5D(https://juejin.cn/post/7342315772302655503)">小满 zs</a></p></blockquote>`,19),o=[i];function l(p,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","lua.html.vue"]]);export{d as default};

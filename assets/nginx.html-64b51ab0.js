import{_ as c,r,o as t,c as o,b as e,f as n,e as s,w as a,a as l}from"./app-d5c63569.js";const v={},p=l('<h2 id="nginx-功能" tabindex="-1"><a class="header-anchor" href="#nginx-功能" aria-hidden="true">#</a> Nginx 功能</h2><p>方向代理（reverse proxy） <img src="https://pic.imgdb.cn/item/64ffe234661c6c8e54b96a91.jpg" alt="图片1"></p><p>负载均衡（load banancer） <img src="https://pic.imgdb.cn/item/64fff9b6661c6c8e54c446fc.jpg" alt="图片2"></p><p>加密（Encryption） <img src="https://pic.imgdb.cn/item/64fff9fa661c6c8e54c47f15.jpg" alt="加密"></p><h2 id="nginx-安装和下载" tabindex="-1"><a class="header-anchor" href="#nginx-安装和下载" aria-hidden="true">#</a> Nginx 安装和下载</h2>',5),u={href:"https://nginx.org/en/docs/windows.html",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),b={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[n("如果是window电脑，记得下载 windows 版本 "),e("img",{src:"https://pic.imgdb.cn/item/64fffaa7661c6c8e54c51d24.jpg",alt:"windows版本"})],-1),g=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS D:<span class="token punctuation">\\</span>PortableSoftware<span class="token punctuation">\\</span>nginx-1.23.<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> start nginx
PS D:<span class="token punctuation">\\</span>PortableSoftware<span class="token punctuation">\\</span>nginx-1.23.<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> tasklist /fi <span class="token string">&quot;imagename eq nginx.exe&quot;</span>

映像名称                       PID 会话名              会话<span class="token comment">#       内存使用</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
nginx.exe                     <span class="token number">6464</span> Console                   <span class="token number">12</span>      <span class="token number">9,488</span> K
nginx.exe                    <span class="token number">12792</span> Console                   <span class="token number">12</span>      <span class="token number">9,472</span> K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=e("br",null,null,-1),f=e("br",null,null,-1),x=e("img",{src:"https://pic.imgdb.cn/item/64fffe51661c6c8e54c6b834.jpg",alt:"nginx"},null,-1),_=l(`<p>Nginx/windwos 作为标准控制台应用服务（而不是服务）运行，可以使用一下命令进行管理：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> stop <span class="token comment"># fast shutdow</span>
nginx <span class="token parameter variable">-s</span> quit <span class="token comment"># graceful shutdown</span>
nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># changing configuration, starting new worker processes with a new configuration, graceful shutdown of old worker processes</span>
nginx <span class="token parameter variable">-s</span> reopen <span class="token comment"># re-opening log files</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS D:<span class="token punctuation">\\</span>PortableSoftware<span class="token punctuation">\\</span>nginx-1.23.<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> nginx <span class="token parameter variable">-s</span> stop
nginx <span class="token builtin class-name">:</span> 无法将“nginx”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确。
PS D:<span class="token punctuation">\\</span>PortableSoftware<span class="token punctuation">\\</span>nginx-1.23.<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> .<span class="token punctuation">\\</span>nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>taskkill /pid <span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span> /f
<span class="token comment">#  其中，\`&lt;PID&gt;\`是找到的Nginx进程的PID。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>PortableSoftware<span class="token punctuation">\\</span>nginx-1.23.<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>tasklist /fi <span class="token string">&quot;imagename eq nginx.exe&quot;</span>

映像名称                       PID 会话名              会话<span class="token comment">#       内存使用</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
nginx.exe                    <span class="token number">23136</span> Console                    <span class="token number">9</span>      <span class="token number">8,724</span> K
nginx.exe                     <span class="token number">3304</span> Console                    <span class="token number">9</span>      <span class="token number">9,052</span> K
D:<span class="token punctuation">\\</span>PortableSoftware<span class="token punctuation">\\</span>nginx-1.23.<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>taskkill /pid <span class="token number">23136</span> /f
成功: 已终止 PID 为 <span class="token number">23136</span> 的进程。

D:<span class="token punctuation">\\</span>PortableSoftware<span class="token punctuation">\\</span>nginx-1.23.<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>taskkill /pid <span class="token number">3304</span> /f
成功: 已终止 PID 为 <span class="token number">3304</span> 的进程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-术语" tabindex="-1"><a class="header-anchor" href="#nginx-术语" aria-hidden="true">#</a> Nginx 术语</h2>`,4),w=e("p",null,[e("img",{src:"https://pic.imgdb.cn/item/65000067661c6c8e54c81e71.jpg",alt:""})],-1),j=l(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>worker_process 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>花括号包裹的代码块被叫做上下文(context),上下文里面可以有指令，上下文是指令生效的环境。</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>events {
    worker_connections 1024;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从零配置" tabindex="-1"><a class="header-anchor" href="#从零配置" aria-hidden="true">#</a> 从零配置</h2>`,4),D=l(`<h3 id="运行静态网站" tabindex="-1"><a class="header-anchor" href="#运行静态网站" aria-hidden="true">#</a> 运行静态网站</h3><p>首先，我们先用 nginx 让一个 html 文件能在浏览器运行起来，这里我使用 nginx 自带的 html文件：</p><p><img src="https://pic.imgdb.cn/item/65000263661c6c8e54c9f54c.jpg" alt=""></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {
  server {
    
    # 指定端口
    listen 80;
    
    # root表示当匹配这个请求的路径时，将会在这个文件夹内寻找相应的文件
    root html;
    
    # 当没有指定主页时，默认会选择这个指定的文件，它可以有多个，并按顺序来加载，如果第一个不存在，则找第二个，依此类推。
    index index.html
  }
}

events {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们修改一下原来的 html 文件，并刷新一下浏览器，发现它已经生效了！没想到啊，几行指令配置就可以。 <img src="https://pic.imgdb.cn/item/65000238661c6c8e54c9ea02.jpg" alt=""></p>`,5),P=e("h3",{id:"配置-mine-type",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置-mine-type","aria-hidden":"true"},"#"),n(" 配置 Mine Type")],-1),N=e("img",{src:"https://pic.imgdb.cn/item/650009be661c6c8e54ce1d3d.jpg",alt:""},null,-1),q=l(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  # 指定文件后缀对应的Content-Type
  types {
    # 如果文件后缀是css，则配置它的Content-Type为text/css
    text/css css;
    # 如果文件后缀是js，则配置它的Content-Type为application/javascript
    application/javascript js;
    
  }

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;
  }
}
events {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I=l(`<p><img src="https://pic.imgdb.cn/item/65000bbb661c6c8e54cf5dee.jpg" alt=""></p><p>但实际环境下超级多的文件类型，如果一个个去配置，这是一件非常麻烦的事情，幸运的是，Nginx 已经给我们提供了 mine.types 文件，我们只需要在 nginx.conf 引入它即可。</p><p><img src="https://pic.imgdb.cn/item/65000cb9661c6c8e54cfed88.jpg" alt=""></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {
	
  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;
  }

}
events {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-location-context" tabindex="-1"><a class="header-anchor" href="#配置-location-context" aria-hidden="true">#</a> 配置 location context</h3><h4 id="示例一" tabindex="-1"><a class="header-anchor" href="#示例一" aria-hidden="true">#</a> 示例一</h4><p>如果我们想要访问另一个网页呢，比如当用户访问 http://localhost:80/fruits 后，进入到 fruits 网页。</p><p><img src="https://pic.imgdb.cn/item/65000d3b661c6c8e54d0313b.jpg" alt=""></p>`,8),C=l(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;

    location /fruits { 
      # 当我们访问/fruits时，就会去访问html/fruits目录下的index.html文件
      root html;
    }
  }
}
events {

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic.imgdb.cn/item/65000dc3661c6c8e54d0b4ae.jpg" alt=""></p><h4 id="示例二" tabindex="-1"><a class="header-anchor" href="#示例二" aria-hidden="true">#</a> 示例二</h4>`,3),S=l(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;

    location /fruits { 
      # 当我们访问/fruits时，就会去访问html/fruits目录下的index.html文件
      # 也就是nginx会自动拼接root和location的路径 变成了html/fruits/index.html
      root html;
    }

    location /carbs{
      # 不能使用root，因为我们并没有创建carbs目录
      alias html/fruits;
    }
  }
}
events {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例三" tabindex="-1"><a class="header-anchor" href="#示例三" aria-hidden="true">#</a> 示例三</h4>`,2),R=l(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;

    location /fruits {
      # 当我们访问/fruits时，就会去访问html/fruits目录下的index.html文件
      # 也就是nginx会自动拼接root和location的路径 变成了html/fruits/index.html
      root html;
    }

    location /carbs {
      # 不能使用root，因为我们并没有创建carbs目录
      alias html/fruits;
    }

    location /vegetables {
      root html;
      # 先去访问html/vegetables/veggies.html文件，如果没有就去访问html/index.html文件，如果还没有就返回404
      try_files /vegetables/veggies.html /index.html =404;
      # 直接指定主页时veggis.html
      index veggies.html;

    }
  }
}
events {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实例四" tabindex="-1"><a class="header-anchor" href="#实例四" aria-hidden="true">#</a> 实例四</h4><p>在 location context 中，可以使用正则表达式来匹配 URI。可以使用 ~ 或 ~* 前缀来指定正则表达式匹配，其中 ~ 区分大小写，~* 不区分大小写。</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;
    # ~*表示正则匹配，如果请求的url是/count/开头的，就会去访问html/count目录下的文件
    location ~* /count/[0-9] {
      try_files /index.html =404;
    }
  }
}
events {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),E=l(`<p>所以我们可以这样配置:</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;
    # ~*表示正则匹配，如果请求的url是/count/开头的，就会去访问html/count目录下的文件
    location ~* /count/[0-9] {
      alias html/;
      try_files /index.html =404;
    }
    location /count/style.css {
      alias html/style.css;
    }
  }
}
events {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向和重写" tabindex="-1"><a class="header-anchor" href="#重定向和重写" aria-hidden="true">#</a> 重定向和重写</h3>`,3),T=l(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;
  
    location /fruits {
      # 当我们访问/fruits时，就会去访问html/fruits目录下的index.html文件
      # 也就是nginx会自动拼接root和location的路径 变成了html/fruits/index.html
      root html;
    }

    location /crops {
      # 307 临时重定向 302 也是临时重定向 302假设客户端会改用GET方法 307要求客户端继续使用原来的请求方法
      return 307 /fruits;
    }
  }
}
events {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),K=e("p",null,[e("img",{src:"https://pic.imgdb.cn/item/65001135661c6c8e54d2f0be.jpg",alt:""})],-1),O=l(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;

    rewrite ^/number/(\\d+) /count/$1;

    location ~* /count/[0-9] {
      alias html/;
      try_files /index.html =404;
    }
   

  }
}
events {

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡-load-banancer" tabindex="-1"><a class="header-anchor" href="#负载均衡-load-banancer" aria-hidden="true">#</a> 负载均衡(load banancer)</h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><p>负载均衡是一种将网络流量分发到多个服务器上的技术，以实现更高的可用性、性能和可扩展性。在负载均衡系统中，请求会被分发到不同的服务器上，从而避免任何一台服务器过载或出现故障时影响整个系统的运行。</p><p>nginx实现负载均衡的方式有多种，下面是其中两种常用的方式：</p><p>a.基于轮询(Round Robin) 默认情况下，nginx 使用轮询算法进行负载均衡，将请求均匀地分发到多个后端服务器上。例如，在下面的配置中，nginx 将请求轮流转发到server1 和 server2 两台服务器上：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>upstream backend {
    server server1;
    server server2;
}	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法的优点是简单易用，可以均衡地分配请求。但是，如果某个后端服务器出现故障，则需要手动将其从upstream中删除，否则nginx仍然会将请求转发到该服务器上。</p><p>b.基于权重（Weighted Round Robin）</p><p>在轮询算法的基础上，nginx 还可以使用权重算法进行负载均衡。通过为每个后端服务器分配不同的权重值，使得某些服务器能够处理更多的请求。例如，在下面的配置中，nginx 将 70% 的请求转发到 server1 上，30% 的请求转发到 server2 上：</p><h3 id="制作运行docker镜像" tabindex="-1"><a class="header-anchor" href="#制作运行docker镜像" aria-hidden="true">#</a> 制作运行docker镜像</h3><p>我们可以docker来运行多个server，这里就用express当作服务器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">npm</span> i express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;I am a endpoint&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7777</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listening on http://localhost:7777&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再创建DockerFile，跟着node官网的教程来操作：</p><div class="language-DockerFile line-numbers-mode" data-ext="DockerFile"><pre class="language-DockerFile"><code>FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 7777
CMD [ &quot;npm&quot;, &quot;run&quot;,&quot;start&quot; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),V={href:"https://pic.imgdb.cn/item/6500124d661c6c8e54d44b1f.jpg",target:"_blank",rel:"noopener noreferrer"},B=e("img",{src:"https://pic.imgdb.cn/item/6500124d661c6c8e54d44b1f.jpg",alt:""},null,-1),A=l(`<p>最后制作镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> build <span class="token builtin class-name">.</span> <span class="token parameter variable">-t</span> myserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以在docker desktop看到已经制作完的镜像：</p>`,3),M={href:"https://pic.imgdb.cn/item/65001275661c6c8e54d45651.jpg",target:"_blank",rel:"noopener noreferrer"},U=e("img",{src:"https://pic.imgdb.cn/item/65001275661c6c8e54d45651.jpg",alt:""},null,-1),Y=l(`<p>接着开始跑运行该镜像的容器，尽管我们容器是运行在7777端口的，但是我们可以映射为我们本机的任意端口。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -p 端口映射 -d 后台运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">1111</span>:7777 <span class="token parameter variable">-d</span> myserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G={href:"https://pic.imgdb.cn/item/650012bb661c6c8e54d463e2.jpg",target:"_blank",rel:"noopener noreferrer"},L=e("img",{src:"https://pic.imgdb.cn/item/650012bb661c6c8e54d463e2.jpg",alt:""},null,-1),W=l(`<p>那我们再继续运行几个容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">2222</span>:7777 <span class="token parameter variable">-d</span> myserver
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3333</span>:7777 <span class="token parameter variable">-d</span> myserver
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">4444</span>:7777 <span class="token parameter variable">-d</span> myserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),X={href:"https://pic.imgdb.cn/item/650012f7661c6c8e54d47109.jpg",target:"_blank",rel:"noopener noreferrer"},$=e("img",{src:"https://pic.imgdb.cn/item/650012f7661c6c8e54d47109.jpg",alt:""},null,-1),z=l(`<h3 id="nginx-配置负载均衡" tabindex="-1"><a class="header-anchor" href="#nginx-配置负载均衡" aria-hidden="true">#</a> Nginx 配置负载均衡</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  upstream backendserver{
      server 127.0.0.1:1111;
      server 127.0.0.1:2222;
      server 127.0.0.1:3333;
      server 127.0.0.1:4444;
  }

  server {
    # 指定端口
    listen 80;
    

    location /{
      proxy_pass http://backendserver/;
    }


  }
}
events {

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，这个是全部的配置：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {

  include mime.types;

  upstream backendserver{
      server 127.0.0.1:1111;
      server 127.0.0.1:2222;
      server 127.0.0.1:3333;
      server 127.0.0.1:4444;
  }

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;

    rewrite ^/number/(\\d+) /count/$1;

    # ~*表示正则匹配，如果请求的url是/count/开头的，就会去访问html/count目录下的文件
    location ~* /count/[0-9] {
      alias html/;
      try_files /index.html =404;
    }
    location /count/ {
      alias html/;
    }

    location /{
      proxy_pass http://backendserver/;
    }

    location /fruits {
      # 当我们访问/fruits时，就会去访问html/fruits目录下的index.html文件
      # 也就是nginx会自动拼接root和location的路径 变成了html/fruits/index.html
      root html;
    }

    location /carbs {
      # 不能使用root，因为我们并没有创建carbs目录
      alias html/fruits;
    }

    location /vegetables {
      root html;
      # 先去访问html/vegetables/veggies.html文件，如果没有就去访问html/index.html文件，如果还没有就返回404
      try_files /vegetables/veggies.html /index.html =404;
      # 直接指定主页时veggis.html
      index veggies.html;
    }

    location /crops{
      # 307 临时重定向 302 也是临时重定向 302假设客户端会改用GET方法 307要求客户端继续使用原来的请求方法
      return 307 /fruits;
    }
  }
}
events {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：本文是根据此youtu.be/7VAI73roXaY 视频以及 coder嘉琪 文章。</p>`,5);function H(J,Q){const d=r("ExternalLinkIcon"),i=r("font");return t(),o("div",null,[p,e("p",null,[e("a",u,[n("官网window版安装教程"),s(d)]),m,e("a",b,[n("Nginx下载地址"),s(d)])]),h,e("p",null,[n("下载解压完后，cmd 或者 bash 解压的目录，运行 "),s(i,{color:"#FF6666"},{default:a(()=>[n("start nginx")]),_:1}),n(" 即可开始运行，运行 "),s(i,{color:"#FF6666"},{default:a(()=>[n("tasklist")]),_:1}),n(" 命令行实用程序以查看nignx 进程：")]),g,e("p",null,[n("其中一个进程是主进程，另一个是工作进程。如果 nginx 没有启动，在错误日志 "),s(i,{color:"#FF6666"},{default:a(()=>[n("logs/error.log ")]),_:1}),n("中查找原因"),k,n(" 运行成功后在浏览器打开 "),s(i,{color:"#FF6666"},{default:a(()=>[n("localhost")]),_:1}),n(" 或者 "),s(i,{color:"#FF6666"},{default:a(()=>[n("127.0.0.1 ")]),_:1}),n(" 可以看到如下页面："),f,x]),_,e("p",null,[n("如果使用的是 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" powershell ")]),_:1}),n(" 需要在 nginx 前加上 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" .\\ ")]),_:1}),n(" 来运行命令，使用 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" cmd ")]),_:1}),n(" 则无须添加前缀。")]),F,e("p",null,[n("有的时候尝试停止 nginx 出现了出错，我们可以使用 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" taskkill ")]),_:1}),n("来强制停止。")]),y,s(i,{color:"#FF6666"},{default:a(()=>[n(" nginx.conf ")]),_:1}),n(" 这个文件是配置文件。"),w,e("p",null,[n("这种类似键值对的被叫作指令（"),s(i,{color:"#FF6666"},{default:a(()=>[n("directive")]),_:1}),n("）")]),j,e("p",null,[n("接下来，删掉 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" nginx.conf ")]),_:1}),n("的内容，开始从零配置。")]),D,e("p",null,[n("在 nginx 的配置中,"),s(i,{color:"#FF6666"},{default:a(()=>[n(" events {} ")]),_:1}),n(" 代码块是必需的，因为它定义了 Nginx 服务器的全局事件模型。这个块主要用于配置与连接处理相关的参数，例如工作进程数、连接超时等。")]),e("p",null,[n("在 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" events {} ")]),_:1}),n(" 中，可以设置以下参数：")]),e("ul",null,[e("li",null,[s(i,{color:"#FF6666"},{default:a(()=>[n(" worker_connections ")]),_:1}),n(": 指定每个工作进程的最大连接数。")]),e("li",null,[s(i,{color:"#FF6666"},{default:a(()=>[n(" use ")]),_:1}),n(" 指定事件驱动模型，如 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" epoll ")]),_:1}),n("、"),s(i,{color:"#FF6666"},{default:a(()=>[n(" kqueue ")]),_:1}),n(" 、"),s(i,{color:"#FF6666"},{default:a(()=>[n(" eventport ")]),_:1}),n("或"),s(i,{color:"#FF6666"},{default:a(()=>[n(" select ")]),_:1}),n("。")]),e("li",null,[s(i,{color:"#FF6666"},{default:a(()=>[n(" multi_accept ")]),_:1}),n(": 指定是否接受多个连接。")]),e("li",null,[s(i,{color:"#FF6666"},{default:a(()=>[n(" accept_mutex ")]),_:1}),n(": 指定是否使用互斥锁来接受新连接。")]),e("li",null,[s(i,{color:"#FF6666"},{default:a(()=>[n(" worker_processes ")]),_:1}),n(": 指定工作进程的数量。")])]),e("p",null,[n("虽然在简单的 Nginx 配置中，你可能不需要再 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" events {} ")]),_:1}),n(" 代码块中设置任何参数，但是它仍然是必需的，因为它定义了 Nginx 服务器的全局事件模型。如果你不包含events {}块，Nginx配置文件将无效。")]),P,e("p",null,[n("如果在想在html通过link标签中引入css，则需要配置 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" mine type")]),_:1}),n(" ，否则nginx就把响应类型设置成了 "),s(i,{color:"#FF6666"},{default:a(()=>[n("text/plain")]),_:1}),n(" 。 "),N]),q,e("p",null,[n("运行 "),s(i,{color:"#FF6666"},{default:a(()=>[n("nginx -s reload ")]),_:1}),n("后，就发现此时 css 文件的 Content-type 被设置为 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" text/css ")]),_:1}),n("了。")]),I,e("p",null,[n("我们可以通过指定"),s(i,{color:"#FF6666"},{default:a(()=>[n(" location ")]),_:1}),n("来实现：")]),C,e("p",null,[n("如果想要访问 "),s(i,{color:"#FF6666"},{default:a(()=>[n("/carbs")]),_:1}),n("的时候，nginx 也给我们serve到 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" fruits ")]),_:1}),n("页面呢？")]),S,e("p",null,[n("如果我们再创建了一个 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" vegetables ")]),_:1}),n("目录后，但是我们的html文件不叫index.html，而叫做 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" veggies.html ")]),_:1}),n("。这个时候，我们可以配置 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" try_files ")]),_:1}),n("或者使用 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" index ")]),_:1}),n("直接指定主页。")]),R,e("p",null,[n("我们这里设置，如果用户访问的是 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" count/style.css ")]),_:1}),n(" ,则让nginx 去 serve 根目录下的 index.html,但由于我们的这个 index.html 还引入了 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" style.css ")]),_:1}),n(" ，nginx 就去 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" count/style.css ")]),_:1}),n(" 去找 css 了，导致404。")]),E,e("p",null,[n("现在我们已经有"),s(i,{color:"#FF6666"},{default:a(()=>[n(" /fruits ")]),_:1}),n("路由了，如果想要当用户访问"),s(i,{color:"#FF6666"},{default:a(()=>[n(" /crops ")]),_:1}),n("时，重定向到"),s(i,{color:"#FF6666"},{default:a(()=>[n(" /fruits ")]),_:1}),n("路由，可以这样配置。")]),T,e("p",null,[n("可以看到如果用户访问了"),s(i,{color:"#FF6666"},{default:a(()=>[n(" /crops ")]),_:1}),n("，他会被重定向到"),s(i,{color:"#FF6666"},{default:a(()=>[n(" /fruits ")]),_:1}),n("路由。")]),K,e("p",null,[n("但如果，我们并不想重定向，只是想要别的路由下路由，就可以使用"),s(i,{color:"#FF6666"},{default:a(()=>[n(" rewrite ")]),_:1}),n("指令。下面的示例中，如果访问"),s(i,{color:"#FF6666"},{default:a(()=>[n(" /number/数字 ")]),_:1}),n("，nginx则会提供"),s(i,{color:"#FF6666"},{default:a(()=>[n(" /count/ ")]),_:1}),n("数字的内容")]),O,e("p",null,[e("a",V,[B,s(d)])]),A,e("p",null,[e("a",M,[U,s(d)])]),Y,e("p",null,[n("然后如果我们访问 "),s(i,{color:"#FF6666"},{default:a(()=>[n(" http://localhost ")]),_:1}),n("，就可以发现运行成功了：")]),e("p",null,[e("a",G,[L,s(d)])]),W,e("p",null,[e("a",X,[$,s(d)])]),z])}const nn=c(v,[["render",H],["__file","nginx.html.vue"]]);export{nn as default};

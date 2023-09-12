---
title: nginx 入门
date: 2023-09-12
tags:
  - nginx
categories:
  - 前端
---

## Nginx 功能
方向代理（reverse proxy）
![图片1](https://pic.imgdb.cn/item/64ffe234661c6c8e54b96a91.jpg)

负载均衡（load banancer）
![图片2](https://pic.imgdb.cn/item/64fff9b6661c6c8e54c446fc.jpg)

加密（Encryption）
![加密](https://pic.imgdb.cn/item/64fff9fa661c6c8e54c47f15.jpg)

## Nginx 安装和下载
[官网window版安装教程](https://nginx.org/en/docs/windows.html)  
[Nginx下载地址](https://nginx.org/en/download.html)

如果是window电脑，记得下载 windows 版本
![windows版本](https://pic.imgdb.cn/item/64fffaa7661c6c8e54c51d24.jpg)

下载解压完后，cmd 或者 bash 解压的目录，运行  <font color="#FF6666" >start nginx</font> 即可开始运行，运行 <font color="#FF6666" >tasklist</font> 命令行实用程序以查看nignx 进程：

```bash
PS D:\PortableSoftware\nginx-1.23.3> start nginx
PS D:\PortableSoftware\nginx-1.23.3> tasklist /fi "imagename eq nginx.exe"

映像名称                       PID 会话名              会话#       内存使用
========================= ======== ================ =========== ============
nginx.exe                     6464 Console                   12      9,488 K
nginx.exe                    12792 Console                   12      9,472 K
```
其中一个进程是主进程，另一个是工作进程。如果 nginx 没有启动，在错误日志 <font color="#FF6666" >logs/error.log </font>中查找原因  
运行成功后在浏览器打开 <font color="#FF6666" >localhost</font> 或者 <font color="#FF6666" >127.0.0.1 </font> 可以看到如下页面：  
![nginx](https://pic.imgdb.cn/item/64fffe51661c6c8e54c6b834.jpg)

Nginx/windwos 作为标准控制台应用服务（而不是服务）运行，可以使用一下命令进行管理：
```bash
nginx -s stop # fast shutdow
nginx -s quit # graceful shutdown
nginx -s reload # changing configuration, starting new worker processes with a new configuration, graceful shutdown of old worker processes
nginx -s reopen # re-opening log files
```

如果使用的是 <font color="#FF6666" > powershell </font> 需要在 nginx 前加上 <font color="#FF6666" > .\ </font> 来运行命令，使用 <font color="#FF6666" >  cmd </font> 则无须添加前缀。

```bash
PS D:\PortableSoftware\nginx-1.23.3> nginx -s stop
nginx : 无法将“nginx”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确。
PS D:\PortableSoftware\nginx-1.23.3> .\nginx -s stop
```

有的时候尝试停止 nginx 出现了出错，我们可以使用 <font color="#FF6666" > taskkill </font>来强制停止。

```bash
taskkill /pid <PID> /f
#  其中，`<PID>`是找到的Nginx进程的PID。
```
举例：
```bash
D:\PortableSoftware\nginx-1.23.3>tasklist /fi "imagename eq nginx.exe"

映像名称                       PID 会话名              会话#       内存使用
========================= ======== ================ =========== ============
nginx.exe                    23136 Console                    9      8,724 K
nginx.exe                     3304 Console                    9      9,052 K
D:\PortableSoftware\nginx-1.23.3>taskkill /pid 23136 /f
成功: 已终止 PID 为 23136 的进程。

D:\PortableSoftware\nginx-1.23.3>taskkill /pid 3304 /f
成功: 已终止 PID 为 3304 的进程。
```

## Nginx 术语

<font color="#FF6666" > nginx.conf </font> 这个文件是配置文件。

![](https://pic.imgdb.cn/item/65000067661c6c8e54c81e71.jpg)

这种类似键值对的被叫作指令（<font color="#FF6666" >directive</font>）
```conf
worker_process 1;
```

花括号包裹的代码块被叫做上下文(context),上下文里面可以有指令，上下文是指令生效的环境。
```conf
events {
    worker_connections 1024;
}
```

## 从零配置
接下来，删掉 <font color="#FF6666" >  nginx.conf </font>的内容，开始从零配置。

### 运行静态网站
首先，我们先用 nginx 让一个 html 文件能在浏览器运行起来，这里我使用 nginx 自带的 html文件：

![](https://pic.imgdb.cn/item/65000263661c6c8e54c9f54c.jpg)

```conf
http {
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
```

然后我们修改一下原来的 html 文件，并刷新一下浏览器，发现它已经生效了！没想到啊，几行指令配置就可以。
![](https://pic.imgdb.cn/item/65000238661c6c8e54c9ea02.jpg)

在 nginx 的配置中,<font color="#FF6666" >  events {} </font> 代码块是必需的，因为它定义了 Nginx 服务器的全局事件模型。这个块主要用于配置与连接处理相关的参数，例如工作进程数、连接超时等。

在 <font color="#FF6666" >  events {} </font> 中，可以设置以下参数：

 - <font color="#FF6666" > worker_connections </font>: 指定每个工作进程的最大连接数。
 - <font color="#FF6666" >  use </font> 指定事件驱动模型，如 <font color="#FF6666" >  epoll </font>、<font color="#FF6666" > kqueue </font> 、<font color="#FF6666" > eventport </font>或<font color="#FF6666" > select </font>。
 -  <font color="#FF6666" > multi_accept </font>: 指定是否接受多个连接。
 - <font color="#FF6666" > accept_mutex </font>: 指定是否使用互斥锁来接受新连接。
 - <font color="#FF6666" > worker_processes </font>: 指定工作进程的数量。

 虽然在简单的 Nginx 配置中，你可能不需要再 <font color="#FF6666" >  events {} </font> 代码块中设置任何参数，但是它仍然是必需的，因为它定义了 Nginx 服务器的全局事件模型。如果你不包含events {}块，Nginx配置文件将无效。

### 配置 Mine Type
如果在想在html通过link标签中引入css，则需要配置 <font color="#FF6666" > mine type</font> ，否则nginx就把响应类型设置成了 <font color="#FF6666" >text/plain</font> 。
![](https://pic.imgdb.cn/item/650009be661c6c8e54ce1d3d.jpg)

```conf
http {

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
```

运行 <font color="#FF6666" >nginx -s reload </font>后，就发现此时 css 文件的 Content-type 被设置为 <font color="#FF6666" > text/css </font>了。

![](https://pic.imgdb.cn/item/65000bbb661c6c8e54cf5dee.jpg)

但实际环境下超级多的文件类型，如果一个个去配置，这是一件非常麻烦的事情，幸运的是，Nginx 已经给我们提供了 mine.types 文件，我们只需要在 nginx.conf 引入它即可。

![](https://pic.imgdb.cn/item/65000cb9661c6c8e54cfed88.jpg)

```conf
http {
	
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
```

### 配置 location context

#### 示例一

如果我们想要访问另一个网页呢，比如当用户访问 http://localhost:80/fruits 后，进入到 fruits 网页。

![](https://pic.imgdb.cn/item/65000d3b661c6c8e54d0313b.jpg)

我们可以通过指定<font color="#FF6666" > location </font>来实现：

```conf
http {

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

```

![](https://pic.imgdb.cn/item/65000dc3661c6c8e54d0b4ae.jpg)


#### 示例二

如果想要访问 <font color="#FF6666" >/carbs</font>的时候，nginx 也给我们serve到 <font color="#FF6666" > fruits </font>页面呢？


```conf
http {

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
```

#### 示例三

如果我们再创建了一个 <font color="#FF6666" > vegetables </font>目录后，但是我们的html文件不叫index.html，而叫做 <font color="#FF6666" > veggies.html </font>。这个时候，我们可以配置 <font color="#FF6666" > try_files </font>或者使用 <font color="#FF6666" > index </font>直接指定主页。

```conf
http {

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
```

#### 实例四
在 location context 中，可以使用正则表达式来匹配 URI。可以使用 ~ 或 ~* 前缀来指定正则表达式匹配，其中 ~ 区分大小写，~* 不区分大小写。

```conf
http {

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
```

我们这里设置，如果用户访问的是 <font color="#FF6666" > count/style.css </font> ,则让nginx 去 serve 根目录下的 index.html,但由于我们的这个 index.html 还引入了 <font color="#FF6666" > style.css </font> ，nginx 就去 <font color="#FF6666" > count/style.css </font>  去找 css 了，导致404。

所以我们可以这样配置:
```conf
http {

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
```

### 重定向和重写
现在我们已经有<font color="#FF6666" > /fruits </font>路由了，如果想要当用户访问<font color="#FF6666" > /crops </font>时，重定向到<font color="#FF6666" > /fruits </font>路由，可以这样配置。

```conf
http {

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
```
可以看到如果用户访问了<font color="#FF6666" > /crops </font>，他会被重定向到<font color="#FF6666" > /fruits </font>路由。

![](https://pic.imgdb.cn/item/65001135661c6c8e54d2f0be.jpg)

但如果，我们并不想重定向，只是想要别的路由下路由，就可以使用<font color="#FF6666" > rewrite </font>指令。下面的示例中，如果访问<font color="#FF6666" > /number/数字 </font>，nginx则会提供<font color="#FF6666" > /count/ </font>数字的内容

```conf
http {

  include mime.types;

  server {
    # 指定端口
    listen 80;
    root html;
    index index.html;

    rewrite ^/number/(\d+) /count/$1;

    location ~* /count/[0-9] {
      alias html/;
      try_files /index.html =404;
    }
   

  }
}
events {

}

```

## 负载均衡(load banancer)

### 基本概念
负载均衡是一种将网络流量分发到多个服务器上的技术，以实现更高的可用性、性能和可扩展性。在负载均衡系统中，请求会被分发到不同的服务器上，从而避免任何一台服务器过载或出现故障时影响整个系统的运行。

nginx实现负载均衡的方式有多种，下面是其中两种常用的方式：

a.基于轮询(Round Robin) 默认情况下，nginx 使用轮询算法进行负载均衡，将请求均匀地分发到多个后端服务器上。例如，在下面的配置中，nginx 将请求轮流转发到server1 和 server2 两台服务器上：

```conf
upstream backend {
    server server1;
    server server2;
}	
```

这种方法的优点是简单易用，可以均衡地分配请求。但是，如果某个后端服务器出现故障，则需要手动将其从upstream中删除，否则nginx仍然会将请求转发到该服务器上。

b.基于权重（Weighted Round Robin）

在轮询算法的基础上，nginx 还可以使用权重算法进行负载均衡。通过为每个后端服务器分配不同的权重值，使得某些服务器能够处理更多的请求。例如，在下面的配置中，nginx 将 70% 的请求转发到 server1 上，30% 的请求转发到 server2 上：

### 制作运行docker镜像

我们可以docker来运行多个server，这里就用express当作服务器。

```bash
npm init -y
npm i express
```

```js
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('I am a endpoint');
})

app.listen(7777,()=>{
  console.log('listening on http://localhost:7777');
})

```

然后再创建DockerFile，跟着node官网的教程来操作：

```DockerFile 
FROM node:16

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
CMD [ "npm", "run","start" ]
```

[![](https://pic.imgdb.cn/item/6500124d661c6c8e54d44b1f.jpg)](https://pic.imgdb.cn/item/6500124d661c6c8e54d44b1f.jpg)

最后制作镜像：
```bash
 docker build . -t myserver
```

可以在docker desktop看到已经制作完的镜像：

[![](https://pic.imgdb.cn/item/65001275661c6c8e54d45651.jpg)](https://pic.imgdb.cn/item/65001275661c6c8e54d45651.jpg)

接着开始跑运行该镜像的容器，尽管我们容器是运行在7777端口的，但是我们可以映射为我们本机的任意端口。

```bash
# -p 端口映射 -d 后台运行
docker run -p 1111:7777 -d myserver
```

然后如果我们访问 <font color="#FF6666" > http://localhost </font>，就可以发现运行成功了：

[![](https://pic.imgdb.cn/item/650012bb661c6c8e54d463e2.jpg)](https://pic.imgdb.cn/item/650012bb661c6c8e54d463e2.jpg)

那我们再继续运行几个容器：

```bash
docker run -p 2222:7777 -d myserver
docker run -p 3333:7777 -d myserver
docker run -p 4444:7777 -d myserver
```

[![](https://pic.imgdb.cn/item/650012f7661c6c8e54d47109.jpg)](https://pic.imgdb.cn/item/650012f7661c6c8e54d47109.jpg)


### Nginx 配置负载均衡
```conf
http {

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

```

最后，这个是全部的配置：
```conf
http {

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

    rewrite ^/number/(\d+) /count/$1;

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
```

注：本文是根据此youtu.be/7VAI73roXaY 视频以及 coder嘉琪 文章。

---
title: node-express
date: 2024-06-04
tags:
  - node
categories:
  - 后端
---

### Express

- 简洁而灵活：Express 提供了简单而直观的 API，使得构建 Web 应用程序变得简单快捷。它提供了一组灵活的路由和中间件机制，使开发人员可以根据需求定制和组织应用程序的行为。
- 路由和中间件：Express 使用路由和中间件来处理 HTTP 请求和响应。开发人员可以定义路由规则，将特定的 URL 路径映射到相应的处理函数。同时，中间件允许开发人员在请求到达路由处理函数之前或之后执行逻辑，例如身份验证、日志记录和错误处理。
- 路由模块化：Express 支持将路由模块化，使得应用程序可以根据不同的功能或模块进行分组。这样可以提高代码的组织性和可维护性，使得多人协作开发更加便捷。
- 视图引擎支持：Express 可以与各种模板引擎集成，例如 EJS、Pug（以前称为 Jade）、Handlebars 等。这使得开发人员可以方便地生成动态的 HTML 页面，并将数据动态渲染到模板中。
- 中间件生态系统：Express 有一个庞大的中间件生态系统，开发人员可以使用各种中间件来扩展和增强应用程序的功能，例如身份验证、会话管理、日志记录、静态文件服务等。

```javascript
import express from "express";

const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
  console.log(req.query);
  res.send("get");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("post");
});

app.get("/get/:id", (req, res) => {
  console.log(req.params);
  res.send("动态参数");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
```

```plsql
# GET http://localhost:3000/get/996 HTTP/1.1

POST http://localhost:3000/post HTTP/1.1
Content-Type: application/json

{
  "name":"test"
}


```

### 模块化

我们正常开发的时候肯定不会把代码写到一个模块里面，Express 允许将路由处理程序拆分为多个模块，每个模块负责处理特定的路由。通过将路由处理程序拆分为模块，可以使代码逻辑更清晰，易于维护和扩展

```javascript
src;
--user.js;
--list.js;
app.js;
```

```javascript
import express from "express";
import User from "./src/user.js";
import List from "./src/list.js";

const app = express();
app.use(express.json());
app.use("/user", User);
app.use("/list", List);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
```

```javascript
import express from "express";

const router = express.Router();

router.get("/getall", (req, res) => {
  res.json({
    code: 200,
    msg: "获取成功",
    data: [{ id: 1 }],
  });
});

export default router;
```

```javascript
import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.json({
    code: 200,
    msg: "登陆成功",
  });
});

router.post("/register", (req, res) => {
  res.json({
    code: 200,
    msg: "注册成功",
  });
});

export default router;
```

```javascript
POST http://localhost:3000/user/login HTTP/1.1
Content-Type: application/json

-----------------------------------------------

GET http://localhost:3000/list/getall HTTP/1.1
```

### 中间件

```javascript
import log4js from "log4js";

log4js.configure({
  appenders: {
    out: {
      type: "stdout",
      layout: {
        type: "colored",
      },
    },
    file: {
      filename: "logs/server.log",
      type: "file",
    },
  },
  categories: {
    default: {
      appenders: ["out", "file"],
      level: "debug",
    },
  },
});

const logger = log4js.getLogger("default");

/**
 * 每一个请求都会经过中间件
 * @param {*前端传参} req
 * @param {*返回数据} res
 * @param {*是否执行下一个中间件，不写就一直卡主} next
 */
const LoggerMiddleware = (req, res, next) => {
  logger.debug(`[${req.method} ${req.url}]`);
  next();
};

export default LoggerMiddleware;
```

### 防盗链

防盗链（Hotlinking）是指在网页或其他网络资源中，通过直接链接到其他网站上的图片、视频或其他媒体文件，从而显示在自己的网页上。这种行为通常会给被链接的网站带来额外的带宽消耗和资源浪费，而且可能侵犯了原始网站的版权。

为了防止盗链，网站管理员可以采取一些措施：

1. 通过 HTTP 引用检查：网站可以检查 HTTP 请求的来源，如果来源网址与合法的来源不匹配，就拒绝提供资源。这可以通过服务器配置文件或特定的脚本实现。
2. 使用 Referrer 检查：网站可以检查 HTTP 请求中的 Referrer 字段，该字段指示了请求资源的来源页面。如果 Referrer 字段不符合预期，就拒绝提供资源。这种方法可以在服务器配置文件或脚本中实现。
3. 使用访问控制列表（ACL）：网站管理员可以配置服务器的访问控制列表，只允许特定的域名或 IP 地址访问资源，其他来源的请求将被拒绝。
4. 使用防盗链插件或脚本：一些网站平台和内容管理系统提供了专门的插件或脚本来防止盗链。这些工具可以根据需要配置，阻止来自未经授权的网站的盗链请求。
5. 使用水印技术：在图片或视频上添加水印可以帮助识别盗链行为，并提醒用户资源的来源。

```javascript
import express from "express";

const app = express();
const whiteList = ["localhost"]; // 白名单

const preventHotLingking = (req, res, next) => {
  // 获取referrer
  const referer = req.get("referer");
  console.log(referer);

  if (referer) {
    const { hostname } = new URL(referer);
    if (!whiteList.includes(hostname)) {
      res.status(403).send("禁止访问");
      return;
    }
  }

  next();
};
app.use(preventHotLingking);

app.use("/asset", express.static("static"));

app.listen(3000, () => {
  console.log("listen localhost:3000");
});
```

### 响应头和请求头

#### 响应头

HTTP 响应头（HTTP response headers）是在 HTTP 响应中发送的元数据信息，用于描述响应的特性、内容和行为。它们以键值对的形式出现，每个键值对由一个标头字段（header field）和一个相应的值组成。

```javascript
Access-Control-Allow-Origin:*
Cache-Control:public, max-age=0, must-revalidate
Content-Type:text/html; charset=utf-8
Server:nginx
Date:Mon, 08 Jan 2024 18:32:47 GMT
```

#### 跨域

##### 同源策略

同源策略要求请求的源（协议、域名和端口）必须与资源的源相同，否则请求会被浏览器拒绝

```javascript
import express from "express";

const app = express();

app.use("*", (req, res, next) => {
  // *允许所有资源访问
  // 指定ip 或者网址
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5501");

  // Access-Control-Allow-Methods 默认只支持 get post head
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS,PATCH"
  );

  // 支持application/json
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.patch("/info", (req, res) => {
  res.json({
    code: 200,
    type: "PATCH",
  });
});

app.post("/info", (req, res) => {
  res.json({
    code: 200,
    type: "POST",
  });
});

app.listen(3000, () => {
  console.log("listen localhost:3000");
});
```

#### 自定义响应头

```javascript
app.get("/info", (req, res) => {
  res.set("xyx", 123456); // 自定义响应头
  res.setHeader("Access-Control-Expose-Headers", "xyx"); // 后端抛出自定义响应头
  res.json({
    code: 200,
    type: "GET",
  });
});
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <script>
      // 同源策略 协议不同 域名不同 端口不同 浏览器会拒绝请求
      // 默认是get请求
      // CORS Content-type: application/x-www-form-urlencoded | multipart/form-data | text/plain
      fetch("http://localhost:3000/info")
        .then((res) => {
          const header = res.headers;
          console.log(header.get("xyx"));
          return res.json();
        })
        .then((res) => {
          console.log(res);
        });
    </script>
  </body>
</html>
```

#### sse 技术

Server-Sent Events（SSE）是一种在客户端和服务器之间实现单向事件流的机制，允许服务器主动向客户端发送事件数据。在 SSE 中，可以使用自定义事件（Custom Events）来发送具有特定类型的事件数据。

webSocket 属于全双工通讯，也就是前端可以给后端实时发送，后端也可以给前端实时发送，SSE 属于单工通讯，后端可以给前端实时发送

```javascript
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.status(200);
  setInterval(() => {
    res.write("event: test\n");
    res.write("data: " + new Date().getTime() + "\n\n");
  }, 1000);
});
```

```javascript
const sse = new EventSource("http://localhost:3000/sse");
sse.addEventListener("test", (event) => {
  console.log(event.data);
});
```

---
title: node服务端
date: 2024-06-03
tags:
  - node
categories:
  - 后端
---

### http

```javascript
const http = require("node:http");

const url = require("node:url");

http
  .createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (req.method === "POST") {
      if (pathname === "/login") {
        let data = "";
        req.on("data", (chunk) => {
          data += chunk;
        });
        req.on("end", () => {
          res.setHeader("Content-Type", "application/Json");
          res.statusCode = 200;
          res.end(data);
        });
      } else {
        res.statusCode = 404;
        res.end("404 Not Found");
      }
    } else if (req.method === "GET") {
      console.log(query);
      if (pathname === "/get") {
        res.end("get");
      } else {
        res.statusCode = 404;
        res.end("404 Not Found");
      }
    }
  })
  .listen(98, () => {
    console.log("98端口启动成功");
  });
```

### 反向代理

```shell
npm install http-proxy-middleware
```

#### 主要服务

```javascript
const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");
const html = fs.readFileSync("./index.html");
const config = require("./test.config.js");

const { createProxyMiddleware } = require("http-proxy-middleware");

http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    const proxyList = Object.keys(config.server.proxy);

    if (proxyList.includes(pathname)) {
      const proxy = createProxyMiddleware(config.server.proxy[pathname]);
      proxy(req, res);
      return;
    }
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(html);
  })
  .listen(80);
```

#### 实际转发接收到的服务

```javascript
const http = require("node:http");
const url = require("node:url");

http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url, true);

    if (pathname === "/api") {
      res.end("proxy successful");
    }
  })
  .listen(3000, () => {
    console.log("3000 port");
  });
```

#### 读取的配置文件（类似 vite，webapck）

```javascript
const { Server } = require("http");

module.exports = {
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};
```

### 动静分离

动静分离（Dynamic and Static Separation）是一种常见的架构模式，旨在优化资源管理和提高网站或应用的性能和可维护性。动静分离主要指的是将动态内容（经常变化或依赖于用户请求的内容）和静态内容（如样式表、脚本、图片等不经常更改的资源）分开处理和存储。

```javascript
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import mime from "mime";

http
  .createServer((req, res) => {
    // 获取传给服务器的地址和请求方式
    const { url, method } = req;
    // console.log(url); url返回localhost:端口/中的包括斜杠的后面内容
    // 筛选出静态文件夹static的情况(只存在于GET请求中)
    if (url.startsWith("/static") && method === "GET") {
      // 获取上传的路径
      const filePath = path.join(process.cwd(), url);
      // 获取对应的mime类型
      const mimeType = mime.getType(filePath);
      // 读取文件内容
      fs.readFile(filePath, (err, data) => {
        // 处理错误的边界情况
        if (err) {
          res.writeHead(404, {
            "content-Type": "text/plain", // 设置响应头为纯文本类型
          });
          res.end("报错了嘞：", err);
        } else {
          res.writeHead(200, {
            "content-Type": mimeType, // 设置响应头为对应的MIME类型
            "cache-Control": "public, max-age=3600", // 设置缓存控制头(缓存一小时)
          });
          res.end(data);
        }
      });
    }
  })
  .listen(3000, () => {
    console.log("3000端口已启动");
  });
```

### 邮件服务

#### 需要用到的库

```javascript
npm install js-yaml
npm install nodemaile
```

#### js-yaml

解析 yaml 文件 成 js 对象

#### nodemailer

发送邮件

#### 服务商文档（qq 邮箱为例）

[https://wx.mail.qq.com/list/readtemplate?name=app_intro.html#/agreement/authorizationCode](https://wx.mail.qq.com/list/readtemplate?name=app_intro.html#/agreement/authorizationCode)

#### 主要逻辑

```http
POST http://localhost:3000/send/mail HTTP/1.1
Content-Type: application/json

{
  "to":"956813906@qq.com",
  "subject":"Hello",
  "text":"Hello World!"
}
```

```javascript
import nodemailer from "nodemailer";
import yaml from "js-yaml";
import http from "node:http";
import url from "node:url";
import fs from "node:fs";

const mailConfig = yaml.load(fs.readFileSync("./mail.yaml", "utf8"));

const transPort = nodemailer.createTransport({
  service: "qq",
  host: "smtp.qq.com",
  port: 587,
  secure: true,
  auth: {
    user: mailConfig.user,
    pass: mailConfig.pass,
  },
});

http
  .createServer(async (req, res) => {
    const { pathname } = url.parse(req.url);
    const { method } = req;

    if (method === "POST" && pathname == "/send/mail") {
      // 发送邮件
      let mailInfo = "";
      req.on("data", (chunk) => {
        mailInfo += chunk.toString();
      });

      req.on("end", () => {
        const body = JSON.parse(mailInfo);
        transPort.sendMail({
          to: body.to,
          from: mailConfig.user,
          subject: body.subject,
          text: body.text,
        });
      });

      res.end("ok");
    }
  })
  .listen(3000, () => {
    console.log("listening on port 3000");
  });
```

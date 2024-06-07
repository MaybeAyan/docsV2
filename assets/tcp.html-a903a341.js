import{_ as a,o as i,c as e,a as l}from"./app-d5c63569.js";const r={},h=l('<h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h3><ul><li>面向连接</li><li>一对一，不支持广播和多播</li><li>面向字节流</li><li>可靠传输</li><li>提供拥塞控制</li><li>提供全双工通信</li></ul><h4 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h4><p>1.客户端询问服务端能否发起连接 SYN；<br> 2.服务端同意连接 SYN + ACK；<br> 3.客户端收到 ACK（防止网络阻塞造成的客服端服务端状态不一致）；</p><h4 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h4><p>处于连接状态的客户端和服务端，都可以发起关闭连接请求，此时需要四次挥手来进行连接关闭。</p><p>1.假设客户端主动发起连接关闭请求，表示要关闭连接<br> 2.服务端收到，表示自己进入了关闭等待状态<br> 3.服务端此时还可以发送未发送的数据，而客户端还可以接收数据，待服务端发送完数据之后，进入最后确认状态。<br> 4.客户端收到之后，进入超时等待状态，经过超时时间后关闭连接，而服务端收到后，立即关闭连接。</p><h3 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> UDP</h3><ul><li>面向无连接，不需要建立三次握手</li><li>支持一对一、一对多、多对多方式</li><li>面向报文</li><li>不可靠（传输前不需要先建立连接，不需要确认，不跟踪连接）</li></ul><h3 id="共同点" tabindex="-1"><a class="header-anchor" href="#共同点" aria-hidden="true">#</a> 共同点</h3><ul><li>TCP 与 UDP 都工作在传输层，都是在程序间传输数据</li></ul><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3><ul><li>TCP 基于连接（打电话）</li><li>UDP 基于非连接（写信）</li></ul>',13),d=[h];function t(c,n){return i(),e("div",null,d)}const o=a(r,[["render",t],["__file","tcp.html.vue"]]);export{o as default};

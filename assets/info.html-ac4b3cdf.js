import{_ as n,p as e,q as t,s,t as o,Z as r,n as p}from"./framework-053dfde5.js";const c={},l=r(`<h1 id="art" tabindex="-1"><a class="header-anchor" href="#art" aria-hidden="true">#</a> Art</h1><br><img src="https://img.shields.io/badge/License-Apache 2.0- " style="display:inline-block;margin-right:10px;"><img src="https://gitee.com/fxz-cloud/art/badge/star.svg?theme=dark" style="display:inline-block;margin-right:10px;"><img src="https://gitee.com/fxz-cloud/art/badge/fork.svg?theme=dark" style="display:inline-block;margin-right:10px;"><br><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2><p>基于Spring Boot、Spring Cloud &amp; Alibaba打造，提供后端一站式开发平台，努力打造企业级开发解决方案。</p><ul><li>分布式版本使用基于Spring Boot、基于Spring Cloud、Spring Cloud Alibaba技术栈</li><li>前端采用vue3、typescript等主流技术栈。</li></ul><h2 id="中间件依赖" tabindex="-1"><a class="header-anchor" href="#中间件依赖" aria-hidden="true">#</a> 中间件依赖</h2><table><thead><tr><th>组件</th><th>默认启用</th><th>是否必须</th><th>备注</th></tr></thead><tbody><tr><td>MySQL</td><td>是</td><td>是</td><td>默认使用的数据库</td></tr><tr><td>Redis</td><td>是</td><td>是</td><td>token存储，缓存等等都用到了Redis</td></tr><tr><td>Nacos</td><td>是</td><td>是</td><td>配置、服务发现中心</td></tr></tbody></table><h2 id="项目整体结构" tabindex="-1"><a class="header-anchor" href="#项目整体结构" aria-hidden="true">#</a> 项目整体结构</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>art
    ├── art<span class="token operator">-</span>api <span class="token comment">-- 接口管理</span>
    ├── art<span class="token operator">-</span>auth <span class="token comment">-- 认证服务器</span>
    ├── art<span class="token operator">-</span>framework <span class="token comment">-- 通用工具封装</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>canal <span class="token comment">-- 针对canal封装</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>captcha <span class="token comment">-- 验证码封装</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>core <span class="token comment">-- web基础配置</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>data<span class="token operator">-</span>permission <span class="token comment">-- 数据权限封装</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>database <span class="token comment">-- 多数据源</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>dependencies <span class="token comment">-- 依赖管理</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>doc <span class="token comment">-- 接口文档</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>es <span class="token comment">-- es配置</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>feign <span class="token comment">-- feign拓展</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>file <span class="token comment">-- 文件管理模块</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>gateway <span class="token comment">-- 动态网关</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>hazelcast <span class="token comment">-- hazelcast分布式缓存</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>idempotency <span class="token comment">-- 幂等控制组件</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>jackson <span class="token comment">-- Json序列化配置</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>log <span class="token comment">-- 日志配置</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>mp <span class="token comment">-- mybatis-plus配置</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>rabbit <span class="token comment">-- rabbitMq消息队列</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>quartz <span class="token comment">-- quartz定时任务</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>redis <span class="token comment">-- 缓存、mq、key事件等封装</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>redisson <span class="token comment">-- redisson分布式锁相关模块</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>seata <span class="token comment">-- 分布式事务</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>security <span class="token comment">-- 安全模块</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>sensitive <span class="token comment">-- 数据脱敏</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>sequence <span class="token comment">-- 发号器（序列号生成器）</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>sms <span class="token comment">-- 阿里云短信服务</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>tenant <span class="token comment">-- SaaS多租户支持</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>websocket  <span class="token comment">-- websocket</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>xss  <span class="token comment">-- xss过滤</span>
       ├── art<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>xxl<span class="token operator">-</span>job  <span class="token comment">-- xxl-job配置</span>
    ├── art<span class="token operator">-</span>gateway <span class="token comment">-- 网关模块</span>
    ├── art<span class="token operator">-</span>server <span class="token comment">-- 系统服务</span>
       ├── art<span class="token operator">-</span>server<span class="token operator">-</span>system <span class="token comment">-- 系统管理模块</span>
       ├── art<span class="token operator">-</span>server<span class="token operator">-</span>generate <span class="token comment">-- 代码生成器模块</span>
       ├── art<span class="token operator">-</span>server<span class="token operator">-</span>scheduled <span class="token comment">-- quartz定时任务模块</span>
       ├── art<span class="token operator">-</span>server<span class="token operator">-</span>z<span class="token operator">-</span>demos <span class="token comment">-- 实验性模块</span>
    ├──_other <span class="token comment">-- 项目相关文件</span>
       ├── db <span class="token comment">-- 数据库相关文件</span>
       ├── docker <span class="token comment">-- docker环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块结构说明" tabindex="-1"><a class="header-anchor" href="#模块结构说明" aria-hidden="true">#</a> 模块结构说明</h2><p><strong>模块分包设计</strong> 以<code>service-system</code>举例</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>service<span class="token operator">-</span>system 
    ├── controller <span class="token comment">-- 控制器</span>
    ├── core <span class="token comment">-- 核心功能</span>
    ├── dao <span class="token comment">-- dao层封装</span>
    ├── manager <span class="token comment">-- 原子操作</span>
    ├── service <span class="token comment">-- 业务逻辑处理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p>Apache License Version 2.0</p><h2 id="致谢" tabindex="-1"><a class="header-anchor" href="#致谢" aria-hidden="true">#</a> 致谢</h2><blockquote><p>感谢所有人</p></blockquote>`,20),i={href:"https://gitee.com/fxz-cloud/art",target:"_blank",rel:"noopener noreferrer"},d=s("img",{src:"https://gitee.com/fxz-cloud/art/widgets/widget_card.svg?colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b",alt:"BlackCat/Art"},null,-1);function k(m,b){const a=p("ExternalLinkIcon");return e(),t("div",null,[l,s("p",null,[s("a",i,[d,o(a)])])])}const u=n(c,[["render",k],["__file","info.html.vue"]]);export{u as default};

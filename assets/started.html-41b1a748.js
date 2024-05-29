import{_ as a,p as e,q as s,Z as n}from"./framework-053dfde5.js";const i={},r=n(`<h2 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h2><h3 id="_0-安装中间件" tabindex="-1"><a class="header-anchor" href="#_0-安装中间件" aria-hidden="true">#</a> 0.安装中间件</h3><ul><li>项目启动的最小依赖为：nacos、mysql、redis三个中间件，推荐使用项目中提供的docker-compose.yml安装中间件。(路径：_other/docker/docker-compose.yml)</li><li>注意将docker-compose.yml中的密码等相关信息进行配置，注释中使用TODO标注的均需要自己手动修改为实际配置。 <img src="https://cdn.staticaly.com/gh/fxzbiz/img@url/2023/04/06/Dqjeyf.png" alt=""></li><li>执行以下命令</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker<span class="token operator">-</span>compose up <span class="token operator">-</span>d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，使用内置的docker-compose文件会自动执行sql脚本，不需要手动导入数据库。</p><h3 id="配置host" tabindex="-1"><a class="header-anchor" href="#配置host" aria-hidden="true">#</a> 配置host</h3><ul><li>配置host文件,注意将127.0.0.1修改为你相应中间件的地址即可。</li></ul><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>127.0.0.1 art-mysql #修改为你相应中间件的地址
127.0.0.1 art-redis  #修改为你相应中间件的地址
127.0.0.1 art-gateway
127.0.0.1 art-nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3><ul><li>依次启动art-gateway、art-auth、art-server-system即可。注意，这三个服务是必须启动的且网关服务必须优先于system启动，其他服务按需启动。</li></ul><h2 id="前端-node16" tabindex="-1"><a class="header-anchor" href="#前端-node16" aria-hidden="true">#</a> 前端(node16)</h2><ul><li>下载代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>fxz<span class="token operator">-</span>cloud<span class="token operator">/</span>art<span class="token operator">-</span>admin<span class="token operator">-</span>ui<span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>下载依赖</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动服务</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),l=[r];function d(t,c){return e(),s("div",null,l)}const p=a(i,[["render",d],["__file","started.html.vue"]]);export{p as default};

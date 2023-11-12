import{_ as s,o as n,c as a,a as l,v as p,M as e}from"./chunks/framework.c8e6088e.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","lastUpdated":1699502169000}'),o={name:"README.md"},t=p("h1",{align:"center"},"基于Vite项目笔记",-1),c=e(`<ol><li>安装依赖</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--registry=https://registry.npmmirror.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--registry=https://registry.npmmirror.com</span></span></code></pre></div><ol start="2"><li>运行程序</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 开发环境</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 构建静态文件</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 线上环境环境</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docs:preview</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 云端部署笔记</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docs:deploy</span></span></code></pre></div><h1 align="center">工程结构解析</h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">├── .vitepress</span></span>
<span class="line"><span style="color:#babed8;">│   ├── dist                   # 打包文件夹（可删除重新打包）</span></span>
<span class="line"><span style="color:#babed8;">│   ├── theme                   # 全局主题样式</span></span>
<span class="line"><span style="color:#babed8;">│   ├── config.ts              # 配置文件</span></span>
<span class="line"><span style="color:#babed8;">├── view                       # 笔记文档</span></span>
<span class="line"><span style="color:#babed8;">├── .prettierrc.json           # prettier 配置</span></span>
<span class="line"><span style="color:#babed8;">├── .gitignore                 # git 忽略文件</span></span>
<span class="line"><span style="color:#babed8;">├── index.md                   # 首页</span></span>
<span class="line"><span style="color:#babed8;">├── package.json               # package.json 依赖</span></span></code></pre></div>`,6);function r(i,y,d,B,E,m){return n(),a("div",null,[t,l(" ## 运行程序 "),c])}const C=s(o,[["render",r]]);export{_ as __pageData,C as default};

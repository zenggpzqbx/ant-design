(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ec324310"],{"1b87ba52":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return l;}});var i=n("f19d2b93"),a=n("a9d1a279"),l=e=>{let{item:{username:t,url:n}={}}=e;return t?(0,i.jsx)(a.Tooltip,{title:t,children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`https://github.com/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(a.Avatar,{size:"small",src:n,alt:t,children:t})})})}):null;};},"25c612ac":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return b;}});var i=n("777fffbe"),a=n("f19d2b93"),l=i._(n("5b220c3d")),r=n("47413d36"),o=n("e22febe0"),s=n("3835a2b7"),d=i._(n("8a36253d")),c=n("9c86e52a"),u=i._(n("4589ed41")),m=i._(n("23546486")),f=i._(n("91a66390")),p=i._(n("714a8bde")),g=i._(n("80a8572e"));let h={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},x=(0,s.createStyles)(({cssVar:e,token:t,css:n},i)=>{let a=new r.FastColor((0,d.default)("#f0f3fa","#fff")).onBackground(t.colorBgContainer).toHexString();return{holder:n`
      background: ${a};
    `,footer:n`
      background: ${a};
      color: ${e.colorTextSecondary};
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: ${e.colorText};
      }
      .rc-footer-column {
        margin-bottom: ${i?60:0}px;
        :last-child {
          margin-bottom: ${i?20:0}px;
        }
      }
      .rc-footer-item-icon {
        top: -1.5px;
      }
      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: ${e.marginXXL};
      }
      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: ${e.fontSize};
        }
      }
    `};});var b=()=>{let e=(0,f.default)(),[t,n]=(0,m.default)(h),{isMobile:i}=l.default.use(p.default),{styles:r}=x(i),{getLink:s}=e,d=l.default.useMemo(()=>{let e="cn"===n,t={title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design X",url:e?"https://ant-design-x.antgroup.com":"https://x.ant.design",openExternal:!0},{title:"Ant Design Charts",url:e?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Pro Components",url:e?"https://pro-components.antdigital.dev":"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:e?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:e?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Web3",url:e?"https://web3.antdigital.dev":"https://web3.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"Ant Motion",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},i={title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,a.jsx)(o.AntDesignOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,a.jsx)(o.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,a.jsx)(o.XOutlined,{}),title:"X",url:"http://x.com/antdesignui",openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque logo"}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,a.jsx)(o.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,a.jsx)(o.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf logo"}),title:"SEE Conf",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};return e&&i.items.push({icon:(0,a.jsx)(o.UsergroupAddOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.work_with_us"}),url:s("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:c.Link}),[t,i,{title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,a.jsx)(o.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,a.jsx)(o.HistoryOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.change-log"}),url:s("/changelog"),LinkComponent:c.Link},{icon:(0,a.jsx)(o.QuestionCircleOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.faq"}),url:s("/docs/react/faq"),LinkComponent:c.Link},{icon:(0,a.jsx)(o.BugOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,a.jsx)(o.IssuesCloseOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,a.jsx)(o.MessageOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,a.jsx)(o.QuestionCircleOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,a.jsx)(o.QuestionCircleOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech logo"}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,a.jsx)("img",{draggable:!1,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque logo"}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV logo"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://www.eggjs.org/logo.svg",alt:"Egg logo",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"Kitchen logo"}),title:"Kitchen",description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean logo"}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.galacean"}),description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://mdn.alipayobjects.com/huamei_4qpv3u/afts/img/iH6wQKX4WCYAAAAAAAAAAAAAeocTAQFr/original",width:16,height:16,alt:"WeaveFox logo"}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.weavefox"}),description:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.weavefox.slogan"}),url:"https://weavefox.cn/",openExternal:!0},{icon:(0,a.jsx)("img",{draggable:!1,src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech logo"}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,a.jsx)(o.BgColorsOutlined,{}),title:(0,a.jsx)(c.FormattedMessage,{id:"app.footer.theme"}),url:s("/theme-editor"),LinkComponent:c.Link}]}];},[s,n]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{columns:d,className:r.footer,bottom:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,a.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,a.jsx)("div",{children:t.owner})]})}),(0,a.jsx)(g.default,{})]});};},"3e969a12":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return x;}});var i=n("777fffbe"),a=n("f19d2b93"),l=n("5b220c3d"),r=n("a9d1a279"),o=n("3835a2b7"),s=n("c84cdf47"),d=n("9c86e52a"),c=i._(n("0a03b273")),u=i._(n("23546486")),m=i._(n("91a66390"));let f={cn:{deprecated:"\u5E9F\u5F03",update:"\u66F4\u65B0",new:"\u65B0\u589E"},en:{deprecated:"DEPRECATED",update:"UPDATE",new:"NEW"}},p=e=>{switch(null==e?void 0:e.toUpperCase()){case"UPDATE":return"processing";case"DEPRECATED":return"red";default:return"success";}},g=(0,o.createStyles)(({css:e,cssVar:t})=>({link:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,tag:e`
    margin-inline-end: 0;
  `,subtitle:e`
    font-weight: normal;
    font-size: ${t.fontSizeSM};
    opacity: 0.8;
  `})),h=e=>{let{styles:t}=g(),{before:n,after:i,link:l,title:o,subtitle:d,search:m,tag:h,className:x}=e,[b]=(0,u.default)(f);if(!n&&!i){let e;return(0,a.jsxs)(c.default,{to:`${l}${m}`,className:(0,s.clsx)(x,{[t.link]:h}),children:[(0,a.jsxs)(r.Flex,{justify:"flex-start",align:"center",gap:"small",children:[(0,a.jsx)("span",{children:o}),d&&(0,a.jsx)("span",{className:t.subtitle,children:d})]}),h&&(0,a.jsx)(r.Tag,{variant:"filled",className:(0,s.clsx)(t.tag),color:p(h),children:b[(e=h.replace(/VERSION/i,r.version)).toLowerCase()]??e})]});}return(0,a.jsxs)(c.default,{to:`${l}${m}`,className:x,children:[n,o,d&&(0,a.jsx)("span",{className:t.subtitle,children:d}),i]});};var x=(e={})=>{let t=(0,d.useFullSidebarData)(),{pathname:n,search:i}=(0,m.default)(),r=(0,d.useSidebarData)(),{before:o,after:s}=e;return[(0,l.useMemo)(()=>{var e,l;let d=[...r??[]];if(n.startsWith("/docs/spec")){let e=d.splice(0,1);d.push(...e);}if(n.startsWith("/docs/react")){let n=null===(e=Object.entries(t).find(([e])=>e.startsWith("/changelog")))||void 0===e?void 0:e[1];n&&d.splice(1,0,n[0]);}if(n.startsWith("/changelog")){let e=null===(l=Object.entries(t).find(([e])=>e.startsWith("/docs/react")))||void 0===l?void 0:l[1];e&&(d.unshift(e[0]),d.push(...e.slice(1)));}return(null==d?void 0:d.reduce((e,t)=>{if(null==t?void 0:t.title){var l,r;if(n.startsWith("/docs/spec")){let n=t.children.reduce((e,t)=>{var n;let i=(null===(n=t.frontmatter)||void 0===n?void 0:n.type)??"default";return e[i]||(e[i]=[]),e[i].push(t),e;},{}),r=[];r.push(...(null===(l=n.default)||void 0===l?void 0:l.map(e=>({label:(0,a.jsxs)(c.default,{to:`${e.link}${i}`,children:[o,null==e?void 0:e.title,s]}),key:e.link.replace(/(-cn$)/g,"")})))??[]),Object.entries(n).forEach(([e,t])=>{"default"!==e&&r.push({type:"group",label:e,key:e,children:null==t?void 0:t.map(e=>({label:(0,a.jsxs)(c.default,{to:`${e.link}${i}`,children:[o,null==e?void 0:e.title,s]}),key:e.link.replace(/(-cn$)/g,"")}))});}),e.push({label:null==t?void 0:t.title,key:null==t?void 0:t.title,children:r});}else e.push({type:"group",label:null==t?void 0:t.title,key:null==t?void 0:t.title,children:null===(r=t.children)||void 0===r?void 0:r.map(e=>{var t,n;return{label:(0,a.jsx)(h,{before:o,after:s,link:e.link,title:null==e?void 0:e.title,subtitle:null===(t=e.frontmatter)||void 0===t?void 0:t.subtitle,search:i,tag:null===(n=e.frontmatter)||void 0===n?void 0:n.tag}),key:e.link.replace(/(-cn$)/g,"")};})});}else{let n=t.children||[];n.every(e=>{var t;return null==e?void 0:null===(t=e.frontmatter)||void 0===t?void 0:t.date;})&&n.sort((e,t)=>{var n,i;return(null===(n=e.frontmatter)||void 0===n?void 0:n.date)>(null===(i=t.frontmatter)||void 0===i?void 0:i.date)?-1:1;}),e.push(...n.map(e=>{var t;return{label:(0,a.jsx)(h,{before:o,after:s,link:e.link,title:null==e?void 0:e.title,search:i,tag:null===(t=e.frontmatter)||void 0===t?void 0:t.tag}),key:e.link.replace(/(-cn$)/g,"")};}));}return e;},[]))??[];},[r,n,t,i,o,s]),n];};},"43a20bcd":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return c;}});var i=n("f19d2b93"),a=n("646d3849"),l=n("a9d1a279"),r=n("3835a2b7"),o=n("c84cdf47");let s="1.2em",d=(0,r.createStyles)(({cssVar:e,css:t})=>({btn:t`
      width: ${e.controlHeight};
      .btn-inner {
        transition: all ${e.motionDurationMid};
      }
      img {
        width: ${s};
        height: ${s};
      }
    `,innerDiv:t`
      position: relative;
      width: ${s};
      height: ${s};
    `,labelStyle:t`
      position: absolute;
      font-size: ${s};
      line-height: 1;
      border: 1px solid ${e.colorText};
      color: ${e.colorText};
    `,label1Style:t`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: ${e.colorText};
      color: ${e.colorBgContainer};
      transform: scale(0.7);
      transform-origin: 0 0;
    `,label2Style:t`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `}));var c=e=>{let{label1:t,label2:n,tooltip1:r,tooltip2:s,value:c,pure:u,onClick:m,...f}=e,{styles:{btn:p,innerDiv:g,labelStyle:h,label1Style:x,label2Style:b}}=d(),v=(0,i.jsx)(l.Button,{type:"text",onClick:m,className:p,...(0,a.omit)(f,["className"]),children:(0,i.jsxs)("div",{className:"btn-inner",children:[u&&(1===c?t:n),!u&&(0,i.jsxs)("div",{className:g,children:[(0,i.jsx)("span",{className:(0,o.clsx)(h,1===c?x:b),children:t}),(0,i.jsx)("span",{className:(0,o.clsx)(h,1===c?b:x),children:n})]})]})},"lang-button");return r||s?(0,i.jsx)(l.Tooltip,{title:1===c?r:s,children:v}):v;};},"494cb795":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return p;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=a._(n("5b220c3d")),o=n("e22febe0"),s=n("3835a2b7"),d=n("c84cdf47"),c=i._(n("3e969a12")),u=i._(n("714a8bde"));let m=(0,s.createStyles)(({cssVar:e,token:t,css:n})=>{let{iconCls:i}=t,{colorSplit:a,fontSizeIcon:l}=e;return{prevNextNav:n`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: ${e.fontSize};
      border-top: 1px solid ${a};
      display: flex;
    `,pageNav:n`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      ${i} {
        color: #999;
        font-size: ${l};
        transition: all ${e.motionDurationSlow};
      }

      .chinese {
        margin-inline-start: ${e.marginXXS};
      }
    `,prevNav:n`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end ${e.motionDurationSlow};
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `,nextNav:n`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start ${e.motionDurationSlow};
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `};}),f=e=>Array.isArray(e)?e.reduce((e,t)=>t?"children"in t&&t.children?e.concat(f(t.children)??[]):e.concat(t):e,[]):null;var p=({rtl:e})=>{let{styles:t}=m(),n={className:"footer-nav-icon-before"},i={className:"footer-nav-icon-after"},a=e?(0,l.jsx)(o.RightOutlined,{...n}):(0,l.jsx)(o.LeftOutlined,{...n}),s=e?(0,l.jsx)(o.LeftOutlined,{...i}):(0,l.jsx)(o.RightOutlined,{...i}),[p,g]=(0,c.default)({before:a,after:s}),{isMobile:h}=r.default.use(u.default),[x,b]=(0,r.useMemo)(()=>{let e=f(p);if(!e)return[null,null];let t=-1;return e.forEach((e,n)=>{e&&e.key===g&&(t=n);}),[e[t-1],e[t+1]];},[p,g]);return h?null:(0,l.jsxs)("section",{className:t.prevNextNav,children:[x&&r.default.cloneElement(x.label,{className:(0,d.clsx)(t.pageNav,t.prevNav,x.className)}),b&&r.default.cloneElement(b.label,{className:(0,d.clsx)(t.pageNav,t.nextNav,b.className)})]});};},"4b6975d6":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return g;}});var i=n("777fffbe"),a=n("f19d2b93"),l=i._(n("5b220c3d")),r=n("a9d1a279"),o=n("3835a2b7"),s=n("9c86e52a"),d=i._(n("a7fa2147")),c=i._(n("b550a850")),u=i._(n("25c612ac")),m=n("40d543ed"),f=i._(n("a249a395"));let p=(0,o.createStyles)(({cssVar:e,token:t,css:n},i)=>({resourcePage:n`
      footer {
        margin-top: 176px;
        .rc-footer-container {
          max-width: ${1208}px;
          margin: 0 auto;
          padding-inline-end: 0;
          padding-inline-start: 0;
        }
      }
    `,resourceContent:n`
      padding: 0 ${40}px;
      max-width: ${1208}px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 ${24}px;
          }
          ${t.antCls}-col {
            padding-top: ${e.padding} !important;
            padding-bottom: ${e.padding} !important;
          }
        }
      }
    `,banner:n`
      padding: 0 ${40}px;
      overflow: hidden;
      ${i?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');"}
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: ${1208}px;
        margin: 56px auto 16px;
      }

      section {
        max-width: ${1208}px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: ${e.fontSizeLG};
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -${24}px;
          padding: 0 ${24}px;
        }
      }
    `}));var g=({children:e})=>{var t;let n=l.default.use(m.DarkContext),{styles:i}=p(n),o=(0,s.useRouteMeta)(),g=(0,a.jsxs)(r.Layout,{children:[(0,a.jsx)(d.default,{}),(0,a.jsxs)("div",{id:"resources-page",className:i.resourcePage,children:[(0,a.jsx)(f.default,{}),(0,a.jsxs)("div",{className:i.banner,children:[(0,a.jsxs)(r.Typography.Title,{style:{fontSize:30},children:[null===(t=o.frontmatter)||void 0===t?void 0:t.title,(0,a.jsx)(c.default,{title:(0,a.jsx)(s.FormattedMessage,{id:"app.content.edit-page"}),filename:o.frontmatter.filename})]}),(0,a.jsx)("section",{children:o.frontmatter.description})]}),(0,a.jsx)("div",{className:i.resourceContent,children:e}),(0,a.jsx)(u.default,{})]})]});return n?g:(0,a.jsx)(r.ConfigProvider,{theme:{token:{colorBgLayout:"#fff"}},children:g});};},"530fedd5":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var i=n("f19d2b93"),a=n("1fe0ede3"),l=n("3835a2b7"),r=()=>{let e=(0,l.useTheme)();return(0,i.jsx)(a.Global,{styles:(0,a.css)`
        .design-inline-cards {
          display: flex;
          margin: 0 -${e.marginMD}px;
        }
        .design-inline-cards > * {
          flex: 10%;
          margin: 0 ${e.marginMD}px;
        }
        .design-inline-cards img {
          width: 100%;
          max-width: 100%;
        }
        .design-inline-cards h4 {
          margin-bottom: 0;
        }
      `});};},61595633:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return o;}});var i=n("777fffbe"),a=n("f19d2b93"),l=n("9c86e52a"),r=i._(n("25c612ac")),o=e=>{let{children:t,title:n,desc:i}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Helmet,{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("meta",{property:"og:title",content:n}),i&&(0,a.jsx)("meta",{name:"description",content:i})]}),(0,a.jsx)("div",{style:{minHeight:"100vh"},children:t}),(0,a.jsx)(r.default,{})]});};},"6ee40046":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return o;}});var i=n("f19d2b93"),a=n("1fe0ede3"),l=n("3835a2b7");let r={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"};var o=()=>{let e=(0,l.useTheme)(),t=(n,i=1)=>i<=10?`
.palette-${n}-${i} {
  background: ${e[`${n}-${i}`]};
}
${t(n,i+1)}
    `:"",n=(e=1)=>e<=13?`
.palette-gray-${e} {
  background: ${r[e]};
}
${n(e+1)}
    `:"";return(0,i.jsx)(a.Global,{styles:(0,a.css)`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-inline-end: 0;
              }

              .main-color-item {
                margin-inline-end: 0;

                &:hover {
                  margin-inline-end: -${e.paddingXS}px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 ${e.marginMD}px;
            font-size: ${e.fontSizeXL}px;
            text-align: center;
          }

          &-picker {
            margin: ${e.marginLG}px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-inline-start: ${e.margin}px;
              font-size: ${e.fontSize}px;
              font-family: Consolas, sans-serif;
              .ant-row-rtl & {
                margin-inline-end: ${e.margin}px;
                margin-inline-start: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-inline-start: ${e.margin}px;
              color: ${e.colorError};
              font-size: ${e.fontSize}px;

              .ant-row-rtl & {
                margin-inline-end: ${e.margin}px;
                margin-inline-start: 0;
              }

              &-dark {
                margin-inline-start: 0;
              }
            }
          }
        }

        .main-color {
          ${t("blue")}
          ${t("purple")}
          ${t("cyan")}
          ${t("green")}
          ${t("magenta")}
          ${t("red")}
          ${t("volcano")}
          ${t("orange")}
          ${t("gold")}
          ${t("yellow")}
          ${t("lime")}
          ${t("geekblue")}
          ${n()}

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-inline-end: ${e.marginXXS}px;
            padding: 0 ${e.paddingSM}px;
            font-size: ${e.fontSize}px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all ${e.motionDurationMid};

            &:first-child {
              border-radius: ${e.borderRadiusSM}px ${e.borderRadiusSM}px 0 0;
            }

            &:last-child {
              border-radius: 0 0 ${e.borderRadiusSM}px ${e.borderRadiusSM}px;
            }

            &:hover {
              margin-inline-end: -${e.marginXS}px;
              border-radius: 0 ${e.borderRadiusSM}px ${e.borderRadiusSM}px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all ${e.motionDurationSlow};
          }

          &-item &-value {
            position: relative;
            inset-inline-start: ${e.marginXXS}px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all ${e.motionDurationSlow};
          }
        }

        .color-title {
          margin: 0 0 ${e.marginLG}px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: ${e.fontSize}px;
        }

        .main-color:hover {
          .main-color-value {
            inset-inline-start: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: ${e.paddingXL}px ${e.paddingXL-4}px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-inline-end: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: ${e.borderRadiusSM}px ${e.borderRadiusSM}px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              inset-inline-start: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: ${e.paddingXS}px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `});};},75801792:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.e(t,{default:function(){return u;},useStyle:function(){return c;}});var i=n("777fffbe"),a=n("f19d2b93"),l=i._(n("5b220c3d")),r=n("a9d1a279"),o=n("3835a2b7"),s=n("c84cdf47"),d=n("9c86e52a");let c=(0,o.createStyles)(({cssVar:e,token:t,css:n})=>{let{antCls:i}=t;return{anchorToc:n`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      ${i}-anchor {
        ${i}-anchor-link-title {
          font-size: ${e.fontSizeSM};
        }
      }
    `,tocWrapper:n`
      position: fixed;
      top: calc(${t.headerHeight}px + ${e.marginXL} - 4px);
      inset-inline-end: 0;
      width: 148px;
      padding: 0;
      border-radius: ${e.borderRadius};
      box-sizing: border-box;
      margin-inline-end: calc(8px - 100vw + 100%);
      z-index: 10;
      .toc-debug {
        color: ${e.purple6};
        &:hover {
          color: ${e.purple5};
        }
      }
      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - ${t.headerHeight}px - ${e.marginXL} - 24px) !important;
        margin: auto;
        overflow: auto;
        padding: ${e.paddingXXS};
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: ${e.screenLG}) {
        display: none;
      }
    `,articleWrapper:n`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: ${e.screenLG}) {
        & {
          padding: 0 calc(${e.paddingLG} * 2);
        }
      }
    `};});var u=({showDebug:e,debugDemos:t=[]})=>{let{styles:n}=c(),i=(0,o.useTheme)(),u=(0,d.useRouteMeta)(),m=(0,d.useTabMeta)(),f=l.default.useMemo(()=>((null==m?void 0:m.toc)||u.toc).reduce((e,t)=>{if(2===t.depth)e.push({...t});else if(3===t.depth){let n=e[e.length-1];n&&(n.children=n.children||[],n.children.push({...t}));}return e;},[]),[null==m?void 0:m.toc,u.toc]);return u.frontmatter.toc?(0,a.jsx)("section",{className:n.tocWrapper,children:(0,a.jsx)(r.Anchor,{affix:!1,className:n.anchorToc,targetOffset:i.anchorTop,showInkInFixed:!0,items:f.map(n=>{var i;return{href:`#${n.id}`,title:n.title,key:n.id,children:null===(i=n.children)||void 0===i?void 0:i.filter(n=>e||!t.includes(n.id)).map(e=>({key:e.id,href:`#${e.id}`,title:(0,a.jsx)("span",{className:(0,s.clsx)({"toc-debug":t.includes(e.id)}),children:null==e?void 0:e.title})}))};})})}):null;};},"80a8572e":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return f;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=a._(n("5b220c3d")),o=n("c2d41482"),s=n("3835a2b7"),d=i._(n("23546486"));let c="ant-where-checker",u={cn:{whereNotSupport:`\u{4F60}\u{7684}\u{6D4F}\u{89C8}\u{5668}\u{4E0D}\u{652F}\u{6301}\u{73B0}\u{4EE3} CSS Selector\u{FF0C}\u{8BF7}\u{4F7F}\u{7528}\u{73B0}\u{4EE3}\u{6D4F}\u{89C8}\u{5668}\u{FF08}\u{5982} Chrome\u{3001}Firefox \u{7B49}\u{7B49}\u{FF09}\u{67E5}\u{770B}\u{5B98}\u{7F51}\u{3002}\u{5982}\u{679C}\u{9700}\u{8981}\u{5BF9}\u{65E7}\u{7248}\u{6D4F}\u{89C8}\u{5668}\u{8FDB}\u{884C}\u{6837}\u{5F0F}\u{652F}\u{6301}\u{FF0C}\u{6B22}\u{8FCE}\u{67E5}\u{9605}\u{914D}\u{7F6E}\u{6587}\u{6863}\u{FF1A}`,whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}},m=(0,s.createStyles)(({css:e,cssVar:t})=>({container:e`
    position: fixed;
    inset-inline-start: 0;
    inset-inline-end: 0;
    top: 0;
    bottom: 0;
    z-index: 99999999;
    background-color: ${t.colorTextSecondary};
    display: flex;
    justify-content: center;
    align-items: center;
  `,alertBox:e`
    border: 1px solid ${t.colorWarningBorder};
    background-color: ${t.colorWarningBg};
    color: ${t.colorTextHeading};
    padding: ${t.paddingXS} ${t.paddingSM};
    border-radius: ${t.borderRadiusLG};
    z-index: 9999999999;
    line-height: 22px;
    width: 520px;
    a {
      color: ${t.colorPrimary};
      text-decoration-line: none;
    }
  `}));var f=()=>{let[e]=(0,d.default)(u),[t,n]=r.useState(!0);r.useEffect(()=>{let e=document.createElement("p");e.className=c,e.style.position="fixed",e.style.pointerEvents="none",e.style.visibility="hidden",e.style.width="0",document.body.appendChild(e),(0,o.updateCSS)(`
:where(.${c}) {
  content: "__CHECK__";
}
    `,c);let{content:t}=getComputedStyle(e);n(String(t).includes("CHECK")),document.body.removeChild(e),(0,o.removeCSS)(c);},[]);let{styles:i}=m();return t?null:(0,l.jsx)("div",{className:i.container,children:(0,l.jsxs)("div",{className:i.alertBox,children:[e.whereNotSupport," ",(0,l.jsx)("a",{href:e.whereDocUrl,children:e.whereDocTitle})]})});};},"80ae577b":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return f;}});var i=n("777fffbe"),a=n("f19d2b93"),l=i._(n("5b220c3d")),r=i._(n("2cdbec91")),o=n("a9d1a279"),s=n("3835a2b7"),d=n("9c86e52a"),c=i._(n("3e969a12")),u=i._(n("714a8bde"));let m=(0,s.createStyles)(({cssVar:e,token:t,css:n})=>({asideContainer:n`
      min-height: 100%;
      padding-top: ${e.marginXL};
      padding-bottom: ${e.marginXXL} !important;
      font-family: Avenir, ${e.fontFamily}, sans-serif;
      padding-inline: ${e.paddingXXS};

      &${t.antCls}-menu-inline {
        ${t.antCls}-menu-submenu-title h4,
        > ${t.antCls}-menu-item,
        ${t.antCls}-menu-item a {
          overflow: hidden;
          font-size: ${e.fontSize};
          text-overflow: ellipsis;
        }

        > ${t.antCls}-menu-item-group > ${t.antCls}-menu-item-group-title {
          margin-top: ${e.margin};
          margin-bottom: ${e.margin};
          font-size: ${e.fontSize};

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: ${e.colorSplit};
            content: '';
          }
        }

        > ${t.antCls}-menu-item,
          > ${t.antCls}-menu-submenu
          > ${t.antCls}-menu-submenu-title,
          > ${t.antCls}-menu-item-group
          > ${t.antCls}-menu-item-group-title,
          > ${t.antCls}-menu-item-group
          > ${t.antCls}-menu-item-group-list
          > ${t.antCls}-menu-item,
          &${t.antCls}-menu-inline
          > ${t.antCls}-menu-item-group
          > ${t.antCls}-menu-item-group-list
          > ${t.antCls}-menu-item {
          padding-inline: 36px 12px !important;
        }

        // Nest Category > Type > Article
        &${t.antCls}-menu-inline {
          ${t.antCls}-menu-item-group-title {
            margin-inline-start: ${e.marginXXS};
            padding-inline-start: 60px;

            ${t.antCls}-row-rtl & {
              padding-inline-end: 60px;
              padding-inline-start: ${e.padding};
            }
          }

          ${t.antCls}-menu-item-group-list > ${t.antCls}-menu-item {
            padding-inline-start: 80px !important;

            ${t.antCls}-row-rtl & {
              padding-inline-end: 80px !important;
              padding-inline-start: ${e.padding} !important;
            }
          }
        }

        ${t.antCls}-menu-item-group:first-child {
          ${t.antCls}-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }
    `,mainMenu:n`
      z-index: 1;
      position: sticky;
      top: ${t.headerHeight}px;
      width: 100%;
      max-height: calc(100vh - ${t.headerHeight}px);
      overflow: hidden;
      scrollbar-width: thin;
      scrollbar-gutter: stable;

      &:hover {
        overflow-y: auto;
      }
    `}));var f=()=>{let e=(0,d.useSidebarData)(),{isMobile:t,theme:n}=l.default.use(u.default),{styles:i}=m(),[f,p]=(0,c.default)(),g=n.includes("dark"),{colorBgContainer:h}=(0,s.useTheme)(),x=(0,a.jsx)(o.ConfigProvider,{theme:{components:{Menu:{itemBg:h,darkItemBg:h}}},children:(0,a.jsx)(o.Menu,{items:f,inlineIndent:30,className:i.asideContainer,mode:"inline",theme:g?"dark":"light",selectedKeys:[p],defaultOpenKeys:null==e?void 0:e.map(({title:e})=>e).filter(Boolean)})});return t?(0,a.jsx)(r.default,{children:x},"Mobile-menu"):(0,a.jsx)(o.Col,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:i.mainMenu,children:x});};},"9ef535e4":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i.default;}});var i=n("777fffbe")._(n("04e63e65"));},a138adac:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return u;}});var i=n("777fffbe"),a=n("f19d2b93"),l=n("3835a2b7"),r=n("9c86e52a"),o=i._(n("a7fa2147")),s=i._(n("d0dc4122")),d=i._(n("80ae577b"));let c=(0,l.createStyles)(({css:e,cssVar:t})=>({main:e`
    display: flex;
  `,content:e`
    padding-top: ${t.marginXL};
  `}));var u=({children:e})=>{let{styles:t}=c(),[n]=(0,r.useSearchParams)(),i="false"===n.get("layout");return(0,a.jsxs)("main",{className:t.main,children:[(0,a.jsx)(o.default,{}),!i&&(0,a.jsx)(d.default,{}),(0,a.jsx)(s.default,{className:t.content,children:e})]});};},a2249523:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return u;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=n("3835a2b7"),o=n("9c86e52a"),s=i._(n("0a03b273")),d=a._(n("e67f7d0e"));let c=(0,r.createStyles)(({cssVar:e,token:t,css:n})=>{let{headerHeight:i}=t,{colorTextHeading:a,mobileMaxWidth:l}=e;return{logo:n`
      height: ${i}px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: ${a};
      font-weight: bold;
      font-size: 18px;
      line-height: ${i}px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      column-gap: ${e.marginSM};

      &:hover {
        color: ${a};
      }

      img {
        width: 32px;
        height: 32px;
        display: inline-block;
        vertical-align: middle;
      }

      @media only screen and (max-width: ${l}) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `,title:n`
      line-height: 32px;
    `};});var u=({isZhCN:e})=>{let{search:t}=(0,o.useLocation)(),{styles:n}=c();return(0,l.jsx)("h1",{children:(0,l.jsxs)(s.default,{to:d.getLocalizedPathname("/",e,t),className:n.logo,children:[(0,l.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",draggable:!1,alt:"logo"}),(0,l.jsx)("span",{className:n.title,children:"Ant Design"})]})});};},a249a395:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return p;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=a._(n("5b220c3d")),o=n("a9d1a279"),s=n("3835a2b7"),d=n("c84cdf47"),c=i._(n("f93c65a6")),u=i._(n("ca111321"));let m=["scroll","resize"],f=(0,s.createStyles)(({cssVar:e,token:t,css:n})=>{let{antCls:i}=t,{boxShadowSecondary:a}=e;return{affixTabs:n`
      position: fixed;
      top: 0;
      inset-inline-end: 0;
      inset-inline-start: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: ${a};
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity ${e.motionDurationSlow},
        transform ${e.motionDurationSlow};

      ${i}-tabs {
        max-width: 1208px;
        margin: 0 auto;

        ${i}-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          ${i}-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `,affixTabsFixed:n`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `,span:n`
      text-transform: capitalize;
    `};});var p=()=>{let e=r.useRef(null),t=r.useRef([]),[n,i]=r.useState(!1),[a,s]=r.useState(void 0),{styles:{affixTabs:p,affixTabsFixed:g,span:h}}=f();function x(t){let n=document.getElementById(t);if(n){let t=n.offsetTop-e.current.offsetHeight-32;(0,u.default)(t);}}r.useEffect(()=>{let e=document.querySelectorAll("h2[id]");t.current=Array.from(e).map(({id:e})=>e),i(!0);},[]),r.useEffect(()=>{let e=decodeURIComponent((location.hash||"").slice(1));e&&x(e);},[n]);let b=r.useMemo(()=>(0,c.default)(function(){let{scrollY:n}=window,i=e.current.offsetHeight;for(let e=t.current.length-1;e>=0;e-=1){let a=t.current[e];if(document.getElementById(a).offsetTop-i-32<=n){s(a);return;}}s(void 0);}),[]);return r.useEffect(()=>(m.forEach(e=>window.addEventListener(e,b)),b(),()=>{m.forEach(e=>window.removeEventListener(e,b));}),[b]),(0,l.jsx)("div",{className:(0,d.clsx)(p,a&&g),ref:e,children:(0,l.jsx)(o.Tabs,{activeKey:a,centered:!0,size:"large",onChange:x,items:t.current.map(e=>({key:e,label:(0,l.jsx)("span",{className:h,children:e.replace(/-/g," ")})}))})});};},a2a5b19a:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return p;}});var i=n("777fffbe"),a=n("f19d2b93"),l=n("e22febe0"),r=n("a9d1a279"),o=n("3835a2b7"),s=n("c84cdf47"),d=i._(n("23546486")),c=i._(n("c5c83154"));let u="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",m=(0,o.createStyles)(({cssVar:e,css:t})=>({card:t`
    width: 100%;
    margin: calc(${e.marginMD} * 2) 0;
    transition: all ${e.motionDurationMid};
    background-color: ${e.colorFillQuaternary};
  `,bigTitle:t`
    color: #121212;
    font-size: ${e.fontSizeLG};
    margin-bottom: ${e.marginLG};
    font-weight: ${e.fontWeightStrong};
  `,cardBody:t`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,leftCard:t`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 200px;
      overflow: hidden;
      margin-inline-end: ${e.marginLG};
      border-radius: ${e.borderRadiusLG};
    }
  `,title:t`
    color: #444;
    font-size: ${e.fontSizeLG};
    font-weight: ${e.fontWeightStrong};
    user-select: none;
  `,subTitle:t`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #646464;
    font-size: ${e.fontSize};
    font-weight: 400;
    margin-top: ${e.marginXS};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,logo:t`
    width: 24px;
    height: 24px;
    font-size: 24px;
    &.zhihu-logo {
      color: #056de8;
    }
    &.yuque-logo {
      color: #00b96b;
    }
    &.juejin-logo {
      color: #1e80ff;
    }
  `,arrowIcon:t`
    color: #8a8f8d;
    margin: 0 ${e.marginXS};
    font-size: ${e.fontSizeSM};
  `,zlBtn:t`
    padding: 0;
    color: #646464;
  `,discussLogo:t`
    width: 16px;
    height: 16px;
    font-size: 16px;
  `})),f={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}};var p=({zhihuLink:e,yuqueLink:t,juejinLink:n})=>{let[i]=(0,d.default)(f),{styles:{card:o,bigTitle:p,cardBody:g,leftCard:h,title:x,subTitle:b,logo:v,arrowIcon:j,zlBtn:w,discussLogo:y}}=m();return e||t||n?(0,a.jsxs)(r.Card,{className:o,variant:"borderless",children:[(0,a.jsx)("h3",{className:p,children:i.bigTitle}),e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Divider,{}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("img",{draggable:!1,src:u,alt:"antd"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:x,children:"Ant Design"}),(0,a.jsxs)("div",{className:b,children:[(0,a.jsx)(l.ZhihuOutlined,{className:(0,s.clsx)(v,"zhihu-logo")}),(0,a.jsx)(l.RightOutlined,{className:j}),(0,a.jsx)(r.Button,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:w,type:"link",children:i.zhiHu})]})]})]}),(0,a.jsx)(r.Button,{ghost:!0,type:"primary",icon:(0,a.jsx)(l.ZhihuOutlined,{className:y}),target:"_blank",href:e,children:i.buttonText})]})]}),t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Divider,{}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("img",{draggable:!1,src:u,alt:"antd"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:x,children:"Ant Design"}),(0,a.jsxs)("div",{className:b,children:[(0,a.jsx)(l.YuqueOutlined,{className:(0,s.clsx)(v,"yuque-logo")}),(0,a.jsx)(l.RightOutlined,{className:j}),(0,a.jsx)(r.Button,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:w,type:"link",children:i.yuQue})]})]})]}),(0,a.jsx)(r.Button,{ghost:!0,type:"primary",icon:(0,a.jsx)(l.YuqueOutlined,{className:y}),target:"_blank",href:t,children:i.buttonText})]})]}),n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Divider,{}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("img",{draggable:!1,src:u,alt:"antd"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:x,children:"Ant Design"}),(0,a.jsxs)("div",{className:b,children:[(0,a.jsx)(c.default,{className:(0,s.clsx)(v,"juejin-logo")}),(0,a.jsx)(l.RightOutlined,{className:j}),(0,a.jsx)(r.Button,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:w,type:"link",children:i.junjin})]})]})]}),(0,a.jsx)(r.Button,{ghost:!0,type:"primary",icon:(0,a.jsx)(c.default,{className:y}),target:"_blank",href:n,children:i.buttonText})]})]})]}):null;};},a3aa6524:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return h;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=a._(n("5b220c3d")),o=i._(n("868f756d")),s=n("3835a2b7"),d=n("c84cdf47"),c=n("9c86e52a"),u=i._(n("714a8bde")),m=i._(n("1b87ba52"));let f=(0,s.createStyles)(({cssVar:e,css:t})=>({listMobile:t`
    margin: 1em 0 !important;
  `,title:t`
    font-size: ${e.fontSizeSM};
    opacity: 0.5;
    margin-bottom: ${e.marginXS};
  `,list:t`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${e.motionDurationSlow};
      margin-inline-end: calc(-1 * ${e.marginXS});
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `})),p=["github-actions","copilot","renovate","dependabot"],g=({filename:e})=>{let{formatMessage:t}=(0,c.useIntl)(),{styles:n}=f(),{isMobile:i}=r.default.use(u.default);return e?(0,l.jsxs)("div",{className:(0,d.clsx)({[n.listMobile]:i}),children:[(0,l.jsx)("div",{className:n.title,children:t({id:"app.content.contributors"})}),(0,l.jsx)(o.default,{cache:!0,repo:"ant-design",owner:"ant-design",fileName:e,className:n.list,filter:e=>{var t;return!p.includes((null==e?void 0:null===(t=e.username)||void 0===t?void 0:t.toLowerCase())??"");},renderItem:(e,t)=>(0,l.jsx)(m.default,{item:e,loading:t},null==e?void 0:e.url)})]}):null;};var h=e=>(0,l.jsx)(r.Suspense,{fallback:null,children:(0,l.jsx)(g,{...e})});},a56683cc:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var i=n("777fffbe"),a=n("f19d2b93"),l=i._(n("6ee40046")),r=n("bea88868"),o=i._(n("530fedd5")),s=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Reset,{}),(0,a.jsx)(r.Common,{}),(0,a.jsx)(r.Markdown,{}),(0,a.jsx)(r.Highlight,{}),(0,a.jsx)(r.Demo,{}),(0,a.jsx)(r.Responsive,{}),(0,a.jsx)(r.NProgress,{}),(0,a.jsx)(r.PreviewImage,{}),(0,a.jsx)(o.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(r.HeadingAnchor,{}),(0,a.jsx)(r.SearchBar,{})]});},a7fa2147:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return o;}});var i=n("777fffbe"),a=n("f19d2b93"),l=i._(n("5b220c3d")),r=n("9c86e52a"),o=()=>{let e=(0,r.useRouteMeta)(),[t,n]=l.default.useMemo(()=>{let t;if(e.frontmatter.subtitle||e.frontmatter.title){var n;t=`${e.frontmatter.subtitle||""} ${(null===(n=e.frontmatter)||void 0===n?void 0:n.title)||""} - Ant Design`;}else t="404 Not Found - Ant Design";return[t,e.frontmatter.description||""];},[e]);return(0,a.jsxs)(r.Helmet,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{property:"og:title",content:t}),n&&(0,a.jsx)("meta",{name:"description",content:n})]});};},ad4b2adc:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return w;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=n("c84cdf47"),o=i._(n("072ab8a9"));n("2a5e301e");var s=a._(n("5b220c3d")),d=n("a9d1a279"),c=i._(n("e15e14cb")),u=n("9c86e52a"),m=i._(n("23546486")),f=i._(n("91a66390")),p=i._(n("a56683cc")),g=i._(n("eb388ffc")),h=i._(n("714a8bde")),x=i._(n("61595633")),b=i._(n("4b6975d6")),v=i._(n("a138adac"));let j={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}};var w=()=>{let e=(0,u.useOutlet)(),{pathname:t,search:n,hash:i}=(0,f.default)(),[a,w]=(0,m.default)(j),y=(0,s.useRef)(null),{direction:$}=s.default.use(h.default),{loading:_}=(0,u.useSiteData)(),{token:k}=d.theme.useToken(),[S]=(0,u.useSearchParams)(),M="false"===S.get("layout");(0,s.useLayoutEffect)(()=>{"cn"===w?o.default.locale("zh-cn"):o.default.locale("en");},[w]),(0,s.useEffect)(()=>{let e=document.getElementById("nprogress-style");return y.current=setTimeout(()=>{null==e||e.remove();},0),()=>clearTimeout(y.current);},[]),(0,s.useEffect)(()=>{let e=i.replace("#","");if(e){var t;null===(t=document.getElementById(decodeURIComponent(e)))||void 0===t||t.scrollIntoView();}},[_,i]),(0,s.useEffect)(()=>{void 0!==window.ga&&window.ga("send","pageview",t+n);},[t,n]);let C=s.default.useMemo(()=>["","/"].includes(t)||["/index"].some(e=>t.startsWith(e))?(0,l.jsx)(x.default,{title:a.title,desc:a.description,children:e}):t.startsWith("/docs/resource")?(0,l.jsx)(b.default,{children:e}):t.startsWith("/theme-editor")||t.startsWith("/theme-market")?e:(0,l.jsx)(v.default,{children:e}),[t,e,a.title,a.description]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.Helmet,{encodeSpecialCharacters:!1,children:[(0,l.jsx)("html",{lang:"cn"===w?"zh-CN":w,"data-direction":$,className:(0,r.clsx)({rtl:"rtl"===$})}),(0,l.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,l.jsx)("meta",{property:"og:description",content:a.description}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,l.jsxs)(d.ConfigProvider,{direction:$,locale:"cn"===w?c.default:void 0,theme:{token:{fontFamily:`AlibabaSans, ${k.fontFamily}`}},children:[(0,l.jsx)(p.default,{}),!M&&(0,l.jsx)(g.default,{}),C]})]});};},ba722e26:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return g;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=n("e22febe0"),o=n("a9d1a279"),s=n("3835a2b7"),d=n("9c86e52a"),c=i._(n("23546486")),u=i._(n("0a03b273")),m=a._(n("e67f7d0e"));let f={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},p=(0,s.createStyles)(({cssVar:e,token:t,css:n})=>({nav:n`
      height: 100%;
      font-size: ${e.fontSize};
      font-family: Avenir, ${e.fontFamily}, sans-serif;
      border: 0 !important;

      &${t.antCls}-menu-horizontal {
        border-bottom: none;

        & > ${t.antCls}-menu-item, & > ${t.antCls}-menu-submenu {
          min-width: ${64}px;
          height: ${t.headerHeight}px;
          padding-inline-end: ${e.paddingSM};
          padding-inline-start: ${e.paddingSM};
          line-height: ${t.headerHeight}px;
        }

        & ${t.antCls}-menu-submenu-title ${t.iconCls} {
          margin: 0;
        }

        & > ${t.antCls}-menu-item-selected {
          a {
            color: ${e.colorPrimary};
          }
        }
      }

      & > ${t.antCls}-menu-item, & > ${t.antCls}-menu-submenu {
        text-align: center;
      }
    `}));var g=e=>{var t,n;let{isZhCN:i,isMobile:a,responsive:s,directionText:g,onLangChange:h,onDirectionChange:x}=e,{pathname:b,search:v}=(0,d.useLocation)(),[j]=(0,c.default)(f),w=(null===(n=(0,d.useFullSidebarData)()["/docs/blog"])||void 0===n?void 0:null===(t=n[0])||void 0===t?void 0:t.children)||[],{styles:y}=p(),$=b.split("/").filter(Boolean).slice(0,-1).join("/")||"home";b.startsWith("/changelog")?$="docs/react":b.startsWith("/docs/resources")&&($="docs/resources");let _=[],k=[{label:(0,l.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,l.jsx)(d.FormattedMessage,{id:"app.header.lang"}),onClick:h,key:"switch-lang"},{label:g,onClick:x,key:"switch-direction"}];a?_=k:"crowded"===s&&(_=[{label:(0,l.jsx)(r.MenuOutlined,{}),key:"additional",children:[...k]}]);let S=[{label:(0,l.jsx)(u.default,{to:m.getLocalizedPathname("/docs/spec/introduce",i,v),children:j.design}),key:"docs/spec"},{label:(0,l.jsx)(u.default,{to:m.getLocalizedPathname("/docs/react/introduce",i,v),children:j.development}),key:"docs/react"},{label:(0,l.jsx)(u.default,{to:m.getLocalizedPathname("/components/overview/",i,v),children:j.components}),key:"components"},w.length?{label:(0,l.jsx)(u.default,{to:m.getLocalizedPathname(w.sort((e,t)=>{var n,i;return(null===(n=e.frontmatter)||void 0===n?void 0:n.date)>(null===(i=t.frontmatter)||void 0===i?void 0:i.date)?-1:1;})[0].link,i,v),children:j.blog}),key:"docs/blog"}:null,{label:(0,l.jsx)(u.default,{to:m.getLocalizedPathname("/docs/resources",i,v),children:j.resources}),key:"docs/resources"},i?{key:"mirror",label:(0,l.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"})}:null,..._??[]].filter(Boolean);return(0,l.jsx)(o.ConfigProvider,{theme:{token:{colorBgContainer:"transparent"}},children:(0,l.jsx)(o.Menu,{mode:a?"inline":"horizontal",selectedKeys:[$],className:y.nav,disabledOverflow:!0,items:S})});};},c5c83154:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return a;}});var i=n("f19d2b93"),a=e=>(0,i.jsxs)("svg",{width:"36",height:"28",viewBox:"0 0 36 28",fill:"currentColor",...e,children:[(0,i.jsx)("title",{children:"Juejin logo"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})]});},d0dc4122:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return $;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=a._(n("5b220c3d")),o=n("a9d1a279"),s=n("c84cdf47"),d=n("9c86e52a"),c=i._(n("098b7512")),u=i._(n("91a66390")),m=i._(n("7e70d2c5")),f=i._(n("b550a850")),p=i._(n("494cb795")),g=i._(n("ba953c8b")),h=i._(n("25c612ac")),x=i._(n("714a8bde")),b=i._(n("a2a5b19a")),v=i._(n("a3aa6524")),j=a._(n("75801792")),w=i._(n("e814ec24"));let y=({num:e=6})=>Array.from({length:e}).map((e,t)=>(0,l.jsx)(o.Skeleton.Avatar,{size:"small",active:!0,style:{marginInlineStart:0===t?0:-8}},t));var $=({children:e,className:t})=>{var n,i,a;let $=(0,d.useRouteMeta)(),{pathname:_,hash:k}=(0,u.default)(),{direction:S}=r.default.use(x.default),{styles:M}=(0,j.useStyle)(),[C,N]=(0,c.default)(!1),[z,A]=(0,r.useState)("tsx"),L=(0,r.useMemo)(()=>{var e;return(null===(e=$.toc)||void 0===e?void 0:e.filter(e=>e._debug_demo).map(e=>e.id))||[];},[$]),E=L.includes(k.slice(1));(0,r.useLayoutEffect)(()=>{N(E);},[E]);let T=(0,r.useMemo)(()=>({showDebug:C,setShowDebug:N,codeType:z,setCodeType:A}),[C,z]),D="rtl"===S;return(0,l.jsx)(g.default,{value:T,children:(0,l.jsxs)(o.Col,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,className:t,children:[(0,l.jsx)(j.default,{showDebug:C,debugDemos:L}),(0,l.jsxs)("article",{className:(0,s.clsx)(M.articleWrapper,{rtl:D}),children:[(null===(n=$.frontmatter)||void 0===n?void 0:n.title)?(0,l.jsx)(o.Flex,{justify:"space-between",children:(0,l.jsx)(o.Typography.Title,{style:{fontSize:32,position:"relative"},children:(0,l.jsxs)(o.Space,{children:[(0,l.jsx)("span",{children:null===(i=$.frontmatter)||void 0===i?void 0:i.title}),(0,l.jsx)("span",{children:null===(a=$.frontmatter)||void 0===a?void 0:a.subtitle}),!_.startsWith("/components/overview")&&(0,l.jsx)(f.default,{title:(0,l.jsx)(d.FormattedMessage,{id:"app.content.edit-page"}),filename:$.frontmatter.filename})]})})}):null,(0,l.jsx)(w.default,{}),!$.frontmatter.__autoDescription&&$.frontmatter.description,"Components"===$.frontmatter.category&&"false"!==String($.frontmatter.showImport)&&(0,l.jsx)(m.default,{source:!0,component:$.frontmatter.title,filename:$.frontmatter.filename,version:$.frontmatter.tag,designUrl:$.frontmatter.designUrl,searchTitleKeywords:[$.frontmatter.title,$.frontmatter.subtitle].filter(Boolean),repo:"ant-design/ant-design"}),(0,l.jsxs)("div",{style:{minHeight:"calc(100vh - 64px)"},children:[e,(0,l.jsx)(o.FloatButton.BackTop,{})]}),(0,l.jsx)(b.default,{zhihuLink:$.frontmatter.zhihu_url,yuqueLink:$.frontmatter.yuque_url,juejinLink:$.frontmatter.juejin_url}),(0,l.jsx)("div",{style:{marginTop:120},children:(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)(y,{}),children:(0,l.jsx)(v.default,{filename:$.frontmatter.filename})})})]}),(0,l.jsx)(p.default,{rtl:D}),(0,l.jsx)(h.default,{})]})});};},e814ec24:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return u;}});var i=n("777fffbe"),a=n("f19d2b93"),l=n("5b220c3d"),r=n("e22febe0"),o=n("a9d1a279"),s=i._(n("072ab8a9")),d=n("9c86e52a");let c=({name:e,avatar:t})=>{let[n,i]=(0,l.useState)(!0),[r,s]=(0,l.useState)(!1);return((0,l.useLayoutEffect)(()=>{let e=new Image;e.src=t,e.onload=()=>i(!1),e.onerror=()=>s(!0);},[t]),r)?null:n?(0,a.jsx)(o.Skeleton.Avatar,{size:"small",active:!0}):(0,a.jsx)(o.Avatar,{size:"small",src:t,alt:e,children:e});};var u=()=>{let e=(0,d.useRouteMeta)(),{author:t}=e.frontmatter,n=(0,l.useMemo)(()=>t?"string"==typeof t?t.split(",").map(e=>({name:e,avatar:`https://github.com/${e}.png`})):Array.isArray(t)?t:[]:[],[t]);return e.frontmatter.date||e.frontmatter.author?(0,a.jsx)(o.Typography.Paragraph,{children:(0,a.jsxs)(o.Flex,{gap:"small",children:[e.frontmatter.date&&(0,a.jsxs)("span",{style:{opacity:.65},children:[(0,a.jsx)(r.CalendarOutlined,{})," ",(0,s.default)(e.frontmatter.date).format("YYYY-MM-DD")]}),n.map(e=>(0,a.jsx)("a",{href:`https://github.com/${e.name}`,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(o.Flex,{gap:4,children:[(0,a.jsx)(c,{name:e.name,avatar:e.avatar}),(0,a.jsxs)("span",{style:{opacity:.65},children:["@",e.name]})]})},e.name))]})}):null;};},eb388ffc:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.e(t,{ANT_LOCAL_TYPE_KEY:function(){return k;},default:function(){return M;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=a._(n("5b220c3d")),o=n("e22febe0"),s=n("a9d1a279"),d=n("3835a2b7"),c=n("c84cdf47"),u=i._(n("072ab8a9")),m=n("9c86e52a"),f=i._(n("1c94f9dc")),p=i._(n("23546486")),g=i._(n("ab6def4f")),h=n("b055b5cb"),x=i._(n("7a33de8c")),b=i._(n("efe86da3")),v=n("f0cc8246"),j=a._(n("e67f7d0e")),w=i._(n("714a8bde")),y=i._(n("a2249523")),$=i._(n("ba722e26")),_=i._(n("43a20bcd"));let k="ANT_LOCAL_TYPE_KEY",S=(0,d.createStyles)(({cssVar:e,token:t,css:n})=>{let i="#ced4d9";return{header:n`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: ${e.colorBgContainer};
      box-shadow: ${e.boxShadowTertiary};
      backdrop-filter: blur(8px);

      @media only screen and (max-width: ${e.mobileMaxWidth}) {
        text-align: center;
        border: none;
      }

      .dumi-default-search-bar {
        display: inline-flex;
        align-items: center;
        flex: auto;
        margin: 0;
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: ${i};
        }

        > input {
          height: 22px;
          border: 0;
          max-width: calc(100vw - 768px);

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: ${i};
          }
        }

        .dumi-default-search-shortcut {
          color: ${i};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: ${e.borderRadiusSM};
          position: static;
          top: unset;
          transform: unset;
        }

        .dumi-default-search-popover {
          inset-inline-start: ${e.paddingSM};
          inset-inline-end: unset;
          z-index: 1;
          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
          & > section {
            scrollbar-width: thin;
            scrollbar-gutter: stable;
          }
        }
      }
    `,menuRow:n`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: ${e.paddingSM};
      padding-inline-end: ${e.padding};

      > * {
        flex: none;
        margin: 0;
      }

      .ant-btn {
        font-family: sans-serif;
      }
    `,dataDirectionIcon:n`
      width: 20px;
    `,popoverMenu:{width:300,[`${t.antCls}-popover-inner-content`]:{padding:0}},banner:n`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `,link:n`
      margin-inline-start: 10px;
      @media only screen and (max-width: ${e.mobileMaxWidth}) {
        margin-inline-start: 0;
      }
    `,versionSelect:n`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `};});var M=()=>{let[,e]=(0,p.default)(),{pkg:t}=(0,m.useSiteData)(),n=(0,j.getThemeConfig)(),[i,a]=(0,r.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),{direction:d,isMobile:M,bannerVisible:C,updateSiteConfig:N}=r.default.use(w.default),z=(0,r.useRef)(null),A=(0,m.useLocation)(),{pathname:L,search:E}=A,{styles:T}=S(),[,D]=(0,g.default)(v.ANT_DESIGN_NOT_SHOW_BANNER,{defaultValue:void 0}),[,F]=(0,g.default)(k,{defaultValue:void 0}),R=(0,r.useCallback)(()=>{a(e=>({...e,menuVisible:!1}));},[]),B=(0,r.useCallback)(()=>{a(e=>({...e,windowWidth:window.innerWidth}));},[]),O=(0,r.useCallback)(e=>{a(t=>({...t,menuVisible:e}));},[]),I=()=>{N({direction:"rtl"!==d?"rtl":"ltr"});};(0,r.useEffect)(()=>{R();},[R,A]),(0,r.useEffect)(()=>(B(),window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B),z.current&&clearTimeout(z.current);}),[B]);let H=(0,r.useCallback)(e=>{let t=window.location.href,n=window.location.pathname;if(/overview/.test(n)&&/0?[1-39][0-3]?x/.test(e)){window.location.href=t.replace(window.location.origin,e).replace(/\/components\/overview/,`/docs${/0(9|10)x/.test(e)?"":"/react"}/introduce`).replace(/\/$/,"");return;}let i=new URL(t.replace(window.location.origin,e));i.host.includes("antgroup")?(i.pathname=`${i.pathname.replace(/\/$/,"")}/`,window.location.href=i.toString()):window.location.href=i.href.replace(/\/$/,"");},[]),X=(0,r.useCallback)(()=>{let e=`${window.location.protocol}//`,t=window.location.href.slice(e.length);F(j.isZhCN(L)?"en-US":"zh-CN"),window.location.href=e+t.replace(window.location.pathname,j.getLocalizedPathname(L,!j.isZhCN(L),E).pathname);},[L,E]),W=(0,r.useMemo)(()=>"rtl"!==d?"RTL":"LTR",[d]),P=(0,r.useMemo)(()=>"rtl"===d?{direction:"ltr",textAlign:"end"}:{},[d]),{menuVisible:G,windowWidth:q,searching:U}=i,V={[t.version]:t.version,...null==n?void 0:n.docVersions},Z=Object.keys(V).map(e=>({value:V[e],label:e})),Y=["","index","index-cn"].includes(L),K="cn"===e,Q="rtl"===d,J=(0,h.getBannerData)(),ee=(null==J?void 0:J.title)||"",et=(null==J?void 0:J.href)||"",en=null;q<1120?en="crowded":q<1200&&(en="narrow");let ei=(0,c.clsx)(T.header,"clearfix",{"home-header":Y}),ea={isZhCN:K,isRTL:Q},el=(0,l.jsx)($.default,{...ea,responsive:en,isMobile:M,directionText:W,onLangChange:X,onDirectionChange:I},"nav"),er=[el,(0,l.jsx)(s.Select,{size:"small",variant:"filled",className:T.versionSelect,defaultValue:t.version,onChange:H,styles:{popup:{root:P}},popupMatchSelectWidth:!1,getPopupContainer:e=>e.parentNode,options:Z},"version"),(0,l.jsx)(_.default,{onClick:X,value:j.isZhCN(L)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,l.jsx)(_.default,{onClick:I,value:"rtl"===d?2:1,label1:(0,l.jsx)(b.default,{className:T.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,l.jsx)(b.default,{className:T.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,l.jsx)(x.default,{},"theme"),(0,l.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(s.Tooltip,{title:"GitHub",destroyOnHidden:!0,children:(0,l.jsx)(s.Button,{type:"text",icon:(0,l.jsx)(o.GithubOutlined,{}),style:{fontSize:16}})})},"github")];q<1120?er=U?[]:[el]:q<1200&&(er=U?[]:er);let eo=Y?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,l.jsxs)("header",{className:ei,children:[M&&(0,l.jsx)(s.Popover,{classNames:{root:T.popoverMenu},placement:"bottomRight",content:er,trigger:"click",open:G,arrow:{pointAtCenter:!0},onOpenChange:O,children:(0,l.jsx)(o.MenuOutlined,{className:"nav-phone-icon"})}),K&&C&&ee&&et&&(0,l.jsx)(s.ConfigProvider,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,l.jsx)(s.Alert,{className:T.banner,title:ee&&et?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:ee}),(0,l.jsx)("a",{className:T.link,href:et,target:"_blank",rel:"noreferrer",onClick:()=>{var e,t;null===(e=(t=window).gtag)||void 0===e||e.call(t,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:et});},children:"\u524D\u5F80\u4E86\u89E3"})]}):null,type:"info",banner:!0,showIcon:!1,closable:{closeIcon:!0,onClose:()=>{N({bannerVisible:!1}),D((0,u.default)().toISOString());}}})}),(0,l.jsxs)(s.Row,{style:{flexFlow:"nowrap",height:64},children:[(0,l.jsx)(s.Col,{...eo[0],children:(0,l.jsx)(y.default,{...ea,location:A})}),(0,l.jsx)(s.Col,{...eo[1],children:(0,l.jsxs)("div",{className:T.menuRow,children:[(0,l.jsx)(f.default,{}),!M&&er]})})]})]});};},efe86da3:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return o;}});var i=n("777fffbe"),a=n("f19d2b93"),l=i._(n("e22febe0"));let r=({direction:e})=>(0,a.jsxs)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:`scaleX(${"ltr"===e?"1":"-1"})`},children:[(0,a.jsx)("title",{children:"Direction Icon"}),(0,a.jsx)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"})]});var o=e=>{let{ref:t,direction:n,...i}=e;return(0,a.jsx)(l.default,{component:()=>(0,a.jsx)(r,{direction:n}),ref:t,...i});};},f0cc8246:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.e(t,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return j;},default:function(){return $;}});var i=n("777fffbe"),a=n("852bbaa9"),l=n("f19d2b93"),r=a._(n("5b220c3d")),o=n("92a444f6"),s=n("2190d124"),d=n("c5e2d900"),c=n("a9d1a279"),u=i._(n("072ab8a9")),m=n("9c86e52a"),f=n("40d543ed"),p=i._(n("098b7512")),g=i._(n("ab6def4f")),h=n("b055b5cb"),x=n("7a33de8c"),b=i._(n("44bde013")),v=i._(n("714a8bde"));let j="ANT_DESIGN_NOT_SHOW_BANNER";if("undefined"!=typeof window){let e=location.hash.slice(1);e.startsWith("components-")&&!document.querySelector(`#${e}`)&&(location.hash=`#${e.replace(/^components-/,"")}`);}let w=(e=[],t)=>e.map(e=>"auto"===e&&"dark"===t||"dark"===e?c.theme.darkAlgorithm:"compact"===e?c.theme.compactAlgorithm:null).filter(Boolean),y=()=>"undefined"==typeof window?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var $=()=>{let e=(0,m.useOutlet)(),[t,n]=(0,m.useSearchParams)(),[{theme:i=[],direction:a,isMobile:$,bannerVisible:_=!1,dynamicTheme:k},S]=(0,p.default)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1,dynamicTheme:void 0}),[M]=(0,g.default)(x.ANT_DESIGN_SITE_THEME,{defaultValue:void 0}),[C]=(0,g.default)(j,{defaultValue:void 0}),N=e=>{let t=e.filter(e=>!["light","dark","auto"].includes(e)),n=e.find(e=>"light"===e||"dark"===e);return n?[...t,n]:["light","dark","auto"].includes(M)?[...t,M]:[...t,"auto"];},[z,A]=r.default.useState(()=>y()),L=(0,h.getBannerData)(),E=(0,r.useCallback)(e=>{S(t=>({...t,...e}));let i=t.toString(),a=t;Object.entries(e).forEach(e=>{let[t,n]=e;if("direction"===t&&("rtl"===n?a.set("direction","rtl"):a.delete("direction")),"theme"===t){let e=Array.isArray(n)?n:[n],t=e.filter(e=>!["light","dark","auto"].includes(e)),i=e.find(e=>"light"===e||"dark"===e);i?a=(0,m.createSearchParams)({...a,theme:[...t,i]}):a.delete("theme");}}),a.toString()!==i&&n(a);},[t,n]),T=(0,r.useCallback)(()=>{E({isMobile:window.innerWidth<768});},[E]);(0,r.useEffect)(()=>{let e=i.find(e=>"light"===e||"dark"===e),t=document.querySelector("html");i.includes("auto")&&z?null==t||t.setAttribute("data-prefers-color",z):e&&(null==t||t.setAttribute("data-prefers-color",e));},[z,i]),(0,r.useEffect)(()=>{if("undefined"==typeof window)return;let e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{A(e.matches?"dark":"light");};return e.addEventListener("change",t),()=>{e.removeEventListener("change",t);};},[]),(0,r.useEffect)(()=>{let e=N(t.getAll("theme")),n=t.get("direction"),i=C&&(0,u.default)().diff((0,u.default)(C),"day")>=1;S({theme:e,direction:"rtl"===n?"rtl":"ltr",bannerVisible:"undefined"!=typeof window&&window.location.pathname.includes("-cn")&&!!L&&(!C||!!i)}),T();let a=window[Symbol.for("antd.mirror-notify")];return"function"==typeof a&&a(),window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T);};},[t,T]);let D=r.default.useMemo(()=>({direction:a,updateSiteConfig:E,theme:i,isMobile:$,bannerVisible:_,dynamicTheme:k}),[$,a,E,i,_,k]),[F,R]=r.default.useMemo(()=>{let e=i,{algorithm:t,token:n,...a}=k||{};t&&(e=e.filter(e=>"dark"!==e&&"light"!==e)).push(t);let l={};return Object.keys(a).forEach(e=>{l[e]={classNames:a[e]};}),[{algorithm:w(e,z),token:{motion:!i.includes("motion-off"),...n},hashed:!1,zeroRuntime:!0},l];},[i,k,z]),B=r.default.useMemo(()=>(0,o.createCache)(),[]);return(0,m.useServerInsertedHTML)(()=>{let e=(0,o.extractStyle)(B,{plain:!0,types:"style"});return(0,l.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:e}});}),(0,m.useServerInsertedHTML)(()=>{let e=(0,o.extractStyle)(B,{plain:!0,types:["cssVar","token"]});return(0,l.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:e}});}),(0,m.useServerInsertedHTML)(()=>(0,l.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,d.getSandpackCssText)()}})),(0,l.jsx)(f.DarkContext,{value:i.includes("dark")||i.includes("auto")&&"dark"===z,children:(0,l.jsx)(o.StyleProvider,{cache:B,layer:!0,linters:[o.legacyNotSelectorLinter,o.parentSelectorLinter,o.NaNLinter],children:(0,l.jsx)(v.default,{value:D,children:(0,l.jsx)(b.default,{theme:F,children:(0,l.jsx)(s.HappyProvider,{disabled:!i.includes("happy-work"),children:(0,l.jsx)(c.ConfigProvider,{...R,children:(0,l.jsx)(c.App,{children:e})})})})})})});};}}]);
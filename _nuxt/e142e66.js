(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(t,n,r){"use strict";var e=r(148),o=r.n(e);r(217);n.a=function(t){t.app.AOS=new o.a.init}},137:function(t,n,r){var content=r(193);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("7388ab72",content,!0,{sourceMap:!1})},139:function(t,n,r){var content=r(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("56b15182",content,!0,{sourceMap:!1})},150:function(t,n,r){"use strict";var e={},o=(r(198),r(58)),c=r(75),d=r.n(c),f=r(224),l=r(226),x=r(225),component=Object(o.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",{attrs:{"data-aos":"fade-down","data-aos-duration":"400"}},[n("v-main",{staticClass:"align-center justify-center image"},[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);n.a=component.exports;d()(component,{VApp:f.a,VContainer:l.a,VMain:x.a})},159:function(t,n,r){t.exports=r.p+"img/possible_bg.268f90d.png"},162:function(t,n,r){r(163),t.exports=r(164)},192:function(t,n,r){"use strict";r(137)},193:function(t,n,r){var e=r(32)(!1);e.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},198:function(t,n,r){"use strict";r(139)},199:function(t,n,r){var e=r(32),o=r(200),c=r(159),d=e(!1),f=o(c);d.push([t.i,".image{background:url("+f+");background-position:50%;background-size:cover;background-repeat:no-repeat}.elevation-cs{box-shadow:0 1px 12px rgba(51,51,51,.12941)!important}.elevation-cs-2{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)!important}.w-100{width:100%!important}a{text-decoration:none}.d-grid{display:grid!important}.fs-15{font-size:15px!important}.fs-14{font-size:14px!important}.gradient-dark{background:linear-gradient(45deg,rgba(10,10,10,.78824),rgba(10,10,10,.78824))}",""]),t.exports=d},209:function(t,n,r){"use strict";r.r(n),r.d(n,"state",(function(){return e})),r.d(n,"mutations",(function(){return o})),r.d(n,"getters",(function(){return c})),r.d(n,"actions",(function(){return d}));var e=function(){return{tab:0,isExpanded:!1}},o={SET_TAB:function(t,param){return t.tab=param},SET_EXPANDED:function(t){return t.isExpanded=!t.isExpanded}},c={tab:function(t){return t.tab},isExpanded:function(t){return t.isExpanded}},d={setTab:function(t,param){(0,t.commit)("SET_TAB",param)},setExpanded:function(t){(0,t.commit)("SET_EXPANDED")}}},49:function(t,n,r){"use strict";var e={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(192),r(58)),c=r(75),d=r.n(c),f=r(224),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);n.a=component.exports;d()(component,{VApp:f.a})}},[[162,19,7,20]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(t,e,n){},222:function(t,e,n){},228:function(t,e,n){"use strict";var r=n(221);n.n(r).a},229:function(t,e,n){"use strict";var r=n(222);n.n(r).a},230:function(t,e,n){var r=n(82),i=n(75),o=n(231),a=n(235);t.exports=function(t,e){if(null==t)return{};var n=r(a(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},231:function(t,e,n){var r=n(44),i=n(232),o=n(39);t.exports=function(t,e,n){for(var a=-1,s=e.length,p={};++a<s;){var u=e[a],c=r(t,u);n(c,u)&&i(p,o(u,t),c)}return p}},232:function(t,e,n){var r=n(233),i=n(39),o=n(42),a=n(28),s=n(14);t.exports=function(t,e,n,p){if(!a(t))return t;for(var u=-1,c=(e=i(e,t)).length,l=c-1,m=t;null!=m&&++u<c;){var v=s(e[u]),g=n;if(u!=l){var f=m[v];void 0===(g=p?p(f,v,m):void 0)&&(g=a(f)?f:o(e[u+1])?[]:{})}r(m,v,g),m=m[v]}return t}},233:function(t,e,n){var r=n(234),i=n(41),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},234:function(t,e,n){var r=n(83);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},235:function(t,e,n){var r=n(76),i=n(236),o=n(238);t.exports=function(t){return r(t,o,i)}},236:function(t,e,n){var r=n(40),i=n(237),o=n(77),a=n(78),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:a;t.exports=s},237:function(t,e,n){var r=n(81)(Object.getPrototypeOf,Object);t.exports=r},238:function(t,e,n){var r=n(79),i=n(239),o=n(43);t.exports=function(t){return o(t)?r(t,!0):i(t)}},239:function(t,e,n){var r=n(28),i=n(80),o=n(240),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&n.push(s);return n}},240:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},243:function(t,e,n){},249:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return m}));var r={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){n.e(2).then(n.t.bind(null,267,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(228),n(5)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(n(229),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=n(29),p=n.n(s),u=n(230),c=n.n(u),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return c()(this.$props,p.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},m=Object(i.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},256:function(t,e,n){"use strict";var r=n(243);n.n(r).a},273:function(t,e,n){"use strict";n.r(e);n(3);var r=n(45),i=n.n(r),o=n(4),a=n(249),s={components:{NavigationIcon:o.n,ClockIcon:o.a,TagIcon:o.q},data:()=>({paginationComponent:null}),computed:{pages(){return this.$pagination.pages}},created(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:()=>a.b,resolvePostDate(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:t=>!t||Array.isArray(t)?t:[t]}},p=(n(256),n(5)),u=Object(p.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(e.frontmatter.summary||e.summary)+"\n        ")]),t._v(" "),n("footer",[e.frontmatter.author?n("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.frontmatter.author))]),t._v(" "),e.frontmatter.location?n("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(e.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"ui-post-meta ui-post-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[n("TagIcon"),t._v(" "),t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5943ef9a"],{1413:function(t,a,n){"use strict";n("27d1")},"27d1":function(t,a,n){},a1928:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"category"},[n("router-link",{attrs:{to:"/home/search"}},[n("div",{staticClass:"navbar"},[n("van-search",{staticClass:"search",attrs:{"input-align":"center","search-content-background-color":"#ededed",size:"12px"},model:{value:t.number,callback:function(a){t.number=a},expression:"number"}})],1)]),n("div",{staticClass:"content"},[n("van-sidebar",{on:{change:t.onChange},model:{value:t.activeKey,callback:function(a){t.activeKey=a},expression:"activeKey"}},t._l(t.navlist,(function(t){return n("van-sidebar-item",{key:t.id,staticClass:"sideBar",attrs:{title:t.name}})})),1),n("div",{staticClass:"main"},[n("img",{attrs:{src:t.sublist.banner_url,alt:""}}),n("div",{staticClass:"sort"},[n("div",{staticClass:"title"},[t._v("--"+t._s(t.sublist.name)+"分类--")]),n("ul",t._l(t.sublist.subList,(function(a){return n("li",{key:a.id},[n("router-link",{attrs:{to:{name:"cdetail",query:{id:a.id}}}},[n("img",{attrs:{src:a.wap_banner_url,alt:""}}),n("p",[t._v(t._s(a.name))])])],1)})),0)])])],1)],1)},i=[],s=n("365c");function c(t){return Object(s["a"])({url:"category/indexaction",data:t,method:"get"})}function r(t){return Object(s["a"])({url:"category/currentaction",data:t})}var u={name:"category",data:function(){return{num:1,activeKey:0,navlist:[],sublist:[]}},computed:{number:function(){return"商品搜索,共有".concat(this.num,"件商品")}},methods:{init:function(){var t=this;c().then((function(a){t.navlist=a.data.categoryList,r({id:a.data.categoryList[0].id}).then((function(a){t.sublist=a.data.data.currentOne}))}))},onChange:function(t){var a=this;r({id:this.navlist[t].id}).then((function(t){a.sublist=t.data.data.currentOne}))}},created:function(){this.init()}},o=u,l=(n("1413"),n("4ac2")),d=Object(l["a"])(o,e,i,!1,null,"27b97367",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5943ef9a.58c2fc16.js.map
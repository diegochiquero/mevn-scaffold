(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7772eeae"],{a523:function(t,a,n){"use strict";n("f559"),n("ac6a"),n("456d"),n("20f6"),n("4b85");var e=n("e8f2"),r=n("d9f7");a["a"]=Object(e["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var n,e=a.props,s=a.data,o=a.children,i=s.attrs;return i&&(s.attrs={},n=Object.keys(i).filter(function(t){if("slot"===t)return!1;var a=i[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),o)}})},bb51:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("v-container",{staticClass:"my-5"},[n("v-row",{staticClass:"mt-1"},t._l(t.logos,function(t){return n("v-col",{key:t.alt,attrs:{cols:"12",md:"3",justify:"center",align:"center"}},[n("v-img",{attrs:{"max-heigth":"250","max-width":"250",alt:t.alt,src:t.src}})],1)}),1)],1),n("h1",{staticClass:"font-weight-light display-2",attrs:{justify:"center",align:"center"}},[t._v("\n\t\tWelcome to MEVN scaffold\n\t")]),n("h2",{staticClass:"font-weight-thin",attrs:{justify:"center",align:"center"}},[t._v("\n\t\tMongoDB + Express + Vue + NodeJS + Vuetify + Docker\n\t")]),n("h3",{staticClass:"subtitle-1 mb-12",attrs:{justify:"center",align:"center"}},[t._v("\n\t\tFrontend / Backend\n\t")])],1)},r=[],s={name:"Home",data:function(){return{logos:[{src:"/mongodb-logo.png",alt:"mongo logo"},{src:"/expressjs-logo.png",alt:"express logo"},{src:"/vue-logo.png",alt:"vue logo"},{src:"/node-logo.png",alt:"node logo"}]}}},o=s,i=n("2877"),c=n("6544"),l=n.n(c),d=n("62ad"),u=n("a523"),f=n("adda"),g=n("0fd9"),p=Object(i["a"])(o,e,r,!1,null,null,null);a["default"]=p.exports;l()(p,{VCol:d["a"],VContainer:u["a"],VImg:f["a"],VRow:g["a"]})},e8f2:function(t,a,n){"use strict";n.d(a,"a",function(){return r});n("f559"),n("ac6a"),n("456d");var e=n("2b0e");function r(t){return e["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,n){var e=n.props,r=n.data,s=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var i=Object.keys(o).filter(function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a});i.length&&(r.staticClass+=" ".concat(i.join(" ")))}return e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),a(e.tag,r,s)}})}}}]);
//# sourceMappingURL=chunk-7772eeae.47871c19.js.map
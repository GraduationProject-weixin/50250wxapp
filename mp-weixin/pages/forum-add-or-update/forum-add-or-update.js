(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{"27e0":function(e,n,t){},"2bcb":function(e,n,t){"use strict";t.r(n);var r=t("fc53"),u=t("4f66");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("50e7");var o,c=t("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=i.exports},"4f66":function(e,n,t){"use strict";t.r(n);var r=t("c5fe"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"50e7":function(e,n,t){"use strict";var r=t("27e0"),u=t.n(r);u.a},c5fe:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,o){try{var c=e[a](o),i=c.value}catch(f){return void t(f)}c.done?n(i):Promise.resolve(i).then(r,u)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var o=e.apply(n,t);function c(e){a(o,r,u,c,i,"next",e)}function i(e){a(o,r,u,c,i,"throw",e)}c(void 0)}))}}var c={data:function(){return{forum:{forumContent:"",id:"",forumName:"",forumStateTypes:1},index:0,username:"",user:{}}},onLoad:function(n){var t=this;return o(r.default.mark((function u(){var a,o,c,i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,o=e.getStorageSync("nowTable"),r.next=4,a.$api.session(o);case 4:if(c=r.sent,a.user=c.data,"yonghu"==o&&(a.username=a.user.yonghuzhanghao),!n.id){r.next=13;break}return a.id=n.id,r.next=11,a.$api.info("forum",a.id);case 11:i=r.sent,a.forum=i.data;case 13:a.styleChange();case 14:case"end":return r.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.forum.username=e.username,!e.id){n.next=6;break}return n.next=4,e.$api.update("forum",e.forum);case 4:n.next=8;break;case 6:return n.next=8,e.$api.save("forum",e.forum);case 8:e.$utils.msgBack("操作成功");case 9:case"end":return n.stop()}}),n)})))()}}};n.default=c}).call(this,t("543d")["default"])},ed6c:function(e,n,t){"use strict";(function(e){t("48e8");r(t("66fd"));var n=r(t("2bcb"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},fc53:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["ed6c","common/runtime","common/vendor"]]]);
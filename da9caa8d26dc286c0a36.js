(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{394:function(t,e,r){},408:function(t,e,r){"use strict";var n=r(394);r.n(n).a},422:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"works"},[r("div",{staticClass:"page__container"},[t._m(0),r("div",{staticClass:"page__content"},[t.showAddingCard?r("div",{staticClass:"page__row"},[r("vc-works-add-new",{attrs:{work:t.work},on:{hideAddingCard:t.hideAddingCard}})],1):t._e(),r("div",{staticClass:"page__row"},[r("ul",{staticClass:"works__list"},[r("li",{staticClass:"works__item"},[r("div",{staticClass:"card card--add"},[r("button",{staticClass:"btn btn--add btn--xbig",attrs:{type:"button"},on:{click:function(e){t.showAddingCard=!0}}})])]),t._l(t.getWorks,(function(e){return r("li",{key:e.id,staticClass:"works__item"},[r("vc-works-item",{attrs:{work:e},on:{editWork:t.editWork}})],1)}))],2)])])])])};n._withStripped=!0;var s=r(53);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={data:function(){return{showAddingCard:!1,work:{title:"",link:"http://test.com",description:"",techs:"",photo:""}}},components:{vcInput:function(){return r.e(0).then(r.bind(null,427))},vcWorksItem:function(){return r.e(11).then(r.bind(null,431))},vcWorksAddNew:function(){return Promise.all([r.e(1),r.e(8)]).then(r.bind(null,432))}},methods:o({},Object(s.b)("works",["loadWorks"]),{hideAddingCard:function(){this.showAddingCard=!1,this.work=o({},{title:"",link:"http://test.com",description:"",techs:"",photo:""})},editWork:function(t){this.work=t,this.showAddingCard=!0}}),computed:o({},Object(s.c)("works",["getWorks"]),{},Object(s.d)("user",{userID:function(t){return t.user.id}})),created:function(){this.loadWorks(this.userID)}},d=(r(408),r(47)),l=Object(d.a)(a,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page__header"},[e("div",{staticClass:"page__columns"},[e("h1",{staticClass:"page-title works__title"},[this._v("Блок «Работы»")])])])}],!1,null,null,null);l.options.__file="src/admin/pages/works/works.vue";e.default=l.exports}}]);
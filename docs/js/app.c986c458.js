(function(t){function e(e){for(var r,s,u=e[0],c=e[1],a=e[2],h=0,p=[];h<u.length;h++)s=u[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03fa":function(t,e,n){},"50ba":function(t,e,n){"use strict";var r=n("03fa"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._m(0),n("p",[t._v("A fully working Vue.js terminal emulator.")]),n("vue-command",{attrs:{"built-in":t.builtIn,current:t.current,commands:t.commands,executed:t.executed,history:t.history,"help-timeout":1250,prompt:t.prompt,"show-help":""},on:{"update:current":function(e){t.current=e},"update:executed":function(e){t.executed=e},"update:history":function(e){t.history=e}}}),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("a",{attrs:{href:"https://github.com/ndabAP/vue-command"}},[t._v("vue-command")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[t._v("      "),n("code",[t._v("\n$ npm i --save vue-command\n      ")]),t._v("\n    ")])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading||t.isError?t._e():n("span",[t._v(t._s(t.joke))]),t.isLoading&&!t.isError?n("span",[t._v("Loading ...")]):t._e(),t.isError?n("span",[t._v("There was an error getting the joke")]):t._e()])},u=[],c=n("a34a"),a=n.n(c);function l(t,e,n,r,i,o,s){try{var u=t[o](s),c=u.value}catch(a){return void n(a)}u.done?e(c):Promise.resolve(c).then(r,i)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){l(o,r,i,s,u,"next",t)}function u(t){l(o,r,i,s,u,"throw",t)}s(void 0)}))}}var p="https://api.chucknorris.io/jokes/random",f=5e3,d={inject:["terminate"],data:function(){return{abortController:new AbortController,isError:!1,isLoading:!0,joke:""}},mounted:function(){var t=h(a.a.mark((function t(){var e,n,r,i=this;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return setTimeout((function(){i.isLoading&&i.abortController.abort()}),f),t.prev=1,t.next=4,fetch(p,{signal:this.abortController.signal});case 4:if(e=t.sent,e.ok){t.next=9;break}return this.setIsError(!0),this.terminate(),t.abrupt("return");case 9:return t.next=11,e.json();case 11:n=t.sent,r=n.value,this.joke=r,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](1),this.setIsError(!0);case 19:return t.prev=19,this.isLoading=!1,this.terminate(),t.finish(19);case 23:case"end":return t.stop()}}),t,this,[[1,16,19,23]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{setIsError:function(t){this.isError=t}}},m=d,v=n("2877"),y=Object(v["a"])(m,s,u,!1,null,null,null),b=y.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.characters,(function(e,r){return n("span",{key:r,style:{color:t.color(r)}},[t._v("\n    "+t._s(e)+"\n  ")])})),n("br"),n("br"),t._v("\n  Press Ctrl + C to leave.\n")],2)},x=[],w=["#FF0000","#FF9900","#CCFF00","#33FF00","#00FF66","#00FFFF","#0066FF","#3300FF","#CC00FF","#FF0099"],P=40,I={inject:["terminate"],data:function(){return{characters:"KLIEH",index:0,interval:void 0}},mounted:function(){var t=this;this.interval=setInterval((function(){t.index++}),P),window.addEventListener("keydown",(function(e){"c"===e.key&&e.getModifierState("Control")&&(clearInterval(t.interval),t.terminate())}),!0)},methods:{color:function(t){t+=this.index;var e=Math.floor(t/w.length)*w.length;return w[t-e]}}},_=I,O=Object(v["a"])(_,g,x,!1,null,null,null),k=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.context.parsed.help?n("span",[t._v("\n  Options: "),n("br"),t._v("\n   --timeout (default: 50)"),n("br"),t._v("\n   --amount (default: 10)\n")]):n("span",[t._v(t._s("#".repeat(t.index)))])},C=[],F={inject:["terminate"],data:function(){return{index:0}},mounted:function(){var t=this;if(this.context.parsed.help)this.terminate();else{var e=this.context.parsed.timeout||50,n=this.context.parsed.amount||10,r=function r(){return setTimeout((function(){t.index++,t.index<n?r():t.terminate()}),e)};r()}}},$=F,S=Object(v["a"])($,j,C,!1,null,null,null),E=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.environment.isExecuting?n("div",[n("textarea",{ref:"nano",attrs:{rows:"14"},on:{keydown:function(e){return(e.type.indexOf("key")||88===e.keyCode)&&e.ctrlKey?t.terminate(e):null}}},[t._v("This is a text editor! Press Ctrl + X to leave.")])]):t._e()},A=[],L={inject:["setIsFullscreen","terminate"],created:function(){this.setIsFullscreen(!0)},mounted:function(){this.$refs.nano.focus()}},H=L,B=(n("50ba"),Object(v["a"])(H,T,A,!1,null,"59c15ed6",null)),M=B.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-command",on:{keyup:[function(e){return e.type.indexOf("key")||38===e.keyCode?t.mutatePointerHandler(e):null},function(e){return e.type.indexOf("key")||40===e.keyCode?t.mutatePointerHandler(e):null}],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.preventDefault(),t.autocomplete(e))},click:t.focus}},[t._t("bar",[t.hideBar?t._e():n("div",{staticClass:"term-bar"},[n("span",{staticClass:"term-title"},[t._v("\n        "+t._s(t.title)+"\n      ")])])]),n("div",{staticClass:"term",class:{"white-theme":t.whiteTheme}},[n("div",{ref:"term-std",staticClass:"term-std"},[n("div",{ref:"term-cont",staticClass:"term-cont",class:{"term-cont-fullscreen":t.local.isFullscreen}},[t.showIntro?n("div",[t._v("\n          "+t._s(t.intro)+"\n        ")]):t._e(),t._l(t.local.history,(function(e,r){return n("div",{key:r,staticClass:"term-hist",class:{"term-hist-fullscreen":t.local.isFullscreen&&r===t.progress-1}},[n("stdout",{directives:[{name:"show",rawName:"v-show",value:!t.local.isFullscreen||r===t.progress-1,expression:"(!local.isFullscreen || index === progress - 1)"}],staticClass:"term-stdout",attrs:{component:e}}),n("stdin",{directives:[{name:"show",rawName:"v-show",value:0===r&&!t.local.isFullscreen||!(r===t.progress-1&&t.local.isInProgress)&&!t.local.isFullscreen,expression:"(index === 0 && !local.isFullscreen) || !(index === progress - 1 && local.isInProgress) && !local.isFullscreen"}],ref:"stdin",refInFor:!0,attrs:{bus:t.bus,current:t.local.current,"hide-prompt":t.hidePrompt,"is-fullscreen":t.local.isFullscreen,"is-in-progress":t.local.isInProgress,"is-last":r===t.progress-1,prompt:t.prompt,"help-text":t.helpText,"help-timeout":t.helpTimeout,"show-help":t.showHelp,uid:t._uid},on:{handle:t.handle}})],1)}))],2)])])],2)},D=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"term-stdin-container"},[t.hidePrompt?t._e():n("span",{staticClass:"term-ps"},[t._v("\n    "+t._s(t.localPrompt)+"\n  ")]),n("span",{staticClass:"term-stdin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.stdin,expression:"stdin"}],ref:"input",attrs:{autofocus:t.isLast,disabled:!t.isLast||t.isInProgress,placeholder:t.placeholder,type:"text",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.stdin},on:{click:function(e){return t.setCursor(t.$refs.input.selectionStart)},keyup:[function(e){return t.setCursor(t.$refs.input.selectionStart)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handle(e)}],input:function(e){e.target.composing||(t.stdin=e.target.value)}}})])])},V=[];function q(t,e,n,r,i,o,s){try{var u=t[o](s),c=u.value}catch(a){return void n(a)}u.done?e(c):Promise.resolve(c).then(r,i)}function U(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){q(o,r,i,s,u,"next",t)}function u(t){q(o,r,i,s,u,"throw",t)}s(void 0)}))}}var R={inject:["setCurrent","setCursor"],props:{bus:{required:!0,type:Object},current:{type:String},helpText:{type:String},helpTimeout:{type:Number},hidePrompt:{default:!1,type:Boolean},isInProgress:{default:!1,type:Boolean},isLast:{required:!0,type:Boolean},isFullscreen:{required:!0,type:Boolean},prompt:{type:String},showHelp:{default:!1,type:Boolean},uid:{required:!0,type:Number}},data:function(){return{localPrompt:"",placeholder:"",stdin:""}},watch:{current:function(){var t=U(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLast&&this.setStdin(this.current),t.next=3,this.$nextTick();case 3:this.setCursor(this.$refs.input.selectionStart);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),isInProgress:function(){var t=U(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isInProgress||!this.isLast){t.next=5;break}return t.next=3,this.$nextTick();case 3:this.scrollIntoView(),this.focus();case 5:this.isInProgress&&!this.isLast&&this.blur();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),isLast:function(t,e){e&&!t&&this.blur()},stdin:function(){this.setCurrent(this.stdin),this.setCursor(this.$refs.input.selectionStart)}},created:function(){var t=this;setTimeout((function(){t.isLast&&t.showHelp&&t.setPlaceholder(t.helpText)}),this.helpTimeout),this.localPrompt=this.prompt},mounted:function(){var t=this;this.scrollIntoView(),this.focus(),this.bus.$on("autocomplete",(function(e){var n=e.stdin,r=e.uid;t.isLast&&t.uid===r&&t.setStdin(n)}))},methods:{handle:function(){this.setLocalPrompt(this.prompt),this.$emit("handle",this.stdin),this.setPlaceholder("")},setPlaceholder:function(t){this.placeholder=t},setLocalPrompt:function(t){this.localPrompt=t},setStdin:function(t){this.stdin=t},blur:function(){this.$refs.input.blur()},focus:function(){this.$refs.input.focus()},scrollIntoView:function(){this.$refs.input.scrollIntoView()}}},J=R,K=(n("839b"),Object(v["a"])(J,z,V,!1,null,null,null)),X=K.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.component,{tag:"component"})},Q=[],W={props:{component:{type:Object,required:!0}}},Y=W,Z=(n("836c"),Object(v["a"])(Y,G,Q,!1,null,null,null)),tt=Z.exports,et={provide:function(){return{setCursor:this.setCursor}},data:function(){return{local:{cursor:0}}},watch:{"local.cursor":function(){this.$emit("update:cursor",this.local.cursor)}},methods:{autocomplete:function(){if(this.local.current&&"function"===typeof this.autocompletionResolver){var t=this.autocompletionResolver(this.local.current,this.local.cursor);this.bus.$emit("autocomplete",{stdin:t,uid:this._uid})}},setCursor:function(t){this.local.cursor=t}}},nt=n("afab"),rt=n.n(nt);function it(t,e,n,r,i,o,s){try{var u=t[o](s),c=u.value}catch(a){return void n(a)}u.done?e(c):Promise.resolve(c).then(r,i)}function ot(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){it(o,r,i,s,u,"next",t)}function u(t){it(o,r,i,s,u,"throw",t)}s(void 0)}))}}var st=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"VueCommandStdout",r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];return{name:n,mixins:i,inject:["terminate","emitExecute","setIsInProgress"],mounted:function(){var t=ot(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$nextTick();case 2:this.terminate();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),render:function(n){return e?n("span",{},t):n("span",{domProps:{innerHTML:t}})}}},ut=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"VueCommandStderr",r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];return{name:n,mixins:i,inject:["terminate","setIsInProgress","emitExecute"],mounted:function(){var t=ot(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$nextTick();case 2:this.terminate();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),render:function(n){return e?n("span",{},t):n("span",{domProps:{innerHTML:t}})}}},ct=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return{name:"VueCommandDummyStdout",mixins:e,inject:["terminate","setIsInProgress","emitExecute"],mounted:function(){var t=ot(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$nextTick();case 2:this.terminate();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),render:function(t){return t("span",{},"")}}};function at(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?at(Object(n),!0).forEach((function(e){ht(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pt(t){return vt(t)||mt(t)||dt(t)||ft()}function ft(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function dt(t,e){if(t){if("string"===typeof t)return yt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yt(t,e):void 0}}function mt(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function vt(t){if(Array.isArray(t))return yt(t)}function yt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function bt(t,e,n,r,i,o,s){try{var u=t[o](s),c=u.value}catch(a){return void n(a)}u.done?e(c):Promise.resolve(c).then(r,i)}function gt(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){bt(o,r,i,s,u,"next",t)}function u(t){bt(o,r,i,s,u,"throw",t)}s(void 0)}))}}var xt={provide:function(){return{terminate:this.terminate}},methods:{handle:function(){var t=gt(a.a.mark((function t(e){var n;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=e.trim(),n=rt()(e,this.yargsOptions)._[0],void 0===this.builtIn[n]){t.next=6;break}return t.next=5,Promise.resolve(this.builtIn[n](e));case 5:return t.abrupt("return");case 6:this.execute(e);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),execute:function(){var t=gt(a.a.mark((function t(e){var n,r,i,o,s;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=rt()(e,this.yargsOptions)._[0],r=ct(),"function"!==typeof this.commands[n]){t.next=14;break}return i=rt()(e,this.yargsOptions),t.next=6,Promise.resolve(this.commands[n](i));case 6:r=t.sent,r=this.setupComponent(r,this.local.history.length,i),o=new Set(this.executed),o.delete(e),o.add(e),this.$emit("update:executed",o),t.next=16;break;case 14:""!==e&&(r=ut("".concat(e,": ").concat(this.notFound),!0)),r=this.setupComponent(r,this.local.history.length);case 16:this.setPointer(this.executed.size),s=pt(this.local.history),s.push(r),this.emitExecute(),this.setIsInProgress(!0),this.setHistory(s),this.$emit("update:history",pt(s));case 23:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),setupComponent:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t=lt({},t),hasOwnProperty.call(t,"computed")||(t.computed={}),t.computed=lt({environment:function(){return{isExecuting:e.local.isInProgress&&e.local.history.length-1===n,isFullscreen:e.local.isFullscreen,isInProgress:e.local.isInProgress}},context:function(){return{cursor:e.local.cursor,parsed:r}}},t.computed),t},terminate:function(){this.setIsFullscreen(!1),this.setCurrent(""),this.$emit("executed"),this.setIsInProgress(!1)}}},wt="ArrowUp",Pt="ArrowDown";function It(t){return jt(t)||kt(t)||Ot(t)||_t()}function _t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ot(t,e){if(t){if("string"===typeof t)return Ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ct(t,e):void 0}}function kt(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function jt(t){if(Array.isArray(t))return Ct(t)}function Ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Ft={provide:function(){return{setPointer:this.setPointer}},data:function(){return{local:{history:[],pointer:0}}},watch:{history:function(){this.setHistory(It(this.history))},pointer:function(){this.setPointer(this.pointer)},"local.pointer":function(){this.$emit("update:pointer",this.local.pointer)}},created:function(){var t=It(this.history);0===t.length&&t.push(ct()),this.$emit("update:history",It(t))},methods:{mutatePointerHandler:function(t){var e=t.key;if(e===wt&&this.local.pointer>0)this.local.pointer--;else{if(!(e===Pt&&this.local.pointer<this.executed.size-1))return;this.local.pointer++}this.local.current=It(this.executed)[this.local.pointer]},setHistory:function(t){this.local.history=t},setPointer:function(t){this.local.pointer=t}}};function $t(t){return At(t)||Tt(t)||Et(t)||St()}function St(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Et(t,e){if(t){if("string"===typeof t)return Lt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lt(t,e):void 0}}function Tt(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function At(t){if(Array.isArray(t))return Lt(t)}function Lt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ht(t,e,n,r,i,o,s){try{var u=t[o](s),c=u.value}catch(a){return void n(a)}u.done?e(c):Promise.resolve(c).then(r,i)}function Bt(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){Ht(o,r,i,s,u,"next",t)}function u(t){Ht(o,r,i,s,u,"throw",t)}s(void 0)}))}}var Mt=new r["a"],Nt={components:{Stdin:X,Stdout:tt},mixins:[et,xt,Ft],provide:function(){return{emitInput:this.emitInput,emitExecute:this.emitExecute,emitExecuted:this.emitExecuted,setCurrent:this.setCurrent,setCursor:this.setCursor,setIsFullscreen:this.setIsFullscreen,setIsInProgress:this.setIsInProgress}},props:{autocompletionResolver:{type:Function},builtIn:{default:function(){return{}},type:Object},commands:{required:!0,type:Object},current:{default:"",type:String},cursor:{type:Number},executed:{required:!0,type:Set},helpTimeout:{default:4e3,type:Number},hideBar:{default:!1,type:Boolean},hidePrompt:{default:!1,type:Boolean},helpText:{default:"Type help",type:String},history:{default:function(){return[]},type:Array},intro:{default:"Fasten your seatbelts!",type:String},isFullscreen:{type:Boolean},isInProgress:{type:Boolean},notFound:{default:"command not found",type:String},pointer:{type:Number},prompt:{default:"~neil@moon:#",type:String},showHelp:{default:!1,type:Boolean},showIntro:{default:!1,type:Boolean},title:{default:"neil@moon: ~",type:String},whiteTheme:{default:!1,type:Boolean},yargsOptions:{default:function(){return{}},type:Object}},data:function(){return{bus:Mt,local:{current:"",isFullscreen:!1,isInProgress:!1},scroll:{eventListener:void 0,isBottom:!0,resizeObserver:void 0}}},computed:{progress:{get:function(){return this.local.history.length}}},watch:{current:function(){this.setCurrent(this.current)},isFullscreen:function(){this.setIsFullscreen(this.isFullscreen)},isInProgress:function(){this.setIsInProgress(this.isInProgress)},"local.current":function(){this.$emit("input",this.local.current),this.$emit("update:current",this.local.current),this.local.current||this.setPointer(this.executed.size)},"local.isFullscreen":function(){this.$emit("update:isFullscreen",this.local.isFullscreen)},"local.isInProgress":function(){this.$emit("update:isInProgress",this.local.isInProgress)}},mounted:function(){var t=this;this.scroll.resizeObserver=new ResizeObserver(function(){var e=Bt(a.a.mark((function e(n){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.scroll.isBottom&&(t.$refs["term-std"].scrollTop=t.$refs["term-std"].scrollHeight);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.scroll.resizeObserver.observe(this.$refs["term-cont"]),this.scroll.eventListener=function(){var e=t.$refs["term-std"];t.scroll.isBottom=e.scrollHeight-e.scrollTop-e.clientHeight===0},this.$refs["term-std"].addEventListener("scroll",this.scroll.eventListener)},beforeDestroy:function(){this.scroll.resizeObserver.unobserve(this.$refs["term-cont"]),this.$refs["term-std"].removeEventListener("scroll",this.scroll.eventListener)},created:function(){this.setCurrent(this.current),this.setHistory($t(this.history)),this.setIsFullscreen(this.isFullscreen),this.setIsInProgress(this.isInProgress),this.setPointer(this.pointer)},methods:{emitInput:function(t){this.$emit("input",t)},emitExecute:function(){this.$emit("execute")},emitExecuted:function(){this.$emit("executed")},setCurrent:function(t){this.local.current=t},setIsFullscreen:function(t){this.local.isFullscreen=t},setIsInProgress:function(t){this.local.isInProgress=t},focus:function(){var t=this.$refs.stdin,e=t[this.local.history.length-1];e.focus()}}},Dt=Nt,zt=(n("590b"),Object(v["a"])(Dt,N,D,!1,null,null,null)),Vt=zt.exports,qt="~neil@moon:#",Ut={components:{VueCommand:Vt},data:function(){return{builtIn:{reverse:void 0},commands:{cd:void 0,clear:void 0,help:function(){return st("Available programms:<br><br>\n        &nbsp;cd<br>\n        &nbsp;clear<br>\n        &nbsp;hello-world<br>\n        &nbsp;klieh<br>\n        &nbsp;loading [--timeout n] [--amount n]<br>\n        &nbsp;nano<br>\n        &nbsp;norris<br>\n        &nbsp;pokedex pokemon --color<br>\n        &nbsp;pwd<br>\n        &nbsp;reverse text<br>\n      ")},"hello-world":function(){return st("Hello world")},klieh:function(){return k},loading:function(){return E},nano:function(){return M},norris:function(){return b},pokedex:function(t){var e=t.color,n=t._;return e&&"pikachu"===n[1]?st("yellow"):ut("Usage: pokedex pokemon [option]<br><br>\n\n          Example: pokedex pikachu --color\n        ")},pwd:function(){return st("/home/neil")}},current:"",executed:new Set,history:[],prompt:"~neil@moon:#"}},created:function(){var t=this;this.commands.clear=function(){return t.history=[],ct()},this.commands.cd=function(e){var n=e._;return"home"===n[1]&&t.prompt===qt?(t.prompt="".concat(qt,"/home"),ct()):"../"===n[1]&&t.prompt==="".concat(qt,"/home")?(t.prompt=qt,ct()):"."===n[1]?ct():ut("cd: ".concat(n[1],": No such file or directory"))},this.builtIn.reverse=function(e){e=e.trim();var n=e.split(" ")[1];t.current=n.split("").reverse().join("")}}},Rt=Ut,Jt=(n("859e"),Object(v["a"])(Rt,i,o,!1,null,null,null)),Kt=Jt.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Kt)}}).$mount("#app")},"590b":function(t,e,n){"use strict";var r=n("e820"),i=n.n(r);i.a},"5ba4":function(t,e,n){},"836c":function(t,e,n){"use strict";var r=n("5ba4"),i=n.n(r);i.a},"839b":function(t,e,n){"use strict";var r=n("ff6f"),i=n.n(r);i.a},"859e":function(t,e,n){"use strict";var r=n("c308"),i=n.n(r);i.a},be69:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="be69"},c308:function(t,e,n){},e820:function(t,e,n){},ff6f:function(t,e,n){}});
//# sourceMappingURL=app.c986c458.js.map
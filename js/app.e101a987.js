(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],f=0,h=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/robot-simulator-frontend/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0081":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"1ccb":function(t,e,n){var i=n("278c").default,r=n("970b").default,a=n("5bc3").default;n("1276"),n("ac1f"),n("159b"),n("a15b"),n("07ac"),n("d3b7"),n("25f0");var o=function(){"use strict";function t(){r(this,t),this.history=[],this.facing="NORTH"}return a(t,[{key:"parseArgs",value:function(t){var e=t.split(" "),n=i(e,4),r=n[0],a=n[1],o=n[2],s=n[3];Object.assign(this,{x:parseInt(r,10),y:parseInt(a,10),facing:o}),this.history=[[this.x,this.y]],this.processMovements(s.split(""))}},{key:"rotate",value:function(t){var e=["NORTH","EAST","SOUTH","WEST"],n=e.indexOf(this.facing),i="L"===t?-1:1,r=n+i;r<0&&(r=e.length-1),r>=e.length&&(r=0),this.facing=e[r]}},{key:"processMovements",value:function(t){var e=this;t.forEach((function(t){"A"!==t?e.rotate(t):e.step()}))}},{key:"step",value:function(){switch(this.facing){case"EAST":this.x+=1;break;case"WEST":this.x-=1;break;case"SOUTH":this.y-=1;break;default:this.y+=1}this.history.push([this.x,this.y])}},{key:"toString",value:function(){return Object.values(this).join(" ")}},{key:"execute",value:function(t){return this.parseArgs(t),this.toString()}}]),t}();t.exports={Robot:o}},"25bf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",[t._v("Robot simulator")]),n("InputPanel",{on:{directions:t.passDirections}}),n("PathHistory",{attrs:{history:t.robot.history}}),n("PathDisplay",{attrs:{history:t.robot.history,facing:t.robot.facing}})],1)},a=[],o=n("1ccb"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"select-panel"},[n("div",[n("span",[t._v("Start X")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedX,expression:"selectedX"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedX=e.target.multiple?n:n[0]}}},t._l(10,(function(e,i){return n("option",{key:e,domProps:{value:i}},[t._v(t._s(i))])})),0)]),n("div",[n("span",[t._v("Start Y")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedY,expression:"selectedY"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedY=e.target.multiple?n:n[0]}}},t._l(10,(function(e,i){return n("option",{key:e,domProps:{value:i}},[t._v(t._s(i))])})),0)]),n("div",[n("span",[t._v("Facing")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFacing,expression:"selectedFacing"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedFacing=e.target.multiple?n:n[0]}}},t._l(t.facing,(function(e){return n("option",{key:e},[t._v(t._s(e))])})),0)])]),n("div",{staticClass:"direction-panel"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],domProps:{value:t.path},on:{keypress:function(e){return e.preventDefault(),t.keyCheck(e)},input:function(e){e.target.composing||(t.path=e.target.value)}}}),n("button",{attrs:{disabled:!t.path.length},on:{click:t.clear}},[t._v("clear")]),n("button",{on:{click:t.passDirections}},[t._v("execute")])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"instructions"},[t._v("Select initilal position and input the movements of a robot."),n("br"),t._v(" The robot can have three possible movements: "),n("code",[t._v('"R"')]),t._v(" - turn right, "),n("code",[t._v('"L"')]),t._v(" - turn left, "),n("code",[t._v('"A"')]),t._v(" - advance")])}],l=(n("99af"),n("caad"),n("fb6a"),{name:"InputPanel",data:function(){return{selectedX:0,selectedY:0,selectedFacing:"NORTH",facing:["NORTH","EAST","SOUTH","WEST"],path:"RAALAAALAAAALAARAAA"}},methods:{passDirections:function(){var t="".concat(this.selectedX," ").concat(this.selectedY," ").concat(this.selectedFacing," ").concat(this.path);this.$emit("directions",t)},keyCheck:function(t){var e=["A","L","R"],n=t.key.toUpperCase(),i=t.target,r=i.selectionStart,a=i.selectionEnd;e.includes(n)&&(this.path=this.path.slice(0,r)+n+this.path.slice(a))},clear:function(){this.path=""}}}),u=l,f=(n("8825"),n("2877")),h=Object(f["a"])(u,s,c,!1,null,"1595e281",null),p=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{ref:"canvas",attrs:{width:"600",height:"600"}})])},d=[],y=n("3835"),b=(n("a9e3"),n("159b"),n("cb29"),{name:"PathDisplay",props:{history:{type:Array,required:!0},facing:{type:String,required:!0},scale:{type:[Number,String],default:20}},data:function(){return{}},mounted:function(){var t=this.$refs.canvas,e=t.getContext("2d");e.lineWidth=2,e.translate(t.width/2,t.height/2),e.strokeStyle="#0f7caf",this.ctx=e,this.movePath()},watch:{history:{handler:"movePath"}},methods:{clear:function(){var t=this.ctx,e=t.canvas.width,n=e/2;t.clearRect(-n,-n,e,e)},movePath:function(){var t=this;this.clear();var e,n,i=this.ctx,r=function(r,a){i.beginPath();var o=Object(y["a"])(r,2),s=o[0],c=o[1],l=s*t.scale,u=c*-t.scale;void 0!==e?i.moveTo(e,n):i.moveTo(l,u),0!==a&&i.lineTo(l,u),e=l,n=u,i.stroke(),a===t.history.length-1&&t.drawTriangle()};this.history.forEach((function(t,e){return setTimeout((function(){return r(t,e)}),30*e)}))},drawTriangle:function(){var t=this.ctx;t.fillStyle="#0f7caf",t.beginPath();var e=this.history,n=this.facing,i=Object(y["a"])(e[e.length-1],2),r=i[0],a=i[1],o=15,s=r*this.scale,c=a*this.scale;switch(t.moveTo(s,-c),n){case"EAST":t.moveTo(s,-c-o/2),t.lineTo(s+o,-c),t.lineTo(s,o/2-c);break;case"WEST":t.lineTo(s,-c-o/2),t.lineTo(s-o,-c),t.lineTo(s,o/2-c);break;case"SOUTH":t.lineTo(s+o/2,-c),t.lineTo(s,-c+o),t.lineTo(s-o/2,-c);break;default:t.lineTo(s+o/2,-c),t.lineTo(s,-c-o),t.lineTo(s-o/2,-c)}t.fill()}}}),m=b,g=(n("753f"),Object(f["a"])(m,v,d,!1,null,"1bd6de94",null)),_=g.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.history.length?n("div",{staticClass:"container"},[n("h4",[t._v("History")]),n("ul",t._l(t.history,(function(e,i){return n("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()},k=[],x={name:"PathHistory",props:{history:Array}},A=x,O=(n("f6a4"),Object(f["a"])(A,T,k,!1,null,"41b5115a",null)),S=O.exports,w={name:"App",data:function(){return{robot:{history:[],facing:"NORTH"},directions:""}},components:{PathDisplay:_,InputPanel:p,PathHistory:S},mounted:function(){this.robot=new o["Robot"]},methods:{passDirections:function(t){this.robot.execute(t)}}},P=w,j=(n("034f"),Object(f["a"])(P,r,a,!1,null,null,null)),E=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")},"753f":function(t,e,n){"use strict";n("25bf")},"85ec":function(t,e,n){},8825:function(t,e,n){"use strict";n("c158")},c158:function(t,e,n){},f6a4:function(t,e,n){"use strict";n("0081")}});
//# sourceMappingURL=app.e101a987.js.map
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return React.createElement("div",null,React.createElement("p",null,"Selected: [",e.pr_selectedItems,"]"))}function l(e){return React.createElement("div",null,e.pr_state.map(function(t,n){return React.createElement("div",{className:"input-group"},React.createElement("label",null,t),React.createElement("input",{type:"checkbox",value:t,onChange:e.pr_onChange}))}))}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1);var i=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={items:["item1","item2"],selectedItems:[]},n.toggleSelected=n.toggleSelected.bind(n),n}return c(t,e),u(t,[{key:"toggleSelected",value:function(e){var t=this.state.selectedItems,n=void 0;e.target.checked?t.push(e.target.value):(n=t.indexOf(e.target.value),t.splice(n,1)),this.setState({selectedItems:t})}},{key:"render",value:function(){return React.createElement("div",null,React.createElement("form",null,React.createElement(l,{pr_state:this.state.items,pr_onChange:this.toggleSelected})),React.createElement(a,{pr_selectedItems:this.state.selectedItems}))}}]),t}(React.Component);ReactDOM.render(React.createElement(i,null),document.getElementById("root"))},function(e,t){}]);
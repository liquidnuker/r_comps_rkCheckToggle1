webpackJsonp([0],{40:function(e,t,n){"use strict";function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return React.createElement("button",{onClick:e.pr_onClick},"Check All")}function o(e){return React.createElement("button",{onClick:e.pr_onClick},"Uncheck All")}function i(e){return React.createElement("div",null,React.createElement("p",null,"Selected: [",e.pr_selectedItems,"]"))}function u(e){return React.createElement("div",null,e.pr_state.map(function(t,n){return React.createElement("span",{className:"checkToggle1-01"},React.createElement("input",{type:"checkbox",id:t,value:t,onChange:e.pr_onChange}),React.createElement("label",{htmlFor:t,className:"checkToggle1-01_bg"},React.createElement("span",{className:"checkToggle1-01_switch"}," ")),React.createElement("label",{htmlFor:t,className:"checkToggle1-01_vlabel"},t))}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}}(),f=function(e){function t(e){c(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={items:["item1","item2"],selectedItems:[]},n.toggleSelected=n.toggleSelected.bind(n),n}return r(t,e),s(t,[{key:"toggleSelected",value:function(e){var t=this.state.selectedItems,n=void 0;e.target.checked?t.push(e.target.value):(n=t.indexOf(e.target.value),t.splice(n,1)),this.setState({selectedItems:t})}},{key:"checkAll",value:function(){var e=this.state.items,t=this.state.selectedItems,n=document.querySelectorAll("input"),c=!0,l=!1,r=void 0;try{for(var a,o=n[Symbol.iterator]();!(c=(a=o.next()).done);c=!0){a.value.checked=!0}}catch(e){l=!0,r=e}finally{try{!c&&o.return&&o.return()}finally{if(l)throw r}}t=[];for(var i in e)t.push(e[i]);console.log(t),this.setState(function(e){return{selectedItems:t}})}},{key:"unCheckAll",value:function(){console.log("uncheckall")}},{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("form",null,React.createElement(u,{pr_state:this.state.items,pr_onChange:this.toggleSelected})),React.createElement(a,{pr_onClick:function(){e.checkAll()}}),React.createElement(o,{pr_onClick:function(){e.unCheckAll()}}),React.createElement(i,{pr_selectedItems:this.state.selectedItems}))}}]),t}(React.Component);t.default=f}});
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{jDxf:function(e,t,n){"use strict";n.r(t),n.d(t,"pwa_action_sheet",(function(){return o}));var i=n("At8z"),o=function(){function e(t){_classCallCheck(this,e),Object(i.h)(this,t),this.cancelable=!0,this.options=[],this.open=!1,this.onSelection=Object(i.d)(this,"onSelection",7)}return _createClass(e,[{key:"componentDidLoad",value:function(){var e=this;requestAnimationFrame((function(){e.open=!0}))}},{key:"dismiss",value:function(){this.cancelable&&this.close()}},{key:"close",value:function(){var e=this;this.open=!1,setTimeout((function(){e.el.parentNode.removeChild(e.el)}),500)}},{key:"handleOptionClick",value:function(e,t){e.stopPropagation(),this.onSelection.emit(t),this.close()}},{key:"render",value:function(){var e=this;return Object(i.g)("div",{class:"wrapper"+(this.open?" open":""),onClick:function(){return e.dismiss()}},Object(i.g)("div",{class:"content"},Object(i.g)("div",{class:"title"},this.header),this.options.map((function(t,n){return Object(i.g)("div",{class:"action-sheet-option",onClick:function(t){return e.handleOptionClick(t,n)}},Object(i.g)("div",{class:"action-sheet-button"},t.title))}))))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Roboto,sans-serif}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:transparent;-webkit-transition:background-color .4s cubic-bezier(.36,.66,.04,1);transition:background-color .4s cubic-bezier(.36,.66,.04,1)}.wrapper.open{background-color:rgba(0,0,0,.32)}.title{color:#999;height:23px;line-height:23px;padding-bottom:17px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:20px}.content{width:568px;-ms-flex-item-align:end;align-self:flex-end;background-color:#fff;-webkit-transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1),-webkit-transform .4s cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%)}.wrapper.open .content{-webkit-transform:translateY(0);transform:translateY(0)}@media only screen and (max-width:568px){.content{width:100%}}.action-sheet-option{cursor:pointer;height:52px;line-height:52px}.action-sheet-button{color:#262626;font-size:16px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:0}.action-sheet-button:hover{background-color:#f6f6f6}"}}]),e}()}}]);
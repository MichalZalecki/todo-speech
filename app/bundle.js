!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(16),e.exports=n(3)},function(e,t,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=l[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],t))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(c(o.parts[r],t));l[o.id]={id:o.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],s=i[1],c=i[2],a=i[3],u={css:s,media:c,sourceMap:a};n[r]?n[r].parts.push(u):t.push(n[r]={id:r,parts:[u]})}return t}function r(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function s(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function c(e,t){var n,o,i;if(t.singleton){var c=m++;n=v||(v=r()),o=a.bind(null,n,c,!1),i=a.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(),o=d.bind(null,n),i=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=r(),o=u.bind(null,n),i=function(){n.parentNode.removeChild(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function a(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var n=t.css,o=t.media;t.sourceMap;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=(t.media,t.sourceMap);o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var l={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var n=i(e);return o(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var c=n[s],a=l[c.id];a.refs--,r.push(a)}if(e){var u=i(e);o(u,t)}for(var s=0;s<r.length;s++){var a=r[s];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete l[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o,i;o=[t,n(15),n(6),n(8),n(4)],i=function(e,t,n,o,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var s=r(o),c=r(i),a=new s["default"],u=function(){a.addTodo(n.contentFieldFinal.innerHTML),n.contentFieldFinal.innerHTML="",n.contentFieldFinal.focus()};n.form.addEventListener("submit",function(e){e.preventDefault(),u()});var d=!1,l=new c["default"](function(e,t){d&&!t&&(n.contentFieldFinal.innerHTML+=e),n.focusCursorAtTheEnd(n.contentFieldFinal)},function(e){d&&(n.contentFieldInterim.innerHTML+=e)},function(){d&&(n.contentFieldInterim.innerHTML="")},function(){n.speechMute.classList.remove("active"),n.speechUnmute.classList.add("active")});n.speechUnmute.classList.add("active"),l.speechRecognitionSupport?(l.setLang("pl"),l.addKeyword(/start/,function(){d=!0,n.contentFieldFinal.focus()}),l.addKeyword(/stop/,function(){d=!1,u()}),l.addKeyword(/usuń zadanie (\d)/,function(e){a.removeTodo(parseInt(e[1]))}),n.buttonSpeech.addEventListener("click",function(e){e.preventDefault(),l.recognizing?(l.stop(),n.speechMute.classList.remove("active"),n.speechUnmute.classList.add("active")):(l.start(),n.speechMute.classList.add("active"),n.speechUnmute.classList.remove("active"))})):n.buttonSpeech.parentNode.removeChild(n.buttonSpeech)}.apply(t,o),!(void 0!==i&&(e.exports=i))},function(e,t,n){var o,i;o=[t,e],i=function(e,t){"use strict";t.exports=n(5)}.apply(t,o),!(void 0!==i&&(e.exports=i))},function(e,t,n){var o,i;o=[t,e],i=function(e,t){"use strict";function n(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){var n=[],o=!0,i=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(a){i=!0,r=a}finally{try{!o&&c["return"]&&c["return"]()}finally{if(i)throw r}}return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){var t=void 0===arguments[0]?function(){}:arguments[0],i=void 0===arguments[1]?function(){}:arguments[1],r=this,s=void 0===arguments[2]?function(){}:arguments[2],c=void 0===arguments[3]?function(){}:arguments[3];o(this,e),"webkitSpeechRecognition"in window?(this.speechRecognitionSupport=!0,this._keywords=new Map,this.recognizing=!1,this.recognition=new webkitSpeechRecognition,this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.onresult=function(e){s(e);for(var o=e.resultIndex;o<e.results.length;++o){var c=e.results[o][0].transcript;if(console.log("Recognition: "+c),e.results[e.results.length-1].isFinal){var a=!1,u=!0,d=!1,l=void 0;try{for(var f,p=r._keywords[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=n(f.value,2),v=h[0],m=h[1],g=c.match(v);g&&(a=!0,m(g))}}catch(_){d=!0,l=_}finally{try{!u&&p["return"]&&p["return"]()}finally{if(d)throw l}}t(c,a)}else i(c)}},this.recognition.onend=function(e){r.recognizing=!1,c(e)},this.recognition.onerror=function(e){switch(e.error){case"no-speech":console.warn("Mic was turned off for AFK!");break;case"audio-capture":console.warn("You need a mic, dude.");break;case"not-allowed":console.warn("C'mon! Let me in!");break;default:console.error(e.error)}r.recognizing=!1}):(console.warn("webkitSpeechRecognition is not defined"),this.speechRecognitionSupport=!1)}return i(e,[{key:"start",value:function(){this.recognizing=!0,this.recognition.start()}},{key:"stop",value:function(){this.recognizing=!1,this.recognition.stop()}},{key:"setLang",value:function(e){this.recognition.lang=e}},{key:"addKeyword",value:function(e,t){this._keywords.set(e,t)}}]),e}();t.exports=r}.apply(t,o),!(void 0!==i&&(e.exports=i))},function(e,t,n){var o,i;o=[t,e],i=function(e,t){"use strict";t.exports=n(7)}.apply(t,o),!(void 0!==i&&(e.exports=i))},function(e,t,n){var o,i;o=[t,e],i=function(e,t){"use strict";function o(e){if(e.childNodes.length){var t=document.createRange(),n=window.getSelection(),o=e.childNodes[e.childNodes.length-1];t.setStart(o,o.length),t.collapse(!0),n.removeAllRanges(),n.addRange(t)}e.focus()}n(13);var i=document.querySelector("#todo-form"),r=document.querySelector(".content-field"),s=document.querySelector(".content-field__final"),c=document.querySelector(".content-field__interim"),a=document.querySelector(".content-buttons__speech"),u=document.querySelector(".content-buttons__speech__mute"),d=document.querySelector(".content-buttons__speech__unmute");r.addEventListener("click",function(){o(s)}),s.addEventListener("click",function(e){e.stopPropagation()}),s.addEventListener("focus",function(){r.classList.add("focus")}),s.addEventListener("blur",function(){r.classList.remove("focus")}),t.exports={form:i,contentFieldFinal:s,contentFieldInterim:c,buttonSpeech:a,speechMute:u,speechUnmute:d,focusCursorAtTheEnd:o}}.apply(t,o),!(void 0!==i&&(e.exports=i))},function(e,t,n){var o,i;o=[t,e],i=function(e,t){"use strict";t.exports=n(9)}.apply(t,o),!(void 0!==i&&(e.exports=i))},function(e,t,n){var o,i;o=[t,e],i=function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(14);var r=function(){function e(){o(this,e),this.todoList=document.querySelector(".todo-list"),this.lastIndex=0}return i(e,[{key:"addTodo",value:function(e){var t=this,n=void 0===arguments[1]?function(){}:arguments[1],o=++this.lastIndex,i=document.createElement("li");i.classList.add("todo-list__item"),i.dataset.index=o;var r=document.createElement("span");r.innerHTML="#"+o,r.classList.add("todo-list__item__order"),i.appendChild(r);var s=document.createElement("span");s.innerHTML=e,s.classList.add("todo-list__item__content"),i.appendChild(s);var c=document.createElement("span");c.classList.add("todo-list__item__buttons"),i.appendChild(c);var a=document.createElement("button");a.innerHTML="Usuń",a.classList.add("todo-list__item__delete","btn","btn-warning"),a.addEventListener("click",function(){n(o)!==!1&&t.todoList.removeChild(i)}),c.appendChild(a),this.todoList.appendChild(i)}},{key:"removeTodo",value:function(e){for(var t=0;t<this.todoList.childNodes.length;t++)this.todoList.childNodes[t].dataset.index==e&&this.todoList.removeChild(this.todoList.childNodes[t])}}]),e}();t.exports=r}.apply(t,o),!(void 0!==i&&(e.exports=i))},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".content-field{min-height:98px;height:auto}.content-field.focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.content-field__final{font-weight:700;outline:0;display:inline-block}.content-field__interim{color:#CCC}.content-buttons__speech{margin-bottom:12px}.content-buttons__speech__mute,.content-buttons__speech__unmute{display:none}.content-buttons__speech__mute.active,.content-buttons__speech__unmute.active{display:inline}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".todo-list{list-style:none;margin:20px 0 0;padding:20px 0 0;border-top:2px solid #CCC}.todo-list__item{padding:6px 12px}.todo-list__item:hover{background-color:#ededed}.todo-list__item__buttons,.todo-list__item__content,.todo-list__item__order{display:inline-block;padding-right:5px}.todo-list__item__order{width:10%;font-weight:700}.todo-list__item__content{width:70%}.todo-list__item__buttons{width:20%;text-align:right}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".btn{width:100%}",""])},function(e,t,n){var o=n(10);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(11);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(12);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){throw new Error("[HMR] Hot Module Replacement is disabled.")}]);
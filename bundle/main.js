!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);var r=document.getElementById("new-task"),o=document.querySelector("button"),c=document.getElementById("incomplete-tasks"),u=document.getElementById("completed-tasks"),a=function(){if(r.value){var e=function(e){var t=document.createElement("li"),n=document.createElement("input"),r=document.createElement("label"),o=document.createElement("button"),c=document.createElement("i");return n.type="checkbox",o.className="btn",c.className="fa fa-trash",o.append(c),r.innerText=e,t.appendChild(n),t.appendChild(r),t.appendChild(o),t}(r.value);c.appendChild(e),f(e,l)}r.value=""},i=function(){var e=this.parentNode;e.parentNode.removeChild(e)},l=function(){var e=this.parentNode;u.appendChild(e),f(e,d)},d=function(){var e=this.parentNode;c.appendChild(e),f(e,l)},f=function(e,t){var n=e.querySelector("input[type=checkbox]");e.querySelector("button.btn").onclick=i,n.onchange=t};o.onclick=a,r.addEventListener("keydown",(function(e){"Enter"!==e.key&&13!==e.keyCode||a()}));for(var p=0;p<c.children.length;p++)f(c.children[p],l);for(var m=0;m<c.children.length;m++)f(u.children[m],d)},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiVEFTS19JTlBVVCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBRERfQlVUVE9OIiwicXVlcnlTZWxlY3RvciIsIklOQ09NUExFVEVfVEFTS1NfSE9MREVSIiwiQ09NUExFVEVEX1RBU0tTX0hPTERFUiIsImFkZFRhc2siLCJsaXN0SXRlbSIsInRhc2tTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tCb3giLCJsYWJlbCIsImRlbGV0ZUJ1dHRvbiIsImljb24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVOZXdUYXNrRWxlbWVudCIsImJpbmRUYXNrRXZlbnRzIiwidGFza3NDb21wbGV0ZWQiLCJkZWxldGVUYXNrIiwidGhpcyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInRhc2tzSW5jb21wbGV0ZSIsInRhc2tMaXN0SXRlbSIsImNoZWNrQm94RXZlbnRIYW5kbGVyIiwib25jbGljayIsIm9uY2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImluZGV4IiwiY2hpbGRyZW4iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT3JCLEVBQW9CVSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSekIsRUFBb0I2QixFQUFJLFNBQVMxQixHQUNoQyxJQUFJUyxFQUFTVCxHQUFVQSxFQUFPcUIsV0FDN0IsV0FBd0IsT0FBT3JCLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFILEVBQW9CVSxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSWixFQUFvQmEsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekcvQixFQUFvQmtDLEVBQUksR0FJakJsQyxFQUFvQkEsRUFBb0JtQyxFQUFJLEcsK0JDbEZyRCxxQkFHTUMsRUFBYUMsU0FBU0MsZUFBZSxZQUNyQ0MsRUFBYUYsU0FBU0csY0FBYyxVQUNwQ0MsRUFBMEJKLFNBQVNDLGVBQWUsb0JBQ2xESSxFQUF5QkwsU0FBU0MsZUFBZSxtQkEwQm5ESyxFQUFVLFdBQ1YsR0FBSVAsRUFBV2YsTUFBTyxDQUNwQixJQUFJdUIsRUExQmlCLFNBQUNDLEdBQzNCLElBQUlELEVBQVdQLFNBQVNTLGNBQWMsTUFFbENDLEVBQVdWLFNBQVNTLGNBQWMsU0FDbENFLEVBQVFYLFNBQVNTLGNBQWMsU0FFL0JHLEVBQWVaLFNBQVNTLGNBQWMsVUFDdENJLEVBQU9iLFNBQVNTLGNBQWMsS0FjbEMsT0FaQUMsRUFBU0ksS0FBTyxXQUVoQkYsRUFBYUcsVUFBWSxNQUN6QkYsRUFBS0UsVUFBWSxjQUNqQkgsRUFBYUksT0FBT0gsR0FFcEJGLEVBQU1NLFVBQVlULEVBRWxCRCxFQUFTVyxZQUFZUixHQUNyQkgsRUFBU1csWUFBWVAsR0FDckJKLEVBQVNXLFlBQVlOLEdBRWRMLEVBS2FZLENBQXFCcEIsRUFBV2YsT0FDL0NvQixFQUF3QmMsWUFBWVgsR0FDcENhLEVBQWViLEVBQVVjLEdBRzlCdEIsRUFBV2YsTUFBUSxJQUdoQnNDLEVBQWEsV0FDaEIsSUFBSWYsRUFBV2dCLEtBQUtDLFdBQ1hqQixFQUFTaUIsV0FDZkMsWUFBWWxCLElBR1pjLEVBQWlCLFdBQ3BCLElBQUlkLEVBQVdnQixLQUFLQyxXQUNwQm5CLEVBQXVCYSxZQUFZWCxHQUNuQ2EsRUFBZWIsRUFBVW1CLElBR3RCQSxFQUFrQixXQUNyQixJQUFJbkIsRUFBV2dCLEtBQUtDLFdBQ3BCcEIsRUFBd0JjLFlBQVlYLEdBQ3BDYSxFQUFlYixFQUFVYyxJQUd0QkQsRUFBaUIsU0FBQ08sRUFBY0MsR0FDbkMsSUFBSWxCLEVBQVdpQixFQUFheEIsY0FBYyx3QkFDdkJ3QixFQUFheEIsY0FBYyxjQUVqQzBCLFFBQVVQLEVBQ3ZCWixFQUFTb0IsU0FBV0YsR0FHckIxQixFQUFXMkIsUUFBVXZCLEVBRXJCUCxFQUFXZ0MsaUJBQWlCLFdBQVcsU0FBQUMsR0FDcEIsVUFBZEEsRUFBTTFDLEtBQXFDLEtBQWxCMEMsRUFBTUMsU0FDbEMzQixPQUlGLElBQUssSUFBSTRCLEVBQVEsRUFBR0EsRUFBUTlCLEVBQXdCK0IsU0FBU0MsT0FBUUYsSUFDcEVkLEVBQWVoQixFQUF3QitCLFNBQVNELEdBQVFiLEdBR3pELElBQUssSUFBSWEsRUFBUSxFQUFHQSxFQUFROUIsRUFBd0IrQixTQUFTQyxPQUFRRixJQUNwRWQsRUFBZWYsRUFBdUI4QixTQUFTRCxHQUFRUixJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi4vY3NzL2J1dHRvbi5jc3MnO1xuXG5jb25zdCBUQVNLX0lOUFVUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFza1wiKTtcbmNvbnN0IEFERF9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgSU5DT01QTEVURV9UQVNLU19IT0xERVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluY29tcGxldGUtdGFza3NcIik7XG5jb25zdCBDT01QTEVURURfVEFTS1NfSE9MREVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWQtdGFza3NcIik7XG5cbmxldCBjcmVhdGVOZXdUYXNrRWxlbWVudCA9ICh0YXNrU3RyaW5nKSA9PiB7XG5cdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuXHRsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuXHRsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0bGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cblx0Y2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHRkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJidG5cIjtcblx0aWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtdHJhc2gnO1xuXHRkZWxldGVCdXR0b24uYXBwZW5kKGljb24pO1xuXG5cdGxhYmVsLmlubmVyVGV4dCA9IHRhc2tTdHJpbmc7XG5cblx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXHRsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblx0cmV0dXJuIGxpc3RJdGVtO1xufTtcblxubGV0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgaWYgKFRBU0tfSU5QVVQudmFsdWUpIHtcbiAgICAgIGxldCBsaXN0SXRlbSA9IGNyZWF0ZU5ld1Rhc2tFbGVtZW50KFRBU0tfSU5QVVQudmFsdWUpO1xuICAgICAgSU5DT01QTEVURV9UQVNLU19IT0xERVIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgYmluZFRhc2tFdmVudHMobGlzdEl0ZW0sIHRhc2tzQ29tcGxldGVkKTtcbiAgICB9XG5cblx0VEFTS19JTlBVVC52YWx1ZSA9IFwiXCI7XG59O1xuXG5sZXQgZGVsZXRlVGFzayA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG5cdGxldCB1bCA9IGxpc3RJdGVtLnBhcmVudE5vZGU7XG5cdHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbn07XG5cbmxldCB0YXNrc0NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG5cdENPTVBMRVRFRF9UQVNLU19IT0xERVIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHRiaW5kVGFza0V2ZW50cyhsaXN0SXRlbSwgdGFza3NJbmNvbXBsZXRlKTtcbn07XG5cbmxldCB0YXNrc0luY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0bGV0IGxpc3RJdGVtID0gdGhpcy5wYXJlbnROb2RlO1xuXHRJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cdGJpbmRUYXNrRXZlbnRzKGxpc3RJdGVtLCB0YXNrc0NvbXBsZXRlZCk7XG59O1xuXG5sZXQgYmluZFRhc2tFdmVudHMgPSAodGFza0xpc3RJdGVtLCBjaGVja0JveEV2ZW50SGFuZGxlcikgPT4ge1xuXHRsZXQgY2hlY2tCb3ggPSB0YXNrTGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xuXHRsZXQgZGVsZXRlQnV0dG9uID0gdGFza0xpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYnRuXCIpO1xuXG5cdGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZGVsZXRlVGFzaztcblx0Y2hlY2tCb3gub25jaGFuZ2UgPSBjaGVja0JveEV2ZW50SGFuZGxlcjtcbn07XG5cbkFERF9CVVRUT04ub25jbGljayA9IGFkZFRhc2s7XG5cblRBU0tfSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT57XG5cdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpe1xuXHRcdGFkZFRhc2soKTtcblx0fVxufSk7XG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5jaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcblx0YmluZFRhc2tFdmVudHMoSU5DT01QTEVURV9UQVNLU19IT0xERVIuY2hpbGRyZW5baW5kZXhdLCB0YXNrc0NvbXBsZXRlZCk7XG59XG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5jaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcblx0YmluZFRhc2tFdmVudHMoQ09NUExFVEVEX1RBU0tTX0hPTERFUi5jaGlsZHJlbltpbmRleF0sIHRhc2tzSW5jb21wbGV0ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var css = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'css/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var TASK_INPUT = document.getElementById("new-task");
var ADD_BUTTON = document.querySelector("button");
var INCOMPLETE_TASKS_HOLDER = document.getElementById("incomplete-tasks");
var COMPLETED_TASKS_HOLDER = document.getElementById("completed-tasks");

var createNewTaskElement = function createNewTaskElement(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var deleteButton = document.createElement("button");
  var icon = document.createElement('i');
  checkBox.type = "checkbox";
  deleteButton.className = "btn";
  icon.className = 'fa fa-trash';
  deleteButton.append(icon);
  label.innerText = taskString;
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
};

var addTask = function addTask() {
  if (TASK_INPUT.value) {
    var listItem = createNewTaskElement(TASK_INPUT.value);
    INCOMPLETE_TASKS_HOLDER.appendChild(listItem);
    bindTaskEvents(listItem, tasksCompleted);
  }

  TASK_INPUT.value = "";
};

var deleteTask = function deleteTask() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};

var tasksCompleted = function tasksCompleted() {
  var listItem = this.parentNode;
  COMPLETED_TASKS_HOLDER.appendChild(listItem);
  bindTaskEvents(listItem, tasksIncomplete);
};

var tasksIncomplete = function tasksIncomplete() {
  var listItem = this.parentNode;
  INCOMPLETE_TASKS_HOLDER.appendChild(listItem);
  bindTaskEvents(listItem, tasksCompleted);
};

var bindTaskEvents = function bindTaskEvents(taskListItem, checkBoxEventHandler) {
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var deleteButton = taskListItem.querySelector("button.btn");
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
};

ADD_BUTTON.onclick = addTask;
TASK_INPUT.addEventListener("keydown", function (event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
    addTask();
  }
});

for (var index = 0; index < INCOMPLETE_TASKS_HOLDER.children.length; index++) {
  bindTaskEvents(INCOMPLETE_TASKS_HOLDER.children[index], tasksCompleted);
}

for (var _index = 0; _index < INCOMPLETE_TASKS_HOLDER.children.length; _index++) {
  bindTaskEvents(COMPLETED_TASKS_HOLDER.children[_index], tasksIncomplete);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbImNzcyIsInJlcXVpcmUiLCJUQVNLX0lOUFVUIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFERF9CVVRUT04iLCJxdWVyeVNlbGVjdG9yIiwiSU5DT01QTEVURV9UQVNLU19IT0xERVIiLCJDT01QTEVURURfVEFTS1NfSE9MREVSIiwiY3JlYXRlTmV3VGFza0VsZW1lbnQiLCJ0YXNrU3RyaW5nIiwibGlzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tCb3giLCJsYWJlbCIsImRlbGV0ZUJ1dHRvbiIsImljb24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJhZGRUYXNrIiwidmFsdWUiLCJiaW5kVGFza0V2ZW50cyIsInRhc2tzQ29tcGxldGVkIiwiZGVsZXRlVGFzayIsInBhcmVudE5vZGUiLCJ1bCIsInJlbW92ZUNoaWxkIiwidGFza3NJbmNvbXBsZXRlIiwidGFza0xpc3RJdGVtIiwiY2hlY2tCb3hFdmVudEhhbmRsZXIiLCJvbmNsaWNrIiwib25jaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJrZXlDb2RlIiwiaW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNB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LFFBQXZCLENBQWdDRCxNQUFoQyxDQUFELEVBQXlDVCxlQUF6QyxDQUFkO0FBQ0EsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9zY3JpcHQuanNcIik7XG4iLCJjb25zdCBjc3MgPSByZXF1aXJlKCdjc3Mvc3R5bGVzLmNzcycpO1xuXG5jb25zdCBUQVNLX0lOUFVUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFza1wiKTtcbmNvbnN0IEFERF9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgSU5DT01QTEVURV9UQVNLU19IT0xERVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluY29tcGxldGUtdGFza3NcIik7XG5jb25zdCBDT01QTEVURURfVEFTS1NfSE9MREVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWQtdGFza3NcIik7XG5cbmxldCBjcmVhdGVOZXdUYXNrRWxlbWVudCA9ICh0YXNrU3RyaW5nKSA9PiB7XG5cdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuXHRsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuXHRsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0bGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cblx0Y2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHRkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJidG5cIjtcblx0aWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtdHJhc2gnO1xuXHRkZWxldGVCdXR0b24uYXBwZW5kKGljb24pO1xuXG5cdGxhYmVsLmlubmVyVGV4dCA9IHRhc2tTdHJpbmc7XG5cblx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXHRsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblx0cmV0dXJuIGxpc3RJdGVtO1xufTtcblxubGV0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgaWYgKFRBU0tfSU5QVVQudmFsdWUpIHtcbiAgICAgIGxldCBsaXN0SXRlbSA9IGNyZWF0ZU5ld1Rhc2tFbGVtZW50KFRBU0tfSU5QVVQudmFsdWUpO1xuICAgICAgSU5DT01QTEVURV9UQVNLU19IT0xERVIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgYmluZFRhc2tFdmVudHMobGlzdEl0ZW0sIHRhc2tzQ29tcGxldGVkKTtcbiAgICB9XG5cblx0VEFTS19JTlBVVC52YWx1ZSA9IFwiXCI7XG59O1xuXG5sZXQgZGVsZXRlVGFzayA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG5cdGxldCB1bCA9IGxpc3RJdGVtLnBhcmVudE5vZGU7XG5cdHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbn07XG5cbmxldCB0YXNrc0NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG5cdENPTVBMRVRFRF9UQVNLU19IT0xERVIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHRiaW5kVGFza0V2ZW50cyhsaXN0SXRlbSwgdGFza3NJbmNvbXBsZXRlKTtcbn07XG5cbmxldCB0YXNrc0luY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0bGV0IGxpc3RJdGVtID0gdGhpcy5wYXJlbnROb2RlO1xuXHRJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cdGJpbmRUYXNrRXZlbnRzKGxpc3RJdGVtLCB0YXNrc0NvbXBsZXRlZCk7XG59O1xuXG5sZXQgYmluZFRhc2tFdmVudHMgPSAodGFza0xpc3RJdGVtLCBjaGVja0JveEV2ZW50SGFuZGxlcikgPT4ge1xuXHRsZXQgY2hlY2tCb3ggPSB0YXNrTGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xuXHRsZXQgZGVsZXRlQnV0dG9uID0gdGFza0xpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYnRuXCIpO1xuXG5cdGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZGVsZXRlVGFzaztcblx0Y2hlY2tCb3gub25jaGFuZ2UgPSBjaGVja0JveEV2ZW50SGFuZGxlcjtcbn07XG5cbkFERF9CVVRUT04ub25jbGljayA9IGFkZFRhc2s7XG5cblRBU0tfSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT57XG5cdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpe1xuXHRcdGFkZFRhc2soKTtcblx0fVxufSk7XG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5jaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcblx0YmluZFRhc2tFdmVudHMoSU5DT01QTEVURV9UQVNLU19IT0xERVIuY2hpbGRyZW5baW5kZXhdLCB0YXNrc0NvbXBsZXRlZCk7XG59XG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5jaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcblx0YmluZFRhc2tFdmVudHMoQ09NUExFVEVEX1RBU0tTX0hPTERFUi5jaGlsZHJlbltpbmRleF0sIHRhc2tzSW5jb21wbGV0ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
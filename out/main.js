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
/***/ (function(module, exports) {

const TASK_INPUT = document.getElementById("new-task");
const ADD_BUTTON = document.querySelector("button");
const INCOMPLETE_TASKS_HOLDER = document.getElementById("incomplete-tasks");
const COMPLETED_TASKS_HOLDER = document.getElementById("completed-tasks");

let createNewTaskElement = (taskString) => {
	let listItem = document.createElement("li");

	let checkBox = document.createElement("input");
	let label = document.createElement("label");

	let deleteButton = document.createElement("button");
	let icon = document.createElement('i');

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

let addTask = () => {
    if (TASK_INPUT.value) {
      let listItem = createNewTaskElement(TASK_INPUT.value);
      INCOMPLETE_TASKS_HOLDER.appendChild(listItem);
      bindTaskEvents(listItem, tasksCompleted);
    }

	TASK_INPUT.value = "";
};

let deleteTask = function() {
	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem);
};

let tasksCompleted = function() {
	let listItem = this.parentNode;
	COMPLETED_TASKS_HOLDER.appendChild(listItem);
	bindTaskEvents(listItem, tasksIncomplete);
};

let tasksIncomplete = function() {
	let listItem = this.parentNode;
	INCOMPLETE_TASKS_HOLDER.appendChild(listItem);
	bindTaskEvents(listItem, tasksCompleted);
};

let bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let deleteButton = taskListItem.querySelector("button.btn");

	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
};

ADD_BUTTON.onclick = addTask;

TASK_INPUT.addEventListener("keydown", event =>{
	if (event.key === 'Enter' || event.keyCode === 13){
		addTask();
	}
});

for (let index = 0; index < INCOMPLETE_TASKS_HOLDER.children.length; index++) {
	bindTaskEvents(INCOMPLETE_TASKS_HOLDER.children[index], tasksCompleted);
}

for (let index = 0; index < INCOMPLETE_TASKS_HOLDER.children.length; index++) {
	bindTaskEvents(COMPLETED_TASKS_HOLDER.children[index], tasksIncomplete);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsbUJBQW1CLGlEQUFpRDtBQUNwRTtBQUNBOztBQUVBLG1CQUFtQixpREFBaUQ7QUFDcEU7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9zY3JpcHQuanNcIik7XG4iLCJjb25zdCBUQVNLX0lOUFVUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFza1wiKTtcbmNvbnN0IEFERF9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgSU5DT01QTEVURV9UQVNLU19IT0xERVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluY29tcGxldGUtdGFza3NcIik7XG5jb25zdCBDT01QTEVURURfVEFTS1NfSE9MREVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWQtdGFza3NcIik7XG5cbmxldCBjcmVhdGVOZXdUYXNrRWxlbWVudCA9ICh0YXNrU3RyaW5nKSA9PiB7XG5cdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuXHRsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuXHRsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0bGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cblx0Y2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHRkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJidG5cIjtcblx0aWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtdHJhc2gnO1xuXHRkZWxldGVCdXR0b24uYXBwZW5kKGljb24pO1xuXG5cdGxhYmVsLmlubmVyVGV4dCA9IHRhc2tTdHJpbmc7XG5cblx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXHRsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblx0cmV0dXJuIGxpc3RJdGVtO1xufTtcblxubGV0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgaWYgKFRBU0tfSU5QVVQudmFsdWUpIHtcbiAgICAgIGxldCBsaXN0SXRlbSA9IGNyZWF0ZU5ld1Rhc2tFbGVtZW50KFRBU0tfSU5QVVQudmFsdWUpO1xuICAgICAgSU5DT01QTEVURV9UQVNLU19IT0xERVIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgYmluZFRhc2tFdmVudHMobGlzdEl0ZW0sIHRhc2tzQ29tcGxldGVkKTtcbiAgICB9XG5cblx0VEFTS19JTlBVVC52YWx1ZSA9IFwiXCI7XG59O1xuXG5sZXQgZGVsZXRlVGFzayA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG5cdGxldCB1bCA9IGxpc3RJdGVtLnBhcmVudE5vZGU7XG5cdHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbn07XG5cbmxldCB0YXNrc0NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG5cdENPTVBMRVRFRF9UQVNLU19IT0xERVIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHRiaW5kVGFza0V2ZW50cyhsaXN0SXRlbSwgdGFza3NJbmNvbXBsZXRlKTtcbn07XG5cbmxldCB0YXNrc0luY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0bGV0IGxpc3RJdGVtID0gdGhpcy5wYXJlbnROb2RlO1xuXHRJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cdGJpbmRUYXNrRXZlbnRzKGxpc3RJdGVtLCB0YXNrc0NvbXBsZXRlZCk7XG59O1xuXG5sZXQgYmluZFRhc2tFdmVudHMgPSAodGFza0xpc3RJdGVtLCBjaGVja0JveEV2ZW50SGFuZGxlcikgPT4ge1xuXHRsZXQgY2hlY2tCb3ggPSB0YXNrTGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xuXHRsZXQgZGVsZXRlQnV0dG9uID0gdGFza0xpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYnRuXCIpO1xuXG5cdGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZGVsZXRlVGFzaztcblx0Y2hlY2tCb3gub25jaGFuZ2UgPSBjaGVja0JveEV2ZW50SGFuZGxlcjtcbn07XG5cbkFERF9CVVRUT04ub25jbGljayA9IGFkZFRhc2s7XG5cblRBU0tfSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT57XG5cdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpe1xuXHRcdGFkZFRhc2soKTtcblx0fVxufSk7XG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5jaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcblx0YmluZFRhc2tFdmVudHMoSU5DT01QTEVURV9UQVNLU19IT0xERVIuY2hpbGRyZW5baW5kZXhdLCB0YXNrc0NvbXBsZXRlZCk7XG59XG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBJTkNPTVBMRVRFX1RBU0tTX0hPTERFUi5jaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcblx0YmluZFRhc2tFdmVudHMoQ09NUExFVEVEX1RBU0tTX0hPTERFUi5jaGlsZHJlbltpbmRleF0sIHRhc2tzSW5jb21wbGV0ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
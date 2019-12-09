/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./_scripts/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_scripts/components/Generator.vue":
/*!*******************************************!*\
  !*** ./_scripts/components/Generator.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Generator_vue_vue_type_template_id_d7e8323c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generator.vue?vue&type=template&id=d7e8323c& */ \"./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c&\");\n/* harmony import */ var _Generator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generator.vue?vue&type=script&lang=js& */ \"./_scripts/components/Generator.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Generator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Generator_vue_vue_type_template_id_d7e8323c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Generator_vue_vue_type_template_id_d7e8323c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"_scripts/components/Generator.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./_scripts/components/Generator.vue?");

/***/ }),

/***/ "./_scripts/components/Generator.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./_scripts/components/Generator.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Generator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Generator.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Generator.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Generator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./_scripts/components/Generator.vue?");

/***/ }),

/***/ "./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c&":
/*!**************************************************************************!*\
  !*** ./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generator_vue_vue_type_template_id_d7e8323c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Generator.vue?vue&type=template&id=d7e8323c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generator_vue_vue_type_template_id_d7e8323c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generator_vue_vue_type_template_id_d7e8323c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Generator.vue?");

/***/ }),

/***/ "./_scripts/components/Step.vue":
/*!**************************************!*\
  !*** ./_scripts/components/Step.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Step_vue_vue_type_template_id_2040fa0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Step.vue?vue&type=template&id=2040fa0d& */ \"./_scripts/components/Step.vue?vue&type=template&id=2040fa0d&\");\n/* harmony import */ var _Step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Step.vue?vue&type=script&lang=js& */ \"./_scripts/components/Step.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Step_vue_vue_type_template_id_2040fa0d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Step_vue_vue_type_template_id_2040fa0d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"_scripts/components/Step.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./_scripts/components/Step.vue?");

/***/ }),

/***/ "./_scripts/components/Step.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./_scripts/components/Step.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Step.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Step.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./_scripts/components/Step.vue?");

/***/ }),

/***/ "./_scripts/components/Step.vue?vue&type=template&id=2040fa0d&":
/*!*********************************************************************!*\
  !*** ./_scripts/components/Step.vue?vue&type=template&id=2040fa0d& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Step_vue_vue_type_template_id_2040fa0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Step.vue?vue&type=template&id=2040fa0d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Step.vue?vue&type=template&id=2040fa0d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Step_vue_vue_type_template_id_2040fa0d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Step_vue_vue_type_template_id_2040fa0d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Step.vue?");

/***/ }),

/***/ "./_scripts/index.js":
/*!***************************!*\
  !*** ./_scripts/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _components_Generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Generator */ \"./_scripts/components/Generator.vue\");\n/* harmony import */ var _util_AutoTextarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/AutoTextarea */ \"./_scripts/util/AutoTextarea.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('generator', _components_Generator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nwindow.v = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#app'\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Get all textareas and set them to autosize\n  Object(_util_AutoTextarea__WEBPACK_IMPORTED_MODULE_2__[\"setupAutoTextareas\"])(); // Initialize Bootstrap file input lib\n\n  bsCustomFileInput.init();\n});\n\n//# sourceURL=webpack:///./_scripts/index.js?");

/***/ }),

/***/ "./_scripts/util/AutoTextarea.js":
/*!***************************************!*\
  !*** ./_scripts/util/AutoTextarea.js ***!
  \***************************************/
/*! exports provided: setupAutoTextareas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupAutoTextareas\", function() { return setupAutoTextareas; });\nfunction setupAutoTextareas() {\n  // adapted from https://stackoverflow.com/a/25621277\n  // get all textareas\n  var textAreas = document.getElementsByTagName('textarea'); // iterate over them\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = textAreas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var tx = _step.value;\n      // add initial CSS for auto-resizing\n      tx.setAttribute('style', 'height:' + tx.scrollHeight + 'px;overflow-y:hidden;resize:none;'); // listen for changes to text\n\n      tx.addEventListener(\"input\", function () {\n        // set to auto first to get size\n        tx.style.height = 'auto'; // then set height to the determined scrollable height\n\n        tx.style.height = tx.scrollHeight + 'px';\n      }, false);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./_scripts/util/AutoTextarea.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Generator.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Generator.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Step_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Step.vue */ \"./_scripts/components/Step.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Generator',\n  components: {\n    Step: _Step_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      currentIndex: 0\n    };\n  }\n});\n\n//# sourceURL=webpack:///./_scripts/components/Generator.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Step.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Step.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/aydenp/spongestrips.github.io/_scripts/components/Step.vue: Unexpected token, expected \\\",\\\" (14:60)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    data\\u001b[33m:\\u001b[39m \\u001b[36mfunction\\u001b[39m () {\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m            isCurrent\\u001b[33m:\\u001b[39m () \\u001b[33m=>\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mindex \\u001b[33m==\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcurrentIndex\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                                            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m        }\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m}\\u001b[0m\\n    at Parser.raise (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/location.js:41:63)\\n    at Parser.unexpected (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/util.js:160:16)\\n    at Parser.expect (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/util.js:140:28)\\n    at Parser.parseObj (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1524:14)\\n    at Parser.parseExprAtom (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1079:26)\\n    at Parser.parseExprSubscripts (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:553:23)\\n    at Parser.parseMaybeUnary (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:533:21)\\n    at Parser.parseExprOps (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:301:23)\\n    at Parser.parseMaybeConditional (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:256:23)\\n    at Parser.parseMaybeAssign (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:186:21)\\n    at Parser.parseExpression (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:134:23)\\n    at Parser.parseReturnStatement (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:584:28)\\n    at Parser.parseStatementContent (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:194:21)\\n    at Parser.parseStatement (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:141:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:860:25)\\n    at Parser.parseBlockBody (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:836:10)\\n    at Parser.parseBlock (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:813:10)\\n    at Parser.parseFunctionBody (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1996:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1941:10)\\n    at callback (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:1071:12)\\n    at Parser.withTopicForbiddingContext (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:2485:14)\\n    at Parser.parseFunction (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/statement.js:1069:10)\\n    at Parser.parseFunctionExpression (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1184:17)\\n    at Parser.parseExprAtom (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1084:21)\\n    at Parser.parseExprSubscripts (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:553:23)\\n    at Parser.parseMaybeUnary (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:533:21)\\n    at Parser.parseExprOps (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:301:23)\\n    at Parser.parseMaybeConditional (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:256:23)\\n    at Parser.parseMaybeAssign (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:186:21)\\n    at Parser.parseObjectProperty (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1743:16)\\n    at Parser.parseObjPropValue (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1793:12)\\n    at Parser.parseObjectMember (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1635:10)\\n    at Parser.parseObj (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1532:25)\\n    at Parser.parseExprAtom (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:1079:26)\\n    at Parser.parseExprSubscripts (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:553:23)\\n    at Parser.parseMaybeUnary (/Users/aydenp/spongestrips.github.io/node_modules/@babel/parser/src/parser/expression.js:533:21)\");\n\n//# sourceURL=webpack:///./_scripts/components/Step.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"generator steps-ctn\" },\n    [\n      _c(\n        \"step\",\n        {\n          attrs: {\n            index: 0,\n            \"current-index\": _vm.currentIndex,\n            title: \"Upload your image\"\n          }\n        },\n        [\n          _c(\"p\", [_vm._v(\"[info on finding it]\")]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"custom-file\" }, [\n            _c(\"input\", {\n              staticClass: \"custom-file-input\",\n              attrs: { type: \"file\", id: \"image-upload\" }\n            }),\n            _vm._v(\" \"),\n            _c(\n              \"label\",\n              {\n                staticClass: \"custom-file-label\",\n                attrs: { for: \"image-upload\" }\n              },\n              [_vm._v(\"Choose image\")]\n            )\n          ])\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"step\",\n        {\n          attrs: {\n            index: 1,\n            \"current-index\": _vm.currentIndex,\n            title: \"Caption your strip\"\n          }\n        },\n        [\n          _c(\"p\", [_vm._v(\"[info on coming up with captions]\")]),\n          _vm._v(\" \"),\n          _c(\"textarea\", {\n            staticClass: \"form-control\",\n            attrs: { placeholder: \"[placeholder here]\", rows: \"1\" }\n          })\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Generator.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Step.vue?vue&type=template&id=2040fa0d&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Step.vue?vue&type=template&id=2040fa0d& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"step\", attrs: { disabled: _vm.isCurrent } },\n    [\n      _c(\"h2\", [\n        _c(\"span\", { staticClass: \"num\" }, [_vm._v(_vm._s(_vm.index + 1))]),\n        _vm._v(\" \" + _vm._s(_vm.title))\n      ]),\n      _vm._v(\" \"),\n      _vm._t(\"default\")\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Step.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });
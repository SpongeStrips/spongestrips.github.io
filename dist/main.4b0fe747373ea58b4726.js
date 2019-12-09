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

/***/ "./_scripts/components/Result.vue":
/*!****************************************!*\
  !*** ./_scripts/components/Result.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Result_vue_vue_type_template_id_e002b6c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result.vue?vue&type=template&id=e002b6c4& */ \"./_scripts/components/Result.vue?vue&type=template&id=e002b6c4&\");\n/* harmony import */ var _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.vue?vue&type=script&lang=js& */ \"./_scripts/components/Result.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Result_vue_vue_type_template_id_e002b6c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Result_vue_vue_type_template_id_e002b6c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"_scripts/components/Result.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./_scripts/components/Result.vue?");

/***/ }),

/***/ "./_scripts/components/Result.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./_scripts/components/Result.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Result.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./_scripts/components/Result.vue?");

/***/ }),

/***/ "./_scripts/components/Result.vue?vue&type=template&id=e002b6c4&":
/*!***********************************************************************!*\
  !*** ./_scripts/components/Result.vue?vue&type=template&id=e002b6c4& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_e002b6c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=template&id=e002b6c4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Result.vue?vue&type=template&id=e002b6c4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_e002b6c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_e002b6c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Result.vue?");

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

/***/ "./_scripts/util/Drawing.js":
/*!**********************************!*\
  !*** ./_scripts/util/Drawing.js ***!
  \**********************************/
/*! exports provided: createStrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStrip\", function() { return createStrip; });\n// design variables\nvar width = 960;\nvar textPadding = 30;\nvar lineHeight = 74;\nvar fontSizePx = 54;\nvar fontName = \"Helvetica Neue\"; // calculated variables (don't change)\n\nvar textWidth = width - textPadding * 2;\nvar fontStr = fontSizePx.toString() + \"px \" + fontName;\nfunction createStrip(image, text) {\n  // Create our canvas\n  var canvas = document.createElement(\"canvas\");\n  var ctx = canvas.getContext('2d');\n  canvas.width = width;\n  ctx.font = fontStr; // we need to set this here for accurate wrapping calculations\n\n  var y = 0; // Determine the final canvas size before drawing\n\n  var imageHeight = image.height / image.width * width;\n  var lines = getTextLines(ctx, text, textWidth);\n  var textHeight = lines.length * lineHeight;\n  canvas.height = imageHeight + textHeight + textPadding * 2; // Fill in a white background\n\n  ctx.fillStyle = \"#fff\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height); // Draw their image, scaled\n\n  ctx.drawImage(image, 0, y, canvas.width, imageHeight);\n  y += imageHeight + textPadding + fontSizePx; // Draw the text\n\n  ctx.fillStyle = \"#000\";\n  ctx.font = fontStr; // we need to re-set this because it seems to get cleared when the canvas resizes\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var line = _step.value;\n      ctx.fillText(line, textPadding, y, textWidth);\n      y += lineHeight;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return canvas.toDataURL(\"image/jpeg\");\n}\n; // get the wrapped lines of text to draw\n\nfunction getTextLines(context, text, maxWidth) {\n  var words = text.split(' ');\n  var line = '';\n  var lines = [];\n\n  for (var n = 0; n < words.length; n++) {\n    var testLine = line + words[n] + ' ';\n    var metrics = context.measureText(testLine);\n    var testWidth = metrics.width;\n\n    if (testWidth > maxWidth && n > 0) {\n      lines.push(line);\n      line = words[n] + ' ';\n    } else {\n      line = testLine;\n    }\n  }\n\n  lines.push(line);\n  return lines;\n}\n\n//# sourceURL=webpack:///./_scripts/util/Drawing.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Generator.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Generator.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Step_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Step.vue */ \"./_scripts/components/Step.vue\");\n/* harmony import */ var _Result_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.vue */ \"./_scripts/components/Result.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Generator',\n  components: {\n    Step: _Step_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Result: _Result_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      providedImage: null,\n      imageErrored: false,\n      currentIndex: 0,\n      caption: \"Test test test test test test test test test\"\n    };\n  },\n  methods: {\n    changeIndex: function changeIndex(index) {\n      this.currentIndex = index;\n    },\n    restart: function restart() {\n      this.currentIndex = 0;\n      this.caption = \"\";\n      this.$refs.input.value = \"\";\n    },\n    imageChanged: function imageChanged() {\n      var _this = this;\n\n      this.imageErrored = false;\n      var file = this.$refs.input.files[0];\n      if (!file) return this.providedImage = null;\n      var img = new Image();\n\n      img.onload = function () {\n        return _this.providedImage = img;\n      };\n\n      img.onerror = function () {\n        return _this.imageErrored = true;\n      };\n\n      img.src = URL.createObjectURL(file);\n      this.currentIndex = 1;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./_scripts/components/Generator.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Result.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Result.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_Drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Drawing */ \"./_scripts/util/Drawing.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Result',\n  props: [\"image\", \"text\"],\n  computed: {\n    isSharingSupported: function isSharingSupported() {\n      return false;\n    },\n    output: function output() {\n      return Object(_util_Drawing__WEBPACK_IMPORTED_MODULE_0__[\"createStrip\"])(this.image, this.text);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./_scripts/components/Result.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Step.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Step.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Step',\n  props: [\"title\", \"index\", \"currentIndex\", \"canAdvance\", \"isFinalStep\"],\n  computed: {\n    isCurrent: function isCurrent() {\n      return this.index == this.currentIndex;\n    }\n  },\n  methods: {\n    changeIndex: function changeIndex(delta, e) {\n      e.preventDefault();\n      e.stopPropagation();\n      this.$emit(\"change:index\", this.index + delta);\n    },\n    clicked: function clicked() {\n      // only allow if this was a previous step\n      if (this.index >= this.currentIndex) return;\n      this.$emit(\"change:index\", this.index);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./_scripts/components/Step.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Generator.vue?vue&type=template&id=d7e8323c& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"generator\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"steps-row\" },\n      [\n        _c(\n          \"step\",\n          {\n            attrs: {\n              index: 0,\n              \"current-index\": _vm.currentIndex,\n              title: \"Select your image\",\n              \"can-advance\": _vm.providedImage\n            },\n            on: { \"change:index\": _vm.changeIndex }\n          },\n          [\n            _c(\"p\", [_vm._v(\"[info on finding it]\")]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"custom-file\" }, [\n              _c(\"input\", {\n                ref: \"input\",\n                staticClass: \"custom-file-input\",\n                attrs: {\n                  type: \"file\",\n                  id: \"image-upload\",\n                  accept: \"image/png,image/x-png,image/gif,image/jpeg\"\n                },\n                on: { change: _vm.imageChanged }\n              }),\n              _vm._v(\" \"),\n              _c(\n                \"label\",\n                {\n                  staticClass: \"custom-file-label\",\n                  attrs: { for: \"image-upload\" }\n                },\n                [_vm._v(\"Choose image\")]\n              )\n            ]),\n            _vm._v(\" \"),\n            _vm.imageErrored\n              ? _c(\n                  \"div\",\n                  { staticClass: \"alert alert-danger alert-block image-error\" },\n                  [\n                    _c(\"strong\", [_vm._v(\"Barnacles!\")]),\n                    _vm._v(\" An error occurred while loading that image.\")\n                  ]\n                )\n              : _vm._e()\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"step\",\n          {\n            attrs: {\n              index: 1,\n              \"current-index\": _vm.currentIndex,\n              title: \"Caption your strip\",\n              \"can-advance\": _vm.caption.length > 0\n            },\n            on: { \"change:index\": _vm.changeIndex }\n          },\n          [\n            _c(\"p\", [_vm._v(\"[info on coming up with captions]\")]),\n            _vm._v(\" \"),\n            _c(\"textarea\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.caption,\n                  expression: \"caption\"\n                }\n              ],\n              staticClass: \"form-control\",\n              attrs: { placeholder: \"[placeholder here]\", rows: \"1\" },\n              domProps: { value: _vm.caption },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.caption = $event.target.value\n                }\n              }\n            })\n          ]\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm.currentIndex >= 2\n      ? _c(\n          \"div\",\n          { staticClass: \"steps-row\" },\n          [\n            _c(\n              \"step\",\n              {\n                attrs: {\n                  index: 2,\n                  \"current-index\": _vm.currentIndex,\n                  title: \"Save your Sponge Strip\",\n                  \"is-final-step\": true\n                },\n                on: { restart: _vm.restart, \"change:index\": _vm.changeIndex }\n              },\n              [\n                _c(\"result\", {\n                  attrs: { image: _vm.providedImage, text: _vm.caption }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Generator.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Result.vue?vue&type=template&id=e002b6c4&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Result.vue?vue&type=template&id=e002b6c4& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"result\" }, [\n    _c(\"p\", { staticClass: \"text-muted\" }, [_vm._v(\"Preview:\")]),\n    _vm._v(\" \"),\n    _c(\"img\", { attrs: { src: _vm.output, width: \"300\" } }),\n    _vm._v(\" \"),\n    _c(\n      \"a\",\n      { staticClass: \"btn btn-light\", attrs: { href: \"javascript:void(0)\" } },\n      [_vm._v(\"Download\")]\n    ),\n    _vm._v(\" \"),\n    _vm.isSharingSupported\n      ? _c(\n          \"a\",\n          {\n            staticClass: \"btn btn-primary\",\n            attrs: { href: \"javascript:void(0)\" }\n          },\n          [_vm._v(\"Share\")]\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Result.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_scripts/components/Step.vue?vue&type=template&id=2040fa0d&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_scripts/components/Step.vue?vue&type=template&id=2040fa0d& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"step\",\n      attrs: { disabled: !_vm.isCurrent },\n      on: { click: _vm.clicked }\n    },\n    [\n      _c(\"h2\", [\n        _c(\"span\", { staticClass: \"num\" }, [_vm._v(_vm._s(_vm.index + 1))]),\n        _vm._v(\" \" + _vm._s(_vm.title))\n      ]),\n      _vm._v(\" \"),\n      _vm._t(\"default\"),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"step-nav\",\n          style: { visibility: _vm.isCurrent ? \"visible\" : \"hidden\" }\n        },\n        [\n          _vm.index > 0\n            ? _c(\n                \"a\",\n                {\n                  attrs: { href: \"javascript:void(0)\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.changeIndex(-1, $event)\n                    }\n                  }\n                },\n                [_vm._v(\"« Previous\")]\n              )\n            : _vm._e(),\n          _vm._v(\" \"),\n          (_vm.canAdvance || _vm.isFinalStep) && _vm.index > 0\n            ? _c(\"span\", [_vm._v(\" · \")])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _vm.isFinalStep\n            ? _c(\n                \"a\",\n                {\n                  attrs: { href: \"javascript:void(0)\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.$emit(\"restart\")\n                    }\n                  }\n                },\n                [_vm._v(\"Start over\")]\n              )\n            : _c(\n                \"a\",\n                {\n                  style: {\n                    visibility:\n                      _vm.isCurrent && _vm.canAdvance ? \"visible\" : \"hidden\"\n                  },\n                  attrs: { href: \"javascript:void(0)\" },\n                  on: {\n                    click: function($event) {\n                      return _vm.changeIndex(1, $event)\n                    }\n                  }\n                },\n                [_vm._v(\"Next »\")]\n              )\n        ]\n      )\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./_scripts/components/Step.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });
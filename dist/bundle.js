/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --background: #f6f6f6;\\n  --shadow: #ddd;\\n  --border: #ddd;\\n  --app-clr: #fff;\\n  --btn: rgb(243, 243, 243);\\n  --btn-hover: rgb(240, 240, 240);\\n  --btn-active: rgb(235, 235, 235);\\n  --icon: #aaa;\\n  --icon-hover: #888;\\n  --highlight: #fffeca;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  box-sizing: border-box;\\n}\\n\\nbody * {\\n  font-family: \\\"Open Sans\\\", system-ui, sans-serif;\\n  font-weight: 300;\\n  color: #545862;\\n}\\n\\nbody {\\n  background-color: var(--background);\\n  margin: 0;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.app {\\n  margin-top: 1rem;\\n  width: min(95%, 30rem); /*stylelint-disable-line*/\\n  background: var(--app-clr);\\n  box-shadow: 0 0 0.5em var(--shadow);\\n  border-radius: 2.5px;\\n  height: fit-content; /*stylelint-disable-line*/\\n}\\n.app header {\\n  padding: 0.8rem 1rem;\\n  display: flex;\\n  align-items: center;\\n}\\n.app header span {\\n  flex: 1;\\n  font-weight: 400;\\n}\\n.app header .fa-refresh {\\n  color: var(--icon);\\n  font-size: 0.9em;\\n}\\n.app header .fa-refresh.clicked {\\n  animation: spin 1s ease;\\n}\\n.app header .fa-refresh:hover {\\n  color: var(--icon-hover);\\n  cursor: pointer;\\n}\\n\\n.form {\\n  display: flex;\\n  align-items: center;\\n  border-top: 0.075rem solid var(--border);\\n}\\n.form input {\\n  outline: none;\\n  border: none;\\n  background-color: var(--app-clr);\\n  padding: 0.8rem 1rem;\\n}\\n.form input:nth-child(1) {\\n  flex: 1;\\n  font-size: 1em;\\n}\\n.form input:nth-child(1)::placeholder {\\n  font-style: italic;\\n}\\n.form input:nth-child(2) {\\n  color: var(--icon);\\n  font-size: 0.5em;\\n}\\n.form input:nth-child(2):is(:hover, :focus-within) {\\n  color: var(--icon-hover);\\n  cursor: pointer;\\n}\\n\\n.todoList {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n.todoList li {\\n  border-top: 0.075rem solid var(--border);\\n  padding: 0.8rem 1rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  transition: background-color 0.25s ease;\\n}\\n.todoList li span {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n.todoList li.over {\\n  background-color: #eee;\\n}\\n.todoList li:has(input:checked) span {\\n  text-decoration: line-through;\\n  color: #888;\\n}\\n.todoList li .fa-ellipsis-v,\\n.todoList li .fa-trash {\\n  margin-left: auto;\\n}\\n.todoList li .fa-ellipsis-v {\\n  color: var(--icon);\\n  cursor: all-scroll;\\n}\\n.todoList li .fa-trash {\\n  color: var(--icon-hover);\\n  cursor: pointer;\\n}\\n.todoList li:has(.tempInput) {\\n  background-color: var(--highlight);\\n}\\n.todoList li:has(.tempInput) .tempInput {\\n  border: none;\\n  outline: none;\\n  font-size: 1rem;\\n  width: 100%;\\n  padding: 0;\\n  background: transparent;\\n}\\n.todoList + button {\\n  width: 100%;\\n  padding: 1em;\\n  background: var(--btn);\\n  border: none;\\n  outline: none;\\n  font-size: 0.9em;\\n  border-top: 0.075rem solid var(--border);\\n}\\n.todoList + button:active {\\n  background: var(--btn-active);\\n}\\n.todoList + button:is(:hover, :focus-within) {\\n  background-color: var(--btn-hover);\\n}\\n\\nfooter {\\n  background: #eee;\\n  border-top: 0.05rem solid var(--border);\\n  padding: 1rem;\\n  margin-top: 1rem;\\n  text-align: center;\\n  width: 100%;\\n}\\nfooter a {\\n  color: #812bcf;\\n  text-decoration: none;\\n}\\nfooter a:hover {\\n  text-decoration: underline;\\n}\\n\\n@keyframes spin {\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n@media screen and (max-width: 500px) {\\n  body {\\n    font-size: 0.9em;\\n  }\\n}\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --background: #1f232a;\\n    --shadow: rgba(0, 0, 0, 0.548);\\n    --app-clr: #1d222a;\\n    --btn: #1f232a;\\n    --btn-hover: #1d2127;\\n    --btn-active: #13181e;\\n    --border: rgba(117, 153, 170, 0.474);\\n    --icon: rgb(211, 211, 211);\\n    --icon-hover: rgb(239, 239, 239);\\n    --highlight: #293447;\\n  }\\n  body * {\\n    color: rgba(232, 244, 252, 0.919);\\n  }\\n  .form input:nth-child(1)::placeholder {\\n    color: var(--icon);\\n  }\\n  .todoList li input:nth-child(1) {\\n    accent-color: var(--highlight); /* stylelint-disable-line */\\n  }\\n  .todoList li.over {\\n    background-color: var(--highlight);\\n  }\\n  footer {\\n    background: #282d36;\\n  }\\n  footer a {\\n    color: #cca2f3;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _utils_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/crud.js */ \"./src/utils/crud.js\");\n/* harmony import */ var _utils_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/handler.js */ \"./src/utils/handler.js\");\n/* harmony import */ var _utils_update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/update.js */ \"./src/utils/update.js\");\n\n\n\n\n\nconst app = new _utils_crud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst handler = new _utils_handler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](app);\n\nconst todoButton = document.querySelector('[data-clear-completed]');\nconst todoReset = document.querySelector('[data-refresh]');\nconst todoForm = document.querySelector('[data-form]');\nconst todoInput = document.querySelector('[data-form-input]');\ntodoInput.focus();\n\n(0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();\n(0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.addEventListeners)(app);\n\ntodoButton.addEventListener('click', () => {\n  const todos = app.clearAllCompleted();\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.setTodos)(todos);\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.addEventListeners)(app);\n});\n\ntodoReset.addEventListener('click', (e) => {\n  // this helps the refresh button to spin (1 second)\n  e.target.classList.add('clicked');\n  e.target.style.pointerEvents = 'none';\n  setTimeout(() => {\n    e.target.classList.remove('clicked');\n    e.target.style.pointerEvents = 'all';\n  }, 1000);\n\n  const todos = app.refresh();\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.setTodos)(todos);\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.addEventListeners)(app);\n});\n\ntodoForm.addEventListener('submit', (e) => {\n  handler.submitForm(e);\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)();\n  (0,_utils_update_js__WEBPACK_IMPORTED_MODULE_3__.addEventListeners)(app);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/utils/abstracts.js":
/*!********************************!*\
  !*** ./src/utils/abstracts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getElementIndex = (element) => {\n  if (!element?.parentNode) return -1;\n  return Array.from(element.parentNode.children).indexOf(element);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getElementIndex);\n\n//# sourceURL=webpack://todo-list/./src/utils/abstracts.js?");

/***/ }),

/***/ "./src/utils/crud.js":
/*!***************************!*\
  !*** ./src/utils/crud.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/utils/store.js\");\n\n\nclass App {\n  constructor() {\n    this.store = new _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  addTask(description) {\n    const { todos } = this.store;\n    const task = {\n      index: todos.length + 1,\n      completed: false,\n      description,\n    };\n    todos.push(task);\n\n    this.store.update(todos);\n    return todos;\n  }\n\n  deleteTask(index) {\n    const todos = this.store.todos\n      .filter((todo) => todo.index !== index - 1)\n      .map((todo, index) => {\n        index++;\n        return { ...todo, index };\n      });\n\n    this.store.update(todos);\n    return todos;\n  }\n\n  swapTasks(index1, index2) {\n    let { todos } = this.store;\n    const task1 = todos[index1 - 1];\n    const task2 = todos[index2 - 1];\n    todos[index2 - 1] = task1;\n    todos[index1 - 1] = task2;\n    todos = todos.map((todo, index) => {\n      index++;\n      return { ...todo, index };\n    });\n\n    this.store.update(todos);\n    return todos;\n  }\n\n  editTask(index, editTodo) {\n    const editedTodo = this.store.todos.map((todo) => {\n      if (todo.index === index) {\n        return { ...todo, ...editTodo };\n      }\n      return { ...todo };\n    });\n\n    this.store.update(editedTodo);\n    return editedTodo;\n  }\n\n  clearAllCompleted() {\n    const filteredTodos = this.store.todos\n      .filter((todo) => todo.completed === false)\n      .map((todo, index) => {\n        index++;\n        return { ...todo, index };\n      });\n\n    this.store.update(filteredTodos);\n    return filteredTodos;\n  }\n\n  refresh() {\n    this.store.update([]);\n    return [];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://todo-list/./src/utils/crud.js?");

/***/ }),

/***/ "./src/utils/drag-drop.js":
/*!********************************!*\
  !*** ./src/utils/drag-drop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/utils/update.js\");\n\n\nconst dragDrop = (app, todoItems) => {\n  let dragStart;\n\n  todoItems.forEach((todo) => {\n    todo.addEventListener('dragstart', (e) => {\n      dragStart = +e.target.dataset.index;\n    });\n    todo.addEventListener('dragenter', (e) => {\n      e.target.classList.add('over');\n    });\n    todo.addEventListener('dragleave', (e) => {\n      e.target.classList.remove('over');\n    });\n    todo.addEventListener('dragover', (e) => {\n      e.preventDefault();\n    });\n    todo.addEventListener('drop', (e) => {\n      e.target.classList.remove('over');\n      const dragEnd = +e.target.dataset.index;\n      if (dragEnd) {\n        const todos = app.swapTasks(dragStart, dragEnd);\n        (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.setTodos)(todos);\n        (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();\n        (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.addEventListeners)(app);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragDrop);\n\n\n//# sourceURL=webpack://todo-list/./src/utils/drag-drop.js?");

/***/ }),

/***/ "./src/utils/handler.js":
/*!******************************!*\
  !*** ./src/utils/handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Handler)\n/* harmony export */ });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/utils/update.js\");\n/* harmony import */ var _abstracts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstracts.js */ \"./src/utils/abstracts.js\");\n\n\n\nclass Handler {\n  constructor(app) {\n    this.app = app;\n  }\n\n  submitForm(event) {\n    event.preventDefault();\n    const description = event.target.elements.description.value;\n    event.target.elements.description.value = '';\n    if (description.trim().length) {\n      const todos = this.app.addTask(description);\n      (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.setTodos)(todos);\n    }\n  }\n\n  changeCheckbox(event, index) {\n    this.app.editTask(index + 1, { completed: event.target.checked });\n  }\n\n  deleteTask(deleteEvent, todoItemIndex) {\n    const { app } = this;\n    if (deleteEvent.target.classList.contains('fa-trash')) {\n      const todos = app.deleteTask(todoItemIndex + 1);\n      (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.setTodos)(todos);\n      (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();\n      (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.addEventListeners)(app);\n    }\n  }\n\n  disablePrevEdit(index) {\n    const { app } = this;\n    const prevInput = document.querySelector('.tempInput');\n    const prevInputParent = prevInput?.parentElement;\n    const prevIndex = (0,_abstracts_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevInputParent);\n    const newNode = document.createElement('span');\n    newNode.className = 'todoDescription';\n    newNode.innerText = prevInput?.value;\n    if (prevIndex !== index) {\n      prevInputParent?.replaceChild(newNode, prevInput);\n      if (prevInput) {\n        prevInputParent.draggable = true;\n        prevInputParent.children[2].className = 'fa fa-ellipsis-v';\n        const todos = app.editTask(prevIndex + 1, {\n          description: prevInput.value,\n        });\n        (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.setTodos)(todos);\n      }\n      return true;\n    }\n    return false;\n  }\n\n  editTask = (editEvent, index) => {\n    const { app } = this;\n    const { target } = editEvent;\n\n    const disabled = this.disablePrevEdit(index);\n\n    if (\n      !target.classList.contains('todoCheckbox')\n      && !target.classList.contains('fa-ellipsis-v')\n      && disabled\n    ) {\n      const todoItem = target.closest('.todoItem');\n      todoItem.draggable = false;\n      const todoItemIndex = +todoItem.dataset.index;\n      const tempInput = document.createElement('input');\n      const trashCan = document.createElement('i');\n      trashCan.className = 'fa fa-trash';\n      tempInput.className = 'tempInput';\n      tempInput.value = todoItem.children[1].innerText;\n      todoItem.replaceChild(tempInput, todoItem.children[1]);\n      todoItem.replaceChild(trashCan, todoItem.children[2]);\n      tempInput.focus();\n\n      tempInput.addEventListener('keyup', (keyEvent) => {\n        if (keyEvent.code === 'Enter') {\n          const description = keyEvent.target.value;\n          const todos = app.editTask(index + 1, { description });\n          (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.setTodos)(todos);\n          (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();\n          (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.addEventListeners)(app);\n        }\n      });\n\n      todoItem.children[2].addEventListener('click', (event) => this.deleteTask(event, todoItemIndex));\n    }\n  };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/utils/handler.js?");

/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Store {\n  constructor() {\n    this.storeKey = 'todo-store-164192491';\n    this.todos = this.load();\n  }\n\n  load() {\n    const { storeKey } = this;\n    if (localStorage.getItem(storeKey)) {\n      return JSON.parse(localStorage.getItem(storeKey));\n    }\n    localStorage.setItem(storeKey, JSON.stringify([]));\n    return [];\n  }\n\n  update(todos) {\n    localStorage.setItem(this.storeKey, JSON.stringify(todos));\n    this.todos = todos;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);\n\n//# sourceURL=webpack://todo-list/./src/utils/store.js?");

/***/ }),

/***/ "./src/utils/update.js":
/*!*****************************!*\
  !*** ./src/utils/update.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListeners\": () => (/* binding */ addEventListeners),\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos),\n/* harmony export */   \"setTodos\": () => (/* binding */ setTodos)\n/* harmony export */ });\n/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop.js */ \"./src/utils/drag-drop.js\");\n/* harmony import */ var _handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler.js */ \"./src/utils/handler.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.js */ \"./src/utils/store.js\");\n\n\n\n\nlet { todos } = new _store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nconst setTodos = (todosObj) => {\n  todos = todosObj;\n};\n\nconst renderTodos = () => {\n  const todoList = document.querySelector('[data-todo-list]');\n\n  todoList.innerHTML = '';\n  todos.forEach((todo, index) => {\n    const { completed, description } = todo;\n\n    const todoItem = document.createElement('li');\n    todoItem.className = 'todoItem';\n    todoItem.setAttribute('data-index', index + 1);\n    todoItem.draggable = true;\n\n    const todoCheckbox = document.createElement('input');\n    todoCheckbox.type = 'checkbox';\n    todoCheckbox.checked = completed;\n    todoCheckbox.className = 'todoCheckbox';\n    const todoDescription = document.createElement('span');\n    todoDescription.innerText = description;\n    todoDescription.className = 'todoDescription';\n    const todoMore = document.createElement('i');\n    todoMore.className = 'fa fa-ellipsis-v';\n\n    todoItem.append(todoCheckbox, todoDescription, todoMore);\n    todoList.append(todoItem);\n  });\n};\n\nconst addEventListeners = (app) => {\n  const handler = new _handler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](app);\n  const todoItems = document.querySelectorAll('.todoItem');\n  todoItems.forEach((todo, index) => {\n    todo.children[0].addEventListener('change', (e) => {\n      handler.changeCheckbox(e, index);\n    });\n    todo.addEventListener('click', (event) => {\n      handler.editTask(event, index);\n    });\n  });\n  (0,_drag_drop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(app, todoItems);\n};\n\n//# sourceURL=webpack://todo-list/./src/utils/update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar fondo = document.querySelector('.fondo');\nvar divCard = document.createElement('div');\ndivCard.classList.add('card');\nvar button = document.createElement('button');\nbutton.setAttribute('href', 'https://github.com/BricoBC/card/');\nbutton.innerText = 'Github';\nbutton.classList.add('btn');\nvar img = document.createElement('img');\nimg.setAttribute('src', 'https://scontent.fmex28-1.fna.fbcdn.net/v/t1.6435-9/56985377_2179095605500482_1523310481962434560_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFR2w3fWgSHGjZHqVrP9xIztZ3S1xXIC7O1ndLXFcgLs73YzMtOSSBGzAPP8q4JsWsJixREQWlg0ONkfYHTbCa_&_nc_ohc=z3lzmU9AJpUAX97I_hW&_nc_ht=scontent.fmex28-1.fna&oh=00_AfCENCEiEoKGVblEd1m2hvgR0W6fr_I3xhDVq7B5liU5Uw&oe=63E5A5E6');\nvar section = document.createElement('section');\nsection.classList.add('container');\nvar h1 = document.createElement('h1');\nh1.classList.add('name');\nh1.innerText = 'Nombre: Barajas Correa Bruno Nicolas';\nvar hDosOcupation = document.createElement('h2');\nhDosOcupation.innerText = 'Desarrollador Web - Programador';\nvar h2Edad = document.createElement('h2');\nh2Edad.innerText = '22 Años';\nvar hDosCelular = document.createElement('h2');\nhDosCelular.innerText = 'Celular: 55-5099-0404';\nsection.append(h1, hDosOcupation, h2Edad, hDosOcupation);\ndivCard.append(img, section);\nfondo.append(divCard, button);\nbutton.addEventListener('click', changePageGithub);\nfunction changePageGithub() {\n  location.href = \"https://github.com/BricoBC/card/\";\n}\n\n//# sourceURL=webpack://card/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://card/./src/style.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
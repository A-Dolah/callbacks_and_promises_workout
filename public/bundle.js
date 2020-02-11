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
/******/ 	return __webpack_require__(__webpack_require__.s = "./theProject.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./theProject.js":
/*!***********************!*\
  !*** ./theProject.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// SPOTIFY API DATA\n// Fetch API - Promise based\n\nconst getAccessToken = () => {\n\tconst coded = btoa(\n\t\t`40321916cd0e44878a981cab0fc9d7f0:${\"36c4adc0ada9408e8570b9957f17ae70\"}`\n\t);\n\n\tfetch('https://accounts.spotify.com/api/token', {\n\t\tmethod: 'POST',\n\t\theaders: {\n\t\t\t// 'Content-Type': 'application/json'\n\t\t\t'Content-Type': 'application/x-www-form-urlencoded',\n\t\t\t'Authorization': `Basic ${coded}`\n\t\t},\n\t\tbody: ['grant_type=client_credentials']\n\t})\n\t\t.then(response => response.json())\n\t\t.then(data => {\n\t\t\treturn data;\n\t\t})\n\t\t.then(formatted => {\n\t\t\tfetchData(formatted.access_token);\n\t\t});\n};\n\nconst fetchData = accessToken => {\n\tfetch('https://api.spotify.com/v1/search?q=michael+jackson&type=album', {\n\t\tmethod: 'GET',\n\t\theaders: {\n\t\t\t'Content-Type': 'application/x-www-form-urlencoded',\n\t\t\t'Authorization': `Bearer ${accessToken}`\n\t\t}\n\t})\n\t\t.then(response => response.json())\n\t\t.then(data => {\n\t\t\tconst uris = data.albums.items\n\t\t\t\t.map(item => {\n\t\t\t\t\treturn item.uri;\n\t\t\t\t})\n\t\t\t\t.slice(0, 5);\n\n\t\t\tconst tasks = uris.map(uri =>\n\t\t\t\tfetch(`https://api.spotify.com/v1/albums/${uri.split(':')[2]}`, {\n\t\t\t\t\tmethod: 'GET',\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t'Content-Type': 'application/x-www-form-urlencoded',\n\t\t\t\t\t\t'Authorization': `Bearer ${accessToken}`\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t);\n\t\t\treturn Promise.all(tasks);\n\t\t})\n\t\t.then(responses => {\n\t\t\treturn Promise.all(responses.map(response => response.json()));\n\t\t})\n\t\t.then(albums => {\n\t\t\treturn Promise.all(albums.map(album => fetch(album.images[0].url)));\n\t\t})\n\t\t.then(responses => {\n\t\t\treturn Promise.all(responses.map(response => response.blob()));\n\t\t})\n\t\t.then(blobs => {\n\t\t\treturn blobs.map(blob => URL.createObjectURL(blob));\n\t\t})\n\t\t.then(urls => {\n\t\t\treturn Promise.all(\n\t\t\t\turls.map(url => {\n\t\t\t\t\treturn new Promise(resolve => {\n\t\t\t\t\t\tconst image = new Image();\n\t\t\t\t\t\timage.addEventListener('load', () => {\n\t\t\t\t\t\t\tresolve(image);\n\t\t\t\t\t\t});\n\t\t\t\t\t\timage.src = url;\n\t\t\t\t\t});\n\t\t\t\t})\n\t\t\t);\n\t\t})\n\t\t.then(images => {\n\t\t\timages.forEach(image => {\n\t\t\t\tdocument.body.appendChild(image);\n\t\t\t});\n\t\t});\n};\n\ngetAccessToken();\n\n\n//# sourceURL=webpack:///./theProject.js?");

/***/ })

/******/ });
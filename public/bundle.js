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

eval("// SPOTIFY API DATA\n// Fetch API - Promise based\n\nconst coded = btoa(\n  \"40321916cd0e44878a981cab0fc9d7f0:36c4adc0ada9408e8570b9957f17ae70\"\n);\n\nfetch(\"https://accounts.spotify.com/api/token\", {\n  method: \"POST\",\n  headers: {\n    // 'Content-Type': 'application/json'\n    \"Content-Type\": \"application/x-www-form-urlencoded\",\n    Authorization:\n      \"Basic NDAzMjE5MTZjZDBlNDQ4NzhhOTgxY2FiMGZjOWQ3ZjA6MzZjNGFkYzBhZGE5NDA4ZTg1NzBiOTk1N2YxN2FlNzA=\"\n  },\n  body: [\"grant_type=client_credentials\"]\n})\n  .then(response => response.json())\n  .then(data => {\n    console.log(data);\n    return data;\n  })\n  .then(formatted => {\n    fetchData(formatted.access_token);\n  });\n\nconst fetchData = accessToken => {\n  fetch(\"https://api.spotify.com/v1/search?q=michael+jackson&type=album\", {\n    method: \"GET\",\n    headers: {\n      // 'Content-Type': 'application/json'\n      \"Content-Type\": \"application/x-www-form-urlencoded\",\n      Authorization: `Bearer ${accessToken}`\n    }\n  })\n    .then(response => response.json())\n    .then(data => console.log(data));\n};\n\n\n//# sourceURL=webpack:///./theProject.js?");

/***/ })

/******/ });
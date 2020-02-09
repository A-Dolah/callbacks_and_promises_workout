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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./callback.js":
/*!*********************!*\
  !*** ./callback.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ? **********************SIMPLE CALLBACK FUNCTION**************\nconst addFunctionAsync = (x, y, cb) => {\n  cb(x + y);\n};\n// This return is unneccessary since it's not thins function that's interesting. It's the cb that is picking up some values, and then doing something with that.\nconst addFunctionAsync2 = (x, y, cb) => {\n  return cb(x + y);\n};\n\n// ? **************** A CALL STACK EXAMPLE *******************\n\nconst step1 = () => {\n  step2();\n};\n\nconst step2 = () => {\n  step3();\n};\n\nconst step3 = () => {\n  step4();\n};\n\nconst step4 = () => {\n  debugger;\n};\n\n// step1();\n\n// ? ************************ SETTIMEOUT ******************\n\n// ? EXAMPLE ONE - HOW SETTIMEOUT WORKS\nconst sync = () => {\n  setTimeout(deferred, 0); // Web API. setTimeout tells JS that do this later. Not now means that it's not in this stack. It's another stack.\n  console.log(\"sync\");\n};\nconst deferred = () => {\n  console.log(\"deferred\");\n};\n\n// sync();\n\n// ? EXAMPLE TWO - HOW CALLBACK FUNCTIONS WORK WITH SETTIMEOUT\n// Imagine that deferred has a value we want to get, but can't get it immediately. We can't access it immediately. Since doesnt exist here and now. Solution: sync needs a callback function! This is what callbacks are for - to do some work once a value is available.\n\nconst sync2 = callback => {\n  setTimeout(() => {\n    const res = deferred2();\n    callback(res);\n  }, 2000);\n}; // Web API. setTimeout takes a callback that describes what to do after 1 sec (in this case).\n\nconst deferred2 = () => {\n  // Deferred returns a value instead of logging it.\n  return \"deferred\";\n};\n\n// The callback function is constructed so that it can take a value. Once that value is available, we can pass it into the callback function.\n// sync2(result => {\n//   console.log(result);\n// });\n\n// ? EXAMPLE THREE- GETSALARY SYNCHRONOUS!\n\nfunction getSalarySync() {\n  return 33000;\n}\n\nfunction subtractTaxSync(salary) {\n  return salary * 0.75; // 5\n}\n\nfunction subtractRentSync(salary) {\n  return salary - 5000; // 7\n}\n\nfunction getDisposableIncomeSync() {\n  let salary = getSalarySync(); // 2\n  salary = subtractTaxSync(salary); // 4\n  salary = subtractRentSync(salary); // 6\n  return salary; // 8\n}\n\n// console.log(getDisposableIncomeSync()); // 1\n// console.log(\n//   \"THIS SHOULD LOG AFTER THE DISPSABLEINCOME, SINCE THE SETTIMEOUT DOESNT BLOCK THE THREAD\"\n// );\n\n// ? EXAMPLE THREE- GETSALARY IS SLOW!\n\n// Needs to take callback since we want to the async\nfunction getSalaryAsyncSimple(callback) {\n  // Simulating slow network. We open up the thread for other things to happen here.\n  setTimeout(() => {\n    callback(33000);\n  }, 1000);\n}\n\nfunction subtractTaxAsyncSimple(salary) {\n  return salary * 0.75;\n}\n\nfunction subtractRentAsyncSimple(salary) {\n  return salary - 5000;\n}\n\n// This needs a callback since getSalary takes time. So once getSalary is gets 3300, it takes that value as salary and performs the subtractTax and subtractRent syncronously. At the end we have a dispsable salary value, and we can call back to the function passed into getDisposableIncome. In that function we do what we need!\nfunction getDisposableIncomeAsyncSimple(callback) {\n  getSalaryAsyncSimple(salary => {\n    salary = subtractTaxAsyncSimple(salary);\n    salary = subtractRentAsyncSimple(salary);\n    callback(salary);\n  });\n}\n\n// getDisposableIncomeAsyncSimple(salary => {\n//   console.log(salary);\n// });\n// console.log(\n//   \"THIS SHOULD LOG BEFORE THE DISPSABLEINCOME, SINCE THE SETTIMEOUT DOESNT BLOCK THE THREAD\"\n// );\n\n// ? EXAMPLE THREE- EVERY STEP IS SLOW!\n\nfunction getSalaryAsyncNested(callback) {\n  setTimeout(() => {\n    // console.log(\"inside getSalary\");\n    callback(33000);\n  }, 1000);\n}\n\nfunction subtractTaxAsyncNested(salary, callback) {\n  setTimeout(() => {\n    // console.log(\"inside subtractTax\");\n    callback(salary * 0.75);\n  }, 1000);\n}\n\nfunction subtractRentAsyncNested(salary, callback) {\n  setTimeout(() => {\n    // console.log(\"inside subtractRent\");\n    callback(salary - 5000);\n  }, 1000);\n}\n\nfunction getDisposableIncomeAsyncNested(callback) {\n  getSalaryAsyncNested(salary1 => {\n    subtractTaxAsyncNested(salary1, salary2 => {\n      subtractRentAsyncNested(salary2, salary3 => {\n        callback(salary3);\n      });\n    });\n  });\n}\n\ngetDisposableIncomeAsyncNested(disposableIncome => {\n  console.log(disposableIncome);\n});\nconsole.log(\n  \"THIS SHOULD LOG BEFORE THE DISPSABLEINCOME, SINCE THE SETTIMEOUT DOESNT BLOCK THE THREAD\"\n);\n\n\n//# sourceURL=webpack:///./callback.js?");

/***/ }),

/***/ "./promises.js":
/*!*********************!*\
  !*** ./promises.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"WERE IN PROMISES YEY!!\");\n\n\n//# sourceURL=webpack:///./promises.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../callback.js */ \"./callback.js\");\n__webpack_require__(/*! ../promises.js */ \"./promises.js\");\n\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ })

/******/ });
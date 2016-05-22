/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by whisp_000 on 2016/5/22.
	 */
	'use strict';

	var _ModuleB = __webpack_require__(1);

	var moduleb = _interopRequireWildcard(_ModuleB);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	console.log(moduleb.result.a);
	console.log(moduleb.result.b);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by whisp_000 on 2016/5/22.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.result = undefined;

	var _moduleA = __webpack_require__(2);

	var moduleA = _interopRequireWildcard(_moduleA);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var a = moduleA.square(11); // 121
	var b = moduleA.diag(4, 3);
	var result = exports.result = {
	  a: a,
	  b: b
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by whisp_000 on 2016/5/22.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.square = square;
	exports.diag = diag;
	var sqrt = exports.sqrt = Math.sqrt;
	function square(x) {
	    return x * x;
	}
	function diag(x, y) {
	    return sqrt(square(x) + square(y));
	}

/***/ }
/******/ ]);
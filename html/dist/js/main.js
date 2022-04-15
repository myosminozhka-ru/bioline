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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  function burg() {
    var burgerWr = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-wrap'),
        burgerBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-btn'),
        burgerBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-body'),
        burgerCloseBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-close-btn');
    burgerBtn.on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(burgerWr).addClass('opened');
    });
    burgerCloseBtn.on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(burgerWr).removeClass('opened');
    });
  }

  burg();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.burger-btn').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.burger-body').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-wrap').removeClass('opened');
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_bl/main_bl.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/main_bl/main_bl.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");

smooth_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"].init(document.querySelector('.main_bl__chat--item'));

/***/ }),

/***/ "./src/blocks/modules/main_form/main_form.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_form/main_form.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // удалить при публикации

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_form__next').on('click', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_form__ques').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');
    } else {}

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_form__ques').toggleClass('active');
  });
}); // удалить при публикации

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var block_show = false;

  function scrollTracking() {
    if (block_show) {
      return false;
    }

    var wt = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    var wh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
    var et = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_form').offset().top;
    var eh = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_form').outerHeight();
    var dh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show = true; // Код анимации

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_form').addClass('abc2');
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    scrollTracking();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    scrollTracking();
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_map/main_map.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/main_map/main_map.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l--title').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l--pop').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l li').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('li').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('li').find('.main_map__l--pop').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l--cls').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l--pop').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l li').removeClass('active');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l--pp').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l--pop').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l li').removeClass('active');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.main_map__l--pop').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.main_map__l--title').length) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l--pop').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_map__l li').removeClass('active');
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.feedback').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrapper').addClass('opened');
    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrapper .icon-close').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrapper').removeClass('opened');
    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.form-wrapper-inner').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrapper').removeClass('opened');
    event.stopPropagation();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).keydown(function (event) {
    if (event.which == 27) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-wrapper').removeClass('opened');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_pref/main_pref.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_pref/main_pref.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sl13-js").slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 130,
    responsive: [{
      breakpoint: 1281,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 811,
      settings: {
        // dots: true,
        slidesToShow: 1
      }
    }]
  });

  function setEqualHeight(columns) {
    var tallestcolumn = 0,
        currentHeight = '';
    columns.each(function () {
      currentHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).height();

      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    setEqualHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".main_pref__text"));
    setEqualHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".main_pref__result"));
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_ques/main_ques.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_ques/main_ques.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_ques__name').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().toggleClass('active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_rev/main_rev.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/main_rev/main_rev.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sl1-js").slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 130,
    responsive: [{
      breakpoint: 1281,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 811,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_ser/main_ser.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/main_ser/main_ser.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



/**
 * lightgallery | 2.2.1 | September 4th 2021
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lgThumbnail = e();
}(undefined, function () {
  "use strict";

  var _t = function t() {
    return (_t = Object.assign || function (t) {
      for (var e, i = 1, s = arguments.length; i < s; i++) {
        for (var h in e = arguments[i]) {
          Object.prototype.hasOwnProperty.call(e, h) && (t[h] = e[h]);
        }
      }

      return t;
    }).apply(this, arguments);
  },
      e = {
    thumbnail: !0,
    animateThumb: !0,
    currentPagerPosition: "middle",
    alignThumbnails: "middle",
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 5,
    appendThumbnailsTo: ".lg-components",
    toggleThumb: !1,
    enableThumbDrag: !0,
    enableThumbSwipe: !0,
    thumbnailSwipeThreshold: 10,
    loadYouTubeThumbnail: !0,
    youTubeThumbSize: 1
  },
      i = "lgContainerResize",
      s = "lgUpdateSlides",
      h = "lgBeforeOpen",
      n = "lgBeforeSlide";

  return function () {
    function o(t, e) {
      return this.thumbOuterWidth = 0, this.thumbTotalWidth = 0, this.translateX = 0, this.thumbClickable = !1, this.core = t, this.$LG = e, this;
    }

    return o.prototype.init = function () {
      this.settings = _t(_t({}, e), this.core.settings), this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin), this.translateX = 0, this.setAnimateThumbStyles(), this.core.settings.allowMediaOverlap || (this.settings.toggleThumb = !1), this.settings.thumbnail && (this.build(), this.settings.animateThumb ? (this.settings.enableThumbDrag && this.enableThumbDrag(), this.settings.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toggleThumbBar(), this.thumbKeyPress());
    }, o.prototype.build = function () {
      var t = this;
      this.setThumbMarkup(), this.manageActiveClassOnSlideChange(), this.$lgThumb.first().on("click.lg touchend.lg", function (e) {
        var i = t.$LG(e.target);
        i.hasAttribute("data-lg-item-id") && setTimeout(function () {
          if (t.thumbClickable && !t.core.lgBusy) {
            var e = parseInt(i.attr("data-lg-item-id"));
            t.core.slide(e, !1, !0, !1);
          }
        }, 50);
      }), this.core.LGel.on(n + ".thumb", function (e) {
        var i = e.detail.index;
        t.animateThumb(i);
      }), this.core.LGel.on(h + ".thumb", function () {
        t.thumbOuterWidth = t.core.outer.get().offsetWidth;
      }), this.core.LGel.on(s + ".thumb", function () {
        t.rebuildThumbnails();
      }), this.core.LGel.on(i + ".thumb", function () {
        t.core.lgOpened && setTimeout(function () {
          t.thumbOuterWidth = t.core.outer.get().offsetWidth, t.animateThumb(t.core.index), t.thumbOuterWidth = t.core.outer.get().offsetWidth;
        }, 50);
      });
    }, o.prototype.setThumbMarkup = function () {
      var t = "lg-thumb-outer ";
      this.settings.alignThumbnails && (t += "lg-thumb-align-" + this.settings.alignThumbnails);
      var e = '<div class="' + t + '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
      this.core.outer.addClass("lg-has-thumb"), ".lg-components" === this.settings.appendThumbnailsTo ? this.core.$lgComponents.append(e) : this.core.outer.append(e), this.$thumbOuter = this.core.outer.find(".lg-thumb-outer").first(), this.$lgThumb = this.core.outer.find(".lg-thumb").first(), this.settings.animateThumb && this.core.outer.find(".lg-thumb").css("transition-duration", this.core.settings.speed + "ms").css("width", this.thumbTotalWidth + "px").css("position", "relative"), this.setThumbItemHtml(this.core.galleryItems);
    }, o.prototype.enableThumbDrag = function () {
      var t = this,
          e = {
        cords: {
          startX: 0,
          endX: 0
        },
        isMoved: !1,
        newTranslateX: 0,
        startTime: new Date(),
        endTime: new Date(),
        touchMoveTime: 0
      },
          i = !1;
      this.$thumbOuter.addClass("lg-grab"), this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb", function (s) {
        t.thumbTotalWidth > t.thumbOuterWidth && (s.preventDefault(), e.cords.startX = s.pageX, e.startTime = new Date(), t.thumbClickable = !1, i = !0, t.core.outer.get().scrollLeft += 1, t.core.outer.get().scrollLeft -= 1, t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
      }), this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function (s) {
        t.core.lgOpened && i && (e.cords.endX = s.pageX, e = t.onThumbTouchMove(e));
      }), this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function () {
        t.core.lgOpened && (e.isMoved ? e = t.onThumbTouchEnd(e) : t.thumbClickable = !0, i && (i = !1, t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")));
      });
    }, o.prototype.enableThumbSwipe = function () {
      var t = this,
          e = {
        cords: {
          startX: 0,
          endX: 0
        },
        isMoved: !1,
        newTranslateX: 0,
        startTime: new Date(),
        endTime: new Date(),
        touchMoveTime: 0
      };
      this.$lgThumb.on("touchstart.lg", function (i) {
        t.thumbTotalWidth > t.thumbOuterWidth && (i.preventDefault(), e.cords.startX = i.targetTouches[0].pageX, t.thumbClickable = !1, e.startTime = new Date());
      }), this.$lgThumb.on("touchmove.lg", function (i) {
        t.thumbTotalWidth > t.thumbOuterWidth && (i.preventDefault(), e.cords.endX = i.targetTouches[0].pageX, e = t.onThumbTouchMove(e));
      }), this.$lgThumb.on("touchend.lg", function () {
        e.isMoved ? e = t.onThumbTouchEnd(e) : t.thumbClickable = !0;
      });
    }, o.prototype.rebuildThumbnails = function () {
      var t = this;
      this.$thumbOuter.addClass("lg-rebuilding-thumbnails"), setTimeout(function () {
        t.thumbTotalWidth = t.core.galleryItems.length * (t.settings.thumbWidth + t.settings.thumbMargin), t.$lgThumb.css("width", t.thumbTotalWidth + "px"), t.$lgThumb.empty(), t.setThumbItemHtml(t.core.galleryItems), t.animateThumb(t.core.index);
      }, 50), setTimeout(function () {
        t.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
      }, 200);
    }, o.prototype.setTranslate = function (t) {
      this.$lgThumb.css("transform", "translate3d(-" + t + "px, 0px, 0px)");
    }, o.prototype.getPossibleTransformX = function (t) {
      return t > this.thumbTotalWidth - this.thumbOuterWidth && (t = this.thumbTotalWidth - this.thumbOuterWidth), t < 0 && (t = 0), t;
    }, o.prototype.animateThumb = function (t) {
      if (this.$lgThumb.css("transition-duration", this.core.settings.speed + "ms"), this.settings.animateThumb) {
        var e = 0;

        switch (this.settings.currentPagerPosition) {
          case "left":
            e = 0;
            break;

          case "middle":
            e = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
            break;

          case "right":
            e = this.thumbOuterWidth - this.settings.thumbWidth;
        }

        this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * t - 1 - e, this.translateX > this.thumbTotalWidth - this.thumbOuterWidth && (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth), this.translateX < 0 && (this.translateX = 0), this.setTranslate(this.translateX);
      }
    }, o.prototype.onThumbTouchMove = function (t) {
      return t.newTranslateX = this.translateX, t.isMoved = !0, t.touchMoveTime = new Date().valueOf(), t.newTranslateX -= t.cords.endX - t.cords.startX, t.newTranslateX = this.getPossibleTransformX(t.newTranslateX), this.setTranslate(t.newTranslateX), this.$thumbOuter.addClass("lg-dragging"), t;
    }, o.prototype.onThumbTouchEnd = function (t) {
      t.isMoved = !1, t.endTime = new Date(), this.$thumbOuter.removeClass("lg-dragging");
      var e = t.endTime.valueOf() - t.startTime.valueOf(),
          i = t.cords.endX - t.cords.startX,
          s = Math.abs(i) / e;
      return s > .15 && t.endTime.valueOf() - t.touchMoveTime < 30 ? ((s += 1) > 2 && (s += 1), s += s * (Math.abs(i) / this.thumbOuterWidth), this.$lgThumb.css("transition-duration", Math.min(s - 1, 2) + "settings"), i *= s, this.translateX = this.getPossibleTransformX(this.translateX - i), this.setTranslate(this.translateX)) : this.translateX = t.newTranslateX, Math.abs(t.cords.endX - t.cords.startX) < this.settings.thumbnailSwipeThreshold && (this.thumbClickable = !0), t;
    }, o.prototype.getThumbHtml = function (t, e) {
      var i,
          s = this.core.galleryItems[e].__slideVideoInfo || {};
      return i = s.youtube && this.settings.loadYouTubeThumbnail ? "//img.youtube.com/vi/" + s.youtube[1] + "/" + this.settings.youTubeThumbSize + ".jpg" : t, '<div data-lg-item-id="' + e + '" class="lg-thumb-item ' + (e === this.core.index ? " active" : "") + '" \n        style="width:' + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + 'px;">\n            <img data-lg-item-id="' + e + '" src="' + i + '" />\n        </div>';
    }, o.prototype.getThumbItemHtml = function (t) {
      for (var e = "", i = 0; i < t.length; i++) {
        e += this.getThumbHtml(t[i].thumb, i);
      }

      return e;
    }, o.prototype.setThumbItemHtml = function (t) {
      var e = this.getThumbItemHtml(t);
      this.$lgThumb.html(e);
    }, o.prototype.setAnimateThumbStyles = function () {
      this.settings.animateThumb && this.core.outer.addClass("lg-animate-thumb");
    }, o.prototype.manageActiveClassOnSlideChange = function () {
      var t = this;
      this.core.LGel.on(n + ".thumb", function (e) {
        var i = t.core.outer.find(".lg-thumb-item"),
            s = e.detail.index;
        i.removeClass("active"), i.eq(s).addClass("active");
      });
    }, o.prototype.toggleThumbBar = function () {
      var t = this;
      this.settings.toggleThumb && (this.core.outer.addClass("lg-can-toggle"), this.core.$toolbar.append('<button type="button" aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>'), this.core.outer.find(".lg-toggle-thumb").first().on("click.lg", function () {
        t.core.outer.toggleClass("lg-components-open");
      }));
    }, o.prototype.thumbKeyPress = function () {
      var t = this;
      this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function (e) {
        t.core.lgOpened && t.settings.toggleThumb && (38 === e.keyCode ? (e.preventDefault(), t.core.outer.addClass("lg-components-open")) : 40 === e.keyCode && (e.preventDefault(), t.core.outer.removeClass("lg-components-open")));
      });
    }, o.prototype.destroy = function () {
      this.settings.thumbnail && (this.$LG(window).off(".lg.thumb.global" + this.core.lgId), this.core.LGel.off(".lg.thumb"), this.core.LGel.off(".thumb"), this.$thumbOuter.remove(), this.core.outer.removeClass("lg-has-thumb"));
    }, o;
  }();
});
/**
 * lightgallery | 2.2.1 | September 4th 2021
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lgZoom = e();
}(undefined, function () {
  "use strict";

  var _t2 = function t() {
    return (_t2 = Object.assign || function (t) {
      for (var e, o = 1, i = arguments.length; o < i; o++) {
        for (var s in e = arguments[o]) {
          Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
        }
      }

      return t;
    }).apply(this, arguments);
  },
      e = {
    scale: 1,
    zoom: !0,
    actualSize: !0,
    showZoomInOutIcons: !1,
    actualSizeIcons: {
      zoomIn: "lg-zoom-in",
      zoomOut: "lg-zoom-out"
    },
    enableZoomAfter: 300
  },
      o = "lgContainerResize",
      i = "lgBeforeOpen",
      s = "lgAfterOpen",
      a = "lgSlideItemLoad",
      r = "lgAfterSlide",
      n = "lgRotateLeft",
      l = "lgRotateRight",
      g = "lgFlipHorizontal",
      c = "lgFlipVertical";

  return function () {
    function h(o, i) {
      return this.core = o, this.$LG = i, this.settings = _t2(_t2({}, e), this.core.settings), this;
    }

    return h.prototype.buildTemplates = function () {
      var t = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="Zoom in" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="Zoom out" class="lg-zoom-out lg-icon"></button>' : "";
      this.settings.actualSize && (t += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="View actual size" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>'), this.core.outer.addClass("lg-use-transition-for-zoom"), this.core.$toolbar.first().append(t);
    }, h.prototype.enableZoom = function (t) {
      var e = this,
          o = this.settings.enableZoomAfter + t.detail.delay;
      this.$LG("body").first().hasClass("lg-from-hash") && t.detail.delay ? o = 0 : this.$LG("body").first().removeClass("lg-from-hash"), this.zoomableTimeout = setTimeout(function () {
        e.isImageSlide() && (e.core.getSlideItem(t.detail.index).addClass("lg-zoomable"), t.detail.index === e.core.index && e.setZoomEssentials());
      }, o + 30);
    }, h.prototype.enableZoomOnSlideItemLoad = function () {
      this.core.LGel.on(a + ".zoom", this.enableZoom.bind(this));
    }, h.prototype.getModifier = function (t, e, o) {
      var i = t;
      t = Math.abs(t);
      var s = this.getCurrentTransform(o);
      if (!s) return 1;
      var a = 1;

      if ("X" === e) {
        var r = Math.sign(parseFloat(s[0]));
        0 === t || 180 === t ? a = 1 : 90 === t && (a = -90 === i && 1 === r || 90 === i && -1 === r ? -1 : 1), a *= r;
      } else {
        var n = Math.sign(parseFloat(s[3]));
        if (0 === t || 180 === t) a = 1;else if (90 === t) {
          var l = parseFloat(s[1]),
              g = parseFloat(s[2]);
          a = Math.sign(l * g * i * n);
        }
        a *= n;
      }

      return a;
    }, h.prototype.getImageSize = function (t, e, o) {
      return 90 === Math.abs(e) && (o = "x" === o ? "y" : "x"), t[{
        y: "offsetHeight",
        x: "offsetWidth"
      }[o]];
    }, h.prototype.getDragCords = function (t, e) {
      return 90 === e ? {
        x: t.pageY,
        y: t.pageX
      } : {
        x: t.pageX,
        y: t.pageY
      };
    }, h.prototype.getSwipeCords = function (t, e) {
      var o = t.targetTouches[0].pageX,
          i = t.targetTouches[0].pageY;
      return 90 === e ? {
        x: i,
        y: o
      } : {
        x: o,
        y: i
      };
    }, h.prototype.getDragAllowedAxises = function (t, e) {
      e = e || this.scale || 1;
      var o = this.imageYSize * e > this.containerRect.height,
          i = this.imageXSize * e > this.containerRect.width;
      return 90 === t ? {
        allowX: o,
        allowY: i
      } : {
        allowX: i,
        allowY: o
      };
    }, h.prototype.getCurrentTransform = function (t) {
      if (t) {
        var e = window.getComputedStyle(t, null),
            o = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform") || "none";
        return "none" !== o ? o.split("(")[1].split(")")[0].split(",") : void 0;
      }
    }, h.prototype.getCurrentRotation = function (t) {
      if (!t) return 0;
      var e = this.getCurrentTransform(t);
      return e ? Math.round(Math.atan2(parseFloat(e[1]), parseFloat(e[0])) * (180 / Math.PI)) : 0;
    }, h.prototype.setZoomEssentials = function () {
      var t = this.core.getSlideItem(this.core.index).find(".lg-image").first(),
          e = this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get();
      this.rotateValue = this.getCurrentRotation(e), this.imageYSize = this.getImageSize(t.get(), this.rotateValue, "y"), this.imageXSize = this.getImageSize(t.get(), this.rotateValue, "x"), this.containerRect = this.core.outer.get().getBoundingClientRect(), this.modifierX = this.getModifier(this.rotateValue, "X", e), this.modifierY = this.getModifier(this.rotateValue, "Y", e);
    }, h.prototype.zoomImage = function (t) {
      var e,
          o,
          i = (this.containerRect.width - this.imageXSize) / 2 + this.containerRect.left,
          s = this.core.mediaContainerPosition,
          a = s.top,
          r = s.bottom,
          n = Math.abs(a - r) / 2,
          l = (this.containerRect.height - this.imageYSize - n * this.modifierX) / 2 + this.scrollTop + this.containerRect.top;
      1 === t && (this.positionChanged = !1);
      var g = this.getDragAllowedAxises(Math.abs(this.rotateValue), t),
          c = g.allowY,
          h = g.allowX;
      this.positionChanged && (e = this.left / (this.scale - 1), o = this.top / (this.scale - 1), this.pageX = Math.abs(e) + i, this.pageY = Math.abs(o) + l, this.positionChanged = !1);
      var m = this.getPossibleSwipeDragCords(this.rotateValue, t),
          u = (t - 1) * (i - this.pageX),
          d = (t - 1) * (l - this.pageY);
      h ? this.isBeyondPossibleLeft(u, m.minX) ? u = m.minX : this.isBeyondPossibleRight(u, m.maxX) && (u = m.maxX) : t > 1 && (u < m.minX ? u = m.minX : u > m.maxX && (u = m.maxX)), c ? this.isBeyondPossibleTop(d, m.minY) ? d = m.minY : this.isBeyondPossibleBottom(d, m.maxY) && (d = m.maxY) : t > 1 && (d < m.minY ? d = m.minY : d > m.maxY && (d = m.maxY)), this.setZoomStyles({
        x: u,
        y: d,
        scale: t
      });
    }, h.prototype.setZoomStyles = function (t) {
      var e = this.core.getSlideItem(this.core.index).find(".lg-image").first(),
          o = this.core.outer.find(".lg-current .lg-dummy-img").first(),
          i = e.parent();
      this.scale = t.scale, e.css("transform", "scale3d(" + t.scale + ", " + t.scale + ", 1)"), o.css("transform", "scale3d(" + t.scale + ", " + t.scale + ", 1)");
      var s = "translate3d(" + t.x + "px, " + t.y + "px, 0)";
      i.css("transform", s), this.left = t.x, this.top = t.y;
    }, h.prototype.setActualSize = function (t, e) {
      var o = this;

      if (this.isImageSlide() && !this.core.outer.hasClass("lg-first-slide-loading")) {
        var i = this.getCurrentImageActualSizeScale();
        this.core.outer.hasClass("lg-zoomed") ? this.scale = 1 : this.scale = this.getScale(i), this.setPageCords(e), this.beginZoom(this.scale), this.zoomImage(this.scale), setTimeout(function () {
          o.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
        }, 10);
      }
    }, h.prototype.getNaturalWidth = function (t) {
      var e = this.core.getSlideItem(t).find(".lg-image").first(),
          o = this.core.galleryItems[t].width;
      return o ? parseFloat(o) : e.get().naturalWidth;
    }, h.prototype.getActualSizeScale = function (t, e) {
      return t > e ? t / e || 2 : 1;
    }, h.prototype.getCurrentImageActualSizeScale = function () {
      var t = this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,
          e = this.getNaturalWidth(this.core.index) || t;
      return this.getActualSizeScale(e, t);
    }, h.prototype.getPageCords = function (t) {
      var e = {};
      if (t) e.x = t.pageX || t.targetTouches[0].pageX, e.y = t.pageY || t.targetTouches[0].pageY;else {
        var o = this.core.outer.get().getBoundingClientRect();
        e.x = o.width / 2 + o.left, e.y = o.height / 2 + this.scrollTop + o.top;
      }
      return e;
    }, h.prototype.setPageCords = function (t) {
      var e = this.getPageCords(t);
      this.pageX = e.x, this.pageY = e.y;
    }, h.prototype.beginZoom = function (t) {
      (this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), t > 1) ? (this.core.outer.addClass("lg-zoomed"), this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)) : this.resetZoom();
      return t > 1;
    }, h.prototype.getScale = function (t) {
      var e = this.getCurrentImageActualSizeScale();
      return t < 1 ? t = 1 : t > e && (t = e), t;
    }, h.prototype.init = function () {
      var t = this;

      if (this.settings.zoom) {
        this.buildTemplates(), this.enableZoomOnSlideItemLoad();
        var e = null;
        this.core.outer.on("dblclick.lg", function (e) {
          t.$LG(e.target).hasClass("lg-image") && t.setActualSize(t.core.index, e);
        }), this.core.outer.on("touchstart.lg", function (o) {
          var i = t.$LG(o.target);
          1 === o.targetTouches.length && i.hasClass("lg-image") && (e ? (clearTimeout(e), e = null, o.preventDefault(), t.setActualSize(t.core.index, o)) : e = setTimeout(function () {
            e = null;
          }, 300));
        }), this.core.LGel.on(o + ".zoom " + l + ".zoom " + n + ".zoom " + g + ".zoom " + c + ".zoom", function () {
          t.core.lgOpened && t.isImageSlide() && (t.setPageCords(), t.setZoomEssentials(), t.zoomImage(t.scale));
        }), this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function () {
          t.core.lgOpened && (t.scrollTop = t.$LG(window).scrollTop());
        }), this.core.getElementById("lg-zoom-out").on("click.lg", function () {
          t.core.outer.find(".lg-current .lg-image").get() && (t.scale -= t.settings.scale, t.scale = t.getScale(t.scale), t.beginZoom(t.scale), t.zoomImage(t.scale));
        }), this.core.getElementById("lg-zoom-in").on("click.lg", function () {
          t.zoomIn();
        }), this.core.getElementById("lg-actual-size").on("click.lg", function () {
          t.setActualSize(t.core.index);
        }), this.core.LGel.on(i + ".zoom", function () {
          t.core.outer.find(".lg-item").removeClass("lg-zoomable");
        }), this.core.LGel.on(s + ".zoom", function () {
          t.scrollTop = t.$LG(window).scrollTop(), t.pageX = t.core.outer.width() / 2, t.pageY = t.core.outer.height() / 2 + t.scrollTop, t.scale = 1;
        }), this.core.LGel.on(r + ".zoom", function (e) {
          var o = e.detail.prevIndex;
          t.scale = 1, t.positionChanged = !1, t.resetZoom(o), t.isImageSlide() && t.setZoomEssentials();
        }), this.zoomDrag(), this.pinchZoom(), this.zoomSwipe(), this.zoomableTimeout = !1, this.positionChanged = !1;
      }
    }, h.prototype.zoomIn = function (t) {
      this.isImageSlide() && (t ? this.scale = t : this.scale += this.settings.scale, this.scale = this.getScale(this.scale), this.beginZoom(this.scale), this.zoomImage(this.scale));
    }, h.prototype.resetZoom = function (t) {
      this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
      var e = this.core.getElementById("lg-actual-size"),
          o = this.core.getSlideItem(void 0 !== t ? t : this.core.index);
      e.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn), o.find(".lg-img-wrap").first().removeAttr("style"), o.find(".lg-image").first().removeAttr("style"), this.scale = 1, this.left = 0, this.top = 0, this.setPageCords();
    }, h.prototype.getTouchDistance = function (t) {
      return Math.sqrt((t.targetTouches[0].pageX - t.targetTouches[1].pageX) * (t.targetTouches[0].pageX - t.targetTouches[1].pageX) + (t.targetTouches[0].pageY - t.targetTouches[1].pageY) * (t.targetTouches[0].pageY - t.targetTouches[1].pageY));
    }, h.prototype.pinchZoom = function () {
      var t = this,
          e = 0,
          o = !1,
          i = 1,
          s = this.core.getSlideItem(this.core.index);
      this.core.$inner.on("touchstart.lg", function (o) {
        s = t.core.getSlideItem(t.core.index), t.isImageSlide() && (2 !== o.targetTouches.length || t.core.outer.hasClass("lg-first-slide-loading") || !t.$LG(o.target).hasClass("lg-item") && !s.get().contains(o.target) || (i = t.scale || 1, t.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), t.core.touchAction = "pinch", e = t.getTouchDistance(o)));
      }), this.core.$inner.on("touchmove.lg", function (a) {
        if (2 === a.targetTouches.length && "pinch" === t.core.touchAction && (t.$LG(a.target).hasClass("lg-item") || s.get().contains(a.target))) {
          a.preventDefault();
          var r = t.getTouchDistance(a),
              n = e - r;
          !o && Math.abs(n) > 5 && (o = !0), o && (t.scale = Math.max(1, i + .008 * -n), t.zoomImage(t.scale));
        }
      }), this.core.$inner.on("touchend.lg", function (i) {
        "pinch" === t.core.touchAction && (t.$LG(i.target).hasClass("lg-item") || s.get().contains(i.target)) && (o = !1, e = 0, t.scale <= 1 ? t.resetZoom() : (t.scale = t.getScale(t.scale), t.zoomImage(t.scale), t.core.outer.addClass("lg-zoomed")), t.core.touchAction = void 0);
      });
    }, h.prototype.touchendZoom = function (t, e, o, i, s, a) {
      var r = e.x - t.x,
          n = e.y - t.y,
          l = Math.abs(r) / s + 1,
          g = Math.abs(n) / s + 1;
      l > 2 && (l += 1), g > 2 && (g += 1), r *= l, n *= g;
      var c = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),
          h = {};
      h.x = this.left + r * this.modifierX, h.y = this.top + n * this.modifierY;
      var m = this.getPossibleSwipeDragCords(a);
      (Math.abs(r) > 15 || Math.abs(n) > 15) && (i && (this.isBeyondPossibleTop(h.y, m.minY) ? h.y = m.minY : this.isBeyondPossibleBottom(h.y, m.maxY) && (h.y = m.maxY)), o && (this.isBeyondPossibleLeft(h.x, m.minX) ? h.x = m.minX : this.isBeyondPossibleRight(h.x, m.maxX) && (h.x = m.maxX)), i ? this.top = h.y : h.y = this.top, o ? this.left = h.x : h.x = this.left, this.setZoomSwipeStyles(c, h), this.positionChanged = !0);
    }, h.prototype.getZoomSwipeCords = function (t, e, o, i, s) {
      var a = {};

      if (i) {
        if (a.y = this.top + (e.y - t.y) * this.modifierY, this.isBeyondPossibleTop(a.y, s.minY)) {
          var r = s.minY - a.y;
          a.y = s.minY - r / 6;
        } else if (this.isBeyondPossibleBottom(a.y, s.maxY)) {
          var n = a.y - s.maxY;
          a.y = s.maxY + n / 6;
        }
      } else a.y = this.top;

      if (o) {
        if (a.x = this.left + (e.x - t.x) * this.modifierX, this.isBeyondPossibleLeft(a.x, s.minX)) {
          var l = s.minX - a.x;
          a.x = s.minX - l / 6;
        } else if (this.isBeyondPossibleRight(a.x, s.maxX)) {
          var g = a.x - s.maxX;
          a.x = s.maxX + g / 6;
        }
      } else a.x = this.left;

      return a;
    }, h.prototype.isBeyondPossibleLeft = function (t, e) {
      return t >= e;
    }, h.prototype.isBeyondPossibleRight = function (t, e) {
      return t <= e;
    }, h.prototype.isBeyondPossibleTop = function (t, e) {
      return t >= e;
    }, h.prototype.isBeyondPossibleBottom = function (t, e) {
      return t <= e;
    }, h.prototype.isImageSlide = function () {
      var t = this.core.galleryItems[this.core.index];
      return "image" === this.core.getSlideType(t);
    }, h.prototype.getPossibleSwipeDragCords = function (t, e) {
      var o = e || this.scale || 1,
          i = Math.abs(o),
          s = this.core.mediaContainerPosition,
          a = s.top,
          r = s.bottom,
          n = Math.abs(a - r) / 2,
          l = (this.imageYSize - this.containerRect.height) / 2 + n * this.modifierX,
          g = this.containerRect.height - this.imageYSize * i + l,
          c = (this.imageXSize - this.containerRect.width) / 2,
          h = this.containerRect.width - this.imageXSize * i + c,
          m = {
        minY: l,
        maxY: g,
        minX: c,
        maxX: h
      };
      return 90 === Math.abs(t) && (m = {
        minY: c,
        maxY: h,
        minX: l,
        maxX: g
      }), m;
    }, h.prototype.setZoomSwipeStyles = function (t, e) {
      t.css("transform", "translate3d(" + e.x + "px, " + e.y + "px, 0)");
    }, h.prototype.zoomSwipe = function () {
      var t,
          e,
          o = this,
          i = {},
          s = {},
          a = !1,
          r = !1,
          n = !1,
          l = new Date(),
          g = (new Date(), this.core.getSlideItem(this.core.index));
      this.core.$inner.on("touchstart.lg", function (s) {
        if (o.isImageSlide() && (g = o.core.getSlideItem(o.core.index), (o.$LG(s.target).hasClass("lg-item") || g.get().contains(s.target)) && 1 === s.targetTouches.length && o.core.outer.hasClass("lg-zoomed"))) {
          s.preventDefault(), l = new Date(), o.core.touchAction = "zoomSwipe", e = o.core.getSlideItem(o.core.index).find(".lg-img-wrap").first();
          var a = o.getDragAllowedAxises(Math.abs(o.rotateValue));
          n = a.allowY, ((r = a.allowX) || n) && (i = o.getSwipeCords(s, Math.abs(o.rotateValue))), t = o.getPossibleSwipeDragCords(o.rotateValue), o.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition");
        }
      }), this.core.$inner.on("touchmove.lg", function (l) {
        if (1 === l.targetTouches.length && "zoomSwipe" === o.core.touchAction && (o.$LG(l.target).hasClass("lg-item") || g.get().contains(l.target))) {
          l.preventDefault(), o.core.touchAction = "zoomSwipe", s = o.getSwipeCords(l, Math.abs(o.rotateValue));
          var c = o.getZoomSwipeCords(i, s, r, n, t);
          (Math.abs(s.x - i.x) > 15 || Math.abs(s.y - i.y) > 15) && (a = !0, o.setZoomSwipeStyles(e, c));
        }
      }), this.core.$inner.on("touchend.lg", function (t) {
        if ("zoomSwipe" === o.core.touchAction && (o.$LG(t.target).hasClass("lg-item") || g.get().contains(t.target))) {
          if (o.core.touchAction = void 0, o.core.outer.removeClass("lg-zoom-dragging"), !a) return;
          a = !1;
          var e = new Date().valueOf() - l.valueOf();
          o.touchendZoom(i, s, r, n, e, o.rotateValue);
        }
      });
    }, h.prototype.zoomDrag = function () {
      var t,
          e,
          o,
          i,
          s = this,
          a = {},
          r = {},
          n = !1,
          l = !1,
          g = !1,
          c = !1;
      this.core.outer.on("mousedown.lg.zoom", function (e) {
        if (s.isImageSlide()) {
          var r = s.core.getSlideItem(s.core.index);

          if (s.$LG(e.target).hasClass("lg-item") || r.get().contains(e.target)) {
            t = new Date(), i = s.core.getSlideItem(s.core.index).find(".lg-img-wrap").first();
            var l = s.getDragAllowedAxises(Math.abs(s.rotateValue));
            c = l.allowY, g = l.allowX, s.core.outer.hasClass("lg-zoomed") && s.$LG(e.target).hasClass("lg-object") && (g || c) && (e.preventDefault(), a = s.getDragCords(e, Math.abs(s.rotateValue)), o = s.getPossibleSwipeDragCords(s.rotateValue), n = !0, s.core.outer.get().scrollLeft += 1, s.core.outer.get().scrollLeft -= 1, s.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"));
          }
        }
      }), this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function (t) {
        if (n) {
          l = !0, r = s.getDragCords(t, Math.abs(s.rotateValue));
          var e = s.getZoomSwipeCords(a, r, g, c, o);
          s.setZoomSwipeStyles(i, e);
        }
      }), this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function (o) {
        if (n) {
          if (e = new Date(), n = !1, s.core.outer.removeClass("lg-zoom-dragging"), l && (a.x !== r.x || a.y !== r.y)) {
            r = s.getDragCords(o, Math.abs(s.rotateValue));
            var i = e.valueOf() - t.valueOf();
            s.touchendZoom(a, r, g, c, i, s.rotateValue);
          }

          l = !1;
        }

        s.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
      });
    }, h.prototype.closeGallery = function () {
      this.resetZoom();
    }, h.prototype.destroy = function () {
      this.$LG(window).off(".lg.zoom.global" + this.core.lgId), this.core.LGel.off(".lg.zoom"), this.core.LGel.off(".zoom"), clearTimeout(this.zoomableTimeout), this.zoomableTimeout = !1;
    }, h;
  }();
});
Object(lightgallery__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById('lightgallery'), {
  speed: 500,
  selector: 'a'
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sl2-js").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 1281,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 811,
      settings: {
        dots: true,
        slidesToShow: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/blocks/modules/main_sl/main_sl.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/main_sl/main_sl.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var block_show2 = false;

  function scrollTracking() {
    if (block_show2) {
      return false;
    }

    var wt = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
    var wh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
    var et = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_sl__title').offset().top;
    var eh = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_sl__title').outerHeight();
    var dh = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show2 = true; // Код анимации

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_sl__title').addClass('abc');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sl25-js").slick({
        dots: true,
        infinite: true,
        speed: 4000,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        vertical: true,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            vertical: false
          }
        }]
      });
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    scrollTracking();
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_wrk/main_wrk.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/main_wrk/main_wrk.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sl3-js").slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 130,
    responsive: [{
      breakpoint: 1281,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 811,
      settings: {
        // dots: true,
        slidesToShow: 1
      }
    }]
  });
});

/***/ }),

/***/ "./src/blocks/modules/step/step.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/step/step.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_main_sl_main_sl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main_sl/main_sl */ "./src/blocks/modules/main_sl/main_sl.js");
/* harmony import */ var _modules_main_bl_main_bl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main_bl/main_bl */ "./src/blocks/modules/main_bl/main_bl.js");
/* harmony import */ var _modules_main_form_main_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/main_form/main_form */ "./src/blocks/modules/main_form/main_form.js");
/* harmony import */ var _modules_step_step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/step/step */ "./src/blocks/modules/step/step.js");
/* harmony import */ var _modules_step_step__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_step_step__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_main_pref_main_pref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/main_pref/main_pref */ "./src/blocks/modules/main_pref/main_pref.js");
/* harmony import */ var _modules_main_wrk_main_wrk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/main_wrk/main_wrk */ "./src/blocks/modules/main_wrk/main_wrk.js");
/* harmony import */ var _modules_main_ser_main_ser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/main_ser/main_ser */ "./src/blocks/modules/main_ser/main_ser.js");
/* harmony import */ var _modules_main_rev_main_rev__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/main_rev/main_rev */ "./src/blocks/modules/main_rev/main_rev.js");
/* harmony import */ var _modules_main_map_main_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/main_map/main_map */ "./src/blocks/modules/main_map/main_map.js");
/* harmony import */ var _modules_main_ques_main_ques__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/main_ques/main_ques */ "./src/blocks/modules/main_ques/main_ques.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_11__);













/***/ }),

/***/ "./src/js/import/skroll.min.js":
/*!*************************************!*\
  !*** ./src/js/import/skroll.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* Skroll v2.0.1, akzhy.com/shelf/skroll | github.com/akzhy/skroll */
Skroll = function Skroll(t) {
  this.settings = t || {}, this.settings.mobile = void 0 !== this.settings.mobile && this.settings.mobile, this.referenceElement = void 0 === this.settings.reference ? window : this.get(this.settings.reference)[0], this.elements = [], this.data = {}, this.animations = {
    zoomIn: {
      start: function start(t) {
        t.style.transform = "scale(.1,.1)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "scale(1,1)", t.style.opacity = 1;
      }
    },
    fadeInLeft: {
      start: function start(t) {
        t.style.transform = "translate(-50%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInRight: {
      start: function start(t) {
        t.style.transform = "translate(50%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInLeftBig: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInRightBig: {
      start: function start(t) {
        t.style.transform = "translate(100%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInUp: {
      start: function start(t) {
        t.style.transform = "translate(0,50%)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0,0%)", t.style.opacity = 1;
      }
    },
    fadeInDown: {
      start: function start(t) {
        t.style.transform = "translate(0,-50%)", t.style.opacity = 0, t.style.height = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0,0%)", t.style.opacity = 1, t.style.height = 'max-content';
      }
    },
    slideInLeft: {
      start: function start(t) {
        t.style.transform = "translate(-50%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    slideInLeftBig: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    slideInRight: {
      start: function start(t) {
        t.style.transform = "translate(50%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    slideInRightBig: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    flipInX: {
      start: function start(t) {
        t.style.transform = "rotateX(90deg)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotateX(0deg)", t.style.opacity = 1;
      }
    },
    flipInY: {
      start: function start(t) {
        t.style.transform = "rotateY(90deg)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotateY(0deg)", t.style.opacity = 1;
      }
    },
    rotateRightIn: {
      start: function start(t) {
        t.style.transform = "rotate(45deg)", t.style["transform-origin"] = "0 100%", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotate(0deg)", t.style.opacity = 1;
      }
    },
    rotateLeftIn: {
      start: function start(t) {
        t.style.transform = "rotate(-45deg)", t.style["transform-origin"] = "0 100%", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotate(0deg)", t.style.opacity = 1;
      }
    },
    growInLeft: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0) scale(.1,.1)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    growInRight: {
      start: function start(t) {
        t.style.transform = "translate(100%,0) scale(.1,.1)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    }
  };
}, Skroll.prototype.get = function (t) {
  return document.querySelectorAll(t);
}, Skroll.prototype.inViewport = function (t, e) {
  var n, a, s, i, o;
  if (this.referenceElement == window) n = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0), s = (a = this.data[t.getAttribute("data-skroll-id")].top) + t.offsetHeight, i = n + screen.availHeight * e.triggerTop, o = n + screen.availHeight * e.triggerBottom;else {
    var r = this.referenceElement;
    n = r.scrollTop, s = (a = this.data[t.getAttribute("data-skroll-id")].top) + t.offsetHeight, i = n + r.offsetHeight * e.triggerTop, o = n + r.offsetHeight * e.triggerBottom;
  }
  return s > i && a < o;
}, Skroll.prototype.getScrollStatus = function (t, e) {
  return this.inViewport(t, e) ? (this.data[t.getAttribute("data-skroll-id")].inView = !0, {
    action: "enter",
    data: {
      shown: this.data[t.getAttribute("data-skroll-id")].shown
    }
  }) : this.data[t.getAttribute("data-skroll-id")].inView ? (this.data[t.getAttribute("data-skroll-id")].inView = !1, {
    action: "leave",
    data: {
      shown: this.data[t.getAttribute("data-skroll-id")].shown
    }
  }) : {
    action: "idle",
    data: {
      shown: this.data[t.getAttribute("data-skroll-id")].shown
    }
  };
}, Skroll.prototype.add = function (t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = {
    triggerTop: e.triggerTop || .2,
    triggerBottom: e.triggerBottom || .8,
    delay: e.delay || 0,
    duration: e.duration || 500,
    animation: e.animation || "zoomIn",
    easing: e.easing || "ease",
    wait: e.delay || 0,
    repeat: e.repeat || !1,
    onEnter: e.onEnter || !1,
    onLeave: e.onLeave || !1
  };
  return this.elements.push({
    element: t,
    settings: n
  }), this;
}, Skroll.prototype.recalcPosition = function () {
  var t = this;
  this.elements.forEach(function (e, n) {
    t.get(e.element).forEach(function (e, n) {
      var a = e.style.transform;
      e.style.transform = "none", setTimeout(function () {
        var n = e.getBoundingClientRect(),
            s = t.referenceElement == window ? n.top + t.referenceElement.scrollY : n.top + t.referenceElement.scrollTop;
        t.data[e.getAttribute("data-skroll-id")].top = s, e.style.transform = a;
      }, 50);
    });
  });
}, Skroll.prototype.throttle = function (t, e, n) {
  var a, s;
  return e || (e = 250), function () {
    var i = n || this,
        o = +new Date(),
        r = arguments;
    a && o < a + e ? (clearTimeout(s), s = setTimeout(function () {
      a = o, t.apply(i, r);
    }, e)) : (a = o, t.apply(i, r));
  };
}, Skroll.prototype.addAnimation = function (t, e) {
  return this.animations[t] = e, this;
}, Skroll.prototype.init = function () {
  var t = this;
  if (!this.settings.mobile && screen.width < 600) return this;
  var e = 0;
  return this.elements.forEach(function (n, a) {
    t.get(n.element).forEach(function (a, s) {
      a.setAttribute("data-skroll-id", e);
      var i = a.getBoundingClientRect(),
          o = t.referenceElement == window ? i.top + t.referenceElement.scrollY : i.top + t.referenceElement.scrollTop;
      t.data[a.getAttribute("data-skroll-id")] = {}, t.data[a.getAttribute("data-skroll-id")].inView = !1, t.data[a.getAttribute("data-skroll-id")].shown = !1, t.data[a.getAttribute("data-skroll-id")].top = o, t.data[a.getAttribute("data-skroll-id")].oef = !1, t.data[a.getAttribute("data-skroll-id")].olf = !1, "string" == typeof n.settings.animation && "none" != n.settings.animation ? (t.animations[n.settings.animation] || (console.warn("The requested animation '%s' was not found switching to default zoomIn", n.settings.animation), console.trace(), n.settings.animation = "zoomIn"), t.animations[n.settings.animation].start(a)) : "object" == _typeof(n.settings.animation) && null != n.settings.animation.start && n.settings.animation.start(a), e++;
    });
  }), ["scroll", "resize"].forEach(function (e) {
    t.referenceElement.addEventListener(e, t.throttle(function () {
      t.elements.forEach(function (e, n) {
        var a = e.settings.wait;
        t.get(e.element).forEach(function (n, s) {
          var i = t.getScrollStatus(n, e.settings);
          "idle" != i.action && ("enter" != i.action || i.data.shown ? "leave" == i.action && i.data.shown && e.settings.repeat && ("string" == typeof e.settings.animation && "none" != e.settings.animation ? t.animations[e.settings.animation] && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            t.animations[e.settings.animation].end(n), t.data[n.getAttribute("data-skroll-id")].shown = !1, a += e.settings.delay * s;
          }, a)) : "object" == _typeof(e.settings.animation) && null != e.settings.animation.end && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            e.settings.animation.end(n), t.data[n.getAttribute("data-skroll-id")].shown = !1, a += e.settings.delay * s;
          }, a)), a += e.settings.delay) : ("string" == typeof e.settings.animation && "none" != e.settings.animation ? (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            t.animations[e.settings.animation].end(n), t.data[n.getAttribute("data-skroll-id")].shown = !0, a += e.settings.delay * s;
          }, a)) : "object" == _typeof(e.settings.animation) && null != e.settings.animation.end && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            e.settings.animation.end(n), t.data[n.getAttribute("data-skroll-id")].shown = !0, a += e.settings.delay * s;
          }, a)), a += e.settings.delay), "enter" == i.action ? t.data[n.getAttribute("data-skroll-id")].oef || e.settings.onEnter && (e.settings.onEnter(s, n), t.data[n.getAttribute("data-skroll-id")].oef = !0) : "leave" == i.action && (t.data[n.getAttribute("data-skroll-id")].olf || e.settings.onLeave && (e.settings.onLeave(s, n), t.data[n.getAttribute("data-skroll-id")].olf = !0)));
        });
      }), "resize" == e && t.recalcPosition();
    }, 150));
  }), window.dispatchEvent ? t.referenceElement.dispatchEvent(new Event("scroll")) : t.referenceElement.fireEvent("scroll"), t;
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_skroll_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/skroll.min */ "./src/js/import/skroll.min.js");
/* harmony import */ var _import_skroll_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_skroll_min__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map
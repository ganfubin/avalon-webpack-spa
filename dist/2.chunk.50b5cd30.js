webpackJsonp([2,13],{

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by caozheng on 15/12/9.
	 */
	__webpack_require__(42);
	
	__webpack_require__(31);
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  // 定义所有相关的vmodel
	  var vm = avalon.define({
	    $id: "home",
	    $optTimepicker: {
	      //rules: 'null,0D'
	    },
	    $skipArray:["pager"]
	  });
	  return avalon.controller(function ($ctrl) {
	    // 视图渲染后，意思是avalon.scan完成
	    $ctrl.$onRendered = function () {
	      //var width = window.innerWidth;
	      //var heigth = window.innerHeight;
	      //var tempLeft = 150;
	      //$("#home").height(heigth);
	    };
	    // 进入视图
	    $ctrl.$onEnter = function (param, rs, rj) {
	
	    };
	    // 对应的视图销毁前
	    $ctrl.$onBeforeUnload = function () {
	
	    };
	    $ctrl.$vmodels = [vm];
	  })
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./home.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./home.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.home-panel {\n  width: 983px;\n  padding: 0 10px;\n  padding-top: 40px;\n  margin-left: 200px; }\n\n.test-div {\n  display: block;\n  height: 400px;\n  width: 100%; }\n\n.header-wrap {\n  width: 100px;\n  height: 100px; }\n  .header-wrap .topLeft {\n    width: 560px;\n    padding: 20px 0 0 26px;\n    color: #ffffff; }\n  .header-wrap h2 {\n    height: 34px; }\n\n.ac_fg {\n  background: url(\"http://sz.happyvalley.cn/Activity/images/fg.jpg\") no-repeat;\n  width: 725px;\n  height: 3px;\n  margin: 20px auto; }\n\n.ac-pager {\n  width: 460px;\n  margin: 20px auto; }\n\n.content-wrap {\n  padding: 10px 10px 30px 30px;\n  background: -webkit-radial-gradient(#FAFAFA, #111415);\n  /* Safari 5.1 - 6.0 */\n  background: -o-radial-gradient(#FAFAFA, #111415);\n  /* Opera 11.1 - 12.0 */\n  background: -moz-radial-gradient(#FAFAFA, #111415);\n  /* Firefox 3.6 - 15 */\n  background: radial-gradient(#FAFAFA, #111415);\n  /* 标准的语法 */ }\n  .content-wrap .ac_content {\n    width: 641px;\n    margin: 20px 100px;\n    position: relative; }\n    .content-wrap .ac_content .ac_kuai {\n      width: 739px;\n      height: 210px;\n      border: 1px solid #dedede;\n      position: relative;\n      background-color: #FAFAFA; }\n    .content-wrap .ac_content .ac_ysj {\n      position: absolute;\n      background: url(\"http://sz.happyvalley.cn/Activity/images/jinx.png\") no-repeat;\n      width: 93px;\n      height: 93px;\n      right: -8px;\n      top: -7px; }\n    .content-wrap .ac_content .ac_yxj {\n      position: absolute;\n      background: url(\"http://sz.happyvalley.cn/Activity/images/yxj.png\") no-repeat;\n      width: 45px;\n      height: 31px;\n      right: 0px;\n      bottom: 0px; }\n    .content-wrap .ac_content .ac_img {\n      background: url(\"http://sz.happyvalley.cn/Activity/images/yhxx_h.jpg\") no-repeat;\n      width: 308px;\n      height: 177px;\n      margin: 23px 0 20px 20px; }\n      .content-wrap .ac_content .ac_img img {\n        width: 294px;\n        height: 165px;\n        padding: 5px 0 0 5px; }\n    .content-wrap .ac_content .ac_text {\n      width: 390px;\n      margin: 23px 0 0 15px; }\n      .content-wrap .ac_content .ac_text h1 {\n        font-size: 18px;\n        color: #ff9f18;\n        font-weight: 100;\n        margin: 5px 0; }\n      .content-wrap .ac_content .ac_text p {\n        color: #8fc31f;\n        font-size: 12px; }\n      .content-wrap .ac_content .ac_text span {\n        background: url(\"http://sz.happyvalley.cn/Activity/images/time.jpg\") no-repeat;\n        width: 16px;\n        height: 15px;\n        display: inline-block;\n        padding-right: 10px; }\n      .content-wrap .ac_content .ac_text .ac_text_content {\n        color: #7d7d7d;\n        line-height: 20px;\n        margin-top: 5px; }\n    .content-wrap .ac_content .ac_btn {\n      background: url(\"http://sz.happyvalley.cn/Activity/images/hd.png\") no-repeat;\n      width: 123px;\n      height: 32px;\n      position: absolute;\n      line-height: 32px;\n      top: 170px;\n      left: 345px; }\n      .content-wrap .ac_content .ac_btn a {\n        color: #898989;\n        padding-left: 44px;\n        display: block;\n        width: 79px;\n        height: 32px;\n        font-size: 12px; }\n", ""]);
	
	// exports


/***/ },

/***/ 44:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});
//# sourceMappingURL=2.chunk.50b5cd30.js.map
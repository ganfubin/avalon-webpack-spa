webpackJsonp([10,11],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(51);
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    // 定义所有相关的vmodel
	    var vm = avalon.define({
	        $id: "login",
	        loginTemp :"3434",
	        $optTimepicker: {
	            //rules: 'null,0D'
	        },
	        testFuc : function(){
	            alert('12312');
	        },
	        test2 : function(){
	
	        }
	    });
	    return avalon.controller(function ($ctrl) {
	        // 视图渲染后，意思是avalon.scan完成
	        $ctrl.$onRendered = function () {
	            debugger;
	            console.log(123)
	
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

/***/ 51:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=10.chunk.e8e02d99.js.map
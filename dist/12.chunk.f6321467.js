webpackJsonp([12,13],{

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by adminstrator on 2016/3/8.
	 */
	function getIndex(index) {
	    if (index < 10) {
	        index = "00" + index;
	    } else if (index < 100) {
	        index = "0" + index;
	    }
	    return index;
	}
	var $ = function(id) {
	    return document.getElementById(id);
	};
	!/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [ __webpack_require__(2) ]; (function(avalon) {
	    var waterfall = {
	        load_items : null,
	        loaded_items:[],
	        col_num : 0,// 列数
	        waterfall_model : null,
	        col_width : 200,
	        loaded_num : 0,
	        init_num : 0,
	        loading : false,
	        start:0,
	        resizing:false,
	        find_shortest_col : function() {
	            // 找出最小高度的列
	            var a = avalon($('row0')).height(), min_i = 0;
	            for ( var i = 1; i < this.col_num; i++) {
	                var b = avalon($('row' + i)).height();
	                if (b < a) {
	                    min_i = i;
	                    a = b;
	                }
	            }
	            return min_i;
	        },
	        init : function(data) {
	            this.load_items = data;
	            this.loaded_items=this.loaded_items.concat(data);
	            this.waterfall_model = waterfall_model;
	            this.col_num = Math.floor(avalon(window).width()
	                / this.col_width);
	            this.init_num = this.col_num;
	            for ( var j = 0; j < this.col_num; j++) {
	                waterfall_model.img_list.push([]);
	            }
	            for ( var j = 0; j < this.col_num; j++) {
	                // 第一行图片
	                var a={};
	                a.src=getIndex(data[j].src);
	                a.height=data[j].height;
	                a.text=data[j].text;
	                waterfall_model.img_list[j].push(a);
	            }
	            this.start=this.col_num;
	        },
	        add_item : function(i) {
	            var a = this.find_shortest_col();
	            var b={};
	            var c=this.load_items[this.init_num+i];
	            if(c){
	                b.src=getIndex(c.src);
	                b.height=c.height;
	                b.text=c.text;
	                waterfall_model.img_list[a].push(b);
	            }
	        },
	        resize_item:function(i){
	            //console.log(i);
	            var a = this.find_shortest_col();
	            var b={};
	            var c=this.loaded_items[this.init_num+i];
	            if(c){
	                b.src=getIndex(c.src);
	                b.height=c.height;
	                b.text=c.text;
	                waterfall_model.img_list[a].push(b);
	            }
	        }
	    };
	    var waterfall_model = avalon.define("waterfall",function(vm) {// vm
	        vm.img_list = [];
	        vm.rendered = function() {// 每次图片加载渲染后执行
	
	            if(waterfall.resizing){
	                if (waterfall.loaded_num+ waterfall.init_num<waterfall.loaded_items.length){
	                    waterfall.loaded_num++;
	                    waterfall.resize_item(waterfall.loaded_num);
	                    //waterfall.start++;
	                }
	            }else{
	
	                if (waterfall.loaded_num + waterfall.init_num <waterfall.load_items.length){
	                    waterfall.loaded_num++;
	                    waterfall.add_item(waterfall.loaded_num);
	                    waterfall.start++;
	                }
	            }
	        };
	    });
	    avalon.config({
	        debug:false
	    });
	    avalon.scan();
	    function debouncer( func , timeout ) {
	        var timeoutID , timeout = timeout || 200;
	        return function () {
	            var scope = this , args = arguments;
	            clearTimeout( timeoutID );
	            timeoutID = setTimeout( function () {
	                func.apply( scope , Array.prototype.slice.call( args ) );
	            } , timeout );
	        }
	    }
	    avalon.post("http://localhost/css/test.php?start=0", function(data) {
	        // 加载第一次
	        waterfall.init(data);
	    }, "json");
	    window.onscroll =debouncer( function ( e ) {
	        var scrollTop = avalon(window).scrollTop(), windowHeight = avalon(
	            window).height(), documentHeight = avalon(document).height();
	        if (windowHeight + scrollTop==documentHeight) {
	            avalon.post("http://localhost/css/test.php?start="+(waterfall.start), function(data) {
	                // 加载第一次
	                waterfall.resizing=false;
	                waterfall.load_items=data;
	                waterfall.loaded_items=waterfall.loaded_items.concat(data);
	                waterfall.loaded_num =waterfall.init_num=0;
	                waterfall.add_item(0);
	            }, "json");
	        }
	    });
	    window.onresize = debouncer( function ( e ) {
	        var windowWidth = avalon(window).width(), k = Math
	            .floor(windowWidth / 200), detect_left = avalon(
	            $('waterFallDetect')).offset().left;
	        if (Math.abs(detect_left) >= 199) {
	            waterfall.col_num = Math.floor(avalon(window).width()
	                / waterfall.col_width);
	            waterfall_model.img_list = [];
	            for ( var j = 0; j < waterfall.col_num; j++) {
	                waterfall_model.img_list.push([]);
	            }
	            waterfall.resizing=true;
	            waterfall.loaded_num =waterfall.init_num=0;
	            //waterfall.start=0;
	            waterfall.resize_item(0);
	        }
	    },30) ;
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());

/***/ }

});
//# sourceMappingURL=12.chunk.f6321467.js.map
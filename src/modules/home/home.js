/**
 * Created by WangMing on 15/12/9.
 */
require("./../../assets/css/home.scss");

require("./../../assets/vendor/oniui/pager/avalon.pager");

define([], function () {
  // 定义所有相关的vmodel
  var vm = avalon.define({
    $id: "home",
    $optTimepicker: {
      //rules: 'null,0D'
    },
    pager :{
      currentPage : 1,
      totalItems: 150
    },
    dataArray : [{
      title:"这是一个title",
      time : "2016.03.05",
      content : "白白红红相间开，三三五五踏青来。3月5日至4月17日，深圳欢乐谷第二届“踏青萌宠季”萌翻来袭！一大波来自全球各地的萌萌哒神宠深圳欢乐谷聚首，响应“Animal, go go go！（爱你喵，汪汪汪）”的主题号召，让你一次被萌到没朋友！",
      boolean : "1"
    },{
      title:"这是一个title",
      time : "2016.03.05",
      content : "白白红红相间开，三三五五踏青来。3月5日至4月17日，深圳欢乐谷第二届“踏青萌宠季”萌翻来袭！一大波来自全球各地的萌萌哒神宠深圳欢乐谷聚首，响应“Animal, go go go！（爱你喵，汪汪汪）”的主题号召，让你一次被萌到没朋友！",
      boolean : "0"
    },{
      title:"这是一个title",
      time : "2016.03.05",
      content : "白白红红相间开，三三五五踏青来。3月5日至4月17日，深圳欢乐谷第二届“踏青萌宠季”萌翻来袭！一大波来自全球各地的萌萌哒神宠深圳欢乐谷聚首，响应“Animal, go go go！（爱你喵，汪汪汪）”的主题号召，让你一次被萌到没朋友！",
      boolean : "0"
    },{
      title:"这是一个title",
      time : "2016.03.05",
      content : "白白红红相间开，三三五五踏青来。3月5日至4月17日，深圳欢乐谷第二届“踏青萌宠季”萌翻来袭！一大波来自全球各地的萌萌哒神宠深圳欢乐谷聚首，响应“Animal, go go go！（爱你喵，汪汪汪）”的主题号召，让你一次被萌到没朋友！",
      boolean : "0"
    }],
    $skipArray:["pager"],

    pagerLoad : function(){
      var _this = this;
    },
    joinClick : function(){


    }
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
});
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
});
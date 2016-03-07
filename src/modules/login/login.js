require("./../../assets/css/login.scss");
define([], function () {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "login",
        loginTemp :"3434",
        $optTimepicker: {
            //rules: 'null,0D'
        },
        testFuc : function(){

        },
        test2 : function(){

        }
    });
    return avalon.controller(function ($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function () {
            /*获取浏览器的高度*/
            var width = window.innerWidth;
            var heigth = window.innerHeight;
            var tempLeft = 150;
            $("#login").height(heigth);
            //$("#login").css("margin-left",width+"px");
            //console.log(heigth)

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
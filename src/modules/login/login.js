require("./../../assets/css/login.css");
define([], function () {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "login",
        loginTemp :"3434",
        $optTimepicker: {
            //rules: 'null,0D'
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
});
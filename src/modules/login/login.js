require("./../../assets/css/login.scss");
define([], function () {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "login",
        loginTemp :"3434",
        account:"",
        password :'',
        $skipArray : ["buttonOption"],
        model : "loginIn",
        buttonOption:{
            a : 555
        },
        $optTimepicker: {
            //rules: 'null,0D'
        },
        loginFuc : function(){
            var _this = this;
            var account = _this.account;
            var password =_this.password;
            var url ="";

        },
        registerClick : function(){
            vm.model= "register";
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
            $(".login-panel").css({
                "margin-left":"450px",
                "padding-top":"300px"
            });
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




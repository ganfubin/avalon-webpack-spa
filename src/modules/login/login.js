require("./../../assets/css/login.scss");
define([], function () {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "login",
        loginTemp :"3434",
        account:"",
        password :'',
        againPassword : "",
        $skipArray : ["buttonOption"],
        model : "loginIn",
        accountError : '0',
        pswError : "0",
        againError : '0',
        loginError : "",
        booleanPsw:false,
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
        blurFuc : function(sign){
            switch (sign){
                case 1 : {
                    //账号离焦
                    //账号做限制 写正则
                    var re  = /^.{6,19}$/;
                    if(!re.test(vm.account)){
                        vm.accountError="账号不符合验证规则，请重新输入";
                    }else{
                        vm.accountError = "";
                    }
                }break;
                case 2 : {
                    var re = /^.{6,19}$/;
                    if(!re.test(vm.password)){
                        vm.pswError = "密码不符合验证规则,请重新输入"
                    }else{
                        vm.pswError ="";
                    }

                }break;
                case 3 : {
                    var value = vm.password;
                    if(value==vm.againPassword){
                        vm.againError="";
                    }else{
                        vm.againError = "两次密码输入不一致,请重新输入";
                    }
                }break;
                case 4 :{
                    //登录账号
                    //发协议验证 TODO
                    vm.loginError = "登录超时"

                }break;
                case 5 :{
                    //登录密码

                }break;
            }
        },
        cancelClick : function(){
            vm.model = "loginIn";
        },
        registerClick : function(){
            vm.model= "register";
        },
        test2 : function(){

        }
    });
    vm.$watch("password",function(newValue,oldValue){
        //监听密码
        var re =/^.{6,}$/;
        if(re.test(newValue)){
            vm.booleanPsw = true;
        }else{
            vm.booleanPsw = false
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




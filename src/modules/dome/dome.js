/**
 * Created by adminstrator on 2016/3/15.
 */
require('./button.js');
require('./text.js');

define([], function (button,text) {
    var vm = avalon.define({
        $id : "dome",
        a : "1",
        array: [1, 2, 3],
        $skipArray: ["x0", "x1", "x2"],
        x0: { //x0, x1, x2为ms:button的配置对象
            a: "aaa",
            "ms:text": { //这个为ms:button的ms:text的默认配置对象
                b: 44
            }
        },
        x1: {
            a: "222",
            "ms:text": {
                b: 55
            }
        },
        x2: {
            a: "333",
            "ms:text": {
                b: 66
            }
        }

    });
    //avalon.library("ms", {
    //    $init: function() {},
    //    $childReady: function() {},
    //    $ready: function() {},
    //    $dispose: function() {}
    //});
    //avalon.component("ms:button", {
    //    a: 1,
    //    $replace: 1,
    //    $ready: function(vm, elem) {
    //        console.log("BUTTON构建完成")
    //    },
    //    $template: "<button type='button'><span>|<ms:text></ms:text>|</span>{{a}}<ms:text/></button>"
    //});
    //avalon.component("ms:text", {
    //    b: "默认值",
    //    $replace: 1,
    //    $ready: function() {
    //        console.log("TEXT构建完成")
    //    },
    //    $template: "<strong>{{b}}</strong>"
    //})
});


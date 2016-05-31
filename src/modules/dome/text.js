/**
 * Created by adminstrator on 2016/3/15.
 */
module.exports = function(){
    avalon.component("ms:text", {
        b: "默认值",
        $replace: 1,
        $ready: function() {
            console.log("TEXT构建完成")
        },
        $template: "<strong>{{b}}</strong>"
    })
}


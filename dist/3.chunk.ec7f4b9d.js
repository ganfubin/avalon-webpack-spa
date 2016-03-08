webpackJsonp([3,11],{

/***/ 46:
/***/ function(module, exports) {

	module.exports = "<div ms-controller=\"about\" class=\"about-panel\">\r\n这里是关于页面\r\n    <h1>这里演示对话框和验证组件</h1>\r\n    <button class=\"pure-button-primary\" ms-click=\"show('testdialog')\">点击打开对话框</button>\r\n    <div ms-widget=\"dialog,testdialog,$OptTestDialog\">\r\n        <form class=\"pure-form pure-form-stacked\" ms-widget=\"validation,validationVM\">\r\n            <ul>\r\n                <li>\r\n                    <label>姓名：</label><input type=\"text\" ms-duplex-required=\"name\" placeholder=\"请输入姓名\">\r\n                </li>\r\n                <li>\r\n                    <label>身份证号：</label><input type=\"text\" ms-duplex-norequired-id=\"idcard\" placeholder=\"请输入身份证号\">\r\n                </li>\r\n                <li>\r\n                    <label>手机号：</label><input type=\"text\" placeholder=\"请输入手机号码\" ms-duplex-phone-required=\"phone\" data-duplex-changed=\"change\">\r\n                </li>\r\n            </ul>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }

});
//# sourceMappingURL=3.chunk.ec7f4b9d.js.map
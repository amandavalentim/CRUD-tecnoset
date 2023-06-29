'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var FormComponent = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    .box-container {\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        margin-left: 430px;\n        margin-top: -200px;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    \n                }\n            }\n            #enter {\n                display: flex;\n                justify-content: center;\n                background-color: #93B413;\n                .button {\n                    border: none;\n                    background-color: #0A53B5;\n                    border-radius: 20px;\n                }\n\n            }  \n            .forget {\n                color: #F47216;\n            } \n            .create_account {\n                color: #FFFF;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n"], ["\n\n    .box-container {\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        margin-left: 430px;\n        margin-top: -200px;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    \n                }\n            }\n            #enter {\n                display: flex;\n                justify-content: center;\n                background-color: #93B413;\n                .button {\n                    border: none;\n                    background-color: #0A53B5;\n                    border-radius: 20px;\n                }\n\n            }  \n            .forget {\n                color: #F47216;\n            } \n            .create_account {\n                color: #FFFF;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n"])));
var Form = function () {
    return (React.createElement(FormComponent, null,
        React.createElement("div", { className: 'box-container' },
            React.createElement("form", null,
                React.createElement("h1", { id: 'title' }, "Login"),
                React.createElement("div", { className: 'login' },
                    React.createElement("input", { type: "email", name: "e-mail", id: "e-mail" })),
                React.createElement("div", { className: 'login' },
                    React.createElement("input", { type: "password", name: "password", id: "password" })),
                React.createElement("div", { className: 'forget' },
                    React.createElement("h4", null,
                        React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                React.createElement("div", { className: 'create_account' },
                    React.createElement("h4", null,
                        "N\u00E3o tem uma conta? ",
                        React.createElement("span", { className: 'orange' }, "Crie uma"))),
                React.createElement("div", { id: 'enter' },
                    React.createElement("button", { className: 'button' },
                        React.createElement("input", { type: "submit", value: "Entrar" })))))));
};
exports["default"] = Form;
var templateObject_1;

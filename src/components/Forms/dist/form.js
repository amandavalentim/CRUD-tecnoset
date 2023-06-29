'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var FormComponent = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    .box-container {\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        margin-left: 550px;\n        margin-top: -200px;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           div {\n               width: 100%;\n                .submit {\n                    width: 100%;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    justify-content: center;\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n\n    @media (min-width: 1024px) and (max-width: 1180px) {\n        .box-container {\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        margin-left: 250px;\n        margin-top: -200px;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           div {\n               width: 100%;\n                .submit {\n                    width: 100%;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    justify-content: center;\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n    }\n"], ["\n\n    .box-container {\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        margin-left: 550px;\n        margin-top: -200px;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           div {\n               width: 100%;\n                .submit {\n                    width: 100%;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    justify-content: center;\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n\n    @media (min-width: 1024px) and (max-width: 1180px) {\n        .box-container {\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        margin-left: 250px;\n        margin-top: -200px;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           div {\n               width: 100%;\n                .submit {\n                    width: 100%;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    justify-content: center;\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n    }\n"])));
var Form = function () {
    return (React.createElement(FormComponent, null,
        React.createElement("div", { className: 'box-container' },
            React.createElement("form", null,
                React.createElement("h1", { id: 'title' }, "Login"),
                React.createElement("div", { className: 'login' },
                    React.createElement("input", { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                React.createElement("div", { className: 'login' },
                    React.createElement("input", { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                React.createElement("div", { className: 'forget' },
                    React.createElement("h4", null,
                        React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                React.createElement("div", { className: 'create_account' },
                    React.createElement("h4", null,
                        "N\u00E3o tem uma conta? ",
                        React.createElement("span", { className: 'orange' }, "Crie uma"))),
                React.createElement("div", null,
                    React.createElement("button", { className: 'submit' }, "Entrar"))))));
};
exports["default"] = Form;
var templateObject_1;

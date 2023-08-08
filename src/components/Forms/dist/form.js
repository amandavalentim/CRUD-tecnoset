//Código desenvolvido por Gustavo Otacílio
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var Input_1 = require("./Input/Input");
var fa_1 = require("react-icons/fa");
var link_1 = require("next/link");
var FormComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n    .box-container {\n        form {\n            position: relative;\n            \n            .title {\n                \n            } \n\n            #email {\n               \n            }\n\n            #password {\n                \n            }\n\n            #link-forget-email {\n                \n            }\n\n            #link-forget-password {\n                \n            }\n\n            #link-forget-email, \n            #link-forget-password {\n               \n            }\n\n            #link-forget-email:hover {\n              \n            }\n\n            #link-forget-password:hover {\n               \n            }\n\n            #link-forget-email:focus {\n                \n            }\n\n            #link-forget-password:focus {\n                \n            }\n\n            #txt-or {\n                \n            }\n\n            .google-enter {\n                \n                \n                .btn-google { \n            \n                    .txt-google {\n                        \n                    }\n                }\n            }\n\n            .btn-google:hover{\n                \n            } \n\n            .create_account {\n                \n                #txt-create {\n                    \n                }\n                span {\n                    \n                }\n            }\n            .enter {\n                \n                .submit {\n                    \n                }\n                .submit:hover {\n                    \n                }\n            }\n        }\n    }\n    \n    @media (min-width: 768px) {\n        /* .hide-on-desktop {\n            display: none;\n        } */\n\n        .box-container {\n            position: absolute;\n            top: 80%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 100%;\n            margin-top: -36px;\n            form {\n                margin-bottom: 40px;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n                width: 60%;\n                height: 80vh;\n                padding: 100px 0px 0px 0px;\n                .title {\n                    position: absolute;\n                    top: 8%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    font-size: 1.5em;\n                } \n\n                #email {\n                    position: absolute;\n                    top: 23%;\n                    left: 40%;\n                    transform: translate(-50%, -50%);\n                }\n\n                #password {\n                    position: absolute;\n                    top: 35%;\n                    left: 30.3%;\n                    transform: translate(-50%, -50%);\n                }\n\n                .google-enter {\n                    position: absolute;\n                    top: 67%;\n                    left: 49%;\n                }\n\n                #link-forget-email {\n                    position: absolute;\n                    top: 17%;\n                    left: 47%;\n                    transform: translate(-50%, -50%);\n                    /* padding-top: 100px; */\n                }\n\n                #link-forget-password {\n                    position: absolute;\n                    top: 35.6%;\n                    left: 47%;\n                    transform: translate(-50%, -50%);\n                    /* padding-top: 100px; */\n                }\n\n                #txt-or {\n                    position: absolute;\n                    top: 53%;\n                    left: 44%;\n                    transform: translate(-50%, -50%);\n                    font-size: .7em;\n                }\n\n                .create_account {\n                    position: absolute;\n                    top: 68%;\n                    left: 47%;\n                    transform: translate(-50%, -50%);\n                }\n\n                .enter {\n                    position: absolute;\n                    top: 90%;\n                    left: 48%;\n                    transform: translate(-50%, -50%);\n                }\n            }\n        }\n    }\n\n    @media (min-width: 992px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 75%;\n        }\n    }\n\n    @media (min-width:1200px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 73%;  \n        }\n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .forget {\n            font-size: 1000px;\n        }\n        .create_account {\n            padding-top: 15px;\n        }\n        .enter {\n            border-style: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-top: 50px;\n            .submit {\n                border: none;\n                background-color: #93B413;\n                color: #FFFF;\n                border-radius: 20px;\n                width: 150px;\n                height: 40px;\n                font-family: 'poppins-medium';\n                font-size: 3em;\n            }\n        }\n    }\n"], ["\n\n    * {\n        box-sizing: border-box; \n        margin: 0px;\n        padding: 0px;\n    }\n\n    .box-container {\n        form {\n            position: relative;\n            \n            .title {\n                \n            } \n\n            #email {\n               \n            }\n\n            #password {\n                \n            }\n\n            #link-forget-email {\n                \n            }\n\n            #link-forget-password {\n                \n            }\n\n            #link-forget-email, \n            #link-forget-password {\n               \n            }\n\n            #link-forget-email:hover {\n              \n            }\n\n            #link-forget-password:hover {\n               \n            }\n\n            #link-forget-email:focus {\n                \n            }\n\n            #link-forget-password:focus {\n                \n            }\n\n            #txt-or {\n                \n            }\n\n            .google-enter {\n                \n                \n                .btn-google { \n            \n                    .txt-google {\n                        \n                    }\n                }\n            }\n\n            .btn-google:hover{\n                \n            } \n\n            .create_account {\n                \n                #txt-create {\n                    \n                }\n                span {\n                    \n                }\n            }\n            .enter {\n                \n                .submit {\n                    \n                }\n                .submit:hover {\n                    \n                }\n            }\n        }\n    }\n    \n    @media (min-width: 768px) {\n        /* .hide-on-desktop {\n            display: none;\n        } */\n\n        .box-container {\n            position: absolute;\n            top: 80%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 100%;\n            margin-top: -36px;\n            form {\n                margin-bottom: 40px;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n                width: 60%;\n                height: 80vh;\n                padding: 100px 0px 0px 0px;\n                .title {\n                    position: absolute;\n                    top: 8%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    font-size: 1.5em;\n                } \n\n                #email {\n                    position: absolute;\n                    top: 23%;\n                    left: 40%;\n                    transform: translate(-50%, -50%);\n                }\n\n                #password {\n                    position: absolute;\n                    top: 35%;\n                    left: 30.3%;\n                    transform: translate(-50%, -50%);\n                }\n\n                .google-enter {\n                    position: absolute;\n                    top: 67%;\n                    left: 49%;\n                }\n\n                #link-forget-email {\n                    position: absolute;\n                    top: 17%;\n                    left: 47%;\n                    transform: translate(-50%, -50%);\n                    /* padding-top: 100px; */\n                }\n\n                #link-forget-password {\n                    position: absolute;\n                    top: 35.6%;\n                    left: 47%;\n                    transform: translate(-50%, -50%);\n                    /* padding-top: 100px; */\n                }\n\n                #txt-or {\n                    position: absolute;\n                    top: 53%;\n                    left: 44%;\n                    transform: translate(-50%, -50%);\n                    font-size: .7em;\n                }\n\n                .create_account {\n                    position: absolute;\n                    top: 68%;\n                    left: 47%;\n                    transform: translate(-50%, -50%);\n                }\n\n                .enter {\n                    position: absolute;\n                    top: 90%;\n                    left: 48%;\n                    transform: translate(-50%, -50%);\n                }\n            }\n        }\n    }\n\n    @media (min-width: 992px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 75%;\n        }\n    }\n\n    @media (min-width:1200px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .box-container {\n            top: 73%;  \n        }\n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-desktop {\n            display: flex;\n        }\n        .forget {\n            font-size: 1000px;\n        }\n        .create_account {\n            padding-top: 15px;\n        }\n        .enter {\n            border-style: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-top: 50px;\n            .submit {\n                border: none;\n                background-color: #93B413;\n                color: #FFFF;\n                border-radius: 20px;\n                width: 150px;\n                height: 40px;\n                font-family: 'poppins-medium';\n                font-size: 3em;\n            }\n        }\n    }\n"])));
var Form = function () {
    return (React.createElement(FormComponent, null,
        React.createElement("nav", { className: 'hide-on-desktop' },
            React.createElement("div", { className: 'box-container' },
                React.createElement("form", null,
                    React.createElement("h1", { className: 'title' }, "Login"),
                    React.createElement("div", { id: 'email' },
                        React.createElement(Input_1["default"], { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                    React.createElement("a", { href: "#", id: 'link-forget-email' },
                        React.createElement("p", null, "Esqueci o email")),
                    React.createElement("div", { id: 'password' },
                        React.createElement(Input_1["default"], { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                    React.createElement("a", { href: "#", id: 'link-forget-password' },
                        React.createElement("p", null, "Esqueci a senha")),
                    React.createElement("p", { id: 'txt-or' }, "OU"),
                    React.createElement("div", { className: 'google-enter' },
                        React.createElement("button", { className: 'btn-google' },
                            React.createElement(fa_1.FaGoogle, null),
                            React.createElement("p", { className: 'txt-google' }, "Entrar com Google"))),
                    React.createElement("div", { className: 'create_account' },
                        React.createElement(link_1["default"], { href: '/page4' },
                            React.createElement("h4", { id: 'txt-create' },
                                "N\u00E3o tem uma conta? ",
                                React.createElement("span", { className: 'orange' }, "Crie uma")))),
                    React.createElement("div", { className: 'enter' },
                        React.createElement("button", { className: 'submit' }, "Entrar")))))));
};
exports["default"] = Form;
var templateObject_1;

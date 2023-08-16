'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var Input_1 = require("../Forms/Input/Input");
var FormComponent3 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: 1.2em;\n        font-family: 'Poppins-medium';\n        margin-left: 1%;\n        padding-top: 10%;\n    }\n\n    #code {\n        padding-top: 20%;\n        margin-left: 15%;\n    }\n\n    p{\n        margin-left: 68%;\n        margin-top: -3%;\n    }\n\n    .resend {\n        margin-top: 5%;\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #93B413;\n    }\n\n    .resend:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #86a40f;\n    }\n\n    .rename {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #93B413;\n    }\n\n    .rename:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #86a40f;\n    }\n\n    .enviar {\n        margin-top: 10%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .fox {\n        margin-left: 40%;\n        margin-top: 0.1%;\n    }\n\n    @media(min-width: 768px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        form {\n            margin-top: 6%;\n            margin-left: 29%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 320px;\n            height: 350px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.1em;\n            margin-left: 3%;\n        }\n\n        .input {\n            margin-top: -12%;\n        }\n\n        #code {\n            width: 230px;\n        }\n\n        p {\n            margin-top: -7%;\n        }\n\n        .resends {\n            margin-top: -4%;\n        }\n\n        .enviar {\n            margin-top: 11%;\n        }\n\n        .fox {\n            width: 80px;\n            height: 120px;\n            margin-left: 10%;\n            margin-top: 20%;\n        }\n    }\n\n    @media(min-width: 992px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        background-image: url(\"/images/992px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 8%;\n            margin-left: 30%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 420px;\n            height: 350px;\n            border-color: white;\n        }\n\n        .input {\n            margin-top: -16%;\n            margin-left: -5%;\n        }\n\n        #code {\n            width: 330px;\n        }\n\n        h1 {\n            margin-left: -1%;\n        }\n\n        p {\n            margin-left: 78%;\n        }\n\n        .resend {\n            margin-top: 6%;\n            font-size: 0.9em;\n            text-align: center;\n            margin-left: -55%;\n            color: #93B413;\n            cursor: pointer;\n        }\n\n        .resend:active {\n            font-size: 0.9em;\n            text-align: center;\n            margin-left: -55%;\n            margin-top: 6%;\n            color: #86a40f;\n        }\n\n        .rename {\n            font-size: 0.9em;\n            text-align: center;\n            margin-left: 45%;\n            margin-top: -9.5%;\n            color: #93B413;\n            cursor: pointer;\n        }\n\n        .rename:active {\n            font-size: 0.9em;\n            text-align: center;\n            margin-top: -10.5%;\n            margin-left: 45%;\n            color: #86a40f;\n        }\n\n        .enviar {\n            margin-top: 8%;\n            margin-left: 30%;\n            cursor: pointer;\n        }\n\n        .enviar:hover {\n            margin-top: 8%;\n            margin-left: 30%;\n            background-color: #9fc214;\n            cursor: pointer;\n        }\n\n        .enviar:active {\n            margin-top: 8%;\n            margin-left: 30%;\n            background-color: #86a40f;\n            cursor: pointer;\n        }\n\n        @media(min-width: 1200px) {\n\n            .mobile {\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: none;\n            }\n\n            .desktop2 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            form {\n                margin-top: 3%;\n                margin-left: 31%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 550px;\n                height: 430px;\n                border-color: white;\n            }\n\n            background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n            h1 {\n                font-size: 1.4em;\n                margin-top: -2%;\n            }\n\n            #code {\n                width: 430px;\n            }\n\n            .resend {\n                margin-top: 6%;\n                font-size: 1.1em;\n                text-align: center;\n                margin-left: -55%;\n                color: #93B413;\n                cursor: pointer;\n            }\n\n            .resend:active {\n                font-size: 1.1em;\n                text-align: center;\n                margin-left: -55%;\n                margin-top: 6%;\n                color: #86a40f;\n            }\n\n            .rename {\n                font-size: 1.1em;\n                text-align: center;\n                margin-left: 45%;\n                margin-top: -8.6%;\n                color: #93B413;\n                cursor: pointer;\n            }\n\n            .rename:active {\n                font-size: 1.1em;\n                text-align: center;\n                margin-top: -10.5%;\n                margin-left: 45%;\n                color: #86a40f;\n            }\n\n            .enviar {\n                width: 200px;\n                height: 60px;\n                font-size: 2em;\n                margin-left: 35%;\n            }\n\n            .fox {\n                width: 100px;\n                margin-top: 15%;\n            }\n        }\n    }\n"], ["\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: 1.2em;\n        font-family: 'Poppins-medium';\n        margin-left: 1%;\n        padding-top: 10%;\n    }\n\n    #code {\n        padding-top: 20%;\n        margin-left: 15%;\n    }\n\n    p{\n        margin-left: 68%;\n        margin-top: -3%;\n    }\n\n    .resend {\n        margin-top: 5%;\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #93B413;\n    }\n\n    .resend:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: -55%;\n        color: #86a40f;\n    }\n\n    .rename {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #93B413;\n    }\n\n    .rename:active {\n        font-size: 0.7em;\n        text-align: center;\n        margin-left: 45%;\n        margin-top: -10.2%;\n        color: #86a40f;\n    }\n\n    .enviar {\n        margin-top: 10%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .fox {\n        margin-left: 40%;\n        margin-top: 0.1%;\n    }\n\n    @media(min-width: 768px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        form {\n            margin-top: 6%;\n            margin-left: 29%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 320px;\n            height: 350px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.1em;\n            margin-left: 3%;\n        }\n\n        .input {\n            margin-top: -12%;\n        }\n\n        #code {\n            width: 230px;\n        }\n\n        p {\n            margin-top: -7%;\n        }\n\n        .resends {\n            margin-top: -4%;\n        }\n\n        .enviar {\n            margin-top: 11%;\n        }\n\n        .fox {\n            width: 80px;\n            height: 120px;\n            margin-left: 10%;\n            margin-top: 20%;\n        }\n    }\n\n    @media(min-width: 992px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        background-image: url(\"/images/992px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 8%;\n            margin-left: 30%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 420px;\n            height: 350px;\n            border-color: white;\n        }\n\n        .input {\n            margin-top: -16%;\n            margin-left: -5%;\n        }\n\n        #code {\n            width: 330px;\n        }\n\n        h1 {\n            margin-left: -1%;\n        }\n\n        p {\n            margin-left: 78%;\n        }\n\n        .resend {\n            margin-top: 6%;\n            font-size: 0.9em;\n            text-align: center;\n            margin-left: -55%;\n            color: #93B413;\n            cursor: pointer;\n        }\n\n        .resend:active {\n            font-size: 0.9em;\n            text-align: center;\n            margin-left: -55%;\n            margin-top: 6%;\n            color: #86a40f;\n        }\n\n        .rename {\n            font-size: 0.9em;\n            text-align: center;\n            margin-left: 45%;\n            margin-top: -9.5%;\n            color: #93B413;\n            cursor: pointer;\n        }\n\n        .rename:active {\n            font-size: 0.9em;\n            text-align: center;\n            margin-top: -10.5%;\n            margin-left: 45%;\n            color: #86a40f;\n        }\n\n        .enviar {\n            margin-top: 8%;\n            margin-left: 30%;\n            cursor: pointer;\n        }\n\n        .enviar:hover {\n            margin-top: 8%;\n            margin-left: 30%;\n            background-color: #9fc214;\n            cursor: pointer;\n        }\n\n        .enviar:active {\n            margin-top: 8%;\n            margin-left: 30%;\n            background-color: #86a40f;\n            cursor: pointer;\n        }\n\n        @media(min-width: 1200px) {\n\n            .mobile {\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: none;\n            }\n\n            .desktop2 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            form {\n                margin-top: 3%;\n                margin-left: 31%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 550px;\n                height: 430px;\n                border-color: white;\n            }\n\n            background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n            h1 {\n                font-size: 1.4em;\n                margin-top: -2%;\n            }\n\n            #code {\n                width: 430px;\n            }\n\n            .resend {\n                margin-top: 6%;\n                font-size: 1.1em;\n                text-align: center;\n                margin-left: -55%;\n                color: #93B413;\n                cursor: pointer;\n            }\n\n            .resend:active {\n                font-size: 1.1em;\n                text-align: center;\n                margin-left: -55%;\n                margin-top: 6%;\n                color: #86a40f;\n            }\n\n            .rename {\n                font-size: 1.1em;\n                text-align: center;\n                margin-left: 45%;\n                margin-top: -8.6%;\n                color: #93B413;\n                cursor: pointer;\n            }\n\n            .rename:active {\n                font-size: 1.1em;\n                text-align: center;\n                margin-top: -10.5%;\n                margin-left: 45%;\n                color: #86a40f;\n            }\n\n            .enviar {\n                width: 200px;\n                height: 60px;\n                font-size: 2em;\n                margin-left: 35%;\n            }\n\n            .fox {\n                width: 100px;\n                margin-top: 15%;\n            }\n        }\n    }\n"])));
var RecoveryCode = function () {
    return (React.createElement(FormComponent3, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h1", null,
                "Digite o c\u00F3digo que",
                React.createElement("br", null),
                " enviamos para voc\u00EA:"),
            React.createElement("div", { className: 'input' },
                React.createElement(Input_1["default"], { type: "number", name: "code", id: "code" }),
                React.createElement("p", null, "01:00")),
            React.createElement("div", { className: 'resend' },
                React.createElement("a", { href: "", id: 'a1' },
                    "N\u00E3o recebeu?",
                    React.createElement("br", null),
                    " Reenviar")),
            React.createElement("div", { className: 'rename' },
                React.createElement("a", { href: "", id: 'a2' },
                    "N\u00E3o \u00E9 o seu email?",
                    React.createElement("br", null),
                    " Reescreva")),
            React.createElement(link_1["default"], { href: '/page7' },
                React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar")),
            React.createElement("img", { src: "/images/raposa-code-mobile.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'tablet' },
            React.createElement("form", null,
                React.createElement("h1", null,
                    "Digite o c\u00F3digo que",
                    React.createElement("br", null),
                    " enviamos para voc\u00EA:"),
                React.createElement("div", { className: 'input' },
                    React.createElement(Input_1["default"], { type: "number", name: "code", id: "code" }),
                    React.createElement("p", null, "01:00")),
                React.createElement("div", { className: 'resends' },
                    React.createElement("div", { className: 'resend' },
                        React.createElement("a", { href: "", id: 'a1' },
                            "N\u00E3o recebeu?",
                            React.createElement("br", null),
                            " Reenviar")),
                    React.createElement("div", { className: 'rename' },
                        React.createElement("a", { href: "", id: 'a2' },
                            "N\u00E3o \u00E9 o seu email?",
                            React.createElement("br", null),
                            " Reescreva"))),
                React.createElement(link_1["default"], { href: '/page7' },
                    React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
            React.createElement("img", { src: "/images/raposa-code.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop1' },
            React.createElement("form", null,
                React.createElement("h1", null,
                    "Digite o c\u00F3digo que",
                    React.createElement("br", null),
                    " enviamos para voc\u00EA:"),
                React.createElement("div", { className: 'input' },
                    React.createElement(Input_1["default"], { type: "number", name: "code", id: "code" }),
                    React.createElement("p", null, "01:00")),
                React.createElement("div", { className: 'resends' },
                    React.createElement("div", { className: 'resend' },
                        React.createElement("a", { href: "", id: 'a1' },
                            "N\u00E3o recebeu?",
                            React.createElement("br", null),
                            " Reenviar")),
                    React.createElement("div", { className: 'rename' },
                        React.createElement("a", { href: "", id: 'a2' },
                            "N\u00E3o \u00E9 o seu email?",
                            React.createElement("br", null),
                            " Reescreva"))),
                React.createElement(link_1["default"], { href: '/page7' },
                    React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
            React.createElement("img", { src: "/images/raposa-code.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop2' },
            React.createElement("form", null,
                React.createElement("h1", null,
                    "Digite o c\u00F3digo que",
                    React.createElement("br", null),
                    " enviamos para voc\u00EA:"),
                React.createElement("div", { className: 'input' },
                    React.createElement(Input_1["default"], { type: "number", name: "code", id: "code" }),
                    React.createElement("p", null, "01:00")),
                React.createElement("div", { className: 'resends' },
                    React.createElement("div", { className: 'resend' },
                        React.createElement("a", { href: "", id: 'a1' },
                            "N\u00E3o recebeu?",
                            React.createElement("br", null),
                            " Reenviar")),
                    React.createElement("div", { className: 'rename' },
                        React.createElement("a", { href: "", id: 'a2' },
                            "N\u00E3o \u00E9 o seu email?",
                            React.createElement("br", null),
                            " Reescreva"))),
                React.createElement(link_1["default"], { href: '/page7' },
                    React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
            React.createElement("img", { src: "/images/raposa-code.png", alt: "fox", className: 'fox' }))));
};
exports["default"] = RecoveryCode;
function getTimeRemaining(e) {
    throw new Error('Function not implemented.');
}
function setTimer(arg0) {
    throw new Error('Function not implemented.');
}
var templateObject_1;

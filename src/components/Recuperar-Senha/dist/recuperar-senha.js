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
var PageComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    * {\n        color: white;\n    }\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    .desktop3 {\n        display: none;\n    }\n\n    .fox {\n        margin-top: -18%;\n        margin-left: 63%;\n        width: 100px;\n    }\n\n    h1 {\n        font-size: 1.2em;\n        font-family: 'Poppins-medium';\n        margin-left: 11%;\n    }\n\n    #op {\n        width: 250px;\n        margin-left: 11%;\n        margin-top: 30%;\n    }\n\n    #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1em;\n    }\n\n    .enviar {\n        margin-top: 13%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    @media(min-width: 768px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        form {\n            margin-top: 7%;\n            margin-left: 29%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 320px;\n            height: 350px;\n            border-color: white;\n       }\n\n       h1 {\n        margin-top: 10%;\n        font-size: 1.1em;\n        margin-left: 15%;\n       }\n       \n       #op {\n        margin-top: 27%;\n        margin-left: 14.2%;\n        width: 230px;\n       }\n\n       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 0.8em;\n    }\n\n    .enviar {\n        margin-top: 13%;\n        margin-left: 23%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n        .fox {\n            position: absolute;\n            left: 59px;\n            top: 500px;\n            width: 110px;\n            height: 180px;\n        }\n    }\n\n    @media(min-width: 992px) {\n        \n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/992px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 7%;\n            margin-left: 27%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 470px;\n            height: 350px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.5em;\n            margin-left: 17%;\n        }\n\n        #op {\n            margin-top: 17%;\n            margin-left: 20%;\n            width: 280px;\n        }\n\n       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.1em;\n        }\n\n        .enviar {\n            margin-top: 7%;\n            margin-left: 30%;\n            width: 190px;\n            height: 60px;\n            font-size: 2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:hover {\n            margin-top: 7%;\n            margin-left: 30%;\n            width: 190px;\n            height: 60px;\n            font-size: 2em;\n            background-color: #9fc214;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:active {\n            width: 190px;\n            height: 60px;\n            font-size: 2em;\n            background-color: #86a40f;\n            border: none;\n        }\n\n        .fox {\n            position: absolute;\n            left: 101px;\n            top: 570px;\n        }\n    }\n\n    @media (min-width: 1200px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 4%;\n            margin-left: 30.7%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 510px;\n            height: 400px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.9em;\n            margin-left: 12%;\n        }\n\n        #op {\n        margin-top: 18%;\n        margin-left: 14.5%;\n        width: 370px;\n       }\n\n       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.5em;\n        }\n\n        .enviar {\n            margin-top: 4%;\n            margin-left: 30%;\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:hover {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #9fc214;\n            border: none;\n        }\n\n        .enviar:active {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #86a40f;\n            border: none;\n        }\n\n        .fox {\n            position: absolute;\n            left: 68px;\n            top: 650px;\n        }\n    }\n\n    @media(min-width: 1600px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/1600px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 5%;\n            margin-left: 30.7%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 570px;\n            height: 440px;\n            border-color: white;\n        }\n\n        h1 {\n            margin-left: 15.7%;\n        }\n\n        #op {\n        margin-top: 18%;\n        margin-left: 17.5%;\n        width: 370px;\n       }\n\n       .enviar {\n            margin-top: 1%;\n            margin-left: 32.7%;\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:hover {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #9fc214;\n            border: none;\n        }\n\n        .enviar:active {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #86a40f;\n            border: none;\n        }\n\n        .fox {\n            position: absolute;\n            left: 59px;\n            top: 725px;\n        }\n    }\n \n"], ["\n\n    * {\n        color: white;\n    }\n\n    height: 80vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile {\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    .desktop3 {\n        display: none;\n    }\n\n    .fox {\n        margin-top: -18%;\n        margin-left: 63%;\n        width: 100px;\n    }\n\n    h1 {\n        font-size: 1.2em;\n        font-family: 'Poppins-medium';\n        margin-left: 11%;\n    }\n\n    #op {\n        width: 250px;\n        margin-left: 11%;\n        margin-top: 30%;\n    }\n\n    #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1em;\n    }\n\n    .enviar {\n        margin-top: 13%;\n        margin-left: 24%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    @media(min-width: 768px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        form {\n            margin-top: 7%;\n            margin-left: 29%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 320px;\n            height: 350px;\n            border-color: white;\n       }\n\n       h1 {\n        margin-top: 10%;\n        font-size: 1.1em;\n        margin-left: 15%;\n       }\n       \n       #op {\n        margin-top: 27%;\n        margin-left: 14.2%;\n        width: 230px;\n       }\n\n       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 0.8em;\n    }\n\n    .enviar {\n        margin-top: 13%;\n        margin-left: 23%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n    }\n\n    .enviar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n        .fox {\n            position: absolute;\n            left: 59px;\n            top: 500px;\n            width: 110px;\n            height: 180px;\n        }\n    }\n\n    @media(min-width: 992px) {\n        \n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/992px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 7%;\n            margin-left: 27%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 470px;\n            height: 350px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.5em;\n            margin-left: 17%;\n        }\n\n        #op {\n            margin-top: 17%;\n            margin-left: 20%;\n            width: 280px;\n        }\n\n       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.1em;\n        }\n\n        .enviar {\n            margin-top: 7%;\n            margin-left: 30%;\n            width: 190px;\n            height: 60px;\n            font-size: 2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:hover {\n            margin-top: 7%;\n            margin-left: 30%;\n            width: 190px;\n            height: 60px;\n            font-size: 2em;\n            background-color: #9fc214;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:active {\n            width: 190px;\n            height: 60px;\n            font-size: 2em;\n            background-color: #86a40f;\n            border: none;\n        }\n\n        .fox {\n            position: absolute;\n            left: 101px;\n            top: 570px;\n        }\n    }\n\n    @media (min-width: 1200px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 4%;\n            margin-left: 30.7%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 510px;\n            height: 400px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.9em;\n            margin-left: 12%;\n        }\n\n        #op {\n        margin-top: 18%;\n        margin-left: 14.5%;\n        width: 370px;\n       }\n\n       #op::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1.5em;\n        }\n\n        .enviar {\n            margin-top: 4%;\n            margin-left: 30%;\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:hover {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #9fc214;\n            border: none;\n        }\n\n        .enviar:active {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #86a40f;\n            border: none;\n        }\n\n        .fox {\n            position: absolute;\n            left: 68px;\n            top: 650px;\n        }\n    }\n\n    @media(min-width: 1600px) {\n\n        .mobile {\n            display: none;\n        }\n\n        .tablet {\n            display: none;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        background-image: url(\"/images/1600px-recuperar-senha.svg\");\n\n        form {\n            margin-top: 5%;\n            margin-left: 30.7%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 570px;\n            height: 440px;\n            border-color: white;\n        }\n\n        h1 {\n            margin-left: 15.7%;\n        }\n\n        #op {\n        margin-top: 18%;\n        margin-left: 17.5%;\n        width: 370px;\n       }\n\n       .enviar {\n            margin-top: 1%;\n            margin-left: 32.7%;\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 20px;\n        }\n\n        .enviar:hover {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #9fc214;\n            border: none;\n        }\n\n        .enviar:active {\n            width: 200px;\n            height: 70px;\n            font-size: 2.2em;\n            background-color: #86a40f;\n            border: none;\n        }\n\n        .fox {\n            position: absolute;\n            left: 59px;\n            top: 725px;\n        }\n    }\n \n"])));
var ForgotPassword = function () {
    return (React.createElement(PageComponent, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("img", { src: "/images/raposa-recuperar-senha.png", alt: "fox", className: 'fox' }),
            React.createElement("h1", null, "Recupere a sua senha:"),
            React.createElement(Input_1["default"], { type: "string", name: "email", id: "op", placeholder: 'Digite o seu email ou telefone' }),
            React.createElement(link_1["default"], { href: '/page6' },
                React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
        React.createElement("nav", { className: 'tablet' },
            React.createElement("form", null,
                React.createElement("h1", null, "Recupere a sua senha:"),
                React.createElement(Input_1["default"], { type: "string", name: "email", id: "op", placeholder: 'Digite o seu email ou telefone' }),
                React.createElement(link_1["default"], { href: '/page6' },
                    React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
            React.createElement("img", { src: "/images/Stella2.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop1' },
            React.createElement("form", null,
                React.createElement("h1", null, "Recupere a sua senha:"),
                React.createElement(Input_1["default"], { type: "string", name: "email", id: "op", placeholder: 'Digite o seu email ou telefone' }),
                React.createElement(link_1["default"], { href: '/page6' },
                    React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
            React.createElement("img", { src: "/images/Stella2.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop2' },
            React.createElement("form", null,
                React.createElement("h1", null, "Recupere a sua senha:"),
                React.createElement(Input_1["default"], { type: "string", name: "email", id: "op", placeholder: 'Digite o seu email ou telefone' }),
                React.createElement(link_1["default"], { href: '/page6' },
                    React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
            React.createElement("img", { src: "/images/Stella2.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'desktop3' },
            React.createElement("form", null,
                React.createElement("h1", null, "Recupere a sua senha:"),
                React.createElement(Input_1["default"], { type: "string", name: "email", id: "op", placeholder: 'Digite o seu email ou telefone' }),
                React.createElement(link_1["default"], { href: '/page6' },
                    React.createElement("button", { className: 'enviar', type: 'button' }, "Enviar"))),
            React.createElement("img", { src: "/images/Stella2.png", alt: "fox", className: 'fox' }))));
};
exports["default"] = ForgotPassword;
var templateObject_1;

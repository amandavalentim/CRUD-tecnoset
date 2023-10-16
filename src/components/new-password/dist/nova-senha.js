// Developed by Gabriel Marques
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var link_1 = require("next/link");
var Input_1 = require("../Login/Input/Input");
var Formcomponent4 = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    //Mobile\n    height: 95vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile{\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    .desktop3 {\n        display: none;\n    }\n\n    h1 {\n        color: white;\n        padding-top: 10%;\n        font-size: 1.3em;\n        margin-left: 9.7%;\n    }\n\n    #password {\n        margin-top: 18%;\n        margin-left: 15%;\n    }\n\n    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    #confirm-password {\n        margin-top: 13%;\n        margin-left: 15%;\n    }\n\n    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    .confirmar {\n        margin-top: 10%;\n        margin-left: 23.3%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n        color: white;\n    }\n\n    .confirmar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    //Tablet\n    @media(min-width: 768px) {\n        \n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        height: 62vh;\n\n        form {\n            margin-top: 4%;\n            margin-left: 30%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 290px;\n            height: 275px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.2em;\n        }\n\n        #password {\n            margin-top: 15%;\n            margin-left: 11%;\n            width: 230px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        #confirm-password {\n            margin-top: 5%;\n            margin-left: 11%;\n            width: 230px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        .confirmar {\n            margin-top: -1%;\n            margin-left: 27%;\n            width: 140px;\n            height: 40px;\n            font-size: 1.3em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 10px;\n            color: white;\n        }\n\n        .confirmar:active {\n            margin-top: -1%;\n            margin-left: 27%;\n            width: 140px;\n            height: 40px;\n            font-size: 1.3em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 10px;\n            color: white;\n        }\n\n        .fox {\n            margin-left: -110%;\n            margin-top: -50%;\n            width: 100px;\n        }\n\n        //Small Screens\n        @media(min-width: 992px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .desktop2 {\n                display: none;\n            }\n\n            background-image: url(\"/images/992px-recuperar-senha.svg\");\n            height: 65vh;\n\n            form {\n                margin-top: 4.3%;\n                margin-left: 32.5%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 330px;\n                height: 330px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.3em;\n                margin-left: 11.3%;\n            }\n\n            #password {\n                margin-top: 12%;\n                margin-left: 15%;\n                width: 232px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            #confirm-password {\n                margin-top: 5%;\n                margin-left: 15%;\n                width: 232px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            .confirmar {\n                width: 160px;\n                height: 50px;\n                font-size: 1.6em;\n                margin-top: 2%;\n                margin-left: 25%;\n                background-color: #93B413;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n            \n            .confirmar:hover {\n                width: 160px;\n                height: 50px;\n                font-size: 1.6em;\n                margin-top: 2%;\n                margin-left: 25%;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .confirmar:active {\n                width: 160px;\n                height: 50px;\n                font-size: 1.6em;\n                margin-top: 2%;\n                margin-left: 25%;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .fox {\n                margin-left: -103.5%;\n            }\n        }\n\n        //Medium Screens\n        @media(min-width: 1200px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: none;\n            }\n\n            .desktop2 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .desktop3 {\n                display: none;\n            }\n\n            background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n            form {\n                margin-top: 2.5%;\n                margin-left: 34.2%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 400px;\n                height: 355px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.6em;\n                margin-left: 10.5%;\n            }\n\n            #password {\n                margin-top: 12%;\n                margin-left: 12%;\n                width: 305px;\n                height: 32px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            #confirm-password {\n                margin-top: 1%;\n                margin-left: 12%;\n                width: 305px;\n                height: 32px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            .confirmar {\n                width: 170px;\n                height: 55px;\n                font-size: 1.7em;\n                margin-top: -4%;\n                margin-left: 28%;\n                background-color: #93B413;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n            \n            .confirmar:hover {\n                width: 170px;\n                height: 55px;\n                font-size: 1.7em;\n                margin-top: -4%;\n                margin-left: 28%;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .confirmar:active {\n                width: 170px;\n                height: 55px;\n                font-size: 1.7em;\n                margin-top: -4%;\n                margin-left: 28%;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .fox {\n                margin-left: -95.5%;\n            }\n        }\n\n        @media(min-width: 1400px){\n            height: 72vh;\n\n            background-image: url(\"/images/1400px-recuperar-senha.svg\");\n\n            form {\n                margin-left: 35.5%;\n                margin-top: 5%;\n            }\n\n            .fox {\n                margin-top: -35%;\n            }\n        }\n\n        //Large Screens\n        @media(min-width: 1600px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: none;\n            }\n\n            .desktop2 {\n                display: none;\n            }\n\n            .desktop3 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            background-image: url(\"/images/1600px-recuperar-senha.svg\");\n            height: 60vh;\n\n            form {\n                margin-top: 2%;\n                margin-left: 35.5%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 400px;\n                height: 390px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.7em;\n                margin-left: 8.5%;\n            }\n\n            #password {\n                position: absolute;\n                margin-left: 2.5%;\n                top: 140px;\n                width: 320px;\n                height: 32px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            #confirm-password {\n                position: absolute;\n                margin-left: 2.5%;\n                top: 391px;\n                width: 320px;\n                height: 32px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            .confirmar {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                position: absolute;\n                margin-left: 6%;\n                top: 550px;\n                background-color: #93B413;\n                border: none;\n                border-radius: 15px;\n                color: white;\n                cursor: pointer;\n            }\n\n            .confirmar:hover {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                position: absolute;\n                margin-left: 6%;\n                top: 550px;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 15px;\n                color: white;\n                cursor: pointer;\n            }\n\n            .confirmar:active {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                position: absolute;\n                margin-left: 6%;\n                top: 550px;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 15px;\n                color: white;\n                cursor: pointer;\n            }\n\n            .fox {\n                margin-left: -25%;\n                margin-top: 15%;\n            }\n        }\n    }\n\n"], ["\n\n    //Mobile\n    height: 95vh;\n\n    background: linear-gradient(180deg, #04a4e8 0%, #0A53B5 100%);\n\n    .mobile{\n        display: block;\n        justify-content: space-between;\n    }\n\n    .tablet {\n        display: none;\n    }\n\n    .desktop1 {\n        display: none;\n    }\n\n    .desktop2 {\n        display: none;\n    }\n\n    .desktop3 {\n        display: none;\n    }\n\n    h1 {\n        color: white;\n        padding-top: 10%;\n        font-size: 1.3em;\n        margin-left: 9.7%;\n    }\n\n    #password {\n        margin-top: 18%;\n        margin-left: 15%;\n    }\n\n    #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    #confirm-password {\n        margin-top: 13%;\n        margin-left: 15%;\n    }\n\n    #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n        font-size: 1.1em;\n    }\n\n    .confirmar {\n        margin-top: 10%;\n        margin-left: 23.3%;\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #93B413;\n        border: none;\n        border-radius: 20px;\n        color: white;\n    }\n\n    .confirmar:active {\n        width: 170px;\n        height: 50px;\n        font-size: 1.6em;\n        background-color: #86a40f;\n        border: none;\n        border-radius: 20px;\n    }\n\n    //Tablet\n    @media(min-width: 768px) {\n        \n        .mobile{\n            display: none;\n        }\n\n        .tablet {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .desktop1 {\n            display: none;\n        }\n\n        .desktop2 {\n            display: none;\n        }\n\n        .desktop3 {\n            display: none;\n        }\n\n        background-image: url(\"/images/tablet-recuperar-senha.svg\");\n        background-repeat: no-repeat;\n\n        height: 62vh;\n\n        form {\n            margin-top: 4%;\n            margin-left: 30%;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n            width: 290px;\n            height: 275px;\n            border-color: white;\n        }\n\n        h1 {\n            font-size: 1.2em;\n        }\n\n        #password {\n            margin-top: 15%;\n            margin-left: 11%;\n            width: 230px;\n        }\n\n        #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        #confirm-password {\n            margin-top: 5%;\n            margin-left: 11%;\n            width: 230px;\n        }\n\n        #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            font-size: 1em;\n        }\n\n        .confirmar {\n            margin-top: -1%;\n            margin-left: 27%;\n            width: 140px;\n            height: 40px;\n            font-size: 1.3em;\n            background-color: #93B413;\n            border: none;\n            border-radius: 10px;\n            color: white;\n        }\n\n        .confirmar:active {\n            margin-top: -1%;\n            margin-left: 27%;\n            width: 140px;\n            height: 40px;\n            font-size: 1.3em;\n            background-color: #86a40f;\n            border: none;\n            border-radius: 10px;\n            color: white;\n        }\n\n        .fox {\n            margin-left: -110%;\n            margin-top: -50%;\n            width: 100px;\n        }\n\n        //Small Screens\n        @media(min-width: 992px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .desktop2 {\n                display: none;\n            }\n\n            background-image: url(\"/images/992px-recuperar-senha.svg\");\n            height: 65vh;\n\n            form {\n                margin-top: 4.3%;\n                margin-left: 32.5%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 330px;\n                height: 330px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.3em;\n                margin-left: 11.3%;\n            }\n\n            #password {\n                margin-top: 12%;\n                margin-left: 15%;\n                width: 232px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            #confirm-password {\n                margin-top: 5%;\n                margin-left: 15%;\n                width: 232px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.2em;\n            }\n\n            .confirmar {\n                width: 160px;\n                height: 50px;\n                font-size: 1.6em;\n                margin-top: 2%;\n                margin-left: 25%;\n                background-color: #93B413;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n            \n            .confirmar:hover {\n                width: 160px;\n                height: 50px;\n                font-size: 1.6em;\n                margin-top: 2%;\n                margin-left: 25%;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .confirmar:active {\n                width: 160px;\n                height: 50px;\n                font-size: 1.6em;\n                margin-top: 2%;\n                margin-left: 25%;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .fox {\n                margin-left: -103.5%;\n            }\n        }\n\n        //Medium Screens\n        @media(min-width: 1200px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: none;\n            }\n\n            .desktop2 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .desktop3 {\n                display: none;\n            }\n\n            background-image: url(\"/images/1200px-recuperar-senha.svg\");\n\n            form {\n                margin-top: 2.5%;\n                margin-left: 34.2%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 400px;\n                height: 355px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.6em;\n                margin-left: 10.5%;\n            }\n\n            #password {\n                margin-top: 12%;\n                margin-left: 12%;\n                width: 305px;\n                height: 32px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            #confirm-password {\n                margin-top: 1%;\n                margin-left: 12%;\n                width: 305px;\n                height: 32px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            .confirmar {\n                width: 170px;\n                height: 55px;\n                font-size: 1.7em;\n                margin-top: -4%;\n                margin-left: 28%;\n                background-color: #93B413;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n            \n            .confirmar:hover {\n                width: 170px;\n                height: 55px;\n                font-size: 1.7em;\n                margin-top: -4%;\n                margin-left: 28%;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .confirmar:active {\n                width: 170px;\n                height: 55px;\n                font-size: 1.7em;\n                margin-top: -4%;\n                margin-left: 28%;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 10px;\n                color: white;\n            }\n\n            .fox {\n                margin-left: -95.5%;\n            }\n        }\n\n        @media(min-width: 1400px){\n            height: 72vh;\n\n            background-image: url(\"/images/1400px-recuperar-senha.svg\");\n\n            form {\n                margin-left: 35.5%;\n                margin-top: 5%;\n            }\n\n            .fox {\n                margin-top: -35%;\n            }\n        }\n\n        //Large Screens\n        @media(min-width: 1600px) {\n\n            .mobile{\n                display: none;\n            }\n\n            .tablet {\n                display: none;\n            }\n\n            .desktop1 {\n                display: none;\n            }\n\n            .desktop2 {\n                display: none;\n            }\n\n            .desktop3 {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            background-image: url(\"/images/1600px-recuperar-senha.svg\");\n            height: 60vh;\n\n            form {\n                margin-top: 2%;\n                margin-left: 35.5%;\n                border-radius: 19px;\n                background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);\n                width: 400px;\n                height: 390px;\n                border-color: white;\n            }\n\n            h1 {\n                font-size: 1.7em;\n                margin-left: 8.5%;\n            }\n\n            #password {\n                position: absolute;\n                margin-left: 2.5%;\n                top: 140px;\n                width: 320px;\n                height: 32px;\n            }\n\n            #password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            #confirm-password {\n                position: absolute;\n                margin-left: 2.5%;\n                top: 391px;\n                width: 320px;\n                height: 32px;\n            }\n\n            #confirm-password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                font-size: 1.4em;\n            }\n\n            .confirmar {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                position: absolute;\n                margin-left: 6%;\n                top: 550px;\n                background-color: #93B413;\n                border: none;\n                border-radius: 15px;\n                color: white;\n                cursor: pointer;\n            }\n\n            .confirmar:hover {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                position: absolute;\n                margin-left: 6%;\n                top: 550px;\n                background-color: #9fc214;\n                border: none;\n                border-radius: 15px;\n                color: white;\n                cursor: pointer;\n            }\n\n            .confirmar:active {\n                width: 210px;\n                height: 60px;\n                font-size: 2em;\n                position: absolute;\n                margin-left: 6%;\n                top: 550px;\n                background-color: #86a40f;\n                border: none;\n                border-radius: 15px;\n                color: white;\n                cursor: pointer;\n            }\n\n            .fox {\n                margin-left: -25%;\n                margin-top: 15%;\n            }\n        }\n    }\n\n"])));
var NewPassword = function () {
    return (React.createElement(Formcomponent4, null,
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h1", null, "Crie a sua nova senha:"),
            React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
            React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
            React.createElement(link_1["default"], { href: '/LoginPage' },
                React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")),
            React.createElement("img", { src: "/images/raposa-new-password.png", alt: "fox", className: 'fox' })),
        React.createElement("nav", { className: 'tablet' },
            React.createElement("form", null,
                React.createElement("h1", null, "Crie a sua nova senha:"),
                React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
                React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
                React.createElement(link_1["default"], { href: '/LoginPage' },
                    React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")),
                React.createElement("img", { src: "/images/Raposa-login.png", alt: "fox", className: 'fox' }))),
        React.createElement("nav", { className: 'desktop1' },
            React.createElement("form", null,
                React.createElement("h1", null, "Crie a sua nova senha:"),
                React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
                React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
                React.createElement(link_1["default"], { href: '/LoginPage' },
                    React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")),
                React.createElement("img", { src: "/images/Raposa-login.png", alt: "fox", className: 'fox' }))),
        React.createElement("nav", { className: 'desktop2' },
            React.createElement("form", null,
                React.createElement("h1", null, "Crie a sua nova senha:"),
                React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
                React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
                React.createElement(link_1["default"], { href: '/LoginPage' },
                    React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")),
                React.createElement("img", { src: "/images/Raposa-login.png", alt: "fox", className: 'fox' }))),
        React.createElement("nav", { className: 'desktop3' },
            React.createElement("form", null,
                React.createElement("h1", null, "Crie a sua nova senha:"),
                React.createElement(Input_1["default"], { type: "number", name: "password", id: "password", placeholder: 'Nova Senha' }),
                React.createElement(Input_1["default"], { type: "number", name: "confirm-password", id: "confirm-password", placeholder: 'Confirmar nova Senha' }),
                React.createElement(link_1["default"], { href: '/LoginPage' },
                    React.createElement("button", { className: 'confirmar', type: 'button' }, "Confirmar")),
                React.createElement("img", { src: "/images/Raposa-login.png", alt: "fox", className: 'fox' })))));
};
exports["default"] = NewPassword;
var templateObject_1;

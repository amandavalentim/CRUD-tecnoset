//Código desenvolvido por Gustavo Otacílio
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
var HeadComponent = styled_1["default"].head(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 170px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n\n    .hide-on-mobile {\n        display: none;\n    }\n\n    .show-on-mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .menu {\n        width: 35px;\n        height: 35px;\n    }\n\n    .button-bars {\n        border: none;\n        background: none;\n    }\n\n    .faBars {\n        width: 70px;\n        height: 35px;\n        color: #fff;\n        border: none;\n        background: none;\n        display: block;\n    }\n\n    .close {\n        color: #fff;\n        font-size: 20px;\n    }\n\n    .button-close {\n        border: none;\n        background: none;\n        color: #fff;\n    }\n\n    .menu .close-menu {\n        display: block;\n        text-align: right;\n        background-color: #eee;\n    }\n    .menu .close-menu button {\n        background: none;\n        border: none;\n        font-size: 2em;\n        padding: .75rem 1rem;\n    }\n    .menu.open .backdrop {\n        opacity: .5;\n        display: block;\n    }\n    .menu .backdrop {\n        opacity: 0;\n        background-color: #000;\n        transition: opacity .15s linear;\n        position: fixed;\n        width: 100%;\n        height: 100vh;\n        z-index: 1;\n        left: 0;\n        top: 0;\n    }\n    .menu ul {\n        display: block;\n        position: fixed;\n        top: 0;\n        right: -80vw;\n        width: 80vw;\n        height: 100vh;\n        background-color: #0081E8;\n        z-index: 2;\n        margin: 0;\n        transition: right .2s linear;\n    }\n    .menu.open ul {\n        right: 0;\n    }\n    .menu.open a {\n        color: #FFF;\n        padding: 20px;\n        display: block;\n        font-weight: 100;\n    }\n    .menu {\n        width: 60px;\n        flex: initial;\n    }\n    .menu .open-menu {\n        display: block;\n        font-size: 2em;\n        padding: .9rem;\n        flex: 1;\n        background: none;\n        border: none;\n        color: #fff;\n    }\n\n    .logo-Fox {\n        position: absolute;\n        top: 5px;\n        left: 100px;\n        top: 40%;\n        left: 52%;\n        transform: translate(-50%, -50%);\n    }\n\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        top: 80%;\n        left: 52%;\n        transform: translate(-50%, -50%);\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    .criar-usuarios {\n        font-size: 23px;\n    }\n\n    .criar-usuarios:hover {\n        font-size: 30px;\n        background-color: #07B3FD;\n    }\n\n    .lista-de-usuarios {\n        font-size: 15px;\n    }\n\n    @media (min-width: 768px) {\n\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 500px;\n        }\n        /* .hide-on-mobile ul {\n            position: absolute;\n        } */\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .logo-Fox {\n            position: absolute;\n            top: 45%;\n            left: 10%;\n        }\n\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 10%;\n            top: 85%;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }\n    }\n\n    @media (min-width: 922px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 740px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }      \n    }\n\n    @media (min-width: 1200px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1070px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1295px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n"], ["\n    position: relative;\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 170px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n\n    .hide-on-mobile {\n        display: none;\n    }\n\n    .show-on-mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .menu {\n        width: 35px;\n        height: 35px;\n    }\n\n    .button-bars {\n        border: none;\n        background: none;\n    }\n\n    .faBars {\n        width: 70px;\n        height: 35px;\n        color: #fff;\n        border: none;\n        background: none;\n        display: block;\n    }\n\n    .close {\n        color: #fff;\n        font-size: 20px;\n    }\n\n    .button-close {\n        border: none;\n        background: none;\n        color: #fff;\n    }\n\n    .menu .close-menu {\n        display: block;\n        text-align: right;\n        background-color: #eee;\n    }\n    .menu .close-menu button {\n        background: none;\n        border: none;\n        font-size: 2em;\n        padding: .75rem 1rem;\n    }\n    .menu.open .backdrop {\n        opacity: .5;\n        display: block;\n    }\n    .menu .backdrop {\n        opacity: 0;\n        background-color: #000;\n        transition: opacity .15s linear;\n        position: fixed;\n        width: 100%;\n        height: 100vh;\n        z-index: 1;\n        left: 0;\n        top: 0;\n    }\n    .menu ul {\n        display: block;\n        position: fixed;\n        top: 0;\n        right: -80vw;\n        width: 80vw;\n        height: 100vh;\n        background-color: #0081E8;\n        z-index: 2;\n        margin: 0;\n        transition: right .2s linear;\n    }\n    .menu.open ul {\n        right: 0;\n    }\n    .menu.open a {\n        color: #FFF;\n        padding: 20px;\n        display: block;\n        font-weight: 100;\n    }\n    .menu {\n        width: 60px;\n        flex: initial;\n    }\n    .menu .open-menu {\n        display: block;\n        font-size: 2em;\n        padding: .9rem;\n        flex: 1;\n        background: none;\n        border: none;\n        color: #fff;\n    }\n\n    .logo-Fox {\n        position: absolute;\n        top: 5px;\n        left: 100px;\n        top: 40%;\n        left: 52%;\n        transform: translate(-50%, -50%);\n    }\n\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        top: 80%;\n        left: 52%;\n        transform: translate(-50%, -50%);\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    .criar-usuarios {\n        font-size: 23px;\n    }\n\n    .criar-usuarios:hover {\n        font-size: 30px;\n        background-color: #07B3FD;\n    }\n\n    .lista-de-usuarios {\n        font-size: 15px;\n    }\n\n    @media (min-width: 768px) {\n\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 500px;\n        }\n        /* .hide-on-mobile ul {\n            position: absolute;\n        } */\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .logo-Fox {\n            position: absolute;\n            top: 45%;\n            left: 10%;\n        }\n\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 10%;\n            top: 85%;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }\n    }\n\n    @media (min-width: 922px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 740px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }      \n    }\n\n    @media (min-width: 1200px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1070px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1295px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n"])));
var Ul = styled_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    list-style: none; \n    li {\n        width: 100px;\n        color: white;\n        font-family: 'Poppins-Medium';\n    }\n"], ["\n    display: flex;\n    list-style: none; \n    li {\n        width: 100px;\n        color: white;\n        font-family: 'Poppins-Medium';\n    }\n"])));
// document.querySelector('.open-menu').?addEventListener('click', e => {
//     document.querySelector('.menu').classList.add('open');
// });
//document.querySelector('button-bars')?.addEventListener('click', e => {
//    console.log('oi')
//}) 
var Hello = function () {
    var _a;
    (_a = document.querySelector('.menu')) === null || _a === void 0 ? void 0 : _a.classList.add('open');
};
var Close = function () {
    var _a;
    (_a = document.querySelector('.menu')) === null || _a === void 0 ? void 0 : _a.classList.remove('open');
};
var Head = function () {
    return (React.createElement(HeadComponent, null,
        React.createElement("nav", { className: 'header' },
            React.createElement("a", { href: "/" },
                React.createElement(image_1["default"], { className: 'logo-Fox', src: "/images/logo-fox1.svg", width: 100, height: 104, alt: "logo" })),
            React.createElement("div", { className: 'nameLogo' }, "Fox Soluctions")),
        React.createElement("nav", { className: 'show-on-mobile' },
            React.createElement("nav", { className: 'menu' },
                React.createElement("button", { className: 'button-bars' },
                    React.createElement(fa_1.FaBars, { className: 'faBars', onClick: Hello })),
                React.createElement(Ul, null,
                    React.createElement("li", null,
                        React.createElement("button", { className: 'button-close' },
                            React.createElement(fa_2.FaTimes, { onClick: Close, className: 'close' })),
                        React.createElement("a", { href: "/", className: 'criar-usuarios' }, "Criar Usu\u00E1rio"),
                        React.createElement("a", { href: "/", className: 'lista-de-usuarios' }, "Lista de Usu\u00E1rios"),
                        React.createElement("a", { href: "/", className: 'configura\u00E7\u00F5es' }, "Configura\u00E7\u00F5es"),
                        React.createElement("a", { href: "/", className: 'sair' }, "Sair"))))),
        React.createElement("nav", { className: 'hide-on-mobile' },
            React.createElement("div", null,
                React.createElement(Ul, null,
                    React.createElement("li", { id: 'home' }, "Home"),
                    React.createElement("li", { id: 'documents' }, "Documentos"))))));
};
exports["default"] = Head;
var templateObject_1, templateObject_2;

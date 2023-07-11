// Header feita por Gabriel e Gustavo
'use client';
"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

exports.__esModule = true;

var styled_1 = require("@emotion/styled");

var image_1 = require("next/image");

var fa_1 = require("react-icons/fa");

var HeadComponent = styled_1["default"].head(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 30vh;\n    width: 100vw;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    .hide-on-mobile {\n        display: none;\n    }\n\n    .show-on-mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .faBars {\n        width: 30px;\n        height: 30px;\n        color: #fff;\n        position: absolute;\n        top: 60%;\n        left: 88%;\n        transform: translate(-50%, -50%);\n    }\n\n    .logo-Fox {\n        position: absolute;\n        top: 40%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n    }\n\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        top: 80%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    @media (min-width: 768px) {\n\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 500px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .logo-Fox {\n            position: absolute;\n            top: 45%;\n            left: 10%;\n        }\n\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 10%;\n            top: 85%;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }\n    }\n\n    @media (min-width: 922px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 740px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }      \n    }\n\n    @media (min-width: 1200px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1070px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1295px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n"], ["\n    position: relative;\n    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);\n    height: 30vh;\n    width: 100vw;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    .hide-on-mobile {\n        display: none;\n    }\n\n    .show-on-mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .faBars {\n        width: 30px;\n        height: 30px;\n        color: #fff;\n        position: absolute;\n        top: 60%;\n        left: 88%;\n        transform: translate(-50%, -50%);\n    }\n\n    .logo-Fox {\n        position: absolute;\n        top: 40%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n    }\n\n    .nameLogo {\n        font-size: 1em;\n        position: absolute;\n        top: 80%;\n        left: 48%;\n        transform: translate(-50%, -50%);\n        color: white;\n        font-family: 'Roboto-Medium';\n    }\n\n    @media (min-width: 768px) {\n\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 500px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }\n\n        .logo-Fox {\n            position: absolute;\n            top: 45%;\n            left: 10%;\n        }\n\n        .nameLogo {\n            font-size: 1em;\n            position: absolute;\n            left: 10%;\n            top: 85%;\n            color: white;\n            font-family: 'Roboto-Medium';\n        }\n    }\n\n    @media (min-width: 922px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 740px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        }      \n    }\n\n    @media (min-width: 1200px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1070px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n\n    @media (min-width: 1600px) {\n        .hide-on-mobile {\n            display: flex;\n            justify-content: space-between;\n            position: absolute;\n            left: 1295px;\n        }\n\n        .show-on-mobile {\n            display: none;\n        } \n    }\n"])));
var Ul = styled_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    list-style: none; \n    li {\n        width: 100px;\n        color: white;\n        font-family: 'Poppins-Medium';\n    }\n"], ["\n    display: flex;\n    list-style: none; \n    li {\n        width: 100px;\n        color: white;\n        font-family: 'Poppins-Medium';\n    }\n"])));

var Head = function Head() {
  return React.createElement(HeadComponent, null, React.createElement("nav", {
    className: 'header'
  }, React.createElement("a", {
    href: "/"
  }, React.createElement(image_1["default"], {
    className: 'logo-Fox',
    src: "/images/logo-fox1.svg",
    width: 100,
    height: 104,
    alt: "logo"
  })), React.createElement("div", {
    className: 'nameLogo'
  }, "Fox Soluctions")), React.createElement("nav", {
    className: 'hide-on-mobile'
  }, React.createElement("div", null, React.createElement(Ul, null, React.createElement("li", {
    id: 'home'
  }, "Home"), React.createElement("li", {
    id: 'documents'
  }, "Documentos")))), React.createElement("nav", {
    className: 'show-on-mobile'
  }, React.createElement(fa_1.FaBars, {
    className: 'faBars'
  })));
};

exports["default"] = Head;
var templateObject_1, templateObject_2;
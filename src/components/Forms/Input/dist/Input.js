"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var InputField = styled_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border: none;\n      width: 230px;\n      border-bottom: 2px solid #000;\n      background-color: rgba(7, 179, 253, 0);\n      justify-content: center;\n      align-items: center;\n      padding-bottom: 10px;\n      margin: 30px;\n      outline: none;\n      color: #000;\n      font-family: 'Poppins-Medium';\n\n&::placeholder{\n      font-size: 14px;\n      color: #000;\n}\n&:focus{\n      border-bottom: 2px solid #93B413;\n\n}\n\n@media (min-width: 768px){\n\n      .hide-on-desktop {\n            display: flex;\n      }\n      .title {\n        color: #FFFF;\n    }\n      width: 305px;\n      .box-container {\n            border: none;\n            width: 230px;\n            border-bottom: 2px solid #FFFF;\n            background-color: rgba(7, 179, 253, 0);\n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n            margin: 30px;\n            outline: none;\n            color: #FFFF;\n            font-family: 'Poppins-Medium';\n            &::placeholder{\n                  font-size: 14px;\n                  color: #FFFF;\n            }\n      }\n}\n\n@media (min-width: 992px){\n      width: 325px;\n      border-bottom: 2px solid #FFFF;\n                \n}\n\n@media (min-width:1200px){\n      width: 310px;\n}\n\n"], ["\n      border: none;\n      width: 230px;\n      border-bottom: 2px solid #000;\n      background-color: rgba(7, 179, 253, 0);\n      justify-content: center;\n      align-items: center;\n      padding-bottom: 10px;\n      margin: 30px;\n      outline: none;\n      color: #000;\n      font-family: 'Poppins-Medium';\n\n&::placeholder{\n      font-size: 14px;\n      color: #000;\n}\n&:focus{\n      border-bottom: 2px solid #93B413;\n\n}\n\n@media (min-width: 768px){\n\n      .hide-on-desktop {\n            display: flex;\n      }\n      .title {\n        color: #FFFF;\n    }\n      width: 305px;\n      .box-container {\n            border: none;\n            width: 230px;\n            border-bottom: 2px solid #FFFF;\n            background-color: rgba(7, 179, 253, 0);\n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n            margin: 30px;\n            outline: none;\n            color: #FFFF;\n            font-family: 'Poppins-Medium';\n            &::placeholder{\n                  font-size: 14px;\n                  color: #FFFF;\n            }\n      }\n}\n\n@media (min-width: 992px){\n      width: 325px;\n      border-bottom: 2px solid #FFFF;\n                \n}\n\n@media (min-width:1200px){\n      width: 310px;\n}\n\n"])));
function Input(props) {
    return (react_1["default"].createElement(InputField, { type: props.type, name: props.name, id: props.id, placeholder: props.placeholder, value: props.defaultValue ? props.defaultValue : '' }));
}
exports["default"] = Input;
var templateObject_1;

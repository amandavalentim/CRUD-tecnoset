//Desenvolvido por Amanda Valentim
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var react_1 = require("react");
var react_2 = require("swiper/react");
require("swiper/css");
//Mobile
var AboutUsComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #0A53B5;\n    padding: 10px;\n    h3{\n        text-align: center;\n        padding-top: 40px;\n        font-family: 'Poppins-Bold';\n        color: #FFFFFF;\n    }\n\n    .container-about-us{\n        border-radius: 19px;\n        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        margin: 20px;\n        .content-center{\n            p{\n                text-align: center;\n                padding: 40px;\n                font-family: 'Poppins-Medium';\n                color: #ffffff;\n            }\n        }\n    }\n\n    .company-show-on-desktop{\n        display: none;\n    }\n\n    .container-company{\n        border-radius: 19px;\n        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        margin: 20px;\n        display: flex;\n        .slide-company-item{\n            .mission-card{\n                p{\n                    text-align: center;\n                    font-family: 'Poppins-Medium';\n                    color: #ffffff;\n                    padding: 20px;\n                }\n            }\n            .vision-card{\n                p{\n                    text-align: center;\n                    font-family: 'Poppins-Medium';\n                    color: #ffffff;\n                    padding: 20px;\n                }\n            }\n            .worth-card{\n                padding: 28px;\n                p{\n                    font-family: 'Poppins-Medium';\n                    color: #ffffff;\n                    padding: 9px;\n                }\n            }\n        }\n    }\n\n    .container-visual-identity{\n        .container-why-the-fox{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n            margin: 20px;\n            text-align: center;\n            p{\n                padding: 40px;\n                font-family: 'Poppins-Medium';\n                color: #ffffff; \n            }\n            img{\n                padding: 10px;\n            }\n        }\n        .color-palette{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n            margin: 20px;\n            text-align: center;\n            img{\n                padding: 40px;\n            }\n        }\n    }\n\n    .container-developers{\n        border-radius: 19px;\n        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        margin: 20px;\n        text-align: center;\n        img{\n            width: 150px;\n            height: 150px;\n            margin: 30px;\n        }\n        h4{\n            font-family: 'Poppins-Medium';\n            color: #ffffff;\n            text-align: center;\n        }\n        p{\n            color: #ffffff;\n            font-family: 'Poppins-Regular';\n            margin: 10px;\n        }\n        .card{\n            margin: 30px;\n            p{\n                font-family: 'Poppins-Light';\n                font-style: italic;\n            }\n        }\n\n    }\n\n    //Desktop\n    @media(min-width: 992px){\n        h3{\n            font-size: 30px;\n        }\n        p{\n            font-size: 20px;\n        }\n        .company-show-on-desktop{\n            display: flex;\n        }\n        .container-company{\n            display: none;\n        }\n        .company-card{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        }\n    }\n\n"], ["\n    background-color: #0A53B5;\n    padding: 10px;\n    h3{\n        text-align: center;\n        padding-top: 40px;\n        font-family: 'Poppins-Bold';\n        color: #FFFFFF;\n    }\n\n    .container-about-us{\n        border-radius: 19px;\n        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        margin: 20px;\n        .content-center{\n            p{\n                text-align: center;\n                padding: 40px;\n                font-family: 'Poppins-Medium';\n                color: #ffffff;\n            }\n        }\n    }\n\n    .company-show-on-desktop{\n        display: none;\n    }\n\n    .container-company{\n        border-radius: 19px;\n        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        margin: 20px;\n        display: flex;\n        .slide-company-item{\n            .mission-card{\n                p{\n                    text-align: center;\n                    font-family: 'Poppins-Medium';\n                    color: #ffffff;\n                    padding: 20px;\n                }\n            }\n            .vision-card{\n                p{\n                    text-align: center;\n                    font-family: 'Poppins-Medium';\n                    color: #ffffff;\n                    padding: 20px;\n                }\n            }\n            .worth-card{\n                padding: 28px;\n                p{\n                    font-family: 'Poppins-Medium';\n                    color: #ffffff;\n                    padding: 9px;\n                }\n            }\n        }\n    }\n\n    .container-visual-identity{\n        .container-why-the-fox{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n            margin: 20px;\n            text-align: center;\n            p{\n                padding: 40px;\n                font-family: 'Poppins-Medium';\n                color: #ffffff; \n            }\n            img{\n                padding: 10px;\n            }\n        }\n        .color-palette{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n            margin: 20px;\n            text-align: center;\n            img{\n                padding: 40px;\n            }\n        }\n    }\n\n    .container-developers{\n        border-radius: 19px;\n        background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        margin: 20px;\n        text-align: center;\n        img{\n            width: 150px;\n            height: 150px;\n            margin: 30px;\n        }\n        h4{\n            font-family: 'Poppins-Medium';\n            color: #ffffff;\n            text-align: center;\n        }\n        p{\n            color: #ffffff;\n            font-family: 'Poppins-Regular';\n            margin: 10px;\n        }\n        .card{\n            margin: 30px;\n            p{\n                font-family: 'Poppins-Light';\n                font-style: italic;\n            }\n        }\n\n    }\n\n    //Desktop\n    @media(min-width: 992px){\n        h3{\n            font-size: 30px;\n        }\n        p{\n            font-size: 20px;\n        }\n        .company-show-on-desktop{\n            display: flex;\n        }\n        .container-company{\n            display: none;\n        }\n        .company-card{\n            border-radius: 19px;\n            background: linear-gradient(180deg, #0081E8 0%, #07B3FD 100%);\n        }\n    }\n\n"])));
var AboutUs = function () {
    return (react_1["default"].createElement(AboutUsComponent, null,
        react_1["default"].createElement("div", { className: 'container-about-us' },
            react_1["default"].createElement("h3", null, "Sobre N\u00F3s"),
            react_1["default"].createElement("div", { className: 'content-center' },
                react_1["default"].createElement("p", null, "A Fox Soluctions foi fundada no ano de 2023 e foi desenvolvida para facilitar e auxiliar Pessoas que utilizam nossa plataforma a realizarem o upload e a visualiza\u00E7\u00E3o de documentos de maneira pr\u00E1tica, com o objetivo de inovar e trazer criatividade em sua identidade visual."))),
        react_1["default"].createElement("div", { className: 'company-show-on-desktop' },
            react_1["default"].createElement("div", { className: 'company-card' },
                react_1["default"].createElement("h3", null, "Miss\u00E3o"),
                react_1["default"].createElement("div", { className: 'content-mission' },
                    react_1["default"].createElement("p", { className: 'container-show-on-desktop' }, "Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de pap\u00E9is f\u00EDsicos"))),
            react_1["default"].createElement("div", { className: 'company-card' },
                react_1["default"].createElement("h3", null, "Vis\u00E3o"),
                react_1["default"].createElement("div", { className: 'content-vision' },
                    react_1["default"].createElement("p", { className: 'container-show-on-desktop' }, "Conseguir atingir o m\u00E1ximo de Pessoas poss\u00EDveis e ser uma das principais plataformas, a ser utilizada por grandes empresas"))),
            react_1["default"].createElement("div", { className: 'company-card' },
                react_1["default"].createElement("h3", null, "Valores"),
                react_1["default"].createElement("div", { className: 'content-worth' },
                    react_1["default"].createElement("p", { className: 'container-show-on-desktop' }, "Inova\u00E7\u00E3o"),
                    react_1["default"].createElement("p", { className: 'container-show-on-desktop' }, "Criatividade"),
                    react_1["default"].createElement("p", { className: 'container-show-on-desktop' }, "Respeito a natureza"),
                    react_1["default"].createElement("p", { className: 'container-show-on-desktop' }, "Respeito a diversidade")))),
        react_1["default"].createElement("div", { className: "container-company" },
            react_1["default"].createElement(react_2.Swiper, { className: 'swiper-company' },
                react_1["default"].createElement(react_2.SwiperSlide, { className: 'slide-company-item' },
                    react_1["default"].createElement("h3", null, "Miss\u00E3o"),
                    react_1["default"].createElement("div", { className: 'mission-card' },
                        react_1["default"].createElement("p", null, "Facilitar o cotidiano de Pessoas, sendo um sistema intuitivo e com o objetivo de favorecer a  sustentabilidade, diminuindo o uso de pap\u00E9is f\u00EDsicos"))),
                react_1["default"].createElement(react_2.SwiperSlide, { className: 'slide-company-item' },
                    react_1["default"].createElement("h3", null, "Vis\u00E3o"),
                    react_1["default"].createElement("div", { className: 'vision-card' },
                        react_1["default"].createElement("p", null, "Conseguir atingir o m\u00E1ximo de Pessoas poss\u00EDveis e ser uma das principais plataformas, a ser utilizada por grandes empresas"))),
                react_1["default"].createElement(react_2.SwiperSlide, { className: 'slide-company-item' },
                    react_1["default"].createElement("h3", null, "Valores"),
                    react_1["default"].createElement("div", { className: 'worth-card' },
                        react_1["default"].createElement("p", null, "Inova\u00E7\u00E3o"),
                        react_1["default"].createElement("p", null, "Criatividade"),
                        react_1["default"].createElement("p", null, "Respeito a natureza"),
                        react_1["default"].createElement("p", null, "Respeito a diversidade"))))),
        react_1["default"].createElement("div", { className: 'container-visual-identity' },
            react_1["default"].createElement("div", { className: "container-why-the-fox" },
                react_1["default"].createElement("h3", null, "Por que a Raposa?"),
                react_1["default"].createElement("p", null, "Escolhemos a raposa como representa\u00E7\u00E3o da nossa plataforma, pois este animal possui o s\u00EDmbolo de criatividade, intelig\u00EAncia e solu\u00E7\u00E3o de problemas. O que queremos transparecer em nosso sistema."),
                react_1["default"].createElement("img", { src: "/../images/logo-fox.svg", alt: "Logo da Fox Soluctions, raposa laranja e nome do projeto" }),
                react_1["default"].createElement("img", { src: "/../images/stella-aboutUs.svg", alt: "Nossa mascote, chamada Stella" })),
            react_1["default"].createElement("div", { className: "color-palette" },
                react_1["default"].createElement("h3", null, "Nossa Paleta de cores: "),
                react_1["default"].createElement("img", { src: "/../images/paleta-de-cores.svg", alt: "" }))),
        react_1["default"].createElement("div", { className: "container-developers" },
            react_1["default"].createElement("h3", null, "Desenvolvedores"),
            react_1["default"].createElement(react_2.Swiper, { className: 'swiper-developers' },
                react_1["default"].createElement(react_2.SwiperSlide, { className: 'slide-developers-item' },
                    react_1["default"].createElement("img", { src: "/../images/desenvolvedor-amanda.svg", alt: "" }),
                    react_1["default"].createElement("h4", null, "Amanda Valentim"),
                    react_1["default"].createElement("p", null, "Desenvolvedora Fullstack"),
                    react_1["default"].createElement("div", { className: 'card' },
                        react_1["default"].createElement("p", null, "\u201CA Fox Soluctions foi pensada nos min\u00EDmos detalhes, para auxiliar e tornar o processo de upload de documentos mais pr\u00E1tico\u201D"))),
                react_1["default"].createElement(react_2.SwiperSlide, { className: 'slide-developers-item' },
                    react_1["default"].createElement("img", { src: "/../images/desenvolvedor-gustavo.svg", alt: "" }),
                    react_1["default"].createElement("h4", null, "Gustavo Otac\u00EDlio"),
                    react_1["default"].createElement("p", null, "Desenvolvedor Fullstack"),
                    react_1["default"].createElement("div", { className: 'card' },
                        react_1["default"].createElement("p", null, "\u201CProgramar essa plataforma foi uma experi\u00EAncia \u00FAnica, e s\u00F3 de imaginar que a Fox Soluctions vai mudar a forma como empresa e candidato interagem, j\u00E1 \u00E9 uma grande vit\u00F3ria!\u201D"))),
                react_1["default"].createElement(react_2.SwiperSlide, { className: 'slide-developers-item' },
                    react_1["default"].createElement("img", { src: "/../images/desenvolvedor-gabriel.svg", alt: "" }),
                    react_1["default"].createElement("h4", null, "Gabriel Correia"),
                    react_1["default"].createElement("p", null, "Desenvolvedor Fullstack"),
                    react_1["default"].createElement("div", { className: 'card' },
                        react_1["default"].createElement("p", null, "\u201CNossa plataforma oferece facilidade e praticidade no envio de documentos, por isso pensamos na raposa, o s\u00EDmbolo da intelig\u00EAncia e resolu\u00E7\u00E3o de problemas.\u201D ")))))));
};
exports["default"] = AboutUs;
var templateObject_1;

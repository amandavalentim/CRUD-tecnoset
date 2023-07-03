'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var image_1 = require("next/image");
var BackgroundComponent = styled_1["default"].body(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #0A53B5;\n    position: relative;\n    width: 100%;\n    height: 1200px;\n        .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 350px;\n    }\n    #img2-3 {\n        position: absolute;\n        top: -40px;\n        left: -1px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 935px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1355px;\n    }\n    #img5-3 {\n        position: absolute;\n        top: 320px;\n        left: 1283px;\n    }\n    #img6-3 {\n        position: absolute;\n        top: 660px;\n        left: 1260px;\n    }\n    #img7-3 {\n        position: absolute;\n        top: 595px;\n        left: 635px;\n    }\n    #img8-2 {\n        position: absolute;\n        top: 720px;\n    }\n    #img9-3 {\n        position: absolute;\n        left: 740px;\n        top: 760px;\n    }\n    #img10 {\n        position: absolute;\n        top: -35px;\n        left: 435px;\n    }\n    #img11 {\n        position: absolute;\n        top: 770px;\n        left: 230px;\n        transition: tranform 1s;\n    }\n    #img12 {\n        position: absolute;\n        top: 670px;\n        left: 310px;\n    }\n    #img13 {\n        position: absolute;\n        top: 505px;\n        left: 290px;\n    }\n    \n    #img14 {\n        position: absolute;\n        top: 370px;\n        left: 220px;\n    }\n    #img15 {\n        position: absolute;\n        top: 90px;\n        left: 120px;\n    }\n    #img16 {\n        position: absolute;\n        top: -15px;\n        left: 300px;\n    }\n        \n    @media ((min-width: 1024px) and (max-width: 1180px)){\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 380px;\n        width: 250px;\n        height: 190px;\n        }\n    #img2-3 {\n        position: absolute;\n        top: -25px;\n        left: 1px;\n        width: 150px;\n        height: 210px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 610px;\n        width: 230px;\n        height: 80px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 853px;\n        width: 280px;\n        height: 250px;\n    }\n    #img5-3 {\n        position: absolute;\n        top: 425px;\n        left: 783px;\n        width: 240px;\n        height: 130px;\n    }\n    #img6-3 {\n        position: absolute;\n        top: 700px;\n        left: 773px;\n        width: 250px;\n        height: 220px;\n    }\n    #img7-3 {\n        position: absolute;\n        top: 620px;\n        left: 420px;\n        width: 310px;\n        height: 380px;\n    }\n    #img8-2 {\n        position: absolute;\n        top: 710px;\n        width: 390px;\n        height: 200px;\n    }\n    #img9-3 {\n        position: absolute;\n        left: 490px;\n        top: 775px;\n        width: 160px;\n        height: 160px;\n    }\n    #img10 {\n        position: absolute;\n        left: 210px;\n    }\n    }\n\n    @media((min-width: 1360px) and (max-width: 1550px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    .mobile {\n        display: none;\n    }\n    #img3 {\n        position: absolute;\n        left: 840px;\n    }\n    #img4 {\n        position: absolute;\n        left: 1100px;\n    }\n    #img5-3 {\n        position: absolute;\n        left: 1060px;\n        width: 300px;\n    }\n    #img6-3 {\n        position: absolute;\n        left: 1040px;\n    }\n    #img7-3 {\n        position: absolute;\n        left: 600px;\n    }\n    #img8-2 {\n        position: absolute;\n        width: 560px;\n    }\n    #img9-3 {\n        position: absolute;\n        left: 710px;\n    }\n    #img10 {\n        position: absolute;\n        left: 330px;\n    }\n}\n\n@media ((min-width: 320px) and (max-width: 640px)) {\n    background: linear-gradient(180deg, #0A53B5 0% ,#07B3FD 100%);\n    position: relative;\n    width: 100%;\n    height: 570px;\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    #img9-3 {\n        position: absolute;\n        top: 805px;\n        left: 105px;\n    }\n    #txt1 {\n        position: absolute;\n        top: 30px;\n        left: 125px;\n    }\n}\n"], ["\n    background-color: #0A53B5;\n    position: relative;\n    width: 100%;\n    height: 1200px;\n        .hide-on-small-desktops {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 350px;\n    }\n    #img2-3 {\n        position: absolute;\n        top: -40px;\n        left: -1px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 935px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 1355px;\n    }\n    #img5-3 {\n        position: absolute;\n        top: 320px;\n        left: 1283px;\n    }\n    #img6-3 {\n        position: absolute;\n        top: 660px;\n        left: 1260px;\n    }\n    #img7-3 {\n        position: absolute;\n        top: 595px;\n        left: 635px;\n    }\n    #img8-2 {\n        position: absolute;\n        top: 720px;\n    }\n    #img9-3 {\n        position: absolute;\n        left: 740px;\n        top: 760px;\n    }\n    #img10 {\n        position: absolute;\n        top: -35px;\n        left: 435px;\n    }\n    #img11 {\n        position: absolute;\n        top: 770px;\n        left: 230px;\n        transition: tranform 1s;\n    }\n    #img12 {\n        position: absolute;\n        top: 670px;\n        left: 310px;\n    }\n    #img13 {\n        position: absolute;\n        top: 505px;\n        left: 290px;\n    }\n    \n    #img14 {\n        position: absolute;\n        top: 370px;\n        left: 220px;\n    }\n    #img15 {\n        position: absolute;\n        top: 90px;\n        left: 120px;\n    }\n    #img16 {\n        position: absolute;\n        top: -15px;\n        left: 300px;\n    }\n        \n    @media ((min-width: 1024px) and (max-width: 1180px)){\n        .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    .mobile {\n        display: none;\n    }\n    #img1 {\n        position: absolute;\n        top: 380px;\n        width: 250px;\n        height: 190px;\n        }\n    #img2-3 {\n        position: absolute;\n        top: -25px;\n        left: 1px;\n        width: 150px;\n        height: 210px;\n    }\n    #img3 {   \n        position: absolute;\n        top: -5px;\n        left: 610px;\n        width: 230px;\n        height: 80px;\n    }\n    #img4 {\n        position: absolute;\n        top: -5px;\n        left: 853px;\n        width: 280px;\n        height: 250px;\n    }\n    #img5-3 {\n        position: absolute;\n        top: 425px;\n        left: 783px;\n        width: 240px;\n        height: 130px;\n    }\n    #img6-3 {\n        position: absolute;\n        top: 700px;\n        left: 773px;\n        width: 250px;\n        height: 220px;\n    }\n    #img7-3 {\n        position: absolute;\n        top: 620px;\n        left: 420px;\n        width: 310px;\n        height: 380px;\n    }\n    #img8-2 {\n        position: absolute;\n        top: 710px;\n        width: 390px;\n        height: 200px;\n    }\n    #img9-3 {\n        position: absolute;\n        left: 490px;\n        top: 775px;\n        width: 160px;\n        height: 160px;\n    }\n    #img10 {\n        position: absolute;\n        left: 210px;\n    }\n    }\n\n    @media((min-width: 1360px) and (max-width: 1550px)) {\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: flex;\n        justify-content: space-between;\n    }\n    .mobile {\n        display: none;\n    }\n    #img3 {\n        position: absolute;\n        left: 840px;\n    }\n    #img4 {\n        position: absolute;\n        left: 1100px;\n    }\n    #img5-3 {\n        position: absolute;\n        left: 1060px;\n        width: 300px;\n    }\n    #img6-3 {\n        position: absolute;\n        left: 1040px;\n    }\n    #img7-3 {\n        position: absolute;\n        left: 600px;\n    }\n    #img8-2 {\n        position: absolute;\n        width: 560px;\n    }\n    #img9-3 {\n        position: absolute;\n        left: 710px;\n    }\n    #img10 {\n        position: absolute;\n        left: 330px;\n    }\n}\n\n@media ((min-width: 320px) and (max-width: 640px)) {\n    background: linear-gradient(180deg, #0A53B5 0% ,#07B3FD 100%);\n    position: relative;\n    width: 100%;\n    height: 570px;\n    .hide-on-small-desktops {\n        display: none;\n    }\n    .desktops-1024-1100-screens {\n        display: none;\n    }\n    .desktop-1098-screens {\n        display: none;\n    }\n    .mobile {\n        display: flex;\n        justify-content: space-between;\n    }\n    #img9-3 {\n        position: absolute;\n        top: 805px;\n        left: 105px;\n    }\n    #txt1 {\n        position: absolute;\n        top: 30px;\n        left: 125px;\n    }\n}\n"])));
var Background = function () {
    return (React.createElement(BackgroundComponent, null,
        React.createElement("nav", { className: 'hide-on-small-desktops' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 390, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-21.png", width: 175, height: 285, alt: 'img-2', id: 'img2-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 350, height: 165, alt: 'img-5', id: 'img5-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-9.png", width: 325, height: 290, alt: 'img-6', id: 'img6-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 400, height: 455, alt: 'img-7', id: 'img7-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-8', id: 'img8-2' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 180, height: 180, alt: 'img-9', id: 'img9-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-18.png", width: 230, height: 80, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-4.png", width: 140, height: 140, alt: 'img-11', id: 'img11' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-5.png", width: 140, height: 140, alt: 'img-12', id: 'img12' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-6.png", width: 180, height: 180, alt: 'img-13', id: 'img13' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw6-2.png", width: 190, height: 190, alt: 'img-14', id: 'img14' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw2-4.png", width: 320, height: 320, alt: 'img-15', id: 'img15' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-1.png", width: 180, height: 180, alt: 'img-16', id: 'img16' })),
        React.createElement("nav", { className: 'desktops-1024-1100-screens' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 390, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-21.png", width: 175, height: 285, alt: 'img-2', id: 'img2-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 350, height: 165, alt: 'img-5', id: 'img5-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-9.png", width: 325, height: 290, alt: 'img-6', id: 'img6-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 400, height: 455, alt: 'img-7', id: 'img7-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-8', id: 'img8-2' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 180, height: 180, alt: 'img-9', id: 'img9-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-18.png", width: 230, height: 90, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-4.png", width: 140, height: 140, alt: 'img-11', id: 'img11' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-5.png", width: 140, height: 140, alt: 'img-12', id: 'img12' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-6.png", width: 180, height: 180, alt: 'img-13', id: 'img13' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw6-2.png", width: 190, height: 190, alt: 'img-14', id: 'img14' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw2-4.png", width: 320, height: 320, alt: 'img-15', id: 'img15' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-1.png", width: 180, height: 180, alt: 'img-16', id: 'img16' })),
        React.createElement("nav", { className: 'desktop-1098-screens' },
            React.createElement(image_1["default"], { src: "/images/Ellipse-1.png", width: 390, height: 225, alt: 'img-1', id: 'img1' }),
            React.createElement(image_1["default"], { src: "/images/Rectangle-21.png", width: 175, height: 285, alt: 'img-2', id: 'img2-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-5.png", width: 200, height: 65, alt: 'img-3.8', id: 'img3' }),
            React.createElement(image_1["default"], { src: "/images/header.png", width: 270, height: 225, alt: 'img-4', id: 'img4' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-8.png", width: 350, height: 165, alt: 'img-5', id: 'img5-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-9.png", width: 325, height: 290, alt: 'img-6', id: 'img6-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-7.png", width: 400, height: 455, alt: 'img-7', id: 'img7-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-6-1.png", width: 450, height: 180, alt: 'img-8', id: 'img8-2' }),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 180, height: 180, alt: 'img-9', id: 'img9-3' }),
            React.createElement(image_1["default"], { src: "/images/Ellipse-18.png", width: 230, height: 80, alt: 'img-10', id: 'img10' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-4.png", width: 140, height: 140, alt: 'img-11', id: 'img11' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-5.png", width: 140, height: 140, alt: 'img-12', id: 'img12' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-6.png", width: 180, height: 180, alt: 'img-13', id: 'img13' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw6-2.png", width: 190, height: 190, alt: 'img-14', id: 'img14' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw2-4.png", width: 320, height: 320, alt: 'img-15', id: 'img15' }),
            React.createElement(image_1["default"], { src: "/images/fox_paw-1.png", width: 180, height: 180, alt: 'img-16', id: 'img16' })),
        React.createElement("nav", { className: 'mobile' },
            React.createElement("h1", { id: 'txt1' }, "Login"),
            React.createElement(image_1["default"], { src: "/images/Stella.png", width: 120, height: 120, alt: 'img-9', id: 'img9-3' }))));
};
exports["default"] = Background;
var templateObject_1;

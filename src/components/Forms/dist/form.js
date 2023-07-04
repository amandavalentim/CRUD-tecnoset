'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var FormComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    .hide-on-mobile {\n        display: flex;\n    }\n    .show-on-mobile {\n        display: none;\n    }\n    .show-on-tablet {\n        display: none;\n    }\n    .box-container {\n        position: absolute;\n        left: 400px;\n        top: 300px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 270px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           div {\n               width: 100%;\n                .submit {\n                    position: absolute;\n                    left: 185px;\n                    width: 150px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    justify-content: center;\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n    //Amanda\n    @media (min-width: 1024px) and (max-width: 1180px) {\n        .hide-on-mobile {\n            display: flex;\n        }\n        .show-on-mobile {\n            display: none;\n        }\n        .show-on-tablet {\n            display: none;\n        }\n    .box-container {\n        position: absolute;\n        left: 245px;\n        top: 300px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n          \n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           .enter {\n               width: 400px;\n                .submit {\n                    position: absolute;\n                    left: 152px;\n                    /* width: 100%; */\n                    width: 200px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    /* justify-content: center; */\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    } \n}\n    //Gabriel\n    @media (min-width: 1335px) and (max-width: 1355px) {\n        .show-on-mobile {\n            display: none;\n        }\n        .hide-on-mobile {\n            display: flex;\n        }\n        .show-on-tablet {\n            display: none;\n        }\n        .box-container {\n            position: absolute;\n            left: 400px;\n            top: 300px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            width: 528px;\n            height: 80vh;\n            display: flex;\n            justify-content: center;\n            form {\n                #title {\n                    color: #FFFF;\n                    text-align: center;\n                    margin: 30px;\n                    font-family: 'Poppins-Bold';\n                }\n                .login {\n                    margin: 50px;\n                    display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n            .enter {\n               width: 400px;\n                .submit {\n                    position: absolute;\n                    left: 160px;\n                    top: 400px;\n                    /* width: 100%; */\n                    width: 200px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    /* justify-content: center; */\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n}\n    //Mobile\n    @media (min-width: 320px) and (max-width: 768px){\n        .show-on-mobile {\n            display: flex;\n            justify-content: space-between;\n        }\n        .hide-on-mobile{\n            display: none;\n        }\n        .show-on-tablet {\n            display: none;\n        }\n        .box-container-mobile {\n            border-radius: 19px;\n            width: 528px;\n            height: 100vh;\n            display: flex;\n            justify-content: center;\n            margin-left: -12px;\n            margin-top: -350px;\n            form {\n                #title-mobile {\n                    color: #FFFF;\n                    text-align: center;\n                    margin: 30px;\n                    font-family: 'Poppins-Bold';\n                }\n                .login-mobile {\n                        margin: 50px;\n                        display: flex;\n                    input {\n                        border: none;\n                        width: 250px;\n                        border-bottom: 1px solid #FFFF;\n                        background-color: rgba(7, 179, 253, 0);\n                        justify-content: center;\n                        align-items: center;\n                        padding-bottom: 20px;\n                    }\n\n                    input::placeholder{\n                        font-size: 10px;\n                        font-family: 'Poppins-Medium';\n                        color: #FFFF;\n                    }\n                }\n            .enter-mobile {\n                    width: 100%;\n                    .submit-mobile {\n                        position: absolute;\n                        left: 45px;\n                        width: 70%;\n                        height: 40px;\n                        margin-top: 30px;\n                        border-radius: 20px;\n                        border: none;\n                        background-color: #93B413;\n                        justify-content: center;\n                        align-items: center;\n                        color: #FFFF;\n                        font-family: 'Poppins-Medium';\n                        font-size: 15px; \n                        cursor: pointer;\n                    }\n                }\n\n                .forget-mobile {\n                    color: #F47216;\n                    font-size: 15px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    margin-bottom: 10px;\n                    cursor: pointer;\n                    \n                } \n                .create_account-mobile {\n                    color: #FFF;\n                    font-size: 15px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    cursor: pointer;\n                    span {\n                        color: #F47216;\n                    }\n                } \n            }\n        }\n    }\n\n    //Tablet\n    @media (min-width: 768px) and (max-width: 773px) {\n        .hide-on-mobile{\n            display: none;\n        }\n        .show-on-mobile{\n            display: none;\n        }\n        .show-on-tablet{\n            display:flex;\n        }\n        .box-container-tablet {\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            width: 528px;\n            height: 490px;\n            box-shadow: 0px 0px 2px 0px;\n            display: flex;\n            justify-content: center;\n            margin-left: 121px;\n            margin-top: -190px;\n            form {\n                #title-tablet {\n                    color: #FFFF;\n                    text-align: center;\n                    /* font-size: ; */\n                    margin: 30px;\n                    font-family: 'Poppins-Bold';\n                }\n                .login-tablet {\n                    margin: 50px;\n                    display: flex;\n                    input {\n                        border: none;\n                        width: 300px;\n                        border-bottom: 1px solid #FFFF;\n                        background-color: rgba(7, 179, 253, 0);\n                        justify-content: center;\n                        align-items: center;\n                        padding-bottom: 20px;\n                    }\n\n                    input::placeholder{\n                        font-size: 15px;\n                        font-family: 'Poppins-Medium';\n                        color: #FFFF;\n                    }\n                }\n                .enter-tablet {\n                    width: 400px;\n                .submit-tablet {\n                    position: absolute;\n                    left: 285px;\n                    top: 600px;\n                    /* width: 100%; */\n                    width: 200px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    /* justify-content: center; */\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n                .forget-tablet {\n                    color: #F47216;\n                    font-size: 24px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    margin-bottom: 10px;\n                    cursor: pointer;\n                } \n                .create_account-tablet {\n                    color: #FFF;\n                    font-size: 24px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    cursor: pointer;\n                    span {\n                        color: #F47216;\n                    }\n                } \n            }\n        }\n    }\n\n    @media (min-width:375px) and (max-width:425px) {\n        .logo-Fox {\n            \n        }\n    }\n"], ["\n\n    .hide-on-mobile {\n        display: flex;\n    }\n    .show-on-mobile {\n        display: none;\n    }\n    .show-on-tablet {\n        display: none;\n    }\n    .box-container {\n        position: absolute;\n        left: 400px;\n        top: 300px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 270px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           div {\n               width: 100%;\n                .submit {\n                    position: absolute;\n                    left: 185px;\n                    width: 150px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    justify-content: center;\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n    //Amanda\n    @media (min-width: 1024px) and (max-width: 1180px) {\n        .hide-on-mobile {\n            display: flex;\n        }\n        .show-on-mobile {\n            display: none;\n        }\n        .show-on-tablet {\n            display: none;\n        }\n    .box-container {\n        position: absolute;\n        left: 245px;\n        top: 300px;\n        border-radius: 19px;\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        width: 528px;\n        height: 490px;\n        display: flex;\n        justify-content: center;\n          \n        form {\n            #title {\n                color: #FFFF;\n                text-align: center;\n                margin: 30px;\n                font-family: 'Poppins-Bold';\n            }\n            .login {\n                margin: 50px;\n                display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n           .enter {\n               width: 400px;\n                .submit {\n                    position: absolute;\n                    left: 152px;\n                    /* width: 100%; */\n                    width: 200px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    /* justify-content: center; */\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    } \n}\n    //Gabriel\n    @media (min-width: 1335px) and (max-width: 1355px) {\n        .show-on-mobile {\n            display: none;\n        }\n        .hide-on-mobile {\n            display: flex;\n        }\n        .show-on-tablet {\n            display: none;\n        }\n        .box-container {\n            position: absolute;\n            left: 400px;\n            top: 300px;\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            width: 528px;\n            height: 80vh;\n            display: flex;\n            justify-content: center;\n            form {\n                #title {\n                    color: #FFFF;\n                    text-align: center;\n                    margin: 30px;\n                    font-family: 'Poppins-Bold';\n                }\n                .login {\n                    margin: 50px;\n                    display: flex;\n                input {\n                    border: none;\n                    width: 300px;\n                    border-bottom: 1px solid #FFFF;\n                    background-color: rgba(7, 179, 253, 0);\n                    justify-content: center;\n                    align-items: center;\n                    padding-bottom: 20px;\n                }\n\n                input::placeholder{\n                    font-size: 15px;\n                    font-family: 'Poppins-Medium';\n                    color: #FFFF;\n                }\n            }\n            .enter {\n               width: 400px;\n                .submit {\n                    position: absolute;\n                    left: 160px;\n                    top: 400px;\n                    /* width: 100%; */\n                    width: 200px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    /* justify-content: center; */\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n            .forget {\n                color: #F47216;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                margin-bottom: 10px;\n                cursor: pointer;\n            } \n            .create_account {\n                color: #FFF;\n                font-size: 24px;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 500;\n                line-height: normal;\n                text-align: center;\n                cursor: pointer;\n                span {\n                    color: #F47216;\n                }\n            } \n        }\n    }\n}\n    //Mobile\n    @media (min-width: 320px) and (max-width: 768px){\n        .show-on-mobile {\n            display: flex;\n            justify-content: space-between;\n        }\n        .hide-on-mobile{\n            display: none;\n        }\n        .show-on-tablet {\n            display: none;\n        }\n        .box-container-mobile {\n            border-radius: 19px;\n            width: 528px;\n            height: 100vh;\n            display: flex;\n            justify-content: center;\n            margin-left: -12px;\n            margin-top: -350px;\n            form {\n                #title-mobile {\n                    color: #FFFF;\n                    text-align: center;\n                    margin: 30px;\n                    font-family: 'Poppins-Bold';\n                }\n                .login-mobile {\n                        margin: 50px;\n                        display: flex;\n                    input {\n                        border: none;\n                        width: 250px;\n                        border-bottom: 1px solid #FFFF;\n                        background-color: rgba(7, 179, 253, 0);\n                        justify-content: center;\n                        align-items: center;\n                        padding-bottom: 20px;\n                    }\n\n                    input::placeholder{\n                        font-size: 10px;\n                        font-family: 'Poppins-Medium';\n                        color: #FFFF;\n                    }\n                }\n            .enter-mobile {\n                    width: 100%;\n                    .submit-mobile {\n                        position: absolute;\n                        left: 45px;\n                        width: 70%;\n                        height: 40px;\n                        margin-top: 30px;\n                        border-radius: 20px;\n                        border: none;\n                        background-color: #93B413;\n                        justify-content: center;\n                        align-items: center;\n                        color: #FFFF;\n                        font-family: 'Poppins-Medium';\n                        font-size: 15px; \n                        cursor: pointer;\n                    }\n                }\n\n                .forget-mobile {\n                    color: #F47216;\n                    font-size: 15px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    margin-bottom: 10px;\n                    cursor: pointer;\n                    \n                } \n                .create_account-mobile {\n                    color: #FFF;\n                    font-size: 15px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    cursor: pointer;\n                    span {\n                        color: #F47216;\n                    }\n                } \n            }\n        }\n    }\n\n    //Tablet\n    @media (min-width: 768px) and (max-width: 773px) {\n        .hide-on-mobile{\n            display: none;\n        }\n        .show-on-mobile{\n            display: none;\n        }\n        .show-on-tablet{\n            display:flex;\n        }\n        .box-container-tablet {\n            border-radius: 19px;\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            width: 528px;\n            height: 490px;\n            box-shadow: 0px 0px 2px 0px;\n            display: flex;\n            justify-content: center;\n            margin-left: 121px;\n            margin-top: -190px;\n            form {\n                #title-tablet {\n                    color: #FFFF;\n                    text-align: center;\n                    /* font-size: ; */\n                    margin: 30px;\n                    font-family: 'Poppins-Bold';\n                }\n                .login-tablet {\n                    margin: 50px;\n                    display: flex;\n                    input {\n                        border: none;\n                        width: 300px;\n                        border-bottom: 1px solid #FFFF;\n                        background-color: rgba(7, 179, 253, 0);\n                        justify-content: center;\n                        align-items: center;\n                        padding-bottom: 20px;\n                    }\n\n                    input::placeholder{\n                        font-size: 15px;\n                        font-family: 'Poppins-Medium';\n                        color: #FFFF;\n                    }\n                }\n                .enter-tablet {\n                    width: 400px;\n                .submit-tablet {\n                    position: absolute;\n                    left: 285px;\n                    top: 600px;\n                    /* width: 100%; */\n                    width: 200px;\n                    height: 40px;\n                    margin-top: 30px;\n                    border-radius: 20px;\n                    border: none;\n                    background-color: #93B413;\n                    /* justify-content: center; */\n                    align-items: center;\n                    color: #FFFF;\n                    font-family: 'Poppins-Medium';\n                    font-size: 20px; \n                    cursor: pointer;\n                }\n            }\n\n                .forget-tablet {\n                    color: #F47216;\n                    font-size: 24px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    margin-bottom: 10px;\n                    cursor: pointer;\n                } \n                .create_account-tablet {\n                    color: #FFF;\n                    font-size: 24px;\n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: 500;\n                    line-height: normal;\n                    text-align: center;\n                    cursor: pointer;\n                    span {\n                        color: #F47216;\n                    }\n                } \n            }\n        }\n    }\n\n    @media (min-width:375px) and (max-width:425px) {\n        .logo-Fox {\n            \n        }\n    }\n"])));
var Form = function () {
    return (React.createElement(FormComponent, null,
        React.createElement("nav", { className: 'hide-on-mobile' },
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
                    React.createElement("div", { className: 'enter' },
                        React.createElement("button", { className: 'submit' }, "Entrar"))))),
        React.createElement("nav", { className: 'show-on-mobile' },
            React.createElement("div", { className: 'box-container-mobile' },
                React.createElement("form", null,
                    React.createElement("h1", { id: 'title-mobile' }),
                    React.createElement("div", { className: 'login-mobile' },
                        React.createElement("input", { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                    React.createElement("div", { className: 'login-mobile' },
                        React.createElement("input", { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                    React.createElement("div", { className: 'forget-mobile' },
                        React.createElement("h4", null,
                            React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                    React.createElement("div", { className: 'create_account-mobile' },
                        React.createElement("h4", null,
                            "N\u00E3o tem uma conta? ",
                            React.createElement("span", { className: 'orange' }, "Crie uma"))),
                    React.createElement("div", { className: 'enter-mobile' },
                        React.createElement("button", { className: 'submit-mobile' }, "Entrar"))))),
        React.createElement("nav", { className: 'show-on-tablet' },
            React.createElement("div", { className: 'box-container-tablet' },
                React.createElement("form", null,
                    React.createElement("h1", { id: 'title-tablet' }, "Login"),
                    React.createElement("div", { className: 'login-tablet' },
                        React.createElement("input", { type: "email", name: "e-mail", id: "e-mail", placeholder: 'E-mail' })),
                    React.createElement("div", { className: 'login-tablet' },
                        React.createElement("input", { type: "password", name: "password", id: "password", placeholder: 'Senha' })),
                    React.createElement("div", { className: 'forget-tablet' },
                        React.createElement("h4", null,
                            React.createElement("span", { className: 'orange' }, "Esqueceu a senha?"))),
                    React.createElement("div", { className: 'create_account-tablet' },
                        React.createElement("h4", null,
                            "N\u00E3o tem uma conta? ",
                            React.createElement("span", { className: 'orange' }, "Crie uma"))),
                    React.createElement("div", { className: 'enter-tablet' },
                        React.createElement("button", { className: 'submit-tablet' }, "Entrar")))))));
};
exports["default"] = Form;
var templateObject_1;

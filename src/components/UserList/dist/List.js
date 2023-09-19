//developed by Amanda Valentim
'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_1 = require("@emotion/styled");
var fa6_1 = require("react-icons/fa6");
var ListComponent = styled_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: #0C65C2;\n    display: flex;\n    flex-direction: column;\n    .dashboard-mobile{\n        background-color: #3A9EB6;\n        padding: 10px;\n        display: flex;\n        flex-direction: column;\n        .icon-profile{\n            display: flex; \n            justify-content: space-between;\n            .search{\n                display: flex;\n                align-items: center;\n                color: #FFFFFF;\n                \n            }\n            .user-profile-mobile {\n                min-width: 20px;\n                min-height: 20px;\n            }\n            \n        }\n        .box-mobile{\n            display: flex; \n            align-items: center;\n            justify-content: center;\n            flex-direction: row;\n            .documents{\n                background-color: #07B3FD;\n                margin: 3px;\n                padding: 6px;\n                border-radius: 3px;\n                width: 120px;\n            }\n            .number{\n                text-align: center;\n                color: #FFFFFF;\n            }\n            p{\n                text-align: center;\n                font-family: 'Poppins-Semibold';\n                color: #FFFFFF;\n            }\n            .users{\n                background-color: #F47216;\n                margin: 3px;\n                padding: 6px;\n                border-radius: 3px;\n                width: 120px;\n            }\n        }\n        \n    }\n    .dashboard-desktop{\n        display: none;\n    }\n\n    .list-mobile{\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        border-radius: 20px;\n        min-width: 260px;\n        margin: 10%;\n        display: flex;\n        flex-direction: column;\n        h3{\n            text-align: center;\n            margin: 20px;\n            font-family: 'Poppins-Bold';\n            color: #FFFFFF;\n        }\n        .subtitles-mobile{\n            color: #FFFFFF;\n        }\n        \n        \n    }\n    .list-desktop{\n        display: none;\n    }\n\n    //Desktop\n    @media (min-width: 922px){\n        .dashboard-mobile{\n            display: none;\n        }\n        .dashboard-desktop{\n            background-color: #3A9EB6;\n            display: flex;\n            text-align: center;\n            align-items: center;\n            justify-content: center;\n            flex-direction: row;\n            justify-content: space-between;\n            .search{\n                margin: 20px;\n                color: #FFFFFF;\n            }\n            .box-desktop{\n                display: flex;\n                text-align: center;\n                flex-direction: row;\n                .documents{\n                    background-color: #07B3FD;\n                    margin: 10px;\n                    padding: 6px;\n                    border-radius: 3px;\n                    width: 120px;\n                }\n                h2{\n                    color: #FFFFFF;\n                }\n                p{\n                    color: #FFFFFF;\n                    font-family: 'Poppins-Semibold';\n                }\n                .users{\n                    background-color: #F47216;\n                    margin: 10px;\n                    padding: 6px;\n                    border-radius: 3px;\n                    width: 120px;\n                }\n            }\n            .user-profile-desktop{\n                margin: 20px;\n            }\n        }\n        .list-mobile{\n            display: none;\n        }\n        .list-desktop{\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            border-radius: 20px;\n            min-width: 100px;\n            margin: 3% 10% 3% 10%;\n            display: flex;\n            flex-direction: column;\n            h3{\n                text-align: center;\n                margin: 25px;\n                color: #FFFFFF;\n                font-family: 'Poppins-Bold';\n                font-size: 25px;\n            }\n            .subtitles-desktop{\n                color: #FFFFFF;\n                font-family: 'Poppins-Semibold';\n            }\n        }\n    }\n\n"], ["\n    background: #0C65C2;\n    display: flex;\n    flex-direction: column;\n    .dashboard-mobile{\n        background-color: #3A9EB6;\n        padding: 10px;\n        display: flex;\n        flex-direction: column;\n        .icon-profile{\n            display: flex; \n            justify-content: space-between;\n            .search{\n                display: flex;\n                align-items: center;\n                color: #FFFFFF;\n                \n            }\n            .user-profile-mobile {\n                min-width: 20px;\n                min-height: 20px;\n            }\n            \n        }\n        .box-mobile{\n            display: flex; \n            align-items: center;\n            justify-content: center;\n            flex-direction: row;\n            .documents{\n                background-color: #07B3FD;\n                margin: 3px;\n                padding: 6px;\n                border-radius: 3px;\n                width: 120px;\n            }\n            .number{\n                text-align: center;\n                color: #FFFFFF;\n            }\n            p{\n                text-align: center;\n                font-family: 'Poppins-Semibold';\n                color: #FFFFFF;\n            }\n            .users{\n                background-color: #F47216;\n                margin: 3px;\n                padding: 6px;\n                border-radius: 3px;\n                width: 120px;\n            }\n        }\n        \n    }\n    .dashboard-desktop{\n        display: none;\n    }\n\n    .list-mobile{\n        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n        border-radius: 20px;\n        min-width: 260px;\n        margin: 10%;\n        display: flex;\n        flex-direction: column;\n        h3{\n            text-align: center;\n            margin: 20px;\n            font-family: 'Poppins-Bold';\n            color: #FFFFFF;\n        }\n        .subtitles-mobile{\n            color: #FFFFFF;\n        }\n        \n        \n    }\n    .list-desktop{\n        display: none;\n    }\n\n    //Desktop\n    @media (min-width: 922px){\n        .dashboard-mobile{\n            display: none;\n        }\n        .dashboard-desktop{\n            background-color: #3A9EB6;\n            display: flex;\n            text-align: center;\n            align-items: center;\n            justify-content: center;\n            flex-direction: row;\n            justify-content: space-between;\n            .search{\n                margin: 20px;\n                color: #FFFFFF;\n            }\n            .box-desktop{\n                display: flex;\n                text-align: center;\n                flex-direction: row;\n                .documents{\n                    background-color: #07B3FD;\n                    margin: 10px;\n                    padding: 6px;\n                    border-radius: 3px;\n                    width: 120px;\n                }\n                h2{\n                    color: #FFFFFF;\n                }\n                p{\n                    color: #FFFFFF;\n                    font-family: 'Poppins-Semibold';\n                }\n                .users{\n                    background-color: #F47216;\n                    margin: 10px;\n                    padding: 6px;\n                    border-radius: 3px;\n                    width: 120px;\n                }\n            }\n            .user-profile-desktop{\n                margin: 20px;\n            }\n        }\n        .list-mobile{\n            display: none;\n        }\n        .list-desktop{\n            background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);\n            border-radius: 20px;\n            min-width: 100px;\n            margin: 3% 10% 3% 10%;\n            display: flex;\n            flex-direction: column;\n            h3{\n                text-align: center;\n                margin: 25px;\n                color: #FFFFFF;\n                font-family: 'Poppins-Bold';\n                font-size: 25px;\n            }\n            .subtitles-desktop{\n                color: #FFFFFF;\n                font-family: 'Poppins-Semibold';\n            }\n        }\n    }\n\n"])));
var List = function () {
    return (React.createElement(ListComponent, null,
        React.createElement("div", { className: 'dashboard-mobile' },
            React.createElement("div", { className: 'icon-profile' },
                React.createElement("div", { className: 'search' },
                    React.createElement(fa6_1.FaMagnifyingGlass, null)),
                React.createElement("div", { className: 'user-profile-mobile' },
                    React.createElement("img", { src: "/images/fox-mobile.png", alt: "", width: '40px', height: '30px' }))),
            React.createElement("div", { className: 'box-mobile' },
                React.createElement("div", { className: 'documents' },
                    React.createElement("h2", { className: 'number' }, "10"),
                    React.createElement("p", null, "Documentos")),
                React.createElement("div", { className: 'users' },
                    React.createElement("h2", { className: 'number' }, "10"),
                    React.createElement("p", null, "Usu\u00E1rios")))),
        React.createElement("div", { className: 'dashboard-desktop' },
            React.createElement("div", { className: 'search' },
                React.createElement(fa6_1.FaMagnifyingGlass, null)),
            React.createElement("div", { className: 'box-desktop' },
                React.createElement("div", { className: 'documents' },
                    React.createElement("h2", { className: 'number' }, "10"),
                    React.createElement("p", null, "Documentos")),
                React.createElement("div", { className: 'users' },
                    React.createElement("h2", { className: 'number' }, "10"),
                    React.createElement("p", null, "Usu\u00E1rios"))),
            React.createElement("div", { className: 'user-profile-desktop' },
                React.createElement("img", { src: "/images/fox-mobile.png", alt: "", width: '50px', height: '50px' }))),
        React.createElement("div", { className: "list-mobile" },
            React.createElement("h3", null, "Lista de Usu\u00E1rios"),
            React.createElement("table", { className: "table-striped-mobile" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "subtitles-mobile" }, "Foto"),
                        React.createElement("th", { className: "subtitles-mobile" }, "Nome"))),
                React.createElement("tbody", { id: "table-users" }))),
        React.createElement("div", { className: "list-desktop" },
            React.createElement("h3", null, "Lista de Usu\u00E1rios"),
            React.createElement("table", { className: "table-striped-desktop" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "subtitles-desktop" }, "Foto"),
                        React.createElement("th", { className: "subtitles-desktop" }, "Nome"),
                        React.createElement("th", { className: "subtitles-desktop" }, "Criado em"),
                        React.createElement("th", { className: "subtitles-desktop" }, "Atualizado em"))),
                React.createElement("tbody", { id: "table-users" })))));
};
exports["default"] = List;
var templateObject_1;

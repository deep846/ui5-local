// sap.ui.define([
// 	"sap/m/Button",
// 	"sap/m/MessageToast"
// ], (Button, MessageToast) => {
// 	"use strict";

// 	new Button({
// 		text: "Ready...",
// 		press() {
// 			MessageToast.show("Hello World!");
// 		}
// 	}).placeAt("content");

// });

sap.ui.define([

    "sap/m/Text",
    "sap/m/Button",
	"sap/m/MessageToast",
    "sap/ui/core/mvc/XMLView"

],function (Text,Button,MessageToast,XMLView) {
    "use strict";
    new Text({
        text: "Hello ui 5 we are here"
    }).placeAt("content")

    new Button({
        text : "Test",
        press : function () {
            MessageToast.show("Yessss you are developed a control")

        }
    }).placeAt("content")


    XMLView.create({
		viewName: "ui5.quickstart.App"
	}).then((oView) => oView.placeAt("content"));
})



sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
    "sap/ui/core/mvc/XMLView"
    
], (Button, MessageToast,MessageBox,XMLView) => {
	"use strict";

	new XMLView({
		viewName: "nm.view.App",
		id : "vname"
	}).placeAt("content")

});
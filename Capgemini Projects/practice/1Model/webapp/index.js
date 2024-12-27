sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
    "sap/ui/core/mvc/XMLView"
    
], (Button, MessageToast,MessageBox,XMLView) => {
	"use strict";

	new sap.m.Button({
		text: "Ready..",
		press: function(){
			MessageBox.success("Done")
		}
	}).placeAt("content");


	new XMLView({
		viewName: "nm.view.App",
		id : "vname"
	}).placeAt("content")

});
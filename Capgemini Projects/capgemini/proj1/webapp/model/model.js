sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/BindingMode"
], function(
	JSONModel,
	Controller,
	BindingMode
) {
	"use strict";
    return  {
        onModelCall: function(spath){
            var oModel = new JSONModel(spath);
            oModel.setDefaultBindingMode(BindingMode.OneWay); // oneway binding
            return oModel;
        }
    }
});
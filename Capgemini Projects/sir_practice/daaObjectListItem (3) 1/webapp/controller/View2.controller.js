sap.ui.define([
		"namespace/controller/BaseController"
		], function(Controller) {
			"use strict";
		
			return Controller.extend("namespace.controller.View2", {

			onInit:function(){
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.attachRoutePatternMatched(this._onMatched, this);
				console.log("Hello");
				
			},

            onPressView1:function(){
            	// var oModle=this.getView().getModel("toolsModel")
            	// var oApp=this.getView().getParent();
            	// oApp.to("idView");

				var oRouter=this.getOwnerComponent().getRouter();
				    oRouter.navTo("View1");
            },

			_onMatched: function(oEvent) {
				var sIndex=oEvent.mParameters.arguments.tools;
				var rPath="toolsModel>/suppliers/"+sIndex;
				var oView=this.getView();
				oView.bindElement(rPath,"toolsModel");
	
			},






			});
			
			});
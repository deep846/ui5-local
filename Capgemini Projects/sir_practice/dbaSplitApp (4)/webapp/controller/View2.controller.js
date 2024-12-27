sap.ui.define([
		"namespace/controller/BaseController",
		"sap/ui/core/Fragment"
		], function(Controller,Fragment) {
			"use strict";
		
			return Controller.extend("namespace.controller.View2", {
			
				onInit: function() {
					var oRouter = this.getOwnerComponent().getRouter();
					oRouter.attachRoutePatternMatched(this._onMatched, this);
		
				},

				_onMatched: function(oEvent) {
					var sIndex=oEvent.mParameters.arguments.tools;
					var rPath="toolsModel>/suppliers/"+sIndex;
					var oView=this.getView();
					oView.bindElement(rPath);
		
				},
				onConfirm:function(oEvent){
					var oItem=oEvent.getParameter("selectedItem");
					var sItem=oItem.mProperties.value;
					var sInpt=sap.ui.getCore().byId(this.id);
					sInpt.setValue(sItem);

				},

             onF4Help:function(oEvent){
             	this.id=oEvent.getSource().getId();
             	
             	if(!this.oFragment){
             		this.oFragment=Fragment.load({
             			name:"namespace.fragments.popup",
             			controller:this 
             		}).then(function(oDialog){
             			this.oFragment=oDialog;
             			this.getView().addDependent(this.oFragment);
             			this.oFragment.open();
             			
             		}.bind(this));
             		
             	}else{
             		this.oFragment.open();
             	}
             },
            onPressView1:function(){
            	var oModle=this.getView().getModel("toolsModel");
            	var oApp=this.getView().getParent();
            	oApp.to("idView");
            }
             





			});
			
			});
sap.ui.define(["sap/ui/core/UIComponent"],
    function(UIComponent){
    	"use strict";
    	return UIComponent.extend("namespace.Component",{
    		
    		metadata:{
    			"manifest":"json"
    		},
    			init:function(){
    			UIComponent.prototype.init.apply(this);
    			this.getRouter().initialize();

				var oRouter=this.getRouter()
				if(window.location.hash){
					oRouter.navTo("View1")
				}
    		}
    // 		createContent:function(){
    			
    // 				var oApp= new sap.ui.core.mvc.XMLView({
		 	// 	id:"idAppView",
		 	// 	viewName:"namespace.view.AppView"
		 	// });
		 	// return oApp;
    			
    // 		}
    		
    		
    		
    	});
	
});
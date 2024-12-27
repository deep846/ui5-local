sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("namespace.controller.AppView", {

	
			onInit: function() {
				
				// var oApp=this.getView().byId("idApp"); 
				
				// var oView1= new sap.ui.core.mvc.XMLView({
				// 	id:"idView",
				// 	viewName:"namespace.view.View1"
				// });
				// var oView2= new sap.ui.core.mvc.XMLView({
				// 	id:"idView2",
				// 	viewName:"namespace.view.View2"
				// });
				// var emptyView= new sap.ui.core.mvc.XMLView({
				// 	id:"idempty",
				// 	viewName:"namespace.view.emptyView"
				// });
				
				// oApp.addMasterPage(oView1);
				// oApp.addDetailPage(emptyView);
				// oApp.addDetailPage(oView2);
		
			}
			// oAppView.addMasterPage(oView1);
			// 	oAppView.addDetailPage(oEmptyView);
			// 		oAppView.addDetailPage(oView2);
			// 		oAppView.setInitialDetail("idEmpty");

	

	});

});
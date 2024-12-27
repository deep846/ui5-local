sap.ui.define([
	"nm/controller/BaseController"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("nm.controller.view1", {

        onPageNavButtonPress:function(){

            var oApp = this.getView().getParent();
                console.log(oApp);
                
            oApp.to("view")
        }

	});
});
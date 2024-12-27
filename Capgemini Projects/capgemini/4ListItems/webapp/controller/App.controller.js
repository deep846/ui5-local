sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/XMLView"

 ], (Controller,XMLView) => {
    "use strict";
 
    return Controller.extend("nm.controller.App", {

        
        onInit:function(){
            var oApp = this.getView().byId('appID1')
           var oPage = new XMLView({
                id:"view",
                viewName:"nm.view.view"
            })

            oApp.addPage(oPage)
        }

       
    });
 });
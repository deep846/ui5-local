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

            var oPage2 = new XMLView({
                id:"view1",
                viewName:"nm.view.view1"
            })
            var empty = new XMLView({
                viewName:"nm.view.empty"
            })

            oApp.addMasterPage(oPage)
            oApp.addDetailPage(empty)
            oApp.addDetailPage(oPage2)
        }

       
    });
 });
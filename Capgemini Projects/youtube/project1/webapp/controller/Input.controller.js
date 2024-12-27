sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/MessageToast"

], function (Controller,
	JSONModel,
	ResourceModel,
	MessageToast) {
    "use strict";

    return Controller.extend("ui5.quickstart.controller.Input", {

        /**
        //  * @override
         */
        // onInit: function () {                       // onInit function used when the website load initialize immediately
        //     var oData = {
        //         recipent: {
        //             name: "Deep & ui5"              
        //         }
        //     }

        //     var oData1 = {                         // this is a simple json file
        //         recipent: {
        //             name: "Disha"
        //         }
        //     }

        //     // creating a json view model and attached it to the current view
        //     var oModel = new JSONModel(oData)
        //     this.getView().setModel(oModel,'om')

        //     // creating a json view model and attached it to the current view
        //     var oModel1 = new JSONModel(oData1)
        //     this.getView().setModel(oModel1, 'od')


        //     // se i18n model on view
        //     var i18nModel = new ResourceModel({
        //         bundleName : "ui5.quickstart.i18n.i18n",    // to locate the resourse path
        //         supportedLocales: [""],   // not nesseserily needed
        //         fallbackLocale: ""          // not nesseserily needed
        //     })

        //     this.getView().setModel(i18nModel, "i18n")  // attached to the view
        // },

        onSayHelloButtonPress : function () {
            
            // var oBundle = this.getView().getModel("i18n").getResourceBundle(); // accessing it to the function module
            var srecipent = this.getView().getModel("om").getProperty("/recipent/name") // accessing json
            var srecipent1 = this.getView().getModel("od").getProperty("/recipent/name")    // accessing json

            // console.log(this.getView().getModel("om").getProperty("/recipent/name"));
            // console.log(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("showHelloButtonText"));
            

            // MessageToast.show(oBundle.getText("showHelloButtonText") +' '+ srecipent)
            MessageToast.show( this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("showHelloButtonText") +' '+ srecipent)
            // MessageToast.show(oBundle.getText("helloMsg",[srecipent1]) +', '+ srecipent) //accessing message form the i18n file

            // MessageToast.show(srecipent +' '+ srecipent1)
        }

    });
});
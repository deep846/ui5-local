sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {

    return Controller.extend("nm.controller.App", {

        onInit: function () {

        },
        onPress: function () {
            MessageToast.show('Done it')
            // var name = "Deep";
            // var email = "abc@gmail.com"
            // var gender = "male"

            // this.getView().getModel("dd").setProperty("/Name",name)
            // this.getView().getModel("dd").setProperty("/Email",email)
            // this.getView().getModel("dd").setProperty("/Gender",gender)
            

            var oModel = new JSONModel(oData)
            this.getView().setModel(oModel, "dd")


        }
    })
})
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode",
    "nm/model/model"
], function (Controller, MessageToast, JSONModel,BindingMode,model) {

    return Controller.extend("nm.controller.App", {

        onInit: function () {
                console.log("I am loaded");
                
        },
        onPress: function () {
            MessageToast.show('Done it')
            
            var oModel = model.onModelCall("/model/mock/model.json")
            var oModel1 = model.onModelCall("/model/mock/mode.json")
            // var oModel = new JSONModel("/model/mock/model.json")
            oModel.setDefaultBindingMode(BindingMode.OneWay)
            oModel1.setDefaultBindingMode(BindingMode.OneWay)
            this.getView().setModel(oModel, "dd")
            this.getView().setModel(oModel1, "dc")
            

        },
        onPress1: function(){
            var oModel = this.getView().getModel("dd")
            var oModel1 = this.getView().getModel("dc")
            this.getView().setModel(oModel,"dc")
            this.getView().setModel(oModel1,"dd")
        }
    })
})
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
        },
        onPress3: function(){
            // first we have to set the value to the error state when it is empty

            var oInputUser = this.getView().byId('user')
            var oInputPass = this.getView().byId('pass')

            var oArray = [oInputUser,oInputPass]

            var flag = true;

            oArray.forEach(element => {
                if(element.getValue()===''){
                    element.setValueState("Error")
                    element.setValueStateText(`Please provide The Details for ${element.getName()}`);
                    flag = false
                    
                }
                else{
                    element.setValueState("None")
                }
                
            });



            // if the value are there in the fields then it should authenticate

            if(flag===true){
                if(oInputUser.getValue()==='Deep' && oInputPass.getValue()==='1234'){
                    oInputPass.setValue()="";
                    oInputUser.setValue()="";
                    MessageToast.show("Logged In suceessfully")
                    
                    
                }
                else{
                    MessageToast.show("Invalid Credentials")
                }
            }
        }
    })
})
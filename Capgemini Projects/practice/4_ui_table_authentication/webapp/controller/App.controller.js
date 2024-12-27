sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "nm/model/model"
], function (Controller, MessageToast, model) {
    "use strict";

    var auth;
    return Controller.extend("nm.controller.App", {

        

        onInit:function(){

            
            fetch('../model/mock/pass.json').then(response=>{
               
                return response.json()
                
            }).then(data=>{
                // console.log(data['user']);
                auth = data['user']
                
            })

            var oModel1 = model.onLoadResource("nm.i18n.i18n")
                    this.getView().setModel(oModel1,"i18")
                   
        },
        onClick: function () {
            MessageToast.show("Ready")

            var oModel = model.onLoad('/model/mock/model.json')
            oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay)
            this.getView().setModel(oModel, "dc")
        },

        onAuthenticate: function () {

            // var oModel = this.getView().getModel("userModel")


            let user = this.getView().byId("user");
            let pass = this.getView().byId("pass");

            var oArray = [user,pass]

            oArray.forEach((item)=>{

                if(item.getValue()===""){
                    item.setValueState(sap.ui.core.ValueState.Error)
                    item.setValueStateText(`please provide ${item.getName()}`)
                }else{
                    item.setValueState(sap.ui.core.ValueState.None)
                }

            })


            // console.log(auth[0].user);
            var oModel11 = model.onLoad('/model/mock/pass.json')
            // this.getView().setModel(oModel11,"userModel")
            console.log(oModel11.oData);
            console.log(oModel11.getProperty('/user'));
            
            
            for (const element of auth){
                let x =pass.getValue();
                let y = user.getValue();
                
                if (y === element.user && x === element.pass ) {
                    var oModel = model.onLoad('/model/mock/model.json')

                    // This is xml model calling
                    // var oModel = model.onLoadXml('/model/mock/xmlModel.xml')

                    // This is the resourse model calling
                    var oModel1 = model.onLoadResource("nm.i18n.i18n")
                    // var oModel1 = model.onLoadResource("/i18n/i18n.properties")
                    this.getView().setModel(oModel1,"i18n")

                    oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay)
                    this.getView().setModel(oModel, "dc")
                    MessageToast.show("Successfully LoggedIn")
                    break;
                }
                else {
                    MessageToast.show("Invalid Details")
                    var oModel = model.onLoad('/model/mock/error.json')
                    this.getView().setModel(oModel, "dc")
                    var oModel1 = model.onLoadResource("nm.i18n.error")
                    // var oModel1 = model.onLoadResource("/i18n/i18n.properties")
                    this.getView().setModel(oModel1,"i18n")
                }
                    
            };

            
            
        

        },

        onPress : function(){


            if(this.getView().getModel("dc")===undefined){
                MessageToast.show("Please validate first")
            }
            else{
                if(this.getView().getModel("dc").getProperty("/family")===undefined){
                    MessageToast.show("Please validate first")
                }
                else{

                    var oMod = this.getView().getModel("dc")
                    var itab1 = oMod.getProperty("/family")
                    var itab = JSON.parse(JSON.stringify(oMod.getProperty("/family/0")))

                    itab.name = this.getView().byId("nm").getValue()
                    itab.age = this.getView().byId("ag").getValue()
                    itab.icon = `sap-icon://${this.getView().byId("gn").getValue()}`

                    var gn =this.getView().byId("gn").getValue()
                    let flag=true

                    let oArray = [itab.name,itab.age,gn]

                        oArray.forEach((item)=>{
                            if(item===''){
                                MessageToast.show("Provide all the fields")
                                flag = false
                            }
                        })


                        if(flag){
                            itab1.push(itab)
                            oMod.setProperty("/family",itab1)
                            // console.log(oMod);
                        }
                    
                }


            }
                  
            
        },
        onRowSelect:function(oevent){
            var oRowContextBinding = oevent.getParameter("rowContext")
            var path = `dc>${oRowContextBinding.sPath}`
            console.log(path);
            var oForm = this.getView().byId("idSimpleForm")
            oForm.bindElement(path)   //element binding
            // console.log(oRowContextBinding.oModel.oData);
            
        }

    })

})
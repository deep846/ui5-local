sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
	"sap/gantt/shape/Text",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"namespace/model/model"
], function(
	Controller,
	MessageToast,
	Text,
	MessageBox,
	JSONModel,
	model
) {
	"use strict";

	return Controller.extend("ui5.quickstart.controller.App", {

		/**
		 * @override
		 */
		onInit: function() {
					

			// how to use model and setting the model from internally
					// var oData = {
					// 	"name" : "Deep",
					// 	"age" : "23",
					// 	"salary" : "60000000",
					// 	"gender" : "male",
					// 	"password" : "1234",
					// 	"phone" : ['6294135066','9051613171'],
					// 	"address" : {
					// 		"current" : "Bangalore",
					// 		"Permanent" : "Siliguri"
					// 	}
					// }
	
					// One way to doing it

					// var oModel = new JSONModel(oData)
					// this.getView().setModel(oModel)


					// another way to doing it
							// var oModel = new JSONModel();
							// oModel.setData(oData)
							// this.getView().setModel(oModel,"deep")




	// how to use load model from externer json files
	// var oModel = new JSONModel("/model/mockData/empStr1.json");
	// "../model/mockData/empStr1.json"				// This are the pathname
	// "/model/mockData/empStr1.json"				//everything is working fine here
	// "model/mockData/empStr1.json"

	//
	// var oModel = new JSONModel();
	// oModel.loadData("/model/mockData/empStr1.json"); // Adjust path to the actual file
	
	// Set the model to the view with the name "deep"
	// this.getView().setModel(oModel, "deep");





	// calling it from function


			var oModel = model.onModelCall("/model/mockData/empStr1.json")
			this.getView().setModel(oModel, "deep");

			// var oModel1 = model.onModelCall("/model/mockData/empStr.json")
			// this.getView().setModel(oModel1, "dc")

		
		},

        // onLoad: function(){
        //     // MessageToast.show('Hello')
        //     MessageToast.show(this.getView().getId())
		// 	console.log(this.getView().byId("idbtn"));
		// 	console.log(this.getView().byId("idbtn").getText());
			
			
		// 	this.getView().byId("idbtn").setText("Deep")
			

        // },
		// onLoad1 : function(){
			
		// 	var id = this.getView().byId("user").getValue();
		// 	var pass = this.getView().byId("pass").getValue();
		// 	// console.log(this.getView().byId("pass").getValue());

		// 	if(id==='Deep' & pass==='1234'){


		// 		this.getView().byId("user").setValueState("Success")
		// 		this.getView().byId("pass").setValueState("Success")
		// 		var that = this
		// 		MessageBox.show("Logged in suceessfully",{

		// 			icon: MessageBox.Icon.SUCCESS,
		// 			title: "User logged in",
		// 			actions: [MessageBox.Action.YES],
		// 			onClose:  function(oAction){
		// 				if (oAction === MessageBox.Action.YES) {
		// 					that.getView().byId("user").setValueState("None")
		// 					that.getView().byId("pass").setValueState("None")
		// 					MessageToast.show("Done")
		// 				} else {
		// 					MessageToast.show("cancelled")
		// 				}
		// 			}
				

		// 		})
		// 		MessageToast.show("User logged in")

		// 	}
		// 	else{

		// 		if(id===''){
		// 			this.getView().byId("user").setValueState("Error")
		// 			this.getView().byId("user").setValueStateText("Please provide ID");
		// 		}
		// 		else{
		// 			this.getView().byId("user").setValueState("None")
		// 		}
		// 		if(pass===''){
		// 			this.getView().byId("pass").setValueState("Error")
		// 			this.getView().byId("pass").setValueStateText("Please provide Password");
		// 		}
		// 		else{
		// 			this.getView().byId("pass").setValueState("None")
		// 		}

		// 		MessageBox.show("Invalid user id and password",{
		// 			icon: MessageBox.Icon.ERROR,
		// 			title: "Invalid login and password"
		// 		})
		// 		MessageToast.show("Invalid user id and password")
		// 	}
			
			
		// }

		onLoad1: function(){
			// var oModel=this.getView().getModel("deep")
			// // var name = this.getView().byId("user").getValue()
			// var name = "Sananda"
			// oModel.setProperty('/name',name)
			// console.log(this.getView().byId("user").getValue());

			var oModel1 = model.onModelCall("/model/mockData/empStr.json")
			this.getView().setModel(oModel1, "dc")

		},

		onLoad: function () {
			// var oModel1 = this.getView().getModel("dc")
			// let n='Siliguri'
			// oModel1.setProperty('/address/current',n)

			// let n1="12345"
			// oModel1.setProperty('/password',n1)

			var oModel1 = model.onModelCall("/model/mockData/empStr.json")
			this.getView().setModel(oModel1, "dc")
		},

		flip:function(){
			var oModel1 = this.getView().getModel("dc")
			var oModel2 = this.getView().getModel("deep")
			this.getView().setModel(oModel1,"deep")
			this.getView().setModel(oModel2,"dc")
			
			// let n='Siliguri'
			// oModel1.setProperty('/address/current',n)

			// let n1="12345"
			// oModel1.setProperty('/password',n1)
		}

	});
});
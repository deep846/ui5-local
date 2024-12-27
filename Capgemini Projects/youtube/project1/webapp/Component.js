// sap.ui.define([
//     "sap/ui/core/Component",
//     "sap/ui/model/json/JSONModel",
//     "sap/ui/model/resource/ResourceModel",
// 	"sap/ui/core/UIComponent"
// ], function(
// 	Component,
// 	JSONModel,
// 	ResourceModel,
// 	UIComponent
// ) {
// 	"use strict";

// 	return Component.extend("ui5.quickstart.component", {

//         metadata :{
//             rootView:{
//                 "viewName": "ui5.quickstart.view.Input",
//                 "type" : "XML",
//                 "async": true,
//                 "id": "app"
//             }
//         },
//         init: function () {
//             // UIComponent.prototype.init.apply(this, arguments);


//             var oData = {
//                 recipent: {
//                     name: "Deep & ui5"              
//                 }
//             }

//             var oData1 = {                         // this is a simple json file
//                 recipent: {
//                     name: "Disha"
//                 }
//             }

//             // creating a json view model and attached it to the current view
//             var oModel = new JSONModel(oData)
//             this.setModel(oModel,'om')

//             // creating a json view model and attached it to the current view
//             var oModel1 = new JSONModel(oData1)
//             this.setModel(oModel1, 'od')


//             // se i18n model on view
//             var i18nModel = new ResourceModel({
//                 bundleName : "ui5.quickstart.i18n.i18n",    // to locate the resourse path
//                 supportedLocales: [""],   // not nesseserily needed
//                 fallbackLocale: ""          // not nesseserily needed
//             })

//             this.setModel(i18nModel, "i18n")  // attached to the view

//         }
// 	});
// });



sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("ui5.quickstart.Component", {
        metadata : {
            rootView: {
                "viewName": "ui5.quickstart.view.Input",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },



        init : function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var oData = {
                recipent: {
                    name: "Deep & ui5"
                }
            }

            var oData1 = {                         // this is a simple json file
                recipent: {
                    name: "Disha"
                }
            }
            

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName: "ui5.quickstart.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n")

            var oModel = new JSONModel(oData);
            
            this.setModel(oModel,"om");


            var oModel1 = new JSONModel(oData1);
            this.setModel(oModel1,"od");
        }
        



    
    });
});

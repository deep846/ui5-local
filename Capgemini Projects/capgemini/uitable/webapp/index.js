sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/XMLView"
],function(
	MessageToast,
	XMLView){

        // XMLView.create({
        //     viewName: "namespace.view.App"
        // }).then(function(oView){
        //     oView.placeAt('content')
        // })
    
        // or

        new XMLView({
            viewName: "namespace.view.App",
            id:"view1"
        }).placeAt("content")

        
})
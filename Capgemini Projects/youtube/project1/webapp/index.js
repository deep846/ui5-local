sap.ui.define([

    "sap/ui/core/mvc/XMLView",               //xmlview is used to show the xml view and attach it to the index.html
    "sap/ui/core/ComponentContainer"
], function (XMLView,
	ComponentContainer) {
    "use strict";

    XMLView.create({
        viewName: "ui5.quickstart.view.App"     //creating xml view with view name
    }).then(function (oView) {                  // after creating we pass our view and place it to the content id
        oView.placeAt("content")
    })



    XMLView.create({
        viewName: "ui5.quickstart.view.New"
    }).then(function (oView) {
        oView.placeAt("content")
    })



    // XMLView.create({
    //     viewName: "ui5.quickstart.view.Input"
    // }).then(function (oView) {
    //     oView.placeAt("content")
    // })

    
     new ComponentContainer({
        name: "ui5.quickstart",
        settings : {
            id: "quickstart"
        },
        async: true
    }).placeAt("content")

})
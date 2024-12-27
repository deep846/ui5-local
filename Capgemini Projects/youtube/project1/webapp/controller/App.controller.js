sap.ui.define([
	"sap/ui/core/mvc/Controller"                //controller name
], function(Controller) {
	"use strict";

	return Controller.extend("ui5.quickstart.controller.App", {
        onHiiButtonPress : function (event) {               // creating event handler for button of Say Hi from App.view.xml
            alert(event.getSource().getText())
            
        },
        onHEllooButtonPress : function () {
            alert('Helllo hi')
        },
        onHelloVaiButtonPress : function(){
            alert('Hi vai')
        }
	});
});
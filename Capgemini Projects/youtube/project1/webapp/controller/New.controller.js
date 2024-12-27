sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
], function(
	Controller,
	MessageToast,
	MessageBox
) {
	"use strict";
	return Controller.extend("ui5.quickstart.controller.New", {
        onHellolMenuItemPress : function (event) {
            MessageBox.show("Do you want to show the message!",{    
                icon: MessageBox.Icon.QUESTION,
                title: "Question Popup",
                actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.YES) {
                        MessageToast.show(event.getSource().getText())
                    } else {
                        MessageToast.show("cancelled")
                    }
                }

            });
        }
	});
});
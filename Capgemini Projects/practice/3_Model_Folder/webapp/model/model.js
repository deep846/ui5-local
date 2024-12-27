sap.ui.define([

    "sap/ui/model/json/JSONModel"

],function(
	JSONModel){
        "use strict";

        return ({

            onModelCall : function(spath){

                var oModel =  new JSONModel(spath)
                return oModel;
            }
           
        })


})
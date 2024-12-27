sap.ui.define([
    
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/xml/XMLModel",
    "sap/ui/model/resource/ResourceModel"

],function(JSONModel,
	XMLModel,
	ResourceModel){
    "use strict";

    return ({

        onLoad:function(spath){

            var oModel = new JSONModel(spath)
            return oModel;

        },

        onLoadXml:function(spath){
            var oXmlModel = new XMLModel(spath)
            return oXmlModel;
        },

        onLoadResource: function(spath){
            var oResourseModel = new ResourceModel({
                bundleName: spath
                // bundleUrl:spath
            })

            return oResourseModel;
        }

    })
})  
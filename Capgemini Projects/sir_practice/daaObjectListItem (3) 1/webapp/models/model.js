sap.ui.define([],
      function(){
      	"use strict";
      	return ({
      		
      		createModel:function(spath){
      			 var oModel=new sap.ui.model.json.JSONModel();
      		     oModel.loadData(spath);
      			 return oModel;
      		},
      	
      		createResource:function(){
      			 var oModelResource=new sap.ui.model.resource.ResourceModel({
                   	 bundleUrl:"i18n/i18n.properties"
                   	  //bundleUrl:"i18n/i18n_hi.properties"
                   });
                   return oModelResource;
      			
      		}
      		
      		
      		
      	});
	
	
	
	
});
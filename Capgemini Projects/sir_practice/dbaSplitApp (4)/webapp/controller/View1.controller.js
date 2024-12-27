sap.ui.define([
	"namespace/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

	
], function(BaseController,J,Filter,FilterOperator) {
	"use strict";

	return BaseController.extend("namespace.controller.View1", {
        
	
			onInit: function() {
				
				var oModel=new J();
				oModel.loadData("models/mockData/toolsData.json");
				sap.ui.getCore().setModel(oModel,"toolsModel");
				
			},
			
			onSelect:function(oEvt){
				var oItem=oEvt.getParameter("listItem");
				var sPath=oItem.getBindingContextPath();
				var aItems=sPath.split("/");
				var index= aItems[aItems.length-1];


				// var rPath="toolsModel>/tools/"+ index;
				// var oParent=this.getView().getParent().getParent();
				//   var oView2=oParent.getDetailPage("idView2");
				//   oView2.bindElement(rPath);
				//   	oParent.to("idView2");

				var router = this.getOwnerComponent().getRouter()

				router.navTo("View2",{
					"tools":index
				})
				  
			},
		
			onSort:function(){
				// new sap.ui.model.Sorter(sPath, bDescending?, vGroup?, fnComparator?)
			   if(this.bDescending==="undefined"){
			   	this.bDescending=false;
			   }
			   this.value=20;
				var oSorter=new sap.ui.model.Sorter("name", this.bDescending);
					var oList=this.getView().byId("idList");
				var oItems=	oList.getBinding("items");
				oItems.sort(oSorter);
				
				this.bDescending=!this.bDescending;
				
				
			},
			onPress:function(){
				var oApp=this.getView().getParent();
				oApp.to("idView2");
			
				
			},
			
			
			onSearch:function(oEvt){
			
				var searchString=oEvt.getParameter("query");
				if (!searchString){
					searchString=oEvt.getParameter("newValue");
				}
					var filter1=new Filter(
								      "name",
								      FilterOperator.Contains,
								      searchString
								      
								    );
				 var filter2=new Filter("use",
								 FilterOperator.Contains,
								 searchString);
								 
				var aFitler=[filter1,filter2];
				
				var filter3=new Filter({
					filters:aFitler,
					and:false
				});
				
			
				var oList=this.getView().byId("idList");
				var oItems=	oList.getBinding("items");
				oItems.filter(filter3);
				
				// var filter1=new Filter({
				// 				      path: "name",
				// 				      operator: FilterOperator.Contains,
				// 				      value1: searchString				      
				// 				    });
				
				
			}

	
	});

});
    sap.ui.define([
        "nm/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
        "sap/ui/core/format/NumberFormat",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/model/Sorter"
    ], (BaseController,JSONModel,ResourceModel,NumberFormat,Filter,FilterOperator,Sorter) => {
        "use strict";
            var flag=false;
        return BaseController.extend("nm.controller.view", {

            onInit:function(){
            
                let oRModel = new ResourceModel({
                    bundleName:"nm.i18n.i18n"
                })

                this.getView().setModel(oRModel,'dd')
                
            let oModel = new JSONModel('model/mock/toolsData.json')
            sap.ui.getCore().setModel(oModel,"dc")  // to set the data to entire view present in the view

           },
           CurrencyFormatter: function(amnt,curr){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false
            });

             return oCurrencyFormat.format(amnt, curr);

           },
           onSearchFieldSearch: function(oEvent){
                var search = oEvent.getParameter("query")
                var search = oEvent.getParameter("newValue")
                var oList = this.byId('idToolsList')
                var oBinding = oList.getBinding("items");


                var oFilter = new Filter("name", FilterOperator.Contains, search);

                var FilterProperties = [oFilter]

                oBinding.filter(FilterProperties);


                console.log(oBinding.filter(oFilter));
                

           },
           onSortPress:function(){
            var oList = this.byId("idToolsList");
            var oBinding = oList.getBinding("items");
            var oSorter = new Sorter("price", false);
            oBinding.sort(oSorter);
           },
           onSortPress1:function(){
            var oList = this.byId("idToolsList");
            var oBinding = oList.getBinding("items");
            var oSorter = new Sorter("price", true);
            oBinding.sort(oSorter);
           },
           getDefault:function(){
            var oList = this.byId("idToolsList");
            var oBinding = oList.getBinding("items");
            var oSorter = new Sorter("id", false);
            oBinding.sort(oSorter);
           },
           onGoToButtonPress : function(){
                var oApp = this.getView().getParent()
                // console.log(oApp);4
                oApp.to("view1")  
           },
           sortAdv:function(){

            var oList = this.byId("idToolsList");
            var oBinding = oList.getBinding("items");
            if(flag===false){
            var oSorter = new Sorter("name", false);
             flag=true;
            }
            else{
                var oSorter = new Sorter("name", true);
                flag=false;
            }
            oBinding.sort(oSorter);

           },
           onToolsListSelectionChange:function(OEvent){
                var oItem = OEvent.getParameter("listItem");
                var path = oItem.getBindingContextPath()
                console.log(path);

                var parts = path.split('/');
                var number = parts[parts.length - 1];
                console.log(number);
                var rpath = "dc>/suppliers/"+number;

                var oApp = this.getView().getParent()
                var oview1 = oApp.getPage("view1")
                oview1.bindElement(rpath)
                oApp.to("view1")
                
                
           }
        });
    });
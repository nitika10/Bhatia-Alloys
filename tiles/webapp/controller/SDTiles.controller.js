sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.bhatia.tiles.controller.SDTiles", {
            onInit: function() {
                var tilesSD = [
                   
                    {
                    title: "Inquiry",
                    route: "contract",
                    // description: "Purchase Order",
                    icon: "sap-icon://crm-sales"
                }, 
                {
                  title: "Quotation",
                  route: "quotation",
                // description: "Purchase Order",
                 icon: "sap-icon://personnel-view"
                 }, 
                    {
                     title: "Sales Order",
                     route: "sales_order",
                    // description: "Purchase Order",
                     icon: "sap-icon://business-card"
                } 
               

                ];
                // To Make the model for above object
                var myTilesSDModel = new JSONModel(tilesSD);
                this.getView().setModel(myTilesSDModel, "tilesSD");
            },

            press: function(sRoute) {
                this.getOwnerComponent().getRouter().navTo(sRoute);
            }
        });
    });

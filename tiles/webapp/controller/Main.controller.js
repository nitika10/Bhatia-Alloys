sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.bhatia.tiles.controller.Main", {
            onInit: function() {
                var tilesBhatia = [{
                    title: "Sales and Marketing",
                    route: "sd_tiles",
                    // description: "Purchase Order",
                    icon: "sap-icon://business-card"
                }, {
                    title: "New Product Development",
                    route: "production_order",
                    // description: "Transportation",
                    icon: "sap-icon://employee"
                }, 
                {
                    title: "Design and Development",
                    route: "",
                    // description: "Process Order",
                    icon: "sap-icon://family-care"
                },
                 {
                    title: "Purchase",
                    route: "purch_order",
                    // description: "Reports",
                    icon: "sap-icon://supplier"
                }
                ];
                // To Make the model for above object
                var myTilesBhatiaModel = new JSONModel(tilesBhatia);
                this.getView().setModel(myTilesBhatiaModel, "tilesBhatia");
            },

            press: function(sRoute) {
                this.getOwnerComponent().getRouter().navTo(sRoute);
            }
        });
    });

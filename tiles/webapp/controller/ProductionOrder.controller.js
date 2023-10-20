sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("com.bhatia.tiles.controller.ProductionOrder", {

        onInit: function () {
            var productionOrder = [
              {
                title: "Create Production Order",
                semanticObject: "ProductionOrder",
                // icon: "sap-icon://Fiori5/F0829",
                icon: "sap-icon://add-employee",
                action: "create"
              },
              {
                title: "Change Production Order",
                semanticObject: "ProductionOrder",
                icon: "sap-icon://activity-individual",
                action: "change"
              },
              {
                title: "Display Production Order",
                semanticObject: "ProductionOrder",
                icon: "sap-icon://visits",
                action: "display"
              },
              {
                title: "Change Inspection Lot worklist",
                semanticObject: "InspectionLot",
                icon: "sap-icon://user-edit",
                action: "changeWorklist"
              },
              {
                title: "Confirmation of Production order",
                semanticObject: "ProductionOrderConfirmation",
                icon: "sap-icon://activity-individual",
                action: "createTimeTicket"
              },  {
                title: "Create Result Recording",
                semanticObject: "InspectionOperation",
                icon: "sap-icon://personnel-view",
                action: "recordResultsWorklist"
              }, {
                title: "Create UD",
                semanticObject: "InspectionLot",
                icon: "sap-icon://crm-sales",
                action: "recordUsageDecision"
              }
              
            ];
            var productionOrderTilesModel = new JSONModel(productionOrder);
            this.getView().setModel(productionOrderTilesModel, "productionOrder");
          },
    
          productionOrderTilePress: function (sSemObj, sAction) {
            // MessageToast.show(
            //   "Semantic Object: " + sSemObj + ", Action: " + sAction
            // );
            sap.ushell.Container.getService(
              "CrossApplicationNavigation"
            ).toExternal({ target: { semanticObject: sSemObj, action: sAction } });
          }


	});
});
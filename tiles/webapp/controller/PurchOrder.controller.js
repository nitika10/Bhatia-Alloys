sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("com.bhatia.tiles.controller.PurchOrder", {

        onInit: function () {
            var purchorder = [
              {
                title: "Create PO",
                semanticObject: "PurchaseOrder",
                // icon: "sap-icon://Fiori5/F0829",
                icon: "sap-icon://user-edit",
                action: "create"
              },
              {
                title: "Create PR",
                semanticObject: "PurchaseRequisition",
                // icon: "sap-icon://Fiori5/F0829",
                icon: "sap-icon://add-employee",
                action: "create"
              }
              // {
              //   title: "Change PO",
              //   semanticObject: "PurchaseOrder",
              //   icon: "sap-icon://activity-individual",
              //   action: "change"
              // },
              // {
              //   title: "Display PO",
              //   semanticObject: "PurchaseOrder",
              //   icon: "sap-icon://survey",
              //   action: "display"
              // }
              // {
              //   title: "Release PO",
              //   semanticObject: "PurchaseOrder",
              //   icon: "sap-icon://survey",
              //   action: "releaseSingle"
              // },
              // {
              //   title: "Display PO by Vendor",
              //   semanticObject: "PurchaseOrder",
              //   icon: "sap-icon://survey",
              //   action: "displayBySupplier"
              // },
              // {
              //   title: "Display PO by Material",
              //   semanticObject: "PurchaseOrder",
              //   icon: "sap-icon://survey",
              //   action: "displayByMaterial"
              // },
              
            ];
            var purchorderTilesModel = new JSONModel(purchorder);
            this.getView().setModel(purchorderTilesModel, "purchorder");
          },
    
          purchorderTilePress: function (sSemObj, sAction) {
            // MessageToast.show(
            //   "Semantic Object: " + sSemObj + ", Action: " + sAction
            // );
            sap.ushell.Container.getService(
              "CrossApplicationNavigation"
            ).toExternal({ target: { semanticObject: sSemObj, action: sAction } });
          }


	});
});
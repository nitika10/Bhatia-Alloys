sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("com.bhatia.tiles.controller.SalesOrder", {

        onInit: function () {
            var salesOrder = [
              {
                title: "Create Sales Order",
                semanticObject: "SalesOrder",
                // icon: "sap-icon://Fiori5/F0829",
                icon: "sap-icon://add-employee",
                action: "create"
              },
              {
                title: "Sales Order Change",
                // description: "Sales Order Change"
                semanticObject: "SalesDocument",
                icon: "sap-icon://crm-sales",
               action: "change"
    
              },
              {
                title: "Sales Order Display",
                // description: "Sales Order Display"
                semanticObject: "ZNP_role",
                icon: "sap-icon://sales-document",
                 action: "display"
              }
              //   title: "List Sales Order",
              //   semanticObject: "SalesOrder",
              //   icon: "sap-icon://activity-individual",
              //   action: "list"
              // },
              // {
              //   title: "List Incomplete Sales Orders - V.02",
              //   semanticObject: "SalesOrder",
              //   icon: "sap-icon://activity-individual",
              //   action: "listIncomplete"
              // },
              // {
              //   title: "Sales Orders Blocked for Delivery",
              //   semanticObject: "SalesDocument",
              //   icon: "sap-icon://activity-individual",
              //   action: "listDeliveryBlockedDocuments"
              // },
              // {
              //   title: "List Duplicate Sales Orders",
              //   semanticObject: "SalesOrder",
              //   icon: "sap-icon://activity-individual",
              //   action: "duplicateSalesDocuments"
              // },
              // {
              //   title: "Create Inquiry",
              //   semanticObject: "SalesInquiry",
              //   icon: "sap-icon://activity-individual",
              //   action: "create"
              // },
              
            ];
            var salesOrderTilesModel = new JSONModel(salesOrder);
            this.getView().setModel(salesOrderTilesModel, "salesOrder");
          },
    
          salesOrderTilePress: function (sSemObj, sAction) {
            // MessageToast.show(
            //   "Semantic Object: " + sSemObj + ", Action: " + sAction
            // );
            sap.ushell.Container.getService(
              "CrossApplicationNavigation"
            ).toExternal({ target: { semanticObject: sSemObj, action: sAction } });
          }


	});
});
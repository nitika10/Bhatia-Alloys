sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("com.bhatia.tiles.controller.Quotation", {

        onInit: function () {
            var quotation = [
              {
                title: "Create Quotation",
                semanticObject: "SalesDocument",
                icon: "sap-icon://activity-individual",
                action: "createQuotation"
              },
              {
                title: "Change Quotations",
                semanticObject: "SalesQuotation",
                icon: "sap-icon://user-edit",
                action: "change"
              },
              {
                title: "Display Quotation",
                semanticObject: "SalesQuotation",
                icon: "sap-icon://visits",
                action: "display"
              }
              
            ];
            var quotationTilesModel = new JSONModel(quotation);
            this.getView().setModel(quotationTilesModel, "quotation");
          },
    
          quotationTilePress: function (sSemObj, sAction) {
            // MessageToast.show(
            //   "Semantic Object: " + sSemObj + ", Action: " + sAction
            // );
            sap.ushell.Container.getService(
              "CrossApplicationNavigation"
            ).toExternal({ target: { semanticObject: sSemObj, action: sAction } });
          }


	});
});
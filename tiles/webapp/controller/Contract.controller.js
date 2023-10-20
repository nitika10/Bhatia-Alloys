sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("com.bhatia.tiles.controller.Contract", {

        onInit: function () {
            var contract = [
              
              {
                title: "Create Inquiry",
                semanticObject: "SalesInquiry",
                icon: "sap-icon://activity-individual",
                action: "create"
              },
              {
                title: "Change Inquiry",
                semanticObject: "SalesInquiry",
                icon: "sap-icon://user-edit",
                action: "change"
              },
              {
                title: "Display Inquiry",
                semanticObject: "SalesInquiry",
                icon: "sap-icon://visits",
                action: "display"
              }
            ];
            var contractTilesModel = new JSONModel(contract);
            this.getView().setModel(contractTilesModel, "contract");
          },
    
          contractTilePress: function (sSemObj, sAction) {
            // MessageToast.show(
            //   "Semantic Object: " + sSemObj + ", Action: " + sAction
            // );
            sap.ushell.Container.getService(
              "CrossApplicationNavigation"
            ).toExternal({ target: { semanticObject: sSemObj, action: sAction } });
          }


	});
});
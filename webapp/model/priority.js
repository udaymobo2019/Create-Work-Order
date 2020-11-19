sap.ui.define(["sap/ui/base/Object",
	"sap/ui/model/odata/ODataModel",
	"sap/m/MessageBox",
], function (Object, ODataModel, MessageBox) {
	"use strict";
	return Object.extend("com.sap.build.ba293bd41-us_1.createWoV2gruntmap.model.priority", {
		constructor: function (oParentView) {
			this._oParentView = oParentView;
		},

		priority: function () {
			//debugger;
			var typ1e = this._oParentView.byId("priority").getValue();
			var priority;
			
			if (typ1e == 'Very High') {
				priority = 'VERY_HIGH';

			} else if (typ1e == 'High') {
				priority = 'HIGH';
			} else if (typ1e == 'Medium') {
				priority = 'MEDIUM';
			} else if (typ1e == 'Low') {
				priority = 'LOW';
			}

			var sPath = "/PriorityF4Set?$filter=PriorityText eq '" + priority + "' ";
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					console.log("oData", oData)
					oController._oParentView.byId("datend").setValue(oData.results[0].RequiredEndDate);
					oController._oParentView.byId("datstart").setValue(oData.results[0].RequiredStartDate);

					var oModel = oController._oParentView.getModel();
					oModel.setProperty(sPath, oData);

				},
			});

		},
		high: function () {

		}

	});

});
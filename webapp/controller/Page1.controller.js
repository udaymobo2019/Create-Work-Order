var Quagga, ci_att1 = [],
	ci_att2 = [],
	ci_attach1;
var oModelJson, array11 = [],
	oView, array1zx = [];
var array1z = [];
var notifNo, orderType;

sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/Fragment",
		"sap/m/MessageBox",
		"sap/m/MessageToast",
		"sap/ui/model/odata/ODataModel",
		"sap/m/UploadCollectionParameter",
		"./Dialog1", "./Dialog3", "./Dialog2", "./Operations",
		"./utilities",
		"com/sap/build/ba293bd41-us_1/createWoV2gruntmap/model/priority",
		"sap/ui/core/routing/History",
		"com/sap/build/ba293bd41-us_1/createWoV2gruntmap/util/ArcGis"
	], function (BaseController, JSONModel, Fragment, MessageBox, MessageToast, ODataModel, UploadCollectionParameter, Dialog1, Dialog3,
		Dialog2, Operations, Utilities, priority, History, ArcGis) {
		"use strict";

		return BaseController.extend("com.sap.build.ba293bd41-us_1.createWoV2gruntmap.controller.Page1", {

			handleRouteMatched: function (oEvent) {

				this.arr142 = [];

				//this.getView().byId("UploadCollection").setVisible(false);
				this.getView().getModel("oGlobalModel").setProperty("/ci_att2", []);
				this.getView().getModel().setProperty("/photos1", []);
				this.getView().getModel().setProperty("/photos", []);
				this.getView().getModel("oGlobalModel").setProperty("/Ltresponce", []);

				var that = this;
				that.getView().getModel("oGlobalModel").setProperty("/ci_att1", []);
				that.tableBind1();

				// that.TableBindEquip();

				//	that.getView().byId("UploadCollection").setVisible(false);

				// this.handleValueHelp();
				// this.handleValueHelp1();

				//this.plantBind2();

				//this.plant();

				this.addbtnMore1(); /////////For More Fragment Resource Planning
				this.addbtnMore2(); /////////For More Fragment Material required

				this.matReq();

				this.itemInc = 0; /////////// For Component
				this.itemIncz = 0;

				this.array1 = [];

				// this.element = document.getElementById("__layout2-spacer"); 
				// this.element.parentNode.removeChild(this.element);

				var designation = window.location.origin;
				if (designation === "https://webidetesting9905686-ba293bd41.dispatcher.us1.hana.ondemand.com" || designation ===
					"https://flpnwc-ba293bd41.dispatcher.us1.hana.ondemand.com" || designation == "https://createworkorderv9grunt1-ba293bd41.dispatcher.us1.hana.ondemand.com") {
					this.getView().byId("Dashboard").setVisible(true);
				} else {
					this.getView().byId("Dashboard").setVisible(false);
				}

			},

			// 	onAfterRendering: function(){

			// 	var element = document.getElementById("__layout2-spacer"); 
			// 	element.parentNode.removeChild(element);

			// },

			/*Function for the adding the Table Line Item Dynamically*/
			addBtncp: function () {
				var that = this;
				array1zx = [];
				var itemTab1 = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				var rowlen = itemTab1.getItems().length;
				var rowlength = rowlen + "0";

				var rowl = Number(rowlength);

				var rowLe = rowl;
				that.rowLen = rowLe;

				that.itemInc = that.rowLen + 10;

				that.itemope = that.ops1;

				that.array1.push({

					Empty1: that.itemInc,
					Empty2: that.itemope,
					pass12: that.planplt,
					Empty4: "",
					Empty5: "",
					Empty6: "",
					Empty7: "",
					Empty8: "",
					Empty9: ""

				});
				this.seamoModelccd4.refresh(); //which will add the new record
				////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				var oCont = this; ///// Purchase data Button to be invisible after the Add button will be pressed

				var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

				form.setVisible(false);

			},

			//////////////////////////////////////////////////////////////////////// Operations Table in View to add row Dynamically				

			addRow: function () {

				this.OperationAdd();
			},

			OperationAdd: function (oEvent) {

				var that = this;

				that.l = "0";

				array1zx = [];

				var itemTab1 = this.getView().byId("tablez");
				var rowlen = itemTab1.getItems().length;
				var rowlength = rowlen + "0";

				var rowl = Number(rowlength);

				var rowLe = rowl;
				that.rowLen = rowLe;
				console.log(that.rowLen);

				that.itemIncz = that.rowLen + 10;

				var HotelBookingz = {

					Empty1: that.itemIncz,
					Empty2: "",
					Empty3: "",
					Empty4: "",
					Empty5: "",
					Empty6: "",
					Empty7: "",
					Empty8: "",
					Empty9: "",
					Empty10: "",
					Empty11: "",
					Empty12: ""

				};

				console.log("HotelBookingz", HotelBookingz)

				array1z.push(HotelBookingz);

				var HotelBookingz = that.getView().byId("tablez");

				that.seamoModelccd81 = new sap.ui.model.json.JSONModel(); // created a JSON model   
				that.seamoModelccd81.setData({ // Set the data to the model using the JSON object defined already  
					seamtransz: array1z

				});
				HotelBookingz.setModel(that.seamoModelccd81);

				that.seamoModelccd81.refresh();

			},

			/////// For Restricting the Length of the Duration
			Duration: function (oEvent) {

				var that = this;
				var _oInput = oEvent.getSource();
				that.len = _oInput.getValue();
				that.val = _oInput.getValue().length;
				if (that.val > 4) {
					that.l = that.len.slice(0, 4);
					console.log("that.l", that.l);

					var valuestrom = oEvent.getSource().getParent().getBindingContext().getPath();
					var valueind = valuestrom.split("/");
					var indexz = valueind[2];

					var table2 = that.getView().byId("tablez");
					var count1 = table2.getItems().length;

					table2.getItems()[indexz].getCells()[4].setValue(that.l);
					console.log("that.l", that.l);

				} else {

				}

			},

			qty_livecge: function (oEvent) {

				var that = this;
				var _oInput = oEvent.getSource();
				that.len = _oInput.getValue();
				that.val = _oInput.getValue().length;
				if (that.val > 13) {
					that.l = that.len.slice(0, 13);
					console.log("that.l", that.l);

					var valuestrom = oEvent.getSource().getParent().getBindingContext().getPath();
					var valueind = valuestrom.split("/");
					var indexz = valueind[2];

					var table2 = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
					//var count1 = table2.getItems().length;

					table2.getItems()[indexz].getCells()[7].setValue(that.l);
					console.log("that.l", that.l);

				} else {

				}

			},
			Req_livecge: function (oEvent) {

				var that = this;
				var _oInput = oEvent.getSource();
				that.len = _oInput.getValue();
				that.val = _oInput.getValue().length;
				if (that.val > 13) {
					that.l = that.len.slice(0, 13);
					console.log("that.l", that.l);

					var valuestrom = oEvent.getSource().getParent().getBindingContext().getPath();
					var valueind = valuestrom.split("/");
					var indexz = valueind[2];

					var table2 = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
					//var count1 = table2.getItems().length;

					table2.getItems()[indexz].getCells()[8].setValue(that.l);
					console.log("that.l", that.l);

				} else {

				}

			},

			HomeButton: function () {

				var that = this;
				sap.m.MessageBox.show(
					"Do you want to exit?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction === "YES") {

								window.location.replace(
									"https://dashboarddesigngrunt-ba293bd41.dispatcher.us1.hana.ondemand.com/index.html?hc_reset#/PM"
								);
								// location.reload();

							}

						}

					});

			},

			/*Deleting the Line Item from the Table of Operations*/
			deleteTab: function (oArgs) {

				var that = this;

				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you really want to Delete?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {

								var itemTable = that.getView().byId("tablez");
								var operation_array = [];
								var value = oArgs.getSource().getParent().getBindingContext().getPath();
								var valueind = value.split("/");
								that.index = valueind[2];

								// 				var table2 = sap.ui.core.Fragment.byId("Operationsfragment", "tab2"); ////For Fragment
								// 				var opsz = itemTable.getItems()[that.index].getCells()[0].getValue();
								// 				var length = this.array1.length;
								// 				var count1 = table2.getItems().length;

								// 				for (var i = 0; i <= length - 1; i++) {
								// 					var opsz1 = table2.getItems()[i].getCells()[1].getValue();
								// 					if (opsz1 == opsz) {
								// 						operation_array.push(opsz1);
								// 						var length12 = operation_array.length;
								// 					}
								// 				}
								// 				if (length12 == undefined) {
								// 	that.value = oArgs.getSource().getBindingContext().getObject();
								// 	for (var i = 0; i < that.array1z.length; i++) {
								// 		//this.array1z = [];
								// 		if (that.array1z[i] == that.value) {
								// 			that.array1z.splice(i, 1); //removing 1 record from i th index.
								// 			that.seamoModelccd81.refresh();
								// 			break; //quit the loop
								// 		}

								// 	}
								// } else {
								// 	var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
								// 	MessageBox.warning(
								// 		"Delete " + opsz + " operations in the component tab", {
								// 			styleClass: bCompact ? "sapUiSizeCompact" : ""
								// 		}
								// 	);
								// }
								that.index = Number(that.index);
								var ind = +that.index + +1;
								//debugger;
								var rowlen = itemTable.getItems().length;

								for (var indd = 1; indd <= rowlen; indd++) {
									if (that.index === indd) {
										that.delItem = itemTable.getItems()[that.index].getCells()[0].getValue();
									} else {

									}
								}

								if (rowlen <= ind) {
									var row1 = +rowlen - +1;
									var itemnum = itemTable.getItems()[row1].getCells()[0].getValue();
									var itemlast = itemnum - +10;
									var itemNo = "" + itemlast + "";
									itemNo = itemNo.padStart(2, '0');
									var itemnum = itemTable.getItems()[row1].getCells()[0].setValue(itemNo);
								} else {
									for (var i = ind; i <= rowlen - +1; i++) {
										var itemnum = itemTable.getItems()[i].getCells()[0].getValue();
										var itemlast = itemnum - +10;
										var itemNo = "" + itemlast + "";
										itemNo = itemNo.padStart(2, '0');

										var itemnum = itemTable.getItems()[i].getCells()[0].setValue(itemNo);
									}
								}

								var list_ID = sap.ui.getCore().byId(oArgs.getSource().sId);

								var Data = list_ID.getModel();

								var d = Data.getData();
								d.seamtransz.splice(that.index, 1); //removing 1 record from i th index.

								// var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
								// MessageBox.warning(
								// 	"Delete " + itemnum + " operations in the component tab", {
								// 		styleClass: bCompact ? "sapUiSizeCompact" : ""
								// 	}
								// );

								// jQuery.sap.require("sap.m.MessageBox");
								// 	sap.m.MessageBox.show(
								// 		"Please Delete the Corresponding Component?", {
								// 			icon: sap.m.MessageBox.Icon.INFORMATION,
								// 			title: "Information Message",
								// 			actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
								// 			onClose: function (oAction) {
								// 				// notify user
								// 				if (oAction == "YES") {

								// 				}
								// 			}

								// 		});	

							} else if (oAction == "NO") {

								var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
								MessageBox.warning(
									"Delete " + opsz + " operations in the component tab", {
										styleClass: bCompact ? "sapUiSizeCompact" : ""
									}
								);

							}
						}
					});

				Data.setData(d);

				// var operation_array = [];
				// var value = oArgs.getSource().getParent().getBindingContext().getPath();
				// var valueind = value.split("/");
				// var indexi = valueind[2];
				// var table1 = this.getView().byId("tablez");
				// var table2 = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				// var opsz = table1.getItems()[indexi].getCells()[0].getValue();
				// var length = this.array1.length;
				// var count1 = table2.getItems().length;
				// var that = this;
				// for (var i = 0; i <= length - 1; i++) {
				// 	var opsz1 = table2.getItems()[i].getCells()[1].getValue();
				// 	if (opsz1 == opsz) {
				// 		operation_array.push(opsz1);
				// 		var length12 = operation_array.length;
				// 	}
				// }	if (length12 == undefined) {
				// 	that.value = oArgs.getSource().getBindingContext().getObject();
				// 	for (var i = 0; i < that.array1z.length; i++) {

				// 		if (that.array1z[i] == that.value) {
				// 			that.array1z.splice(i, 1); //removing 1 record from i th index.
				// 			that.seamoModelccd81.refresh();
				// 			break; //quit the loop

				// 		}

				// 	}

				// } else {
				// 	var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				// 	MessageBox.warning(
				// 		"Delete " + opsz + " operations in the component tab", {
				// 			styleClass: bCompact ? "sapUiSizeCompact" : ""
				// 		}
				// 	);
				// }

			},

			/*Function for the Priority*/
			priority1: function () {

				this.plannPlnt();
				this.perResp();

				this.v1 = this.getView().byId("order").getValue();
				//alert(this.v1)
				this.v3 = this.getView().byId("priority").getValue(); //// for the Start Date and End date Validation(Delete the date)

				if (this.v3 === "") {

					this.getView().byId("datstart").setValue("");
					this.getView().byId("datend").setValue("");

				}

				if (this.v1) {

					this.getView().byId("inpfloc").setEnabled(true);
					this.getView().byId("enabmap").setEnabled(true);

					this.getView().byId("inpequip").setEnabled(true);
					this.getView().byId("enabsca").setEnabled(true);

					this.getView().byId("inpdescr").setEnabled(true);
					this.getView().byId("textlong").setEnabled(true);
					this.getView().byId("Link").setEnabled(true);

					this.getView().byId("datstart").setEnabled(true);
					this.getView().byId("datend").setEnabled(true);
					this.getView().byId("cmptask").setEnabled(true);
					this.getView().byId("cmpnotif").setEnabled(true);
					this.getView().byId("enabnoti").setEnabled(true);

					this.getView().byId("cmpplangrp").setEnabled(true);
					this.getView().byId("cmpplanplt").setEnabled(true);
					this.getView().byId("cmpwork").setEnabled(true);
					this.getView().byId("cmpuser").setEnabled(true);
					this.getView().byId("addfunctions").setEnabled(true);
					this.getView().byId("cmpperson").setEnabled(true);
					this.getView().byId("btnCamera").setEnabled(true);
					this.getView().byId("ci_fileUploader1").setEnabled(true);
					//	this.getView().byId("UploadCollection").setVisible(true);

					this.getView().byId("arow").setEnabled(true);
					this.getView().byId("TypeHere").setEnabled(true);
					this.getView().byId("creatrec").setEnabled(true);
					this.getView().byId("onsave").setEnabled(true);
					this.getView().byId("onopen").setEnabled(true);

				} else {

				}

				var oView = this.getView();
				var prio = new priority(oView, this.getOwnerComponent());
				prio.priority();

				this.funLoca();
				this.equip();
				this.plannerGrp();
				this.plannPlnt();
				this.workCenter();

				this.notiFication();
				this.taskList();
				this.setUser();
				this.tabWorkcent();
				this.perResp();

			},

			loadMapData: function () {
				var that = this;
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_F4_SRV/");
				oModel.read("/FunctionalLocAllDataSet", {
					success: function (oData) {
						that.oFLocData = oData.results;
					},
					error: function () {
						alert("Map Data Not Loaded");
					}
				});

			},
			/*Function for the Google Map*/
			mapButton: function () {

				var that = this;
				that.loadMapData();
				that.maps.open();
				jQuery.sap.includeStyleSheet("https://js.arcgis.com/4.15/dojo/dojo.js");
				jQuery.sap.includeStyleSheet("https://js.arcgis.com/4.15/esri/themes/light/main.css");
				require([
					"esri/Map",
					"esri/views/MapView",
					"esri/Graphic",
					"esri/layers/GraphicsLayer",
					"esri/widgets/Search",
					"esri/tasks/Locator",
					"esri/widgets/Track",
					"esri/widgets/Locate"
				], function (Map, MapView, Graphic, GraphicsLayer, Search, Locator, Track, Locate) {
					var map = new Map({
						basemap: "streets"
					});
					var view = new MapView({
						container: "viewDiv",
						map: map,
						center: [-96.919256, 32.914300], //[80.197455, 13.009745], //[-96.750099, 32.985960], 
						zoom: 5
							//	layer: new GraphicsLayer()
					});
					for (var i = 0; i < that.oFLocData.length; i++) {
						var geometryPoint = {
							type: "point",
							longitude: that.oFLocData[i].Longitude.slice(0, 7),
							latitude: that.oFLocData[i].Latitude.slice(0, 7)
						};
						var markerSymbol = {
							type: "picture-marker",
							url: "https://developers.arcgis.com/labs/images/bluepin.png",
							width: "14px",
							height: "26px"
						};
						var attributes = {
							FLOC: that.oFLocData[i].FunctionalLocation,
							FLOCDESC: that.oFLocData[i].FunctionalLocationDesc,
							OBJECTTYPE: that.objectType
								// PLANTSECTION: that.oFLocData[i].SupFLoc,
								// LOCATION: that.oFLocData[i].Plant, 
								// ROOM: that.oFLocData[i].EquipmentNumber,
								// SYSTEMSTATUS: that.oFLocData[i].EquipmentNumber
						};

						var popupTemplate = {
							title: "{FLOC}",
							actions: [{
								id: that.oFLocData[i].FunctionalLocation,
								title: "Select FLOC",
								image: "http://serverapi.arcgisonline.com/jsapi/arcgis/3.2/js/esri/dijit/images/Measure_Distance16.png",

							}],
							content: [{
								type: "fields",
								fieldInfos: [{
									fieldName: "FLOC",
									label: "FLOC"
								}, {
									fieldName: "FLOCDESC",
									label: "FLOC DESC"
								}, {
									fieldName: "OBJECTTYPE",
									label: "OBJECT TYPE"
								}, {
									fieldName: "PLANTSECTION",
									label: "PLANT SECTION"
								}, {
									fieldName: "LOCATION",
									label: "LOCATION"
								}, {
									fieldName: "ROOM",
									label: "ROOM"
								}, {
									fieldName: "SYSTEMSTATUS",
									label: "SYSTEM STATUS"
								}]
							}]
						};
						var graphicsLayer = new GraphicsLayer();
						map.add(graphicsLayer);
						var graphic = new Graphic({ // graphic with point geometry
							geometry: geometryPoint,
							symbol: markerSymbol,
							attributes: attributes,
							popupTemplate: popupTemplate
						});
						graphicsLayer.add(graphic);

					} //end of for loop

					/*Pass selected Functional location to Input Box*/
					view.when(function () {
						var popup = view.popup;
						popup.viewModel.on("trigger-action", function (event) {
							var selectedAttributes = popup.viewModel.selectedFeature.attributes;
							var selectedFuncLoc = selectedAttributes.FLOC;
							// var selectedFuncLocdes = selectedAttributes.FLOCDESC;
							if (event.action.id === selectedFuncLoc) {
								that.oView.byId("inpfloc").setValue(selectedFuncLoc);
								// that.oView.byId("inpfloc").setValue(selectedFuncLocdes);

								that.getView().byId("inpequip").setValue("");
								view.popup.close();
								that.maps.close();
							}

							var sPath = "/FunctionalDataPullSet('" + selectedFuncLoc + "')";
							var oModeli = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
							oModeli.read(sPath, {
								success: function (oData, oResponse) {
									console.log(oData);

									that.objectType = oData.ObjectType;
									console.log(that.objectType);

								}
							});

							var sPath = "/FunctionalDataPullSet('" + selectedFuncLoc + "')";
							var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
							oModel.read(sPath, {
								success: function (oData, oResponse) {

									////// Set Value for combo box for planner group, planning Plant, Main work center

									var x1 = oData.PlannerGroup + " " + oData.PlnGrpDesc;
									//	alert(v2);
									that.getView().byId("cmpplangrp").setValue(x1);

									var x2 = oData.PlanningPlant + " " + oData.PlnPlantDesc;
									//	alert(v1);
									that.getView().byId("cmpplanplt").setValue(x2);

									var x3 = oData.MainWorkCenter + " " + oData.MainWorkCenterDes;
									//	alert(v3);
									that.getView().byId("cmpwork").setValue(x3);

									var y1 = oData.MainWorkCenter;

									that.getView().byId("wkcent").setSelectedKey(y1); /////for Operations Tab Dynamic

									that.PerRespFrag();

								}

							});

						});
					});
					/*To do various Search Operations like address search, latlong search, Pincode Search etc*/
					var search = new Search({
						type: "point",
						view: view,
						symbol: { // set symbol here
							type: "simple-marker",
							color: [226, 119, 40], // orange
							outline: {
								color: [255, 255, 255], // white
								width: 1
							}
						}
					});
					view.ui.add(search, "top-right");
					/*For Current Location*/
					var locate = new Locate({
						view: view,
						useHeadingEnabled: false,
						goToOverride: function (view, options) {
							options.target.scale = 1500; // Override the default map scale
							return view.goTo(options.target);
						}
					});
					view.ui.add(locate, "top-left");

				});

			},

			clo: function () {

				this.maps.close();
			},
			ok: function () {

				this.maps.close();

			},
			okmap: function () {

				this.maps.close();
			},
			okmap2: function () {

				this.maps.close();

			},

			/*Function for the Functional Location Dialog*/
			handleValueHelp: function () {

				var oCont = this;
				var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/CostCenterMasterF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var CostCenter = oData.results[0].CostCenter;
						var Description = oData.results[0].CostCenterDes;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.CostCenter) == -1) {
								dups.push(el.CostCenter);
								return true;
							} else if (dups.indexOf(el.Description) == -1) {
								dups.push(el.Description);
								return true;
							}
							return false;
						});
						var arr9 = {
							"arr9": arr
						};
						console.log("arr9:" + arr9);
						var oItems = new sap.ui.core.ListItem({
							key: "{CostCenter}",
							text: "{CostCenter} {CostCenterDes}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr9);
						oModel.setSizeLimit(1500);
						cost.setModel(oModel);
						cost.bindItems("/arr9", oItems);

					},

				});

				var funloc = sap.ui.core.Fragment.byId("functionalfragment", "functech");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);

				oModel.read('/FunctionalLocAllDataSet', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						var FunctionalLocation = oData.results[0].FunctionalLocation;
						var Text = oData.results[0].Text;

						console.log("FunctionalLocation:" + FunctionalLocation)
						console.log("Description:" + Text)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.FunctionalLocation) == -1) {
								dups.push(el.FunctionalLocation);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{FunctionalLocation}",
							text: "{FunctionalLocation} {FunctionalLocationDesc}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(10000);
						funloc.setModel(oModel);
						funloc.bindItems("/arr11", oItems);

					},

				});

				var funplant = sap.ui.core.Fragment.byId("functionalfragment", "main");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/PlantF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var ImPlant = oData.results[0].ImPlant;
						var Descriptions = oData.results[0].Descriptions;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.ImPlant) == -1) {
								dups.push(el.ImPlant);
								return true;
							} else if (dups.indexOf(el.Descriptions) == -1) {
								dups.push(el.Descriptions);
								return true;
							}
							return false;
						});
						var arr981 = {
							"arr981": arr
						};
						console.log("arr981:" + arr981);
						var oItems = new sap.ui.core.ListItem({
							key: "{ImPlant}",
							text: "{ImPlant} {Descriptions}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr981);
						oModel.setSizeLimit(1500);
						funplant.setModel(oModel);
						funplant.bindItems("/arr981", oItems);

					},

				});

			},

			plant: function () {

				//alert("pressedagain")
				this.tableBind1();

				var ocont = this;

				var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").getSelectedKey();
				console.log("plant", plant);

				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn2").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn3").setVisible(false);

				console.log("plant", plant);
				var table = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/MasterF4HelpSet?$filter=Plant eq'" + plant + "'";
				//	var ocont = this;
				oModel.read(sPath, {
					//filters: [new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, plant)], //"K1-B01-1")],
					success: function (oData, oResponse) {

						ocont.count = oData.results.length;
						console.log("ocont.count :", ocont.count);

						if (ocont.count == '0') {

							sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").setVisible(false);

						} else {

							sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").setVisible(true);
							sap.ui.core.Fragment.byId("functionalfragment", "fun_btn").setVisible(true);

							// console.log("Function oModel:", oData);
							oModelJson.setData(oData);
							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Text({
										text: "{FunctionalLocation}"
									}),
									new sap.m.Text({
										text: "{Text}"
									})

								]
							});
							table.setModel(oModelJson);
							table.bindItems("/results", oTemplate);

						}

					}

				});

			},

			objcode: function () {

				// alert("pressedagain2")

				var oController = this;
				var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost").getSelectedKey();
				console.log("cost", cost);

				// var plant222 = sap.ui.core.Fragment.byId("functionalfragment", "main").getSelectedKey();
				// console.log("plant222", plant222);

				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn2").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn3").setVisible(false);

				var table = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
				oModelJson = new sap.ui.model.json.JSONModel();

				var sPath = "/CostCenterMasterF4Set?$filter=CostCenter eq'" + cost + "'and FunLocFlag eq 'X'"; //and Plant eq '" + plant222 +"'
				var ocont = this;
				oModel.read(sPath, {
					//filters: [new sap.ui.model.Filter("SupFLoc", sap.ui.model.FilterOperator.EQ, '1032-LABS')], //"K1-B01-1")],
					success: function (oData, oResponse) {

						ocont.count = oData.results.length;
						console.log("ocont.count :", ocont.count);
						// alert("ocont.count", ocont.count);

						if (ocont.count == '0') {

							sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").setVisible(false);
							//sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);

						} else {
							sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").setVisible(true);
							sap.ui.core.Fragment.byId("functionalfragment", "fun_btn").setVisible(true);

							oModelJson.setData(oData);
							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Text({
										text: "{FunctionalLocation}"
									}),
									new sap.m.Text({
										text: "{FunctionalLocationDesc}"
									})

								]
							});
							table.setModel(oModelJson);
							table.bindItems("/results", oTemplate);

						}

					}

				});

			},

			/*Selection Change for Equipment Fragment Cost Center*/
			objcode1: function () {

				var oController = this;
				var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1").getSelectedKey();
				console.log("cost", cost);
				var table = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
				oModelJson = new sap.ui.model.json.JSONModel();

				var sPath = "/CostCenterMasterF4Set?$filter=CostCenter eq'" + cost + "'and EquipFlag eq 'X'";
				var ocont = this;
				oModel.read(sPath, {
					//filters: [new sap.ui.model.Filter("SupFLoc", sap.ui.model.FilterOperator.EQ, '1032-LABS')], //"K1-B01-1")],
					success: function (oData, oResponse) {

						ocont.count = oData.results.length;
						console.log("ocont.count :", ocont.count);
						// alert("ocont.count", ocont.count);

						if (ocont.count == '0') {

							sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(false);
							//sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);

						} else {
							sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(true);
							// alert("else");

							//	sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(true);
							sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn").setVisible(true);
							sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn1").setVisible(false);

							oModelJson.setData(oData);
							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Text({
										text: "{EquipmentNumber}"
									}),
									new sap.m.Text({
										text: "{EquipmentDes}"
									})

								]
							});
							table.setModel(oModelJson);
							table.bindItems("/results", oTemplate);

						}

					}

				});

			},

			/*Function for the Functional Location Selection Change*/
			tech_change: function () {

				this.Flcoc = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();

				sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setValue("");

				if (this.Flcoc === "") {
					sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();
					sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setVisible(false);
					sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setValue("");
					sap.ui.core.Fragment.byId("functionalfragment", "sfl").setVisible(false);
					sap.ui.core.Fragment.byId("functionalfragment", "sfl").setValue("");

				}

				// /*for the Functional Location alone*/
				// this.flocal = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();
				// //alert(this.flocal);
				// this.getView().byId("inpfloc").setValue(this.flocal);

				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn2").setVisible(true);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn3").setVisible(false);

				console.log("tech_change", this.Flcoc)
				var sPath = "/SubFunLocSet?$filter=SupFLoc eq '" + this.Flcoc + "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var ocont = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						ocont.count = oData.results.length;
						console.log("ocont.count :", ocont.count);

						if (ocont.count == '0') {

							jQuery.sap.require("sap.m.MessageBox");
							sap.m.MessageBox.alert("Functional Location not available for the Functional Location" + this.Flcoc, {
								title: "Information",
								onClose: null
							});

							sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").setVisible(false);

							sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setVisible(false);

							sap.ui.core.Fragment.byId("functionalfragment", "sfl").setVisible(false);

						} else {

							//	alert("else");

							sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setVisible(true);

							sap.ui.core.Fragment.byId("functionalfragment", "sfl").setVisible(true);

							console.log("oDataequp :", oData);
							var c4Model = new sap.ui.model.json.JSONModel();
							c4Model.setData(oData);
							var t5 = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech");
							t5.setModel(c4Model);
							var vescombo = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech");
							var oItems = new sap.ui.core.ListItem({
								key: "{FLoc}",
								text: "{FLoc} {FLocDes}"
							});
							vescombo.bindAggregation("items", {
								path: '/results',
								template: oItems

							});

						}

					}.bind(this)

				});

			},

			/*Function for Sub Function in the Functional Location Fragment*/
			tech_changez: function () {

				sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").setVisible(true);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn").setVisible(true);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn2").setVisible(false);

				var Flcoc = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").getSelectedKey();
				//alert(Flcoc);

				// /*for the sub-Functional Location alone*/
				// this.sublocal = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").getSelectedKey();
				// //alert(this.sublocal);
				// this.getView().byId("inpfloc").setValue(this.sublocal);

				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn2").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn3").setVisible(true);

				var table = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZpM_F4_SRV/", true);
				var oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/SubFunctionalLocationSet?$filter=FunctionalLocation eq '" + Flcoc + "'";
				//debugger;
				var ocont = this;
				oModel.read(sPath, {

					success: function (oData, oResponse) {

						ocont.count = oData.results.length;
						console.log("ocont.count :", ocont.count);

						if (ocont.count == '0') {

							jQuery.sap.require("sap.m.MessageBox");
							sap.m.MessageBox.alert("Functional Location not available for the Sub Functional Location " + Flcoc, {
								title: "Information",
								onClose: null
							});

							sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").setVisible(false);

							sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setVisible(false);

							sap.ui.core.Fragment.byId("functionalfragment", "sfl").setVisible(false);

						} else {

							oModelJson.setData(oData);
							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Text({
										text: "{SuperiorFunctionalLocation}"
									}),
									new sap.m.Text({
										text: "{SuperiorFunctionalLocationDes}"
									})

								]
							});
							table.setModel(oModelJson);
							table.bindItems("/results", oTemplate);

						}
					}

				});

				this.perResp();

			},
			/*Function For the Clearing the Filter*/
			clearfilter: function () {

				var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").setValue("");
				var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost").setValue("");
				var func = sap.ui.core.Fragment.byId("functionalfragment", "functech").setValue("");
				var sub = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setValue("");
				sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();

				this.getView().byId("inpfloc").setValue();

			},

			/*Fuction for clearing the data in the Value help for functional fragment*/
			handleIconMainTabBarSelect: function (oEvent) {

				var icon = sap.ui.core.Fragment.byId("functionalfragment", "idIconTabBar");
				var mkey = oEvent.getParameters().key;

				if (mkey === "Plant") {

					var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").setValue("");
					var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost").setValue("");
					var func = sap.ui.core.Fragment.byId("functionalfragment", "functech").setValue("");
					var sub = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setValue("");
					sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();

				} else if (mkey === "CostCenter") {

					var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").setValue("");
					var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost").setValue("");
					var func = sap.ui.core.Fragment.byId("functionalfragment", "functech").setValue("");
					var sub = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setValue("");
					sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();

				} else if (mkey === "Funclocat") {

					var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").setValue("");
					var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost").setValue("");
					var func = sap.ui.core.Fragment.byId("functionalfragment", "functech").setValue("");
					var sub = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setVisible(false);
					sap.ui.core.Fragment.byId("functionalfragment", "sfl").setVisible(false);
					sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();

				}

			},

			Functechok: function () {

				this.tableBind1();

				var tableid = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail");
				var item = tableid.getSelectedItem();
				console.log(item);
				var tablelength = tableid.getSelectedItems().length;
				console.log("TableLenth :", tablelength);
				if (tablelength == '0') {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.error("Please Select Functional Location", {
						title: "Error",
						onOK: null
					});
				} else {
					for (var i = 0; i < tablelength; i++) {
						var rows = tableid.getSelectedItems()[i];
						var item = rows.getCells()[0].getText();
						//alert(item)

						var desc = rows.getCells()[1].getText();

						var item1 = this.getView().byId("inpfloc").setValue(item + "  " + desc);
						this.getView().byId("det").setVisible(true);

						var fun = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();

						//alert(fun);    /////////Final Variable for the Input box of Function Location.
						this.getView().byId("funcloc").setValue(fun); ////// to be binded in the Operation Table

						this.getView().byId("inpfloc").setValue(item + '  ' + desc);

						this.plae = sap.ui.core.Fragment.byId("functionalfragment", "main").getSelectedKey();

						var plaloc = this.getView().byId("inpfloc").getValue(); ////// for table bind Operation Using the plant in Functional Location
						this.getView().byId("funcloc").setValue(plaloc);

						//console.log(fun);
						var table1 = this.getView().byId("tab1");

						this.funloc.close();

						this.funLoc1 = fun;

						//	this.addrow(); ////// FOR THE oPERATION Table function

						this.tableBind1();

						/*Based on the Function Location Planning Plant, Planning Group, Main Work Center will be Auto Populated*/

						var that = this;

						var sPath = "/FunctionalDataPullSet('" + item + "')";
						var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read(sPath, {
							success: function (oData, oResponse) {

								////// Set Value for combo box for planner group, planning Plant, Main work center

								var x1 = oData.PlannerGroup + " " + oData.PlnGrpDesc;
								//	alert(v2);
								that.getView().byId("cmpplangrp").setValue(x1);

								var x2 = oData.PlanningPlant + " " + oData.PlnPlantDesc;
								//	alert(v1);
								that.getView().byId("cmpplanplt").setValue(x2);

								var x3 = oData.MainWorkCenter + " " + oData.MainWorkCenterDes;
								//	alert(v3);
								that.getView().byId("cmpwork").setValue(x3);

								var y1 = oData.MainWorkCenter;

								that.getView().byId("wkcent").setSelectedKey(y1); /////for Operations Tab Dynamic

								that.PerRespFrag();

							}

						});

					}

					this.plaw = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").getSelectedKey(); /////For plant inside functional fragment   (changed from getValue to getSelectedKey)
					this.getView().byId("inpfloc").setValue(this.plaw);

					var loca = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();
					this.getView().byId("inpfloc").setValue(loca);

					sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();

					var funlockal = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();
					this.getView().byId("inpfloc").setValue(funlockal);

					this.funloc.close();

				}

			},

			Functechok2: function () {

				this.tableBind1();
				//	alert("buttonpressed")

				/*for the Functional Location alone*/
				this.flocal = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();
				//alert(this.flocal);
				this.getView().byId("inpfloc").setValue(this.flocal);
				this.getView().byId("det").setVisible(true);

				var loca = sap.ui.core.Fragment.byId("functionalfragment", "functech").getValue();
				this.getView().byId("inpfloc").setValue(loca);

				var func = this.getView().byId("inpfloc").getValue();
				var SplitTotalFoot = func.split(" ");
				this.func = SplitTotalFoot[0];

				this.getView().byId("funcloc").setValue(func); ////// to be binded in the Operation Table

				var that = this;

				var sPath = "/FunctionalDataPullSet('" + this.func + "')";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						////// Set Value for combo box for planner group, planning Plant, Main work center

						var x1 = oData.PlannerGroup + " " + oData.PlnGrpDesc;
						//	alert(v2);
						that.getView().byId("cmpplangrp").setValue(x1);

						var x2 = oData.PlanningPlant + " " + oData.PlnPlantDesc;
						//	alert(v1);
						that.getView().byId("cmpplanplt").setValue(x2);

						var x3 = oData.MainWorkCenter + " " + oData.MainWorkCenterDes;
						//	alert(v3);
						that.getView().byId("cmpwork").setValue(x3);

						var y1 = oData.MainWorkCenter;

						that.getView().byId("wkcent").setSelectedKey(y1); /////for Operations Tab Dynamic

						that.PerRespFrag();

					}

				});

				this.funloc.close();

			},

			PerRespFrag: function () {

				//debugger;
				var x3 = this.getView().byId("cmpwork").getValue();
				// alert(x3)
				var SplitTotalFoot = x3.split(" ");
				this.x3 = SplitTotalFoot[0];

				var x2 = this.getView().byId("cmpplanplt").getValue();
				// alert(x2);
				var SplitTotalFoot = x2.split(" ");
				this.x2 = SplitTotalFoot[0];

				var that = this;
				var sPath = "/PersonResponsibleF4Set?$filter= Arbpl eq '" + this.x3 + "' and Werks eq '" + this.x2 + "'";

				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						//alert(plntcnt);
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var presp = that.getView().byId("cmpperson");
						//alert(presp);
						presp.setModel(c4model);
						var comboven = that.getView().byId("cmpperson");

						var oItems = new sap.ui.core.ListItem({
							key: "{Pernr}",
							text: "{Pernr} {Short}" //- {Description}
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});

			},

			Functechok3: function () {
				this.tableBind1();

				/*for the sub-Functional Location alone*/
				this.sublocal = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").getSelectedKey();
				//alert(this.sublocal);
				this.getView().byId("inpfloc").setValue(this.sublocal);
				this.getView().byId("det").setVisible(true);

				var subloca = sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").getValue();
				this.getView().byId("inpfloc").setValue(subloca);

				this.getView().byId("funcloc").setValue(subloca); ////// to be binded in the Operation Table

				var subfunc = this.getView().byId("inpfloc").getValue();
				//alert(subfunc);

				var SplitTotalFoot = subfunc.split(" ");
				this.subfunc = SplitTotalFoot[0];

				var that = this;

				var sPath = "/FunctionalDataPullSet('" + this.subfunc + "')";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						////// Set Value for combo box for planner group, planning Plant, Main work center

						var x1 = oData.PlannerGroup + " " + oData.PlnGrpDesc;
						//	alert(v2);
						that.getView().byId("cmpplangrp").setValue(x1);

						var x2 = oData.PlanningPlant + " " + oData.PlnPlantDesc;
						//	alert(v1);
						that.getView().byId("cmpplanplt").setValue(x2);

						var x3 = oData.MainWorkCenter + " " + oData.MainWorkCenterDes;
						//	alert(v3);
						that.getView().byId("cmpwork").setValue(x3);

						var y1 = oData.MainWorkCenter;

						that.getView().byId("wkcent").setSelectedKey(y1); /////for Operations Tab Dynamic

						//that.PerRespFrag();

					}

				});

				this.funloc.close();

			},

			canceltecch: function () {

				sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();
				sap.ui.core.Fragment.byId("functionalfragment", "main").setValue("");
				sap.ui.core.Fragment.byId("functionalfragment", "cost").setValue("");
				sap.ui.core.Fragment.byId("functionalfragment", "functech").setValue("");
				sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "sfl").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "fun_btn").setVisible(false);
				sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").setValue("");

				sap.ui.core.Fragment.byId("functionalfragment", "subfunctech").destroyItems();

				this.funloc.close();
			},

			showdocument: function () {
				this.doc.open();
			},

			docfragok: function () {

				this.doc.close();

			},

			/*Function for the Link Press*/
			handleLinkPress: function () {

				MessageBox.alert("Link was clicked!");

			},

			docfragcancel: function () {

				this.doc.close();

			},

			/*Equipment Fragment*/
			handleValueHelp1: function () {

				var oCont = this;
				var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/CostCenterMasterF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var CostCenter = oData.results[0].CostCenter;
						var Description = oData.results[0].CostCenterDes;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.CostCenter) == -1) {
								dups.push(el.CostCenter);
								return true;
							} else if (dups.indexOf(el.Description) == -1) {
								dups.push(el.Description);
								return true;
							}
							return false;
						});
						var arr9 = {
							"arr9": arr
						};
						console.log("arr9:" + arr9);
						var oItems = new sap.ui.core.ListItem({
							key: "{CostCenter}",
							text: "{CostCenter} {CostCenterDes}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr9);
						oModel.setSizeLimit(1500);
						cost.setModel(oModel);
						cost.bindItems("/arr9", oItems);

					},

				});

				var funloc1 = sap.ui.core.Fragment.byId("equipmentfragment", "equip");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/EquipmentF4Set', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						var EquipmentNo = oData.results[0].EquipmentNo;
						var Text = oData.results[0].Text;

						console.log("EquipmentNo:" + EquipmentNo)
						console.log("Description:" + Text)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.EquipmentNo) == -1) {
								dups.push(el.EquipmentNo);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{EquipmentNo}",
							text: "{EquipmentNo} {Text}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(10000);
						funloc1.setModel(oModel);
						funloc1.bindItems("/arr11", oItems);

					},

				});

				var eqiplant = sap.ui.core.Fragment.byId("equipmentfragment", "main1");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/PlantF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var ImPlant = oData.results[0].ImPlant;
						var Descriptions = oData.results[0].Descriptions;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.ImPlant) == -1) {
								dups.push(el.ImPlant);
								return true;
							} else if (dups.indexOf(el.Descriptions) == -1) {
								dups.push(el.Descriptions);
								return true;
							}
							return false;
						});
						var arr982 = {
							"arr982": arr
						};
						console.log("arr982:" + arr982);
						var oItems = new sap.ui.core.ListItem({
							key: "{ImPlant}",
							text: "{ImPlant} {Descriptions}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr982);
						oModel.setSizeLimit(1500);
						eqiplant.setModel(oModel);
						eqiplant.bindItems("/arr982", oItems);

					},

				});

				this.equipdescBind();

			},

			equipdescBind: function () {

				var funloc1 = sap.ui.core.Fragment.byId("equipmentfragment", "equip");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/EquipmentF4Set', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						var EquipmentNo = oData.results[0].EquipmentNo;
						var Text = oData.results[0].Text;

						console.log("EquipmentNo:" + EquipmentNo)
						console.log("Description:" + Text)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.EquipmentNo) == -1) {
								dups.push(el.EquipmentNo);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{EquipmentNo}",
							text: "{EquipmentNo} {Text}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(10000);
						funloc1.setModel(oModel);
						funloc1.bindItems("/arr11", oItems);

					},

				});

			},

			plant1: function () {

				var oController = this;
				var plant2 = sap.ui.core.Fragment.byId("equipmentfragment", "main1").getSelectedKey();
				console.log("plant2", plant2);
				var table2 = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_F4_SRV/", true);
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/EquipmentSet?$filter=Plant eq'" + plant2 + "'";
				var ocont = this;
				oModel.read(sPath, {

					success: function (oData, oResponse) {

						ocont.count = oData.results.length;
						console.log("ocont.count :", ocont.count);

						if (ocont.count == '0') {

							sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(false);

						} else {

							sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(true);
							sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn").setVisible(true);
							sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn1").setVisible(false);
							// console.log("Function oModel:", oData);
							oModelJson.setData(oData);
							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Text({
										text: "{EquipmentNumber}"
									}),
									new sap.m.Text({
										text: "{EquipmentDes}"
									})

								]
							});
							table2.setModel(oModelJson);
							table2.bindItems("/results", oTemplate);

						}

					}

				});

			},

			/*Selection Change for the Equipment*/

			tech_change1: function () {

				sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(false);
				sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn").setVisible(true);
				sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn1").setVisible(true);
				sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn").setVisible(false);

				//	var ocont = this;
				sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(false); ///// For making the Table False after selecting the Equipment only from the f4

				this.eqi = sap.ui.core.Fragment.byId("equipmentfragment", "equip").getValue();

				this.getView().byId("inpequip").setValue(this.eqi); ////////////////value which is being taken directly from the f4 of Equipment

				var SplitTotalFoot5 = this.eqi.split(" ");
				this.eqim = SplitTotalFoot5[0];

				var t1 = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1");

				var oFilters = [new sap.ui.model.Filter("EquipmentNumber", sap.ui.model.FilterOperator.EQ, this.eqi)];

				var sPath = "/MaterialF4Set?$filter= Plant eq '" + this.planplt + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");
						//alert(mat);
						mat.setModel(c4model);
						var comboven = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

						var oItems = new sap.ui.core.ListItem({
							key: "{Material}",
							text: "{Material}" //- {Description}
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

						if (ocont.count == '0') {

							sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(false);

						} else {

							sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").setVisible(true);

							var oModelJson = new sap.ui.model.json.JSONModel();
							oModelJson.setData(oData);

							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Text({
										text: "{FunctionalLocation}"
									}),
									new sap.m.Text({
										text: "{Text}"
									})

								]
							});
							t1.setModel(oModelJson);
							t1.bindItems("/results", oTemplate);

						}
					}

				});

				////// Set Value for combo box for planner group, planning Plant, Main work center based on Equipment F4

				var that = this;

				var newStr = that.eqim.replace(/[/]/g, "@");
				console.log("newStr", newStr);

				var sPath = "/EquipPullSet('" + newStr + "')"; //('TEQ-00')
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						//console.log("Odata", oData)

						var w1 = oData.FunctionalLocation + " " + oData.FunctionalLocationDesc;
						//alert(w1);
						that.getView().byId("inpfloc").setValue(w1);

						var x2 = oData.FunctionalLocation
						that.getView().byId("funcloc").setValue(x2);
						that.funLoc1 = w1;

						////// Set Value for combo box for planner group, planning Plant, Main work center

						var v2 = oData.PlannerGroup + " " + oData.PlnGrpDesc;
						//	alert(v2);
						that.getView().byId("cmpplangrp").setValue(v2);

						var v1 = oData.PlanningPlant + " " + oData.PlnPlantDesc;
						//	alert(v1);
						that.getView().byId("cmpplanplt").setValue(v1);

						var v3 = oData.MainWorkCenter + " " + oData.MainWorkCenter;
						//	alert(v3);
						that.getView().byId("cmpwork").setValue(v3);

						var x1 = oData.MainWorkCenter; /////For Table Bind VAriable

						that.getView().byId("wkcent").setSelectedKey(x1); /////for Operations Tab Dynamic

					}

				});

				//that.perResp();	   /*The code which is commented now 4/4/2020*/

			},

			clearfilter1: function () {

				var plant = sap.ui.core.Fragment.byId("equipmentfragment", "main1").setValue("");
				var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1").setValue("");
				var equi = sap.ui.core.Fragment.byId("equipmentfragment", "equip").setValue("");

				sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").destroyItems();

				// this.getView().byId("inpequip").setValue();
				// this.getView().byId("inpfloc").setValue();
				// this.getView().byId("cmpplangrp").setValue();
				// this.getView().byId("cmpplanplt").setValue();
				// this.getView().byId("cmpwork").setValue();

			},

			/*Fuction for clearing the data in the Value help for functional fragment*/
			handleIconMainTabBarSelect2: function (oEvent) {

				var icon = sap.ui.core.Fragment.byId("equipmentfragment", "idIconTabBar2");
				var mkey = oEvent.getParameters().key;
				if (mkey === "Plant2") {

					var plant = sap.ui.core.Fragment.byId("equipmentfragment", "main1").setValue("");
					var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1").setValue("");
					var equi = sap.ui.core.Fragment.byId("equipmentfragment", "equip").setValue("");
					sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").destroyItems();

				} else if (mkey === "costcenter") {

					var plant = sap.ui.core.Fragment.byId("equipmentfragment", "main1").setValue("");
					var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1").setValue("");
					var equi = sap.ui.core.Fragment.byId("equipmentfragment", "equip").setValue("");
					sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").destroyItems();

				} else if (mkey === "equipment") {

					var plant = sap.ui.core.Fragment.byId("equipmentfragment", "main1").setValue("");
					var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1").setValue("");
					var equi = sap.ui.core.Fragment.byId("equipmentfragment", "equip").setValue("");
					sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").destroyItems();

				}
			},

			Equitechok1: function () {

				// this.tableBind1();

				this.TableBindEquip();

				/*Condition for the equipment combo inside the equuipment fragment with table */
				var tableid2 = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1");
				this.item2 = tableid2.getSelectedItem();
				console.log(this.item2);

				var tablelength = tableid2.getSelectedItems().length;
				console.log("TableLenth :", tablelength);
				if (tablelength == '0') {
					sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn").setVisible(true);
					sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn1").setVisible(false);
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.error("Please Select Equipment", {
						title: "Error",
						onOK: null
					});
				} else {

					sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn").setVisible(true);
					sap.ui.core.Fragment.byId("equipmentfragment", "eqok_btn1").setVisible(false);

					for (var i = 0; i < tablelength; i++) {
						var rows = tableid2.getSelectedItems()[i];
						this.item2s = rows.getCells()[0].getText();
						//alert(this.item2s)
						this.itemdes2 = rows.getCells()[1].getText();
						//alert(this.itemdes2s)

						this.getView().byId("inpequip").setValue(this.item2s + '   ' + this.itemdes2); //+ ' / ' + this.itemdes2
						this.getView().byId("det1").setVisible(true);
						this.getView().byId("det").setVisible(true);

						////// Set Value for combo box for planner group, planning Plant, Main work center based on Plant & Cost Center inside Fragment

						var that = this;

						var newStr2 = that.item2s.replace(/[/]/g, "@");
						console.log("newStr2", newStr2);

						var sPath1 = "/EquipPullSet('" + newStr2 + "')"; //('TEQ-00')
						var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read(sPath1, {
							success: function (oData, oResponse) {
								console.log("Odata", oData)

								var w2 = oData.FunctionalLocation + " " + oData.FunctionalLocationDesc;
								//alert(w1);
								that.getView().byId("inpfloc").setValue(w2);
								that.getView().byId("funcloc").setValue(w2);
								that.funLoc1 = w2;

								////// Set Value for combo box for planner group, planning Plant, Main work center

								var v5 = oData.PlannerGroup + " " + oData.PlnGrpDesc;
								//	alert(v2);
								that.getView().byId("cmpplangrp").setValue(v5);

								var v6 = oData.PlanningPlant + " " + oData.PlnPlantDesc;
								//	alert(v1);
								that.getView().byId("cmpplanplt").setValue(v6);

								var v7 = oData.MainWorkCenter + " " + oData.MainWorkCenterDes;
								//	alert(v3);
								that.getView().byId("cmpwork").setValue(v7);

								var l1 = oData.MainWorkCenter;

								that.getView().byId("wkcent").setSelectedKey(l1); /////for Operations Tab Dynamic

								// var v8 = oData.EquipmentNumber;
								that.getView().byId("equip").setValue(that.item2s);

								that.PerRespFrag();

							}

						});

						this.equ.close();

					}

				} ////if statement closed

				// this.equ.close();

			},

			equipok21: function () {

				//this.tableBind1();
				this.TableBindEquip();

				var equip = sap.ui.core.Fragment.byId("equipmentfragment", "equip").getSelectedKey();
				this.getView().byId("equip").setValue(equip);
				this.getView().byId("det1").setVisible(true);
				this.getView().byId("det").setVisible(true);
				var valueequip = this.getView().byId("equip").getValue();
				if (valueequip === "") {
					this.getView().byId("det1").setVisible(false);
					this.getView().byId("det").setVisible(false);
				}
				//this.enable1(); /////Function for Enable Logic in Input box of Value help

				this.PerRespFrag(); /*The code commented now 4/4/2020*/

				this.equ.close();

			},
			deta: function () {

				var inpfun = this.getView().byId("inpfloc").getValue();
				var split = inpfun.split(" ");
				var finalfun = split[0];
				var sPath = "/FunctionalDataPullSet('" + finalfun + "')";
				var oModeli = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
				oModeli.read(sPath, {
					success: function (oData, oResponse) {
						console.log(oData);
						// var grp = oData.PlannerGroup;
						// var plt = oData.PlanningPlant;

						sap.ui.core.Fragment.byId("fundia", "funLocDesc").setText(oData.Description);

						sap.ui.core.Fragment.byId("fundia", "funLocObjectType").setText(oData.ObjectType);

						sap.ui.core.Fragment.byId("fundia", "funLocPlanSection").setText(oData.PlantSection);

						sap.ui.core.Fragment.byId("fundia", "funLocLocation").setText(oData.Location);

						sap.ui.core.Fragment.byId("fundia", "funLocRoom").setText(oData.Room);

						sap.ui.core.Fragment.byId("fundia", "funLocSyStatus").setText(oData.SystemStatus);

						sap.ui.core.Fragment.byId("fundia", "funLocUserStatus").setText(oData.UserStatus);

					}
				});
				this.fundet.open();

			},
			funclose: function () {
				this.fundet.close();
			},
			deta1: function () {
				var inpequ = this.getView().byId("inpequip").getValue();
				var split1 = inpequ.split(" ");
				var finalequ = split1[0];

				var newStr3 = finalequ.replace(/[/]/g, "@");
				console.log("newStr3", newStr3);

				var sPath = "/EquipPullSet('" + newStr3 + "')";

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						sap.ui.core.Fragment.byId("equdia", "equipDescription").setText(oData.Description);
						sap.ui.core.Fragment.byId("equdia", "equipCat").setText(oData.EquipmentCatagory);
						sap.ui.core.Fragment.byId("equdia", "objectType").setText(oData.ObjectType);
						sap.ui.core.Fragment.byId("equdia", "modelNo").setText(oData.ModelNumber);
						sap.ui.core.Fragment.byId("equdia", "manufacture").setText(oData.Manufacturer);

						sap.ui.core.Fragment.byId("equdia", "locat").setText(oData.Location);
						sap.ui.core.Fragment.byId("equdia", "room3").setText(oData.Room);
						sap.ui.core.Fragment.byId("equdia", "wkCen1").setText(oData.PPWorkName);

					}
				});
				this.equdet.open();
			},
			equclose: function () {
				this.equdet.close();
			},

			canceltecch1: function () {

				sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").destroyItems();

				this.getView().byId("inpequip").setValue();
				this.getView().byId("inpfloc").setValue();
				this.getView().byId("cmpplangrp").setValue();
				this.getView().byId("cmpplanplt").setValue();
				this.getView().byId("cmpwork").setValue();

				this.equ.close();
			},

			setUser: function () {

				//var oCont = this;

				var usersta = this.getView().byId("cmpuser");
				//console.log(workloc);

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/UserStatusSet', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						// debugger;
						var Status = oData.results[0].Status;
						var Text = oData.results[0].Text;

						console.log("Status:" + Status)
						console.log("Description:" + Text)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Status) == -1) {
								dups.push(el.Status);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{Status}",
							text: "{Status} {StatusText}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(5300);
						usersta.setModel(oModel);
						usersta.bindItems("/arr11", oItems);

					}

				});

			},

			/*Function For the Long Text*/
			_onLinkPress: function () {

				var adata = [{
					name: "Check the Condition of Technical Object"
				}, {
					name: "Check the Malfunction"
				}];
				var notes = "";
				for (var i = 0; i < adata.length; i++) {
					notes = notes + adata[i].name + "\n \n";
				}

				this.getView().byId("textlong").setValue(notes);

			},

			/*For BarCode Scan*/
			onScanForValue: function (oEvent) {
				/*	if (!this._oScanDialog) {
						this._oScanDialog = new sap.m.Dialog({
							title: "Scan Barcode",
							contentWidth: "640px",
							contentHeight: "480px",
							horizontalScrolling: false,
							verticalScrolling: false,
							stretchOnPhone: true,
							content: [new sap.ui.core.HTML({
								id: this.createId("scanContainer"),
								content: "<div />"
							})],
							endButton: new sap.m.Button({
								text: "Cancel",
								type: "Emphasized",
								press: function (oEvent) {
									this._oScanDialog.close();
								}.bind(this)
							}),
							afterOpen: function () {
								// TODO: Investigate why Quagga.init needs to be called every time...possibly because DOM 
								// element is destroyed each time dialog is closed
								this._initQuagga(this.getView().byId("scanContainer").getDomRef()).done(function () {
									// Initialisation done, start Quagga
									Quagga.start();
								}).fail(function (oError) {
									// Failed to initialise, show message and close dialog...this should not happen as we have
									// already checked for camera device ni /model/models.js and hidden the scan button if none detected
									MessageBox.error(oError.message.length ? oError.message : ("Failed to initialise Quagga with reason code " + oError.name), {
										onClose: function () {
											this._oScanDialog.close();
										}.bind(this)
									});
								}.bind(this));
							}.bind(this),
							afterClose: function () {
								// Dialog closed, stop Quagga
								Quagga.stop();
							}
						});

						this.getView().addDependent(this._oScanDialog);
					}

					this._oScanDialog.open();*/

				if (!this._oScanDialog) {
					this._oScanDialog = new sap.m.Dialog({
						title: "Scan Barcode",
						contentWidth: "640px",
						contentHeight: "480px",
						horizontalScrolling: false,
						verticalScrolling: false,
						stretchOnPhone: true,
						content: [new sap.ui.core.HTML({
							// id: this.createId("scanContainer"),
							content: "<div> <video id='scanContainer'></video></div>"
						})],
						endButton: new sap.m.Button({
							text: "Cancel",
							type: "Emphasized",
							press: function (oEvent) {
								this._oScanDialog.close();
							}.bind(this)
						}),
						afterOpen: function () {

							let selectedDeviceId;
							const codeReader = new ZXing.BrowserBarcodeReader()
							console.log('ZXing code reader initialized')
							codeReader.getVideoInputDevices()
								.then((videoInputDevices) => {
									const sourceSelect = document.getElementById('sourceSelect')
									selectedDeviceId = videoInputDevices[0].deviceId
									if (videoInputDevices.length > 1) {
										videoInputDevices.forEach((element) => {
											const sourceOption = document.createElement('option')
											sourceOption.text = element.label
											sourceOption.value = element.deviceId
											sourceSelect.appendChild(sourceOption)
										})

										sourceSelect.onchange = () => {
											selectedDeviceId = sourceSelect.value;
										}

										const sourceSelectPanel = document.getElementById('sourceSelectPanel')
										sourceSelectPanel.style.display = 'block'
									}
									codeReader.decodeOnceFromVideoDevice(selectedDeviceId, 'scanContainer').then((result) => {
										console.log(result);
										console.log(result.text);
										// alert(result);
										var BarCodedata = result.text;
										console.log(BarCodedata);
										this.getView().getModel("oGlobalModel").setProperty("/barCode", BarCodedata);
										this.getView().byId("inpequip").setValue(result.text);
										//	this.submit();
										// Close dialog
										this._oScanDialog.close();
										var techobj = this.getView().byId("inpequip").getValue();
										// var techfrst = techobj.split(" ");
										// var splitted = techfrst[0];

										this.getView().byId("equip").setValue(techobj);

										var oModel12 = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);

										var newStr4 = techobj.replace(/[/]/g, "@");
										console.log("newStr4", newStr4);

										var sPath = "/EquipPullSet('" + newStr4 + "')";
										var oCont = this;
										oModel12.read(sPath, {
											success: function (oData, oResponse) {
												console.log("oData", oData);

												var funcloc = oData.FunctionalLocation + " " + oData.FunctionalLocationDesc;
												//var plannerdesc = oData.FunctionalLocation;
												oCont.byId("inpfloc").setValue(funcloc);
												oCont.getView().byId("funcloc").setValue(funcloc);

												var plannergrp = oData.PlannerGroup + " " + oData.PlnGrpDesc;
												//var plannerdesc = oData.PlnGrpDesc;
												oCont.byId("cmpplangrp").setValue(plannergrp);

												var planningplant = oData.PlanningPlant + " " + oData.PlnPlantDesc;
												//	var plantdesc = oData.PlnPlantDesc;
												oCont.byId("cmpplanplt").setValue(planningplant);

												var mainwork = oData.MainWorkCenter + " " + oData.MainWorkCenter;
												oCont.byId("cmpwork").setValue(mainwork);
												// oCont.getView().byId("wkcent").setSelectedKey(barwkcen);
												// oCont.getView().byId("wkcent").setModel(PersonListModel, "PersonListModel");

												var barwkcen = oData.MainWorkCenter;
												//alert(barwkcen);
												oCont.getView().byId("wkcent").setSelectedKey(barwkcen);

											}
										}); //bind(oCont)

										/*		var sPath = "/PersonResponsibleF4Set?$filter= Arbpl eq '" + barwkcen + "' and Werks eq '" + planing + "'";

												var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
												oModel.read(sPath, {
													success: function (oData, oResponse) {

														var plntcnt = oData.results.length;
														//alert(plntcnt);
														console.log("countable:", plntcnt);

														var c4model = new sap.ui.model.json.JSONModel();
														c4model.setSizeLimit(5300);
														c4model.setData(oData);
														var presp = that.getView().byId("cmpperson");
														//alert(presp);
														presp.setModel(c4model);
														var comboven = that.getView().byId("cmpperson");

														var oItems = new sap.ui.core.ListItem({
															key: "{Pernr}",
															text: "{Pernr} {Short}" //- {Description}
														});
														comboven.bindAggregation("items", {
															path: "/results",
															template: oItems
														});

													}
												});*/

										codeReader.reset();
										console.log('Reset.')
											// this._oScanDialog.close();
											// document.getElementById('result').textContent = result.text
									}).catch((err) => {
										console.error(err)
											// document.getElementById('result').textContent = err
									})
									console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
								})

						}.bind(this),
						afterClose: function () {
							// Dialog closed, stop Quagga
							// Quagga.stop();
						}
					});

					this.getView().addDependent(this._oScanDialog);
					console.log(this._oScanDialog);
				}

				this._oScanDialog.open();

			},

			/*		_initQuagga: function (oTarget) {
						var oDeferred = jQuery.Deferred();

						// Initialise Quagga plugin - see https://serratus.github.io/quaggaJS/#configobject for details
						Quagga.init({
							inputStream: {
								type: "LiveStream",
								target: oTarget,
								constraints: {
									width: {
										min: 640
									},
									height: {
										min: 480
									},
									facingMode: "environment"
								}
							},
							locator: {
								patchSize: "medium",
								halfSample: true
							},
							numOfWorkers: 2,
							frequency: 10,
							decoder: {
								readers: [
									"code_128_reader",
									"ean_reader",
									"ean_8_reader",
									"code_39_reader",
									"code_39_vin_reader",
									"codabar_reader",
									"upc_reader",
									"upc_e_reader",
									"i2of5_reader",
									"2of5_reader",
									"code_93_reader"
								],
								debug: {
									showCanvas: true,
									showPatches: true,
									showFoundPatches: true,
									showSkeleton: true,
									showLabels: true,
									showPatchLabels: true,
									showRemainingPatchLabels: true,
									boxFromPatches: {
										showTransformed: true,
										showTransformedBox: true,
										showBB: true
									}
								}
							},
							locate: true
						}, function (error) {
							if (error) {
								oDeferred.reject(error);
							} else {
								oDeferred.resolve();
							}
						});

						if (!this._bQuaggaEventHandlersAttached) {
							// Attach event handlers...

							Quagga.onProcessed(function (result) {
								var drawingCtx = Quagga.canvas.ctx.overlay,
									drawingCanvas = Quagga.canvas.dom.overlay;

								if (result) {
									// The following will attempt to draw boxes around detected barcodes
									if (result.boxes) {
										drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
										result.boxes.filter(function (box) {
											return box !== result.box;
										}).forEach(function (box) {
											Quagga.ImageDebug.drawPath(box, {
												x: 0,
												y: 1
											}, drawingCtx, {
												color: "green",
												lineWidth: 2
											});
										});
									}

									if (result.box) {
										Quagga.ImageDebug.drawPath(result.box, {
											x: 0,
											y: 1
										}, drawingCtx, {
											color: "#00F",
											lineWidth: 2
										});
									}

									if (result.codeResult && result.codeResult.code) {
										Quagga.ImageDebug.drawPath(result.line, {
											x: 'x',
											y: 'y'
										}, drawingCtx, {
											color: 'red',
											lineWidth: 3
										});
									}
								}
							}.bind(this));

							Quagga.onDetected(function (result) {
								// Barcode has been detected, value will be in result.codeResult.code. If requierd, validations can be done 
								// on result.codeResult.code to ensure the correct format/type of barcode value has been picked up

								// Set barcode value in input field
								this.getView().byId("inpequip").setValue(result.codeResult.code);

								this.getView().byId("equip").setValue(result.codeResult.code);

								var oModel12 = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
								var sPath = "/EquipPullSet('" + result.codeResult.code + "')";
								var oCont = this;
								oModel12.read(sPath, {
									success: function (oData, oResponse) {
										console.log("oData", oData);

										var funcloc = oData.FunctionalLocation + " " + oData.FunctionalLocationDesc;
										//var plannerdesc = oData.FunctionalLocation;
										oCont.byId("inpfloc").setValue(funcloc);
										oCont.getView().byId("funcloc").setValue(funcloc);

										var plannergrp = oData.PlannerGroup + " " + oData.PlnGrpDesc;
										//var plannerdesc = oData.PlnGrpDesc;
										oCont.byId("cmpplangrp").setValue(plannergrp);

										var planningplant = oData.PlanningPlant + " " + oData.PlnPlantDesc;
										//	var plantdesc = oData.PlnPlantDesc;
										oCont.byId("cmpplanplt").setValue(planningplant);

										var mainwork = oData.MainWorkCenter + " " + oData.MainWorkCenter;
										oCont.byId("cmpwork").setValue(mainwork);
										oCont.byId("wkcent").setValue(mainwork);

										

									}
								});

							
								this._oScanDialog.close();
							}.bind(this));

							// Set flag so that event handlers are only attached once...
							this._bQuaggaEventHandlersAttached = true;
						}

						return oDeferred.promise();
					},*/

			/*For the Upload Function*/
			onStartUpload: function (oEvent) {
				var oUploadCollection = this.byId("UploadCollection");
				var oTextArea = this.byId("TextArea");
				var cFiles = oUploadCollection.getItems().length;
				var uploadInfo = cFiles + " file(s)";

				if (cFiles > 0) {
					oUploadCollection.upload();

					if (oTextArea.getValue().length === 0) {
						uploadInfo = uploadInfo + " without notes";
					} else {
						uploadInfo = uploadInfo + " with notes";
					}

					MessageToast.show("Method Upload is called (" + uploadInfo + ")");
					MessageBox.information("Uploaded " + uploadInfo);
					oTextArea.setValue("");
				}
			},
			onUploadComplete: function (oEvent) {
				var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
				setTimeout(function () {
					var oUploadCollection = this.byId("UploadCollection");

					for (var i = 0; i < oUploadCollection.getItems().length; i++) {
						if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
							oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
							break;
						}
					}

					// delay the success message in order to see other messages before
					MessageToast.show("Event uploadComplete triggered");
				}.bind(this), 8000);
			},
			onChange: function (oEvent) {
				var oUploadCollection = oEvent.getSource();
				// Header Token
				var oCustomerHeaderToken = new UploadCollectionParameter({
					name: "x-csrf-token",
					value: "securityTokenFromModel"
				});
				oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
				MessageToast.show("Event change triggered");
			},
			_onTableItemPress: function () {

				var sDialogName = "Dialog1";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog1(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}

				oDialog.open();

			},
			_onButtonPress: function () {

				var sDialogName = "Dialog3";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog3(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}
				oDialog.open();

			},
			onButton: function () {

				var sDialogName = "Dialog3";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog3(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}
				oDialog.close();

			},
			_onSegmentedButtonItemPress: function () {

				var sDialogName = "Dialog3";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog3(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}
				oDialog.open();

			},
			_onSegmentedButtonItemPress1: function () {

				var sDialogName = "Dialog2";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog2(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}
				oDialog.open();

			},

			_onUploadCollectionUploadComplete: function (oEvent) {

				var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
				setTimeout(function () {
					var oUploadCollection = this.byId("UploadCollection");

					for (var i = 0; i < oUploadCollection.getItems().length; i++) {
						if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
							oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
							break;
						}
					}

					// delay the success message in order to see other messages before
					MessageToast.show("Event uploadComplete triggered");
				}.bind(this), 8000);

			},
			_onUploadCollectionChange: function (oEvent) {

				var oUploadCollection = oEvent.getSource();
				var aFiles = oEvent.getParameter('files');

				if (aFiles && aFiles.length) {
					var oFile = aFiles[0];
					var sFileName = oFile.name;

					var oDataModel = this.getView().getModel();
					if (oUploadCollection && sFileName && oDataModel) {
						var sXsrfToken = oDataModel.getSecurityToken();
						var oCsrfParameter = new sap.m.UploadCollectionParameter({
							name: "x-csrf-token",
							value: sXsrfToken
						});
						oUploadCollection.addHeaderParameter(oCsrfParameter);
						var oContentDispositionParameter = new sap.m.UploadCollectionParameter({
							name: "content-disposition",
							value: "inline; filename=\"" + encodeURIComponent(sFileName) + "\""
						});
						oUploadCollection.addHeaderParameter(oContentDispositionParameter);
					} else {
						throw new Error("Not enough information available");
					}
				}
			},
			_onUploadCollectionTypeMissmatch: function () {

				return new Promise(function (fnResolve) {
					sap.m.MessageBox.warning(
						"The file you are trying to upload does not have an authorized file type (JPEG, JPG, GIF, PNG, TXT, PDF, XLSX, DOCX, PPTX, DOC).", {
							title: "Invalid File Type",
							onClose: function () {
								fnResolve();
							}
						});
				}).catch(function (err) {
					if (err !== undefined) {
						MessageBox.error(err);
					}
				});

			},

			_onUploadCollectionFileSizeExceed: function () {
				return new Promise(function (fnResolve) {
					sap.m.MessageBox.warning("The file you are trying to upload is too large (10MB max).", {
						title: "File Too Large",
						onClose: function () {
							fnResolve();
						}
					});
				}).catch(function (err) {
					if (err !== undefined) {
						MessageBox.error(err);
					}
				});

			},

			///////////////Fragment for Purchase Data Fragments

			fragCurr: function () {

				//var oCont = this;

				var curr = sap.ui.core.Fragment.byId("Operationsfragment", "combo15");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/CurrencyF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var Currency = oData.results[0].Currency;
						console.log("Currency" + Currency)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Currency) == -1) {
								dups.push(el.Currency);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{Currency}",
							text: "{Currency} {CurrencyText}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						curr.setModel(oModel);
						curr.bindItems("/arr7", oItems);
					}
				});
			},

			/*Material Group F4*/
			fragMatGrp: function () {

				//var oCont = this;

				var matgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo8");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/MaterialGroupF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var MaterialGroup = oData.results[0].MaterialGroup;
						console.log("MaterialGroup:" + MaterialGroup)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.MaterialGroup) == -1) {
								dups.push(el.MaterialGroup);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{MaterialGroup}",
							text: "{MaterialGroup} {MatGrpText}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						matgrp.setModel(oModel);
						matgrp.bindItems("/arr7", oItems);
					}
				});

			},
			/*Purchase Group inside the Fragment*/
			fragPurGrp: function () {

				//	var oCont = this;

				var purgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo9");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/POGrpSet', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var PurGrp = oData.results[0].PurGrp;
						console.log("PurGrp" + PurGrp)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.PurGrp) == -1) {
								dups.push(el.PurGrp);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{PurGrp}",
							text: "{PurGrp} {PurGrpDesc}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						purgrp.setModel(oModel);
						purgrp.bindItems("/arr7", oItems);
					}
				});

			},

			/*F4 for the Vendor inside the Fragment of Purchase data*/
			fragVend: function () {

				//var oCont = this;

				var vend = sap.ui.core.Fragment.byId("Operationsfragment", "combo10");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/VendorF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var Vendor = oData.results[0].Vendor;
						console.log("Vendor" + Vendor)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Vendor) == -1) {
								dups.push(el.Vendor);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{Vendor}",
							text: "{Vendor} {Name}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						vend.setModel(oModel);
						vend.bindItems("/arr7", oItems);
					}
				});

			},

			/*For the F4 Aggrement*/
			fragAgree: function () {

				//var oCont = this;

				var agree = sap.ui.core.Fragment.byId("Operationsfragment", "combo12");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/AgreementF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var DocumentNo = oData.results[0].DocumentNo;
						console.log("DocumentNo" + DocumentNo)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.DocumentNo) == -1) {
								dups.push(el.DocumentNo);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{DocumentNo}",
							text: "{DocumentNo}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						agree.setModel(oModel);
						agree.bindItems("/arr7", oItems);
					}
				});
			},

			/*F4 For the Item Inside the Fragment*/
			fragItem: function () {

				//	var oCont = this;

				var item = sap.ui.core.Fragment.byId("Operationsfragment", "combo13");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/AgreementF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var Item = oData.results[0].Item;
						console.log("Item" + Item)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Item) == -1) {
								dups.push(el.Item);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{Item}",
							text: "{Item}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						item.setModel(oModel);
						item.bindItems("/arr7", oItems);
					}
				});

			},
			/*F4 For the G/L Account*/

			fragAcc: function () {

				//var oCont = this;

				var acc = sap.ui.core.Fragment.byId("Operationsfragment", "combo16");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/GLAccountF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var AccNo = oData.results[0].AccNo;
						console.log("AccNo" + AccNo)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.AccNo) == -1) {
								dups.push(el.AccNo);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{AccNo}",
							text: "{AccNo} {AccGroup}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						acc.setModel(oModel);
						acc.bindItems("/arr7", oItems);
					}
				});

			},
			/*F4 For the Info Record*/

			fragInfo: function () {

				//	var oCont = this;

				var info = sap.ui.core.Fragment.byId("Operationsfragment", "combo14");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/InfoRecordF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var DocNo = oData.results[0].DocNo;
						console.log("DocNo" + DocNo)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.DocNo) == -1) {
								dups.push(el.DocNo);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{DocNo}",
							text: "{DocNo}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						info.setModel(oModel);
						info.bindItems("/arr7", oItems);
					}
				});
			},

			purDoc: function () { /////Icon Tab Bar inside the fragment

				var that = this;

				//	oCont.mtl = this.getView().byId("combo3").setValue(plant);
				//debugger;
				var sPath = "/PurchDataSet(Plant='1000',PurGroup='100',Quom='ST')"; //('TEQ-00')
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						console.log("Odata", oData)

						//oCont.z1 = oData.Quom;
						//alert(z1);
						that.z2 = oData.PriceUom;
						that.z3 = oData.MatGroup;
						that.z4 = oData.PurGroup;
						that.z5 = oData.PriceUnit;
						that.z6 = oData.GLAccount;

					}

				});

			},

			busyDialogFun: function () {
				// var busyDialog = this.byId("BusyDialog");
				// debugger;
				this.busyDialog.open();

				jQuery.sap.delayedCall(5000, this, function () {
					this.busyDialog.close();
				});
			},
			/*Function for the fragment message while Posting*/
			msgtableok: function () {
				//	sap.ui.core.Fragment.byId("dmsfragment","addcondialog1").getModel("oGlobalModel").setProperty("/delayLoad",true);

				this.getView().getModel("oGlobalModel").setProperty("/delayLoad", true);

				//alert("Pressed");

				var inf_arr = [];

				var err_arr = [];

				var rowItems = sap.ui.core.Fragment.byId("messagefragment", "Msgtab").getItems();

				//	this.msg.close();

				var tablength = rowItems.length;

				console.log("tablength", tablength);

				for (var i = 0; i < tablength; i++) {

					var item = rowItems[i];

					var Cells = item.getCells();

					var tp = Cells[0].getText();

					if (tp === "Success") {

						var inf = {
							tp: tp
						};

						inf_arr.push(inf);

						var len_inf = inf_arr.length;

					} else if (tp === "Error") {

						var err = {
							tp: tp
						};

						err_arr.push(err);

						var len_err = err_arr.length;

					}

				}

				if (len_inf === tablength) {

					//that.workOrd = that.msg1.slice(11, 17);

					var ci_att1 = this.getView().byId("UploadCollection").getItems().length;
					// debugger;

					if (ci_att1 == '0') {

						window.location.reload();

					} else {

						this.DMS();
						//this.arr142j
						window.location.reload();
					}

				} else {

				}

				this.msg.close();

			},
			msgtableok1: function () {

				/*	this.getView().getModel("oGlobalModel").setProperty("/delayLoad", true);

				//alert("Pressed");

				var inf_arr = [];

				var err_arr = [];

				var rowItems = sap.ui.core.Fragment.byId("messagefragment", "Msgtab").getItems();

				//	this.msg.close();

				var tablength = rowItems.length;

				console.log("tablength", tablength);

				for (var i = 0; i < tablength; i++) {

					var item = rowItems[i];

					var Cells = item.getCells();

					var tp = Cells[0].getText();

					if (tp === "Success") {

						var inf = {
							tp: tp
						};

						inf_arr.push(inf);

						var len_inf = inf_arr.length;

					} else if (tp === "Error") {

						var err = {
							tp: tp
						};

						err_arr.push(err);

						var len_err = err_arr.length;

					}

				}

				if (len_inf === tablength) {
						
					//that.workOrd = that.msg1.slice(11, 17);

					var ci_att1 = this.getView().byId("UploadCollection").getItems().length;
											// debugger;

											if (ci_att1 == '0') {
												
												window.location.reload();
												
											} else {

														this.DMS();
														//this.arr142j
														window.location.reload();
											}
						
							} else {

				

				}*/

				this.msgDms.close();
				window.location.reload();
			},

			subscribeForPushNotifications: function (appContext) {

				var HCPAccount, serverHost, deliveryAddress, oSubscription;

				deliveryAddress = "/Push_notification/" + "restnotification/application/com.sap.webide.x17ce13f273944761b7514d6f0f14a0b2";
				oSubscription = {
					"alert": appContext,
					"data": "Test message sent from Web IDE"
				};
				var payload = JSON.stringify(oSubscription);
				$.ajax({
					url: deliveryAddress,
					type: "POST",
					contentType: "application/json",
					dataType: "json",
					data: payload,
					success: function (data, textStatus, jqxhr) {

					},
					error: function (jqxhr, textStatus, errorThrown) {

					}
				});

			},

			_subscriptionCreateSuccess: function (oData, response) {
				console.log("Successfully subscribed for event");
			},

			_subscriptionCreateError: function (oError) {
				console.log("Failed to subscribe to event");
			},

			onSaveVariant: function () {
				var that = this;
				that.ordertype = that.getView().byId("order").getValue();
				that.priority = that.getView().byId("priority").getValue();
				var table1 = this.getView().byId("tablez");
				var count = table1.getItems().length;
				if (that.ordertype === "") {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select Order type", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				} else if (that.priority === "") {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select Priority", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				} else if (count === 0) {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please enter the Operation", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				} else {

					// var oModel1 = new sap.ui.model.json.JSONModel();
					// /* Assign the model to the view */
					// that.getView().setModel(oModel1);
					// /* Load the data */
					// oModel1.loadData("/services/userapi/currentUser");
					// oModel1.attachRequestCompleted(function onCompleted(oEvent) {
					// 	that.suser = oModel1.oData.name;
					// 	var firstname = oModel1.oData.firstName;
					// 	var lastname = oModel1.oData.lastName;
					// 	that.fullname = firstname + " " + lastname;
					// 	//that.getView().getModel("oGlobalModel").setProperty("/logid", this.suser);
					// 	console.log("that.suser", that.suser);
					// 	that.fullname1 = that.fullname;
					// 	console.log("that.fullname", that.fullname1);
					that.user = parent.sap.ushell.Container.getUser().getId();
					sap.ui.core.Fragment.byId("savevariant", "crea_by_txt").setText(that.user);
					// });

					this.savevariant.open();
				}

			},
			savevarcancel: function () {
				this.savevariant.close();
			},

			savevarok: function () {
				var variantName = sap.ui.core.Fragment.byId("savevariant", "varname").getValue();
				var variantdescription = sap.ui.core.Fragment.byId("savevariant", "var_des").getValue();
				// var createdby = sap.ui.core.Fragment.byId("savevariant", "crea_by_txt").getValue();
				if (variantName === '' || variantName === "undefined") {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please enter variant name", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				} else {

					var that = this;
					that.ordertype = that.getView().byId("order").getValue();

					that.orderlbl = that.getView().byId("orderlbl").mProperties.text;

					that.priority = that.getView().byId("priority").getValue();

					that.prioritylbl = that.getView().byId("prioritylbl").mProperties.text;

					that.funloc = that.getView().byId("inpfloc").getValue();

					that.funloclbl = that.getView().byId("lblfunloc").mProperties.text;

					that.equip = that.getView().byId("inpequip").getValue();

					that.equiplbl = that.getView().byId("lbleqp").mProperties.text;

					that.Description = that.getView().byId("inpdescr").getValue();

					that.descLabel = that.getView().byId("descLabel").mProperties.text;

					that.LongText = that.getView().byId("textlong").getValue();

					that.LongTextLabel = that.getView().byId("LongTextLabel").mProperties.text;

					that.startDate = that.getView().byId("datstart").getValue();

					that.startDateLabel = that.getView().byId("startDateLabel").mProperties.text;

					that.endDate = that.getView().byId("datend").getValue();

					that.endDateLabel = that.getView().byId("endDateLabel").mProperties.text;

					that.tasklist = that.getView().byId("cmptask").getValue();

					that.tasklistLabel = that.getView().byId("taskListLabel").mProperties.text;

					that.notification = that.getView().byId("cmpnotif").getValue();

					that.notificationLabel = that.getView().byId("notificationLabel").mProperties.text;

					that.plannergroup = that.getView().byId("cmpplangrp").getValue()

					that.plannergroupLabel = that.getView().byId("plannergroupLabel").mProperties.text;

					that.planningplant = that.getView().byId("cmpplanplt").getValue()

					that.planningplantLabel = that.getView().byId("planningplantLabel").mProperties.text;

					that.mainworkcnter = that.getView().byId("cmpwork").getValue();

					that.mainworkcnterLabel = that.getView().byId("mainworkcnterLabel").mProperties.text;

					that.setuserstat = that.getView().byId("cmpuser").getValue();

					that.setuserstatLabel = that.getView().byId("setuserstatLabel").mProperties.text;

					that.addnitionalfun = that.getView().byId("addfunctions").getValue();

					that.addnitionalfunLabel = that.getView().byId("addnitionalfunLabel").mProperties.text;

					that.personres = that.getView().byId("cmpperson").getValue();

					that.personresLabel = that.getView().byId("personresLabel").mProperties.text;

					var table1 = this.getView().byId("tablez");
					var count = table1.getItems().length;

					//	var camList = this.getView().byId("Cam_list").getItems().length;

					var array = [];

					that.ops1 = table1.getItems()[0].getCells()[0].getValue();
					that.desc1 = table1.getItems()[0].getCells()[1].getValue();
					that.wrkcntr1 = table1.getItems()[0].getCells()[2].getValue();
					that.cntrlkey1 = table1.getItems()[0].getCells()[3].getValue();
					that.plndhrs1 = table1.getItems()[0].getCells()[4].getValue();
					that.funloc1 = table1.getItems()[0].getCells()[5].getValue();
					that.equip1 = table1.getItems()[0].getCells()[6].getValue();
					// var desc = table1.getItems()[0].getCells()[1].getValue();

					// that.tabopr = that.getView().byId("taboper").getValue();

					that.tabopr = that.getView().byId("taboper").mProperties.text;
					that.tabdescr = that.getView().byId("tabdescr").mProperties.text;
					that.tabwrkcntr = that.getView().byId("tabworkcntr").mProperties.text;
					that.tabcntrlkey = that.getView().byId("tabcntrlkey").mProperties.text;
					that.tabplndhrs = that.getView().byId("plannedhrs").mProperties.text;
					that.tabofunloc = that.getView().byId("tabfunloc").mProperties.text;
					that.tabequip = that.getView().byId("tabequip").mProperties.text;

					console.log(that.fullname);

					sap.m.MessageBox.show(
						"Do you want to save the variant?", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information Message",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								// // notify user
								if (oAction == "YES") {
									// var that = this;
									var oModelVariant = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
									var postdata = {
										"VariantDate": "",
										"VariantTime": "",
										"ModuleName": "PM",
										"ApplicationName": "WORK ORDER",
										"VariantName": variantName,
										"VariantDescription": variantdescription,
										"CreatedBy": that.user, //that.fullname,

										"Header2ItemNavi": [{
												"FieldName": that.orderlbl,
												"FieldValue": that.ordertype
											}, {
												"FieldName": that.prioritylbl,
												"FieldValue": that.priority
											}, {
												"FieldName": that.funloclbl,
												"FieldValue": that.funloc
											}, {
												"FieldName": that.equiplbl,
												"FieldValue": that.equip
											}, {
												"FieldName": that.descLabel,
												"FieldValue": that.Description
											}, {
												"FieldName": that.LongTextLabel,
												"FieldValue": that.LongText
											}, {
												"FieldName": that.startDateLabel,
												"FieldValue": that.startDate
											}, {
												"FieldName": that.endDateLabel,
												"FieldValue": that.endDate
											}, {
												"FieldName": that.tasklistLabel,
												"FieldValue": that.tasklist
											}, {
												"FieldName": that.notificationLabel,
												"FieldValue": that.notification
											}, {
												"FieldName": that.plannergroupLabel,
												"FieldValue": that.plannergroup
											}, {
												"FieldName": that.planningplantLabel,
												"FieldValue": that.planningplant
											}, {
												"FieldName": that.mainworkcnterLabel,
												"FieldValue": that.mainworkcnter
											}, {
												"FieldName": that.setuserstatLabel,
												"FieldValue": that.setuserstat
											}, {
												"FieldName": that.addnitionalfunLabel,
												"FieldValue": that.addnitionalfun
											}, {
												"FieldName": that.personresLabel,
												"FieldValue": that.personres
											}, {
												"FieldName": that.tabopr,
												"FieldValue": that.ops1
											}, {
												"FieldName": that.tabdescr,
												"FieldValue": that.desc1
											}, {
												"FieldName": that.tabwrkcntr,
												"FieldValue": that.wrkcntr1
											}, {
												"FieldName": that.tabcntrlkey,
												"FieldValue": that.cntrlkey1
											}, {
												"FieldName": that.tabplndhrs,
												"FieldValue": that.plndhrs1
											}, {
												"FieldName": that.tabofunloc,
												"FieldValue": that.funloc1
											}
											// , {
											// 	"FieldName": that.tabequip,
											// 	"FieldValue": that.equip1
											// }
										]
									};
									var sPath = "/HeaderSet";
									oModelVariant.create(sPath, postdata, {
										success: function (oData, oResponse) {
											console.log(oData);

											var msg1 = "The Variant " + variantName + " Saved!";

											MessageToast.show(msg1);
										},
										error: function (oData, oResponse) {
											console.log(oData);
										}
									});
								}

							}
						});
					this.savevariant.close();
				}
			},
			var_comb_bind: function () {
				// var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
				// var sPath = "/VariantF4Set?$filter=ModuleName eq 'PM' and ApplicationName eq 'WORK ORDER'";
				// oModel.read(sPath, {
				// 	success: function (oData, oResponse) {
				// 		console.log(oData)
				// 		this.getView().getModel("oGlobalModel").setProperty("/variantNames", oData.results);
				// 	}.bind(this)
				// });

				var sPath = "/VariantF4Set?$filter=ModuleName eq'PM' and ApplicationName eq 'WORK ORDER'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				var ocont = this;

				oModel.read(sPath, {
					success: function (oData, oResponse) {
						var count = oData.results.length;
						console.log("count", count);
						var c4Model = new sap.ui.model.json.JSONModel();
						c4Model.setSizeLimit(count);
						c4Model.setData(oData);
						var t5 = sap.ui.core.Fragment.byId("openvariant", "selectvarname");
						t5.setModel(c4Model);
						var vescombo = sap.ui.core.Fragment.byId("openvariant", "selectvarname");
						var oItems = new sap.ui.core.ListItem({
							key: "{VariantName}",
							text: "{VariantName}"
						});
						vescombo.bindAggregation("items", {
							path: '/results',
							template: oItems

						});

					}
				});

			},
			onOpenVariant: function () {
				this.openvariant.open(), this.var_comb_bind();

			},
			openvarcancel: function () {
				this.openvariant.close();
			},
			Sel_var_chng: function () {

			},
			openvarok: function () {
				array1z = [];
				this.variant = sap.ui.core.Fragment.byId("openvariant", "selectvarname").getValue();
				if (this.variant === "") {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.error("Please select the variant name", {
						title: "Error",
						onClose: null
					});
				} else {
					console.log("direct");
					console.log(this.variant);
					this.variantfetch();
				}
				// this.openvariant.close();
			},
			variantfetch: function () {
				// var variant = sap.ui.core.Fragment.byId("openvariant", "selectvarname").getSelectedKey();
				console.log("inside else");
				var oFilter = [new sap.ui.model.Filter("ModuleName", sap.ui.model.FilterOperator.EQ, 'PM'), new sap.ui.model.Filter(
						"ApplicationName", sap.ui.model.FilterOperator.EQ, 'WORK ORDER'),
					new sap.ui.model.Filter("VariantName", sap.ui.model.FilterOperator.EQ, this.variant)
				];
				var sPath = "/HeaderSet";
				// console.log("sPath", sPath);
				var that = this;
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {

					urlParameters: {
						"$expand": "Header2ItemNavi" //Multiple expand odata
					},
					filters: oFilter,
					success: function (oData, oResponse) {
						console.log(oData);
						var count = oData.results[0].Header2ItemNavi.results.length;

						for (var i = 0; i < count; i++) {
							var itemTable = that.getView().byId("tablez");
							var FieldName = oData.results[0].Header2ItemNavi.results[i].FieldName;
							/* var FieldValue = oData.results[0].Header2ItemNavi.results[i].FieldValue;*/

							if (FieldName === "Order Type") {
								// var FieldValue = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								//that.getView().byId("Characteristics_inp").setValue(FieldValue);
								var dummy = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								var dummy1 = dummy.split(":");
								var dummy2 = dummy1[1];
								that.getView().byId("order").setValue(dummy2);
							} else if (FieldName === "Priority") {
								/* var FieldValue = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								that.getView().byId("Characteristics_Unit_inp").setValue(FieldValue);.*/
								var dummypri = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								var dummypri1 = dummypri.split(":");
								var dummypri2 = dummypri1[1];
								that.getView().byId("priority").setValue(dummypri2);
							} else if (FieldName === "Functional Location") {
								that.getView().byId("inpfloc").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
								that.funlocat = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								itemTable.getItems()[0].getCells()[5].setValue(that.funlocat);
								that.getView().byId("funcloc").setValue(that.funlocat);
							} else if (FieldName === "Equipment") {
								that.getView().byId("inpequip").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
								console.log(that.getView().byId("inpequip").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue));
								var equipokk = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								var SplitTotalFoot2 = equipokk.split(" ");
								var equipokkk = SplitTotalFoot2[0];
								itemTable.getItems()[0].getCells()[6].setValue(equipokk);
								// itemTable.getItems()[0].getCells()[6].setValue(equipokkk);
								that.getView().byId("equip").setValue(equipokkk);

							} else if (FieldName === "Description") {
								var descr = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								itemTable.getItems()[0].getCells()[1].setValue(descr);
								that.getView().byId("inpdescr").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Long Text") {
								that.getView().byId("textlong").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Start Date") {
								that.getView().byId("datstart").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "End Date") {
								that.getView().byId("datend").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Tasklist") {
								that.getView().byId("cmptask").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Notification") {
								that.getView().byId("cmpnotif").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Planner Group") {
								that.getView().byId("cmpplangrp").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Planning Plant") {
								that.getView().byId("cmpplanplt").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Main Work Center") {
								that.getView().byId("cmpwork").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Set User Status") {
								that.getView().byId("cmpuser").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Add. Functions") {
								that.getView().byId("addfunctions").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Person.Res") {
								that.getView().byId("cmpperson").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Operation") {
								var oper = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								itemTable.getItems()[0].getCells()[0].setValue(oper);
								// that.getView().byId("tabporval").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							}
							// else if (FieldName === "Description") {
							// var descr = oData.results[0].Header2ItemNavi.results[i].FieldValue;
							// itemTable.getItems()[0].getCells()[1].setValue(descr);
							// // that.getView().byId("tabdesval").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							// }
							else if (FieldName === "Work Center") {
								var wrkcnttr = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								itemTable.getItems()[0].getCells()[2].setValue(wrkcnttr);
								// that.getView().byId("wkcent").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Control Key") {
								var cntrky = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								var cntrky1 = itemTable.getItems()[0].getCells()[3].setValue(cntrky);
								// itemTable.getItems()[0].getCells()[3].setValue(cntrky);
								that.getView().byId("control").setValue(cntrky);
							} else if (FieldName === "Planned Work (Hours)") {
								var plndhrs = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								var plndhrs = itemTable.getItems()[0].getCells()[4].setValue(plndhrs);
								// that.getView().byId("control").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							}
							// else if (FieldName === "Func. Location") {
							// var funclok = oData.results[0].Header2ItemNavi.results[i].FieldValue;
							// var funlokk = itemTable.getItems()[0].getCells()[5].setValue(funclok);
							// // that.getView().byId("funcloc").setValue(funlokk._lastValue);
							// // alert(funlokk);
							// // that.getView().byId("control").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							// } else if (FieldName === "Equipment") {
							// var equipokk = oData.results[0].Header2ItemNavi.results[i].FieldValue;
							// itemTable.getItems()[0].getCells()[6].setValue(equipokk);
							// // that.getView().byId("control").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							// }

						}
						that.tableBind1();
					}

				});

				console.log("outside");
				// this.getView().byId("funcloc").setValue("Work Order")
				this.getView().byId("priority").setEnabled(true);
				this.getView().byId("Link").setEnabled(true);
				// this.tableBind1();
				this.enable();
				this.getView().byId("det").setVisible(true);
				this.getView().byId("det1").setVisible(true);
				// this.OperaDescr();
				this.OperationAdd();
				this.tabWorkcent();

				this.taskList();
				this.notiFication();
				this.plannerGrp();
				this.plannPlnt();
				this.workCenter();
				this.setUser();
				this.PerRespFrag();

				sap.ui.core.Fragment.byId("openvariant", "selectvarname").setValue();
				this.openvariant.close();
			},
			onInit: function () {
				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter.getTarget("Page1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

				this.maps = sap.ui.xmlfragment("com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.map", this);
				this.getView().addDependent(this.maps);

				this.funloc = sap.ui.xmlfragment("functionalfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.functional", this);
				this.getView().addDependent(this.funloc);

				this.equ = sap.ui.xmlfragment("equipmentfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.equipment", this);
				this.getView().addDependent(this.equ);

				this.purch = sap.ui.xmlfragment("Purchasefragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.Purchase", this);
				this.getView().addDependent(this.purch);

				this.compobtn = sap.ui.xmlfragment("Operationsfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.Operations",
					this);
				this.getView().addDependent(this.compobtn);

				this.doc = sap.ui.xmlfragment("documentfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.document", this);
				this.getView().addDependent(this.doc);

				this.more = sap.ui.xmlfragment("morefragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.more", this);
				this.getView().addDependent(this.more);
				this.operAttach = sap.ui.xmlfragment("operAttach", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.OperAttach", this);
				this.getView().addDependent(this.more);

				// newcom = sap.ui.xmlfragment("newcombb", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.view.Dialog1", this);
				// this.getView().addDependent(newcom);

				this.msg = sap.ui.xmlfragment("messagefragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.message", this);
				this.getView().addDependent(this.msg);

				this.msgDms = sap.ui.xmlfragment("dmsfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.Dms", this);
				this.getView().addDependent(this.msgDms);

				this.busyDialog = sap.ui.xmlfragment("busyDialogfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.busyDialog",
					this);
				this.getView().addDependent(this.busyDialog);

				this.fundet = sap.ui.xmlfragment("fundia", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.funlocdet", this);
				this.getView().addDependent(this.fundet);

				this.equdet = sap.ui.xmlfragment("equdia", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.equdet", this);
				this.getView().addDependent(this.equdet);

				this.cam = sap.ui.xmlfragment("camFra", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.camera", this);
				this.getView().addDependent(this.cam);

				this.opAttch = sap.ui.xmlfragment("OperAttachfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.OperAttach",
					this);
				this.getView().addDependent(this.opAttch);

				this.opLtext = sap.ui.xmlfragment("OperLTextfragment", "com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.OperLText", this);
				this.getView().addDependent(this.opLtext);

				this.savevariant = sap.ui.xmlfragment("savevariant",
					"com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.SaveVariant", this);
				this.getView().addDependent(this.savevariant);
				this.openvariant = sap.ui.xmlfragment("openvariant",
					"com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.OpenVariant", this);
				this.getView().addDependent(this.openvariant);

				// this.var_comb_bind();

				// this.openvariant = sap.ui.xmlfragment("openvariant",
				// 	"com.sap.build.ba293bd41-us_1.createWoV2gruntmap.fragments.OpenVariant", this);
				// this.getView().addDependent(this.openvariant);

				/*Function for Screen Validation*/
				this.v1 = this.getView().byId("order").getValue();
				//	alert(this.v1)
				this.v2 = this.getView().byId("priority").getValue();
				//	alert(this.v2);

				if (this.v1 == "") {

					this.getView().byId("priority").setEnabled(false);

				} else {

					this.getView().byId("priority").setEnabled(true);

				}
				// For Create Work Order through notifications
				var string = window.location.href;
				var checkURL = string.split('https://')
				if (checkURL[1].slice(0, 4) == "flpn") {

				} else {
					var paramString = string.split('?')[2];
					if (paramString == undefined) {

					} else {
						var string1 = paramString.split(':')[0];
						notifNo = string1.split('$')[0];
						orderType = string1.split('$')[1];
							this.getView().byId("Link").setEnabled(true);

						if (notifNo != null && notifNo != "" && notifNo != undefined) {
							this.getDetails();
						}
					}

				}

				/*For Realtime camera Function*/
				/*Code starts*/
				oView = this.getView();
				this.getView().setModel(new JSONModel({
					photos: []
				}));

				/*Code Ends*/

				/*	this.funLoca();
					this.equip();
					this.plannerGrp();
					this.plannPlnt();
					this.workCenter();*/
				// this.tableBind1();
				/*this.notiFication();
				this.taskList();
				this.setUser();
				this.tabWorkcent();
				this.perResp(); */ //avoid the binding issue will create the value in person responsible.

				/*Fragment Function call starts*/
				//	this.fragmat();
				/*	this.fragUom();
				this.fragItmcat();
				this.fragCurr();
				this.fragMatGrp();
				this.fragPurGrp();
				this.fragVend();
				this.fragAgree();
				this.fragItem();
				this.fragInfo();
				this.fragAcc();

				this.purDoc();
*/
				//this.reqqtyfrag();

				// this.plannPlnt();
				// this.perResp();
				this.fragItmcat();
				this.fragUom();

				var that = this;

				// if it a mobile device
				if (!sap.ui.Device.system.desktop) {
					// get the logon context passing a success and an error callbacks
					sap.logon.Core.getContext(
						//success call back
						function (result) {
							// call the function that will store the delivery address for future use
							that.subscribeForPushNotifications(result);
							console.log("Successfully got the app context");

						},
						//error call back
						function () {
							console.log("Failed to get the app context");

						}
					);
				}

			},

			getDetails: function () {
				var that = this;
				var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/");

				var list = this.getView().byId("List");

				var sObjectPath = "/ManageNotificationHeaderSet('" + notifNo + "')";

				oModel.read(sObjectPath, {
					success: function (oData, oResponse) {
						console.log(oData);
						//	that.getView().byId("order").setKey("PM01");
						var order_desc;
						if (orderType == "PM01") {
							order_desc = "PM01 Regular Maintenance";
						} else if (orderType == "PM02") {
							order_desc = "PM02 Corrective Maintenance";
						} else if (orderType == "PM03") {
							order_desc = "PM03 BreakDown Maintenance";
						} else if (orderType == "PM04") {
							order_desc = "PM04 ShutDown Maintenance";
						}

						that.getView().byId("order").setValue(order_desc);
						that.getView().byId("order").setSelectedKey(orderType);

						that.getView().byId("funcloc").setValue(oData.FunctLoc + "" + oData.FunLocDes);
						that.getView().byId("equip").setValue(oData.Equipment);

						if (oData.Priority == "1") {
							that.getView().byId("priority").setValue("Very High");
						} else if (oData.Priority == "2") {
							that.getView().byId("priority").setValue("High");
						} else if (oData.Priority == "3") {
							that.getView().byId("priority").setValue("Medium");
						} else if (oData.Priority == "4") {
							that.getView().byId("priority").setValue("Low");
						}
						that.ord();
						//	that.getView().byId("priority").setEnabled(true);
						that.getView().byId("inpfloc").setValue(oData.FunctLoc);
						that.getView().byId("inpequip").setValue(oData.Equipment);
						that.getView().byId("cmpnotif").setValue(oData.NotifNo);
						//	that.getView().byId("wkcent").setSelectedKey(oData.PmWkctr);
						//	that.workCenter();
						//	that.tabWorkcent();

						that.funLoca();
						that.equip();
						that.plannerGrp();
						that.plannPlnt();
						that.workCenter();

						that.notiFication();
						that.taskList();
						that.setUser();
						that.tabWorkcent();
						that.perResp();

						that.order = that.getView().byId("order").getSelectedKey();
						that.tableBind1()
						that.setOtherDetails(oData.FunctLoc);

						var deStartDate = oData.Desstdate;
						if (deStartDate === "") {
							that.getView().byId("datstart").setValue("");
						} else {
							var year = deStartDate.slice(0, 4);
							var month = deStartDate.slice(4, 6);
							var dat = deStartDate.slice(6, 8);
							var Desstdate = dat + '.' + month + '.' + year;
							that.getView().byId("datstart").setValue(Desstdate);
						}

						var deStartDate1 = oData.Desenddate;
						if (deStartDate1 === "") {
							that.getView().byId("datend").setValue("");
						} else {
							var year1 = deStartDate1.slice(0, 4);
							var month1 = deStartDate1.slice(4, 6);
							var dat1 = deStartDate1.slice(6, 8);
							var Desendate = dat1 + '.' + month1 + '.' + year1;
							that.getView().byId("datend").setValue(Desendate);
						}

					},

					error: function (oData, oResponse) {

					}
				});
			},
			setOtherDetails: function (FunctLoc) {
				// var selectedFuncLoc = "0006-MOBO East Location 01";
				// var that=this;
				// var SplitTotalFoot = selectedFuncLoc.split(" ");
				this.func = FunctLoc;
                var that=this;
				//	this.getView().byId("funcloc").setValue(func);

				var sPath = "/FunctionalDataPullSet('" + this.func + "')";
				var oModel1 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel1.read(sPath, {
					success: function (oData, oResponse) {

						////// Set Value for combo box for planner group, planning Plant, Main work center

						var x1 = oData.PlannerGroup + " " + oData.PlnGrpDesc;
						//	alert(v2);
						that.getView().byId("cmpplangrp").setValue(x1);

						var x2 = oData.PlanningPlant + " " + oData.PlnPlantDesc;
						//	alert(v1);
						that.getView().byId("cmpplanplt").setValue(x2);

						var x3 = oData.MainWorkCenter + " " + oData.MainWorkCenterDes;
						//	alert(v3);
						that.getView().byId("cmpwork").setValue(x3);

						var y1 = oData.MainWorkCenter;

						that.getView().byId("wkcent").setSelectedKey(y1); /////for Operations Tab Dynamic

						that.PerRespFrag();

					}

				});

			},

			enable: function () {
				this.getView().byId("inpfloc").setEnabled(true);
				this.getView().byId("enabmap").setEnabled(true);

				this.getView().byId("inpequip").setEnabled(true);
				this.getView().byId("enabsca").setEnabled(true);

				this.getView().byId("inpdescr").setEnabled(true);
				this.getView().byId("textlong").setEnabled(true);

				this.getView().byId("datstart").setEnabled(true);
				this.getView().byId("datend").setEnabled(true);
				this.getView().byId("cmptask").setEnabled(true);
				this.getView().byId("cmpnotif").setEnabled(true);
				this.getView().byId("enabnoti").setEnabled(true);

				this.getView().byId("cmpplangrp").setEnabled(true);
				this.getView().byId("cmpplanplt").setEnabled(true);
				this.getView().byId("cmpwork").setEnabled(true);
				this.getView().byId("cmpuser").setEnabled(true);
				this.getView().byId("addfunctions").setEnabled(true);
				this.getView().byId("cmpperson").setEnabled(true);
				this.getView().byId("ci_fileUploader1").setEnabled(true);
				//	this.getView().byId("UploadCollection").setVisible(true);
				this.getView().byId("btnCamera").setVisible(false);

				this.getView().byId("arow").setEnabled(true);
				this.getView().byId("TypeHere").setEnabled(true);
				this.getView().byId("creatrec").setEnabled(true);
				this.getView().byId("onsave").setEnabled(true);
				this.getView().byId("onopen").setEnabled(true);
			},

			/*For the Live Change Function*/
			globalqty: function (oEvent) {

				var ls = oEvent.getSource().getValue();
				// alert(ls);

				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				this.indexreq = valueind[2];

				var tablew = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				var count1 = tablew.getItems().length;

				/////////////////////////////////////////// for the movement of Req Qty Value from the Fragment to Fragment by Index
				for (var j = 0; j < count1; j++) {

					var opsz = tablew.getItems()[this.indexj].getCells()[7].setValue(ls);

				}

			},

			code1: function () {

				this.funloc.open();

				this.handleValueHelp();

				// 	this.combo = this.getOwnerComponent().getModel();
				// this.combo.metadataLoaded().then(this.Combobox(this));

				this.getView().byId("inpequip").setValue("");

			},

			onOK: function () {

				var fun = sap.ui.core.Fragment.byId("functionalfragment", "combo1").getSelectedKey();

				this.getView().byId("inpfloc").setValue(fun);

				var table = this.getView().byId("tab1");

				this.funloc.close();

				this.funLoc1 = fun;

				this.tableBind1();

			},

			onCancel: function () {

				this.funloc.close();

			},

			/*Comments For the Functional Location Binding*/

			funLoca: function () {

				var oCont = this;

				//var workloc = oCont.getView().byId("combo1");

				var funloc = sap.ui.core.Fragment.byId("functionalfragment", "combo1");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/MasterF4HelpSet', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						var FunctionalLocation = oData.results[0].FunctionalLocation;
						var Text = oData.results[0].Text;

						console.log("FunctionalLocation:" + FunctionalLocation)
						console.log("Description:" + Text)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.FunctionalLocation) == -1) {
								dups.push(el.FunctionalLocation);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{FunctionalLocation}",
							text: "{FunctionalLocation} {Text}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(5300);
						funloc.setModel(oModel);
						funloc.bindItems("/arr11", oItems);

					}

				});

			},

			code2: function () {

				this.handleValueHelp1();

				this.equ.open();

			},

			/*Function For the Equipment Fragment*/
			equip: function () {

				var oCont = this;

				var equip = sap.ui.core.Fragment.byId("equipmentfragment", "combo2");

				//var sPath = "/MaterialF4Set?$filter= Plant eq '" + this.planplt + "'";
				var sPath = "/EquipmentF4Set?$filter= FunctionalLocation eq '" + this.fun + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						// var plntcnt = oData.results.length;
						// //alert(plntcnt);
						// console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = sap.ui.core.Fragment.byId("equipmentfragment", "combo2");
						//	alert(mat);
						mat.setModel(c4model);
						var comboven = this.getView().byId("inpfloc");
						//alert(comboven);

						var oItems = new sap.ui.core.ListItem({
							key: "{EquipmentNo}",
							text: "{Text}" //- {Description}
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});

			},

			/*Function For Create Notification*/
			createnotif: function () {

				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you want to Create Notification?", {
						//					         icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Warning Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {
								//alert("clicked");
								sap.m.URLHelper.redirect(
									"https://requestmaintenancemp-s0019393832trial.dispatcher.hanatrial.ondemand.com/webapp/test/testFLPServiceMockServer.html?hc_reset#BUILD-prototype"
								);

							} else(oAction == "NO");

							{
								//	alert("no actions")
							}
						}
					});

			},

			plannerGrp: function () {

				var oCont = this;

				var plant = oCont.getView().byId("cmpplangrp");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/PlannerGroupF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var PlannerGroup = oData.results[0].PlannerGroup;
						console.log("PlannerGroup:" + PlannerGroup)
						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.PlannerGroup) == -1) {
								dups.push(el.PlannerGroup);
								return true;
							}
							return false;
						});
						var arr6 = {
							"arr6": arr
						};
						//debugger;
						console.log("arr6:" + arr6);
						var oItems = new sap.ui.core.ListItem({
							key: "{PlannerGroup}",
							text: "{PlannerGroup} {NamePlannerGroup}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr6);
						plant.setModel(oModel);
						plant.bindItems("/arr6", oItems);
					}
				});

			},

			/*Function For the Planning Plant*/
			plannPlnt: function () {

				var oCont = this;

				var plant = oCont.getView().byId("cmpplanplt");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/PlannerGroupF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var PlanningPlant = oData.results[0].PlanningPlant;
						console.log("PlanningPlant:" + PlanningPlant)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.PlanningPlant) == -1) {
								dups.push(el.PlanningPlant);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{PlanningPlant}",
							text: "{PlanningPlant} {NamePlanningPlant}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						plant.setModel(oModel);
						plant.bindItems("/arr7", oItems);
					}
				});

			},
			/*F4 For the MAin Work Center*/
			workCenter: function () {

				var oCont = this;

				var workloc = oCont.getView().byId("cmpwork");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/WorkCenterF4Set', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						// debugger;
						var FunctionalLocation = oData.results[0].FunctionalLocation;
						var Text = oData.results[0].Text;

						console.log("FunctionalLocation:" + FunctionalLocation)
						console.log("Description:" + Text)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.FunctionalLocation) == -1) {
								dups.push(el.FunctionalLocation);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{Text}",
							text: "{Text} {WrkCtrDes}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(5300);
						workloc.setModel(oModel);
						workloc.bindItems("/arr11", oItems);

					}

				});

			},

			tabWorkcent: function () {

				var that = this;
				var workCenter = that.getView().byId("wkcent");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/WorkCenterF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						//debugger;
						var PersonListModel = new JSONModel(oData);
						that.getView().byId("wkcent").setModel(PersonListModel, "PersonListModel");

					}

				});

			},

			c3: function () {
				//alert("C3");
				this.cen = this.getView().byId("cmpwork").getSelectedKey(); //// For the table Bind of Operation
				//alert(this.cen)
				var cen1 = this.getView().byId("wkcent").setSelectedKey(this.cen); /////To be Binded in the Operation Tab

				// var pink1 = this.getView().byId("combo5").getselectedItemId();
				// alert(pink1)
				// var pink = this.getView().byId("wkcent").setValue(v3);

				//this.addrow();///// For Operation Tab Work center
				this.center = this.getView().byId("cmpwork").getSelectedKey();
				//alert(this.center);
				//	alert(cen);

				this.perResp();

			},

			c1: function () {

				this.plangrp = this.getView().byId("cmpplangrp").getSelectedKey(); //// to post Planner Group
				//alert(this.plangrp);

			},

			/*Selection Change for the Material F4 Based on the Plant*/
			c2: function () {
				// alert("C2");
				var plnPlant = this.getView().byId("cmpplanplt").getValue(); //// to post Planning plant
				var SplitTotalFoot = plnPlant.split("/");
				this.planplt = SplitTotalFoot[0];
				//alert(this.planplt);
				// debugger;

				var sPath = "/MaterialF4Set?$filter= Plant eq '" + this.planplt + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						//	console.log("Pressed", oData);

						var plntcnt = oData.results.length;
						//alert(plntcnt);
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");
						//	alert(mat);
						mat.setModel(c4model);
						var comboven = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

						var oItems = new sap.ui.core.ListItem({
							key: "{Material}",
							text: "{Material}" //- {Description}
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});

				if (plnPlant !== "") {
					//alert("filter")
					this.store3();
					this.store4();
				}

				// this.store1();
				// this.store2();
				//	this.store3();
				//	this.store4();

				// this.perResp();  /*Function call removed inorder to avoid the binding the error*/

			},

			store1: function () {
				//	alert("triger")
				var plnPlant1 = this.getView().byId("cmpplanplt").getValue(); //// to post Planning plant
				var SplitTotalFoot1 = plnPlant1.split(" ");
				this.planplt1 = SplitTotalFoot1[0];

				//	debugger;
				var that = this
				var sPath = "/PlannerGroupF4Set?$filter= PlanningPlant eq '" + this.planplt1 + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {
							console.log(oData);
							var start1 = oData.results[0].PlannerGroup + " " + oData.results[0].NamePlannerGroup;
							// alert(start1);
							// console.log("start1", start1);
							that.getView().byId("cmpplangrp").setValue(start1);

						} // success end

				}); // spath close for PlannerGroup

			},

			store2: function () {

				/*second*/
				var that = this;
				var sPath = "/WorkCenterF4Set?$filter= Key eq '" + that.planplt1 + "'";
				var oModel1 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel1.read(sPath, {
					success: function (oData, oResponse) {
							that.Wkcetp = oData.results[0].Text;

							// 	console.log(oData);
							var start2 = oData.results[0].Text + " " + oData.results[0].WrkCtrDes;
							var WKcet = start2;
							var wrctr = WKcet.split(" ");
							that.WKCET = wrctr[0];

							//alert(start2);
							console.log("start2", start2);
							that.getView().byId("cmpwork").setValue(start2);

							var star2 = oData.results[0].Text;

							that.getView().byId("wkcent").setSelectedKey(star2);

						} // success end

				}); // spath close for work center

			},

			perResp: function () {

				//debugger;
				//var center = this.getView().byId("cmpwork").getSelectedKey();
				var center = this.getView().byId("cmpwork").getValue();

				var SplitTotalFoot2 = center.split(" ");
				center = SplitTotalFoot2[0];
				//	alert(center);
				// var planing = this.getView().byId("cmpplanplt").getSelectedKey();
				var planing = this.getView().byId("cmpplanplt").getValue();
				var SplitTotalFoot4 = planing.split(" ");
				planing = SplitTotalFoot4[0];
				//	alert(planing);

				var that = this;
				var sPath = "/PersonResponsibleF4Set?$filter= Arbpl eq '" + center + "' and Werks eq '" + planing + "'";

				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						//alert(plntcnt);
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var presp = that.getView().byId("cmpperson");
						//alert(presp);
						presp.setModel(c4model);
						var comboven = that.getView().byId("cmpperson");

						var oItems = new sap.ui.core.ListItem({
							key: "{Pernr}",
							text: "{Pernr} {Short}" //- {Description}
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});
				//	debugger;

			},

			store3: function () {

				/*third*/
				var that = this;
				var sPath = "/MasterF4HelpSet?$filter= Plant eq '" + this.planplt1 + "'";
				var oModel1 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel1.read(sPath, {
					success: function (oData, oResponse) {
							// alert("store3")
							// 	console.log(oData);

							var countfun = oData.results.length;
							console.log("countfun", countfun);

							for (var j = 0; j < countfun; j++) {

								var start3 = oData.results[j].FunctionalLocation + " " + oData.results[j].Text;
								//alert(start3);
								console.log("start3", start3);

								var fragfun = sap.ui.core.Fragment.byId("functionalfragment", "functech").getValue();

							}

						} // success end

				}); // spath close for functional location 

			},

			store4: function () {

				/*forth*/
				var that = this;
				var sPath = "/EquipmentSet?$filter= Plant eq '" + this.planplt1 + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_F4_SRV/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						// alert("store4")
						// 	console.log(oData);

						var countfun = oData.results.length;
						console.log("countfun", countfun);

						for (var k = 0; k < countfun; k++) {

							var start4 = oData.results[k].EquipmentNumber + " " + oData.results[k].EquipmentDes;
							//alert(start4);
							console.log("start4", start4);
							that.getView().byId("inpequip").getValue();

							var star3 = oData.results[k].EquipmentNumber;

							that.getView().byId("equip").setValue(star3);

						} // success end

					}
				}); // spath close for equipment

			},

			frag2mat: function (oEvent) {

				//	sap.ui.core.Fragment.byId("Operationfragment","materialbutton").setVisible(false);	 /////For Material Button	

				//alert("pressed")
				var cc_oTable = oEvent.getSource().getParent().getParent();
				//debugger;
				var oSrc = oEvent.getSource();
				var aItems = oSrc.getSelectedKey();
				//alert(aItems);
				//console.log(oEvent);
				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				var indexi = valueind[2];

				console.log(indexi);
				//var arrayId12 = indexi.split("/");
				//	componentVal = sap.ui.core.Fragment.byId("Operationsfragment","matcombo").getSelectedKey();

				http: //www.sapyard.com/sapui5-tutorial-part-viii-deploy-my-first-sapui5-app-in-webide///componentVal = sap.ui.core.Fragment.byId("Operationsfragment","matcombo").getSelectedKey();

					var oCont = this;
				var plant = oCont.getView().byId("cmpplanplt").getValue();

				var SplitTotalFoot = plant.split(" ");
				this.plantFet = SplitTotalFoot[0];

				var oModel123 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);

				//	var mat = sap.ui.core.Fragment.byId("Operationsfragment","matcombo");
				var sPath = "/ComponentListSet(Component='" + aItems + "',Plant='" + this.plantFet + "')";
				//debugger;
				oModel123.read(sPath, {
					//filters: [new sap.ui.model.Filter("PASSPORTID", sap.ui.model.FilterOperator.EQ, aItems)],
					success: function (oData, oResp) {
						console.log(oData);
						cc_oTable.getItems()[indexi].getCells()[3].setValue(oData.Description);
						// cc_oTable.getItems()[indexi].getCells()[1].setValue(oData.OpActivity);

						cc_oTable.getItems()[indexi].getCells()[4].setValue(oData.UOM);
						cc_oTable.getItems()[indexi].getCells()[5].setValue(oData.StorageLoc);
						// cc_oTable.getItems()[indexi].getCells()[7].setValue(oData.ReqQty);
						cc_oTable.getItems()[indexi].getCells()[8].setValue(oData.AvailQty);

					},
				});

			},

			descrChange: function (oEvent) {

				//alert("pressed");

				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				this.indexk = valueind[2];

				var tabley = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				var count = tabley.getItems().length;

				//this.ops12 = tabley.getItems()[this.indexk].getCells()[10].setVisible(true); /////for Material button to be Visible

			},

			ItemcateChange: function () {

				var tabley = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				var countwww = tabley.getItems().length;

				this.itemcat = tabley.getItems()[this.indexk].getCells()[6].getSelectedKey();
				//alert("this.itemcat", this.itemcat);
				//console.log("this.itemcat", this.itemcat);

				if (this.itemcat === "N") {

					//alert("If");

					this.ops188 = tabley.getItems()[this.indexk].getCells()[10].setVisible(true);

				} else {

					//alert("else");

					this.ops188 = tabley.getItems()[this.indexk].getCells()[10].setVisible(false);
					sap.ui.core.Fragment.byId("Operationsfragment", "purdata").setVisible(false);

				}
			},

			/*Selection Change for the Order Type*/
			ord: function () {

				this.v1 = this.getView().byId("order").getValue();
				//	alert(this.v1)
				this.v2 = this.getView().byId("priority").getValue();
				//	alert(this.v2);

				if (this.v1 == "") {

					this.getView().byId("priority").setEnabled(false);

				} else {

					this.getView().byId("priority").setEnabled(true);

				}

				if (this.v1 && this.v2) {

					this.getView().byId("inpfloc").setEnabled(true);
					this.getView().byId("enabmap").setEnabled(true);

					this.getView().byId("inpequip").setEnabled(true);
					this.getView().byId("enabsca").setEnabled(true);

					this.getView().byId("inpdescr").setEnabled(true);
					this.getView().byId("textlong").setEnabled(true);

					this.getView().byId("datstart").setEnabled(true);
					this.getView().byId("datend").setEnabled(true);
					this.getView().byId("cmptask").setEnabled(true);
					this.getView().byId("cmpnotif").setEnabled(true);
					this.getView().byId("enabnoti").setEnabled(true);

					this.getView().byId("cmpplangrp").setEnabled(true);
					this.getView().byId("cmpplanplt").setEnabled(true);
					this.getView().byId("cmpwork").setEnabled(true);
					this.getView().byId("cmpuser").setEnabled(true);
					this.getView().byId("addfunctions").setEnabled(true);
					this.getView().byId("cmpperson").setEnabled(true);
					this.getView().byId("ci_fileUploader1").setEnabled(true);
					//	this.getView().byId("UploadCollection").setVisible(true);
					this.getView().byId("btnCamera").setVisible(false);

					this.getView().byId("arow").setEnabled(true);
					this.getView().byId("TypeHere").setEnabled(true);
					this.getView().byId("creatrec").setEnabled(true);
					this.getView().byId("onsave").setEnabled(true);
					this.getView().byId("onopen").setEnabled(true);

				} else {

				}

				this.order = this.getView().byId("order").getFirstItem().mProperties.key;
				// alert(this.order);

				var stock = "PM01";
				this.ctrlkey = this.getView().byId("control").getValue();

				var ord2 = this.getView().byId("control").setValue(this.order);

				//	var ord2 = this.getView().byId("control").setValue(this.order); /////To be Binded in the Operation Tab 
				//	alert(this.order);

			},

			/*Fuction for the F4 for the Independent Task List*/
			taskList: function () {

				var oCont = this;

				var workloc = oCont.getView().byId("cmptask");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/TaskListSet', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						// debugger;
						var TaskType = oData.results[0].TaskType;
						var TaskText = oData.results[0].TaskText;

						console.log("TaskType:" + TaskType)
						console.log("TaskText:" + TaskText)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.TaskType) == -1) {
								dups.push(el.TaskType);
								return true;
							} else if (dups.indexOf(el.TaskText) == -1) {
								dups.push(el.TaskText);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{TaskType}",
							text: "{TaskType} {TaskText}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(5300);
						workloc.setModel(oModel);
						workloc.bindItems("/arr11", oItems);

					}

				});

			},
			/*Function for the Notification F4*/
			notiFication: function () {

				var oCont = this;

				var workloc = oCont.getView().byId("cmpnotif");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_F4_SRV/', true);
				oModel.read('/NotificationListSet', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						// debugger;
						var Notification = oData.results[0].Notification;
						var NotificationDes = oData.results[0].NotificationDes;

						console.log("Notification:" + Notification)
						console.log("NotificationDes:" + NotificationDes)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Notification) == -1) {
								dups.push(el.Notification);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{Notification}",
							text: "{Notification} {NotificationDes}"
						});

						oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(3800);
						workloc.setModel(oModel);
						workloc.bindItems("/arr11", oItems);

					}

				});

			},

			/*Function for the Table Bind Based on the Functional Location*/
			tableBind1: function () {

				this.funlocat = this.getView().byId("inpfloc").getValue();
				console.log(this.funlocat);
				var SplitTotalFoot3 = this.funlocat.split(" ");
				this.funloca = SplitTotalFoot3[0];

				var table1 = this.getView().byId("tab1");

				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
				var oModelJson = new sap.ui.model.json.JSONModel();
				console.log("Function oModel:", this.funloca);
				//alert(this.funloca);
				var sPath = "/ObjectHistorySet";
				//debugger;
				var oFilter = [new sap.ui.model.Filter("FunctLoc", sap.ui.model.FilterOperator.EQ, this.funloca)]; //this.funLoc1
				oModel.read(sPath, {
					filters: oFilter, //"K1-B01-1")],
					success: function (oData, oResponse) {

						console.log("Function oModel:", oData);

						oModelJson.setData(oData);
						var oTemplate = new sap.m.ColumnListItem({

							cells: [
								new sap.m.ObjectIdentifier({
									title: "{NotifNo}"

								}),

								new sap.m.Text({
									text: "{Orderid}"
								}),
								new sap.m.Text({
									text: "{path:'NotifDate', type:'sap.ui.model.type.Date',formatOptions: {pattern: 'dd.MM.yyyy'}}"
								}),

								new sap.m.Text({
									text: "{FunctLoc}"
								}),

								new sap.m.Text({
									text: "{Equipment}"
								}),

								new sap.m.Text({
									text: "{path:'Strmlfndate', type:'sap.ui.model.type.Date',formatOptions: {pattern: 'dd.MM.yyyy'}}"
								}),

								// new sap.m.Text({
								// 	text: "{Strmlfndate}"
								// }),

								new sap.m.Text({
									text: "{path:'Endmlfndate', type:'sap.ui.model.type.Date',formatOptions: {pattern: 'dd.MM.yyyy'}}"
								}),

								// new sap.m.Text({
								// 	text: "{Endmlfndate}"
								// }),

								new sap.m.Text({
									text: "{SysStatus}"
								})

							]
						});
						table1.setModel(oModelJson);
						table1.bindItems("/results", oTemplate);

					}

				});

			},

			TableBindEquip: function () {

				var oController = this;
				oController.getView().getModel("oGlobalModel").setProperty("/delay", true);
				var equip = oController.getView().byId("inpequip").getValue();
				//alert(equip);
				var SplitTotal = equip.split(" ");
				var equiptab = SplitTotal[0];
				var table = oController.getView().byId("tab1");
				var oModel = new ODataModel("/sap/opu/odata/sap/zpm_f4_srv/", true);
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/NotificationListSet";
				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("EquipmentNumber", sap.ui.model.FilterOperator.EQ, equiptab),
						new sap.ui.model.Filter("Last5Records", sap.ui.model.FilterOperator.EQ, 'X')
					], //"K1-B01-1")],
					success: function (oData, oResponse) {
						oController.getView().getModel("oGlobalModel").setProperty("/delay", false);
						oModelJson.setData(oData);
						var oTemplate = new sap.m.ColumnListItem({

							cells: [
								new sap.m.ObjectIdentifier({
									title: "{Notification}"

								}),

								new sap.m.Text({
									// text: "{ path: 'createdDate', type: 'sap.ui.model.odata.type.Date', formatOptions: { style: 'medium', pattern: 'dd.MM.yyyy'  } }"
									text: "{Order}"
								}),

								new sap.m.Text({
									text: "{path: 'createdDate', type: 'sap.ui.model.odata.type.Date', formatOptions: { style: 'medium', pattern: 'dd.MM.yyyy'  }}"
								}),
								new sap.m.Text({
									text: "{FunctionalLocation}"
								}),
								new sap.m.Text({
									text: "{EquipmentNumber}"
								}),
								new sap.m.Text({
									text: "{path: 'MalStartDate', type: 'sap.ui.model.odata.type.Date', formatOptions: { style: 'medium', pattern: 'dd.MM.yyyy'  }}"
								}),
								new sap.m.Text({
									text: "{path: 'MalEndDate', type: 'sap.ui.model.odata.type.Date', formatOptions: { style: 'medium', pattern: 'dd.MM.yyyy'  }}"
								})

							]
						});
						table.setModel(oModelJson);
						table.bindItems("/results", oTemplate);

					}

				});

			},

			addopt: function () {
				this.openfrG();

				sap.ui.core.Fragment.byId("Operationsfragment", "adopen").setVisible(false);
				sap.ui.core.Fragment.byId("Operationsfragment", "addrowbtn").setVisible(true);

			},
			workSelChange: function (oEvent) {

				var moreplnPlant = this.getView().byId("cmpplanplt").getValue(); //// to post Planning plant
				var SplitTotalFoot = moreplnPlant.split(" ");
				this.morplanplt = SplitTotalFoot[0];

				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				this.indexk = valueind[2];

				var tabley = this.getView().byId("tablez");
				var count = tabley.getItems().length;

				this.morework = tabley.getItems()[this.indexk].getCells()[2].getValue();

				var that = this;
				var sPath = "/PersonResponsibleSet?$filter= Plant eq '" + that.morplanplt + "' and WorkCenter eq '" + that.morework + "'";

				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						// alert("success");

						var PersonListModel2 = new JSONModel(oData);
						that.getView().getModel("oGlobalModel").setProperty("/PersonListModel2", oData.results);

					}
				});
			},

			openfrG: function (oEvent) { /////////////// for component button in operation tab

				this.itemInc = this.itemInc + 10;
				//	this.itemope = this.ops1;

				var HotelBooking = {

					Empty1: this.itemInc,
					Empty2: this.ops2,
					pass12: "",
					Empty4: "",
					Empty5: "",
					Empty6: "",
					Empty7: "",
					Empty8: "",
					Empty9: ""

				};

				//debugger;

				this.array1.push(HotelBooking);
				console.log(this.array1)

				var HotelBooking = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");

				this.seamoModelccd4 = new sap.ui.model.json.JSONModel(); // created a JSON model   
				this.seamoModelccd4.setData({ // Set the data to the model using the JSON object defined already  
					seamtrans: this.array1

				});
				console.log(this.seamoModelccd4)
				HotelBooking.setModel(this.seamoModelccd4);
				this.seamoModelccd4.refresh();

			},

			compo_btn: function (oEvent) {

				// var table2 = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				// var count1 = table2.getItems().length;

				// for (var i = 0; i < count1; i++) {

				// 	var ops1 = table2.getItems()[i].getCells()[1].getValue();
				// }

				// alert(ops1);

				// alert(mat);
				var value = oEvent.getSource().getParent().getBindingContext().getPath();

				var valueind = value.split("/");
				this.indexk = valueind[2];

				//	debugger;

				var tabley = this.getView().byId("tablez");
				var count = tabley.getItems().length;

				//for (var i = 0; i < count; i++) {
				this.ops2 = tabley.getItems()[this.indexk].getCells()[0].getValue();
				//alert(this.ops2);
				console.log("this.ops2", this.ops2)
					///////////////////////////////////////////////////////////////////

				var empOper = [];

				var that = this;

				if (this.tabmodel) {

					this.compobtn.open();

					that.c2();

				} else {

					that.array1 = [];

					that.itemInc = 0;

					//	this.openfrG();

					this.compobtn.open();

					that.c2();
				}

				/*To Select Index in the Operation Tab*/

				var value = oEvent.getSource().getParent().getBindingContext().getPath();

				var valueind = value.split("/");
				this.indexj = valueind[2];

				//debugger;

				var tabley = this.getView().byId("tablez");
				var count = tabley.getItems().length;

				//for (var i = 0; i < count; i++) {
				this.ops1 = tabley.getItems()[this.indexj].getCells()[0].getValue();
				//alert(this.ops1);
				console.log("this.ops1", this.ops1)

				this.objy = {

					"Opeartion": this.ops1

				};

				console.log("this.objy", this.objy);
				empOper.push(this.objy);

				//	}//For Loop Closed

				console.log("empOper", empOper);

				var seamoModelccd80 = new sap.ui.model.json.JSONModel(); // created a JSON model   
				seamoModelccd80.setData({ // Set the data to the model using the JSON object defined already  

					empOper: this.ops1

				});

				console.log("this.objy", this.objy);
				console.log("seamoModelccd80", seamoModelccd80);
				/**/

			},

			deleteFragTAb: function (oArgs) {

				// var index = oArgs.getSource().getBindingContext().sPath.split("/")[2];
				// var itemTable = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				// var len = itemTable.getItems().length;
				// for (var i = index; i <= len - index; i++) {
				// 	var a = +i + 1;
				// 	if (a < len){
				// 		var itemnum = itemTable.getItems()[a].getCells()[0].getValue();
				// 	var itemlast = itemnum - +10;
				// 	var itemnum = itemTable.getItems()[a].getCells()[0].setValue(itemlast);
				// 	this.array1.splice(i, 1); //removing 1 record from i th index.
				// 	this.seamtrans.refresh();
				// 	}else{

				// 	}
				// }

				// this.value1 = oArgs.getSource().getBindingContext().getObject();
				// var itemTable = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				// var rowlen = itemTable.getItems().length;
				// var value = oArgs.getSource().getParent().getBindingContext().getPath();
				// var valueind = value.split("/");
				// this.index = valueind[2];
				// this.index = Number(this.index);
				// var ind = +this.index + +1;
				// for (var i = 0; i < this.array1.length; i++) {
				// 	if (this.array1[i] == this.value1) {
				// 		this.delItem = itemTable.getItems()[this.index].getCells()[0].getValue();
				// 		this.array1.splice(i, 1); //removing 1 record from i th index.
				// 		this.seamoModelccd4.refresh();
				// 		break; //quit the loop
				// 	}
				// };
				// if (rowlen <= ind) {
				// 	var row1 = +rowlen - +1;
				// 	var itemnum = itemTable.getItems()[row1].getCells()[0].getValue();
				// 	var itemlast = itemnum - +10;
				// 	var itemNo = "" + itemlast + "";
				// 	itemNo = itemNo.padStart(2, '0');
				// 	var itemnum = itemTable.getItems()[row1].getCells()[0].setValue(itemNo);
				// } else {
				// 	for (var i = this.index; i <= rowlen - +this.index; i++) {
				// 		var itemnum = itemTable.getItems()[i].getCells()[0].getValue();
				// 		var itemlast = itemnum - +10;
				// 		var itemNo = "" + itemlast + "";
				// 		itemNo = itemNo.padStart(2, '0');
				// 		var itemnum = itemTable.getItems()[i].getCells()[0].setValue(itemlast);
				// 		this.array1.splice(i, 1);
				// 		//this.seamtrans.refresh();

				// 	}
				// }

				// removing 1 record from i th index.
				// 	this.seamoModelccd4.refresh();

				this.value1 = oArgs.getSource().getBindingContext().getObject();

				for (var i = 0; i < this.array1.length; i++) {

					if (this.array1[i] == this.value1) {

						this.array1.splice(i, 1); //removing 1 record from i th index.

						this.seamoModelccd4.refresh();

						break; //quit the loop

						//this.deleteTab();
					}
				}

			},

			/*Ok Function For the Operation Fragment */
			OK: function () {

				this.opsTable = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				this.tabmodel = this.opsTable.getModel();
				console.log(this.tabmodel);

				////////////////////////////////////Table binding for more table for MAterial Required Table	
				var array1 = [];
				var array2 = [];
				var array3 = [];
				var array4 = [];
				var array5 = [];

				var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();

				var lengthconfirmcart = rowItems.length;

				//	alert(lengthconfirmcart);

				for (var i = 0; i < rowItems.length; i++) {

					var item = rowItems[i];
					var Cells = item.getCells();

					this.Material = Cells[2].getValue();
					//	alert(this.Material);
					this.Description = Cells[3].getValue();
					this.UoM = Cells[4].getValue();
					this.Storage = Cells[5].getValue();
					this.ReqQty = Cells[7].getValue();

					var obj = {
						mat: this.Material,
						dec: this.Description,
						uom: this.UoM,
						Storage: this.Storage,
						ReqQty: this.ReqQty
					};

					array1.push(obj);

				}
				var oModelssd = new sap.ui.model.json.JSONModel();
				oModelssd.setData({

					moretab: array1

				});
				this.HotelBooking2.setModel(oModelssd);

				this.compobtn.close();

			},

			Cancel: function () {

				this.compobtn.close();

			},

			purch_data: function () {

				this.purch.open();

			},

			okpress: function () {

				this.purch.close();

			},

			cancelpress: function () {

				this.purch.close();

			},

			/*Posting For the Create Work Order */
			post: function () {

				this.order1 = this.getView().byId("order").getValue();
				var ortertype1 = this.order1.split(" ");
				this.order = ortertype1[0];
				// alert(this.order);
				var photos = this.getView().getModel().getProperty("/photos");
				var operationAttach = this.getView().getModel("oGlobalModel").getProperty("/ci_att2");
				if (photos === "undefined" && operationAttach === '0') {} else {
					var children = photos.concat(operationAttach);
				}

				this.ement = this.getView().byId("inpequip").getValue();
				var SplitTotalFoot2 = this.ement.split(" ");
				this.ement = SplitTotalFoot2[0];
				//console.log("inpequip", this.ement);
				this.funloca = this.getView().byId("inpfloc").getValue();
				var SplitTotalFoot3 = this.funloca.split(" ");
				this.funloca = SplitTotalFoot3[0];

				//	console.log("inpequip", this.funloca);
				this.short = this.getView().byId("inpdescr").getValue();
				//	console.log("this.short",this.short);
				this.longtext = this.getView().byId("textlong").getValue();
				//console.log("this.longtext",this.longtext);

				this.table = sap.ui.core.Fragment.byId("messagefragment", "Msgtab");

				var arr = [];
				var arr2 = [];

				var prior = this.getView().byId("priority").getSelectedKey();
				var workCenter = this.getView().byId("cmpwork").getValue();
				var SplitTotalFoot6 = workCenter.split(" ");
				workCenter = SplitTotalFoot6[0];

				var planGrp = this.getView().byId("cmpplangrp").getValue();
				var SplitTotalFoot = planGrp.split(" ");
				var planGroup = SplitTotalFoot[0];

				var planPla = this.getView().byId("cmpplanplt").getValue();
				var SplitTotalFoot9 = planPla.split(" ");
				var planPlant = SplitTotalFoot9[0];

				var perresp = this.getView().byId("cmpperson").getValue();
				var SplitTotalFoot10 = perresp.split(" ");
				var respper = SplitTotalFoot10[0];
				//alert(respper);
				var table1 = this.getView().byId("tablez");
				var count = table1.getItems().length;

				var moretable = sap.ui.core.Fragment.byId("morefragment", "tab4"); ///For Assign Personal
				var countmore = moretable.getItems().length;

				/*	for (var i = 0; i < countmore; i++){
							
								var assignper = moretable.getItems()[i].getCells()[0].getSelectedKey();
						
						}*/

				//	var camList = this.getView().byId("Cam_list").getItems().length;

				var array = [];

				for (var i = 0; i < count; i++) {
					var ops = table1.getItems()[i].getCells()[0].getValue();
					var desc = table1.getItems()[i].getCells()[1].getValue();
					var durn = table1.getItems()[i].getCells()[4].getValue();

				}

				for (var i = 0; i < countmore; i++) {

					var ResPerson = moretable.getItems()[i].getCells()[0].getSelectedKey();

				}

				if (this.short === undefined || this.short === null || this.short === "") {
					console.log("planPla", planPla);
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert("Enter Description", {
						title: "Error",
						onClose: null,
						icon: sap.m.MessageBox.Icon.INFORMATION
					});
				} else if (planPla === undefined || planPla === null || planPla === "") {
					console.log("this.funloca", this.funloca);
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert(" Select Planning Plant", {
						title: "Error",
						icon: sap.m.MessageBox.Icon.INFORMATION,
						onClose: null
					});
				} else if (workCenter === undefined || workCenter === null || workCenter === "") {
					console.log("this.ement", this.ement);
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert("Select Main Work center", {
						title: "Error",
						icon: sap.m.MessageBox.Icon.INFORMATION,
						onClose: null
					});
				} else if (desc === "") {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert(" Enter Operation Description", {
						title: "Error",
						icon: sap.m.MessageBox.Icon.INFORMATION,
						onClose: null
					});

				} else {
					var that = this;

					/*	var (i=0; i<countmore; i++){
							
								var assignper = moretable.getItems()[i].getCells()[0].getSelectedKey();
						
						}*/

					for (var i = 0; i < count; i++) {

						var ops = table1.getItems()[i].getCells()[0].getValue();
						var desc = table1.getItems()[i].getCells()[1].getValue();
						var workcenopera = table1.getItems()[i].getCells()[2].getValue();
						var durn = table1.getItems()[i].getCells()[4].getValue();
						var long_text = table1.getItems()[i].getCells()[12].getValue();
						var assignper = moretable.getItems()[i].getCells()[0].getValue();
						var SplitTotalFoot = assignper.split(" ");
						var splitAssign = SplitTotalFoot[0];

						var obj = {
							"Opeartion": ops,
							"Description": desc,
							"ControlKey": "", //this.order
							"ActType": "",
							"RespPerson": splitAssign,
							"WorkCenter": workcenopera, //that.cen, //this.cen
							"Plant": that.plantFet, //this.planplt
							"Duration": durn,
							"Number": "",
							"LongText": long_text,
							"ItemNumber": ops

						};

						console.log("obj", obj);
						arr.push(obj);
					} // For loop Closed

					console.log("arr", arr);

					var table2 = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
					var count1 = table2.getItems().length;

					for (var i = 0; i < count1; i++) {

						var ops1 = table2.getItems()[i].getCells()[0].getValue();

						var ops2 = table2.getItems()[i].getCells()[1].getValue();
						var mat = table2.getItems()[i].getCells()[2].getValue();
						// alert(mat);
						var desc1 = table2.getItems()[i].getCells()[3].getValue();
						var uni = table2.getItems()[i].getCells()[4].getValue();
						var cat = table2.getItems()[i].getCells()[6].getValue();
						var reqq = table2.getItems()[i].getCells()[7].getValue();

						var objz = {
							"Item": ops1,
							"Operation": ops2,
							/*Activity Field*/
							"Material": mat, //mat
							"Description": desc1, //desc1
							"Uom": uni, //uni
							"StorLoc": "",
							"ItemCat": cat,
							"ReqQty": reqq, //reqq
							"OrderType": that.order,
							"Item_No": ops1

						};

						console.log("objz", objz);
						arr2.push(objz);
					} // For loop Closed
					console.log("arr2", arr2);
					that.arr142j = [];

					var photos = that.getView().getModel().getProperty("/photos");
					var operationAttach = that.getView().getModel("oGlobalModel").getProperty("/ci_att2");
					var children = photos.concat(operationAttach);
					var count = children.length;

					for (var i = 0; i < count; i++) {
						var dmsdata = {
							"DocType": children[i].Ext,
							"FileName": children[i].Name,
							"Base64": children[i].Base64,
							"OperationItemNumber": children[i].operationNumber,
							"Description": children[i].Imagetext

						};
						that.arr142j.push(dmsdata);
					}

					// var func1 = this.getView().byId("inp1").getValue();

					this.short = this.getView().byId("inpdescr").getValue();
					this.longtext = this.getView().byId("textlong").getValue();

					//alert(short)
					var that = this;
					// var prio = this.getView().byId("priority").getSelectedKey();
					// alert(prio);
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Do you want to Create Work Order?", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information Message",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								// notify user
								if (oAction == "YES") {
									//that.busyDialogFun();
									that.getView().getModel("oGlobalModel").setProperty("/deLay", true);
									//debugger;

									var postdata = {
										"PlanningPlant": planPlant, //that.planplt,
										"OrderType": that.order,
										"MainWorkCenter": workCenter, //that.cen, //"MECHANIK"
										"Equipment": that.ement,
										"PMActType": "",
										"ControlType": that.order,
										"Resperson": respper,
										"FunctionalLocation": that.funloca, //func1
										"ShortText": that.short,
										"LongText": that.longtext,
										"Priority": prior, //prio
										"PlannerGroup": planGroup,

										"HToOperation": arr,
										"HToComponent": arr2,
										"ReturnSet": [{
											"Type": "",
											"Message": "",
											"MessageNumber": "",
											"OutputNumber": ""
										}],
										"ToObjectLink": that.arr142j
											//that.arr142j
									};

									that.busyDialogFun();
									console.log("Postdata:", postdata);

									var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
									//debugger;

									//	var oCont = this;
									var pos = [];

									var sPath = "/CreateWorkOrderSet";
									oModel3.create(sPath, postdata, {
										success: function (oData, oResponse) {
											console.log(oData, "oData");

											that.getView().getModel("oGlobalModel").setProperty("/deLay", false);
											//	console.log(oResponse, "oResponse");
											that.busyDialogFun();

											that.msg1 = oData.ReturnSet.results[0].Message;
											//debugger;
											// console.log("that.msg1", that.msg1);

											var tablen = oData.ReturnSet.results.length;

											for (var j = 0; j < tablen; j++) {

												var Type = oData.ReturnSet.results[j].Type;
												console.log("Type", Type);

												if (Type === "I") {

													Type = "Information";
													console.log("Type", Type);

												} else if (Type === "S") {

													Type = "Success";
													console.log("Type", Type);

												} else if (Type === "E") {

													Type = "Error";
													console.log("Type", Type);

												} else if (Type === "W") {

													Type = "Warning";
													console.log("Type", Type);

												}

												var MessageNumber = oData.ReturnSet.results[j].MessageNumber;
												console.log("MessageNumber", MessageNumber);

												var Message = oData.ReturnSet.results[j].Message;
												console.log("Message", Message);

												that.outputNumber = oData.ReturnSet.results[j].OutputNumber;

												var obj = {
													Type2: Type,
													MessageNumber: MessageNumber,
													Message: Message,
													OutputNumber: that.outputNumber
												};

												pos.push(obj);

											}

											that.msg.open();

											if (sap.ui.Device.system.desktop) {
												that.subscribeForPushNotifications(Message);
											}

											var oTemplate = new sap.m.ColumnListItem({

												cells: [
													new sap.m.Text({
														text: "{Type2}"
													}),
													/*	new sap.m.Text({
															text: "{MessageNumber}"
														}),*/
													new sap.m.Text({
														text: "{Message}"
													})
												]
											});

											// var c4Model = new sap.ui.model.json.JSONModel();

											// c4Model.setData(oData.ReturnSet);

											// that.table.setModel(c4Model);
											// that.table.bindItems("/results", oTemplate);

											that.oModelJson = new sap.ui.model.json.JSONModel();
											that.oModelJson.setData({
												tabdata1: pos
											});
											that.table.setModel(that.oModelJson);
											that.table.bindItems("/tabdata1", oTemplate);

											that.workOrd = that.msg1.slice(11, 17);

											//	alert(msg1);

											var ci_att1 = that.getView().byId("UploadCollection").getItems().length;
											// debugger;

											if (ci_att1 == '0') {

												// window.location.reload();
											} else {

												//		that.DMS();
												// window.location.reload();
											}

										},
										error: function (oData, oResponse) {

											//that.getView().getModel("oGlobalModel").setProperty("/deLay", false);

											/*var msg1 = oData.Message;

											sap.m.MessageBox.warning(msg1 + " ", {
												icon: sap.m.MessageBox.Icon.WARNING,
												title: "Warning",
												actions: [sap.m.MessageBox.Action.OK],

											});*/
										}
									});
								} else if (oAction == "NO") {

									that.getView().getModel("oGlobalModel").setProperty("/deLay", false);

								}
							}
						});
				}

			},

			/*Decription In the Operations*/

			OperaDescr: function (oEvent) {

				this.OperationAdd();

				this.store = this.getView().byId("inpdescr").getValue();
				// alert(this.store);

				//this.getView().byId("deci").setValue(this.store);
				var tablen = this.getView().byId("tablez");
				//var count = tablen.getItems().lnngth;

				//for (var i = 0; i < count; i++) {
				this.ops8 = tablen.getItems()[0].getCells()[1].setValue(this.store);
				//alert(this.ops2);
				console.log("this.ops8", this.ops8)

				this.morework2 = tablen.getItems()[0].getCells()[2].getValue();
				//alert(this.morework2);
				/*Function for the More Fragment Assign Personal*/
				/*Code Starts*/

				var moreplnPlant2 = this.getView().byId("cmpplanplt").getValue(); //// to post Planning plant
				var SplitTotalFoot = moreplnPlant2.split(" ");
				this.morplanplt2 = SplitTotalFoot[0];

				var that = this;
				var sPath = "/PersonResponsibleSet?$filter= Plant eq '" + that.morplanplt2 + "' and WorkCenter eq '" + that.morework2 + "'";

				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						// alert("success");

						var PersonListModel2 = new JSONModel(oData);

						//that.getView().byId("wkcent")

						that.getView().getModel("oGlobalModel").setProperty("/PersonListModel2", oData.results);

					}
				});

				/*Code Ends*/

			},
			/*For the Attachment Inside the Fragment for More Button*/

			ci_handleDelete: function (oEvent) {
				var path = oEvent.getParameter('listItem').getBindingContext().getPath();
				var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
				var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

				var Data = list_ID.getModel();

				var d = Data.getData();
				d.splice(idx, 1);
				Data.setData(d);
			},
			_onFileUploaderChange: function () {
				var baseval = [];

				var oFileuploader = this.getView().byId("ci_fileUploader1");
				var ci_attach1 = this.getView().byId("UploadCollection");
				var len = oFileuploader.length;
				var sFilename = oFileuploader.getValue();

				var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

				var base64_marker = 'data:' + file.type + ';base64,';

				var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
				console.log("filename : " + filename);
				var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
				console.log("fileext : " + fileext);
				var sfileext = fileext.substring(0, 3);
				console.log("sfileext : " + sfileext);
				var tsfileext = sfileext.toUpperCase();
				console.log("tsfileext : " + tsfileext);
				var that = this;
				if (file) {
					var reader = new FileReader();

					reader.onload = function (readerEvt) {
						var binaryString = readerEvt.target.result;
						var base64 = btoa(binaryString);
						console.log("base64 : " + base64);

						oFileuploader.setValue();
						baseval.push(base64);
						console.log(baseval);
						var ci_obj1 = {
							Name: filename,
							Ext: tsfileext,
							Base64: base64
						};
						ci_att1.push(ci_obj1);

						console.log(ci_att1.length);
						var oModel = new sap.ui.model.json.JSONModel(ci_att1);
						console.log(ci_att1);
						console.log(ci_att1[0].Base64);
						ci_attach1.setModel(oModel);
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var lv = subject;
									if (lv === 'TXT') {
										return "sap-icon://document-text";
									} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (lv === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (lv === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							type: "Active",
						});
						ci_attach1.bindItems("/", oItems);
						that.getView().getModel("oGlobalModel").setProperty("/ci_att1", ci_att1);

						/*var	ci_att11 = that._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
						console.log(ci_att11,"array");*/

					};

				};

				reader.readAsBinaryString(file);

			},
			_onFileUploaderChange2: function (oEvent) {
				var baseval = [];

				var oFileuploader = oEvent.getSource().getId();
				var ci_attach2 = sap.ui.core.Fragment.byId("OperAttachfragment", "UploadCollection2");
				var len = oFileuploader.length;
				var sFilename = oEvent.getSource().getValue();
				var file = jQuery.sap.domById(oFileuploader + "-fu").files[0];
				var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
				var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
				var sfileext = fileext.substring(0, 3);
				var tsfileext = sfileext.toUpperCase();
				var that = this;
				if (file) {
					var reader = new FileReader();

					reader.onload = function (readerEvt) {
						var binaryString = readerEvt.target.result;
						var base64 = btoa(binaryString);
						console.log("base64 : " + base64);

						baseval.push(base64);
						console.log(baseval);
						var ci_obj1 = {
							Name: filename,
							Ext: tsfileext,
							Base64: base64,
							operationNumber: that.operAttach.toString(),
							Imagetext: ""
						};
						ci_att2.push(ci_obj1);

						console.log(ci_att2.length);
						var oModel = new sap.ui.model.json.JSONModel(ci_att2);
						console.log(ci_att2);
						console.log(ci_att2[0].Base64);
						ci_attach2.setModel(oModel);
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var lv = subject;
									if (lv === 'TXT') {
										return "sap-icon://document-text";
									} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (lv === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (lv === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							number: "Operation No: {operationNumber}",
							type: "Active",
						});
						ci_attach2.bindItems("/", oItems);
						that.getView().getModel("oGlobalModel").setProperty("/ci_att2", ci_att2);

						/*var	ci_att11 = that._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
						console.log(ci_att11,"array");*/

					};

				};

				reader.readAsBinaryString(file);

			},

			/*For Camera Functionality*/
			camera: function (oEvent) {

				var camera = this.byId("idCamera2");
				var btnCamera = this.byId("btnCamera");

				var visible = camera.getVisible();

				if (visible) {
					this.getView().byId("idCamera2").setVisible(false);
					btnCamera.setText("Open Camera");
					camera.stopCamera();
				} else {

					this.getView().byId("idCamera2").setVisible(true);
					btnCamera.setText("Close Camera");
					camera.rerender();

				}

			},
			onSuccess: function (imageData) {
				var imageId = oView.byId("myImage1");
				imageId.setSrc(imageData);

			},
			onFail: function (message) {
				// alert("Failed because: " + message);
			},

			onSnapshot2: function (oEvent) {
				// alert("snapshot")

				// this.arr142 = [];

				this.getView().byId("Cam_list1").setVisible(true);
				var oModel = this.getView().getModel();

				//	this.arr142 = oModel.getProperty("/photos1"); //oEvent.getSource().hasModel("/photos");

				var a = oEvent.getParameter("image");
				var b = a.split(",");
				var base644 = b[1];
				console.log("basefile", base644);

				this.arr142.push({
					src: oEvent.getParameter("image"),
					Base64: base644,
					Name: "image",
					Ext: "png",
				});
				oModel.setProperty("/photos1", this.arr142);
				oModel.refresh(false);

			},

			onSnapshot: function (oEvent) {
				//	alert("call")
				var camera = sap.ui.core.Fragment.byId("camFra", "idCamera");
				var valueTyp = sap.ui.core.Fragment.byId("camFra", "typeValue").getValue();

				var visible = camera.getVisible();

				if (visible) {

					sap.ui.core.Fragment.byId("camFra", "idCamera").setVisible(true);

				} else {

					sap.ui.core.Fragment.byId("camFra", "idCamera").setVisible(false);

					camera.rerender();

				}

				sap.ui.core.Fragment.byId("camFra", "Cam_list").setVisible(true);
				var oModel = this.getView().getModel();
				this.arr142i = [];

				this.arr142i = oModel.getProperty("/photos"); //oEvent.getSource().hasModel("/photos");
				/*this.arr142.push({
					src: oEvent.getParameter("image"),
					operationNumber: this.item,
					ObjectLink: "X",

				});*/
				var a = oEvent.getParameter("image");
				var b = a.split(",");
				var base644 = b[1];

				this.arr142i.push({
					src: oEvent.getParameter("image"),
					operationNumber: this.item.toString(),
					Base64: base644,
					Name: "image",
					Ext: "png",
					Imagetext: valueTyp
				});
				console.log(this.arr142i);
				oModel.setProperty("/photos", this.arr142i);
				oModel.refresh(false);

			},

			ci_handleDelete2: function (oEvent) {

				var pathz = oEvent.getParameter('listItem').getBindingContext().getPath();
				// var path = oEvent.getParameters('listItem').listItem.getBindingContext();
				var idxz = parseInt(pathz.substring(pathz.lastIndexOf('/') + 1));
				var list_IDz = sap.ui.getCore().byId(oEvent.getSource().sId);

				var Data2z = list_IDz.getModel();

				var d2z = Data2z.getData();
				d2z.photos1.splice(idxz, 1);
				Data2z.setData(d2z);

			},
			camera1: function (oEvent) {
				var camera = sap.ui.core.Fragment.byId("camFra", "idCamera");
				var a = oEvent.getSource().getBindingContext().sPath
				var b = parseInt(a.substring(a.lastIndexOf('/') + 1));
				var table2 = this.getView().byId("tablez");
				this.item = table2.getItems()[b].getCells()[0].getValue();
				this.cam.open();

			},

			closeCam: function () {
				var camera = sap.ui.core.Fragment.byId("camFra", "idCamera");
				camera.stopCamera();
				this.cam.close();
				sap.ui.core.Fragment.byId("camFra", "typeValue").setValue("");
			},

			OperAttach: function (oEvent) {
				var tabledata = this.getView().byId("tablez").getItems().length;
				var a = oEvent.getSource().getBindingContext().sPath
				var b = parseInt(a.substring(a.lastIndexOf('/') + 1));
				var table2 = this.getView().byId("tablez");
				this.operAttach = table2.getItems()[b].getCells()[0].getValue();

				this.opAttch.open();
				var attach = sap.ui.core.Fragment.byId("OperAttachfragment", "ci_fileUploader3");

			},
			closeAtt: function () {

				this.opAttch.close();

			},

			OperaLongText: function (oEvent) {
				var LTResponceValid = this.getView().getModel("oGlobalModel").getProperty("/Ltresponce");
				//sap.ui.core.Fragment.byId("OperLTextfragment", "OperText").setValue("");
				var longText = sap.ui.core.Fragment.byId("OperLTextfragment", "OperText").getValue();
				var tabledata = this.getView().byId("tablez").getItems().length;
				var a = oEvent.getSource().getBindingContext().sPath
				this.b = parseInt(a.substring(a.lastIndexOf('/') + 1));
				var table2 = this.getView().byId("tablez");
				this.openLT = table2.getItems()[this.b].getCells()[0].getValue();
				this.LTtext = table2.getItems()[this.b].getCells()[12].getValue();
				if (this.LTtext == "") {
					table2.getItems()[this.b].getCells()[12].setValue("");
					sap.ui.core.Fragment.byId("OperLTextfragment", "OperText").setValue("");
				} else {
					table2.getItems()[this.b].getCells()[12].setValue(this.LTtext);
					sap.ui.core.Fragment.byId("OperLTextfragment", "OperText").setValue(this.LTtext);
				}

				this.opLtext.open();
				var text = sap.ui.core.Fragment.byId("OperLTextfragment", "OperText");
			},
			OkLText: function () {
				var longText = sap.ui.core.Fragment.byId("OperLTextfragment", "OperText").getValue();
				var tabledata = this.getView().byId("tablez").getItems().length;
				var table2 = this.getView().byId("tablez");
				table2.getItems()[this.b].getCells()[12].setValue(longText);
				this.opLtext.close();

			},
			closeLText: function () {

				this.opLtext.close();

			},

			/*Function for the DMS Posting*/
			DMS: function () {

				// var ci_att1= [], oModel142, descrip1, reportname,notnum
				//	alert("SMD")
				var ci_att1 = [];
				var ci_att1 = this.getView().getModel("oGlobalModel").getProperty("/ci_att1");
				var photos1 = this.getView().getModel().getProperty("/photos1");
				if (ci_att1.length === 0) {

					window.location.reload();
				} else {

					ci_att1 = ci_att1.concat(photos1);

					/*var oModel = this.getView().getModel();
					oModel.setProperty("/photos", this.arr142i);*/

					var oUploadCollection = this.getView().byId("UploadCollection");
					//debugger;

					var user = parent.sap.ushell.Container.getUser().getId();
					this.arr142 = [];
					var arrp = [];
					var count = ci_att1.length;
					console.log("count :", count);
					var that = this;
					for (var i = 0; i < count; i++) {
						var dmsdata = {
							"DocType": ci_att1[i].Ext,
							"FileName": ci_att1[i].Name,
							"Base64": ci_att1[i].Base64

						};
						that.arr142.push(dmsdata);
					}
					var obj = {
						"d": {
							"ProcessName": "Create Work Order",
							"Description": this.short,
							"Username": user,
							"NotificationNo": that.workOrd,
							"To_DMSItems": that.arr142,
							"ToReturn": [{
								"Type": "",
								"Message": "",
								"MessageNumber": ""
							}]
						}
					};
					arrp.push(obj);
					//
					console.log(obj);
					var oModel142 = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
					var sPath = "/DMS_HeaderSet";
					var pos1 = [];
					this.table1 = sap.ui.core.Fragment.byId("dmsfragment", "Msgtab1");
					var that = this;
					oModel142.create(sPath, obj, {
						success: function (oData, oResponse) {
							//	sap.ui.core.Fragment.byId("dmsfragment","addcondialog1").getModel("oGlobalModel").setProperty("/delayLoad",false);
							that.getView().getModel("oGlobalModel").setProperty("/delayLoad", false);
							var tablen = oData.ToReturn.results.length;

							for (var j = 0; j < tablen; j++) {

								var Type = oData.ToReturn.results[j].Type;
								console.log("Type", Type);

								if (Type === "I") {

									Type = "Information";
									console.log("Type", Type);

								} else if (Type === "S") {

									Type = "Success";
									console.log("Type", Type);

								} else if (Type === "E") {

									Type = "Error";
									console.log("Type", Type);

								} else if (Type === "W") {

									Type = "Warning";
									console.log("Type", Type);

								}

								var MessageNumber = oData.ToReturn.results[j].MessageNumber;
								console.log("MessageNumber", MessageNumber);

								var Message = oData.ToReturn.results[j].Message;
								console.log("Message", Message);

								//	that.outputNumber = oData.ReturnSet.results[j].OutputNumber;

								var obj = {
									Type2: Type,
									MessageNumber: MessageNumber,
									Message: Message,
								};

								pos1.push(obj);

							}

							that.msgDms.open();

							if (sap.ui.Device.system.desktop) {
								that.subscribeForPushNotifications(Message);
							}

							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Text({
										text: "{Type2}"
									}),
									/*new sap.m.Text({
											text: "{MessageNumber}"
										}),*/
									new sap.m.Text({
										text: "{Message}"
									})
								]
							});

							// var c4Model = new sap.ui.model.json.JSONModel();

							// c4Model.setData(oData.ReturnSet);

							// that.table.setModel(c4Model);
							// that.table.bindItems("/results", oTemplate);

							that.oModelJson = new sap.ui.model.json.JSONModel();
							that.oModelJson.setData({
								tabdata2: pos1
							});
							that.table1.setModel(that.oModelJson);
							that.table1.bindItems("/tabdata2", oTemplate);

						},
						error: function (oData, oResponse) {

							MessageToast.show("Error");

						}

					});
				}

			},
			/*F4 For the Unit Of Measures*/
			fragUom: function () {

				//var oCont = this;

				var unit = sap.ui.core.Fragment.byId("Operationsfragment", "combo17");
				//alert(unit);

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/UOMF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {

						var unitt = oData.results.length;
						for (var i = 0; i < unitt; i++) {
							var UOM = oData.results[i].UOM;
							console.log("UOM", UOM);
							var dups = [];
							var arr1 = oData.results.filter(function (el) {
								if (dups.indexOf(el.UOM) == -1) {
									dups.push(el.UOM);
									return true;
								}
								return false;
							});
							var arr7 = {
								"arr7": arr1
							};
						}
						//	debugger;
						console.log("arr6:", arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{Text}",
							text: "{Text}"

							// key: "{UOM}",
							// text: "{UOM}-{Text}"

						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						oModel.setSizeLimit(900);
						unit.setModel(oModel);
						unit.bindItems("/arr7", oItems);
					}
				});

			},

			/*F4 Function for the Item Category*/

			fragItmcat: function () {

				var oCont = this;

				var icat = sap.ui.core.Fragment.byId("Operationsfragment", "combo19");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/ItemCategoryF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var ItemCat = oData.results[0].ItemCat;
						console.log("ItemCat" + ItemCat)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.ItemCat) == -1) {
								dups.push(el.ItemCat);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
						//	debugger;
						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{ItemCat}",
							text: "{ItemCat} {ItemCatText}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						icat.setModel(oModel);
						icat.bindItems("/arr7", oItems);
					}
				});

			},

			newmaterial: function (oEvent) {

				var oCont = this;

				var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

				form.setVisible(true);
				//debugger;
				//sap.ui.core.Fragment.byId("Operationsfragment", "val1").setValue(oCont.z1);
				//alert(oCont.z1);
				sap.ui.core.Fragment.byId("Operationsfragment", "combo15").setValue(oCont.z2);
				sap.ui.core.Fragment.byId("Operationsfragment", "combo8").setValue(oCont.z3);
				sap.ui.core.Fragment.byId("Operationsfragment", "combo9").setValue(oCont.z4);
				sap.ui.core.Fragment.byId("Operationsfragment", "val3").setValue(this.planplt);
				sap.ui.core.Fragment.byId("Operationsfragment", "val4").setValue(oCont.z5);
				sap.ui.core.Fragment.byId("Operationsfragment", "combo16").setValue(oCont.z6);

				///////////////////////////////////////////////////////////////////////////// Getting the value in the index for Req Qty

				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split(" ");
				this.indexj = valueind[2];
				//debugger;
				//console.log(indexi);

			},

			purdatauom: function (oEvent) {

				var purunit = oEvent.getSource().getSelectedKey();

				sap.ui.core.Fragment.byId("Operationsfragment", "val1").setValue(purunit);

			},
			//////////////////////////////////////////////More Fragment in Page1		
			more_btn: function () {

				this.more.open();

			},

			addbtnMore1: function () {

				var HotelBooking1 = {

					Empty1: "",
					Empty2: "",
					Empty3: ""

				};

				//debugger;

				array11.push(HotelBooking1);

				var HotelBooking101 = sap.ui.core.Fragment.byId("morefragment", "tab4");

				this.seamoModelccd41 = new sap.ui.model.json.JSONModel(); // created a JSON model   
				this.seamoModelccd41.setData({ // Set the data to the model using the JSON object defined already  
					seamtrans1: array11

				});

				HotelBooking101.setModel(this.seamoModelccd41);

			},

			/*Function for Deleteing the Assign Personel*/
			MoredeleteTab: function (oArgs) {

				this.valuexy = oArgs.getSource().getBindingContext().getObject();

				for (var i = 0; i < array11.length; i++) {

					if (array11[i] == this.valuexy) {

						array11.splice(i, 1); //removing 1 record from i th index.

						this.seamoModelccd41.refresh();

						break; //quit the loop

						//this.deleteTab();
					}
				}

			},

			addbtnMore2: function () {
				var array12 = [];

				this.HotelBooking2 = {

					Empty1: "",
					Empty2: "",
					Empty3: "",
					Empty4: "",
					Empty5: ""

				};

				//debugger;

				array12.push(this.HotelBooking2);

				this.HotelBooking2 = sap.ui.core.Fragment.byId("morefragment", "tab5");

				var seamoModelccd42 = new sap.ui.model.json.JSONModel(); // created a JSON model   
				seamoModelccd42.setData({ // Set the data to the model using the JSON object defined already  
					seamtrans2: array12

				});
				this.HotelBooking2.setModel(seamoModelccd42);

			},

			/*Function For the File Uploader inside the Fragment*/
			_onFileUploaderChange1: function () {

				var baseval = [];
				var oFileuploader = sap.ui.core.Fragment.byId("morefragment", "ci_fileUploader1"); // uploder id
				console.log("oFileuploader : " + oFileuploader);

				//ci_attach1 = sap.ui.core.Fragment.byId("morefragment","UploadCollection1"); // list id
				ci_attach1 = this.getView().byId("UploadCollection"); // list id

				var len = oFileuploader.length;
				var sFilename = oFileuploader.getValue();

				//	baseval = [" "," "," "," "," "];
				var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

				var base64_marker = 'data:' + file.type + ';base64,';

				var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
				console.log("filename : " + filename);
				var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
				console.log("fileext : " + fileext);
				var sfileext = fileext.substring(0, 3);
				console.log("sfileext : " + sfileext);
				var tsfileext = sfileext.toUpperCase();
				console.log("tsfileext : " + tsfileext);
				var that = this;
				if (file) {
					var reader = new FileReader();

					reader.onload = function (readerEvt) {
						var binaryString = readerEvt.target.result;
						var base64 = btoa(binaryString);
						console.log("base64 : " + base64);

						oFileuploader.setValue();
						baseval.push(base64);
						console.log(baseval);
						var ci_obj1 = {
							Name: filename,
							Ext: tsfileext,
							Base64: base64

						};
						ci_att1.push(ci_obj1);

						console.log(ci_att1.length);
						var oModel = new sap.ui.model.json.JSONModel(ci_att1);
						console.log(ci_att1);
						console.log(ci_att1[0].Base64);
						ci_attach1.setModel(oModel);
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var lv = subject;
									if (lv === 'TXT') {
										return "sap-icon://document-text";
									} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (lv === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (lv === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							type: "Active",
						});
						ci_attach1.bindItems("/", oItems);
						that.getView().getModel("oGlobalModel").setProperty("/ci_att1", ci_att1);

						/*var	ci_att11 = that._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
						console.log(ci_att11,"array");*/

					};

				};

				reader.readAsBinaryString(file);

			},
			ci_handleDelete1: function (oEvent) {
				var path = oEvent.getParameter('listItem').getBindingContext().getPath();
				var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
				var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

				var Data = list_ID.getModel();

				var d = Data.getData();
				d.splice(idx, 1);
				Data.setData(d);
			},

			moreok: function () {

				this.more.close();

			},
			moreclose: function () {

				this.more.close();

			},

			matReq: function () {

				var arrayz = [];

				var moretab = sap.ui.core.Fragment.byId("morefragment", "tab5");

			},

			onExit: function () {

				// to destroy templates for bound aggregations when templateShareable is true on exit to prevent duplicateId issue
				var aControls = [{
					"controlId": "sap_uxap_ObjectPageLayout_0-sections-sap_uxap_ObjectPageSection-1557142154540-subSections-sap_uxap_ObjectPageSubSection-1-blocks-build_simple_Table-1557146479362",
					"groups": ["items"]
				}];
				for (var i = 0; i < aControls.length; i++) {
					var oControl = this.getView().byId(aControls[i].controlId);
					if (oControl) {
						for (var j = 0; j < aControls[i].groups.length; j++) {
							var sAggregationName = aControls[i].groups[j];
							var oBindingInfo = oControl.getBindingInfo(sAggregationName);
							if (oBindingInfo) {
								var oTemplate = oBindingInfo.template;
								oTemplate.destroy();
							}
						}
					}
				}

			}
		});
	},
	/* bExport= */
	true);
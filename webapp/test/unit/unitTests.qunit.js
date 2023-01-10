/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"commoboprintreusablee/print/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

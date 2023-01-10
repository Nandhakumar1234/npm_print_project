/*global QUnit*/

sap.ui.define([
	"commoboprintreusablee/print/controller/print.controller"
], function (Controller) {
	"use strict";

	QUnit.module("print Controller");

	QUnit.test("I should test the print controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

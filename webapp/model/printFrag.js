sap.ui.define(
  ['sap/ui/core/Control',"sap/m/PDFViewer"],
  function(Control,PDFViewer) {
  return Control.extend("com.mobo.printreusablee.print",{
       metadata: {
            properties: {},
            aggregations: {
               _pdfviewer: { type: "sap.m.PDFViewer",multiple: false,visibility: "hidden"},
            },
            Methods: {},

       },
       init:function(){
          this.setAggregation("_pdfviewer", new PDFViewer({
          }).addStyleClass("sapUiSmallMargin"));
         },
       renderer: function(oRm,oControl){
            //to do: render the control

            oRm.renderControl(oControl.getAggregation("_pdfviewer"));
       },
       pdfFile:function(){
          var oContainer = sap.ui.getCore().byId("pdfContainer");
          this.pdfDoc = sap.ui.getCore().byId("pdfDialog");
          var oHtmlChange = new sap.ui.core.HTML({
               oContent : "<iframe src=" + "https://assets.cdn.sap.com/sapcom/docs/2015/07/c06ac591-5b7c-0010-82c7-eda71af511fa.pdf" + " width='100%' height='100%'></iframe>" 
               });
          
          oContainer.setContent(oHtmlChange);
       },
       onAfterRendering: function() {
            //if I need to do any post render actions, it will happen here
            if(sap.ui.core.Control.prototype.onAfterRendering) {
                 sap.ui.core.Control.prototype.onAfterRendering.apply(this,arguments); //run the super class's method first
            }
       },
  });
  }
);
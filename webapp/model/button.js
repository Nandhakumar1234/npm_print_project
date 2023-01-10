sap.ui.define(
    ['sap/ui/core/Control'],
    ['sap/m/Button'],
    function(Control, Button) {
    return Control,Button.extend("com.mobo.printreusablee.print",{
         metadata: {
              properties: {
               "border" : "",
               "text": "",
              },
              aggregations: {},
              events: {
               "mario" : {},
              },
              Methods: {}
         },
         init:function(){
          
         },
         renderer: function(oRm,oControl){
      
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
(function(){
  CKEDITOR.on( 'dialogDefinition', function( ev ) {
    // Take the dialog name and its definition from the event data.
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    // Check if the definition is from the dialog we're
    // interested on (the "Table" dialog).
    if ( dialogName == 'table' ) {
      // Get a reference to the "Table Info" tab.
      var infoTab = dialogDefinition.getContents( 'info' );
      // Adjust the default Table Width.
      txtWidth = infoTab.get( 'txtWidth' );
      txtWidth['default'] = '';
      // Adjust the default Cell Padding.
      txtCellPad = infoTab.get( 'txtCellPad' );
      txtCellPad['default'] = '';
      // Adjust the default Cell Spacing.
      txtCellPad = infoTab.get( 'txtCellSpace' );
      txtCellPad['default'] = '';
      // Adjust the default Table Border.
      txtCellPad = infoTab.get( 'txtBorder' );
      txtCellPad['default'] = '0';
    }
  });
})();

(function(){
    CKEDITOR.on('instanceReady', function(e){
      // set different rules based on the element type
      els = ['table','thead','tbody','tfooter','div'];
      for (i in els) {
        e.editor.dataProcessor.writer.setRules(els[i], {
          indent : true,
          breakBeforeOpen : true,
          breakAfterOpen : true,
          breakBeforeClose : true,
          breakAfterClose : true
        });
      }
      
      elsTwo = ['p','hr','h1','h2','h3','h4','h5','h6'];
      for (i in elsTwo) {
        e.editor.dataProcessor.writer.setRules(elsTwo[i], {
          indent : false,
          breakBeforeOpen : true,
          breakAfterOpen : false,
          breakBeforeClose : false,
          breakAfterClose : true
        });
      }
      
      elsThree = ['tr','th','ul','ol'];
      for (i in elsTwo) {
        e.editor.dataProcessor.writer.setRules(elsThree[i], {
          indent : true,
          breakBeforeOpen : true,
          breakAfterOpen : false,
          breakBeforeClose : false,
          breakAfterClose : true
        });
      }
      
      elsFour = ['td','li','img','figure','figcaption','blockquote','ul','ol'];
      for (i in elsTwo) {
        e.editor.dataProcessor.writer.setRules(elsFour[i], {
          indent : true,
          breakBeforeOpen : true,
          breakAfterOpen : false,
          breakBeforeClose : false,
          breakAfterClose : true
        });
      }
    });
})();
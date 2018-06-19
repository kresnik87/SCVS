Ext.define('SCVS.view.Area.CapturaEdicionArea', {
    extend: 'Ext.window.Window',
    alias:'widget.FormAddEdicionArea',
    height: 150,
    width: 350,
    glyph:'xf0d1@FontAwesome',
    resizable:false,
    bodyPadding: '20 0 0 20',	
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
        background: THEME
					
    },
    closable: false,
    title: 'Agregar/Modificar Area de Venta',
    modal: true,
	
	
    initComponent: function() {
        var me = this;
       
        
        Ext.applyIf(me, {
            items: [
            {
                xtype: 'form',
                ui:'footer',
                itemId:'FrmDatosArea',
                height: 150,
                layout: {
                    type: 'auto'
                },
                fieldDefaults: {
                    msgTarget: 'side',
                    autoFitErrors: false
                },
                items		: [ 
                {
                    xtype : "textfield", 
                    name :'id_area',
                    hidden:true
                },

                {
                    xtype : "textfield", 
                    name : 'nomb_area', 
                    labelCls:'ficha_label',	
                    allowBlank:false, 
                    fieldLabel : "Area de Venta"
                }
                ],
                dockedItems : [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id:'buttons',
                    ui: 'footer',
                    items: ['->',{
                        itemId: 'BtnAdd',
                        glyph:'xf058@FontAwesome',
                        disabled:true,
                        formBind:true,
                        text: 'Agregar',
                        action: 'actAdd'
                    },{
                        itemId: 'BtnActualizar',
                        glyph:'xf0c7@FontAwesome',
                        disabled:true,
                        formBind:true,
                        text: 'Actualizar',
                        action: 'actUpdate'
                    },{
							
                        text: 'Cancelar',
                        glyph:'xf057@FontAwesome',
                        scope: this,
                        handler: this.close
                    }]
                }]
            }]
        }); 
        me.callParent(arguments);
    }					
});	
						
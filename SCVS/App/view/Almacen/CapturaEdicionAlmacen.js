Ext.define('SCVS.view.Almacen.CapturaEdicionAlmacen', {
    extend: 'Ext.window.Window',
    alias:'widget.FormAddEdicionAlmacen',
    height: 150,
    width: 300,
    glyph:'xf0d1@FontAwesome',
    resizable:false,
    bodyPadding: '20 0 0 20',	
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
        background: '#222d32'
					
    },
    closable: false,
    title: 'Agregar/Modificar  Almacén',
    modal: true,
	
	
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
            {
                xtype: 'form',
                ui:'footer',
                itemId:'FrmDatosAlmacen',
                height: 180,
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
                    name :'id_alm',
                    hidden:true
                },{
                    xtype : "textfield",
                    name : 'nomb_alm',
                    labelCls:'ficha_label',	
                    allowBlank:false,
                    flex: 1,
                    fieldLabel : "Nombre de Almacen"
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
						
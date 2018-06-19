Ext.define('SCVS.view.InventarioVent.UpdateCostInvVent', {
    extend: 'Ext.window.Window',
    alias:'widget.FormUpdatePrecio',
    height: 250,
    width: 225,
    resizable:false,
    bodyPadding: '10 10 10 10',	
    autoShow: true,
    glyph:'xf0ea@FontAwesome',
    layout: {
        type: 'fit'
    },
    bodyStyle: {
         background: THEME
    },
    closable: false,
    title: 'Ajuste Inventario',
    modal: true,
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
            items: [
            {	
                xtype: 'form',
                id: 'FormUpdatePrecio',
                bodyPadding: '5 5 5 5',
                bodyStyle: {
                     background: THEME
                },
                width: 600,
                fieldDefaults: {
                    labelAlign: 'top',
                    msgTarget: 'side'
                },
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'container',
                    layout:'hbox',
                    items:[{
                        xtype: 'container',
                        flex: 1,
                        border:false,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            xtype : "textfield", 
                            name :'id_prod',
                            hidden:true
                        },

                        {
                            xtype : "textfield", 
                            name :'id_inv_area',
                            hidden:true
                        },
                        {
                            fieldLabel: 'Producto',
                            labelCls:'ficha_label',
                            disabled:true,
                            name: 'nomb_prod',
                            anchor:'85%'
                        },{
                            xtype: 'numberfield',
                            fieldLabel: 'P. Venta',
                            labelCls:'ficha_label',
                            name:'p_venta',
                            id:'p_venta',
                            minValue:'0',
                            anchor:'85%',
                            flex: 1
                        },{
                            xtype: 'numberfield',
                            fieldLabel: 'Cantidad',
                            labelCls:'ficha_label',
                            name:'cantidad',
                            id:'cantidad',
                            minValue:'0',
                            anchor:'85%',
                            flex: 1
                        }]
                    }]
                }],
                dockedItems : [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id:'buttons',
                    ui: 'footer',
                    items: ['->',{
                        id: 'BtnActualizar',
                        glyph:'xf0c7@FontAwesome',
                        disabled:true,
                        formBind:true,
                        text: 'Actualizar',
                        action: 'actUpdateCost'
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
						
Ext.define('SCVS.view.InventarioAlm.UpdateCostInvAlm', {
    extend: 'Ext.window.Window',
    alias:'widget.FormUpdateCost',
    height: 275,
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
    title: 'Ajuste de Inventario',
    modal: true,
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
            items: [
            {	
                xtype: 'form',
                id: 'FormUpdateCost',
                bodyPadding: '5 5 5 5',
                bodyStyle: {
                     background: THEME
                },
                width: 225,
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
                            name :'id_inv_alm',
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
                            fieldLabel: 'P. Costo',
                            labelCls:'ficha_label',
                            name:'p_costo',
                            id:'p_costo',
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
						
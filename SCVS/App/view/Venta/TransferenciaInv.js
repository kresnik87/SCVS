Ext.define('SCVS.view.InventarioVent.TransferenciaInv', {
    extend: 'Ext.window.Window',
    alias:'widget.FormTransf',
    height: 300,
    width: 220,
    resizable:false,
    iconCls: 'transf',
    bodyPadding: '10 10 10 10',	
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
        background: THEME
    },
    closable: false,
    title: 'Transferencia entre Areas',
    modal: true,
    initComponent: function() {
        var me = this;
        
        var storeArea=Ext.create('SCVS.store.Area.Area'); 
        storeArea.load();
        
        Ext.applyIf(me, {
            items: [
            {	
                xtype: 'form',
                id: 'FormAddInvVent',
                bodyPadding: '5 5 5 5',
                bodyStyle: {
                    background: THEME
                },
                width: 200,
                fieldDefaults: {
                    labelAlign: 'top',
                    msgTarget: 'side'
                },
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'container',
                    layout:'vbox',
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
                            xtype : "textfield",
                            name :'id_estado',
                            hidden:true
                        },
                         {
                            xtype : "textfield",
                            name :'id_area',
                            hidden:true
                        },
                        {
                            fieldLabel: 'Producto',
                            labelCls:'ficha_label',
                            disabled:true,
                            name: 'nomb_prod',
                            anchor:'85%'
                        },{
                            xtype : "datefield",
                            format: 'Y/m/d',
                            labelCls:'ficha_label',
                            name : 'fecha',
                            allowBlank:false,
                            fieldLabel : "Fecha"
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            xtype: 'numberfield',
                            fieldLabel: 'Cantidad',
                            labelCls:'ficha_label',
                            name:'cantidad',
                            minValue:'0',
                            flex: 1,
                            allowBlank: false
                        },{
                            xtype : "combobox",
                            queryMode: 'local',
                            labelCls:'ficha_label',
                            allowBlank:false,
                            store:storeArea,
                            displayField:'nomb_area',
                            valueField:'id_area',													
                            name : "id_area_destino",
                            flex: 1,
                            fieldLabel : "Destino"    
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        items: [{
                            xtype: 'numberfield',
                            fieldLabel: 'P. Venta',
                            labelCls:'ficha_label',
                            name:'p_venta',
                            hidden:true,
                            id:'p_venta',
                            allowBlank: false,
                            minValue:'0',
                            flex: 1
                        },{
                            xtype: 'numberfield',
                            fieldLabel: 'P. Venta x Cant',
                            labelCls:'ficha_label',
                            name:'p_venta_cantidad',
                            hidden:true,
                            minValue:'0',
                            flex: 1
                        },{
                            xtype: 'numberfield',
                            fieldLabel: 'Importe',
                            id:'importe',
                            labelCls:'ficha_label',
                            name:'importe',
                            minValue:'0',                                              
                            hidden:'true',
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
                        id: 'BtnAdd',
                        iconCls: 'add_user',
                        disabled:true,
                        formBind:true,
                        text: 'Transferir',
                        action: 'actAddTransf'
                    },{
							
                        text: 'Cancelar',
                        iconCls: 'cancel',
                        scope: this,
                        handler: this.close
                    }]
                }]
            }]
        }); 
		   
        me.callParent(arguments);
    }
   
});	
						
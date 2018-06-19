Ext.define('SCVS.view.Servicio.RealizarServicio', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddServ',
    height: 350,
    width: 320,
    iconCls: 'add-form',
    resizable: false,
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: THEME
    },
    closable: false,
    title: 'Realizar Servicio',
    modal: true,
    initComponent: function () {
        var me = this;

        var storeServ = Ext.create('SCVS.store.Servicio.Serv');
        storeServ.load();
		
        var storeArea = Ext.create('SCVS.store.Area.Area');
        storeArea.load();

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'FormAddServ',
                    bodyPadding: '5 5 5 5',
                    bodyStyle: {
                       background: THEME
                    },
                    width: 320,
                    fieldDefaults: {
                        labelAlign: 'top',
                        msgTarget: 'side'
                    },
                    defaults: {
                        anchor: '100%'
                    },
                       items: [{
                                    
									xtype: 'container',
									layout: 'form',
                                    bodyStyle: {
                                       background: '#00247f'
                                    },
                                    items: [{
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            store: storeArea,
                                            displayField: 'nomb_area',
                                            valueField: 'id_area',
                                            name: "id_area",
                                            flex: 1,
                                            fieldLabel: "Areas de Venta"
                                        },{
                                            xtype: "datefield",
                                            format: 'Y/m/d',
                                            labelCls: 'ficha_label',
                                            name: 'fecha',
                                            allowBlank: false,
                                            fieldLabel: "Fecha"
                                        }, {
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            store: storeServ,
                                            displayField: 'nomb_servicio',
                                            valueField: 'id_serv',
                                            name: "id_serv",
                                            flex: 1,
                                            fieldLabel: "Servicio",
											listeners:{
														beforeselect:function(combo,record){
														var form = combo.up('form')														
														var p_serv=record.data.p_venta;
														form.queryById('p_venta').setValue(p_serv);																			
														}
													} 
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Cantidad',											
                                            labelCls: 'ficha_label',
											allowBlank: false,
                                            name: 'cant',
                                            id: 'cant',
                                            minValue: '0',                                           
                                            flex: 1
                                        },{
                                            xtype: 'numberfield',
                                            fieldLabel: 'Precio Servicio',											
                                            labelCls: 'ficha_label',
											allowBlank: false,
                                            name: 'p_venta',
                                            id: 'p_venta',
                                            minValue: '0',                                           
                                            flex: 1
                                        }]
                                }
                            ]
                        
                }],
            dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id: 'buttons',
                    ui: 'footer',
                    items: ['->', {
                            id: 'BtnAdd',
                            iconCls: 'add_user',
                            disabled:false,
							formBind:true,
							text: 'Registrar Servicio',
                            action: 'actAddServ'
                        }, {
                            text: 'Cancelar',
                            iconCls: 'cancel',
                            scope: this,
                            handler: this.close
                        }]
                }]

        });

        me.callParent(arguments);
    },
	
});
						
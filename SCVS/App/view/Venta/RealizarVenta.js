Ext.define('SCVS.view.Venta.RealizarVenta', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddVenta',
    height: 400,
    width: 350,
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
    title: 'Realizar Venta de Productos',
    modal: true,
    initComponent: function () {
        var me = this;

        var storeArea = Ext.create('SCVS.store.Area.Area');
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
                    width: 300,
                    fieldDefaults: {
                        labelAlign: 'top',
                        msgTarget: 'side'
                    },
                    defaults: {
                        anchor: '100%'
                    },
                    items: [{
                            xtype: 'tabpanel',
                            activeTab: 0,
                            bodyStyle: {
                               background: '#00247f'
                            },
                            items: [{
                                    title: 'Datos Producto',
                                    layout: 'form',
                                    iconCls: 'add-form',
                                    bodyStyle: {
                                       background: THEME
                                    },
                                    items: [{
                                            xtype: "textfield",
                                            name: 'id_prod',
                                            hidden: true
                                        },
                                        {
                                            xtype: "textfield",
                                            name: 'id_inv_area',
                                            hidden: true
                                        },
                                        {
                                            xtype: "textfield",
                                            name: 'p_costo',
                                            hidden: true
                                        },
                                        {
                                            xtype: "textfield",
                                            name: 'id_estado',
                                            hidden: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Producto',
                                            labelCls: 'ficha_label',
                                            disabled: true,
                                            name: 'nomb_prod'
                                        }, {
                                            xtype: "datefield",
                                            format: 'Y/m/d',
                                            labelCls: 'ficha_label',
                                            name: 'fecha',
                                            allowBlank: false,
                                            fieldLabel: "Fecha"
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Cantidad',
                                            labelCls: 'ficha_label',
                                            name: 'cantidad',
                                            minValue: '0',
                                            flex: 1,
                                            allowBlank: false
                                        }, {
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
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'P. Venta',
                                            labelCls: 'ficha_label',
                                            name: 'p_venta',
                                            id: 'p_venta',
                                            minValue: '0',
                                            disabled: 'true',
                                            flex: 1
                                        },{
                                            xtype:'checkboxfield',
                                            boxLabel:'Modificar P. Venta',
                                            boxLabelCls: 'ficha_label',
                                            id:'check',
                                            checked: false,
                                            margin: '20 0 10 0',
                                            scope: this,
                                            handler: this.onChange    
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'P. Venta x Cant',
                                            labelCls: 'ficha_label',
                                            name: 'p_venta_cantidad',
                                            hidden: 'true',
                                            minValue: '0',
                                            flex: 1
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Importe',
                                            id: 'importe',
                                            labelCls: 'ficha_label',
                                            name: 'importe',
                                            minValue: '0',
                                            hidden: 'true',
                                            flex: 1
                                        }]
                                }, {
                                    title: 'Datos Cliente',
                                    layout: 'form',
                                    iconCls: 'client',
                                    bodyStyle: {
                                       background: THEME
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            name: 'nombre',
                                            labelCls: 'ficha_label',
                                            fieldLabel: 'Nombre:'
                                        }, {
                                            xtype: 'textfield',
                                            name: 'ci',
                                            labelCls: 'ficha_label',
                                            fieldLabel: 'CI:',
                                            maxLength: '11',
                                            minLength: '11'
                                        }]}
                            ]
                        }]
                }],
            dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id: 'buttons',
                    ui: 'footer',
                    items: ['->', {
                            id: 'BtnAdd',
                            iconCls: 'add_user',
                            formBind: true,
                            text: 'Realizar Venta',
                            action: 'actAddInv'
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
     onChange: function(box, checked){
        
        var form = this.down('form')
        form.queryById('p_venta').setDisabled(!checked);
    },
});
						
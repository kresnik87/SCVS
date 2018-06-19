Ext.define('SCVS.view.InventarioAlm.RealizarVentaXCant', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddVentaXCant',
    height: 320,
    width: 250,
    glyph:'xf155@FontAwesome',
    resizable: false,
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
        background: THEME
    },
    closable: false,
    title: 'Venta Mayorista',
    modal: true,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'FormAddVentaXCant',
                    bodyPadding: '5 5 5 5',
                    bodyStyle: {
                        background: THEME
                    },
                    width: 250,
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
                                background: THEME
                            },
                            items: [{
                                    title: 'Producto',
                                    layout: 'form',
                                    glyph:'xf10b@FontAwesome',
                                    bodyStyle: {
                                        background: THEME
                                    },
                                    items: [{
                                            xtype: "textfield",
                                            name: 'id_inv_alm',
                                            hidden: true
                                        },
                                        {
                                            xtype: "textfield",
                                            name: 'id_alm',
                                            hidden: true
                                        },{
                                            xtype: "textfield",
                                            name: 'id_prod',
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
                                            name: 'cant',
                                            minValue: '0',
                                            flex: 1,
                                            allowBlank: false
                                        },{
                                            xtype: 'numberfield',
                                            fieldLabel: 'P. Venta',
                                            labelCls: 'ficha_label',
                                            name: 'p_venta',
                                            id: 'p_venta',
                                            minValue: '0',
                                            flex: 1
                                        },{
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
                                    title: 'Cliente',
                                    layout: 'form',
                                    glyph:'xf21b@FontAwesome',
                                    bodyStyle: {
                                        background: THEME
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            name: 'nomb_cliente',
                                            labelCls: 'ficha_label',
                                            fieldLabel: 'Nombre:'
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
                            glyph:'xf058@FontAwesome',
                            formBind: true,
                            text: 'Realizar Venta',
                            action: 'actAddVenta'
                        }, {
                            text: 'Cancelar',
                           glyph:'xf057@FontAwesome',
                            scope: this,
                            handler: this.close
                        }]
                }]

        });

        me.callParent(arguments);
    }
});
						
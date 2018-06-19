
Ext.define('SCVS.view.Servicio.PanelRegServ', {
    extend: 'Ext.Panel',
    alias: 'widget.panelGrdRegServ',
    closable: false,
    autoScroll: true,
    closable: false,
            layout: 'hbox',
    bodyStyle: {
        background: THEME
    },
    bodyPadding: 5,
    initComponent: function () {
        var me = this;
        var storeServicio = Ext.create('SCVS.store.Servicio.Serv');
        storeServicio.load();
        var storeArea = Ext.create('SCVS.store.Area.Area');
        storeArea.load();
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'FrmDatosCmed',
                    title: 'Filtro de Búsqueda',
                    bodyStyle: {
                        background: THEME

                    },
                    collapsible: true,
                    collapsed: true,
                    autoScroll: true,
                    collapseDirection: 'left',
                    bodyPadding: 5,
                    width: 350,
                    height: 560,
                    layout: {
                        type: 'auto'
                    },
                    fieldDefaults: {
                        msgTarget: 'side',
                        autoFitErrors: false
                    },
                    items: [{
                            xtype: 'fieldset',
                            bodyPadding: 5,
                            layout: 'column',
                            items: [{
                                    xtype: 'container',
                                    layout: 'anchor',
                                    width: 350,
                                    items: [{
                                            xtype: "textfield",
                                            name: 'id_serv',
                                            hidden: true
                                        },
                                        {
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            store: storeArea,
                                            displayField: 'nomb_area',
                                            valueField: 'id_area',
                                            name: "id_area",
                                            id: 'id_area_serv',
                                            flex: 1,
                                            fieldLabel: "Area de Venta",
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearch').focus();
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            store: storeServicio,
                                            displayField: 'nomb_servicio',
                                            valueField: 'id_serv',
                                            name: "id_serv",
                                            id: 'id_serv',
                                            flex: 1,
                                            fieldLabel: "Servicio",
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearch').focus();
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }, {
                                    xtype: 'fieldcontainer',
                                    layout: 'anchor',
                                    width: 350,
                                    items: [{
                                            xtype: 'numberfield',
                                            fieldLabel: 'Precio',
                                            id: 'precio',
                                            emptyText: 'Precio del Servicio',
                                            labelCls: 'ficha_label',
                                            minValue: '0',
                                            name:'precio',
                                            flex: 1,
                                            allowBlank: false,
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearch').focus();
                                                    }
                                                }
                                            }
                                        }]
                                }]
                        }, {
                            xtype: 'fieldset',
                            bodyPadding: 5,
                            layout: 'column',
                            items: [{
                                    xtype: 'fieldcontainer',
                                    layout: 'anchor',
                                    width: 350,
                                    items: [{
                                            xtype: 'numberfield',
                                            fieldLabel: 'Venta Inicial',
                                            id: 'p_venta_inicial_serv',
                                            emptyText: 'Precio de Venta Inicial',
                                            labelCls: 'ficha_label',
                                            minValue: '0',
                                            name: 'p_venta_inicial',
                                            flex: 1,
                                            allowBlank: false,
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearch').focus();
                                                    }
                                                }
                                            }
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Venta Final',
                                            id: 'p_venta_final_serv',
                                            emptyText: 'Precio de venta final',
                                            labelCls: 'ficha_label',
                                            name: 'p_venta_final',
                                            minValue: '0',
                                            flex: 1,
                                            allowBlank: false,
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearch').focus();
                                                    }
                                                }
                                            }
                                        }]
                                }]
                        }, {
                            xtype: 'fieldset',
                            bodyPadding: 5,
                            layout: 'column',
                            items: [{
                                    xtype: 'fieldcontainer',
                                    layout: 'anchor',
                                    width: 350,
                                    items: [{
                                            xtype: "datefield",
                                            format: 'Y/m/d',
                                            id: 'fecha_inicial_serv',
                                            name: 'fecha_inicial',
                                            labelCls: 'ficha_label',
                                            fieldLabel: "Fecha Inicial",
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearch').focus();
                                                    }
                                                }
                                            }
                                        }, {
                                            xtype: "datefield",
                                            format: 'Y/m/d',
                                            id: 'fecha_final_serv',
                                            name: 'fecha_final',
                                            labelCls: 'ficha_label',
                                            fieldLabel: "Fecha Final",
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearch').focus();
                                                    }
                                                }
                                            }
                                        }]
                                }]
                        }
                    ],
                    dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            id: 'buttons_serv',
                            border: true,
                            ui: 'footer',
                            items: ['->', {
                                    itemId: 'BtnSearch',
                                    iconCls: 'search',
                                    text: 'Buscar',
                                    action: 'actSearch'
                                }, {
                                    itemId: 'BtnClean',
                                    iconCls: 'clean',
                                    text: 'Limpiar',
                                    action: 'actClean'
                                }]
                        }]
                }, Ext.create('SCVS.view.Servicio.GrdRegServ')
            ]
        });
        this.callParent();
    }


});
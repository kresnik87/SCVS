
Ext.define('SCVS.view.Venta.PanelVenta', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdVenta',
    closable: false,
    autoScroll: true,
    closable: false,
            layout: 'hbox',
    bodyStyle: {
        background: THEME
    },
    bodyPadding: 5,
    initComponent: function() {
        var me = this;
        var storeTProd = Ext.create('SCVS.store.TProd.TProd');
        storeTProd.load();
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
                                            name: 'id_prod',
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
                                            id:'id_area',
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
                                            xtype: 'textfield',
                                            id: 'nomb_prod',
                                            fieldLabel: 'Producto',
                                            labelCls: 'ficha_label',
                                            emptyText: 'Nombre',
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

                                        },{
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            emptyText: 'Seleccione tipo producto',
                                            store: storeTProd,
                                            displayField: 'tipo_prod',
                                            valueField: 'id_tipo_prod',
                                            name: "id_tipo_prod",
                                            id: 'id_tipo_prod',
                                            flex: 1,
                                            fieldLabel: "Categoría",
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
                                            fieldLabel: 'Venta',
                                            id: 'precio_venta',
                                            emptyText: 'Precio de Venta',
                                            labelCls: 'ficha_label',
                                            name: 'p_venta',
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
                                }, {
                                    xtype: 'container',
                                    layout: 'anchor',
                                    width: 350,
                                    items: [{
                                            xtype: "textfield",
                                            name: 'marca',
                                            id: 'marca',
                                            emptyText: 'Marca del Producto',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            flex: 1,
                                            fieldLabel: "Marca",
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
                                            xtype: "textarea",
                                            name: 'descripcion',
                                            id: 'descripcion',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            fieldLabel: "Descripción",
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
                        },{
                            xtype: 'fieldset',
                            bodyPadding: 5,
                            layout: 'column',
                            items: [ {
                                    xtype: 'fieldcontainer',
                                    layout: 'anchor',
                                    width: 350,
                                    items: [{
                                            xtype: 'numberfield',
                                            fieldLabel: 'Venta Inicial',
                                            id: 'p_venta_inicial',
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
                                        },{
                                            xtype: 'numberfield',
                                            fieldLabel: 'Venta Final',
                                            id: 'p_venta_final',
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
                        }
                    ],
                    dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            id: 'buttons1',
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
                },  Ext.create('SCVS.view.Venta.GrdVenta')
            ]
        });
        this.callParent();
    }
	

});
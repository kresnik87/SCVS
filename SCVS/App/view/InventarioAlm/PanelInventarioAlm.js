
Ext.define('SCVS.view.InventarioAlm.PanelInventarioAlm', {
    extend: 'Ext.Panel',
    alias: 'widget.panelGrdInventarioAlm',
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
        var storeTProd = Ext.create('SCVS.store.TProd.TProd');
        storeTProd.load();
        
        var storeEstado = Ext.create('SCVS.store.Estado.Estado');
        storeEstado.load();
        var storeAlm = Ext.create('SCVS.store.Almacen.Almacen');
        storeAlm.load();
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'FrmDatosCmed',
                    title: 'Filtro de Búsqueda',
                    glyph:'xf00e@FontAwesome',
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
                                            store: storeAlm,
                                            displayField: 'nomb_alm',
                                            valueField: 'id_alm',
                                            name: "id_alm",
                                            id:'id_alm',
                                            flex: 1,
                                            fieldLabel: "Almacen",
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
                                            id: 'nombre_prod_alm',
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

                                        }, {
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            emptyText: 'Seleccione tipo producto',
                                            store: storeTProd,
                                            displayField: 'tipo_prod',
                                            valueField: 'id_tipo_prod',
                                            name: "id_tipo_prod",
                                            id: 'id_tipo_prod_alm',
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
                                            fieldLabel: 'Costo',
                                            id: 'precio_costo_alm',
                                            emptyText: 'Precio de costo',
                                            labelCls: 'ficha_label',
                                            name: 'p_costo',
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
                                            id: 'marca_alm',
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
                                            id: 'descripcion_alm',
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
                                            fieldLabel: 'Costo Inicial',
                                            id: 'p_costo_inicial_alm',
                                            emptyText: 'Precio de costo Inicial',
                                            labelCls: 'ficha_label',
                                            name: 'p_costo',
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
                                        },{
                                            xtype: 'numberfield',
                                            fieldLabel: 'Costo Final',
                                            id: 'p_costo_final_alm',
                                            emptyText: 'Precio de costo final',
                                            labelCls: 'ficha_label',
                                            name: 'p_costo',
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
                            id: 'buttons_alm',
                            border: true,
                            ui: 'footer',
                            items: ['->', {
                                    itemId: 'BtnSearch',
                                    glyph:'xf002@FontAwesome',
                                    text: 'Buscar',
                                    action: 'actSearch'
                                }, {
                                    itemId: 'BtnClean',
                                    glyph:'xf021@FontAwesome',
                                    text: 'Limpiar',
                                    action: 'actClean'
                                }]
                        }],
                }, Ext.create('SCVS.view.InventarioAlm.TabPanelInv')
            ]
        });
        this.callParent();
    }


});
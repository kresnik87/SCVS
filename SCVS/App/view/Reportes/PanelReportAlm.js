
Ext.define('SCVS.view.Reportes.PanelReportAlm', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdReportAlm',
    closable: false,  	
    layout:'fit',
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
        var storeAlm = Ext.create('SCVS.store.Almacen.Almacen');
        storeAlm.load();
        storeTProd.load();
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
                                        id: 'id_alm',
                                        labelCls: 'ficha_label',
                                        store: storeAlm,
                                        displayField: 'nomb_alm',
                                        selectOnFocus: true,
                                        valueField: 'id_alm',
                                        name: "id_alm",
                                        fieldLabel: "Almacenes",
                                        listeners: {
                                            specialkey: function (field, e) {
                                                // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                if (e.getKey() == e.ENTER) {
                                                    var form = me.down('toolbar');
                                                    form.queryById('BtnSearchAlm').focus();
                                                }
                                            }
                                        }
                                     },{
                                            xtype: 'textfield',
                                            id: 'nomb_prod',
                                            name: "nomb_prod",
                                            fieldLabel: 'Producto',
                                            labelCls: 'ficha_label',
                                            emptyText: 'Nombre',
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearchAlm').focus();
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
                                            id: 'id_tipo_prod',
                                            flex: 1,
                                            fieldLabel: "Categoría",
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearchAlm').focus();
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
                                            id: 'p_costo',
                                            emptyText: 'Precio Costo',
                                            labelCls: 'ficha_label',
                                            minValue: '0',
                                            name:'p_costo',
                                            flex: 1,
                                            allowBlank: false,
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearchAlm').focus();
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
                                                        form.queryById('BtnSearchAlm').focus();
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
                                            fieldLabel: 'Costo Inicial',
                                            id: 'p_costo_inicial',
                                            emptyText: 'Precio de Costo Inicial',
                                            labelCls: 'ficha_label',
                                            minValue: '0',
                                            name: 'p_costo_inicial',
                                            flex: 1,
                                            allowBlank: false,
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearchAlm').focus();
                                                    }
                                                }
                                            }
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Costo Final',
                                            id: 'p_costo_final',
                                            emptyText: 'Precio de costo final',
                                            labelCls: 'ficha_label',
                                            name: 'p_costo_final',
                                            minValue: '0',
                                            flex: 1,
                                            allowBlank: false,
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearchAlm').focus();
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
                                            id: 'fecha_inicial',
                                            name: 'fecha_inicial',
                                            labelCls: 'ficha_label',
                                            fieldLabel: "Fecha Inicial",
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearchAlm').focus();
                                                    }
                                                }
                                            }
                                        }, {
                                            xtype: "datefield",
                                            format: 'Y/m/d',
                                            id: 'fecha_final',
                                            name: 'fecha_final',
                                            labelCls: 'ficha_label',
                                            fieldLabel: "Fecha Final",
                                            listeners: {
                                                specialkey: function (field, e) {
                                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                                    if (e.getKey() == e.ENTER) {
                                                        var form = me.down('form');
                                                        form.queryById('BtnSearchAlm').focus();
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
                                    itemId: 'BtnSearchAlm',
                                    glyph:'xf002@FontAwesome',
                                    text: 'Buscar',
                                    action: 'actSearch'
                                }, {
                                    itemId: 'BtnCleanAlm',
                                     glyph:'xf021@FontAwesome',
                                    text: 'Limpiar',
                                    action: 'actClean'
                                }]
                        }]
                }, Ext.create('SCVS.view.Reportes.GrdReportAlm')
            ]
        });
        this.callParent();
    }
});
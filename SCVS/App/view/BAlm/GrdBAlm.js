Ext.define('SCVS.view.BAlm.GrdBAlm', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridBAlm',
    store: 'BAlm.BAlm',
    loadMask: true,
    autoScroll: true,
    layout: 'fit',
    stripeRows: true,
    requires: [
        'Ext.ux.ProgressBarPager'
    ],
    border: true,
    viewConfig: {
        plugins: {
            ddGroup: 'grid-to-form',
            ptype: 'gridviewdragdrop',
            enableDrop: false
        }
    },
    initComponent: function () {
        var me = this;
        var storeAlm = Ext.create('SCVS.store.Almacen.Almacen');
        storeAlm.load();
        Ext.applyIf(me, {
            columns: [//Definimos las Columnas del Grid y las Columnas de la Tabla
                {
                    header: "Id",
                    dataIndex: "id_inv_alm",
                    width: 50,
                    hidden: true
                },
                {
                    header: "id_alm",
                    dataIndex: "id_alm",
                    width: 50,
                    hidden: true
                },
                {
                    header: "id_prod",
                    dataIndex: "id_prod",
                    width: 50,
                    hidden: true
                },
                {
                    header: "Producto",
                    dataIndex: "nomb_prod",
                    flex: 1
                },
                {
                    header: "Almacen",
                    dataIndex: "nomb_alm",
                    flex: 1
                },
                {
                    header: "Cantidad",
                    dataIndex: "cantidad",
                    flex: 1
                },
                {
                    header: "Estado",
                    dataIndex: "estado",
                    flex: 1
                },
                {
                    header: "Precio Costo",
                    dataIndex: "p_costo",
                    renderer: 'usMoney',
                    flex: 1
                },
                {
                    header: "Importe",
                    dataIndex: "importe",
                    renderer: 'usMoney',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    dock: 'top',
                    ui: 'footer',
                    xtype: 'toolbar',
                    id: 'search-panel',
                    layout: 'hbox',
                    items: [{
                            xtype: "combobox",
                            queryMode: 'local',
                            id: 'alm',
                            labelCls: 'ficha_label',
                            store: storeAlm,
                            width: 250,
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
                                        form.queryById('BtnSearch').focus();
                                    }
                                }
                            }
                        }, {
                            xtype: 'tbseparator'
                        },{
                    xtype : "textfield",
                    id:'prod',
                    name : 'nomb_prod',
                    labelCls:'ficha_label',
                    fieldLabel : "Producto",
                    listeners: {
                        specialkey: function(field, e){
                            // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                            // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                            if (e.getKey() == e.ENTER) {
                                var form = me.down('toolbar');
                                form.queryById('BtnSearch').focus();
                            }
                        }
                    }
                
                }, {
                            xtype: "button",
                            itemId: 'BtnSearch',
                            glyph:'xf002@FontAwesome',
                            action: 'actSearch'
                        }]
                }, {
                    xtype: 'pagingtoolbar', //Barra Paginadora al fondo del Grid
                    dock: 'bottom',
                    displayInfo: true,
                    plugins: new Ext.ux.ProgressBarPager(),
                    width: 100,
                    displayMsg: 'Paginas {0}-{1} de {2}',
                    emptyMsg: 'No hay resultados',
                    store: me.store
                }

            ],
        });

        me.callParent(arguments);
        me.store.load({//Cargamos el Store, al crear la ventana
            params: {
                start: 0,
                limit: 100 //Muestra hasta 100 Registros Maximo
            }
        });

    }


});























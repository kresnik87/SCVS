Ext.define('SCVS.view.BProd.GrdBProd', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridBProd',
    store: 'BProd.BProd',
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

        Ext.applyIf(me, {
            columns: [
                {header: "Id Prod", dataIndex: "id_prod", width: 105},
                {header: "Producto", width: 90, dataIndex: "nomb_prod", flex: 1},
                {header: "Descripción", width: 150, dataIndex: "descripcion", flex: 1},
                {header: "P. Costo", width: 50, dataIndex: "p_costo", renderer: 'usMoney', flex: 1}


            ],
            dockedItems: [
                {
                    dock: 'top',
                    ui: 'header',
                    xtype: 'toolbar',
                    id: 'search-panel',
                    layout: 'hbox',
                    items: [{
                            xtype: "textfield",
                            name: 'id_prod',
                            hidden: true
                        }, {
                            xtype: "textfield",
                            id: 'nomb_prod',
                            name: 'nomb_prod',
                            listeners: {
                                specialkey: function (field, e) {
                                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                    if (e.getKey() == e.ENTER) {
                                        var form = me.down('toolbar');
                                        form.queryById('BtnSearch').focus();
                                    }
                                }}
                            //fieldLabel : "Producto"
                        }, {xtype: 'tbseparator'}, {
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























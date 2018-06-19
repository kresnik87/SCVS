Ext.define('SCVS.view.Reportes.GrdReportArea', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridReportArea',
    store: 'Reportes.ReportArea',
    title: 'Entrada a las Areas de Venta',
    border: false,
    glyph:'xf201@FontAwesome',
     height: 560,
    width: 950,
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#delete').setDisabled(!records.length);				//Se Habilita el Boton Delete

        }
    },
    initComponent: function () {
        var me = this;
       var storeArea=Ext.create('SCVS.store.Area.Area'); 
        storeArea.load();
        function change(val) {
            if (val == 0) {
                return '<span style="color:green;">Compra Directa</span>';
            } else if (val == 1) {
                return '<span style="color:red;">Modernización</span>';
            }
            return val;
        }
        function change2(val) {
            if (val == 'Entrada') {
                return '<span style="color:green;">' + val + '</span>';
            } else if (val == 'Salida') {
                return '<span style="color:red;">' + val + '</span>';
            } else if (val == 'Venta') {
                return '<span style="color:orange;">' + val + '</span>';
            } else {
                return '<span style="color:pink;">' + val + '</span>';
            }
            return val;
        }
        function change_image(val) {

            return '<img width="32" height="32" src="' + BASE_URL1 + '/uploads/thumbs/' + val + '" />';

        }
        Ext.applyIf(me, {
            columns: [//Definimos las Columnas del Grid y las Columnas de la Tabla
                {
                    header: "Id",
                    dataIndex: "id_log",
                    width: 50,
                    hidden: true
                },
                {
                    header: "Mov",
                    dataIndex: "movimiento",
                    flex: 1,
                    renderer: change2
                },
                {
                    header: "Producto",
                    dataIndex: "nomb_prod",
                    flex: 1
                },
                {
                    header: "Cantidad",
                    dataIndex: "cant",
                    flex: 1
                },
                {
                    header: "Costo",
                    dataIndex: "p_costo",
                    renderer: 'usMoney',
                    flex: 1

                },
                {
                    header: "Importe Venta",
                    dataIndex: "importe",
                    renderer: 'usMoney',
                    flex: 1

                },
                {
                    header: "Estado Producto",
                    dataIndex: "estado",
                    flex: 1
                },
              
                {
                    header: "Fecha",
                    dataIndex: "fecha",
                    flex: 1
                },
                {
                    header: "Realizado Por:",
                    dataIndex: "nombre",
                    flex: 1
                },
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                       {
                            itemId: 'delete',
                            text: 'Borrar',
                            glyph:'xf068@FontAwesome',
                            disabled: true,
                            action: 'actBorrar' //Accion manejado por el Controlador
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar', //Barra Paginadora al fondo del Grid
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.store
                }
            ],
            features: [{
                    id: 'group',
                    ftype: 'groupingsummary',
                    groupHeaderTpl: '{name}',
                    hideGroupedHeader: true,
                    enableGroupingMenu: false
                }]

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




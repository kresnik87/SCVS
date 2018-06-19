Ext.define('SCVS.view.Reportes.GrdReportIngresos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridReportIngresos',
    store: 'Reportes.ReportIngresos',
    title: 'Estado de Ingresos Totales',
    border: false,
    glyph:'xf201@FontAwesome',
     height: 560,
    width: 500,
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#delete').setDisabled(!records.length);				//Se Habilita el Boton Delete

        }
    },
    initComponent: function () {
        var me = this;
       
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
       
        Ext.applyIf(me, {
            columns: [//Definimos las Columnas del Grid y las Columnas de la Tabla
               
                {
                    header: "Total de Venta",
                    dataIndex: "total_ventas",
                    renderer: 'usMoney',
                    flex: 1

                },
				 {
                    header: "Total Ventas por Cantidad",
                    dataIndex: "total_ventas_cant",
                    renderer: 'usMoney',
                    flex: 1

                },
				 {
                    header: "Ingresos por Servicio",
                    dataIndex: "total_servicio",
                    renderer: 'usMoney',
                    flex: 1

                },{
                    header: "Total de Ingresos",
                    dataIndex: "total_ingresos",
                    renderer: 'usMoney',
                    flex: 1

                }

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




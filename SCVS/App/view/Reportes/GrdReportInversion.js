Ext.define('SCVS.view.Reportes.GrdReportInversion', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridReportInversion',
    store: 'Reportes.ReportInversion',
    title: 'Estado de Capital Invertido',
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
                    header: "Capital Invertido en Almacen",
                    dataIndex: "importe_alm",
                    renderer: 'usMoney',
                    flex: 1

                },
				 {
                    header: "Capital Invertido en Area Venta",
                    dataIndex: "importe_area",
                    renderer: 'usMoney',
                    flex: 1

                },
				 {
                    header: "Capital Total",
                    dataIndex: "total_invertido",
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




Ext.define('SCVS.view.Reportes.GrdReportUtilidades', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridReportUtilidades',
    store: 'Reportes.ReportUtilidades',
    title: 'Estado de Utilidades Totales',
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
       var store = Ext.create('Ext.data.Store', {
            fields: ['periodos', 'valor'],
            data: [
                {
                    "periodos": "Diario",
                    "valor": "1"
                },
                {
                    "periodos": "Mensual",
                    "valor": "2"
                },
				{
                    "periodos": "Anual",
                    "valor": "3"
                }
				
            ]
        });
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
                    header: "Fecha",
                    dataIndex: "fecha",
                    flex: 1

                },
				{
                    header: "Utilidades de las Venta",
                    dataIndex: "util_ventas",
                    renderer: 'usMoney',
                    flex: 1

                },
				 {
                    header: "Utilidades Ventas por Cantidad",
                    dataIndex: "util_ventas_cant",
                    renderer: 'usMoney',
                    flex: 1

                },
				 {
                    header: "Utilidades por Servicio",
                    dataIndex: "total_servicio",
                    renderer: 'usMoney',
                    flex: 1

                },{
                    header: "Total de Utilidades",
                    dataIndex: "total_utilidad",
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
                            xtype: "combobox",
                            queryMode: 'local',
                            id: 'periodo',
                            labelCls: 'ficha_label',
                            store: store,
                            width: 250,
                            displayField: 'periodos',
                            selectOnFocus: true,
                            valueField: 'valor',
                            name: "valor",
                            fieldLabel: "Periodos",
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
                        },{
                            xtype: 'tbseparator'
                        }, {
                            xtype: "button",
                            itemId: 'BtnSearch',
                            glyph:'xf002@FontAwesome',
                            action: 'actSearch'
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




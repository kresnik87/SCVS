Ext.define('SCVS.view.InventarioAlm.GrdExistAlm', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridExistAlm',
    store: 'InventarioAlm.ExistenciaAlm',
    title: 'Existencia de Inventario Almacen',
    border: false,
    glyph:'xf022@FontAwesome',
     height: 560,
    width: 950,
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#delete').setDisabled(!records.length);              //Se Habilita el Boton Delete

        }
    },
    initComponent: function () {
        var me = this;
      
       
        function change_image(val) {

            return '<img width="32" height="32" src="' + BASE_URL1 + '/uploads/thumbs/' + val + '" />';

        }
        
        Ext.applyIf(me, {
            columns: [//Definimos las Columnas del Grid y las Columnas de la Tabla
                {
                    header: "Id",
                    dataIndex: "reg_ex_alm",
                    width: 50,
                    hidden: true
                },
              
                {
                    header: "Producto",
                    dataIndex: "nomb_prod",
                    flex: 1
                },
                {
                    header: "Existencia",
                    dataIndex: "existencia",
                    flex: 1
                },
                 {
                    header: "Costo",
                    dataIndex: "p_costo",
                    renderer: 'usMoney',
                    flex: 1

                },
                {
                    header: "Importe",
                    dataIndex: "importe",
                    renderer: function(v,params,record){
                      return Ext.util.Format.usMoney(record.data.existencia *record.data.p_costo); 
                    },
                   summaryType: 'sum',
                    summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '($' + value + ' )' : '($1)');
                },
                    flex: 1

                },
              
                {
                    header: "Almacen",
                    dataIndex: "nomb_alm",
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




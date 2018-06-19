Ext.define('SCVS.view.Servicio.GrdServ', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridServ',
    store: 'Servicio.Serv',
    title: 'Listado de Servicios',
    border: false,
    iconCls: 'grid',
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#delete').setDisabled(!records.length);				//Se Habilita el Boton Delete
            this.down('#edit').setDisabled(!records.length);
        }
    },
    initComponent: function () {
        var me = this;
        function change(val) {
            if (val == Fijo) {
                return '<span style="color:green;">Fijo</span>';
            } else if (val == Variable) {
                return '<span style="color:red;">Variable</span>';
            }
            return val;
        }
        Ext.applyIf(me, {
            columns: [//Definimos las Columnas del Grid y las Columnas de la Tabla
                {header: "Id", dataIndex: "id_serv", width: 50, hidden: true},
                {header: "Servicio", dataIndex: "nomb_servicio", flex: 1},
                {header: "Descripcion", dataIndex: "descripcion", flex: 1},
                {header: "Precio Costo", dataIndex: "p_costo", flex: 1, renderer: 'usMoney'},
                {header: "Precio Venta", dataIndex: "p_venta", flex: 1, renderer: 'usMoney'},
                {header: "Tipo de Costo", dataIndex: "tipo_costo", flex: 1}

            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            itemId: 'Add',
                            text: 'Agregar',
                            iconCls: 'add',
                            action: 'actAgregar'//Accion manejado por el Controlador
                        }, '-', {
                            itemId: 'edit',
                            text: 'Editar',
                            iconCls: 'edit',
                            disabled: true,
                            scope: this,
                            action: 'actEditar'
                                    //handler:this.OnEditar
                        }, '-', {
                            itemId: 'delete',
                            text: 'Borrar',
                            iconCls: 'delete',
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





















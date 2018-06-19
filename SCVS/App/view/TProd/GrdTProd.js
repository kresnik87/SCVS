Ext.define('SCVS.view.TProd.GrdTProd', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridTProd',
    store: 'TProd.TProd',
    title: 'Listado de Tipos de Productos',
    border: false,
    iconCls: 'grid',
    height: 560,
    width: 550,
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#delete').setDisabled(!records.length);				//Se Habilita el Boton Delete
            this.down('#edit').setDisabled(!records.length);
        }
    },
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            columns: [//Definimos las Columnas del Grid y las Columnas de la Tabla
                {header: "Id", dataIndex: "id_tipo_prod", width: 50, hidden: true},
                {header: "Tipo de Producto", dataIndex: "tipo_prod", flex: 1}

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























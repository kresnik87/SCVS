Ext.define('SCVS.view.Productos.GrdProductosRep',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridProductosRep',
    store: 'Productos.ProductosRep',
    title: 'Productos de Reparación',
    border: false,
    iconCls: 'grid',
    layout:'fit',
        listeners: {
        'selectionchange': function(view, records) {
            this.down('#delete').setDisabled(!records.length);				//Se Habilita el Boton Delete
            this.down('#edit').setDisabled(!records.length);
        }
    },
    initComponent: function() {
        var me = this;
        
       
		
        Ext.applyIf(me, {
            columns : [//Definimos las Columnas del Grid y las Columnas de la Tabla
            {
                header:"Id",
                dataIndex:"id_prod",
                width:50,
                hidden:true
            },

            {
                header:"Producto",
                dataIndex:"nomb_prod",
                flex:1
            },
            {
                header:"Descripción",
                dataIndex:"descripcion",
                flex:1
            },
            {
                header:"P. Costo",
                dataIndex:"p_costo",
                renderer : 'usMoney',
                flex:1
            },
            {
                header:"Categoría",
                dataIndex:"tipo_prod",
                flex:1
            },
            ],
            dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                ui:'footer',
                items: [
                {
                    itemId: 'Add',
                    text: 'Agregar',
                    iconCls: 'add-prod',
                    action:'actAgregarElab'//Accion manejado por el Controlador
                },'-',{
                    itemId: 'edit',
                    text: 'Editar',
                    iconCls: 'edit-prod',
                    disabled: true,
                    scope: this,
                    action:'actEditarElab'
                //handler:this.OnEditar
                },'-',{
                    itemId: 'delete',
                    text: 'Borrar',
                    iconCls: 'delete-prod',
                    disabled: true,
                    action:'actBorrarElab' //Accion manejado por el Controlador
                },{
                    xtype: 'tbseparator'
                },{
                    xtype : "textfield",
                    id:'prod_elab',
                    name : 'nomb_prod',
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
                //fieldLabel : "Producto"
                },{
                    xtype: 'tbseparator'
                },{
                    xtype : "button",				
                    itemId: 'BtnSearch',						
                    iconCls: 'search',						
                    action: 'actSearch'
                }										
                ]
            },
            {
                xtype: 'pagingtoolbar',//Barra Paginadora al fondo del Grid
                dock: 'bottom',
                displayInfo: true,
                store:me.store
            }
            ]
		
        });
        
        me.callParent(arguments);
        me.store.load({//Cargamos el Store, al crear la ventana
            params:{
                start:0,
                limit: 100 //Muestra hasta 100 Registros Maximo
            }
        });
					
    }
	
	
});
























/*{
                    xtype: 'actioncolumn',
					width: 60,
					align: 'center',
					margin:'0 0 3 3',
					itemId:'ActColumGrdListaClientes',
                    items: [
                        {
						    icon   : 'resources/imagenes/add.png',
                            tooltip: 'Agregar',
							width:10
                        },
                        {
                            icon   : 'resources/imagenes/delete.png',
                            tooltip: 'Borrar'
                        }
                    ]
           }*/

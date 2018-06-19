Ext.define('SCVS.view.Almacen.GrdAlmacen',{
	extend: 'Ext.grid.Panel',
	alias:'widget.gridAlmacen',
	store: 'Almacen.Almacen',
	title: 'Listado de Almacen',
	border: false,
	glyph:'xf022@FontAwesome',
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
				   {header:"Id",dataIndex:"id_alm",width:50,hidden:true},
				   {header:"Almacen",dataIndex:"nomb_alm",flex:1}
                                   
				   
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
						glyph:'xf055@FontAwesome',
						action:'actAgregar'//Accion manejado por el Controlador
						},'-',{
						itemId: 'edit',
						text: 'Editar',
						glyph:'xf0e2@FontAwesome',
						disabled: true,
						scope: this,
						action:'actEditar'
						//handler:this.OnEditar
						},'-',{
						itemId: 'delete',
						text: 'Borrar',
						glyph:'xf068@FontAwesome',
						disabled: true,
						action:'actBorrar' //Accion manejado por el Controlador
						}								
					]
				},
				{
					xtype: 'pagingtoolbar',//Barra Paginadora al fondo del Grid
					dock: 'bottom',
					displayInfo: true,
					store:me.store
				}
			],
		
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

Ext.define('SCVS.view.Productos.GrdProductos',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridProductos',
    store: 'Productos.Productos',
    title: 'Productos de Venta',
    border: false,
    glyph:'xf022@FontAwesome',
    layout:'fit',
    listeners: {
        'selectionchange': function(view, records) {
            this.down('#delete').setDisabled(!records.length);				//Se Habilita el Boton Delete
            this.down('#edit').setDisabled(!records.length);
        }
    },
    initComponent: function() {
        var me = this;
        function change(val) {
            if (val ==1) {
                return '<span style="color:green;">Fijo</span>';
            } else if (val ==2) {
                return '<span style="color:red;">Variable</span>';
            }
            return val;
        }
        function change_proc(val) {
            if (val ==1) {
                return '<span style="color:green;">Si</span>';
            } else if (val ==0) {
                return '<span style="color:blue;">No</span>';
            }
            return val;
        }
        function change_image(val) {
          
          return '<img width="32" height="32" src="'+BASE_URL1+'/uploads/thumbs/'+val+'" />';
            
        }
		
        Ext.applyIf(me, {
            columns : [//Definimos las Columnas del Grid y las Columnas de la Tabla
            {
                header:"Id",
                dataIndex:"id_prod",
                width:50,
                hidden:true
            },
            {
                header:"Imagen",
                dataIndex:"imagen",
                flex:1,
                renderer:change_image
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
            },{
                header:"Marca",
                dataIndex:"marca",
                flex:1
            }
				   
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






















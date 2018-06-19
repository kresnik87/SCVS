Ext.define('SCVS.view.InventarioAlm.GrdInventarioAlm',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridInventarioAlm',
    store: 'InventarioAlm.InventarioAlm',
    title: 'Inventario de los Almacenes',
    border: false,
    glyph:'xf022@FontAwesome',
    layout:'fit',
    listeners: {
        'selectionchange': function(view, records) {
            this.down('#delete').setDisabled(!records.length);	
           this.down('#update').setDisabled(!records.length);
			this.down('#venta').setDisabled(!records.length);
           
           
        }
    },
    initComponent: function() {
        var me = this;
	var storeAlm=Ext.create('SCVS.store.Almacen.Almacen'); 
        storeAlm.load();
        
        function change2(val) {
             return '<span style="color:Green;">'+val+'</span>';
            return val;
        }
         function change_image(val) {
          
          return '<i class="ion ion-cash"></i>';
            
        }
        Ext.applyIf(me, {
            columns : [//Definimos las Columnas del Grid y las Columnas de la Tabla
            {
                header:"Id",
                dataIndex:"id_inv_alm",
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
                header:"id_prod",
                dataIndex:"id_prod",
                width:50,
                hidden:true
            },

            {
                header:"Producto",
                dataIndex:"nomb_prod",
                summaryType: 'count',
                renderer:change2,
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '(' + value + ' Productos)' : '(1 Producto)');
                },
                flex:1
            },

            {
                header:"Almacen",
                dataIndex:"nomb_alm",
                flex:1
            },
            {
                header:"Cantidad",
                dataIndex:"cantidad",
                flex:1
            },
            
            {
                header:"Precio Costo",
                dataIndex:"p_costo",
                renderer : 'usMoney',
                flex:1
            },
            {
                header:"Importe",
                dataIndex:"importe",
                renderer : 'usMoney',
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '($' + value + ' )' : '($1)');
                },
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
                    itemId: 'update',
                    text: 'Ajuste Inv',
                    glyph:'xf0b1@FontAwesome',
                    disabled: true,
                    action:'actUpdate' //Accion manejado por el Controlador
                },'-',{
                    itemId: 'venta',
                    text: 'Venta Mayorista',
                    glyph:'xf0d6@FontAwesome',
                    disabled: true,
                    action:'actVentxCant' //Accion manejado por el Controlador
                },'-',{
                    itemId: 'delete',
                    text: 'Borrar',
                    glyph:'xf068@FontAwesome',
                    disabled: true,
                    action:'actBorrar' //Accion manejado por el Controlador
                },{xtype:'exporterbutton'}						
                ]
            },
            {
                xtype: 'pagingtoolbar',//Barra Paginadora al fondo del Grid
                dock: 'bottom',
                displayInfo: true,
                store:me.store
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
            params:{
                start:0,
                limit: 100 //Muestra hasta 100 Registros Maximo
            }
        });
					
    }
	
	
});
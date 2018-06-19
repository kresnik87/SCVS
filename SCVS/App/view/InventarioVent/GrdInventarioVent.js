Ext.define('SCVS.view.InventarioVent.GrdInventarioVent',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridInventarioVent',
    store: 'InventarioVent.InventarioVent',
    title: 'Inventario de las Areas de Venta',
    border: false,
    autoScroll:true,
    height: 560,
    width: 900,
    glyph:'xf022@FontAwesome',
    listeners: {
        'selectionchange': function(view, records) {
            this.down('#delete').setDisabled(!records.length);	
             this.down('#transf').setDisabled(!records.length);	
             this.down('#update').setDisabled(!records.length);	
             this.down('#traslado').setDisabled(!records.length); 
        }
    },
    initComponent: function() {
        var me = this;
	
            function change(val) {
            if (val ==0) {
                return '<span style="color:green;">Compra Directa</span>';
            } else if (val ==1) {
                return '<span style="color:red;">Modernización</span>';
            }
            return val;
        }
        function change2(val) {
             return '<span style="color:blue;">'+val+'</span>';
            return val;
        }
         function change_image(val) {
          
          return '<img width="32" height="32" src="'+BASE_URL1+'/uploads/thumbs/'+val+'" />';
            
        }
        Ext.applyIf(me, {
            columns : [//Definimos las Columnas del Grid y las Columnas de la Tabla
            {
                header:"Id",
                dataIndex:"id_inv_area",
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
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '(' + value + ' Productos)' : '(1 Producto)');
                },
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
                header:"Precio Venta",
                dataIndex:"p_venta",
                renderer : 'usMoney',
                flex:1
            },
             {
                header:"Importe Costo",
                dataIndex:"importe_costo",
                renderer : 'usMoney',
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '($' + value + ' )' : '($1)');
                },
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
                    itemId: 'delete',
                    text: 'Borrar',
                    glyph:'xf068@FontAwesome',
                    disabled: true,
                    action:'actBorrar' //Accion manejado por el Controlador
                },'-',{
                    itemId: 'transf',
                    text: 'Dar Baja',
                    disabled: true,
                    action:'actBaja' 
                },'-',{
                    itemId: 'traslado',
                    text: 'Traslado',
                    glyph:'xf0ec@FontAwesome',
                    disabled: true,
                    action:'actTraslado' 
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
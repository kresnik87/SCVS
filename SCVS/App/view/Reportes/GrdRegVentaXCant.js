Ext.define('SCVS.view.Reportes.GrdRegVentaXCant',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridRegVentaXCant',
    store: 'InventarioAlm.RegVentaXCant',
    title: 'Registro de Ventas X Cantidad',
    border: false,
    height: 560,
    width: 950,
    glyph:'xf201@FontAwesome',
    listeners: {
        'selectionchange': function(view, records) {
            this.down('#delete').setDisabled(!records.length);				
            
        }
    },
    initComponent: function() {
        var me = this;
          function change_image(val) {
          
          return '<img width="32" height="32" src="'+BASE_URL1+'/uploads/thumbs/'+val+'" />';
            
        }
        Ext.applyIf(me, {
            columns : [
            {
                header:"Id",
                dataIndex:"id_reg",
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
                header:"Cantidad",
                dataIndex:"cant",
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
                header:"Importe Venta",
                dataIndex:"importe",
                renderer : 'usMoney',
                flex:1,
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '($' + value + ' )' : '($1)');
                }
            },
			{
                header:"Importe Costo",
                dataIndex:"importe_costo",
                renderer : 'usMoney',
                flex:1,
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '($' + value + ' )' : '($1)');
                }
            },
			{
                header:"Utilidad",
                dataIndex:"utilidad",
                renderer : 'usMoney',
                flex:1,
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '($' + value + ' )' : '($1)');
                }
            },
			
            {
                header:"Fecha",
                dataIndex:"fecha",
                flex:1
            },
            {
                header:"Cliente:",
                dataIndex:"nomb_cliente",
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




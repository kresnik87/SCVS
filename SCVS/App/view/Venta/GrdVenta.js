Ext.define('SCVS.view.Venta.GrdVenta',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridVenta',
    store: 'Venta.Venta',
    title: 'Listado de Productos en el Area de Venta',
    border: false,
    autoScroll:true,
    height: 560,
    width: 900,
    iconCls: 'grid',
    listeners: {
        'selectionchange': function(view, records) {
             this.down('#detalles').setDisabled(!records.length);	
             this.down('#venta').setDisabled(!records.length);	
        }
    },
    initComponent: function() {
        var me = this;
	var storeArea=Ext.create('SCVS.store.Area.Area'); 
        storeArea.load();
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
                header:"Costo",
                dataIndex:"p_costo",
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
                header:"Precio Venta",
                dataIndex:"p_venta",
                renderer : 'usMoney',
                flex:1
            },
             {
                header:"P. Venta x Cantidad",
                dataIndex:"p_venta_cantidad",
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
                    itemId: 'detalles',
                    text: 'Detalles Producto',
                    disabled: true,
                    iconCls: 'detalles',
                    action:'actDetalles'//Accion manejado por el Controlador
                },'-',{
                    itemId: 'venta',
                    text: 'Realizar Venta',
                    iconCls: 'venta',
                    disabled: true,
                    action:'actVenta' 
                },'-',{
                    itemId: 'servicio',
                    text: 'Realizar Servicio',
                    iconCls: 'servicio',
                    action:'actServ' 
                },		
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
Ext.define('SCVS.view.Venta.GrdRegVenta',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridRegVenta',
    store: 'Venta.RegVenta',
    title: 'Registro de Ventas',
    border: false,
    height: 560,
    width: 900,
    iconCls: 'grid',
    listeners: {
        'selectionchange': function(view, records) {
            this.down('#delete').setDisabled(!records.length);				
            
        }
    },
    initComponent: function() {
        var me = this;
        var storeArea=Ext.create('SCVS.store.Area.Area'); 
        storeArea.load();
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
                header:"Precio",
                dataIndex:"p_venta",
                flex:1
            },
            {
                header:"Importe",
                dataIndex:"importe",
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
                },
                hidden:true
            },
            {
                header:"Area de Venta",
                dataIndex:"nomb_area",
                flex:1
            },
            {
                header:"Fecha",
                dataIndex:"fecha",
                flex:1
            },
            {
                header:"Realizado Por:",
                dataIndex:"nombre",
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
                    xtype : "combobox",
                    queryMode: 'local',
                    id:'area',
                    labelCls:'ficha_label',
                    store:storeArea,
                    width: 250,
                    displayField:'nomb_area',
                    selectOnFocus:true,
                    valueField:'id_area',													
                    name : "id_area",
                    fieldLabel : "Areas de Venta",
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
                },{
                    xtype: 'tbseparator'
                },{
                    xtype : "button",				
                    itemId: 'BtnSearch',						
                    iconCls: 'search1',						
                    action: 'actSearch'
                },'-',{
                    itemId: 'delete',
                    text: 'Borrar',
                    iconCls: 'delete',
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




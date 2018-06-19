Ext.define('SCVS.view.InventarioAlm.GrdInventarioMB',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridInventarioMB',
    store: 'InventarioAlm.InventarioMB',
    title: 'Inventario de Medios Básicos',
    border: false,
    autoScroll:true,
    height: 560,
    width: 500,
    iconCls: 'grid',
    listeners: {
        'selectionchange': function(view, records) {
            this.down('#deleteInv').setDisabled(!records.length);				//Se Habilita el Boton Delete
            
        }
    },
    initComponent: function() {
        var me = this;
	var storeAlm=Ext.create('SCVS.store.Almacen.Almacen'); 
        storeAlm.load();
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
                flex:1
            },
            {
                header:"Estado",
                dataIndex:"estado",
                flex:1
            },
            {
                header:"Fecha Entrada",
                dataIndex:"fecha_entrada",
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
                    itemId: 'AddInv',
                    text: 'Agregar',
                    iconCls: 'add',
                    action:'actAgregar'//Accion manejado por el Controlador
                },'-',{
                    itemId: 'deleteInv',
                    text: 'Borrar',
                    iconCls: 'delete',
                    disabled: true,
                    action:'actBorrarMB' //Accion manejado por el Controlador
                },'-',{
                    xtype : "combobox",
                    queryMode: 'local',
                    id:'almMB',
                    labelCls:'ficha_label',
                    store:storeAlm,
                    width: 250,
                    displayField:'nomb_alm',
                    selectOnFocus:true,
                    valueField:'id_alm',													
                    name : "id_alm",
                    fieldLabel : "Almacenes",
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
Ext.define('SCVS.view.Servicio.GrdRegServ',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridRegServ',
    store: 'Servicio.RegServicio',
    title: 'Registro de Servicio',
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
          
        Ext.applyIf(me, {
            columns : [
            {
                header:"Id",
                dataIndex:"id_reg_serv",
                width:50,
                hidden:true
            },
             
            {
                header:"Servicio",
                dataIndex:"nomb_servicio",
                flex:1
            },
            {
                header:"Cantidad",
                dataIndex:"cant",
                flex:1
            },
            {
                header:"Precio",
                dataIndex:"precio",
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
                    itemId: 'servicio',
                    text: 'Realizar Servicio',
                    iconCls: 'servicio',
                    action:'actServ' 
                },{
                    xtype: 'tbseparator'
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




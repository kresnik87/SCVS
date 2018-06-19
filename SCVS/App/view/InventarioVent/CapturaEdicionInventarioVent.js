Ext.define('SCVS.view.InventarioVent.CapturaEdicionInventarioVent', {
    extend: 'Ext.window.Window',
    alias:'widget.FormAddInvVent',
    height: 550,
    width: 700,
    resizable:false,
    bodyPadding: '10 10 10 10',	
    autoShow: true,
    glyph:'xf0d1@FontAwesome',
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: THEME
    },
    closable: false,
    title: 'Agregar/Modificar Inventario de Areas de Venta',
    modal: true,
    initComponent: function() {
        var me = this;
        
        var storeArea=Ext.create('SCVS.store.Area.Area'); 
        storeArea.load();
        
        Ext.applyIf(me, {
            items: [
            {	
                xtype: 'form',
                id: 'FormAddInvVent',
                bodyPadding: '5 5 5 5',
                bodyStyle: {
                   background: THEME
                },
                width: 600,
                fieldDefaults: {
                    labelAlign: 'top',
                    msgTarget: 'side'
                },
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'container',
                    layout:'hbox',
                    items:[{
                        xtype: 'container',
                        flex: 1,
                        border:false,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            xtype : "textfield", 
                            name :'id_prod',
                            hidden:true
                        },
                        {
                            xtype : "textfield",
                            name :'id_inv_area',
                            hidden:true
                        },
                        {
                            xtype : "textfield",
                            id:'inv_alm',
                            name :'id_inv_alm',
                            hidden:true
                        },
                        {
                            xtype : "textfield",
                            name :'tipo_compra',
                            hidden:true
                        },
                         {
                            xtype : "textfield",
                            name :'p_costo',
                            hidden:true
                        },
                         {
                            xtype : "textfield",
                            name :'id_estado',
                            hidden:true
                        },
                        {
                            fieldLabel: 'Producto',
                            labelCls:'ficha_label',
                            disabled:true,
                            name: 'nomb_prod',
                            anchor:'85%'
                        },{
                            xtype : "datefield",
                            format: 'Y/m/d',
                            labelCls:'ficha_label',
                            name : 'fecha',
                            allowBlank:false,
                            fieldLabel : "Fecha"
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            xtype: 'numberfield',
                            fieldLabel: 'Cantidad',
                            labelCls:'ficha_label',
                            name:'cantidad',
                            minValue:'0',
                            flex: 1,
                            allowBlank: false
                        },{
                            xtype : "combobox",
                            queryMode: 'local',
                            labelCls:'ficha_label',
                            allowBlank:false,
                            store:storeArea,
                            displayField:'nomb_area',
                            valueField:'id_area',													
                            name : "id_area",
                            flex: 1,
                            fieldLabel : "Areas de Venta"    
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        items: [{
                            xtype: 'numberfield',
                            fieldLabel: 'P. Venta',
                            labelCls:'ficha_label',
                            name:'p_venta',
                            id:'p_venta',
                            allowBlank: false,
                            minValue:'0',
                            flex: 1
                        },{
                            xtype: 'numberfield',
                            fieldLabel: 'P. Venta x Cant',
                            labelCls:'ficha_label',
                            name:'p_venta_cantidad',
                            minValue:'0',
                            flex: 1
                        },{
                            xtype: 'numberfield',
                            fieldLabel: 'Importe',
                            id:'importe',
                            labelCls:'ficha_label',
                            name:'importe',
                            minValue:'0',                                              
                            hidden:'true',
                            flex: 1
                        }]
                    }]
                },{
                    xtype:'tabpanel',
                    plain:true,
                    activeTab: 0,
                    items:[{
                        title:'Listado de Productos en los Almacenes',
                        items: [Ext.create('SCVS.view.BAlm.PanelBAlm')]
                    }]
                }],
                dockedItems : [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id:'buttons',
                    ui: 'footer',
                    items: ['->',{
                        id: 'BtnAdd',
                        glyph:'xf058@FontAwesome',
                        disabled:true,
                        formBind:true,
                        text: 'Agregar',
                        action: 'actAddInv'
                    },{
							
                        text: 'Cancelar',
                        glyph:'xf057@FontAwesome',
                        scope: this,
                        handler: this.close
                    }]
                }]
            }]
        }); 
		   
        me.callParent(arguments);
    },
   
    afterFirstLayout: function(){
        this.callParent(arguments);
        var form = this.down('form'),
        body = form.body;
				
        this.formPanelDropTarget = new Ext.dd.DropTarget(body, {
            ddGroup: 'grid-to-form',
            notifyEnter: function(ddSource, e, data) {
                //Add some flare to invite drop.
                body.stopAnimation();
                body.highlight();
            },
            notifyDrop: function(ddSource, e, data) {
                // Reference the record (single selection) for readability
                var selectedRecord = ddSource.dragData.records[0];
                form.getForm().loadRecord(selectedRecord);
                return true;
            }
        });
    }
    
});	
						
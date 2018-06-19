Ext.define('SCVS.view.InventarioAlm.CapturaEdicionInventarioMB', {
    extend: 'Ext.window.Window',
    alias:'widget.FormAddEdicionInventarioMB',
    height: 530,
    width: 700,
    resizable:false,
    bodyPadding: '10 10 10 10',	
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
         background: THEME
    },
    closable: false,
    title: 'Agregar/Modificar Inventario Medios Básicos',
    modal: true,
    initComponent: function() {
        var me = this;
        var storeAlm=Ext.create('SCVS.store.Almacen.Almacen'); 
        storeAlm.load();
        var storeEst=Ext.create('SCVS.store.Estado.Estado'); 
        storeEst.load();
        Ext.applyIf(me, {
            items: [
            {	
                xtype: 'form',
                id: 'FormAddEdicionInventario',
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
                            name :'id_inv',
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
                            name : 'fecha_entrada',
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
                            store:storeAlm,
                            displayField:'nomb_alm',
                            valueField:'id_alm',													
                            name : "id_alm",
                            flex: 1,
                            fieldLabel : "Almacen"    
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        items: [{
                            xtype: 'numberfield',
                            fieldLabel: 'P. Costo',
                            labelCls:'ficha_label',
                            name:'p_costo',
                            id:'p_costo',
                            minValue:'0',
                            flex: 1
                        },{
                            xtype : "combobox",
                            queryMode: 'local',
                            labelCls:'ficha_label',
                            allowBlank:false,
                            store:storeEst,
                            displayField:'estado',
                            valueField:'id_estado',													
                            name : "id_estado",
                            flex: 1,
                            fieldLabel : "Estado del Producto"    
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
                        title:'Listado de Productos',
                        items: [Ext.create('SCVS.view.BProd.PanelBProd')]
                    }]
                }],
                dockedItems : [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id:'buttons',
                    ui: 'footer',
                    items: ['->',{
                        id: 'BtnAddInv',
                        iconCls: 'add_user',
                        disabled:true,
                        formBind:true,
                        text: 'Agregar',
                        action: 'actAdd'
                    },{
                        id: 'BtnActualizarInvMB',
                        iconCls: 'update_user',
                        disabled:true,
                        formBind:true,
                        text: 'Actualizar',
                        action: 'actUpdate'
                    },{
							
                        text: 'Cancelar',
                        iconCls: 'cancel',
                        scope: this,
                        handler: this.close
                    }]
                }]
            }]
        }); 
		   
        me.callParent(arguments);
    },
    onChange: function(box, checked){
        
        var form = this.down('form')
        form.queryById('tabla_conv').setVisible(checked);
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
                if(selectedRecord.get('tipo_costo')==2){
                    form.queryById('importe').setVisible('true');
                }
                // Load the record into the form
                form.getForm().loadRecord(selectedRecord);
                return true;
            }
        });
    }
    
});	
						
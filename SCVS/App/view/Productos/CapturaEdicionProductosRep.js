Ext.define('SCVS.view.Productos.CapturaEdicionProductosRep', {
    extend: 'Ext.window.Window',
    alias:'widget.FormAddEdicionProductosRep',
    height: 300,
    width: 350,
    iconCls: 'add-form',
    resizable:false,
    bodyPadding: '20 0 0 20',	
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: THEME
					
    },
    closable: false,
    title: 'Agregar/Modificar Productos de Reparación',
    modal: true,
	
	
    initComponent: function() {
        var me = this
        var storeTProd = Ext.create('SCVS.store.TProd.TProd');
        storeTProd.load();
        
         Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    ui: 'footer',
                    itemId: 'FrmDatosProductos',
                    layout: {
                        type: 'anchor'
                    },
                    fieldDefaults: {
                        msgTarget: 'side',
                        autoFitErrors: false
                    },
                    items: [
                        {xtype: 'container',
                            layout: 'hbox',
                             
                            items: [{
                                    xtype: 'container',
                                    flex: 1,
                                    border: false,
                                    layout: 'anchor',
                                    items: [{
                                            xtype: "textfield",
                                            name: 'id_prod',
                                            hidden: true
                                        }, {
                                            xtype: "textfield",
                                            name: 'nomb_prod',
                                            width: 300,
                                            emptyText: 'Nombre del Producto',
                                            labelAlign: 'top',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            flex: 1,
                                            fieldLabel: "Producto"
                                        }, {
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            width: 300,
                                            allowBlank: false,
                                            emptyText: 'Seleccione tipo producto',
                                            store: storeTProd,
                                            labelAlign: 'top',
                                            displayField: 'tipo_prod',
                                            valueField: 'id_tipo_prod',
                                            name: "id_tipo_prod",
                                            flex: 1,
                                            fieldLabel: "Categoria"
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Costo',
                                            id: 'p_costo',
                                            width: 300,
                                            emptyText: 'Precio de costo',
                                            labelAlign: 'top',
                                            labelCls: 'ficha_label',
                                            name: 'p_costo',
                                            minValue: '0',
                                            flex: 1,
                                            allowBlank: false
                                        }]
                                }]
                        }, {
                            xtype: 'container',
                            layout: 'anchor',
                            items: [{
                                    xtype: 'container',
                                    flex: 1,
                                    border: false,
                                    layout: 'anchor',
                                    items: [{
                                            xtype: "textarea",
                                            name: 'descripcion',
                                            width: 300,
                                            labelAlign: 'top',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            fieldLabel: "Descripción"
                                        }]
                                }]

                        }
                    ],
                dockedItems : [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id:'buttons',
                    ui: 'footer',
                    items: ['->',{
                        itemId: 'BtnAddElab',
                        iconCls: 'add_user',
                        disabled:true,
                        formBind:true,
                        text: 'Agregar',
                        action: 'actAddElab'
                    },{
                        itemId: 'BtnActualizarElab',
                        iconCls: 'update_user',
                        disabled:true,
                        formBind:true,
                        text: 'Actualizar',
                        action: 'actUpdateElab'
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
    }    
});	
						
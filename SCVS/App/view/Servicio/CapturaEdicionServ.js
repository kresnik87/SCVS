Ext.define('SCVS.view.Servicio.CapturaEdicionServ', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddEdicionServ',
    height: 300,
    width: 320,
    iconCls: 'add-form',
    resizable: false,
    bodyPadding: '20 0 0 20',
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: THEME

    },
    closable: false,
    title: 'Agregar/Modificar Servicios',
    modal: true,
    initComponent: function () {
        var me = this;
        var storeTipo =Ext.create('SCVS.store.TipoCosto.TipoCosto'); 
        storeTipo.load();
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    ui: 'footer',
                    itemId: 'FrmDatosServ',
                    height: 130,
                    layout: {
                        type: 'auto'
                    },
                    fieldDefaults: {
                        msgTarget: 'side',
                        autoFitErrors: false
                    },
                    items: [
                        {
                            xtype: "textfield",
                            name: 'id_serv',
                            hidden: true
                        }, {
                            xtype: "textfield",
                            name: 'nomb_servicio',
                            labelCls: 'ficha_label',
                            allowBlank: false,
                            fieldLabel: "Servicio"
                        },{
                            xtype: "textarea",
                            name: 'descripcion',
                            labelCls: 'ficha_label',
                            allowBlank: false,
                            fieldLabel: "Descripción"
                        },{
                            xtype: "numberfield",
                            name: 'p_costo',
                            labelCls: 'ficha_label',
                            allowBlank: false,
                            minValue:'0',
                            fieldLabel: "Precio Costo"
                        },{
                            xtype: "numberfield",
                            name: 'p_venta',
                            labelCls: 'ficha_label',
                            allowBlank: false,
                            minValue:'0',
                            fieldLabel: "Precio Venta"
                        },{
                            xtype : "combobox",
                            queryMode: 'local',
                            labelCls:'ficha_label',
                            allowBlank:false,
                            store:storeTipo,
                            displayField:'tipo_costo',
                            valueField:'id_tipo_costo',													
                            name : "id_tipo_costo",
                            flex: 1,
                            fieldLabel : "Tipo Costo"    
                        }
                    ],
                    dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            id: 'buttons',
                            ui: 'footer',
                            items: ['->', {
                                    itemId: 'BtnAdd',
                                    iconCls: 'add_user',
                                    disabled: true,
                                    formBind: true,
                                    text: 'Agregar',
                                    action: 'actAdd'
                                }, {
                                    itemId: 'BtnActualizar',
                                    iconCls: 'update_user',
                                    disabled: true,
                                    formBind: true,
                                    text: 'Actualizar',
                                    action: 'actUpdate'
                                }, {
                                    text: 'Cancelar',
                                    iconCls: 'cancel',
                                    scope: this,
                                    handler: this.close
                                }]
                        }],
                }]
        });
        me.callParent(arguments);
    }
});
						
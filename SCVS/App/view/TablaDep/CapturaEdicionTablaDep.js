Ext.define('SCVS.view.TablaDep.CapturaEdicionTablaDep', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddEdicionTablaDep',
    height: 220,
    width: 300,
    iconCls: 'add-form',
    resizable: false,
    bodyPadding: '20 0 0 20',
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: '#00247f'

    },
    closable: false,
    title: 'Agregar/Modificar Tabla de Depreciación',
    modal: true,
    initComponent: function () {
       
        var me = this

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    ui: 'footer',
                    itemId: 'FrmDatosTablaDep',
                    height: 230,
                    bodyPadding: '5 0 5 5',
                    layout: {
                        type: 'form'
                    },
                    fieldDefaults: {
                        msgTarget: 'side',
                        autoFitErrors: false
                    },
                    items: [
                        {xtype: "textfield", name: 'id_tabla', hidden: true},
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Concepto',
                            labelCls: 'ficha_label',
                            name: 'concepto',
                            flex: 1,
                            allowBlank: false
                        },{
                            xtype: 'numberfield',
                            fieldLabel: 'Porciento',
                            labelCls: 'ficha_label',
                            minValue:'0',
                            name: 'porciento',
                            flex: 1,
                            allowBlank: false
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Tiempo',
                            labelCls: 'ficha_label',
                            minValue:'0',
                            name: 'tiempo',
                            flex: 1,
                            allowBlank: false
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
						
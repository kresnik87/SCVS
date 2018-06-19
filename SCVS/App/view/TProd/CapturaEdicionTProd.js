Ext.define('SCVS.view.TProd.CapturaEdicionTProd', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddEdicionTProd',
    height: 150,
    width: 300,
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
    title: 'Agregar/Modificar Tipo de Producto',
    modal: true,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    ui: 'footer',
                    itemId: 'FrmDatosAlmacen',
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
                            name: 'id_tipo_prod',
                            hidden: true
                        },{
                            xtype: "textfield",
                            name: 'tipo_prod',
                            labelCls: 'ficha_label',
                            allowBlank: false,
                            fieldLabel: "Tipo de Producto"
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
						
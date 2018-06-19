Ext.define('SCVS.view.Usuarios.CapturaEdicionUser', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddEdicionUser',
    height: 300,
    width: 250,
    resizable: false,
    bodyPadding: '10 10 10 10',
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: THEME
    },
    closable: false,
    title: 'Agregar/Modificar Usuarios',
    modal: true,
    initComponent: function () {
        var me = this;
        var rolStore = Ext.create('Ext.data.Store', {
            fields: ['rol', 'nombre'],
            data: [
                {"rol": "1", "nombre": "Dependiente"},
                {"rol": "2", "nombre": "Gerente"},
                {"rol": "3", "nombre": "Administrador"}
            ]
        });


        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'FormAddEdicion',
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
                    items: [
                        {xtype: 'textfield',
                            allowBlank: false,
                            labelCls: 'ficha_label',
                            name: 'username',
                            labelAlign: 'top',
                            fieldLabel: '<span class="fabold">Usuario</span>'

                        }, {
                            xtype: 'textfield',
                            labelAlign: 'top',
                            labelCls: 'ficha_label',
                            name: 'password',
                            allowBlank: false,
                            fieldLabel: '<span class="fabold">Password</span>',
                            inputType: 'password'
                        },{
                            xtype: "combobox",
                            queryMode: 'local',
                            allowBlank: false,
                            store: rolStore,
                            displayField: 'nombre',
                            selectOnFocus: true,
                            valueField: 'rol',
                            name: "rol",
                            fieldLabel: "Rol"
                        }
                    ],
                    dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            id: 'buttons',
                            ui: 'footer',
                            items: ['->', {
                                    id: 'BtnAddUser',
                                    iconCls: 'add_user',
                                    disabled: true,
                                    formBind: true,
                                    text: 'Agregar',
                                    action: 'actAddUser'
                                }, {
                                    itemId: 'BtnActualizarUser',
                                    id: 'BtnActualizarUser',
                                    iconCls: 'update_user',
                                    disabled: true,
                                    formBind: true,
                                    text: 'Actualizar',
                                    action: 'actUpdateUser'
                                }, {
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
						
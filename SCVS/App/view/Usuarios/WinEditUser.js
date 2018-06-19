Ext.define('SCVS.view.Usuarios.WinEditUser', {
    extend: 'Ext.window.Window',
    alias: 'widget.WinEditUser',
    iconCls: 'user-panel',
    height: 600,
    width: 300,
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
    title: 'Modificar Perfil de Usuario',
    modal: true,
    initComponent: function () {
        var me = this;
        var sexoStore = Ext.create('Ext.data.Store', {
            fields: ['valor', 'sexo'],
            data: [
                {"valor": "M", "sexo": "Masculino"},
                {"valor": "F", "sexo": "Femenino"}

            ]
        });
        Ext.Ajax.request({
            url: BASE_URL + 'CLogin/ext_get_logged',
            success: function (resp) {
                var result = Ext.decode(resp.responseText);
                if (result.success === true) {
                    if (result.user == false) {
                        Ext.getDom(document).location.href = BASE_URL1;
                    } else {
                        Ext.getCmp('user').setValue(result.user);

                    }

                }
            }
        });

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'FormAddEdicion',
                    url: BASE_URL + 'CUsuarios/ext_add_perfil',
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
                            id: 'user',
                            name: 'username',
                            labelAlign: 'top',
                            disabled: 'true',
                            fieldLabel: '<span class="fabold">Usuario</span>'

                        }, {
                            xtype: 'textfield',
                            labelAlign: 'top',
                            labelCls: 'ficha_label',
                            name: 'nombre',
                            allowBlank: false,
                            fieldLabel: '<span class="fabold">Nombre</span>'
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'top',
                            labelCls: 'ficha_label',
                            name: 'apellidos',
                            allowBlank: false,
                            fieldLabel: '<span class="fabold">Apellidos</span>'
                        }, {
                            xtype: 'numberfield',
                            labelAlign: 'top',
                            labelCls: 'ficha_label',
                            name: 'edad',
                            allowBlank: false,
                            minValue: '18',
                            maxValue: '70',
                            minText: 'La edad mínima es 18',
                            maxText: 'La edad máxima es 70',
                            fieldLabel: '<span class="fabold">Edad</span>'
                        }, {
                            xtype: "datefield",
                            format: 'Y/m/d',
                            labelCls: 'ficha_label',
                            name: 'fecha_nac',
                            allowBlank: false,
                            fieldLabel: "Fecha Nacimiento"
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'top',
                            labelCls: 'ficha_label',
                            name: 'telefono',
                            allowBlank: false,
                            fieldLabel: '<span class="fabold">Teléfono</span>'
                        }, {
                            xtype: 'textarea',
                            labelAlign: 'top',
                            labelCls: 'ficha_label',
                            name: 'direccion',
                            allowBlank: false,
                            fieldLabel: '<span class="fabold">Dirección</span>'
                        }, {
                            xtype: "combobox",
                            queryMode: 'local',
                            allowBlank: false,
                            store: sexoStore,
                            displayField: 'sexo',
                            labelCls: 'ficha_label',
                            selectOnFocus: true,
                            valueField: 'valor',
                            name: "sexo",
                            fieldLabel: "Sexo"
                        }, {
                            xtype: 'filefield',
                            itemId: 'file',
                            labelAlign: 'top',
                            emptyText: 'Seleccione una foto',
                            labelCls: 'ficha_label',
                            fieldLabel: 'Avatar del Usuario',
                            name: 'file_imagen'
                        }, {
                            xtype: "textfield",
                            name: 'foto',
                            id: 'foto',
                            hidden: true
                        }

                    ],
                    dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            id: 'buttons',
                            ui: 'footer',
                            items: ['->', {
                                    xtype: 'button',
                                    text: 'Subir',
                                    iconCls: 'imagen_upload',
                                    handler: function () {
                                        var form = this.up('form').getForm();
                                        var form1 = this.up('form');
                                        var imagen = form1.queryById('file').getValue();
                                        form1.queryById('foto').setValue(imagen);
                                        if (form.isValid()) {
                                            form.submit({
                                                url: BASE_URL + 'CPrincipal/do_upload',
                                                waitMsg: 'Subiendo su foto...',
                                                success: function (fp, o) {
                                                    Ext.Msg.alert('Completado', 'Su foto "' + o.result.file + '" ha sido guardada.');
                                                }
                                            });
                                        }
                                    }
                                }, {
                                    id: 'BtnAddUser',
                                    iconCls: 'add_user',
                                    disabled: true,
                                    formBind: true,
                                    text: 'Agregar',
                                    handler: function () {
                                        var form = this.up('form').getForm();
                                        var win = this.up('window');
                                        if (form.isValid()) {
                                            form.submit({
                                                success: function (form, action) {
                                                    Ext.Msg.alert('Success', action.result.msg);
                                                    win.close();

                                                },
                                                failure: function (form, action) {
                                                    Ext.Msg.alert('Failed', action.result.msg);
                                                }
                                            });
                                        }
                                    }
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
						
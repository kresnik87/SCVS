

Ext.onReady(function () {

    function Login() {
        Ext.Ajax.request({
            waitMsg: 'Please wait...',
            url: BASE_URL + 'CLogin/ext_login',
            params: {
                username: Ext.getCmp('name').getValue(),
                password: Ext.getCmp('password').getValue()
            },
            success: function (resp) {
                var result = Ext.decode(resp.responseText);
                if (result.status === 'success') {
                    Ext.MessageBox.show({
                        title: 'Autenticación',
                        msg: 'Cargando datos...',
                        wait: true,
                        waitConfig: {
                            duration: 900,
                            interval: 100,
                            increment: 15,
                            fn: princ
                        },
                        icon: Ext.MessageBox.INFO

                    })
                }

            },
            failure: function (resp) {
                var result = Ext.decode(resp.responseText);
                if (result.status === 'failure') {
                    Ext.MessageBox.show({
                        title: 'User  Authentication',
                        msg: 'Usuario o password incorrecto.',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    })
                }
            }
        });

    };
    function princ() {

        Ext.getDom(document).location.href = BASE_URL + 'CPrincipal/index';
    };


    var Form_login = Ext.create('Ext.form.Panel', {
        id: 'Form_Login',
        loadMask: true,
        iconCls: 'log-ico',
        bodyStyle: {
            background: '#00247f',
        },
        width: 700,
        height: 240,
        layout: {
            type: 'hbox'

        },
        title: 'Small Bussines Software',
        items: [{
                xtype: 'panel',
                
                bodyStyle: {
                    background: '#00247f'
                },
                width: 500,
                height: 240,
				html: ' <img src="SCVS/images/logo scvs.jpg"'

            }, {
                xtype: 'panel',
                bodyStyle: {
                    background: '#00247f'
                },
                layout: {
                    type: 'vbox',
                    align: 'center',
                    padding: '50 10 0 10'
                },
                items: [{
                        xtype: 'textfield',
                        id: 'name',
                        labelCls: 'ficha_label',
                        allowBlank: false,
                        labelAlign: 'top',
                        fieldLabel: '<span class="fabold">User</span>'
                    }, {
                        xtype: 'textfield',
                        id: 'password',
                        labelAlign: 'top',
                        labelCls: 'ficha_label',
                        allowBlank: false,
                        fieldLabel: '<span class="fabold">Password</span>',
                        inputType: 'password',
                        listeners: {
                            specialkey: function (field, e) {
                                // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                                // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                                if (e.getKey() == e.ENTER) {
                                    var win = this.up('window');
                                    var form = win.down('toolbar');
                                    form.queryById('loginbtn').focus();
                                }
                            }
                        }
                    }],
            }]


    });
    var Form_Register = Ext.create('Ext.form.Panel', {
        id: 'Form_Register',
        url: BASE_URL + 'CLogin/ext_register',
        bodyStyle: {
            padding: '10px',
            background: '#00247f'
        },
        width: 300,
        height: 280,
        items: [{
                xtype: 'panel',
                bodyStyle: {
                    background: '#00247f'
                },
                layout: {
                    type: 'vbox',
                    align: 'center',
                },
                items: [{
                        xtype: 'textfield',
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
                    }, {
                        xtype: 'textfield',
                        labelAlign: 'top',
                        labelCls: 'ficha_label',
                        allowBlank: false,
                        fieldLabel: '<span class="fabold"> Repetir Password</span>',
                        inputType: 'password'
                    }, {
                        xtype: 'textarea',
                        labelAlign: 'top',
                        allowBlank: false,
                        labelCls: 'ficha_label',
                        fieldLabel: 'Codigo de Licencia',
                        name: 'licencia'

                    }],
            }],
        buttons: [{
                text: 'Reset',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            }, {
                text: 'Enviar',
                formBind: true, //only enabled once the form is valid
                disabled: true,
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
            }],
    });
    Window_Register = new Ext.Window({
        border: false,
        frame: false,
        title: 'ELITEC Registro',
        layout: 'fit',
        closable: true,
        bodyStyle: {
            background: 'black'
        },
        modal: false,
        draggable: true,
        resizable: false,
        loadMask: true,
        plain: false,
        items: Form_Register
    });
    Window_Login = new Ext.Window({
        border: false,
        frame: true,
        layout: 'fit',
        autoShow: true,
        closable: false,
        draggable: false,
        resizable: false,
        plain: false,
        items: Form_login,
        dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                layout: {
                    pack: 'end'
                },
                items: [{
                        text: 'Login',
                        id: 'loginbtn',
                        iconCls: 'logout',
                        formBind: true,
                        handler: Login
                    }, {
                        text: 'Register',
                        iconCls: 'user-panel',
                        handler: function () {
                            Window_Register.show();
                        }
                    }, {
                        text: 'Cancel',
                        iconCls: 'cancel',
                        handler: function () {
                            Form_login.getForm().reset();
                        }

                    }]
            }]

    });


});
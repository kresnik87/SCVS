
Ext.define('SCVS.view.Productos.CapturaEdicionProductos', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormAddEdicionProductos',
    glyph:'xf109@FontAwesome',
    height: 320,
    width: 400,
    resizable: false,
    bodyPadding: '10 0 0 10',
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: THEME

    },
    closable: false,
    title: 'Agregar/Modificar Productos de Venta',
    modal: true,
    initComponent: function () {
        var me = this
        var storeTProd = Ext.create('SCVS.store.TProd.TProd');
        storeTProd.load();
        var storeTabla = Ext.create('SCVS.store.TablaDep.TablaDep');
        storeTabla.load();
        var storeEstado = Ext.create('SCVS.store.Estado.Estado');
        storeEstado.load();


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
                                            name: 'imagen',
                                            id: 'imagen',
                                            hidden: true
                                        }, {
                                            xtype: "textfield",
                                            name: 'nomb_prod',
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
                                            allowBlank: false,
                                            emptyText: 'Seleccione tipo producto',
                                            store: storeTProd,
                                            labelAlign: 'top',
                                            displayField: 'tipo_prod',
                                            valueField: 'id_tipo_prod',
                                            name: "id_tipo_prod",
                                            flex: 1,
                                            fieldLabel: "Categoría"
                                        }, {
                                            xtype: 'filefield',
                                            itemId: 'file',
                                            labelAlign: 'top',
                                            emptyText: 'Seleccione una foto',
                                            labelCls: 'ficha_label',
                                            fieldLabel: 'Foto del Producto',
                                            name: 'file_imagen'
                                        }]
                                }, {
                                    xtype: 'container',
                                    flex: 1,
                                    border: false,
                                    layout: 'anchor',
                                    items: [
                                        {
                                            xtype: "combobox",
                                            queryMode: 'local',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            store: storeTabla,
                                            displayField: 'concepto',
                                            emptyText: 'Seleccione la depreciación del producto',
                                            labelAlign: 'top',
                                            id: 'id_tabla',
                                            valueField: 'id_tabla',
                                            name: "id_tabla",
                                            flex: 1,
                                            fieldLabel: "Depreciación"
                                        }, {
                                            xtype: 'numberfield',
                                            fieldLabel: 'Costo',
                                            id: 'p_costo',
                                            emptyText: 'Precio de costo',
                                            labelAlign: 'top',
                                            labelCls: 'ficha_label',
                                            name: 'p_costo',
                                            minValue: '0',
                                            flex: 1,
                                            allowBlank: false
                                        }, {
                                            xtype: "textfield",
                                            name: 'marca',
                                            labelAlign: 'top',
                                            emptyText: 'Marca del Producto',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            flex: 1,
                                            fieldLabel: "Marca"
                                        }
                                    ]
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
                                            width: 360,
                                            labelAlign: 'top',
                                            labelCls: 'ficha_label',
                                            allowBlank: false,
                                            fieldLabel: "Descripción"
                                        }]
                                }]

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
                                    glyph:'xf1c5@FontAwesome',
                                    handler: function () {
                                        var form = this.up('form').getForm();
                                        var form1 = this.up('form');
                                        var imagen = form1.queryById('file').getValue();
                                        form1.queryById('imagen').setValue(imagen);
                                        if (form.isValid()) {
                                            form.submit({
                                                url: BASE_URL + 'CPrincipal/do_upload',
                                                waitMsg: 'Subiendo su foto...',
                                                success: function (fp, o) {
                                                    Ext.Msg.alert('Completado', 'Su foto "' + o.result.file + '" ha sido subida.');
                                                }
                                            });
                                        }
                                    }
                                }, {
                                    itemId: 'BtnAdd',
                                    glyph:'xf058@FontAwesome',
                                    disabled: true,
                                    formBind: true,
                                    text: 'Agregar',
                                    action: 'actAdd'
                                }, {
                                    itemId: 'BtnActualizar',
                                    glyph:'xf0c7@FontAwesome',
                                    disabled: true,
                                    formBind: true,
                                    text: 'Actualizar',
                                    action: 'actUpdate'
                                }, {
                                    text: 'Cancelar',
                                    glyph:'xf057@FontAwesome',
                                    scope: this,
                                    handler: this.close
                                }]
                        }]
                }]
        });
        me.callParent(arguments);
    }

});
						
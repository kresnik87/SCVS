var ROL;
Ext.define('SCVS.view.Principal.MyViewport', {
    extend: 'Ext.container.Viewport',
    bodyStyle: {
         background: '#c0c0c1'

    },
    initComponent: function () {

        Ext.Ajax.request({
            url: BASE_URL + 'CLogin/ext_get_logged',
            success: function (resp) {
                var result = Ext.decode(resp.responseText);
                if (result.success === true) {
                    if (result.user == null) {
                        Ext.getDom(document).location.href = BASE_URL1;
                    } else {
                        if(result.rol==1){
                            Ext.getCmp('modulo_admin').setVisible(false);
                            Ext.getCmp('modulo_reportes').setVisible(false);
                            Ext.getCmp('modulo_ventas').setVisible(true);
                            Ext.getCmp('user_display').setValue('<span  class="username">'+result.user+'</span>');
                        }
                        Ext.getCmp('user_display').setValue('<span  class="username">' + result.user + '</span>');

                    }

                }
            }
        });

        var menu1 = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    {
                        text: "Gestionar",
                        expanded: false,
                        children: [
                            {
                                text: "Gestionar Almacenes",
                                iconCls: 'icon-nav',
                                id: 'list_al',
                                leaf: true
                            },
                            {
                                text: "Gestionar Areas de Venta",
                                id: 'list_area',
                                leaf: true
                            },
                           
                            {
                                text: "Gestionar  Tipo Producto",
                                id: 'list_tprod',
                                leaf: true
                            },
                            {
                                text: "Gestionar  Tabla de Depreciación",
                                id: 'list_tabla',
                                leaf: true
                            },
                            {
                                text: "Gestionar Usuarios",
                                id: 'list_user',
                                leaf: true
                            },
                            {
                                text: "Gestionar Productos",
                                id: 'list_prod',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: "Inventarios",
                        expanded: false,
                        children: [
                            {
                                text: "Inventario de Almacen",
                                id: 'list_inv',
                                leaf: true
                            },
                            {
                                text: "Inventario de Area de Ventas",
                                id: 'list_inv_area',
                                leaf: true
                            }

                        ]
                    }
                ]
            }
        });
        var menu2 = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    {
                        text: "Operaciones",
                        expanded: false,
                        children: [
							{
                                text: "Gestionar Servicios",
                                id: 'list_serv',
                                leaf: true
                            },
                            {
                                text: "Realizar Venta",
                                id: 'add_venta',
                                leaf: true
                            },
                            {
                                text: "Registro de Ventas",
                                id: 'reg_venta',
                                leaf: true
                            },
                            {
                                text: "Registro de Servicios",
                                id: 'reg_serv',
                                leaf: true
                            },
                            {
                                text: "Registro de Roturas",
                                id: 'reg_rot',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        });
        var menu3 = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    {
                        text: "Reportes",
                        expanded: false,
                        children: [
                            {
                                text: "Entrada de Almacenes",
                                id: 'ent_alm',
                                leaf: true
                            },
                            
                            {
                                text: "Entrada de Areas de Venta",
                                id: 'ent_area',
                                leaf: true
                            },
                            {
                                text: "Registro de Venta X Cantidad",
                                id: 'venta_cant',
                                leaf: true
                            },
                            {
                                text: "Registro de Existencia Inventario",
                                id: 'exist_inv',
                                leaf: true
                            },
                            {
                                text: "Estado de Capital Invertido",
                                id: 'est_inversion',
                                leaf: true
                            },
							{
                                text: "Estado de Ingresos",
                                id: 'est_ingresos',
                                leaf: true
                            },
							{
                                text: "Estado de Utilidades",
                                id: 'est_utilidades',
                                leaf: true
                            },
                            {
                                text: "Reportes de Roturas",
                                id: 'reg_rot',
                                leaf: true
                            },
                            {
                                text: "Productos mas Vendidos",
                                id: 'reg_rot',
                                leaf: true
                            }
                          
                        ]
                    }
                ]
            }
        });



        var treePanel_Menu = Ext.create('Ext.tree.Panel', {
            id: 'modulo_admin',
            title: 'Módulo de Administración',
            glyph:'xf0f2@FontAwesome',
            bodyStyle: {
                background: THEME
            },
            region: 'north',
            split: true,
            useArrows: true,
            height: 360,
            minSize: 150,
            rootVisible: false,
            autoScroll: true,
            store: menu1

        });
        var Modulo_Ventas = Ext.create('Ext.tree.Panel', {
            id: 'modulo_ventas',
            title: 'Módulo de Ventas',
            iconCls: 'mod-ventas',
            bodyStyle: {
                background: THEME

            },
            region: 'north',
            split: true,
            useArrows: true,
            height: 360,
            minSize: 150,
            rootVisible: false,
            autoScroll: true,
            store: menu2

        });
        var Modulo_Reportes = Ext.create('Ext.tree.Panel', {
            id: 'modulo_reportes',
            title: 'Módulo de Reportes',
            iconCls: 'mod-reportes',
            bodyStyle: {
                 background: THEME

            },
            region: 'north',
            split: true,
            useArrows: true,
            height: 360,
            minSize: 150,
            rootVisible: false,
            autoScroll: true,
            store: menu3

        });

        var tabpanel = Ext.create('Ext.tab.Panel', {
            region: 'center', // a center region is ALWAYS required for border layout
            deferredRender: false,
            frame: true,
            anchorSize: '150',
            activeTab: 0, // first tab initially active
            items: [{
                    title: 'Principal',
                    closable: false,
                    glyph:'xf19c@FontAwesome',
                    bodyStyle: {
                         background: '#c0c0c1'
                    },
                    autoScroll: true,
                    contentEl: 'center'
                   

                }]
        });


        function Logout() {
            Ext.Ajax.request({
                waitMsg: 'Please wait...',
                url: BASE_URL + 'CLogin/ext_logout',
                success: function (resp) {
                    var result = Ext.decode(resp.responseText);
                    if (result.status === 'success') {
                        Ext.MessageBox.show({
                            title: 'Cierre de Sesión',
                            msg: result.user + ' ha salido de Small Bussines',
                            buttons: Ext.MessageBox.OK,
                            fn: function () {
                                Ext.getDom(document).location.href = BASE_URL1;
                            },
                            icon: Ext.MessageBox.INFO
                        })
                    }
                }
            });
        }
         function Prueba() {
            Ext.Ajax.request({
                waitMsg: 'Please wait...',
                url: BASE_URL + 'CPrincipal/ext_get_fix_bd',
                
            });
        }
		function Script() {
            Ext.Ajax.request({
                waitMsg: 'Please wait...',
                url: 'http://192.168.1.102:8000/tecno/inventario/call/json/servicio_inventario'
            });
        }
         function Show() {
          Ext.create('SCVS.view.Usuarios.WinEditUser');
        }
        function  mensaje_version() {
            Ext.MessageBox.show({
                title: 'Informacion',
                msg: ' Esta funcionalidad no esta disponible hasta la proxima actualizacion',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            })
        }


        function addTab(text, item) {
            tabpanel.add({
                closable: true,
                glyph:'xf022@FontAwesome',
                title: text,
                items: [{
                        items: [item]
                    }]
            }).show();

        }

        treePanel_Menu.getSelectionModel().on("select", function (selModel, record) {
            if (record.get('leaf')) {
                if (record.get('id') == 'list_al') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Almacen.PanelAlmacen'));
                } else if (record.get('id') == 'list_area') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Area.PanelArea'));
                
                } else if (record.get('id') == 'list_tprod') {
                    addTab(record.get('text'), Ext.create('SCVS.view.TProd.PanelTProd'));
                } else if (record.get('id') == 'list_inv') {
                    addTab(record.get('text'), Ext.create('SCVS.view.InventarioAlm.PanelInventarioAlm'));
                } else if (record.get('id') == 'list_inv_area') {
                    addTab(record.get('text'), Ext.create('SCVS.view.InventarioVent.PanelInventarioVent'));
                } else if (record.get('id') == 'list_tabla') {
                    addTab(record.get('text'), Ext.create('SCVS.view.TablaDep.PanelTablaDep'));
                } else if (record.get('id') == 'list_prod') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Productos.PanelProductos'));
                } else if (record.get('id') == 'list_user') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Usuarios.PanelUser'));
                }
            }
        });
         Modulo_Ventas.getSelectionModel().on("select", function (selModel, record) {
            if (record.get('leaf')) {
                if (record.get('id') == 'add_venta') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Venta.PanelVenta'));
                } else if (record.get('id') == 'reg_venta') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Venta.PanelRegVenta'));
                } else if (record.get('id') == 'reg_serv') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Servicio.PanelRegServ'));
                } else if (record.get('id') == 'list_tprod') {
                    addTab(record.get('text'), Ext.create('SCVS.view.TProd.PanelTProd'));
                } else if (record.get('id') == 'list_inv1') {
                    addTab(record.get('text'), Ext.create('SCVS.view.InventarioAlm.PanelInventarioAlm'));
                }else if (record.get('id') == 'list_serv') {
				addTab(record.get('text'), Ext.create('SCVS.view.Servicio.PanelServ'));}
            }
        });
          Modulo_Reportes.getSelectionModel().on("select", function (selModel, record) {
            if (record.get('leaf')) {
                if (record.get('id') == 'ent_alm') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Reportes.PanelReportAlm'));
                } else if (record.get('id') == 'ent_area') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Reportes.PanelReportArea'));
                } else if (record.get('id') == 'salida_alm') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Reportes.PanelReportSalAlm'));
				}else if (record.get('id') == 'venta_cant') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Reportes.PanelRegVentaXCant'));	
                } else if (record.get('id') == 'list_serv') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Servicio.PanelServ'));
                } else if (record.get('id') == 'list_tprod') {
                    addTab(record.get('text'), Ext.create('SCVS.view.TProd.PanelTProd'));
                } else if (record.get('id') == 'list_inv') {
                    addTab(record.get('text'), Ext.create('SCVS.view.InventarioAlm.PanelInventarioAlm'));
                } else if (record.get('id') == 'exist_inv') {
                    addTab(record.get('text'), Ext.create('SCVS.view.InventarioAlm.PanelExistAlm'));
                }else if (record.get('id') == 'est_inversion') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Reportes.PanelReportInversion'));	
                }else if (record.get('id') == 'est_ingresos') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Reportes.PanelReportIngresos'));	
                }else if (record.get('id') == 'est_utilidades') {
                    addTab(record.get('text'), Ext.create('SCVS.view.Reportes.PanelReportUtilidades'));	
                }
            }
        });

        var menu = Ext.create('Ext.menu.Menu', {
            id: 'mainMenu',
            frame: 'true',
            ui: 'end',
            items: [
                {
                    xtype: 'displayfield',
                    id: 'user_display',
                    iconCls: 'id',
                    name: 'user',
                    cls: 'username',
                    value: 'value'
                }, '-', {
                    text: 'Configuración',
                    glyph:'xf085@FontAwesome',
                    tooltip: 'Configurar Perfil',
                    handler:Show
                }, {
                    glyph:'xf08b@FontAwesome',
                    text: 'Cerrar Sesión',
                    tooltip: 'Logout Button',
                    handler: Logout

                },{
                    
                    text: 'Script',
                    tooltip: 'Fix BD',
                    handler: Script

                }
                 
            ]
        });
         var menu2 = Ext.create('Ext.menu.Menu', {
            id: 'bdMenu',
            frame: 'true',
            ui: 'end',
            items: [
                 {
                    text: 'Backup de BD',
                    glyph:'xf019@FontAwesome',
                    tooltip: 'Realizar Salva de BD'
                    
                }, {
                    iconCls: 'logout',
                    glyph:'xf093@FontAwesome',
                    tooltip: 'Actualizar BD'
                },
				{
                    
                    text: 'Fix BD',
                    glyph:'xf0ad@FontAwesome',
                    tooltip: 'Fix BD',
                    handler: Prueba

                }
            ]
        });
        
        Ext.apply(this, {
            id: 'app-viewport',
            layout: {
                type: 'border',
                padding: '0 5 5 5' // pad the layout from the window edges
            },
            items: [{
                    xtype: 'toolbar',
                    region: 'north',
                    ui: 'footer',
                    items: [
                        {
                            text: ' Menu de Usuario',
                            glyph:'xf0c0@FontAwesome',
                            menu: menu
                        },{
                            text: ' Operaciones BD',
                            glyph:'xf1c0@FontAwesome',
                            menu: menu2
                        }
                        
                    ]
                },  {
                    region: 'west',
                    stateId: 'navigation-panel',
                    id: 'app-option', // see Ext.getCmp() below
                    title: 'Navegación',
                    glyph:'xf00b@FontAwesome',
                    split: true,
                    width: 250,
                    minWidth: 175,
                    maxWidth: 400,
                    collapsible: true,
                    animCollapse: true,
                    margins: '0 0 0 0',
                    layout: 'accordion',
                    items: [treePanel_Menu, Modulo_Ventas, Modulo_Reportes]
                }, tabpanel]
        });
        this.callParent(arguments);

    }


});
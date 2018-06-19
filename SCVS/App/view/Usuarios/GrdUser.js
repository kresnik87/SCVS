Ext.define('SCVS.view.Usuarios.GrdUser',{
    extend: 'Ext.grid.Panel',
    alias:'widget.gridUser',
    store: 'Usuarios.Usuarios',
    title: 'Listado de Usuarios',
    border: false,
    iconCls: 'grid',
    height: 560,
    width: 520,
    listeners: {
        'selectionchange': function(view, records) {
            this.down('#deleteUser').setDisabled(!records.length);				//Se Habilita el Boton Delete
            this.down('#editUser').setDisabled(!records.length);
        }
    },
    initComponent: function() {
        var me = this;
       	function change(val) {
        if (val ==1) {
            return '<span style="color:green;">Dependiente</span>';
        } else if (val ==2) {
            return '<span style="color:red;">Gerente</span>';
        } else if (val ==3) {
            return '<span style="color:orange;">Administrador</span>';
        }
        }
        Ext.applyIf(me, {
            columns : [//Definimos las Columnas del Grid y las Columnas de la Tabla
            {
                header:"Id",
                dataIndex:"uid",
                width:50,
                hidden:true
            },
            {
                header:"Username",
                dataIndex:"username",
                flex:1
                	
            },
          
            {
                header:"Password",
                dataIndex:"password",
                flex:1
                	
            },
            {
                header:"Rol",
                dataIndex:"rol",
                renderer : change,
                flex:1
                	
            },
            {
                header:"Licencia",
                dataIndex:"licencia",
                flex:1
            }	
            ],
            dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                ui:'footer',
                items: [
                {
                    itemId: 'AddUser',
                    text: 'Agregar',
                    iconCls: 'add',
                    action:'actAgregarUser'//Accion manejado por el Controlador
                },'-',{
                    itemId: 'editUser',
                    text: 'Editar',
                    iconCls: 'edit',
                    disabled: true,
                    scope: this,
                    action:'actEditarUser'
                
                },'-',{
                    itemId: 'deleteUser',
                    text: 'Borrar',
                    iconCls: 'delete',
                    disabled: true,
                    action:'actBorrarUser' 
                }									
                ]
            },
            {
                xtype: 'pagingtoolbar',//Barra Paginadora al fondo del Grid
                dock: 'bottom',
                displayInfo: true,
                store:me.store
            }
            ]
           
        });
        
        me.callParent(arguments);
        me.store.load({
            params:{
                start:0,
                limit: 100 
            }
        });
					
    }
	
	
});

























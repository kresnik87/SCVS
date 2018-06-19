Ext.define('SCVS.controller.Usuarios.Usuarios',{
    extend		: 'Ext.app.Controller',
    stores		: ['Usuarios.Usuarios'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['Usuarios.Usuarios'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['Usuarios.GrdUser','Usuarios.CapturaEdicionUser'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
   
    {
        ref:'gridUser',
        selector:'gridUser'//<<--Vista dentro de un Grid
    }
	
    ],

    init: function() {
        var me = this;
        me.control({
           
            'gridUser dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
            },
            'gridUser button[action=actAgregarUser]'://Usando Ext.Component.Query
            {
                click:this.Agregar
            },
            'gridUser button[action=actEditarUser]'://Usando Ext.Component.Query
            {
                click:this.Editar
            },
            'FormAddEdicionUser button[action=actAddUser]'://Usando Ext.Component.Query
            {
				 
                click:this.AgregarUser
            },
            'FormAddEdicionUser button[action=actUpdateUser]'://Usando Ext.Component.Query
            {
				 
                click:this.Actualizar
            },   
            'gridUser button[action=actBorrarUser]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
            },
            'gridUser button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            }     
			
			
			   
				  
        });
    },
    //Inician Funciones
    Search: function(button) {
        var win = button.up('toolbar'),
        nomb=win.getComponent('prod').getValue();
        store=this.getNormasNormasStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb);
        store.load();
	     
       
    },				
  
    Agregar: function(){
        var FormAddEditarUser= Ext.widget('FormAddEdicionUser');
        form=FormAddEditarUser.down('form');	
        form.queryById('BtnActualizarUser').setVisible(false);		
		
    },
    Editar: function(grid, record){	   	
        records = this.getGridUser().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormAddEditarUser= Ext.widget('FormAddEdicionUser');
            var EditForm=FormAddEditarUser.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
           EditForm.queryById('BtnAddUser').setVisible(false);	
        }
    },

    AgregarUser: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record = Ext.create('SCVS.model.Usuarios.Usuarios');
        record.set(values);
        record.setId(0);
        this.getUsuariosUsuariosStore().add(record);		
        form.getForm().reset();
       
    },
	
    Actualizar: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.uid > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.uid);
            this.getUsuariosUsuariosStore().update(record);
        }		
		
        win.close();
       
    },
	
    Eliminar: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridUser();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        name=grid.getSelectionModel().getSelection()[0].data.username;
        store = this.getUsuariosUsuariosStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title : 'Eliminar Registro',
            buttons : Ext.MessageBox.YESNO,
            msg : 'Desea Eliminar '+' '+name+' ?',
            icon : Ext.Msg.WARNING,
            fn : function(btn)
            {
                if (btn == 'yes')
                {			
		                           
                    store.remove(record);
                }
								
            }	
        });
    }
});

 
















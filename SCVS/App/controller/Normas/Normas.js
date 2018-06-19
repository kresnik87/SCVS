Ext.define('SCVS.controller.Normas.Normas',{
    extend		: 'Ext.app.Controller',
    stores		: ['Normas.Normas'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['Normas.Normas'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['Normas.GrdNormas','Normas.CapturaEdicionNormas'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
    {
        ref:'gridNormas',
        selector:'gridNormas'//<<--Vista dentro de un Grid
    }
   
    ],

    init	: function() {
        var me = this;
        me.control({
            'gridNormas dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
            },
            'gridNormas button[action=actAgregar]'://Usando Ext.Component.Query
            {
                click:this.Agregar
            },
            
            'gridNormas button[action=actEditar]'://Usando Ext.Component.Query
            {
                click:this.Editar
            },
            'FormAddEdicionNormas button[action=actAdd]'://Usando Ext.Component.Query
            {
				 
                click:this.AgregarNormas
            },
         
            'FormAddEdicionNormas button[action=actUpdate]'://Usando Ext.Component.Query
            {
				 
                click:this.ActualizarNormas
            },   
            'gridNormas button[action=actBorrar]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
            },
            'gridNormas button[action=actSearch]'://Usando Ext.Component.Query
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
        var FormAddEditarNormas= Ext.widget('FormAddEdicionNormas');
        form=FormAddEditarNormas.down('form');	
        field= form.down('toolbar');
        field.getComponent(2).setVisible(false);		
		
    },
    Editar: function(grid, record){	   	
        records = this.getGridNormas().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormAddEditarNormas= Ext.widget('FormAddEdicionNormas');
            var EditForm=FormAddEditarNormas.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
            field= EditForm.down('toolbar');	
            field.getComponent(1).setVisible(false);
        }
    },
    AgregarNormas: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record = Ext.create('SISGIVENT.model.Normas.Normas');
        record.set(values);
        record.setId(0);
        this.getNormasNormasStore().add(record);		
        form.getForm().reset();
       
    },
    ActualizarNormas: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_norma > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_norma);
            this.getNormasNormasStore().update(record);
        }		
		
        win.close();
       
    },
	
    Eliminar: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridNormas();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        Normas=grid.getSelectionModel().getSelection()[0].data.norma;		
		
        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getNormasNormasStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title : 'Eliminar Registro',
            buttons : Ext.MessageBox.YESNO,
            msg : 'Desea Eliminar '+' '+Normas+' ?',
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

 
















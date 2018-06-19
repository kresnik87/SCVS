Ext.define('SCVS.controller.Productos.ProductosRep',{
    extend		: 'Ext.app.Controller',
    stores		: ['Productos.ProductosRep'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['Productos.ProductosRep'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['Productos.GrdProductosRep','Productos.CapturaEdicionProductosRep'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
    {
        ref:'gridProductosRep',
        selector:'gridProductosRep'//<<--Vista dentro de un Grid
    }
	
    ],

    init	: function() {
        var me = this;
        me.control({
            'gridProductosRep dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
            },
            'gridProductosRep button[action=actAgregarElab]'://Usando Ext.Component.Query
            {
                click:this.Agregar
            },
            'gridProductosRep button[action=actEditarElab]'://Usando Ext.Component.Query
            {
                click:this.Editar
            },
            'FormAddEdicionProductosRep button[action=actAddElab]'://Usando Ext.Component.Query
            {
				 
                click:this.AgregarProductos
            },
            'FormAddEdicionProductosRep button[action=actUpdateElab]'://Usando Ext.Component.Query
            {
				 
                click:this.ActualizarProductos
            },   
            'gridProductosRep button[action=actBorrarElab]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
            },
            'gridProductosRep button[action=actSearch]'://Usando Ext.Component.Query
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
        store=this.getProductosProductosStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb);
        store.load();
	     
       
    },				
    Agregar: function(){
        var FormAddEditarProductosElab= Ext.widget('FormAddEdicionProductosRep');
        form=FormAddEditarProductosElab.down('form');	
        field= form.down('toolbar');
        field.getComponent(2).setVisible(false);		
		
    },
	
    Editar: function(grid, record){	   	
        records = this.getGridProductosRep().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormAddEditarProductos= Ext.widget('FormAddEdicionProductosRep');
            var EditForm=FormAddEditarProductos.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
            field= EditForm.down('toolbar');	
            field.getComponent(1).setVisible(false);
		   
        }
         	 
    },
	
    AgregarProductos: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record = Ext.create('SCVS.model.Productos.ProductosRep');
        record.set(values);
        record.setId(0);
        this.getProductosProductosRepStore().add(record);		
        form.getForm().reset();
       
    },
	
    ActualizarProductos: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_prod > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_prod);
            this.getProductosProductosRepStore().update(record);
        }		
		
        win.close();
       
    },
	
    Eliminar: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridProductosRep();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        Productos=grid.getSelectionModel().getSelection()[0].data.nomb_prod;		
		
        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getProductosProductosRepStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title : 'Eliminar Registro',
            buttons : Ext.MessageBox.YESNO,
            msg : 'Desea Eliminar '+' '+Productos+' ?',
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

 
















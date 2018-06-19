Ext.define('SCVS.controller.Area.Area',{
	extend		: 'Ext.app.Controller',
	stores		: ['Area.Area'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
	models		: ['Area.Area'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
	views		: ['Area.GrdArea','Area.CapturaEdicionArea'],
	refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
	  {
	    ref:'gridArea',
		selector:'gridArea'//<<--Vista dentro de un Grid
	  }
	
	],

	init	: function() {
		var me = this;
		me.control({
		    'gridArea dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar,
			},
		    'gridArea button[action=actAgregar]'://Usando Ext.Component.Query
			   {
				 click:this.Agregar
			   },
			'gridArea button[action=actEditar]'://Usando Ext.Component.Query
			   {
				 click:this.Editar
			   },
		   'FormAddEdicionArea button[action=actAdd]'://Usando Ext.Component.Query
			   {
				 
				 click:this.AgregarArea
			   },
			'FormAddEdicionArea button[action=actUpdate]'://Usando Ext.Component.Query
			   {
				 
				 click:this.ActualizarArea
			   },   
		    'gridArea button[action=actBorrar]'://Usando Ext.Component.Query
			   {
				 click:this.Eliminar
			   },
			 'gridArea button[action=actSearch]'://Usando Ext.Component.Query
			   {
				 
				 click:this.Search,
				 focus:this.Search
			   }   
			
			
			   
				  
		});
	},
	//Inician Funciones
	
	Search: function(button) {
		var win = button.up('toolbar'),
		Area=win.getComponent('Area').getValue();
		store=this.getAreaAreaStore();
		proxy=store.getProxy();
		proxy.setExtraParam('Area',Area);
		store.load();
	     
       
    },			
	Agregar: function(){
	    var FormAddEditarArea= Ext.widget('FormAddEdicionArea');
		    form=FormAddEditarArea.down('form');	
			field= form.down('toolbar');
			field.getComponent(2).setVisible(false);		
		
			},
	
	Editar: function(grid, record){	   	
	    records = this.getGridArea().getSelectionModel().getSelection();
	    if(records.length > 0){
		     var FormAddEditarArea= Ext.widget('FormAddEdicionArea');
		     var EditForm=FormAddEditarArea.down('form');	
		     var record=records[0];			 
		     EditForm.loadRecord(record);
			field= EditForm.down('toolbar');	
			 field.getComponent(1).setVisible(false);
		   
		}
         	 
	},
	
	AgregarArea: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();	 
			record = Ext.create('SCVS.model.Area.Area');
			record.set(values);
			record.setId(0);
			this.getAreaAreaStore().add(record);		
         form.getForm().reset();
       
    },
	
	ActualizarArea: function(button) {
        var win    = button.up('window'),
            form   = win.down('form');
			record = form.getRecord();            
            values = form.getValues();
	if (values.id_area > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
	        record.set(values);
			record.setId(values.id_area);
			this.getAreaAreaStore().update(record);
			}		
		
        win.close();
       
    },
	
	Eliminar: function()
	{
	    //Para referirnos a un componente aca se utilizaran los Getters:
		var grid = this.getGridArea();//Get+ Alias gridClientes (alias:'widget.gridClientes')
		record = grid.getSelectionModel().getSelection()[0]; 
		Area=grid.getSelectionModel().getSelection()[0].data.nomb_area;		
		
		//En esta parte automaticamente el Controller crea las Funciones Getters
		store = this.getAreaAreaStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
	    Ext.MessageBox.show({
           title : 'Eliminar Registro',
    	   buttons : Ext.MessageBox.YESNO,
		   msg : 'Desea Eliminar '+' '+Area+' ?',
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

 
















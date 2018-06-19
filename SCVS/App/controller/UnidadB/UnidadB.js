Ext.define('SCVS.controller.UnidadB.UnidadB',{
	extend		: 'Ext.app.Controller',
	stores		: ['UnidadB.UnidadB'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
	models		: ['UnidadB.UnidadB'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
	views		: ['UnidadB.GrdUnidadB','UnidadB.CapturaEdicionUnidadB'],
	refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
	  {
	    ref:'gridUnidadB',
		selector:'gridUnidadB'//<<--Vista dentro de un Grid
	  }
	
	],

	init	: function() {
		var me = this;
		me.control({
		    'gridUnidadB dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
			},
		    'gridUnidadB button[action=actAgregar]'://Usando Ext.Component.Query
			   {
				 click:this.Agregar
			   },
			'gridUnidadB button[action=actEditar]'://Usando Ext.Component.Query
			   {
				 click:this.Editar
			   },
		   'FormAddEdicionUnidadB button[action=actAdd]'://Usando Ext.Component.Query
			   {
				 
				 click:this.AgregarUnidadB
			   },
			'FormAddEdicionUnidadB button[action=actUpdate]'://Usando Ext.Component.Query
			   {
				 
				 click:this.ActualizarUnidadB
			   },   
		    'gridUnidadB button[action=actBorrar]'://Usando Ext.Component.Query
			   {
				 click:this.Eliminar
			   }
			
			
			   
				  
		});
	},
	//Inician Funciones
		
	Agregar: function(){
	    var FormAddEditarUnidadB= Ext.widget('FormAddEdicionUnidadB');
		    form=FormAddEditarUnidadB.down('form');	
			field= form.down('toolbar');
			field.getComponent(2).setVisible(false);		
		
			},
	
	Editar: function(grid, record){	   	
	    records = this.getGridUnidadB().getSelectionModel().getSelection();
	    if(records.length > 0){
		     var FormAddEditarUnidadB= Ext.widget('FormAddEdicionUnidadB');
		     var EditForm=FormAddEditarUnidadB.down('form');	
		     var record=records[0];			 
		     EditForm.loadRecord(record);
			field= EditForm.down('toolbar');	
			 field.getComponent(1).setVisible(false);
		   
		}
         	 
	},
	
	AgregarUnidadB: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();	
            record = Ext.create('SISGIVENT.model.UnidadB.UnidadB');			
            record.set(values);
            record.setId(0);
            this.getUnidadBUnidadBStore().add(record);		
            form.getForm().reset();
       
    },
	
	ActualizarUnidadB: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
	if (values.id_unidad > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_unidad);
            this.getUnidadBUnidadBStore().update(record);
            }
        win.close();
        },
	
	Eliminar: function()
	{
	    //Para referirnos a un componente aca se utilizaran los Getters:
		var grid = this.getGridUnidadB();//Get+ Alias gridClientes (alias:'widget.gridClientes')
		record = grid.getSelectionModel().getSelection()[0]; 
		UnidadB=grid.getSelectionModel().getSelection()[0].data.nomb_unid;		
		
		//En esta parte automaticamente el Controller crea las Funciones Getters
		store = this.getUnidadBUnidadBStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
	    Ext.MessageBox.show({
           title : 'Eliminar Registro',
    	   buttons : Ext.MessageBox.YESNO,
		   msg : 'Desea Eliminar '+' '+UnidadB+' ?',
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

 
















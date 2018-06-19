Ext.define('SCVS.controller.TablaDep.TablaDep',{
    extend		: 'Ext.app.Controller',
    stores		: ['TablaDep.TablaDep'],
    models		: ['TablaDep.TablaDep'],
    views		: ['TablaDep.GrdTablaDep','TablaDep.CapturaEdicionTablaDep'],
    refs:[ 
	 
    {
        ref:'gridTablaDep',
        selector:'gridTablaDep'
    }
   
    ],

    init	: function() {
        var me = this;
        me.control({
            'gridTablaDep dataview': { 
                itemdblclick: this.Editar
            },
            'gridTablaDep button[action=actAgregar]':
            {
                click:this.Agregar
            },
            
            'gridTablaDep button[action=actEditar]':
            {
                click:this.Editar
            },
            'FormAddEdicionTablaDep button[action=actAdd]'://Usando Ext.Component.Query
            {
				 
                click:this.AgregarTabla
            },
         
            'FormAddEdicionTablaDep button[action=actUpdate]'://Usando Ext.Component.Query
            {
				 
                click:this.ActualizarTabla
            },   
            'gridTablaDep button[action=actBorrar]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
            },
            'gridTablaDep button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            }     
			
			
			   
				  
        });
    },
    //Inician Funciones
    Search: function(button) {
        var win = button.up('toolbar'),
        nomb=win.getComponent('nomb').getValue();
        store=this.getTablaDepTablaDepStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_mod',nomb);
        store.load();
	     
       
    },				
    Agregar: function(){
        var FormEdit= Ext.widget('FormAddEdicionTablaDep');
        form=FormEdit.down('form');	
        field= form.down('toolbar');
        field.getComponent(2).setVisible(false);		
		
    },
    Editar: function(grid, record){	   	
        records = this.getGridTablaDep().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormAddEditar= Ext.widget('FormAddEdicionTablaDep');
            var EditForm=FormAddEditar.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
            field= EditForm.down('toolbar');	
            field.getComponent(1).setVisible(false);
        }
    },
    AgregarTabla: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record = Ext.create('SCVS.model.TablaDep.TablaDep');
        record.set(values);
        record.setId(0);
        this.getTablaDepTablaDepStore().add(record);		
        form.getForm().reset();
       
    },
    ActualizarTabla: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_tabla > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_tabla);
            this.getTablaDepTablaDepStore().update(record);
        }		
		
        win.close();
       
    },
	
    Eliminar: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridTablaDep();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        Normas=grid.getSelectionModel().getSelection()[0].data.concepto;		
		
        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getTablaDepTablaDepStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
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

 
















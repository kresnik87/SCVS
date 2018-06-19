Ext.define('SCVS.controller.Comp.Comp',{
    extend		: 'Ext.app.Controller',
    stores		: ['Comp.Comp'],
    models		: ['Comp.Comp'],
    views		: ['TablaProc.GrdComp','TablaProc.CapturaEdicionComp'],
    refs:[ 
	 
   
    {
        ref:'gridComp',
        selector:'gridComp'
    }
	
    ],

    init: function() {
        var me = this;
        me.control({
           
            'gridComp dataview': { 
                itemdblclick: this.EditarComp
            },
            'gridComp button[action=actAgregarComp]':
            {
                click:this.Agregar
            },
            'gridComp button[action=actEditarComp]':
            {
                click:this.EditarComp
            },
            'FormAddEdicionComp button[action=actAddComp]':
            {
				 
                click:this.AgregarComp
            },
            'FormAddEdicionComp button[action=actUpdateComp]':
            {
				 
                click:this.ActualizarComp
            },   
            'gridComp button[action=actBorrarComp]':
            {
                click:this.EliminarComp
            },
            'gridComp button[action=actSearchComp]':
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
        var FormAddEditar= Ext.widget('FormAddEdicionComp');
        form=FormAddEditar.down('form');	
        form.queryById('BtnActualizarComp').setVisible(false);		
		
    },
    EditarComp: function(grid, record){	   	
        records = this.getGridComp().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormAddEditar= Ext.widget('FormAddEdicionComp');
            var EditForm=FormAddEditar.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
           EditForm.queryById('BtnAddComp').setVisible(false);	
        }
    },

    AgregarComp: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record = Ext.create('SISGIVENT.model.Comp.Comp');
        record.set(values);
        record.setId(0);
        this.getCompCompStore().add(record);		
        form.getForm().reset();
       
    },
	
    ActualizarComp: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_comp > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_comp);
            this.getCompCompStore().update(record);
        }		
		
        win.close();
       
    },
	
    EliminarComp: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridComp();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        comp=grid.getSelectionModel().getSelection()[0].data.nomb_comp;
        store = this.getCompCompStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title : 'Eliminar Registro',
            buttons : Ext.MessageBox.YESNO,
            msg : 'Desea Eliminar '+' '+comp+' ?',
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

 
















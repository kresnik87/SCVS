Ext.define('SCVS.controller.InventarioAlm.InventarioMB',{
    extend		: 'Ext.app.Controller',
    stores		: ['InventarioAlm.InventarioMB'],
    models		: ['InventarioAlm.InventarioMB'],
    views		: ['InventarioAlm.GrdInventarioMB','InventarioAlm.CapturaEdicionInventarioMB'],
    refs:[
	 
    {
        ref:'gridInventarioMB',
        selector:'gridInventarioMB'//<<--Vista dentro de un Grid
    }
	
    ],

    init	: function() {
        var me = this;
        me.control({
            'gridInventarioMB dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
            },
            'gridInventarioMB button[action=actAgregar]'://Usando Ext.Component.Query
            {
                click:this.Agregar
            },
            'gridInventarioMB button[action=actEditar]'://Usando Ext.Component.Query
            {
                click:this.Editar
            },
            'FormAddEdicionInventarioMB button[action=actAdd]'://Usando Ext.Component.Query
            {
				 
                click:this.AgregarInventario
            },
            'FormAddEdicionInventarioMB button[action=actUpdate]'://Usando Ext.Component.Query
            {
				 
                click:this.ActualizarInventario
            },   
            'gridInventarioMB button[action=actBorrarMB]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
                
            },
              'gridInventarioMB button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            }
			
			   
				  
        });
    },
    //Inician Funciones
     Search: function(button) {
        var win = button.up('toolbar'),
        alm=win.getComponent('alm').getValue();
        store=this.getInventarioAlmInventarioAlmStore();
        proxy=store.getProxy();
        proxy.setExtraParam('alm',alm);
        store.load();
    },	
   		
    Agregar: function(){
        var FormAddEditarInventario= Ext.widget('FormAddEdicionInventarioMB');
        form=FormAddEditarInventario.down('form');
        form.queryById('BtnActualizarInvMB').setVisible(false);
			
    },
	
    Editar: function(grid, record){	   	
        records = this.getGridInventarioAlm().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormAddEditarInventario= Ext.widget('FormAddEdicionInventario');
            var EditForm=FormAddEditarInventario.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
            EditForm.queryById('BtnAddMB').setVisible(false);
		   
        }
         	 
    },
	
    AgregarInventario: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();	 
        record = Ext.create('SCVS.model.InventarioAlm.InventarioMB');
        record.set(values);
        record.setId(0);
        this.getInventarioAlmInventarioMBStore().add(record);		
        form.getForm().reset();
       
    },
	
    ActualizarInventario: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_inv > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_inv);
            this.getInventarioAlmInventarioAlmStore().update(record);
        }		
		
        win.close();
       
    },
	
    Eliminar: function()
    {
       
        var grid = this.getGridInventarioMB();
        record = grid.getSelectionModel().getSelection()[0]; 
        Inventario=grid.getSelectionModel().getSelection()[0].data.nomb_prod;
        store =  this.getInventarioAlmInventarioMBStore();
        Ext.MessageBox.show({
            title : 'Eliminar Registro',
            buttons : Ext.MessageBox.YESNO,
            msg : 'Desea Eliminar '+' '+Inventario+' ?',
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

 
















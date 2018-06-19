Ext.define('SCVS.controller.InventarioAlm.InventarioAlm',{
    extend		: 'Ext.app.Controller',
    stores		: ['InventarioAlm.InventarioAlm','InventarioAlm.RegVentaXCant'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['InventarioAlm.InventarioAlm','InventarioAlm.RegVentaXCant'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['InventarioAlm.GrdInventarioAlm','InventarioAlm.CapturaEdicionInventarioAlm','InventarioAlm.UpdateCostInvAlm','InventarioAlm.PanelInventarioAlm','InventarioAlm.RealizarVentaXCant'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
    {
        ref:'gridInventarioAlm',
        selector:'gridInventarioAlm'//<<--Vista dentro de un Grid
    },
     {
        ref:'panelGrdInventarioAlm',
        selector:'panelGrdInventarioAlm'//<<--Vista dentro de un Grid
    },
	{ 
		ref:'FormAddVentaXCant',
		selector:'FormAddVentaXCant'
		
	}
	
    ],

    init	: function() {
        var me = this;
        me.control({
            
            'gridInventarioAlm button[action=actAgregar]'://Usando Ext.Component.Query
            {
                click:this.Agregar
            },
          
            'FormAddEdicionInventario button[action=actAdd]'://Usando Ext.Component.Query
            {
				 
                click:this.AgregarInventario
            },
             'FormUpdateCost button[action=actUpdateCost]'://Usando Ext.Component.Query
            {
				 
                click:this.UpdateCost
            },
          
            'gridInventarioAlm button[action=actBorrar]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
                
            },
             'gridInventarioAlm button[action=actUpdate]'://Usando Ext.Component.Query
            {
                click:this.Update
                
            },
         
              'panelGrdInventarioAlm button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            },
            'panelGrdInventarioAlm button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            }, 
			'gridInventarioAlm button[action=actVentxCant]'://Usando Ext.Component.Query
            {
                click:this.AgregarVenta
            },
			 'FormAddVentaXCant button[action=actAddVenta]'://Usando Ext.Component.Query
            {
				 
                click:this.UpdateVenta
            }
			
			
			   
				  
        });
    },
    //Inician Funciones
     Search: function(button) {
        var win   = button.up('form'),	
        id_alm=win.queryById('id_alm').getValue();
        nomb_prod=win.queryById('nombre_prod_alm').getValue();
        id_tipo=win.queryById('id_tipo_prod_alm').getValue();
        p_costo=win.queryById('precio_costo_alm').getValue();
        marca=win.queryById('marca_alm').getValue();
        descripcion=win.queryById('descripcion_alm').getValue();
        costo_inicial=win.queryById('p_costo_inicial_alm').getValue();
        costo_final=win.queryById('p_costo_final_alm').getValue();
        store=this.getInventarioAlmInventarioAlmStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
        proxy.setExtraParam('id_alm',id_alm);
        proxy.setExtraParam('p_costo',p_costo);
        proxy.setExtraParam('marca',marca);
        proxy.setExtraParam('descripcion',descripcion);
        proxy.setExtraParam('costo_inicial',costo_inicial);
        proxy.setExtraParam('costo_final',costo_final);
        proxy.setExtraParam('filtro',"true");
        store.load({
            params:{
                start:0,
                limit: 100 
            }
        });
       
    },	
    Clean: function(button) {
        var form   = button.up('form');
        form.getForm().reset();
    },
    Agregar: function(){
        var FormAddEditarInventario= Ext.widget('FormAddEdicionInventario');
        form=FormAddEditarInventario.down('form');
        form.queryById('BtnActualizar').setVisible(false);
			
    },
	AgregarVenta: function(){
        records = this.getGridInventarioAlm().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormUpdate= Ext.widget('FormAddVentaXCant');
            var EditForm=FormUpdate.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
        }
    },
	 UpdateVenta: function(button) {
       var win = button.up('window'),
	   form = win.down('form'),
        values = form.getValues();
        record = Ext.create('SCVS.model.InventarioAlm.RegVentaXCant');
        record.set(values);
        record.setId(0);
        this.getInventarioAlmRegVentaXCantStore().add(record);
        form.getForm().reset();
       
    },
	
    Update: function(grid, record){	   	
        records = this.getGridInventarioAlm().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormUpdate= Ext.widget('FormUpdateCost');
            var EditForm=FormUpdate.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
        }
         	 
    },
     UpdateCost: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_inv_alm > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_inv_alm);
            this.getInventarioAlmInventarioAlmStore().update(record);
        }		
		
        win.close();
       
    },
	
    AgregarInventario: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();	 
        record = Ext.create('SCVS.model.InventarioAlm.InventarioAlm');
        record.set(values);
        record.setId(0);
        this.getInventarioAlmInventarioAlmStore().add(record);		
        form.getForm().reset();
       
    },
	
   
	
    Eliminar: function()
    {
       
        var grid = this.getGridInventarioAlm();
        record = grid.getSelectionModel().getSelection()[0]; 
        Inventario=grid.getSelectionModel().getSelection()[0].data.nomb_prod;
        store =  this.getInventarioAlmInventarioAlmStore();
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

 
















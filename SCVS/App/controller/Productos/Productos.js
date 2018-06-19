Ext.define('SCVS.controller.Productos.Productos',{
    extend		: 'Ext.app.Controller',
    stores		: ['Productos.Productos'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['Productos.Productos'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['Productos.GrdProductos','Productos.CapturaEdicionProductos','Productos.PanelProductos'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
    {
        ref:'gridProductos',
        selector:'gridProductos'//<<--Vista dentro de un Grid
    },
    {
        ref:'panelGrdProductos',
        selector:'panelGrdProductos'//<<--Vista dentro de un Grid
    }
	
    ],

    init	: function() {
        var me = this;
        me.control({
            'gridProductos dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
            },
            'gridProductos button[action=actAgregar]'://Usando Ext.Component.Query
            {
                click:this.Agregar
            },
            'gridProductos button[action=actEditar]'://Usando Ext.Component.Query
            {
                click:this.Editar
            },
            'FormAddEdicionProductos button[action=actAdd]'://Usando Ext.Component.Query
            {
				 
                click:this.AgregarProductos
            },
            'FormAddEdicionProductos button[action=actUpdate]'://Usando Ext.Component.Query
            {
				 
                click:this.ActualizarProductos
            },   
            'gridProductos button[action=actBorrar]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
            },
            'panelGrdProductos button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            },
            'panelGrdProductos button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            },     
			
			
			   
				  
        });
    },
    //Inician Funciones
   Search: function(button) {
        var win   = button.up('form'),	
        nomb_prod=win.queryById('nombre_prod').getValue();
        id_tipo=win.queryById('id_tipo_prod').getValue();
        p_costo=win.queryById('precio_costo').getValue();
        marca=win.queryById('marca').getValue();
        descripcion=win.queryById('descripcion').getValue();
        costo_inicial=win.queryById('p_costo_inicial').getValue();
        costo_final=win.queryById('p_costo_final').getValue();
        store=this.getProductosProductosStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
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
        var FormAddEditarProductos= Ext.widget('FormAddEdicionProductos');
        form=FormAddEditarProductos.down('form');	
        field= form.down('toolbar');
        form.queryById('BtnActualizar').setVisible(false);		
		
    },
	
    Editar: function(grid, record){	   	
        records = this.getGridProductos().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormAddEditarProductos= Ext.widget('FormAddEdicionProductos');
            var EditForm=FormAddEditarProductos.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
            field= EditForm.down('toolbar');	
            EditForm.queryById('BtnAdd').setVisible(false);
		   
        }
         	 
    },
	
    AgregarProductos: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord(),
        values = form.getValues();
        record = Ext.create('SCVS.model.Productos.Productos');
        record.set(values);
        record.setId(0);
        this.getProductosProductosStore().add(record);		
         win.close();
       
    },
	
    ActualizarProductos: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_prod > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_prod);
            this.getProductosProductosStore().update(record);
        }		
		
        win.close();
       
    },
	
    Eliminar: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridProductos();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        Productos=grid.getSelectionModel().getSelection()[0].data.nomb_prod;		
		
        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getProductosProductosStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
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

 
















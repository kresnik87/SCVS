Ext.define('SCVS.controller.InventarioAlm.ExistenciaAlm',{
    extend		: 'Ext.app.Controller',
    stores		: ['InventarioAlm.ExistenciaAlm'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['InventarioAlm.ExistenciaAlm'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['InventarioAlm.GrdExistAlm','InventarioAlm.PanelExistAlm'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
   
     {
        ref:'panelGrdExistAlm',
        selector:'panelGrdExistAlm'//<<--Vista dentro de un Grid
    }
	
    ],

    init	: function() {
        var me = this;
        me.control({
            
              'panelGrdExistAlm button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            },
            'panelGrdExistAlm button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            } 
						
			
			   
				  
        });
    },
    //Inician Funciones
     Search: function(button) {
        var win   = button.up('form'),	
        id_alm=win.queryById('id_alm').getValue();
        nomb_prod=win.queryById('nomb_prod').getValue();
        id_tipo=win.queryById('id_tipo_prod').getValue();
        p_costo=win.queryById('precio_costo').getValue();
        marca=win.queryById('marca').getValue();
        costo_inicial=win.queryById('p_costo_inicial').getValue();
        costo_final=win.queryById('p_costo_final').getValue();
        fecha_inicial=win.queryById('fecha_inicial').getValue();
        store=this.getInventarioAlmExistenciaAlmStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
        proxy.setExtraParam('id_alm',id_alm);
        proxy.setExtraParam('p_costo',p_costo);
        proxy.setExtraParam('marca',marca);
        proxy.setExtraParam('p_costo_inicial',costo_inicial);
        proxy.setExtraParam('p_costo_final',costo_final);
        proxy.setExtraParam('fecha_inicial',fecha_inicial);
        
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
    }
    
});

 
















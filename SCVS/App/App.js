
		
Ext.application({  
    name        : 'SCVS', 
    appFolder	:'../../SCVS/App',
    controllers	: ['Almacen.Almacen','Area.Area','Servicio.Serv','TProd.TProd','TablaDep.TablaDep','Productos.Productos','Productos.ProductosRep',
                    'InventarioAlm.InventarioAlm','InventarioAlm.InventarioMB','BProd.BProd','BAlm.BAlm','Usuarios.Usuarios','InventarioAlm.ExistenciaAlm',
                    'InventarioVent.InventarioVent','Venta.Venta','Venta.RegVenta','Reportes.ReportAlm','Reportes.Reportes','Reportes.ReportArea','Servicio.RegServicio','Reportes.RegVentaXCant'],		
    launch      : function(){  
        var MyViewPrincipal = Ext.create("SCVS.view.Principal.MyViewport")
			  
    } 
});  
	
	
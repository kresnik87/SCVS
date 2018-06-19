
Ext.define('SCVS.view.Almacen.PanelAlmacen', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdAlmacen',
    closable: false,  	
    layout:'fit',
    itemId:'TabListadoAlmacen',
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Almacen.GrdAlmacen'); //Agregamos el Grid al PanelTab
        this.callParent();
    }
	

});
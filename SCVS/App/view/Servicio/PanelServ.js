
Ext.define('SCVS.view.Servicio.PanelServ', {
    extend: 'Ext.Panel',
	alias:'widget.panelGrdServ',
	closable: false,  	
    layout:'fit',
	itemId:'TabListadoServ',
	initComponent: function() {
	    var me = this;
		me.items = Ext.create('SCVS.view.Servicio.GrdServ'); //Agregamos el Grid al PanelTab
		this.callParent();
    }
	

});
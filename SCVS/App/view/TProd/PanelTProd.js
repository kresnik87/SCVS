
Ext.define('SCVS.view.TProd.PanelTProd', {
    extend: 'Ext.Panel',
	alias:'widget.panelGrdTProd',
	closable: false,  	
    layout:'fit',
	itemId:'TabListadoTProd',
	initComponent: function() {
	    var me = this;
		me.items = Ext.create('SCVS.view.TProd.GrdTProd'); //Agregamos el Grid al PanelTab
		this.callParent();
    }
	

});
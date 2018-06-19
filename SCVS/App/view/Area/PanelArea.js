//TabClientes de la Aplicacion Hiber Tadeo Moreno Tovilla
Ext.define('SCVS.view.Area.PanelArea', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdArea',
    closable: false,  	
    layout:'fit',
    itemId:'TabListadoArea',
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Area.GrdArea'); //Agregamos el Grid al PanelTab
        this.callParent();
    }
	

});
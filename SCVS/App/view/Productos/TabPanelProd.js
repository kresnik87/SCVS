
Ext.define('SCVS.view.Productos.TabPanelProd', {
    extend: 'Ext.tab.Panel',
    alias:'widget.tabpanelProd',
    deferredRender: true,
    frame:true,
    activeTab: 0,  
    closable: false,  	
    height: 560,
    width: 900,
    initComponent: function() {
        var me = this;
        me.items =[ Ext.create('SCVS.view.Productos.GrdProductos')]; //Agregamos el Grid al PanelTab
        this.callParent();
    }
	

});
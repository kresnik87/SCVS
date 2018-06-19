
Ext.define('SCVS.view.InventarioAlm.TabPanelInv', {
    extend: 'Ext.tab.Panel',
    alias:'widget.tabpanelGen',
    deferredRender: true,
    frame:true,
    activeTab: 0,  
    closable: false,
    height: 560,
    width: 900,
    initComponent: function() {
        var me = this;
        me.items =[ Ext.create('SCVS.view.InventarioAlm.GrdInventarioAlm')];
        this.callParent();
    }
	

});
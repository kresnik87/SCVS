
Ext.define('SCVS.view.Reportes.PanelReportProdVend', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdReportProdVend',
    closable: false,  	
    layout:'fit',
	
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Reportes.GrdReportAlm'); 
        this.callParent();
    }
	

});

Ext.define('SCVS.view.Reportes.PanelReportSalAlm', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdReportSalAlm',
    closable: false,  	
    layout:'fit',
	
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Reportes.GrdReportSalAlm'); 
        this.callParent();
    }
	

});
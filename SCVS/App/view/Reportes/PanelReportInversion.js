
Ext.define('SCVS.view.Reportes.PanelReportInversion', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdReportInversion',
    closable: false,  	
    layout:'fit',
	
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Reportes.GrdReportInversion'); 
        this.callParent();
    }
	

});
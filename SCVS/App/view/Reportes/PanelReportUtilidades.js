
Ext.define('SCVS.view.Reportes.PanelReportUtilidades', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdReportUtilidades',
    closable: false,  	
    layout:'fit',
	
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Reportes.GrdReportUtilidades'); 
        this.callParent();
    }
	

});
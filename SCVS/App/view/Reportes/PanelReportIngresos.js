
Ext.define('SCVS.view.Reportes.PanelReportIngresos', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdReportIngresos',
    closable: false,  	
    layout:'fit',
	
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Reportes.GrdReportIngresos'); 
        this.callParent();
    }
	

});
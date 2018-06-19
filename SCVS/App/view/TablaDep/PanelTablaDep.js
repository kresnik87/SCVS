Ext.define('SCVS.view.TablaDep.PanelTablaDep', {
    extend: 'Ext.Panel',
    alias: 'widget.panelGrdTablaDep',
    closable: false,
    layout: 'fit',
    itemId: 'TabListadoTablaDep',
    initComponent: function () {
        var me = this;
        me.items = Ext.create('SCVS.view.TablaDep.GrdTablaDep'); //Agregamos el Grid al PanelTab
        this.callParent();
    }


});
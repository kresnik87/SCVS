
Ext.define('SCVS.view.BProd.PanelBProd', {
    extend: 'Ext.Panel',
    alias: 'widget.panelBProd',
    padding: '0 0 0 5',
    height: 300,
    width: 650,
    border: true,
    closable: false,
    layout: 'fit',
    itemId: 'TabListadoBProd',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                Ext.create('SCVS.view.BProd.GrdBProd')]
        });

        this.callParent();
    }


});
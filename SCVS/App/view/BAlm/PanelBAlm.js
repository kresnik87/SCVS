
Ext.define('SCVS.view.BAlm.PanelBAlm', {
    extend: 'Ext.Panel',
    alias: 'widget.panelBAlm',
    padding: '0 0 0 5',
    height: 320,
    width: 660,
    border: true,
    closable: false,
    layout: 'fit',
    itemId: 'TabListadoBAlm',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                Ext.create('SCVS.view.BAlm.GrdBAlm')]
        });

        this.callParent();
    }


});
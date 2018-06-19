Ext.define('SCVS.view.Usuarios.PanelUser', {
    extend: 'Ext.Panel',
    alias:'widget.panelGrdUser',
    closable: false,  	
    layout:'fit',
    initComponent: function() {
        var me = this;
        me.items = Ext.create('SCVS.view.Usuarios.GrdUser'); 
        this.callParent();
    }
	

});
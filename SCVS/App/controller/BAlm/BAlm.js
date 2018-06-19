Ext.define('SCVS.controller.BAlm.BAlm', {
    extend: 'Ext.app.Controller',
    stores: ['BAlm.BAlm'], 
    models: ['BAlm.BAlm'], 
    views: ['BAlm.GrdBAlm', 'BAlm.PanelBAlm'],
    refs: [
        {
            ref: 'gridBAlm',
            selector: 'gridBAlm'
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridBAlm button[action=actSearch]': 
                    {
                        click: this.Search,
                        focus: this.Search
                    }
        });
    },
    //Inician Funciones
    Search: function (button) {
        var win = button.up('toolbar'),
        alm = win.getComponent('alm').getValue();
        prod = win.getComponent('prod').getValue();
        store = this.getBAlmBAlmStore();
        proxy = store.getProxy();
        proxy.setExtraParam('id_alm', alm);
        proxy.setExtraParam('nomb_prod', prod);
        proxy.setExtraParam('id_tipo','');
        proxy.setExtraParam('p_costo','');
        proxy.setExtraParam('marca','');
        proxy.setExtraParam('descripcion','');
        proxy.setExtraParam('tipo_compra','');
        proxy.setExtraParam('id_estado','');
        proxy.setExtraParam('costo_inicial','');
        proxy.setExtraParam('costo_final','');
        proxy.setExtraParam('filtro',"true");
        store.load();
    }


});


















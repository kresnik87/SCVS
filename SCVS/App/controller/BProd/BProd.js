Ext.define('SCVS.controller.BProd.BProd', {
    extend: 'Ext.app.Controller',
    stores: ['BProd.BProd'], //Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models: ['BProd.BProd'], //Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views: ['BProd.GrdBProd', 'BProd.PanelBProd'],
    refs: [//Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller

        {
            ref: 'gridBProd',
            selector: 'gridBProd'//<<--Vista dentro de un Grid
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridBProd button[action=actSearch]': //Usando Ext.Component.Query
                    {
                        click: this.Search,
                        focus: this.Search
                    }
        });
    },
    //Inician Funciones

    Search: function (button) {
        var win = button.up('toolbar'),
        nomb_prod = win.getComponent('nomb_prod').getValue();
        store = this.getBProdBProdStore();
        proxy = store.getProxy();
        proxy.setExtraParam('nomb_prod', nomb_prod);
        proxy.setExtraParam('filtro',"true");
        proxy.setExtraParam('id_tipo','');
        proxy.setExtraParam('p_costo','');
        proxy.setExtraParam('marca','');
        proxy.setExtraParam('descripcion','');
        proxy.setExtraParam('costo_inicial','');
        proxy.setExtraParam('costo_final','');
        store.load();


    }


});


















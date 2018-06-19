Ext.define('SCVS.controller.TProd.TProd', {
    extend: 'Ext.app.Controller',
    stores: ['TProd.TProd'],
    models: ['TProd.TProd'],
    views: ['TProd.GrdTProd', 'TProd.CapturaEdicionTProd'],
    refs: [
        {
            ref: 'gridTProd',
            selector: 'gridTProd'
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridTProd dataview': {
                itemdblclick: this.Editar
            },
            'gridTProd button[action=actAgregar]':
                    {
                        click: this.Agregar
                    },
            'gridTProd button[action=actEditar]':
                    {
                        click: this.Editar
                    },
            'FormAddEdicionTProd button[action=actAdd]': //Usando Ext.Component.Query
                    {
                        click: this.AgregarTProd
                    },
            'FormAddEdicionTProd button[action=actUpdate]': //Usando Ext.Component.Query
                    {
                        click: this.ActualizarTProd
                    },
            'gridTProd button[action=actBorrar]': //Usando Ext.Component.Query
                    {
                        click: this.Eliminar
                    },
            'gridTProd button[action=actSearch]': //Usando Ext.Component.Query
                    {
                        click: this.Search,
                        focus: this.Search
                    }




        });
    },
    //Inician Funciones
    Search: function (button) {
        var win = button.up('toolbar'),
                nomb = win.getComponent('nomb').getValue();
        store = this.getTablaProcTablaProcStore();
        proxy = store.getProxy();
        proxy.setExtraParam('nomb_mod', nomb);
        store.load();


    },
    Agregar: function () {
        var FormEdit = Ext.widget('FormAddEdicionTProd');
        form = FormEdit.down('form');
        field = form.down('toolbar');
        field.getComponent(2).setVisible(false);

    },
    Editar: function (grid, record) {
        records = this.getGridTProd().getSelectionModel().getSelection();
        if (records.length > 0) {
            var FormAddEditar = Ext.widget('FormAddEdicionTProd');
            var EditForm = FormAddEditar.down('form');
            var record = records[0];
            EditForm.loadRecord(record);
            field = EditForm.down('toolbar');
            field.getComponent(1).setVisible(false);
        }
    },
    AgregarTProd: function (button) {
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();
        record = Ext.create('SCVS.model.TProd.TProd');
        record.set(values);
        record.setId(0);
        this.getTProdTProdStore().add(record);
        form.getForm().reset();

    },
    ActualizarTProd: function (button) {
        var win = button.up('window'),
                form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        if (values.id_tipo_prod > 0) { //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_tipo_prod);
            this.getTProdTProdStore().update(record);
        }

        win.close();

    },
    Eliminar: function ()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridTProd();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0];
        Normas = grid.getSelectionModel().getSelection()[0].data.tipo_prod;

        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getTProdTProdStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title: 'Eliminar Registro',
            buttons: Ext.MessageBox.YESNO,
            msg: 'Desea Eliminar ' + ' ' + Normas + ' ?',
            icon: Ext.Msg.WARNING,
            fn: function (btn)
            {
                if (btn == 'yes')
                {

                    store.remove(record);
                }

            }
        });
    }
});


















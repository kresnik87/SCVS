Ext.define('SCVS.controller.Almacen.Almacen', {
    extend: 'Ext.app.Controller',
    stores: ['Almacen.Almacen'], //Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models: ['Almacen.Almacen'], //Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views: ['Almacen.GrdAlmacen', 'Almacen.CapturaEdicionAlmacen'],
    refs: [//Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller

        {
            ref: 'gridAlmacen',
            selector: 'gridAlmacen'//<<--Vista dentro de un Grid
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridAlmacen dataview': {//Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
            },
            'gridAlmacen button[action=actAgregar]': //Usando Ext.Component.Query
                    {
                        click: this.Agregar
                    },
            'gridAlmacen button[action=actEditar]': //Usando Ext.Component.Query
                    {
                        click: this.Editar
                    },
            'FormAddEdicionAlmacen button[action=actAdd]': //Usando Ext.Component.Query
                    {
                        click: this.AgregarAlmacen
                    },
            'FormAddEdicionAlmacen button[action=actUpdate]': //Usando Ext.Component.Query
                    {
                        click: this.ActualizarAlmacen
                    },
            'gridAlmacen button[action=actBorrar]': //Usando Ext.Component.Query
                    {
                        click: this.Eliminar
                    }




        });
    },
    //Inician Funciones

    Agregar: function () {
        var FormAddEditarAlmacen = Ext.widget('FormAddEdicionAlmacen');
        form = FormAddEditarAlmacen.down('form');
        field = form.down('toolbar');
        field.getComponent(2).setVisible(false);

    },
    Editar: function (grid, record) {
        records = this.getGridAlmacen().getSelectionModel().getSelection();
        if (records.length > 0) {
            var FormAddEditarAlmacen = Ext.widget('FormAddEdicionAlmacen');
            var EditForm = FormAddEditarAlmacen.down('form');
            var record = records[0];
            EditForm.loadRecord(record);
            field = EditForm.down('toolbar');
            field.getComponent(1).setVisible(false);

        }

    },
    AgregarAlmacen: function (button) {
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();
        record = Ext.create('SCVS.model.Almacen.Almacen');
        record.set(values);
        record.setId(0);
        this.getAlmacenAlmacenStore().add(record);
        form.getForm().reset();

    },
    ActualizarAlmacen: function (button) {
        var win = button.up('window'),
                form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        if (values.id_alm > 0) { //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_alm);
            this.getAlmacenAlmacenStore().update(record);
        }

        win.close();

    },
    Eliminar: function ()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridAlmacen();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0];
        Almacen = grid.getSelectionModel().getSelection()[0].data.nomb_alm;

        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getAlmacenAlmacenStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title: 'Eliminar Registro',
            buttons: Ext.MessageBox.YESNO,
            msg: 'Desea Eliminar ' + ' ' + Almacen + ' ?',
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


















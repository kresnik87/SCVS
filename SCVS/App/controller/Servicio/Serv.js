Ext.define('SCVS.controller.Servicio.Serv', {
    extend: 'Ext.app.Controller',
    stores: ['Servicio.Serv','TipoCosto.TipoCosto'], //Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models: ['Servicio.Serv','TipoCosto.TipoCosto'], //Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views: ['Servicio.GrdServ', 'Servicio.CapturaEdicionServ'],
    refs: [//Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller

        {
            ref: 'gridServ',
            selector: 'gridServ'//<<--Vista dentro de un Grid
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridServ dataview': {//Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar,
            },
            'gridServ button[action=actAgregar]': //Usando Ext.Component.Query
                    {
                        click: this.Agregar
                    },
            'gridServ button[action=actEditar]': //Usando Ext.Component.Query
                    {
                        click: this.Editar
                    },
            'FormAddEdicionServ button[action=actAdd]': //Usando Ext.Component.Query
                    {
                        click: this.AgregarServicio
                    },
            'FormAddEdicionServ button[action=actUpdate]': //Usando Ext.Component.Query
                    {
                        click: this.ActualizarServicio
                    },
            'gridServ button[action=actBorrar]': //Usando Ext.Component.Query
                    {
                        click: this.Eliminar
                    }




        });
    },
    //Inician Funciones

    Agregar: function () {
        var FormAddEditarUM = Ext.widget('FormAddEdicionServ');
        form = FormAddEditarUM.down('form');
        field = form.down('toolbar');
        field.getComponent(2).setVisible(false);

    },
    Editar: function (grid, record) {
        records = this.getGridServ().getSelectionModel().getSelection();
        if (records.length > 0) {
            var FormAddEditarUM = Ext.widget('FormAddEdicionServ');
            var EditForm = FormAddEditarUM.down('form');
            var record = records[0];
            EditForm.loadRecord(record);
            field = EditForm.down('toolbar');
            field.getComponent(1).setVisible(false);

        }

    },
    AgregarServicio: function (button) {
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();
        record = Ext.create('SCVS.model.Servicio.Serv');
        record.set(values);
        record.setId(0);
        this.getServicioServStore().add(record);
        form.getForm().reset();

    },
    ActualizarServicio: function (button) {
        var win = button.up('window'),
                form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        if (values.id_serv > 0) { //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_serv);
            this.getServicioServStore().update(record);
        }

        win.close();

    },
    Eliminar: function ()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridServ();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0];
        UM = grid.getSelectionModel().getSelection()[0].data.nomb_servicio;

        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getServicioServStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title: 'Eliminar Registro',
            buttons: Ext.MessageBox.YESNO,
            msg: 'Desea Eliminar ' + ' ' + UM + ' ?',
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


















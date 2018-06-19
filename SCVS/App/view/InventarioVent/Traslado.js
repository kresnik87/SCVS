Ext.define('SCVS.view.InventarioVent.Traslado', {
    extend: 'Ext.window.Window',
    alias:'widget.FormTraslado',
    height: 350,
    width: 300,
    resizable:false,
    iconCls: 'transf',
    bodyPadding: '10 10 10 10',	
    autoShow: true,
    layout: {
        type: 'fit'
    },
    bodyStyle: {
       background: THEME
    },
    closable: false,
    title: 'Traslado entre Areas de Venta',
    modal: true,
    initComponent: function() {
        var me = this;
        var storeArea=Ext.create('SCVS.store.Area.Area'); 
        storeArea.load();
       
        
        Ext.applyIf(me, {
            items: [
            {	
                xtype: 'form',
                id: 'FormTraslado',
                bodyPadding: '5 5 5 5',
                bodyStyle: {
                    background: THEME
                },
               
                fieldDefaults: {
                    labelAlign: 'top',
                    msgTarget: 'side'
                },
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'container',
                    
                    items:[{
                        xtype: 'container',
                        flex: 1,
                        border:false,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            xtype : "textfield", 
                            name :'id_prod',
                            hidden:true
                        },
                        {
                            xtype : "textfield",
                            name :'id_inv_area',
                            hidden:true
                        },
                        
                         {
                            xtype : "textfield",
                            name :'id_estado',
                            hidden:true
                        },
                         {
                            xtype : "textfield",
                            name :'id_area',
                            hidden:true
                        },
                        {
                            fieldLabel: 'Producto',
                            labelCls:'ficha_label',
                            disabled:true,
                            name: 'nomb_prod',
                            anchor:'85%'
                        },{
                            xtype : "datefield",
                            format: 'Y/m/d',
                            labelCls:'ficha_label',
                            name : 'fecha',
							anchor:'85%',
                            allowBlank:false,
                            fieldLabel : "Fecha"
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        defaultType: 'textfield',
                        items: [{
                            xtype: 'numberfield',
                            fieldLabel: 'Cantidad',
                            labelCls:'ficha_label',
                            name:'cantidad',
							anchor:'85%',
                            minValue:'0',
                            flex: 1,
                            allowBlank: false
                        }]
                    }]
                }],
                dockedItems : [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id:'buttons',
                    ui: 'footer',
                    items: ['->',{
                        id: 'BtnAdd',
                        iconCls: 'add_user',
                        disabled:true,
                        formBind:true,
                        text: 'Traslado',
                        action: 'actAddTraslado'
                    },{
							
                        text: 'Cancelar',
                        iconCls: 'cancel',
                        scope: this,
                        handler: this.close
                    }]
                }]
            }]
        }); 
		   
        me.callParent(arguments);
    }
   
});	
						
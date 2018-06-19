<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />    
        <title>Sistema Control de Ventas y Servicios</title>
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>SCVS/css/portal.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>SCVS/lib/resources/css/ext-all-neptune.css"/>    	
        <link rel="shortcut icon"  href="<?php echo base_url(); ?>SCVS/icons/buy.ico"/> <type="image/x-icon" />	
        <link rel="stylesheet" href="<?php echo base_url(); ?>lib/bootstrap/css/bootstrap.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="<?php echo base_url(); ?>lib/font-awesome/css/font-awesome.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="<?php echo base_url(); ?>lib/ionicons/css/ionicons.min.css">
      
        <!-- Theme style -->
        <link rel="stylesheet" href="<?php echo base_url(); ?>lib/dist/css/AdminLTE.min.css">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
         <link rel="stylesheet" href="<?php echo base_url(); ?>lib/dist/css/skins/_all-skins.min.css">
         <link rel="stylesheet" href="<?php echo base_url(); ?>lib/dist/css/skins/_all-skins.min.css">
          <!-- iCheck -->
          <link rel="stylesheet" href="<?php echo base_url(); ?>lib/plugins/iCheck/flat/blue.css">
          <!-- Morris chart -->
          <link rel="stylesheet" href="<?php echo base_url(); ?>lib/plugins/morris/morris.css">
        
          <!-- bootstrap wysihtml5 - text editor -->
        <link rel="stylesheet" href="<?php echo base_url(); ?>lib/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
        <script type="text/javascript" src="<?php echo base_url(); ?>SCVS/lib/ext-all-dev.js"; ?>"></script>
            <script type="text/javascript" src="<?php echo base_url(); ?>SCVS/lib/ext-theme-neptune.js"; ?>"></script> 
            <script type="text/javascript" src="<?php echo base_url(); ?>SCVS/app/App.js"; ?>"></script>
            <script type="text/javascript" src="<?php echo base_url(); ?>SCVS/lib/src/ux/Exporter/Exporter.js" ></script>

            <script type="text/javascript">
                        var BASE_URL = '<?php echo base_url(); ?>' + 'index.php/';
                        var BASE_URL1 = '<?php echo base_url(); ?>';
                        Ext.Loader.setPath('SCVS', BASE_URL1 + 'SCVS/app');
            </script>
    </head>

    <body>
       
        <section class="content" id="center">
             <!-- Small boxes (Stat box) -->
                 <div class="row">
                     <div class="col-lg-3 col-xs-6">
                 <!-- small box -->
                     <div class="small-box bg-aqua">
                    <div class="inner">
                    <h3><?php echo ($prod); ?></h3>
                   <p>Productos</p>
                 </div>
                    <div class="icon">
                              <i class="ion ion-iphone"></i>
                            </div>
                            <a href="" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-3 col-xs-6">
                          <!-- small box -->
                          <div class="small-box bg-green">
                            <div class="inner">
                              <h3><?php echo ($cap_inv); ?><sup style="font-size: 20px">$</sup></h3>

                              <p>Capital Invertido</p>
                            </div>
                            <div class="icon">
                              <i class="ion ion-cash"></i>
                            </div>
                            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-3 col-xs-6">
                          <!-- small box -->
                          <div class="small-box bg-yellow">
                            <div class="inner">
                              <h3>53<sup style="font-size: 20px">$</sup></h3>

                              <p>Utilidades</p>
                            </div>
                            <div class="icon">
                              <i class="ion ion-card"></i>
                            </div>
                            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-3 col-xs-6">
                          <!-- small box -->
                          <div class="small-box bg-red">
                            <div class="inner">
                              <h3>65</h3>

                              <p>Unique Visitors</p>
                            </div>
                            <div class="icon">
                              <i class="ion ion-pie-graph"></i>
                            </div>
                            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                        <!-- ./col -->
                      </div>
                      <!-- /.row -->
                       <div class="row">
        <div class="col-md-6">
          <!-- AREA CHART -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Ventas Mensuales Areas de Venta</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <div class="box-body">
              <div class="chart">
                <canvas id="areaChart" style="height:250px"></canvas>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          <!-- DONUT CHART -->
        </div>
        <!-- /.col (LEFT) -->
        <div class="col-md-6">
         <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">TOP 5 Productos Mas Vendidos</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>
                    <th>ID Prod</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Tipo Producto</th>
                  </tr>
                  </thead>
                  <tbody>
                  <?foreach ($top_five as $dat):?>
                  <tr>
                     <td><span class="label label-info"><?echo $dat->id_prod?></td>
                     <td><span class="label label-success"><?echo $dat->nomb_prod?></span></td>
                     <td><span class="label label-danger"><?echo $dat->Total?></td>
                     <td><span class="label label-warning"><?echo $dat->tipo_prod?></td>
                  </tr>
                   <? endforeach ?>

                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">Ver Todos</a>
            </div>
            <!-- /.box-footer -->
          </div> 
         

          </div>
            <!-- /.box-body -->
          </div>
                    </section>
               
         <div id="south" class="x-hide-display">
           <p>Aqui va el status bar</p>
                    </div>
    <script src="<?php echo base_url(); ?>lib/plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="<?php echo base_url(); ?>lib/plugins/jQueryUI/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.6 -->
<script src="<?php echo base_url(); ?>lib/bootstrap/js/bootstrap.min.js"></script>
<!-- Morris.js charts -->
<script src="<?php echo base_url(); ?>lib/plugins/morris/morris.min.js"></script>
<!-- Sparkline -->
<script src="<?php echo base_url(); ?>lib/plugins/sparkline/jquery.sparkline.min.js"></script>

<!-- jQuery Knob Chart -->
<script src="<?php echo base_url(); ?>lib/plugins/knob/jquery.knob.js"></script>
<!-- daterangepicker --><script src="<?php echo base_url(); ?>lib/plugins/daterangepicker/daterangepicker.js"></script>
<!-- datepicker -->
<script src="<?php echo base_url(); ?>lib/plugins/datepicker/bootstrap-datepicker.js"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="<?php echo base_url(); ?>lib/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
<!-- Slimscroll -->
<script src="<?php echo base_url(); ?>lib/plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="<?php echo base_url(); ?>lib/plugins/fastclick/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="<?php echo base_url(); ?>lib/dist/js/app.min.js"></script>
<script src="<?php echo base_url(); ?>lib/plugins/chartjs/Chart.min.js"></script>
<script>
  $(function () {
    /* ChartJS
     * -------
     * Here we will create a few charts using ChartJS
     */

    //--------------
    //- AREA CHART -
    //--------------

    // Get context with jQuery - using jQuery's .get() method.
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var areaChart = new Chart(areaChartCanvas);

    var areaChartData = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
      datasets: [
        {
          label: "TecnoOne Caridad",
          fillColor: "rgba(210, 214, 222, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "TecnoOne Republica",
          fillColor: "rgba(60,141,188,0.9)",
          strokeColor: "rgba(60,141,188,0.8)",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    var areaChartOptions = {
      //Boolean - If we should show the scale at all
      showScale: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: false,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - Whether the line is curved between points
      bezierCurve: true,
      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.3,
      //Boolean - Whether to show a dot for each point
      pointDot: false,
      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,
      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,
      //Boolean - Whether to fill the dataset with a color
      datasetFill: true,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
      //Boolean - whether to make the chart responsive to window resizing
      responsive: true
    };

    //Create the line chart
    areaChart.Line(areaChartData, areaChartOptions);

   
     });
</script>
   </body>
   </html>
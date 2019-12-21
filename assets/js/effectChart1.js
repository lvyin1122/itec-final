am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv4", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [{
            type: "Negative",
            percent: 0.4643 * 34490
        },
        {
            type: "Positive",
            percent: 0.0678 * 34490
        },
        {
            type: "Both",
            percent: 0.4679 * 34490
        }
    ];

    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "percent";
    series.dataFields.category = "type";

}); // end am4core.ready()
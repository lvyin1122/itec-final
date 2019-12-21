am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv22", am4charts.XYChart);

    var title = chart.titles.create();
    title.text = "[bold font-size: 30]Anxiety reasons for people with different marital status";
    title.textAlign = "middle";

    // Add data
    chart.data = [{
        "year": "single",
        "self": 13.99,
        "academic": 25.65,
        "outlook": 6.64,
        "intimate": 19.02,
        "econ": 14.66,
        "family": 7.61,
        "health": 5.82,
        "education": 0.34,
        "presence": 6.27
    }, {
        "year": "widowed/divorced",
        "self": 9.33,
        "academic": 17.53,
        "outlook": 4.71,
        "intimate": 22.81,
        "econ": 16.21,
        "family": 8.48,
        "health": 7.35,
        "education": 8.20,
        "presence": 5.37
    }, {
        "year": "unmarried in love",
        "self": 14.40,
        "academic": 26.48,
        "outlook": 5.25,
        "intimate": 13.73,
        "econ": 18.76,
        "family": 8.40,
        "health": 6.80,
        "education": 0.84,
        "presence": 5.35
    }, {
        "year": "married",
        "self": 14.54,
        "academic": 19.94,
        "outlook": 4.24,
        "intimate": 11.20,
        "econ": 15.41,
        "family": 8.36,
        "health": 10.26,
        "education": 10.15,
        "presence": 5.89
    }];

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.opacity = 0;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.grid.template.opacity = 0;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
    valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
    valueAxis.renderer.ticks.template.length = 10;
    valueAxis.renderer.line.strokeOpacity = 0.5;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.minGridDistance = 40;

    // Create series
    function createSeries(field, name) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "year";
        series.stacked = true;
        series.name = name;

        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.locationX = 0.5;
        labelBullet.label.text = "{valueX}";
        labelBullet.label.fill = am4core.color("#fff");
    }

    createSeries("self", "low self worth");
    createSeries("academic", "unsatisfactory academic&career performance");
    createSeries("outlook", "bad outlook");
    createSeries("intimate", "unsatisfactory intimate relationship");
    createSeries("econ", "economic pressure");
    createSeries("family", "poor family relationship");
    createSeries("health", "fear about health");
    createSeries("education", "chirldren's eduacation");
    createSeries("presence", "lack of sense of presence");

}); // end am4core.ready()
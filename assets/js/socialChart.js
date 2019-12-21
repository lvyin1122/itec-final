am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv2", am4charts.XYChart);
    var title = chart.titles.create();
    title.text = "How often will you join the social activities?";
    title.fontSize = 15;
    title.marginTop = 30;

    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [{
            category: "Daily",
            value1: 14.36,
            value2: 62.05,
            value3: 23.59,
        },
        {
            category: "2-3 days",
            value1: 9.92,
            value2: 67.98,
            value3: 22.10,
        },
        {
            category: "4-5 days",
            value1: 7.89,
            value2: 69.52,
            value3: 22.59,
        },
        {
            category: "Weekly",
            value1: 8.08,
            value2: 68.50,
            value3: 23.42,
        },
        {
            category: "2-3 weeks",
            value1: 7.46,
            value2: 68.42,
            value3: 24.12
        },
        {
            category: "Monthly",
            value1: 5.49,
            value2: 64.00,
            value3: 30.51
        },
        {
            category: "Never",
            value1: 4.63,
            value2: 56.26,
            value3: 39.11
        }
    ];

    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    // chart.legend = new am4charts.Legend();

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.labels.template.fontSize = 10;
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;


    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText =
        "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series1.name = "Low Anxiety Level";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "value1";
    series1.dataFields.valueYShow = "totalPercent";
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";

    var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet1.label.fontSize = 10;
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText =
        "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series2.name = "Medium Anxiety Level";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "value2";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";

    var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet2.locationY = 0.5;
    bullet2.label.fontSize = 10;
    bullet2.label.fill = am4core.color("#ffffff");

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText =
        "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series3.name = "High Anxiety Level";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "value3";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";

    var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet3.label.fontSize = 10;
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");


});
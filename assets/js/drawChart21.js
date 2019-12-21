am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end



    // Create chart instance
    var chart = am4core.create("chartdiv21", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    var title = chart.titles.create();
    title.text = "[bold font-size: 30]Why do we feel anxious?";
    title.textAlign = "middle";

    // Add data
    chart.data = [{
        "category": "unsatisfactory academic&career performance",
        "value": 24.97,

    }, {
        "category": "unsatisfactory intimate relationship",
        "value": 16.78,

    }, {
        "category": "economic pressure",
        "value": 15.77,

    }, {
        "category": "low self worth",
        "value": 13.93,

    }, {
        "category": "poor family relationship",
        "value": 7.85,

    }, {
        "category": "fear about health",
        "value": 6.48,

    }, {
        "category": "bad outlook",
        "value": 5.94,

    }, {
        "category": "lack of sense of presence",
        "value": 5.91,

    }, {
        "category": "chirldren's eduacation",
        "value": 1.54,

    }, {
        "category": "others",
        "value": 0.83,

    }];



    var series = chart.series.push(new am4charts.FunnelSeries());
    series.colors.step = 2;
    series.dataFields.value = "value";
    series.dataFields.category = "category";
    series.alignLabels = true;

    // series.labelsContainer.paddingLeft = 15;
    // series.labelsContainer.width = 200;


    //series.orientation = "horizontal";
    //series.bottomRatio = 1;

    // chart.legend = new am4charts.Legend();
    // chart.legend.position = "left";
    // chart.legend.valign = "bottom";
    // chart.legend.margin(5, 5, 20, 5);

}); // end am4core.ready()
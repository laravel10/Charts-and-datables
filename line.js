/* // line graph  javascript starts from here
anychart.onDocumentReady(function() {

    // create data
    var data = [
        ["English", 80],
        ["Hindi", 87],
        ["Marathi", 73],
        ["Physics", 54],
        ["Chemistry", 90],
        ["Mathematics", 55],
        ["Biology", 66]

        ];
        
    // create a chart
    chart = anychart.line();
    
    // create a line series and set the data
    var series = chart.line(data);

    // set the container id
    chart.container("container6");
    
    // initiate drawing the chart
    chart.draw();

}); 

anychart.onDocumentReady(function() {

    // create data
    var data = [
        ["English", 80],
        ["Hindi", 87],
        ["Marathi", 73],
        ["Physics", 94],
        ["Chemistry", 90],
        ["Mathematics", 95],
        ["Biology", 66]

        ];
        
    // create a chart
    chart = anychart.line();
    
    // create a line series and set the data
    var series = chart.line(data);
    
    // set the container id
    chart.container("container7");
    
    // initiate drawing the chart
    chart.draw();

});

anychart.onDocumentReady(function() {

    // create data
    var data = [
        ["English", 80],
        ["Hindi", 87],
        ["Marathi", 73],
        ["Physics", 54],
        ["Chemistry", 90],
        ["Mathematics", 55],
        ["Biology", 66]

        ];
        
    // create a chart
    chart = anychart.line();
    
    // create a line series and set the data
    var series = chart.line(data);
    
    // set the container id
    chart.container("container8");
    
    // initiate drawing the chart
    chart.draw();

}); 

 */


anychart.onDocumentReady(function() {
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Subject', 'Marks'],
    ['English',  42],
    ['Hindi',  35],
    ['Marathi',  48],
    ['Physics',  30],
    ['Chemistry',37],
    ['Biology',36]
  ]);

  var options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' },
    min: 0,
    max:100
    
  };

  var chart = new google.visualization.LineChart(document.getElementById('container6'));

  chart.draw(data, options);
}
});


anychart.onDocumentReady(function() {
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Subject', 'Marks'],
    ['English',  42],
    ['Hindi',  57],
    ['Marathi',  48],
    ['Physics',  30],
    ['Chemistry',47],
    ['Biology',36]
  ]);

  var options = {
    title: ' ',
    curveType: 'function',
    legend: { position: 'bottom' },
    min: 0,
    max:100
  };

  var chart = new google.visualization.LineChart(document.getElementById('container7'));

  chart.draw(data, options);
}
});

anychart.onDocumentReady(function() {
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Subject', 'Marks'],
    ['English',  12],
    ['Hindi',  17],
    ['Marathi',  18],
    ['Physics',  10],
    ['Chemistry',17],
    ['Biology',16]
  ]);

  var options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' },
    min: 0,
    max:100
  };

  var chart = new google.visualization.LineChart(document.getElementById('container8'));

  chart.draw(data, options);
}
});
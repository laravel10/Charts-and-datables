// bar graph  javascript starts from here
anychart.onDocumentReady(function() {
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
  chart = anychart.column();
  
  // create a bar series and set the data
  var series = chart.column(data);

    // set the titles of the axes
    chart.xAxis().title("Subject");
    chart.yAxis().title("Marks");
  
  // set the container id
  chart.container("container3");
  
  // initiate drawing the chart
  chart.draw();
});

anychart.onDocumentReady(function() {
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
      chart = anychart.column();
      
      // create a bar series and set the data
      var series = chart.column(data);

        // set the titles of the axes
      chart.xAxis().title("Subject");
      chart.yAxis().title("Marks");
      
      // set the container id
      chart.container("container4");
      
      // initiate drawing the chart
      chart.draw();
    });

anychart.onDocumentReady(function() {
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
        chart = anychart.column();
        
        // create a bar series and set the data
        var series = chart.column(data);
        
          // set the titles of the axes
        chart.xAxis().title("Subject");
        chart.yAxis().title("Marks");
       
        // set the container id
        chart.container("container5");
        
        // initiate drawing the chart
        chart.draw();
    }); 

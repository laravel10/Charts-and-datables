anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "English", value:54},
        {x: "Hindi", value: 78},
        {x: "Marathi", value: 73},
        {x: "Physics", value: 86},
        {x: "Chemistry", value: 66},
        {x: "Biology", value: 80},
        {x: "Sport", value: 90}
    ];
  
    // create the chart
    var chart = anychart.pie();
    
    // add the data
    chart.data(data); 

    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });

  anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "English", value:64},
        {x: "Hindi", value: 78},
        {x: "Marathi", value: 83},
        {x: "Physics", value: 86},
        {x: "Chemistry", value: 66},
        {x: "Biology", value: 80},
        {x: "Sport", value: 90}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // add the data
    chart.data(data); 

    // display the chart in the container
    chart.container('container1');
    chart.draw();
  
  });
  anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "English", value:54},
        {x: "Hindi", value: 78},
        {x: "Marathi", value: 73},
        {x: "Physics", value: 86},
        {x: "Chemistry", value: 66},
        {x: "Biology", value: 80},
        {x: "Sport", value: 90}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // add the data
    chart.data(data); 

    // display the chart in the container
    chart.container('container2');
    chart.draw();
  
  });
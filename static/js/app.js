const filePath = "./static/data/samples.json"

var jsonData;

d3.json(filePath).then(data =>{
  jsonData = data;
  
  addSubjectIDsToDropdown(data)
  let subjectID = d3.select("select").node().value;  
  updatePage(subjectID)
})

// Dropdown change event
d3.select("#selDataset").on("change",function(event){
  let subjectID = d3.select("#selDataset").node().value 
  updatePage(subjectID)
})

const plotGaugeChart = subjectID => {
  
  let index = jsonData.names.indexOf(subjectID)
  let washFrequency = jsonData.metadata[index].wfreq;
  
  // Trying to come up with color scheme to match example
  let value = 260
  let g_value = 250
  const rgb_value = () => { 
    value = value -13;
    g_value = g_value-5; 
    return `${value},${g_value},${value}` 
  }
  
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: washFrequency,
      title: { text: `Belly Button Washing Frequency`, font: { size: 24 } },
      gauge: {
        axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "grey" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 1], color: `rgb(${rgb_value()})` },
          { range: [1, 2], color: `rgb(${rgb_value()})` },
          { range: [2, 3], color: `rgb(${rgb_value()})` },
          { range: [3, 4], color: `rgb(${rgb_value()})` },
          { range: [4, 5], color: `rgb(${rgb_value()})` },
          { range: [5, 6], color: `rgb(${rgb_value()})` },
          { range: [6, 7], color: `rgb(${rgb_value()})` },
          { range: [7, 8], color: `rgb(${rgb_value()})` },
          { range: [8, 9], color: `rgb(${rgb_value()})` }
        ]
        
      }
    }
  ];
  
  var layout = {
    width: 500,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    font: { family: "Arial" }
  };

  // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 }};

  Plotly.newPlot( 'gauge', data, layout)

}




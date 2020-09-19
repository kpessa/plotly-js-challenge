const updatePage = subjectID => {
  populateDemographicInfo(subjectID)        
  plotHorizontalBarChart(subjectID)
  plotBubbleChart(subjectID)
  plotGaugeChart(subjectID)
}

const addSubjectIDsToDropdown = data => {
  // Adding Subject ID's to Dropdown
  d3.select("#selDataset")
    .selectAll("option")
    .data(data.names)
    .enter()
    .append("option")
    .attr("value",function(d){return d})
    .text(function(d){return d})
}

const plotHorizontalBarChart = subjectID => {
  // Horizontal Bar Chart  
  let index = jsonData.names.indexOf(subjectID)
  let sample = jsonData.samples[index];
  let x = sample.sample_values.slice(0,10).reverse();
  let y = sample.otu_ids.map(item => `OTU ${item}`).slice(0,10).reverse();
  let text = sample.otu_labels.slice(0,10).reverse();

  var trace1 = {
    x: x,
    y: y,
    title: subjectID,
    type: 'bar',
    orientation: "h",
    text: text
  }

  Plotly.newPlot("bar",[trace1])
}

const populateDemographicInfo = subjectID => {
  
  let index = jsonData.names.indexOf(subjectID)
  let subjectMetadata = jsonData.metadata[index]
  let subjectArray = Object.entries(subjectMetadata)

  d3.select("#demographic-info")
    .selectAll("tr")
    .data(subjectArray)
    // Updates existing data if already initialized and "DOM elements = data elements"
    .each(function(d){
      d3.select(this)
        .selectAll("td")
        .data(d)
        .text(function(d) {
          return d;
        })
        .attr("class", function (d,i){
          return i % 2 ? "td-value" : "td-label";
        })
    })
    // Runs at initialization, will append needed table rows and table datums
    .enter()
      .append("tr")
      .each(function(d){
        d3.select(this)
          .selectAll("td")
          .data(d)
          .enter()
          .append("td")
          .text(function(d) {
            return d;
          })
          .attr("class", function (d,i){
            return i % 2 ? "td-value" : "td-label";
          })
      })
}

const plotBubbleChart = subjectID => {
  let index = jsonData.names.indexOf(subjectID)
  let sample = jsonData.samples[index];
  
  let x = sample.otu_ids
  let y = sample.sample_values
  let text = sample.otu_labels

  var trace1 = {
    x: x,
    y: y,
    mode: 'markers',
    marker: {
      color: x,
      size: y
    },
    text: text
  }

  Plotly.newPlot("bubble",[trace1])

}
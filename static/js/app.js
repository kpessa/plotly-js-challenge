
const filePath = "../.././data/samples.json"

d3.json(filePath).then(data =>{
  let sample = data.samples[0];
  console.log(sample)
  
  let x = sample.sample_values.slice(0,10).reverse();
  let y = sample.otu_ids.map(item => `OTU ${item}`).slice(0,10).reverse();

  console.log(x,y)
  

  var trace1 = {
    x: x,
    y: y,
    title: sample.id,
    type: 'bar',
    orientation: "h"
  }

  Plotly.newPlot("bar",[trace1])

})
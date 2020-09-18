const filePath = "./samples.json"

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
  
}




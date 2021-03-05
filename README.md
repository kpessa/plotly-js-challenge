# plotly-js-challenge

Web dashboard live at https://kpessa.github.io/plotly-js-challenge/

![](./screencast.gif)



# Table of Contents

1. [Plot.ly Challenge - Belly Button Biodiversity](#Plot.ly Challenge - Belly Button Biodiversity) 
2. [Data](#Data)
3. [Step 1: Plotly](#Step 1: Plotly)
4. [Advanced Challenge Assignment (Optional)](#Advanced Challenge Assignment (Optional))
5. [Deployment](#Deployment)
6. [Plotly.js documentation](#Plotly.js documentation)



# Plot.ly Challenge - Belly Button Biodiversity

![Bacteria by filterforge.com](README.assets/bacteria.jpg)

In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Data

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

![image-20210305065044084](README.assets/image-20210305065044084.png)

## Step 1: Plotly

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use `sample_values` as the values for the bar chart.

* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

  ![bar Chart](README.assets/hw01.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![Bubble Chart](README.assets/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](README.assets/hw03.png)

6. Update all of the plots any time that a new sample is selected.

Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

![hw](README.assets/hw02.png)

## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](README.assets/gauge.png)

## Deployment

* Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

* Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file

## Plotly.js documentation

* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.


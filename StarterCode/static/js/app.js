
function bacteria(person){
    D3.json('../../samples.json').then(
        (input)=> {
            var name = input.samples;
            var otu = name.filter(
                (row)=> {
                    row.id == person;
                }
            );
            var sample_values = otu[0].sample_values;
            var otu_ids= otu[0].otu_ids;
            var otu_labels= otu[0].otu_labels;

            var trace = {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                type: "bar"
              };

            var data = [trace];

            // 7. Define our plot layout
            var layout = {
            title: "Bacteria",
            xaxis: { title: "City" },
            yaxis: { title: "2017 Population"}
            };

            // 8. Plot the chart to a div tag with id "bar-plot"
            Plotly.newPlot("bar", data, layout);
//metadata
//input.metadata for metadata
              
        }
    )
    
}


//
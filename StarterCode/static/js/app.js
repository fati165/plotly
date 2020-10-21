
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
            console.log(otu_labels)
            //plot bar
            var trace = {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                type: "bar"
              };

            var data = [trace];

            // 7. Define our plot layout
            var layout = {
            title: "Belly Button Bacteria",
            xaxis: { title: "otu" },
            yaxis: { title: "values"}
            };

            // 8. Plot the chart to a div tag with id "bar"
            Plotly.newPlot("bar", data, layout);
//metadata
//input.metadata for metadata
//do plots within the function
            //for the bubble
            var trace2= { 
            x: otu_ids,
            y: sample_values,
            marker: {
                size: sample_values,
                color: otu_ids

            },
            text: otu_labels,
            type: "bubble"
            };

            var layout2 = {
                title: "Belly Button Bacteria",
                xaxis: { title: "otu" },
                yaxis: { title: "values"}
                
            };
            var data2 = [trace2];
 
            Plotly.newPlot("bubble", data2, layout2);


//metadata
//input.metadata for metadata
            var metadata= input.metadata
            console.log(metadata)
            

              
        }
    )
    
}
// Add event listener for submit button
//d3.select("#submit").on("click", handleSubmit);


//
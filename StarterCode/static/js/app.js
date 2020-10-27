
function bacteria(person){
    //d3.event.preventDefault();

    d3.json('../../samples.json').then(
        (input)=> {
            var name = input.samples;
            var otu = name.filter(
                row=> 
                    row.id == person
                
            );
            console.log(name);
            console.log(input);
            console.log(otu);
            var sample_values = otu[0].sample_values;
            var otu_ids= otu[0].otu_ids;
            var otu_labels= otu[0].otu_labels;
            console.log(otu_labels);
            //plot bar
            var trace = {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                marker: {
                    size: sample_values,
                    color: otu_ids
    
                },
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

//do plots within the function
            //for the bubble
            var trace2= { 
            x: otu_ids,
            y: sample_values,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids

            },
            text: otu_labels,
            type: "bubble",
            symbol: "circle"
            };

            var layout2 = {
                title: "Belly Button Bacteria",
                xaxis: { title: "otu" },
                yaxis: { title: "values"}
                
            };
            var data2 = [trace2];
            
 
            Plotly.newPlot("bubble", data2, layout2);

            

//Display the sample metadata, i.e., an individual's demographic information.
//metadata
//input.metadata for metadata
//how to write meta within a function with the plots?
            var metadata= input.metadata
            console.log(metadata);
            //filter??
            var meta = metadata.filter(
                (row)=> {
                    row.id == person;
                });
            //empty info each time
            var panel= d3.select("#sample-metadata");
            panel.html("");
//Display each key-value pair from the metadata JSON object somewhere on the page.
//Update all of the plots any time that a new sample is selected.
//make function instead of arrow
//dropdown=seldtst
            Object.entries(meta[0]).forEach(function([key, values]){
            var row = panel.append("p");
            row.text(`${key}:${values}`);
        
     
            }
            )
            })}
function init(){
    var dropdown= d3.select('#selDataset');
    d3.json('../../samples.json').then(function(data){
        var names = data.names;
        names.forEach(function(id){
            dropdown.append('option').text(id).property('value', id);
        })

    })


};
function optionchange(inputs){
    bacteria(inputs);

}   
init();       
//d3.select("#selDataset").on("click", optionchange);

// Add event listener for submit button
//d3.select("#selDataset").on("click", input);
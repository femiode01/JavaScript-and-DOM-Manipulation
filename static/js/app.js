// from data.js
var tableData = data;
console.log(data);
// YOUR CODE HERE!
var tbody = d3.select("tbody");

var stateInput = document.querySelector("#state");
var searchBtn = document.querySelector("#filter-btn");


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#state");
  var inputElement1 = d3.select("#datetime");  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");  
  console.log(inputValue);
  console.log(inputValue1);
 

  var filteredData = tableData.filter(look => look.state === inputValue);
  var filteredData1 = tableData.filter(look => look.datetime === inputValue1);  
  console.log(filteredData);
  console.log(filteredData1);

});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(tableData) {


// Append tr to tbody
var row = tbody.append("tr");


// Use `Object.entries` to console.log each weather report value

Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);



//   Object.entries(weatherReport).forEach(function([key, value]) {
//     //console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
var cell = row.append("td");
cell.text(value);



    });
});




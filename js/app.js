// from data.js
var tableData = data;

// tag for appending rows
var tbody = d3.select("tbody");

// table building function
function buildTable(ufoData) {
    tbody.html("");
    ufoData.forEach(tableRow => {
        var row=tbody.append("tr");
        Object.values(tableRow).forEach(vals => {
            var cell = row.append("td");
            cell.text(vals);
        });
    });
}

// calling function
buildTable(tableData);

var button = d3.select("#filter-btn")

button.on("click", handleClick);

function handleClick() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    if (date) {
        filterData = filterData.filter(row => {
            return row.datetime === date
        });
    }
    buildTable(filterData);
}
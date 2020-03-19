// from data.js
var tableData = data;
var len = tableData.length;
console.log(len);
var tbody = d3.select("tbody");
console.log(data);
data.forEach(function(ufosightings) {
    console.log(ufosightings);
  });
  
  data.forEach(function(ufosightings) {
    console.log(ufosightings);
    var row = tbody.append("tr");
  
    Object.entries(ufosightings).forEach(function([key, value]) {
      console.log(key, value);
    });
  });
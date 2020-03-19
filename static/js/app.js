// from data.js
var tableData
 = data;

// YOUR CODE HERE!

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData
    .length; i++) {
    var address = tableData
    [i];
    console.log(address)
    var fields = Object.keys(address);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterDate = $dateInput.value;
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  if (filterDate != "") {
    tableData
     = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData
 };

 if (filterCity != "") {
    tableData
     = tableData
    .filter(function (address) {
      var addressCity = address.city;
      return addressCity === filterCity;
    });
  }
  else { tableData
 };

  if (filterState != "") {
    tableData
     = tableData
    .filter(function (address) {
      var addressState = address.state;
      return addressState === filterState;
    });
  }
  else { tableData
 };

  if (filterCountry != "") {
    tableData
     = tableData
    .filter(function (address) {
      var addressCountry = address.country;
      return addressCountry === filterCountry;
    });
  }
  else { tableData
 };

  if (filterShape != "") {
    tableData
     = tableData
    .filter(function (address) {
      var addressShape = address.shape;
      return addressShape === filterShape;
    });
  }
  else { tableData
 };

  renderTable();
}

function handleResetButtonClick(){
  renderTable();
}

renderTable();
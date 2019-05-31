// tbody element references, input field and button
let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#date");
let $cityInput = document.querySelector("#city");
let $stateInput = document.querySelector("#state");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");
let $searchButton = document.querySelector("#search");


$searchButton.addEventListener("click", handleSearchClick);

let ufoData = data;

function renderTable() {
    $tbody.innerHTML = "";
    for (let i = 0; i < ufoData.length; i++) {
        let info = ufoData[i];
        let fields = Object.keys(info);
        let $row = $tbody.insertRow(i);
        for (let j = 0; j < fields.length; j++) {
            let field = fields[j];
            let $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

function handleSearchClick() {
    // Format user search input by eliminating whitespace and turning input into lowercase
    let filterDate = $dateInput.value.trim();
    let filterCity = $cityInput.value.trim().toLowerCase();
    let filterState = $stateInput.value.trim().toLowerCase();
    let filterCountry = $countryInput.value.trim().toLowerCase();
    let filterShape = $shapeInput.value.trim().toLowerCase();
    // Set ufoData to array of ufo sightings to match the filter
    ufoData = data.filter(function(ufoSighting) {
        let searchDate = ufoSighting.datetime;
        let searchCity = ufoSighting.city.toLowerCase();
        let searchState = ufoSighting.state.toLowerCase();
        let searchCountry = ufoSighting.country.toLowerCase();
        let searchShape = ufoSighting.shape.toLowerCase();
        // If statements to match search criteria with filtered criteria
        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    renderTable();

    // Refresh and clear input fields
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
}

renderTable();
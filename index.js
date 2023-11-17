const inputValue = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");

let outputSection = document.getElementById("output-section");
let div = document.createElement("div");

convertBtn.addEventListener("click", function () {

    let checkboxes = document.querySelectorAll('input[name="unit"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });


    if (!isNaN(inputValue.value) && inputValue.value != "") {

        if (values.length !== 0) {
            console.log(values);
            outputSection.innerHTML = "";
            for (let i = 0; i < values.length; i++) {
                if (values[i] === 'length') {
                    div.innerHTML = lengthConversion(inputValue.value);
                    outputSection.innerHTML += div.innerHTML;
                }
                if (values[i] === 'volume') {
                    div.innerHTML = volumeConversion(inputValue.value);
                    outputSection.innerHTML += div.innerHTML;
                }
                if (values[i] === 'mass') {
                    div.innerHTML = massConversion(inputValue.value);
                    outputSection.innerHTML += div.innerHTML;
                }
            }
            if (values.length === 1 || values.length === 3) {
                outputSection.lastChild.classList.add("column-setup");
            }
            outputSection.style.padding = "20px";
        }
        else {
            alert("Please, select unit!");
        }
    }
    else {
        alert("Please, enter a number!")
    }
});

function lengthConversion(num) {
    let lengthString = `<div class="result-section"><h3>Length<br>(Meter / Feet)</h3>
    <p>${num} meters = ${(num * 3.28084).toFixed(3)} feet <br> 
    ${num} feet = ${(num * 0.3048).toFixed(3)} meters`;
    return lengthString;
}

function volumeConversion(num) {
    let volumeString = `<div class="result-section"><h3>Volume<br>(Kilograms / Pounds)</h3>
    <p>${num} liters = ${(num * 0.264172).toFixed(3)} gallons <br> 
    ${num} gallons = ${(num * 3.78541).toFixed(3)} liters`;
    return volumeString;
}

function massConversion(num) {
    let massString = `<div class="result-section"><h3>Mass<br>(Kilograms / Pounds)</h3>
    <p>${num} kilos = ${(num * 2.20462).toFixed(3)} pounds <br> 
    ${num} pounds = ${(num * 0.453592).toFixed(3)} kilos`;
    return massString;
}
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultInput = document.getElementById("result");

temperatureInput.addEventListener("input", convertTemperature);
unitSelect.addEventListener("change", convertTemperature);

function convertTemperature() {
    const temperatureValue = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;
    
    if (!isNaN(temperatureValue)) {
        const convertedValue = convert(temperatureValue, selectedUnit);
        resultInput.value = convertedValue.toFixed(2);
    } else {
        resultInput.value = "";
    }
}

function convert(temperature, unit) {
    switch (unit) {
        case "celsius":
            return temperature;
        case "fahrenheit":
            return (temperature * 9/5) + 32;
        case "kelvin":
            return temperature + 273.15;
        default:
            return NaN;
    }
}
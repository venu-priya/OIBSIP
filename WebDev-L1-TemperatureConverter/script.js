
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const clearBtn = document.getElementById('clearBtn');

function formatOutput(value) {
    return parseFloat(value.toFixed(2));
}

celsius.addEventListener('input', () => {
    const val = parseFloat(celsius.value);
    if (isNaN(val)) {
        fahrenheit.value = '';
        kelvin.value = '';
    } else {
        fahrenheit.value = formatOutput((val * 9 / 5) + 32);
        kelvin.value = formatOutput(val + 273.15);
    }
});

fahrenheit.addEventListener('input', () => {
    const val = parseFloat(fahrenheit.value);
    if (isNaN(val)) {
        celsius.value = '';
        kelvin.value = '';
    } else {
        const cVal = (val - 32) * 5 / 9;
        celsius.value = formatOutput(cVal);
        kelvin.value = formatOutput(cVal + 273.15);
    }
});

kelvin.addEventListener('input', () => {
    const val = parseFloat(kelvin.value);
    if (isNaN(val)) {
        celsius.value = '';
        fahrenheit.value = '';
    } else {
        const cVal = val - 273.15;
        celsius.value = formatOutput(cVal);
        fahrenheit.value = formatOutput((cVal * 9 / 5) + 32);
    }
});

clearBtn.addEventListener('click', () => {
    celsius.value = '';
    fahrenheit.value = '';
    kelvin.value = '';
});

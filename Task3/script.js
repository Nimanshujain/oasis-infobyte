document.getElementById('convertBtn').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const resultElement = document.getElementById('result');
    
    let convertedTemp, toUnit;
    
    if (fromUnit === 'celsius') {
      convertedTemp = (inputTemp * 9/5) + 32;
      toUnit = 'Fahrenheit';
    } else {
      convertedTemp = (inputTemp - 32) * 5/9;
      toUnit = 'Celsius';
    }
    
    resultElement.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${toUnit}`;
  });
  
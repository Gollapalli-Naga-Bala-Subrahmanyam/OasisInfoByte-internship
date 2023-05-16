function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var unit1 = document.getElementById("unit1").value;
    var unit2 = document.getElementById("unit2").value;
    var outputTemp = document.getElementById("outputTemp");
    
    if (isNaN(inputTemp)) {
      outputTemp.value = "Invalid input";
      return;
    }
    
    var temperature = parseFloat(inputTemp);
    var result;
    
    if (unit1 === "celsius" )
    {
        if (unit1 === "celsius" && unit2 === "fahrenheit") {
            result = (temperature * 9/5) + 32;
          }
        else if (unit1 === "celsius" && unit2 === "kelvin") {
            result = temperature + 273.15;
        }
        else {
            outputTemp.value = "Select other options";
            return;
        }
    }
    
     if(unit1 === "fahrenheit")
    {
        if (unit1 === "fahrenheit" && unit2 === "celsius") {
            result = (temperature - 32) * 5/9;
          }
        else if(unit1 === "fahrenheit" && unit2 === "kelvin"){
            result = ((temperature - 32) * 5/9) + 273.15;
        }
        else {
            outputTemp.value = "Select other options";
            return;
        }
    }
    
    if (unit1 === "kelvin") {
        if (unit1 === "kelvin" && unit2 === "fahrenheit") {
            result = ((temperature * 9/5) + 32) - 273.15;
          }
        else if (unit1 === "kelvin" && unit2 === "celsius") {
            result = temperature - 273.15;
        }
        else {
            outputTemp.value = "Select other options";
            return;
        }
    }
    

outputTemp.value = result.toFixed(2);
}
  
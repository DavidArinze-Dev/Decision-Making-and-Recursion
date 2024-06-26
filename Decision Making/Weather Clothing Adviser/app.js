function adviseClothing() {
  const temperature = num;

  // Determine clothing advice based on temperature
  if (temperature <= 10) {
    clothingAdvice = "Wear a jacket, gloves, and a hat.";
  } else if (temperature <= 15) {
    clothingAdvice = "Wear a jacket or sweater.";
  } else {
    clothingAdvice = "Wear light clothing.";
  }

  // Add rain advice if it's raining
  if (isRaining) {
    clothingAdvice += " Also remember to bring an umbrella.";
  }else{
    clothingAdvice += " Also no need to bring an umbrella.";
  }
  console.log(clothingAdvice);
}

num = 9;
isRaining = 0;
adviseClothing();

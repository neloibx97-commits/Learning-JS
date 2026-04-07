function weather(weather) {
  let result = "";

  switch (weather) {
    case "sunny":
      result = "put on sunglasses and sunscreen";
      break;

    case "rainy":
      result = "carry along an umbrella and a rain jacket ";
      break;

    case "cold":
      result = "put on a jacket and drink some coffee";
      break;

    default:
      result = "please provide a weather status(sunny/rainy/cold)";
  }

  return result;
}
const weatherresult = weather("sunny ");
console.log(weatherresult);

function calculate() {
  const travelOpt = document.getElementById("travelOpt").value;
  const distance = parseFloat(document.getElementById("distance").value);
  const flightLoc = document.getElementById("flightLoc").value;
  const discount = parseFloat(document.getElementById("discount").value) || 0;

  let cost = 0;

  switch (travelOpt) {
    case "bike":
      cost = 8 * distance;
      break;
    case "auto":
      cost = 12 * distance;
      break;
    case "car":
      cost = 20 * distance;
      break;
    case "bus":
      cost = 15 * (distance / 10);
      break;
    case "flight":
      if (flightLoc === "Bengaluru") cost = 7000;
      else if (flightLoc === "Delhi") cost = 10000;
      else if (flightLoc === "Dubai") cost = 15000;
      else if (flightLoc === "USA") cost = 60000;
      else cost = 0;
      break;
    default:
      cost = 0;
  }

  // Apply discount if any
  if (discount > 0) {
    cost = cost - (cost * (discount / 100));
  }

  // Handle empty or invalid inputs
  if (isNaN(cost) || cost <= 0) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "⚠️ Please enter valid details!";
  } else {
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").innerHTML = `Total Cost: ₹${cost.toFixed(2)}`;
  }
}

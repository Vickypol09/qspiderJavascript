function calculate(){
  const travelOpt = document.getElementById("travelOpt").value;
  const distance = parseFloat(document.getElementById("distance").value);
  const flightLoc = document.getElementById("flightLoc").value;
  const discount = parseFloat(document.getElementById("discount").value) || 0;

  let cost=0;

  switch(travelOpt){
    case "Bike":
                cost=8*distance;
                break;
    
    case "auto":
                cost=12*distance;
                break;

    case "car":
                cost = 20 * distance;
                break;

    case "bus":
                cost = 15 * (distance / 10);
                break;

            default:
                cost=0;
  }

  if(isNaN(cost)||cost<=0){
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "⚠️ Please enter valid details!";
  } else {
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").innerHTML = `Total Cost: ₹${cost.toFixed(2)}`;
  

  }
  





}
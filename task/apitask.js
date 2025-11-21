let data1 = "https://dog.ceo/api/breeds/image/random";
let data2 = "https://catfact.ninja/facts";
let data3 = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
let data4 = "https://source.unsplash.com/featured/?car";
let data5 = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/motorcycle?format=json";

async function getData() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    let response1 = await fetch(data1);
    let response2 = await fetch(data2);
    let response3 = await fetch(data3);
    let response5 = await fetch(data5);

    let result1 = await response1.json();
    let result2 = await response2.json();
    let result3 = await response3.json();
    let result5 = await response5.json();

    output.innerHTML += "<h2>Random Dog</h2>";
    output.innerHTML += "<img src='" + result1.message + "' width='200'>";

    output.innerHTML += "<h2>Cat Facts</h2>";
    result2.data.forEach(fact => {
        output.innerHTML += "<p>" + fact.fact + "</p>";
    });

    output.innerHTML += "<h2>Car Makes</h2>";
    result3.Results.forEach(car => {
        output.innerHTML += "<p>" + car.Make_Name + "</p>";
    });

    output.innerHTML += "<h2>Random Car Image</h2>";
    output.innerHTML += "<img src='" + data4 + "' width='200'>";

    output.innerHTML += "<h2>Motorcycle Makes</h2>";
    result5.Results.forEach(bike => {
        output.innerHTML += "<p>" + bike.Make_Name + "</p>";
    });
}

document.getElementById("showBtn").addEventListener("click", getData);

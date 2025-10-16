// Take user input
let mode = prompt("Enter your travel mode (bike, auto, car, bus, flight):");

// Local travel
if (mode === "bike" || mode === "auto" || mode === "car" || mode === "bus") {
    let distance = Number(prompt("Enter distance in km:"));
    let cost = 0;

    if (mode === "bike") {
        cost = 8 * distance;
    } else if (mode === "auto") {
        cost = 12 * distance;
    } else if (mode === "car") {
        cost = 20 * distance;
    } else if (mode === "bus") {
        cost = (15 / 10) * distance; // 15 rs per 10 km
    }

    console.log("Travel Mode:", mode);
    console.log("Distance:", distance, "km");
    console.log("Total Cost:", cost, "Rs");
}

// Flight travel
else if (mode === "flight") {
    let place = prompt("Enter place (Bangalore, Delhi, Dubai, USA):");
    let type = prompt("Enter class (normal or business):");
    let cost = 0;

    if (place === "Bangalore") {
        cost = 7000;
    } else if (place === "Delhi") {
        cost = 10000;
    } else if (place === "Dubai") {
        if (type === "normal") {
            cost = 60000;
        } else if (type === "business") {
            cost = 100000 - (100000 * 24 / 100); // 24% discount
        }
    } else if (place === "USA") {
        if (type === "normal") {
            cost = 80000;
        } else if (type === "business") {
            cost = 150000 - (150000 * 14 / 100); // 14% discount
        }
    }

    console.log("Flight to:", place);
    console.log("Class:", type);
    console.log("Final Ticket Price:", cost, "Rs");
    
}

// Invalid input
else {
    console.log("Invalid mode! Please enter: bike, auto, car, bus, or flight.");
}

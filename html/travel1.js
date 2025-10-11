// Travel Cost Calculator - with location & visa check


let mode = prompt("Enter your travel mode (bike, auto, car, bus, flight):");

// Predefined distances for locations (in km)
let distances = {
    pune: 0,
    mumbai: 150,
    delhi: 1400,
    bangalore: 850,
    nagpur: 700
};

// Local travel options
if (mode === "bike" || mode === "auto" || mode === "car" || mode === "bus") {
    let location = prompt("Enter location (Mumbai, Delhi, Bangalore, Nagpur):");
    location = location.toLowerCase();

    let distance = distances[location];

    if (distance === undefined) {
        console.log("Location not found! Please enter from given options.");
    } else {
        let cost = 0;

        if (mode === "bike") {
            cost = 8 * distance;
        } else if (mode === "auto") {
            cost = 12 * distance;
        } else if (mode === "car") {
            cost = 20 * distance;
        } else if (mode === "bus") {
            cost = (15 / 10) * distance; // 15 Rs per 10 km
        }

        console.log("Travel Mode:", mode);
        console.log("Destination:", location);
        console.log("Distance:", distance, "km");
        console.log("Total Cost:", cost, "Rs");
    }
}

// Flight travel options
else if (mode === "flight") {
    let visaId = prompt("Enter your Visa ID (required):");

    if (visaId === "" || visaId === null) {
        console.log("Visa ID is mandatory for flight travel!");
    } else {
        let place = prompt("Enter place (Bangalore, Delhi, Dubai, USA):");
        let type = prompt("Enter class (normal or business):");
        let cost = 0;
        let discount = 0;

        if (place === "Bangalore") {
            cost = 7000;
        } else if (place === "Delhi") {
            cost = 10000;
        } else if (place === "Dubai") {
            if (type === "normal") {
                cost = 60000;
            } else if (type === "business") {
                discount = (100000 * 24) / 100;
                cost = 100000 - discount;
            }
        } else if (place === "USA") {
            if (type === "normal") {
                cost = 80000;
            } else if (type === "business") {
                discount = (150000 * 14) / 100;
                cost = 150000 - discount;
            }
        }

        console.log("Visa ID:", visaId);
        console.log("Flight to:", place);
        console.log("Class:", type);

        if (discount > 0) {
            console.log("Discount Applied:", discount, "Rs");
        }

        console.log("Final Ticket Price:", cost, "Rs");
    }
}

// Invalid mode
else {
    console.log("Invalid mode! Please enter: bike, auto, car, bus, or flight.");
}
let mode=prompt("Enter your travelling mode(Bike,flight,Car,Auto,Bus)");

let distances={
    pune:0,
    mumbai:10,
    kolhapur:50,
    nagpur:100
};

if(mode==="Bike"||mode==="Flight"||mode==="Car"||mode==="Auto"||mode==="Bus"){
    let location=prompt("Enter the loction (pune,mumbai,kolhapur,nagpur)");
    location=location.toLowerCase();

    let distance=distances[location];

    if(distance==undefined){
        console.log("Loction not found");
    }
    else{

        let cost=0;
            if(mode==="Bike"){
                cost=8*distance;
            }
            else if(mode==="Flight"){
                cost=12*distance;
            }
            else if(mode==="Car"){
                cost=20*distance;
            }
            else if(mode==="Auto"){
                cost=25*distance;
            }
            else if(mode==="Bus")
                cost=(10/15)*distance;

            console.log("Travell Mode",mode);
            console.log("Distination",location);
            console.log("distance",distance,"Km");
            console.log("Travell cost",cost, "Rs");

          
    }
}
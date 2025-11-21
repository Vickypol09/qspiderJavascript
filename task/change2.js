// change is use to rendor something after clicking on something
let cityList=document.getElementById("cityList")
let cityImage=document.getElementById("pics")
let bikeName=document.getElementById("bikeName")
let  bikeDesc=document.getElementById("bikeDesc")

cityList.addEventListener("change",()=>{
    let selectCity=cityList.value
    console.log(selectCity);

    if(selectCity === "Yamha"){
        cityImage.src="https://tse1.mm.bing.net/th/id/OIP.Zx4YVJdTrtXmtMBDVhtCqAHaFC?pid=Api&P=0&h=180";
     bikeName.textContent = "Yamaha R15";
    bikeDesc.textContent = "A sporty and lightweight bike known for sharp handling.";
  
    }
    else if(selectCity === "BMW"){
        cityImage.src="https://tse2.mm.bing.net/th/id/OIP.Uhiz_s9FV-jBg-hq4tIgdgHaEK?pid=Api&P=0&h=180";
           bikeName.textContent = "Yamaha R15";
    bikeDesc.textContent = "A sporty and with BMW ENGINE.";
    }
    
    else if(selectCity === "Kawasaki"){
        cityImage.src="https://www.roadracingworld.com/wp-content/uploads/2023/01/24ZX400S_141GN1SRF3CG_A_27.high__1675199677.jpeg";
           bikeName.textContent = "Yamaha R15";
    bikeDesc.textContent = "COMING WITH 1000CC with great speed.";
    }
    
    else if(selectCity === "spelndor"){
        cityImage.src="https://wallpapercave.com/wp/wp5742283.jpg";
           bikeName.textContent = "Yamaha R15";
    bikeDesc.textContent = "Love of India .";
    }
    
})
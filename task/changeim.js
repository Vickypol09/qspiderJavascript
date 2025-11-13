// change is use to rendor something after clicking on something
let cityList=document.getElementById("cityList")
let cityImage=document.getElementById("pics")

cityList.addEventListener("change",()=>{
    let selectCity=cityList.value
    console.log(selectCity);

    if(selectCity === "pune"){
        cityImage.src="https://tse2.mm.bing.net/th/id/OIP.F-HfGyEyUbXPCE-k8aVjtAHaE9?pid=Api&P=0&h=180"
    }
    else if(selectCity === "mumbai"){
        cityImage.src="https://tse1.mm.bing.net/th/id/OIP.F8O6mGPCYMu5asDoAK5oQgHaEK?pid=Api&P=0&h=180"
    }
    
})
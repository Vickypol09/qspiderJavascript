


let Data="https://api.github.com/users"

console.log(Data);

async function getData() {
    let response =await fetch(Data)
    console.log(response);

    let result=await response.json()

    console.log(result); 
    
}

getData()


// let btn=document.getElementById("btn");
// let result=document.getElementById("result");

// btn.addEventListener("click",()=>{

//     fetch("https://api.github.com/users")

//         .then(response => response.json())
//         .then(data=>{
//             result.innerText=Data;
//         })

//         .catch(err=>console.error(err));
// });
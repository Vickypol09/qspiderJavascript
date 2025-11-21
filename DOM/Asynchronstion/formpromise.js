
// let username=document.getElementById="username";
// let password=document.getElementById="password";
// let btn=document.getElementById="btn";

// btn.addEventListener("click",(event)=>{
//     event.preventDefault(); //method this to prevnet form refresh 

//    function login(username,password){  // adding callback function to call parmeerts form another fucntion login
//     console.log("checking the credntial");

//     return new Promise((resolve,reject)=>{   // add promise
//         setTimeout(() => {
//             if (username == "payal" && password == 1234) {
//                     resolve("login succesfully")
//             } else {
//                     reject("invalid")
//             }

//             setTimeout(() => {
//                     let perosn={
//                         Name :document.getElementsById("user").value,
//                         password :document.getElementsById("password").value,
//                     }
//                     console.log(perosn);       
//             } , 2000);

        
//         },2000);
//     })
// }

// //fucntion created to get value form user
// login(username.value,password.value).then((msg)=>{
//     console.log(msg);
    
// }).catch((er)=>{
//     console.log(er);
    
// })

// })



//chg

let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    function login(user, pass){
        console.log("Checking credentials...");

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user == "payal" && pass == "1234") {
                    resolve("Login successful!");
                } else {
                    reject("Invalid credentials!");
                }

                   setTimeout(() => {
                    let perosn={
                        Name :document.getElementById("username").value,
                        password :document.getElementById("password").value
                    };
                    console.log(perosn);       
            } , 4000);



            }, 2000);
        });
    }

    login(username.value, password.value)
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err));
});


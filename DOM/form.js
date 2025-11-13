// //accesing the form.html

// let form=document.getElementById("form");
// let user=document.getElementById("user");
// let pass=document.getElementById("pass");
// let msg=document.getElementById("msg");

// // let reset=document.getElementById("reset");

// //submit event
// form.addEventListener("submit",(deep)=>{
//     deep.preventDefault()//to avoid refersh of page
//     console.log(deep);
//     console.log("Form is submitted");
//     console.log((user.value + pass.value));

//     let person={ //creating object and accesnig the input
//         username : user.value,
//         password : pass.value
//     } 
    
//     console.log(person); //checking the person 
// })

// //reset event to remove previous info
// form.addEventListener("reset",(e)=>{
//     console.log("Form is cleared");
//     e.innerHTML="form is submitted";

// //it will display the message in userinterface
//     setTimeout(() => {
//           msg.innerHTML = " Reset successfully!";
//         msg.style.color = "green";
//     },1000);

    
// })

// //focus to make any event target and do

// user.addEventListener("focus",()=>{
//     user.style.backgroundColor="Pink"
//     user.style.outline="2px solid orange"
//     user.style.border="none"
// })

// //blur event will helps to lose foucs
// user.addEventListener("blur",()=>{
//     user.style.backgroundColor="white";
// })


// // it will do work as name after pressingn the key
// pass.addEventListener("keypress",()=>{
//     pass.style.backgroundColor="red";
//     pass.style.color="white";
// })
// // it will do work as name after 
// pass.addEventListener("keyup",()=>{
//     pass.style.backgroundColor="yellow";
//     pass.style.color="red";
// })

//change




//Selectors way to accesin the elements from html 
// getElementById , querySelector, querySelectorAll,getElementsByClassName
//
// let head=document.getElementById("head1"); // can give only name without tag
// let qhead=document.querySelector("#head1"); // this need to give with tag symbol

// console.log(head);
// console.log(qhead);

// querySelectorAll
let head1=document.querySelector(".web")
let allhead=document.querySelectorAll(".web");// it will 

let subject=document.querySelectorAll(".web");
console.log(subject);

subject.forEach((element) =>element.style.color="red");
    




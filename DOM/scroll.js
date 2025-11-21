
let navbar=document.getElementById("navbar")
let links=document.querySelectorAll(".link")
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        navbar.style.backgroundColor="pink"
        links.forEach((e)=>{
            e.style.color="black"
        })
    }
    else{
        navbar.style.backgroundColor="transparent"
        
    }
})
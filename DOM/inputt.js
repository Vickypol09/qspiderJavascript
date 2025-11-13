//input --> whenvever we type keys it will aslo relfect due to input method
// let parent=document.getElementById("parent");
document.getElementById("input").addEventListener("input",function(){
    document.getElementById("content").innerHTML=`Your are typing...${this.value}`
})

//select

document.getElementById("input").addEventListener("select",()=>{
    alert("You have selected content");
})
document.getElementById("input").addEventListener("invalid",()=>{
    alert("Please Enter valid Input");
})
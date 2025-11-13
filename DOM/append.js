//to perform the opreation to add elmenets and style it

let h1=document.createElement("h1"); //creating just h1 element and storing in h1
console.log(h1);

h1.innerHTML="Happy Monday"; // applyingn values in created elements
h1.innerHTML="Happy TUESDAY";

document.appendChild(h1);// appending --> displaying on the doucment i.e html

//now to styling purpose

h1.style.color="pink";
h1.style.backgroundColor="black";

let ul=document.createElement("ul")
document.body.appendChild(ul)

let li=document.createElement("li");
ul.appendChild(li); // we can apppnd it on just ul also without using the documents or not 
li.innerHTML="htmll";
//setAttribute(type,src) too give attribute this statment get used

let ul=document.createElement("ul");
document.body.appendChild(ul);

ul.setAttribute("type","circle");

//for image

let image=document.createElement("img");
console.log(image);

image.setAttribute("src","agrigrocer.png")

document.body.appendChild(image)
image.style.height="200px"

image.style.border="4px solid red"
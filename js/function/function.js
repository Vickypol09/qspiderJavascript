//function

function Add(number,number2){
    console.log("fUCNTION GET EXCUTED");
    let val=20;
    let val2=30;

    console.log(val+val2);
    console.log(number);
    console.log(number2);
    console.log(number+number2);

}

Add(5,20);
Add(666,222);

//four types of functions

//named func
//anonynous function
//first with expression
//arrow function
//higher order function
//life function
//immediate invome function excution---this function is being called right  function decleartion

//anonynous function

const great=function(){
    return "hii i am annonynous function"
}

//fucntion expression or first class function
const add=function(a,b){
    return a+b;
};
console.log(add(2,3));

//arrow function

()=>{

}

let newarr=(Name)=>(
    console.log("ia arrow function")
)
newarr();

//higher orderfunction



    

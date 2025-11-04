//reduce()
//
let Number=[10,20,30,78,1,7];
console.log(Number);

let sum=Number.reduce((x,y)=>{
    return x+y;
})

console.log(sum);

let msg=['heloo','im','fresher'];
console.log(msg);

let newMsg=msg.reduce((a,b)=>{
    return a+ ' '+b
})

console.log(newMsg);

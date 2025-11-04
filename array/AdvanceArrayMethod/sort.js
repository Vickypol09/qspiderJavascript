//sort() it sort specially on string but it sort on number by asci value

let names=["vicky","shubham","utsav","bingudo"]
names.sort();
console.log(names);

//string

let number=[10,2,100,45,3,44,69];
number.sort();
console.log(number);// asic vlaue se sort hoggaa

//so to sort in ascending order
let num=[1,44,5,77,8,3,9]
num.sort((a,b)=>a-b)
console.log(num);
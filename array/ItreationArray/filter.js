//array iteration methods
//filter()
//map()
//reduce()
//forEach()

// let num=[22,43,68,24,69,2]
// console.log(num);

// //filter() mehtod
// let filtervalue=num.filter((n)=>{
//     return n%2==0;
// })

// console.log(filtervalue);

// //extra filteration 
// let newvalue=filtervalue=filtervalue.filter((x)=>{
//     return x >22;
// })

// console.log(newvalue);

// //sorting filter value
// newvalue.sort();
// console.log(newvalue);

//
let Names=['ani','sayali','soham','sarthak','jayesh','aarti'];
let Anames=Names.filter((ele=>ele.include('a')));
let OnlyAnames=Names.filter((ele)=>ele.startsWith('a'));
let OnlyInames=Names.filter((ele)=>ele.endsWith('i'));
console.log(OnlyInames);
console.log(OnlyAnames);
console.log(Anames);

let trianers=['Avinash(Dev)','collin(Both)','abhi(test)','Rohit(Dev)'];
let devTrainers=trianers.filter((val)=>val.includes("D"))
console.log(devTrainers);
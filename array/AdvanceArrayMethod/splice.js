//splice()--> remove replace  add  insert new array elemt in the original array .it will modify the orignal array continous elemnts.
let number=[10,20,30,40];
console.log(number);

let newVal=number.splice(1,2,100,200,3000)
console.log(number);
console.log(newVal);//in this container only removed value will be store

//in below line only we 1aree adding the array elemnt
let names=['manish','shweta','pooja']
names.splice(1,0,'utsav','kiran') //we should always give values at satring and ending  we cant keep empty;
console.log(names);



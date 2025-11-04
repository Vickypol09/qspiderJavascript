//two ways to create object

let person2={
    Name : 'vicky',
    city : 'kolhapur',
    //declaring normal function inside object

    msg : function(){
        console.log(`hello is ${this.Name} and is from ${this.city}`);

    }
}

console.log(person2);
person2.msg()

// the Below is not possible 
// fucntion printg(){
// function printing(){
// console.log(this.Name this.city);

// }

let person3={
    Name : 'shubham',
    city : 'gaaddar',
    //Es-6 shoter syntax function

    msg(){
        console.log(this.Name +' '+this.city);
    }

}

person3.msg()

//by using New constructor along with funciton

let car1={
    model : 'thar',
    color : 'black',
    price : 100
}

let car2={
    model : 'BMW',
    color : 'white',
    price : 200
}

console.log(car1);
console.log(car2);

function car(model , color, price, year){
    this.model=model;
    this.color=color,
    this.price=price,
    this.year=year
}

let c1 =new car("tata","pink",1000,2025)
let c2 =new car("ferrar","black",2000,2025)
let c3 =new car("kia","red",1000,2025)
let c4 =new car("honda","brwon",1400,2025)

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

//task
//add dept in all object

let public={
    Name : Vicky,
    age :21,
    city : pune
}

console.log(public);
console.log(Object.keys(public));
console.log(Object.values(public));
console.log(Object.entries(public));



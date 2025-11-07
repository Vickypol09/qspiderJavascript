//seal() is method is used to keep it sequre
//we can only update from the object, we cant add or delete


let product={
    pname:"skyblue shirt",
    color:"skyblue",
    size : ['s','m','l','xl'],
    price:699
}

console.log(product);

console.log(Object.seal(product));
console.log(Object.isSealed(product));

delete product.color
product.desc='The skyblue shirt of cotton'
product.price=499
console.log(product);

//freeze() , isFrozen()--> to check is freeze or not
//no adding , no delete, no upadting

console.log(Object.freeze(product));
console.log(Object.isFrozen(product));



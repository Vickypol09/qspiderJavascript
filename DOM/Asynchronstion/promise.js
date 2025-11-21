let prom= new Promise((resolve,reject)=>{
    let sub="webtech"
    if(sub){
        resolve("Its fun time")
    }
    else{
        reject("its boring")
    }
})

console.log(prom);
prom.then(()=>{
    alert("This subject is fun ....")
})

prom.catch(()=>{
    alert("Subject is boring .....")
})
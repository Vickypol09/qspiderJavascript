function login(username,password){
    console.log("checking the credntial");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (username === "payal" && password === 1234) {
                    resolve("login succesfully")
            } else {
                    reject("invalid")
            }
        },2000);
    })
}

login("payal",1234).then((msg)=>{
    console.log(msg);
    
}).catch((er)=>{
    console.log(er);
    
})
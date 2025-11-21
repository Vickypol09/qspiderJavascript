
function Age(year){
    try{
        if(year== undefined || year == null || year == ''){
            throw new Error("Year is required")
        }
        console.log(2025-year);
    }

    catch(error){
            console.log(error);
            console.error(error);
            
    }

    
}

Age(2004)
Age(2003)
Age('')
Age()
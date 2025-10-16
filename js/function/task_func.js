let bus=(gender,state)=>{
    document.writeln("Welcome to Busstation");

    if(gender=='female' && state == 'ka'){
        document.writeln("for you ticket is free");
    }
    else{
        document.writeln("ticket lelooo");
    }
}

bus(prompt("Enter the gender"),window.prompt("Enter the state"));
// bus(window.prompt("Enter the gender"),window.prompt("Enter the state"))
// bus(window.prompt("Enter the gender"),window.prompt("Enter the state"))
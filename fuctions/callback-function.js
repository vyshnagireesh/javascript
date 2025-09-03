//function that are pased as argument to other function
// handle as asychronus operation
//avoid next coding execution

function greetUser(name){
    console.log(`hello,${name}`);
    
}
// this function takes another function(callback)

function getUserInput(callback){
    const name = "vyshna";
    callback(name);
}
//getUserInput pass greetuser as a callback
getUserInput(greetUser);
const car = {
    brand:"toyota",
    start:function(){
        console.log("car started");
    }
}
car.start();


//"this" keywords- its refers the object its self.(udes to)
const person = {
    name:"vyshna",
    age:20,
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
        
        
    }
}


person.greet();
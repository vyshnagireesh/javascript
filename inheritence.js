//one class can inherit propraties and method from another.
// base
class animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a sound`);
        
    }
}
//derived class inherits from animal
class dog extends animal{
    constructor(name,breed){
        super(name);//call the oarentclass constructure
        this.breed = breed;
    }
// override  speak method(polymorphism)
        speak(){
            console.log(`${this.name} barks`);
            
        }
    }
    const dog = new dog("rex", "german shepherd");
    dog.speak();


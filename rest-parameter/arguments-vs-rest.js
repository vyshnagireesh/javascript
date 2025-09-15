//compare arguments vs rest parameter

function showArgs(){
    console.log(arguments);//not an array
}
showArgs(1,2,3,4);

function showRest(...arg){//real array
    console.log(arg);
    
}
showArgs(1,2,3,4,5)


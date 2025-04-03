//nested function

function square(num){
    console.log(`num is :${num}`);
    return function(nuum){
        console.log(`square of ${num} is : ${num*nuum}`);
        return function(name){
            console.log(`hello ${name},are you a`);
            
        }
        
    }
    
}
square(5)(5)("mohith");



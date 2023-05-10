// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

const checkString= (param:unknown)=>{
    if (typeof param === 'string') {
        console.log(param)
    }else{
        console.error('it is not a string');
        
    }
}
const check = checkString(9);
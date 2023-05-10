// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

const reverse = <T>(...param:T[])=>{
    return param.reverse()
}
console.log(reverse('bijoy','das'))
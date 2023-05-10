// Functions and Default Parameters

// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

const repet = (param1: string, param2: number = 3):void => {
  for (let i = 0; i < param2; i++) {
    console.log(param1);
  }
};

repet("Bijoy");

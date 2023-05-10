## What is TypeScript, and how is it different from JavaScript?
- TypeScript is an object-oriented programming language developed by Microsoft Corporation, whereas JavaScript is the programming language for the web. TypeScript is an open-source language to build large-scale web apps, whereas JavaScript is a server-side programming language that helps to develop interactive web pages.

## Can you explain the difference between "interface" and "type" in TypeScript?
- interfaces are essentially a means of describing the shapes of data, like an object. On the other hand, types are definitions of data types, like primitive, intersection, union, tuple, or different types.

## Can you give an example of how to use generics in TypeScript?
- To use generics, you need to use angular brackets and then specify a type variable inside them. Developers generally use T , X and Y . But it can be anything depending upon your preference. You can then assign the same variable name as the type to the parameter of the function.

## What is the difference between an "unknown" and "any" type in TypeScript?
- We cannot assign unknown to anything but itself or any , while we can assign any to anything. As you can see, these constraints make sure that we verify the unknown value before working with it, which is important to reduce the possibility of runtime errors.

## Can you give an example of how to use enums in TypeScript?
- Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript. Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
 
## What is the "as" keyword used for in TypeScript?
- The as keyword is a type assertion in typescript. Type assertion is used such that we can set the data type of the variable on our own and tells the compiler not to infer it on its own. Type assertion is used to tell the compiler that we want to treat any as a number, or string

## Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
- TypeScript, type guards are a way to narrow down the type of a variable within a conditional block. They allow you to make more specific type assertions and perform different operations based on the inferred type. TypeScript provides several type guards, and two of them are commonly used with the in and typeof operators.
   
   1. Using the in operator:
       - The in operator allows you to check if a property exists in an object. 
   2. Using the typeof operator:
        - The typeof operator is used to determine the type of a value at runtime.    
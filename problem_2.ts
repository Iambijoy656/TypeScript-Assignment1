// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,


interface Person {
    name: string;
    age: number;
  }
  const people: Person[] = [
    { name: 'Bijoy', age: 22 },
    { name: 'Joy', age: 54 },
    { name: 'kalam', age: 10 },
    { name: 'jamal', age: 25 },
  ];

  function AboveEighteen(people: Person[]) {
    let filter:Person[]=[]
 for (const ele of people) {
        if (ele.age>=18){
         filter.push(ele) 
        }
    }
    return filter

  }

  
  const adults: Person[] = AboveEighteen(people);
  console.log(adults);
    
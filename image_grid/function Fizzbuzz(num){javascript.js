 const fruits = ["Apple", "Orange", "Strawberry", "Pineapple", "Guava"];
console.log(fruits);
console.log(fruits.length);

console.log(`The second element of array is ${fruits[1]} `);

console.log(`The last element of array is ${fruits[fruits.length -1]} `);

// change element of array manually
fruits[1] = "Kiwi";
console.log(fruits);

//push element into array
fruits.push("Cherry");
console.log(fruits);

//pop element from array
//fruits.pop(fruits);
//console.log(fruits);

//sorting an array

console.log(`sorted elements are ${fruits.sort()}`);

const numbers = [54, 52, 33, 77 ,11];
 console.log(numbers.sort());

//loop through an array
   for(let i = 0; i<fruits.length; i++)

       console.log(`The ${i}th element of array  is ${fruits[i]});

    














}
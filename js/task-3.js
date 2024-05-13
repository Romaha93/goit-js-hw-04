'use strict';

// const profile = {
       
//     username: "Jacob",
//     playTime: 300,

//     changeUsername(newName) {
//         this.username = newName;
//     },

//     updatePlayTime(hours) {
//         this.playTime += hours;
//     },

//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours!`;
//     },

// };



// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"


// function changeEven(numbers, value) {
//   const newArray = [];
  
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value)
//     } else {
//         newArray.push(number);
//     }
//   });

//   return newArray
// }

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));



// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 > 0);

// // console.log(evenNumbers([24, 82, 36, 18, 52]));
// // console.log(oddNumbers([17, 61, 47, 73]))
// console.log(evenNumbers)
// console.log(oddNumbers)




// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);
 

// console.log(getUsersWithAge([
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ], 20, 30));



// const calculateTotalBalance = (users) => users.reduce((calculate, user) => {
  
//   return calculate += user.balance;

// }, 0);



// const numbers = [3, 5, 54, 1, 17, 10, 55, 1, 54];

// const sortedNumbers = numbers.toSorted((a, b) => b - a);

// console.log(sortedNumbers)




const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .toSorted((first, second) => first.author.localeCompare(second.author))
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author);

  console.log(names);
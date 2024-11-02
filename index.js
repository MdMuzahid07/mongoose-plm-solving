// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map the remaining people to an array of names.Print the final result.


// const peoples = [
//     { name: "Mir vai", age: 25, gender: "male" },
//     { name: "jhankar vai", age: 30, gender: "male" },
//     { name: "rakib vai", age: 30, gender: "male" },
//     { name: "shejuthi apu", age: 27, gender: "female" },
//     { name: "nargis apu", age: 20, gender: "female" },
//     { name: "Tasnuva  apu", age: 26, gender: "female" }
// ];

// const filterAndMapNames = (arrOfPeoples) => {
//     return arrOfPeoples.filter(person => person.gender === "male").map(person => person.name);
// };

// const remaining = filterAndMapNames(peoples);

// console.log(remaining);







// 2.Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year.Write a function that takes the array and returns a new array with only the book titles.Print the result.



const books = [
    { title: "JS Cookbook", author: "Author A", year: 2000 },
    { title: "You Don't Know JavaScript", author: "Author B", year: 1999 },
    { title: "The Definitive Guide", author: "Author c", year: 1978 }
];

const bookTitles = (booksArray) => {
    return booksArray.map(book => book.title);
};

const getTitles = bookTitles(books)
console.log(getTitles);
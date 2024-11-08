// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map the remaining people to an array of names.Print the final result.


const peoples = [
    { name: "Mir vai", age: 25, gender: "male" },
    { name: "jhankar vai", age: 30, gender: "male" },
    { name: "rakib vai", age: 30, gender: "male" },
    { name: "shejuthi apu", age: 27, gender: "female" },
    { name: "nargis apu", age: 20, gender: "female" },
    { name: "Tasnuva  apu", age: 26, gender: "female" }
];

const filterAndMapNames = (arrOfPeoples) => {
    return arrOfPeoples.filter(person => person.gender === "male").map(person => person.name);
};

const remaining = filterAndMapNames(peoples);

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
// console.log(getTitles);



// 3.Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number.Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


const square = num => num * num;
const double = num => num * 2;
const addFive = num => num + 5;

const composedFunction = (num) => addFive(double(square(num)));


const output = composedFunction(5);
// console.log(output);





// 4.Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year.Write a function to sort the array of cars by the year of manufacture in ascending order.Print the sorted array.




const cars = [
    { make: "Mercies", model: "fx-11", year: 2018 },
    { make: "BMW", model: "hk-2", year: 2020 },
    { make: "Ford", model: "Mustang", year: 2015 },
    { make: "Tesla", model: "X-1", year: 2022 },
];

const sortCars = (carsArray) => {
    return carsArray.sort((a, b) => a.year - b.year);
};


const sortCarsByYear = sortCars(cars);

// console.log(sortCarsByYear);










// 5.Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name.If found, modify their age property.Print the updated array.




const allPeoples = [
    { name: "Mir vai", age: 25, gender: "male" },
    { name: "jhankar vai", age: 30, gender: "male" },
    { name: "rakib vai", age: 30, gender: "male" },
    { name: "shejuthi apu", age: 27, gender: "female" },
    { name: "nargis apu", age: 20, gender: "female" },
    { name: "Tasnuva  apu", age: 26, gender: "female" }
];



const modifyAgeByName = (arrayOfPeoples, name, newAge) => {
    const findThePersonByName = arrayOfPeoples.find((people) => people.name === name);
    if (findThePersonByName) {
        findThePersonByName.age = newAge
    }
    return arrayOfPeoples;
};


const modifiedOutput = modifyAgeByName(allPeoples, "Tasnuva  apu", 27);

console.log(modifiedOutput);
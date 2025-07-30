const arr = [1, 2, 3, 4];
console.log(arr.length);
console.log(arr[0]);

// Creating objects
// const objectName = {}; -- Uses Key Value pair
const person = {
  name: "Naruto",
  age: 11,
  isStudent: true,
  1: "one",
};

let personName = "name";

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);

console.log(person[0]); // does not work - since not an array
console.log(person["name"]); // this works - since you are providing key - not using index as if it's an array
console.log(person[personName]); // same as above basically 
//console.log(person.1); // will not work since all keys are looked at as strings
console.log(person["1"]); // this will work since it sees 1 as a string and a key

console.log(person);
delete person["1"]; // used to delete
console.log(person);

person.isStudent = false;
console.log(person);
person["isStudent"] = true;
console.log(person);

console.log("name" in person); // in used to check if key is in object
console.log("fjsa" in person);

// -----------------------------------------------------------------------------------------------------//
// for in loop is used for object literals - it loops over the keys in the object
const dog = {
  breed: "Labrador",
  age: 5,
  friendly: true,
};

for (const key in dog) {
  console.log(dog[key]);
}


const data = [
  {
    showName: "One Piece",
    mc: "Luffy",
    age: 17,
  },
  {
    showName: "Attack on Titan",
    mc: "Eren",
    age: 19,
  },
  {
    showName: "Kingdom",
    mc: "Xin",
    age: 18,
  },
];

for (let i = 0; i < data.length; i++) {
  const obj = data[i];
  console.log(obj);
  console.log(obj.showName);
  console.log(obj.mc);
}

console.log(JSON.stringify(data)); // turns object into string
let stringifyData = JSON.stringify(data);
console.log(JSON.parse(stringifyData)); // takes a string that looks like JSON and turns it into object

// **** Interview Question **** //
// count and list how many copies of each
const colours = ["red", "red", "blue", "yellow", "yellow", "yellow"];

// red: 2, blue: 1, yellow:3
const frequencyCounter = {};
console.log("frequencyCounter is empty", frequencyCounter);

for (let i = 0; i < colours.length; i++) {
  const colour = colours[i];
  //if key exist increment otherwise add to object as key 
  if (colour in frequencyCounter) {
    frequencyCounter[colour] += 1;
  } else {
    frequencyCounter[colour] = 1;
  }
}

console.log(frequencyCounter);

// Methods to know
console.log(colours.join()); // Turns an array of items into one string
console.log(colours.join(", "));

const str = "The, quick, fox, escaped";
console.log(str); // Takes a string and splits it into an array based on a character you choose
console.log(str.split(","));




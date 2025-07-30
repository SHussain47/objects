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



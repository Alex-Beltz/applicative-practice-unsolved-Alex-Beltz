export function minBy(array, cb) {
  let lowestAge = array[0];
  for (let person of array) {
    if (cb(person) < lowestAge.age) {
      return person;
    }
  }
  return lowestAge;
}

export function maxBy(array, cb) {
  let highestAge = array[0];
  for (let person of array) {
    if (cb(person) > cb(highestAge)) {
      return person;
    }
  }
  return highestAge;
}
//
/*Can you take a look at my original code below please?*/
//
/*The below code works when I moved the array over to this file (as seen below), but not
  when I ran the test. It said it couldn't read properties of undefined
  (reading 'pop'), and the same message about reverse().*/
//
//
/*1 array copied over from test, with duplicate youngest and oldest people objs and an empty array to test for "undefined"*/

// let people = [
//   { name: "jon", age: 29 },
//   { name: "peter", age: 30 },
//   { name: "highest", age: 30 },
//   { name: "andrey", age: 22 },
//   { name: "lowest", age: 22 },
//   { name: "rachel", age: 25 },
// ];
// let people2 = [];

// export function minBy(array, cb) {
//   let ages = array.map((p) => {
//     if (!p) {
//       return undefined;
//     } else {
//       return p.age;
//     }
//   });
//   let lowestAge = cb(ages).reverse().pop();
//   let youngest = array.filter((p) => {
//     if (p.age === lowestAge) {
//       return p;
//     }
//   });
//   return youngest[0];
// }

// minBy(people, cb)
// minBy(people2, cb)

// export function maxBy(array, cb) {
//   let ages = array.map((p) => {
//     if (!p) {
//       return undefined;
//     } else {
//       return p.age;
//     }
//   });
//   let highestAge = cb(ages).pop();
//   let oldesest = array.filter((p) => {
//     if (p.age === highestAge) {
//       return p;
//     }
//   });
//   return oldesest[0];
// }
// maxBy(people, cb)
// maxBy(people2, cb)

// function cb(ages) {
//   return ages.sort((a, b) => a - b);
// }

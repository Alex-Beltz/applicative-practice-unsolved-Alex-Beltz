/*this works fine when I move the array over and add duplicate oldest age and youngest age objects, 
and with an empty array but won't pass the test for some reason*/

/*export function minBy(array, cb) {
let ages = array.map(p => p.age)
  let lowest = cb(ages).shift()
  return array.filter(p => p.age === lowest)[0]
}

export function maxBy(array, cb) {
let ages = array.map(p => p.age)
  let highest = cb(ages).pop()
  return array.filter(p => p.age === highest)[0]
}

function cb(ages) {
  return ages.sort()
}*/

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

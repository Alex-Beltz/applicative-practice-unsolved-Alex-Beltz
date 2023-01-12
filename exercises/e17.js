export function minBy(array, cb) {
  let minValue = Infinity;
  let minElement = undefined;
  for (const element of array) {
    const value = cb(element);
    if (value < minValue) {
      minValue = value;
      minElement = element;
    }
  }
  return minElement;
}

export function maxBy(array, cb) {
  let maxValue = -Infinity;
  let maxElement = undefined;
  for (const element of array) {
    const value = cb(element);
    if (value > maxValue) {
      maxValue = value;
      maxElement = element;
    }
  }
  return maxElement;
}

// export function minBy(array, cb) {
//   if (array.length < 1) {
//     return undefined;
//   } else {
//     let lowest = array.map((person) => person.age).sort().shift();
//     return array.filter((person) => cb(person, lowest))[0]
//   }
//   }

// export function maxBy(array, cb) {
//   if (array.length < 1) {
//     return undefined;
//   } else {
//     let highest = array.map((person) => person.age).sort().pop();
//     return array.filter((person) => cb(person, highest))[0];
//   }
// }

// function cb(obj, number) {
//   Object.values(obj).includes(number);
// }

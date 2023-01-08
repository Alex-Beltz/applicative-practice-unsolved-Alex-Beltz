export function minBy(array, cb) {
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
}

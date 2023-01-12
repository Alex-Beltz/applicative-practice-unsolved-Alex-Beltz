export function find(array, callback) {
  return array.filter((obj) => callback(obj))[0];
}

function callback(obj) {
  Object.values(obj).includes("true");
}

// see e16.md

export function find(array, callback) {
  let trueElem = [];
  array.filter((obj) => {
    if (obj.v) {
      if (callback(obj) === true) {
        trueElem.push(obj);
      } else if (callback(obj) === false) {
        return undefined;
      }
    }
  });
  return trueElem[0];
}

function callback(obj) {
  obj.v = true ? true : false;
}

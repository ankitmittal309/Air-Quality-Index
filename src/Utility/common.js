export const sortOn = (property) => {
  return function (a, b) {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    } else {
      return 0;
    }
  };
};

export var merge = (a, b, p) =>
  a.filter((aa) => !b.find((bb) => aa[p] === bb[p])).concat(b);

export function addKeyAndValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    obj[key] = value;
  }
  return arr;
}

export default function orderByProps(obj, sortProps) {
  const array = [];
  const tempArray = [];
  const tempObj = obj;
  for (const key of sortProps) {
    if (tempObj[key]) {
      array.push({
        key,
        value: tempObj[key],
      });
      delete tempObj[key];
    }
  }
  for (const key in tempObj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      tempArray.push({
        key,
        value: obj[key],
      });
    }
  }
  tempArray.sort((a, b) => (b.key < a.key) - (a.key < b.key));
  return array.concat(tempArray);
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const sortProps = ['name', 'level'];

console.log(orderByProps(obj, sortProps));

module.exports = function check(str, bracketsConfig) {
  let string = str;
  let obj = {};
  let res = true;
  let arr = [];

  function isArr(x) {
    x.forEach(el => {
      if (Array.isArray(el)) {
        let q = el.slice(1, 2).join('');
        obj[q] = el.slice(0, 1).join('');
      }
    })
  }
  isArr(bracketsConfig)

  arr = string.split('')
  let steck = []
  function stk() {
    arr.forEach(el => {
      for (let key in obj) {
        if (el === key && obj[key] === steck[steck.length - 1] && steck.length !== 0) {
          steck.pop(steck[steck.length - 1])
          break
        } else if (el === obj[key]) {
          steck.push(el)
          break;
        } else if (steck.length === 0 && el === key) {
          res = 'false'
          return res;
        } else if (el === key && obj[key] === steck[steck.length - 1] && steck.length !== 0) {
        }
      }
    })
  }
  stk()
  if (steck.length === 0 && res === true ) {
    res = true
  } else {
    res = false
  }
  return res;
}

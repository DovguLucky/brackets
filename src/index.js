module.exports = function check(str, bracketsConfig) {
  let string = str;
  let obj = {};

  function isArr(x) {
    x.forEach(el => {
      if (Array.isArray(el)) {
        let q = String(el.splice(1, 1));
        obj[String(el.splice(0, 1))] = q;
      }
    })
  }

  let arrStr = string.split('');

  function del() {
    arrStr.forEach((el, index) => {
      for (let key in obj) {
        let second = arrStr[index + 1];
        if( el === key && second === obj[key] ){
          arrStr.splice(index, 2)
          del(arrStr)
        }
      }
    })
  }


  isArr(bracketsConfig)
  del(arrStr)
  let l = arrStr.length;
let res = 0;
  if(l > 0) {
    res = false;
  }  else {
    res = true;
  }

  return res;
}


// source https://repl.it/@eksa/Logic-Challenge-X-dan-O
// gelap bang
function xo(str) {
  var o = 0 
  var x = 0;
  
  for (var i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
          x++;
        } else if (str[i] === 'o') {
            o++;
        }
    }
    
    return x !== o ? false : true;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

function sumOfN(n) {
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
function factorialOfN(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      var factorial = 1;
  
      for (var i = 2; i <= n; i++) {
        factorial *= i;
      }
  
      return factorial;
    }
  }
  function repeatString(string, num) {
    var result = '';
    
    for (var i = 0; i < num; i++) {
      result += string;
    }
  
    return result;
  }
  function countMinMax(min, max) {
    return max - min + 1;
  }
  function sumMinToMax(min, max) {
    var sum = 0;
  
    for (var i = min; i < max; i++) {
      sum += i;
    }
  
    return sum;
  }
  function productMinToMax(min, max) {
    var product = 1;
  
    for (var i = min; i < max; i++) {
      product *= i;
    }
  
    return product;
  }
  function multiplyBy10NTimes(num, n) {
    var result = num;
  
    for (var i = 1; i < n; i++) {
      result *= 10;
    }
  
    return result;
  }
  function countCharAtIndex(string1, index, string2) {
    var charToCount = string1[index];
    var count = 0;
  
    for (var i = 0; i < string2.length; i++) {
      if (string2[i] === charToCount) {
        count++;
      }
    }
  
    return count;
  }
  
  function reverseString(string) {
    var reversed = '';
  
    for (var i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
  
    return reversed;
  }
  function getIndexOf(string, char) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === char) {
        return i;
      }
    }
  
    return "null";
  }
      
      
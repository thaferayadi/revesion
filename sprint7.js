function sumOfN(n) {
    var sum = 0;
    var i = 1;
  
    while (i <= n) {
      sum += i;
      i++;
    }
  
    return sum;
  }
  function factorialOfN(n) {
    var factorial = 1;
    var i = 1;
  
    while (i <= n) {
      factorial *= i;
      i++;
    }
  
    return factorial;
  }
  function repeatString(str, num) {
    var result = "";
    var i = 0;
  
    while (i < num) {
      result += str;
      i++;
    }
  
    return result;
  }
  function countMinMax(num1, num2) {
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
  
    return max - min;
  }
  function sumMinToMax(min, max) {
    var sum = 0;
    var n = min;
  
    while (n <= max) {
      sum += n;
      n++;
    }
  
    return sum;
  }
  function productMinToMax(num1, num2) {
    var product = 1;
    var d = num1;
  
    while (d < num2) {
      product *= d;
      d++;
    }
  
    return product;
  }
  function multiplyBy10NTimes(number, times) {
    var result = number;
    var i = 0;
  
    while (i < times) {
      result *= 10;
      i++;
    }
  
    return result;
  }

  function countCharAtIndex(str1, index, str2) {
    if (index < 0 || index >= str1.length) {
      return "null";
    }
  
    var targetChar = str1.charAt(index);
    var count = 0;
  
    for (var i = 0; i < str2.length; i++) {
      if (str2.charAt(i) === targetChar) {
        count++;
      }
    }
  
    return count;
  }
  function reverseString(inputString) {
    var reversedString = "";
  
    for (var i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
  
    return reversedString;
  }
  
  function getIndexOf(inputString, targetChar) {
    for (var i = 0; i < inputString.length; i++) {
      if (inputString.charAt(i) === targetChar) {
        return i;
      }
    }


  
function sumEven(number1, number2) {
    var sum = 0;
  
    for (var i = number1; i < number2; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  function primeCounter(number) {
    function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    var primeCount = 0;
  
    for (var i = 2; i < number; i++) {
      if (isPrime(i)) {
        primeCount++;
      }
    }
  
    return primeCount;
  }
  // i do not understan the other
  
    
function returnTrue() {
    return true;
  }
  function returnFalse( ) { 

return false    
  }
  function isEven(number) {
    return number % 2 === 0;
  }
  function isOdd(number) {
    return number % 2 !== 0;
  }
  function isGreaterThan10(number) {
    return number > 10;
  }
  function isLessThan30(number) {
    return number < 30;
  }
  function isEqualTo10(number) {
    return number === 10;
  }
  function isGreaterOrEqualTo15(number) {
    return number >= 15;
  }
  function isLessOrEqualTo8(number) {
    return number <= 8;
  }
  function isLessThan(num1, num2) {
    return num1 < num2;
  }

  function isEqualTo(num1, num2) {
    return num1 === num2;
  }
  function isOldEnoughToDrive(age) {
    return age >= 18;
  }
  function isValidPassword(password) {
    return password.length >= 8;
  }
  function longerString(str1, str2) {
    if (str1.length > str2.length) {
      return str1;
    } else if (str2.length > str1.length) {
      return str2;
    } else {
      return "both";
    }
  }
  function opposite(n) {
    return !n;
  }  
  function rectAreaGreaterThan50(length, width) {
    return length * width >= 50;
  }

  function budgetStatus(amount) {
    if (amount > 250) {
      return "Over budget";
    } else {
      return "Under budget";
    }
  }
  
  function isTriangle(side1, side2, side3) {
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
  }
  function getMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
    
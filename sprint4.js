function opposite(boolean) {
    return !boolean
}
function greaterThan5(num1, num2) {
    return num1 > 5 || num2 > 5;
  }
  function allGreaterThan5(num1, num2) {
    return num1 > 5 && num2 > 5;
  }
  function largerThan5AndLessThan20(number) {
    return number > 5 && number < 20;
  }
  function not6AndLessThan10(number) {
    return number !== 6 && number < 10;
  }
  function largerThan3AndLessThan18(num1, num2, num3) {
    return num1 > 3 && num1 < 18 && num2 > 3 && num2 < 18 && num3 > 3 && num3 < 18;
  }  
  
  function cloudyAndRainy(weather1, weather2) {
    return weather1.toLowerCase() === 'cloudy' && weather2.toLowerCase() === 'rainy';
  }
  function weatherActivities(weather) {
    var lowerCaseWeather = weather.toLowerCase();
  
    if (lowerCaseWeather === 'sunny') {
      return 'Go for a picnic in the park.';
    } else if (lowerCaseWeather === 'rainy') {
      return 'Stay indoors and read a book.';
    } else if (lowerCaseWeather === 'snowy') {
      return 'Build a snowman in your backyard.';
    } else if (lowerCaseWeather === 'cloudy') {
      return 'Take a nature walk and enjoy the cool breeze.';
    } else {
      return 'No specific activity recommended for this weather.';
    }
  }
  function evenAndGreaterThan7(number) {
    return number % 2 === 0 && number > 7;
  }
  function areValidCredentials(name, password) {
    return name.length > 3 && password.length >= 8;
  }
  function findMinLengthOfThreeWords(word1, word2, word3) {
    var minLength = Math.min(word1.length, word2.length, word3.length);
    return minLength;
  }
  function findmaxLengthOfThreeWords(word1, word2, word3) {
    var maxLength = Math.max(word1.length, word2.length, word3.length);
    return minLength;
  }
  function guessMyNumber(guess) {
    // Generate a random number between 0 and 5
    const randomNumber = Math.floor(Math.random() * 6);
  
    // Compare the guess with the random number
    if (guess === randomNumber) {
      return 'You guessed my number!';
    } else {
      return 'Nope! That wasn\'t it!';
    }
  }
// 
function not(statement1, statement2) {
    return !(not(statement1) && not(statement2));
  }

  function shirtWidth(width) {
    if (width >= 20 && width < 30) {
      return 'You should select a size S';
    } else if (width >= 30 && width < 40) {
      return 'You should select a size M';
    } else if (width >= 40 && width < 50) {
      return 'You should select a size L';
    } else {
      return 'You should select a different shirt';
    }
  }
  function playerOneChoice(choice) {
    if (choice === "rock") {
      return "Player 1 chose rock";
    } else if (choice === "paper") {
      return "Player 1 chose paper";
    } else if (choice === "scissors") {
      return "Player 1 chose scissors";
    } else {
      return "Player 1 has chosen poorly!";
    }
  }
  function convertScoreToGrade(score) {
    if (score >= 90 && score <= 100) {
      return 'A';
    } else if (score >= 80 && score <= 89) {
      return 'B';
    } else if (score >= 70 && score <= 79) {
      return 'C';
    } else if (score >= 60 && score <= 69) {
      return 'D';
    } else if (score >= 0 && score <= 59) {
      return 'F';
    } else {
      return 'Invalid Score';
    }
  }

  function convertScoreToGradeWithPlusAndMinus(score) {
    if (score >= 95 && score <= 100) {
      return 'A+';
    } else if (score >= 90 && score <= 94) {
      return 'A-';
    } else if (score >= 87 && score <= 89) {
      return 'B+';
    } else if (score >= 80 && score <= 86) {
      return 'B-';
    } else if (score >= 77 && score <= 79) {
      return 'C+';
    } else if (score >= 70 && score <= 76) {
      return 'C-';
    } else if (score >= 67 && score <= 69) {
      return 'D+';
    } else if (score >= 60 && score <= 66) {
      return 'D-';
    } else if (score >= 0 && score <= 59) {
      return 'F';
    } else {
      return 'Invalid Score';
    }
  }  
  function isItTruthy(value) {
    if (value) {
      return 'Input is truthy';
    } else {
      return 'Input is falsy';
    }
  }
  function checkArea(area) {
    return area > 48 && area < 100;
  }
  function multiply(num1, num2) {
    var product = num1 * num2;
    return product > 50 && product < 150;
  }
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
  //the other exercice of this game of   upperbound to be honest i don't understand well the concept
 // this game is Hard at me right now
/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  height = prompt("Enter an integer between 1 and 23.");
  let integerCheck = false;
  let hashtag = "#";
  let space = "&nbsp;";
  let lines = "";
  while(integerCheck == false && height !== null) {
    height = +height;
    integerCheck = Number.isInteger(height);
    if(height > 23 || height < 1 || integerCheck == false) {
      height = prompt("ENTER AN INTEGER BETWEEN 1 AND 23!");
    integerCheck = false;
    }
  }

    for(let x = 1; x <= height; x++) {

            for(let y = 0; y <= (height - 1 - x); y++) {
              lines = lines + space;
            }

            for(let z = 0; z <= x; z++) {
              lines = lines + hashtag;
            }
        lines = lines + "<br>";
      }

    let p = document.getElementById("mario-easy-output");
    p.innerHTML = "<code>" + lines + "</code>";





  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  height = prompt("Enter an integer between 1 and 23.");
  let integerCheck = false;
  let hashtag = "#";
  let spaceBefore = "&nbsp;";
  let lines = "";
  while(integerCheck == false && height !== null) {
    height = +height;
    integerCheck = Number.isInteger(height);
    if(height > 23 || height < 1 || integerCheck == false) {
      height = prompt("ENTER AN INTEGER BETWEEN 1 AND 23!");
    integerCheck = false;
    }
  }

    for(let x = 1; x <= height; x++) {

            for(let y = 0; y <= (height - 1 - x); y++) {
              lines = lines + spaceBefore;
            }

            for(let z = 0; z <= x; z++) {
              lines = lines + hashtag;
            }

        lines = lines + spaceBefore + spaceBefore;

            for(let w = 0; w <= x; w++) {
              lines = lines + hashtag;
            }

        lines = lines + "<br>";
      }

      let p = document.getElementById("mario-hard-output");
      p.innerHTML = "<code>" + lines + "</code>";

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  let integerCheck;
  let creditLength = 0;
  let sum = 0;
  let digits = [];
  while(true) {
    card = prompt("Enter a credit card number.");
    integerCheck = Number.isInteger(+card);
    creditLength = Math.ceil(Math.log10(card));
    if(card === null) {
      break;
    }
    if(integerCheck == true) {
      break;
    }
  }
  let cardClone = +card;
  if(card !== null) {
    for(let x = 1; x <= creditLength; x++) {
      digits.unshift(Math.floor(card % Math.pow(10, x) / Math.pow(10, x - 1)));
    }

    for(let y = creditLength - 2; y >= 0; y = y -2) {
      sum = sum + digits[y] * 2;
    }

    if(creditLength % 2 == 1) {
      for(let z = 0; z <= creditLength; z = z + 2) {
        sum = sum + digits[z];
      }
    } else {
      for(let z = 1; z <= creditLength; z = z + 2) {
        sum = sum + digits[z];
      }
    }
  }

    let p = document.getElementById("credit-output");

    if(sum % 10 != 0 && card !== null) {
      p.innerHTML = "<img src='images/invalid.png' />";
    } else if(card !== null) {
      if(creditLength == 15) {
        if(digits[0] == 3 && digits[1] == 4) {
          p.innerHTML = "<img src='images/amex.png' />";
        } else if(digits[0] == 3 && digits[1] == 7) {
          p.innerHTML = "<img src='images/amex.png' />";
        }
      } else if(creditLength == 13) {
        if(digits[0] == 4) {
          p.innerHTML = "<img src='images/visa.png' />";
        }
      } else if(creditLength == 16) {
        if(digits[0] == 5 && digits[1] == 1) {
          p.innerHTML = "<img src='images/mastercard.png' />";
        } else if(digits[0] == 5 && digits[1] == 2) {
          p.innerHTML = "<img src='images/mastercard.png' />";
        } else if(digits[0] == 5 && digits[1] == 3) {
          p.innerHTML = "<img src='images/mastercard.png' />";
        } else if(digits[0] == 5 && digits[1] == 4) {
          p.innerHTML = "<img src='images/mastercard.png' />";
        } else if(digits[0] == 5 && digits[1] == 5) {
          p.innerHTML = "<img src='images/mastercard.png' />";
        } else if(digits[0] == 4) {
          p.innerHTML = "<img src='images/visa.png' />";
        } else {
          p.innerHTML = "<img src='images/invalid.png' />"
        }
      }
    } else {
      p.innerHTML = "";
    }
    card = +cardClone;

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  alert("An integer will be randomly generated between 1 and 1000. Try and guess that integer in as few attempts as possible!");
  let answer = Math.floor(Math.random() * 1000) + 1;
  answer = +answer
  let guessedNumber = prompt("Guess an integer between 1 and 1000.");
  let integerCheck = false;
  let attempts = 0;
  while(guessedNumber != answer) {
    while(true) {
      if(guessedNumber == null) {
        guessedNumber = prompt("Oh come on, guess a number!");
        integerCheck = false;
      } else{
        guessedNumber = +guessedNumber;
        integerCheck = Number.isInteger(guessedNumber);
        break;
      }
    }

    if(integerCheck == false || guessedNumber < 0 || guessedNumber > 1000) {
      guessedNumber = prompt("GUESS AN INTEGER BETWEEN 1 AND 1000!");
      integerCheck = false;
    } else if(guessedNumber >= answer - 10 && guessedNumber <= answer) {
      guessedNumber = prompt("Your guess was only a bit too low! Try again.");
      attempts++;
    } else if(guessedNumber <= answer + 10 && guessedNumber >= answer) {
      guessedNumber = prompt("Your guess was only a bit too high! Try again.");
      attempts++;
    } else if(guessedNumber >= answer - 50 && guessedNumber <= answer) {
      guessedNumber = prompt("Your guess was somewhat low. Try again.");
      attempts++;
    } else if(guessedNumber <= answer + 50 && guessedNumber >= answer) {
      guessedNumber = prompt("Your guess was somewhat high. Try again.");
      attempts++;
    } else if(guessedNumber >= answer - 100 && guessedNumber <= answer) {
      guessedNumber = prompt("Your guess was too low. Try again.");
      attempts++;
    } else if(guessedNumber <= answer + 100 && guessedNumber >= answer) {
      guessedNumber = prompt("Your guess was too high. Try again.");
      attempts++;
    } else if(guessedNumber <= answer) {
      guessedNumber = prompt("Your guess was WAY too low! Try again.");
      attempts++;
    } else if(guessedNumber >= answer) {
      guessedNumber = prompt("Your guess was WAY too high! Try again.");
      attempts++;
    }
  }

  if(guessedNumber = answer) {
    attempts++;
    let p = document.getElementById("guess-output");
    p.innerHTML = "Congratulations, you guessed the integer!" + "<br>" + "Attempts: " + attempts;
  }

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

windspeed = Number(prompt("Enter a nonegavtive integer."));
let integerCheck = false;
while(integerCheck == false && windspeed !== null) {
  windspeed = +windspeed;
  integerCheck = Number.isInteger(windspeed);
  if(windspeed < 0 || integerCheck == false) {
    windspeed = Number(prompt("ENTER A NONEGATIVE INTEGER!"));
  }
}

if(windspeed >= 157) {
  let p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 5 Hurricane.";
} else if(windspeed >= 130) {
  let p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 4 Hurricane.";
} else if(windspeed >= 111) {
  let p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 3 Hurricane.";
} else if(windspeed >= 96) {
  let p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 2 Hurricane.";
} else if(windspeed >= 74) {
  let p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 1 Hurricane.";
} else if(windspeed >= 39) {
  let p = document.getElementById("hurricane-output");
  p.innerHTML = "Tropical Storm.";
} else {
  let p = document.getElementById("hurricane-output");
  p.innerHTML = "The skies are calm...";
}

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */
   let sum = 0;
   let integerCheck;
   alert("You will be asked to submit six scores. Thye must all be real numbers between 0.0 and 10.0.");
   for(let x = 0; x < 6; x++) {
     let score = prompt("Enter a score between 0.0 and 10.0.");
     score = +score;
     integerCheck = Number.isInteger(score);
     while(score !== null && (integerCheck == false || score < 0 || score > 10)) {
         score = prompt("ENTER A SCORE BETWEEN 0.0 AND 10.0!");
         score = +score;
         integerCheck = Number.isInteger(score);
     }
     scores.push(score);
   }

   for(let y = 0; y <= 5; y++) {
     total = total + scores[y];
   }

   let scoreMin = Math.min(... scores);
   let scoreMax = Math.max(... scores);
   let discardSum = total - (scoreMin + scoreMax);
   let average = discardSum / 4;
   let p = document.getElementById("gymnastics-output");
   p.innerHTML = "Discarded: " + scoreMin + ", " + scoreMax + "<br>" + "Score: " + average.toFixed(2);


  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  alert("You will be asked to put in test grades, then quiz grades, then homework grades for the marking period. You may enter any number of grades for each category, and type '-1' once you are done with a category.");
  let testScore = 0;
  let quizScore = 0;
  let homeworkScore = 0;
  let integerCheck;
  while(testScore != -1) {
    testScore = prompt("Enter a test score between 0.0 and 100.0.");
    testScore = +testScore;
    integerCheck = Number.isInteger(testScore);
    while(testScore != -1 && testScore !== null && (integerCheck == false || testScore < 0 || testScore > 100)) {
      testScore = prompt("ENTER A TEST SCORE BETWEEN 0.0 AND 100.0!");
      testScore = +testScore;
      integerCheck = Number.isInteger(testScore);
    }

    if(testScore != -1) {
      testTotal = testTotal + testScore;
      tests++;
    }
  }

  while(quizScore != -1) {
    quizScore = prompt("Enter a quiz score between 0.0 and 100.0.");
    quizScore = +quizScore;
    integerCheck = Number.isInteger(quizScore);
    while(quizScore != -1 && quizScore !== null && (quizScore < 0 || quizScore > 100)) {
      quizScore = prompt("ENTER A QUIZ SCORE BETWEEN 0.0 AND 100.0!");
      quizScore = +quizScore;
      integerCheck = Number.isInteger(quizScore);
    }

    if(quizScore != -1) {
      quizTotal = quizTotal + quizScore;
      quizzes++;
    }
  }

  while(homeworkScore != -1) {
    homeworkScore = prompt("Enter a homework score between 0.0 and 100.0.");
    homeworkScore = +homeworkScore;
    integerCheck = Number.isInteger(homeworkScore);
    while(homeworkScore != -1 && homeworkScore !== null && (homeworkScore < 0 || homeworkScore > 100)) {
      homeworkScore = prompt("ENTER A HOMEWORK SCORE BETWEEN 0.0 AND 100.0!");
      homeworkScore = +homeworkScore;
      integerCheck = Number.isInteger(homeworkScore);
    }

    if(homeworkScore != -1) {
      homeworkTotal = homeworkTotal + homeworkScore;
      homeworks++;
    }
  }

  let testAverage = testTotal / tests;
  let quizAverage = quizTotal / quizzes;
  let homeworkAverage = homeworkTotal / homeworks;
  let grade = 0.6 * testAverage + 0.3 * quizAverage + 0.1 * homeworkAverage;
  let p = document.getElementById("report-card-output");
  p.innerHTML = "Tests: " + testAverage.toFixed(2) + "<br>" + "Quizzes: " + quizAverage.toFixed(2) + "<br>" + "Homework: " + homeworkAverage.toFixed(2) + "<br>" + "Grade: " + grade.toFixed(2);

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}

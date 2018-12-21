/*
 * SOLUTION. Mario.
 */

function mario() {                            //Defines function called "mario()"
  let height = -1;                            //Defines variable called "height" and assigns it to a value of -1

  while (height < 1 || height > 23) {         //Sets up a while loop that will start running and continue running as long as "height" is less than 1 or "height" is greater than 23
    height = Number(prompt("Height: "));      //"height" is assigned to the number value of the user input from a prompt. The prompt will be displayed as "Height: "

    if (height === null) {                    //Sets up a conditional statement. This part of the conditional statement will run if the type and value of "height" is equal to null.
      break;                                  //If the condition is satisfied, the function will exit the loop and continue down the code.
    } else if (Number.isNaN(height)) {        //If the previous condition was not satisfied and "height" is not a number, this part of the contisional statement will run.
      height = -1;                            //If the condition is satisfied, the variable "height" will be assigned a value of -1.
    } else if (!Number.isInteger(height)) {   //If the previous conditions were not satisfied and "height" is not an integer, this part of the conditional statement will run.
      height = -1;                            //If the condition is satisfied, the variable "height" will be assigned a value of -1.
    }
  }                                           //At this point, the function will go back to the start of the loop and check if the loop's conditions are met.

  if (height !== null) {                      //Sets up a conditional statement. This part of the conditional statement will run if the type and value of "height" are not equal to null.
    let output = "<code>";                    //Defines variable called "output" and assigns it a value of "<code>"
    let space = "&nbsp;";                     //Defines variable called "space" and assigns it a value of "&nbsp"
    let block = "#";                          //Defines variable called "block" and assigns it a value of "#".

    for (let row = 1; row <= height; row++) {                          //Sets up a for loop that defines a variable called "row" and assigns it a value of 1. The loop will start running and continue running as long as "row" is less than or equal to "height", and "row" will increase by one every time the loop comes back to the start before checking the condition.
      for (let i = 0; i < height - row; i++) {                         //When the loop runs, it will set up a for loop that defines a variable called "i" and assigns it a value of 0. This loop will start running and continue running as long as "i" is less than or equal to "height" - "row, and "i" will increase by one every time the loop comes back to the start before checking the condition.
        output = output + space;                                       //When the loop runs, it will assign the variable "output" to itself plus the variable "space"
      }                                                                //Here, the loop will update and return to the start, checking the condition before running again.
      for (let j = 0; j < row + 1; j++) {                              //Sets up a for loop that defines a varaible called "j" and assigns its value to 0. The loop will start running and continue running as long as "j" is less than or equal to "row" + 1, and "j" will increase by one every time the loop comes back to start before checking the condition.
        output = output + block;                                       //When the loop runs, it will assign the varaible "output" to itself plus the variable "block"
      }                                                                //Here, the loop will update and return to the start, making sure the condition is satisfied before running again.
      output = output + "<br>";                                        //The variable "output" is assigned to itself plus "<br>"
    }                                                                  //Here, the loop will update and return to the start, making sure that the condition is satisfied before running again
    output = output + "</code>";                                       //The variable "output" is assigned to itself plus "</code>"

    document.getElementById("mario-easy-output").innerHTML = output;   //The function fetches for an HTML element with an ID of "mario-easy-output" and prints the variable "output" into it
  } else {                                                             //If the condition of the first part of the if statement was not satisfied, then the "else" part of the statement runs
    document.getElementById("mario-easy-output").innerHTML = "";       //If the "else" part runs, it will fetch for an HTML element with an ID of "mario-easy-output" and print nothing into it.
  }

  check("mario", height);
}

/*
 * SOLUTION. Mario, Again.
 */

function marioAgain() {                           //Defines function called "marioAgain()"
  let height = -1;                                //Defines variable called "height" and assigns it a value of -1

  while (height < 1 || height > 23) {             //Sets up a while loop that will start running and continue running as long as "height" is less than one or greater than 23
    height = Number(prompt("Height: "));          //Assigns variable "height" the value of the user input from the prompt that says "Height: ". That user input will be converted into a number
  
    if (height === null) {                        //Sets up an if conditional statement. This prt of the conditional statement will run if the data type and value of "height" is equal to null.
      break;                                      //If the condition is true, the function will exit the while loop and continue down the code
    } else if (Number.isNaN(height)) {            //If the previous condition was not satisfied, this part of the conditional statement will run if "height" is not a number
      height = -1;                                //If the condition is true, then "height" will be assigned a value of -1
    } else if (!Number.isInteger(height)) {       //If the previous conditions were not satisfied, this part of the conditional statement will run if "height" is not an integer
      height = -1;                                //If the condition is true, then "height" will be assigned a value of -1
    }
  }                                               //Here, the loop will update, then loop back and check if its conditions are satisfied before running again

  if (height !== null) {                                                  //Sets up an if conditional statement. This part of the conditional statement will run if the data type or value is not equal to null
    let output = "<code>";                                                //Defines a variable called "output" and assigns it to the value "<code>"
    let space = "&nbsp;";                                                 //Defines a variable called "space" and assigns it to the value "&nbsp;"
    let block = "#";                                                      //Defines a variable called "block" and assigns it to the value "#"

    for (let row = 1; row <= height; row++) {                             //Sets up a for loop that defines a variable called "row" and assigns it a value of 1. This loop will start to run and continue to run as long as "row" is less than or equal to "height", and "row" will increase by one every time the loop comes back before checking the condition
      for (let i = 0; i < height - row; i++) {                            //Sets up a for loop that defines a variable called "i" and assigns it to the value 0. The loop will start to run and continue to run as long as "i" is less than "height", and "i" will increase by 1 every time the loop comes back to the start before chekcing the condition
        output = output + space;                                          //Assigns "output" to the value of itself plus "space"
      }                                                                   //Here, the loop will update, then loop back to the start and check its condition before running again
      for (let j = 0; j < row + 1; j++) {                                 //Sets up a for loop that defines a variable called "j" and assigns it to the value 0. The loop will start to run and continue to run as long as "j" is less than or equal to "row" plus 1, and "j" will increase by 1 every time the loop comes back to the start before checking its condition
        output = output + block;                                          //Assigns "output" to the value of itself plus "block"
      }                                                                   //Here, the loop will update, then loop back to the start and check its condition before running again
      output = output + space + space;                                    //Assigns "output" to itself plus "space" plus "space"

      for (let k = 0; k < row + 1; k++) {                                 //Sets up a for loop that defines a variable called "k" and assigns it to the value 0. This loop will start to run and continue to run as long "k" is less than "row" plus 1, and "k" will increase by 1 every time the loop comes back to the start before checking the condition
        output = output + block;                                          //Assigns "output" to itself plus "block"
      }                                                                   //Here, the loop will update, then loop back to the start and check its condition before running again
      output = output + "<br>";                                           //Assigns "output" to itself plus "<br>"
    }                                                                     //Here, the loop will update, then loop back to the start and check its oncditions before running again
    output = output + "</code>";                                          //Assigns "output" to itself plus "</code>"

    document.getElementById("mario-hard-output").innerHTML = output;      //Fetches an HTML element with the ID "mario-hard-output" and prints the variable "output" into the HTML element
  } else {                                                                //If the previous condition was not satisfied, this part of the conditional statement will run
    document.getElementById("mario-hard-output").innerHTML = "";          //Fetches an HTML element with the ID "mario-hard-output" and prints nothing into the HTML element
  }

  check("mario-again", height);
}

/*
 * SOLUTION. Credit.
 */

function credit() {                                   //Defines function called "credit()"
  let card = "invalid";                               //Defines variable called "card" and assigns it to the value "invalid"

  while (!Number.isInteger(card)) {                   //Sets up a while loop that starts to run and continues to run as long as "card" is not an integer
    card = Number(prompt("Card Number: "));           //Assigns "card" to the value of the user input from the prompt that says "Card number: ". The user input will be converted to a number

    if (card === null) {                              //Sets up an if statement. This part of the if statement will run if the data type and value of "card" is equal to null
      break;                                          //If the condition is true, then the function will exit the while loop and continue down the code
    }
  }                                                   //Here, the loop will loop back to the start and check its condition before running again

  let prev;                                           //Defines a variable called "prev"
  if (card !== null) {                                //Sets up an if statement. This part of the if statement will run if the data type or value of "card" is not equal to null
    let number = card;                                //Defines a varaible called "number" and assigns it to the value of the variable "card"
    let sumMultDigits = 0;                            //Defines variable called "sumMultDigits" and assigns it to the value 0
    let sumNonMultDigits = 0;                         //Defines varaible called "sumNonMultDigits" and assigns it to the value 0
    let numDigits = 0;                                //Defines variable called "numDigits" and assigns it to the value 0
    let current = -1;                                 //Defines variable called "current" and assigns it to the value -1
    let previous = -1;                                //Defines variable called "previous" and assigns it to the value -1
    let multiply = false;                             //Defines variable called "multiply" and assigns it to the value "false"

    while (number > 0) {                              //Sets up a while loop that starts to run and continues to run as long as "number" is greater than 0
      digit = number % 10;                            //
      numDigits++;

      let tmp = current;
      current = digit;
      previous = tmp;

      if (multiply) {
        var product = digit * 2;
        var sum = 0;

        while (product > 0) {
          let temp = product % 10;
          sum = sum + temp;
          product = Math.floor(product / 10);
        }

        sumMultDigits = sumMultDigits + sum;
      } else {
        sumNonMultDigits = sumNonMultDigits + digit;
      }

      multiply = !multiply;
      number = Math.floor(number / 10);
    }

    let checksum = ((sumNonMultDigits + sumMultDigits) % 10);
    if (checksum === 0) {
      if (current === 4) {
        if (numDigits === 13 || numDigits === 16) {
          prev = document.getElementById("cc");
          if (prev) {
            prev.parentNode.removeChild(prev);
          }

          let visa = document.createElement("img");
          visa.setAttribute("id", "cc");
          visa.setAttribute("src", "images/visa.png");
          visa.setAttribute("width", "25%");
          document.getElementById("credit-output").innerHTML = "";
          document.getElementById("credit-output").appendChild(visa);
        }
      } else if (current === 3 && (previous === 4 || previous === 7)) {
        if (numDigits === 15) {
          prev = document.getElementById("cc");
          if (prev) {
            prev.parentNode.removeChild(prev);
          }

          let amex = document.createElement("img");
          amex.setAttribute("id", "cc");
          amex.setAttribute("src", "images/amex.png");
          amex.setAttribute("width", "25%");
          document.getElementById("credit-output").innerHTML = "";
          document.getElementById("credit-output").appendChild(amex);
        }
      } else if (current === 5 && previous > 0 && previous < 6) {
        if (numDigits === 16) {
          prev = document.getElementById("cc");
          if (prev) {
            prev.parentNode.removeChild(prev);
          }

          var mc = document.createElement("img");
          mc.setAttribute("id", "cc");
          mc.setAttribute("src", "images/mastercard.png");
          mc.setAttribute("width", "25%");
          document.getElementById("credit-output").innerHTML = "";
          document.getElementById("credit-output").appendChild(mc);
        }
      }
    } else {
      document.getElementById("credit-output").innerHTML = "Invalid.";
    }
  } else {
    prev = document.getElementById("cc");
    if (prev) {
      prev.parentNode.removeChild(prev);
    }
    document.getElementById("credit-output").innerHTML = "";
  }

  check("credit", card);
}

/*
 * SOLUTION. Guess.
 */

function guess() {
  let target = Number((Math.random() * 1001).toFixed(0));
  let guess = -1;
  let attempts = 0;

  while (guess !== target) {
    guess = Number(prompt("Guess: "));

    if (guess === null) {
      break;
    } else if (Number.isNan(guess)) {
      guess = -1;
    } else if (!Number.isInteger(guess)) {
      guess = -1;
    }

    if (guess > 0 && guess < 1001) {
      attempts++;

      if (guess < target) {
        alert("Try something a little larger...");
      } else if (guess > target) {
        alert("Try something a little smaller...");
      }
    }
  }

  if (guess !== null) {
    document.getElementById("guess-output").innerHTML = "Random Number: " + target + "<br>Attempts: " + attempts;
  } else {
    document.getElementById("guess-output").innerHTML = "";
  }

  check("guess");
}

/*
 * SOLUTION. Hurricane.
 */

function hurricane() {
  const CAT5 = 156;
  const CAT4 = 129;
  const CAT3 = 110;
  const CAT2 = 95;
  const CAT1 = 73;
  const TROP = 38;

  let windspeed = -1;
  while (windspeed < 0) {
    windspeed = Number(prompt("Windspeed: "));

    if (windspeed === null) {
      break;
    } else if (Number.isNaN(windspeed)) {
      windspeed = -1;
    } else if (!Number.isInteger(windspeed)) {
      windspeed = -1;
    }
  }

  if (windspeed !== null) {
    if (windspeed > CAT5) {
      document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane.";
    } else if (windspeed > CAT4) {
      document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane.";
    } else if (windspeed > CAT3) {
      document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane.";
    } else if (windspeed > CAT2) {
      document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane.";
    } else if (windspeed > CAT1) {
      document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane.";
    } else if (windspeed > TROP) {
      document.getElementById("hurricane-output").innerHTML = "Tropical Storm.";
    } else {
      document.getElementById("hurricane-output").innerHTML = "The skies are calm...";
    }
  } else {
    document.getElementById("hurricane-output").innerHTML = "";
  }

  check("hurricane", windspeed);
}

/*
 * SOLUTION. Gymnastics.
 */

function gymnastics() {
  let total = 0;
  let scores = [];
  let valid = 0;
  let max = -1;
  let min = 11;
  let score = -1;

  while (valid < 6) {
    score = Number(prompt("Score: "));

    if (score === null) {
      break;
    } else if (Number.isNaN(score)) {
      score = -1;
    }

    if (score >= 0 && score <= 10) {
      valid++;
      scores.push(score);

      if (score < min) {
        min = score;
      }
      if (score > max) {
        max = score;
      }
      total = total + score;
    }
  }

  if (score !== null) {
    let sum = total;
    sum = sum - min - max;
    let average = (sum / 4.0).toFixed(2);

    let result = `Discarded: ${min}, ${max}<br>Score: ${average}`;
    document.getElementById("gymnastics-output").innerHTML = result;
  } else {
    scores = null;
    document.getElementById("gymnastics-output").innerHTML = "";
  }

  check("gymnastics", scores);
}

/*
 * SOLUTION. Report Card.
 */

function reportCard() {
  let testTotal = 0;
  let quizTotal = 0;
  let homeworkTotal = 0;
  let tests = 0;
  let quizzes = 0;
  let homeworks = 0;

  let testScore = -2;
  while (testScore !== -1) {
    testScore = Number(prompt("Test: "));

    if (testScore === null) {
      break;
    } else if (Number.isNaN(testScore)) {
      testScore = -2;
    } else if (testScore === -1) {
       break;
    } else if (testScore >= 0 && testScore <= 100) {
      tests++;
      testTotal = testTotal + testScore;
    }
  }

  let quizScore = -2;
  while (quizScore !== -1) {
    quizScore = Number(prompt("Quiz: "));

    if (quizScore === null) {
      break;
    } else if (Number.isNaN(quizScore)) {
      quizScore = -2;
    } else if (quizScore === -1) {
       break;
    } else if (quizScore >= 0 && quizScore <= 100) {
      quizzes++;
      quizTotal = quizTotal + quizScore;
    }
  }

  let homeworkScore = -2;
  while (homeworkScore !== -1) {
    homeworkScore = Number(prompt("Homework: "));

    if (homeworkScore === null) {
      break;
    } else if (Number.isNaN(homeworkScore)) {
      homeworkScore = -2;
    } else if (homeworkScore === -1) {
       break;
    } else if (homeworkScore >= 0 && homeworkScore <= 100) {
      homeworks++;
      homeworkTotal = homeworkTotal + homeworkScore;
    }
  }

  let testAverage = null;
  let quizAverage = null;
  let homeworkAverage = null;
  let average = null;

  if (testScore === null || quizScore === null || homeworkScore === null) {
    document.getElementById("report-card-output").innerHTML = "";
  } else {
    testAverage = (testTotal / tests).toFixed(2);
    quizAverage = (quizTotal / quizzes).toFixed(2);
    homeworkAverage = (homeworkTotal / homeworks).toFixed(2);
    average = (testAverage * 0.6 + quizAverage * 0.3 + homeworkAverage * 0.1).toFixed(2);

    let result = `Tests: ${testAverage}<br>Quizzes: ${quizAverage}<br>Homework: ${homeworkAverage}<br>Grade: ${average}`;
    document.getElementById("report-card-output").innerHTML = result;
  }

  check("report-card", testTotal, tests, quizTotal, quizzes, homeworkTotal, homeworks);
}

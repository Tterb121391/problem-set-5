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
      digit = number % 10;                            //Assigns "digit" to the remainder of the variable "number" divided by 10
      numDigits++;                                    //The variable "numDigits" increases by 1

      let tmp = current;                              //Defines variable called "tmp" and assigns it to the variable "current"
      current = digit;                                //Assigns "current" to the value of "digit"
      previous = tmp;                                 //Assigns "previous" to the variable "tmp"

      if (multiply) {                                 //Sets up an if statement. This part of the if statement will run if "multiply" is true
        var product = digit * 2;                      //Defines global variable called "product" and assigns it to the value of "digit" times 2
        var sum = 0;                                  //Defines global variable called "sum" and assgins it to the value 0

        while (product > 0) {                        //Sets up a while loop that starts to run and continues to run as long as the variable "product" is greater than 0
          let temp = product % 10;                   //Defines variable called "temp" and assigns it to the remainder of the variable "product" divided by 10
          sum = sum + temp;                          //Assigns "sum" to the value of itself plus "temp"
          product = Math.floor(product / 10);        //Assigns "product" to the value of itself divided by 10, rounded down to the nearest integer
        }                                            //Here, the loop will loop back to the start and check its condition before running again

        sumMultDigits = sumMultDigits + sum;         //Assigns "sumMultDigits" to the value of itself plus the variable "sum"
      } else {                                       //This part of the if statement will run if the previous condition was not satisfied
        sumNonMultDigits = sumNonMultDigits + digit; //Assigns "sumNonMultDigits" to the value of itself plus "digit"
      }

      multiply = !multiply;                          //Assigns "multiply" to its boolean opposite
      number = Math.floor(number / 10);              //Assigns "number" to the value of itself divided by 10, rounded down to the nearest integer
    }                                                //Here, the loop will loop back to the start and check its condition before running again

    let checksum = ((sumNonMultDigits + sumMultDigits) % 10);               //Defines variable called "checkSum" and assigns it to the remainder of the quantity of the sum of the variables "sumNonMultDigits" and "sumMultDigits"
    if (checksum === 0) {                                                   //Sets up an if statement. This part of the if statement will run if the data type and value of "checkSUm" is equal to 0
      if (current === 4) {                                                  //Sets up an if statement. This part of the if statement will run if the data type and value of "current" is equal to 4
        if (numDigits === 13 || numDigits === 16) {                         //Sets up an if statement. This part of the if statement will run if the data type and value of "sumDigits" is equal to 13 or 16
          prev = document.getElementById("cc");                             //If the condition is true, then the variable "prev" is assigned to the HTML element with the ID of "cc"
          if (prev) {                                                       //Sets up if statement. This part of the if statement will run if prev is truthy
            prev.parentNode.removeChild(prev);                              //If the condition is true, then the specified HTML element will be removed
          }

          let visa = document.createElement("img");                         //Defines variable called "visa" and assigns it to a created <img> HTML element
          visa.setAttribute("id", "cc");                                    //THe variable "visa" is given an ID of "cc"
          visa.setAttribute("src", "images/visa.png");                      //The variable "visa" is given an src of "images/visa.png"
          visa.setAttribute("width", "25%");                                //The variable "visa" is given a width of 25%
          document.getElementById("credit-output").innerHTML = "";          //The function fetches for an HTML element with the ID "credit-output" and prints nothing into it
          document.getElementById("credit-output").appendChild(visa);       //The function fetches for an HTML element with the ID "credit-output" and adds the variable "visa" into it
        }
      } else if (current === 3 && (previous === 4 || previous === 7)) {     //If the previous condition was false, then this part of the if statement will run if the data type and value of "current" are equal to 3 and the data type and value of "previous" are equal to 4 or 7
        if (numDigits === 15) {                                             //Sets up an if statement. This part of the if statement will run if the data type and value of "numDigits" are equal to 15
          prev = document.getElementById("cc");                             //If the condition is true, then the variable "prev" is assigned to the HTML element with the ID of "cc"
          if (prev) {                                                       //Sets up an if statement. This part of the if statement will run if "prev" is truthy
            prev.parentNode.removeChild(prev);                              //If the condition is true, then the specified HTML element will be removed
          }

          let amex = document.createElement("img");                         //Defines variable called "amex" and assigns it to the created <img> HTML element
          amex.setAttribute("id", "cc");                                    //The variable "amex" is given an ID of "cc"
          amex.setAttribute("src", "images/amex.png");                      //The variable "amex" is given an src of "images/amex.png"
          amex.setAttribute("width", "25%");                                //The variable "amex" is given a width of 25%
          document.getElementById("credit-output").innerHTML = "";          //The function fetches for an HTML element with the ID "credit-output" and prints nothing into it
          document.getElementById("credit-output").appendChild(amex);       //The function fetches for an HTML element with the ID "credit-output" and adds the variable "amex" into it
        }
      } else if (current === 5 && previous > 0 && previous < 6) {           //If the previous conditions were false, then this part of the if statement will run if the data type and value of "current" is equal to 5 and "previous" is between 0 and 6, exclusively
        if (numDigits === 16) {                                             //Sets up an if statement. This part of the if statement will run if the data type and value of "numDigits" are equal to 16
          prev = document.getElementById("cc");                             //If the condition is true, then the variable "prev" is assigned to the HTML element with the ID "cc"
          if (prev) {                                                       //Sets up an if statement. This part of the if statement will run if "prev" is truthy
            prev.parentNode.removeChild(prev);                              //If the conditon is true, then the specified HTML element is removed
          }

          var mc = document.createElement("img");                           //Defines global variable called "mc" and assigns it to the created <img> HTML element
          mc.setAttribute("id", "cc");                                      //The variable "mc" is given an ID of "cc"
          mc.setAttribute("src", "images/mastercard.png");                  //The variable "mc" is given an src of "images/mastercard.png"
          mc.setAttribute("width", "25%");                                  //The variable "mc: is given a width of 25%
          document.getElementById("credit-output").innerHTML = "";          //The function fetches for an HTML element with the ID "credit-output" and prints nothing into it
          document.getElementById("credit-output").appendChild(mc);         //The function fetches for an HTML element with the ID "credit-output" and adds the variable "mc" into it
        }
      }
    } else {                                                                //If the previous conditions were false, then this part of the if statement will run
      document.getElementById("credit-output").innerHTML = "Invalid.";      //The function fetches for an HTML element with the ID "credit-output" and prints "Invalid." into it
    }
  } else {                                                                  //If the previous condition was false, then this part of the if statement will run
    prev = document.getElementById("cc");                                   //The variable "prev" is assigned to the HTML element with the ID of "cc"
    if (prev) {                                                             //Sets up an if statement. This part of the if statement will run if "prev" is truthy
      prev.parentNode.removeChild(prev);                                    //If the condition is true, then the specified HTML element is removed
    }
    document.getElementById("credit-output").innerHTML = "";                //The function fetches for an HTML element with the ID "credit-output" and prints nothing into it
  }

  check("credit", card);
}

/*
 * SOLUTION. Guess.
 */

function guess() {                                            //Defines function called "guess()"
  let target = Number((Math.random() * 1001).toFixed(0));     //Defines variable called "target" and assigns it to a ramdomly generated integer between 1 and 1000 inclusively
  let guess = -1;                                             //Defines variable called "guess" and assigns it to the value -1
  let attempts = 0;                                           //Defines variable called "attempts" and assigns it to the value 0

  while (guess !== target) {                                  //Sets up while loop that starts running and continues to run as long as the data type or value of "guess" is not equal to "target"
    guess = Number(prompt("Guess: "));                        //Assigns the varaible "guess" to the value of the user input from the prompt that says "Guess: ". The user input is converted into a number

    if (guess === null) {                                     //Sets up if statement. This part of the if statement runs if the dta type and value of "guess" is equal to null
      break;                                                  //If the condition is true, the function will exit the while loop and continue down the code
    } else if (Number.isNan(guess)) {                         //If the previous condition was false, then this part of the if statement will run if "guess" is not a number
      guess = -1;                                             //If the condition is true, then "guess" is assigned the value -1
    } else if (!Number.isInteger(guess)) {                    //If the previous conditions were not true, then this part of the if statement will run if "guess" is not an integer
      guess = -1;                                             //If the condition is true, then "guess" is assigned the value -1
    }

    if (guess > 0 && guess < 1001) {                          //Sets up if statement. This part of the if statement will run if "guess" is between 0 and 1001, exclusively
      attempts++;                                             //If the condition is true, then "attempts" will increase by 1

      if (guess < target) {                                   //Sets up if statement. This part of the if statement will run if "guess" is below "target"
        alert("Try something a little larger...");            //If the condition is true, then an alert will show that says "Try something a little larger..."
      } else if (guess > target) {                            //If the previous condition was not true, then this part of the if statement will tun if "guess" is greater than "target"
        alert("Try something a little smaller...");           //If the condition is true, then an alert will show that says "Try something a little smaller..."
      }
    }
  }                                                           //Here, the while loop loops back to the start and checks its condition before running again

  if (guess !== null) {                                                                                               //Sets up an if statement. This part of the if statement will run if the data type or value of "guess" is not equal to null
    document.getElementById("guess-output").innerHTML = "Random Number: " + target + "<br>Attempts: " + attempts;     //If the condition is true, the function will search for an HTML element with the ID "guess-output" and print "Random Number: " + target + "<br>Attempts: " + attempts into the HTML element
  } else {                                                                                                            //If the previous condition was false, then this part of the if statement will run
    document.getElementById("guess-output").innerHTML = "";                                                           //The function will search for an HTML element with the ID "guess-output" and print nothing into the HTML element
  }

  check("guess");
}

/*
 * SOLUTION. Hurricane.
 */

function hurricane() {                                //Defines function called "hurricane()"
  const CAT5 = 156;                                   //Defines constant called "CAT5" and assigns it to the value 156
  const CAT4 = 129;                                   //Defines constant called "CAT4" and assigns it to the value 129
  const CAT3 = 110;                                   //Defines constant called "CAT3" and assigns it to the value 110
  const CAT2 = 95;                                    //Defines constant called "CAT2" and assigns it to the value 95
  const CAT1 = 73;                                    //Defines constant called "CAT1" and assigns it to the value 73 
  const TROP = 38;                                    //Defines constant called "TROP" and assgins it to the value 38

  let windspeed = -1;                                 //Defines varaible called "windspeed" and assigns it to the value -1
  while (windspeed < 0) {                             //Sets up a while loop that will start running and contninue to run as long as "windspeed" is less than 0
    windspeed = Number(prompt("Windspeed: "));        //Assigns "windspeed" to the value of the user input from the prompt that says "Windspeed: ". The user input is converted into a number

    if (windspeed === null) {                         //Sets up if statement. THis part of the if statement will run if the data type and value of "windspeed" are equal to null
      break;                                          //If the condition is true, then the function will exit the while loop and continue down the code
    } else if (Number.isNaN(windspeed)) {             //If the previous condition was not true, then this part of the if statement will run if "windspeed" is not a number
      windspeed = -1;                                 //If the condition is true, then "windspeed" is assigned to the value -1
    } else if (!Number.isInteger(windspeed)) {        //If the previous conditions were not true, then this part of the if statement will run if "windspeed" is not an integer
      windspeed = -1;                                 //If the condition is true, then "windspeed" is assigned to the value -1
    }
  }                                                   //Here, the while loop loops back to the start and checks it condition before running again

  if (windspeed !== null) {                                                             //Sets up if statement. This part of the if statement will run if the data type or value of "windspeed" does not equal null
    if (windspeed > CAT5) {                                                             //Sets up if statement. This part of the if statement will run if "windspeed" is greater than "CAT5"
      document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane.";  //If the condition is true, then the function fetches for an HTML element with the ID "hurricane-output" and prints "Category 5 Hurricane." into it
    } else if (windspeed > CAT4) {                                                      //If the previous condition was false, then this part of the if statement will run if "windspeed" is greater than "CAT4"
      document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane.";  //If the condition is true, then the function fetches for an HTML element with the ID "hurricane-output" and prints "Category 4 Hurricane." into it
    } else if (windspeed > CAT3) {                                                      //If the previous conditions were false, then this part of the if Statement will run if "windspeed" is greater than "CAT3"
      document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane.";  //If the condition is true, then the function fetches for an HTML element with the ID "hurricane-output" and prints "Category 3 Hurricane." into it
    } else if (windspeed > CAT2) {                                                      //If the previous conditions were false, then this part of the if statement will run if "windspeed" is greater than "CAT2"
      document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane.";  //If the condition is true, then the function fetches for an HTML element with the ID "hurricane-output" and prints "Category 2 Hurricane." into it
    } else if (windspeed > CAT1) {                                                      //If the previous conditions were false, then this part of the if statement will run if "windspeed" is greater than "CAT1"
      document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane.";  //If the condition is true, then the function fetches for an HTML element with the ID "hurricane-output" and prints "Category 1 Hurricane." into it
    } else if (windspeed > TROP) {                                                      //If the preious conditions were false, then this part of the if statement will run if "windspeed" is greater than "TROP"
      document.getElementById("hurricane-output").innerHTML = "Tropical Storm.";        //If the condition is true, then the function fetches for an HTML element will the ID "hurricane-output" and prints "Tropical Storm." into it
    } else {                                                                            //If the previous conditions were false, then this part of the if statement runs
      document.getElementById("hurricane-output").innerHTML = "The skies are calm...";  //The function fetches for an HTML element with the ID "hurrican-output" and prints "The skies are calm..." into it
    }
  } else {                                                                              //If the previous condition was false, then this part of the is statement runs
    document.getElementById("hurricane-output").innerHTML = "";                         //The function fetches for an HTML element with the ID "hurricane-output" and prints nothing into it
  }

  check("hurricane", windspeed);
}

/*
 * SOLUTION. Gymnastics.
 */

function gymnastics() {                     //Defines function called "gymnastics()"
  let total = 0;                            //Defines variable called "total" and assigns it to the value 0
  let scores = [];                          //Defines list called "scores" and assigns it to the value of nothing
  let valid = 0;                            //Defines variable called "valid" and assigns it to the value 0
  let max = -1;                             //Defines variable called "max" and assigns it to the value -1
  let min = 11;                             //Defines variable called "min" and assigns it to the value 11
  let score = -1;                           //Defines variable called "score" and assigns it to the value -1

  while (valid < 6) {                       //Sets up a while loop that starts running and continues to run as long as "valid" is less than 6
    score = Number(prompt("Score: "));      //Assigns "score" to the value of the user input from the prompt that says "Score: ". The user input is converted into a number

    if (score === null) {                   //Sets up if statement. This part of the is statement will run if the data type and value of "score" are equal to null
      break;                                //If the condition is true, then the function exits the while loop and continues down the code
    } else if (Number.isNaN(score)) {       //If the previous condition was false, then this part of the if statement will run if "score" is not a number
      score = -1;                           //If the condition is true, then "score" is assigned to the value -1
    }

    if (score >= 0 && score <= 10) {        //Sets up if statement. THis part of the if statement will run if "score" is between 0 and 10, inclusively
      valid++;                              //If the conditions are true, then "valid" will increase by 1
      scores.push(score);                   //The variable "score" will be added to the end of the list "scores"

      if (score < min) {                    //Sets up if statement. This part of the if statement will run if "score" is less than "min"
        min = score;                        //If the condition is true, then "min" is assigned to the value of "score"
      }
      if (score > max) {                    //Sets up if statement. This part of the is statement will run if "score is greater than "max"
        max = score;                        //If the condition is true, then "max" is assigned to the value of "score"
      }
      total = total + score;                //The variable "total" is assigned to itslef plus the variable "score"
    }
  }                                         //Here, the while loop loops back to the start and checks its condition before running again

  if (score !== null) {                                                 //Sets up if statement. This part of the is statement will run if the data type of value of "score" is not equal to null
    let sum = total;                                                    //If the condition is true, then the function defines a variable called "sum" and assigns it to the value of "total"
    sum = sum - min - max;                                              //The variable "sum" is assigned to the value of "sum" - "min" - "max"
    let average = (sum / 4.0).toFixed(2);                               //Defines variable called "average" and assigns it to the value of "sum" divided by 4.0, rounded to two deciaml places

    let result = `Discarded: ${min}, ${max}<br>Score: ${average}`;      //Defines variable called "result" and assigns it to the value `Discarded: ${min}, ${max}<br>Score: ${average}`
    document.getElementById("gymnastics-output").innerHTML = result;    //The function fetches for an HTML element with the ID "gymnastics-output" and prints the variable "result" into it
  } else {                                                              //If the previous condition was false, then this part of the if statement runs
    scores = null;                                                      //The list "scores" is assigned to the value null
    document.getElementById("gymnastics-output").innerHTML = "";        //The function fetches for an HTML element with the ID "gymnastics-output" and prints nothing into it
  }

  check("gymnastics", scores);
}

/*
 * SOLUTION. Report Card.
 */

function reportCard() {       //Defines function called "reportCard()"
  let testTotal = 0;          //Defines variable called "testTotal" and assigns it to the value 0
  let quizTotal = 0;          //Defines variable called "quizTotal" and assigns it to the value 0
  let homeworkTotal = 0;      //Defines variable called "homeworkTotal" and assigns it to the value 0
  let tests = 0;              //Defines variable called "tests" and assigns it to the value 0
  let quizzes = 0;            //Defines vaariable called "quizzes" and assigns it to the value 0
  let homeworks = 0;          //Defines variable called "homeworks" and assigns it ot the value 0

  let testScore = -2;                                     //Defines variable called "testScore" and assigns it to the value -2
  while (testScore !== -1) {                              //Sets up a while loop that starts running and continues to run as long as the data ype or value of "testScore" is not equal to -1
    testScore = Number(prompt("Test: "));                 //The variable "testScore" is assigned to the value of the user input from the prompt that says "Test: ". The user input is converted into a number

    if (testScore === null) {                             //Sets up if statement. THis part of the if statement will run if the data type and value of "testScore" is equal to null
      break;                                              //If the condition is true, then the function will exit the while loop and continue down the code
    } else if (Number.isNaN(testScore)) {                 //If the previous condition was false, then this part of the if statement will run if "testScore" is not a number
      testScore = -2;                                     //If the condition is true, then "testScore" is assigned a value of -2
    } else if (testScore === -1) {                        //If the previous conditions were false, then this part of the if statement will run if the data type and value of "testScore" are equal to -1
       break;                                             //If the condition is true, then the function eill exit the while loop and continue down the code
    } else if (testScore >= 0 && testScore <= 100) {      //If the previous conditions were false, then this part of the if statement will run if "testScore" is between 0 and 100, inclusively
      tests++;                                            //If the condition is true, then "tests" will increase by 1
      testTotal = testTotal + testScore;                  //The variable "testTotal" is assigned to itself plus "testScore"
    }
  }                                                       //Here, the while loop loops back to the start and checks its condition before running again

  let quizScore = -2;                                     //Defines variable called "quizScore" and assigns it to the value -2
  while (quizScore !== -1) {                              //Sets up a while loop that starts running and continues to run as long as the data type or value of "quizScore" is not equal to -1
    quizScore = Number(prompt("Quiz: "));                 //The variable "quizScore" is assigned to the value of the user input from the prompt that says "Quiz: ". THe user input is converted into a number

    if (quizScore === null) {                             //Sets up if statement. This part of the if statement will run if the data type and value of "quizScore" are equal to null
      break;                                              //If the condition is true, then the function will exit the while loop and continue down the code
    } else if (Number.isNaN(quizScore)) {                 //If the previous condition was false, then this part of the if statement will run if "quizScore" is not a number
      quizScore = -2;                                     //If the condition is true, then "quizScore" is assigned to the value -2
    } else if (quizScore === -1) {                        //If the previous conditions were false, then this part of the if statement will run if the data type and value of "quizScore" are equal to -1
       break;                                             //If the condition is ture, then the function will exit the while loop and continue down the code
    } else if (quizScore >= 0 && quizScore <= 100) {      //If the previous conditions were false, then this part of the if statement will run if "quizScore" is between 0 and 100, inclusively
      quizzes++;                                          //If the condition is true, then "quizzes" will increase by 1
      quizTotal = quizTotal + quizScore;                  //The variable "quizTotal" is assigned to the value of itself plus "quizScore"
    }
  }                                                       //Here, the while loop loops back to the start and checks its condition before running again

  let homeworkScore = -2;                                 //Defines variable called "homeworkScore" and assigns it to the value -2
  while (homeworkScore !== -1) {                          //Sets up a while loop that starts running and continues to run as long as the data type or value of "homeworkScore" is not equal to -1
    homeworkScore = Number(prompt("Homework: "));         //The variable "homeworkScore" is assigned to the value of the user input from the prompt that says "Homework: ". The user input is converted into a number

    if (homeworkScore === null) {                               //Sets up is statement. This part of the if statement will run if the data type and value of "homeworkScore" are equal to null
      break;                                                    //If the condition is true, then the function will exit the while loop and continue down the code
    } else if (Number.isNaN(homeworkScore)) {                   //If the previous condition was false, then this part of the if statement will run if "homeworkScore" is not a number
      homeworkScore = -2;                                       //If the condition is true, then "homeworkScore" is assgined to the value -2
    } else if (homeworkScore === -1) {                          //If the previous conditions were false, then this part of the if statement will run if the data type and value of "homeworkScore" are equal to -1
       break;                                                   //If the condition is true, then the function will exit the while loop and continue down the code
    } else if (homeworkScore >= 0 && homeworkScore <= 100) {    //If the previous conditions were false, then this part of the if statement will run if "homeworkScore" is between 0 and 100, inclusively
      homeworks++;                                              //If the condition is true, then "homeworks" increases by 1
      homeworkTotal = homeworkTotal + homeworkScore;            //The variable "homeworksTotal" is equa lto itself plus "homeworkScore"
    }
  }                                                             //Here, the while loop loops back to the start and check its condition before running again

  let testAverage = null;         //Defines variable called "testAverage" and assigns it to the value null
  let quizAverage = null;         //Defines variable called "quizAverage" and assigns it to the value null
  let homeworkAverage = null;     //Defines variable called homeworkAverage" and assigns it to the value null
  let average = null;             //Defines variable called "average: and assigns it othe value null

  if (testScore === null || quizScore === null || homeworkScore === null) {                                                     //Sets up if statement. This part of the if statement will run if the data tpe and value of "testScore", "quizScore", or "homeworkScore" are equal to null
    document.getElementById("report-card-output").innerHTML = "";                                                               //If the condition is true, then the function fetches an HTML element with the ID "report-card-output" and print nothing into it
  } else {                                                                                                                      //If the previous condition was false, then this part of the if statement runs
    testAverage = (testTotal / tests).toFixed(2);                                                                               //The variable "testAverage" is assigned to "testTotal" divided by "tests", rounded to two decimal places
    quizAverage = (quizTotal / quizzes).toFixed(2);                                                                             //The variable "quizAverage" is assigned to "quizTotal" divided by "quizzes", rounded to two decimal places
    homeworkAverage = (homeworkTotal / homeworks).toFixed(2);                                                                   //The variable "homeworkAverage" is assigned to "homeworkTotal" divided by "homeworks", rounded to two decimal places
    average = (testAverage * 0.6 + quizAverage * 0.3 + homeworkAverage * 0.1).toFixed(2);                                       //The variable "average" is equal to the value of "testAverage" times 0.6 plus "quizAverage" times 0.3 plus "homeworkAverage" times 0.1, rounded to two decimal places

    let result = `Tests: ${testAverage}<br>Quizzes: ${quizAverage}<br>Homework: ${homeworkAverage}<br>Grade: ${average}`;       //The variable result is assigned to the value `Tests: ${testAverage}<br>Quizzes: ${quizAverage}<br>Homework: ${homeworkAverage}<br>Grade: ${average}`
    document.getElementById("report-card-output").innerHTML = result;                                                           //THe function fetches for an HTML element with the ID "report-card-output" and prints the variable "result" into it
  }

  check("report-card", testTotal, tests, quizTotal, quizzes, homeworkTotal, homeworks);
}

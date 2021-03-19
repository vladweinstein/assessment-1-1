/**
 * Assessment 1.1
 *
 * Please read each question carefully and answer with the according type specified. This assessment is WITHOUT
 * notes or Google. You will be screensharing while attempting this assessment, so please make sure to be sharing your
 * entire desktop when attempting it.
 *
 * Best of luck, and ask any of the professors for help if needed!
 *
 * Time allotment: 1 hour
 *
 **/

/*****************************************/

/**
 * QUESTION #1 -
 * What is the difference between a method and a function?
 *
 * Answer Type: String (Add Answer Between Quotes)
 */
"A method is a set of instructions associated with an object. A function is a recyclable set of instructions involving variables and data.";

/**
 * QUESTION #2 -
 * What is wrong with the following for loop?
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

let timesToLoop = 15;
for (let i = 0; (i = timesToLoop); i++) {
  console.log("I am looping!");
}

("The second argument in the for loop should be ' i < timesToLoop' for the function to successfully loop.");

/**
 * QUESTION #3 -
 * Which type of conditional do you use when you want to assign a value to a variable based on a two-path conditional?
 * (Two path conditional means that there's only true or false, and no additional routes the conditional can take.)
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

("The conditional you would use is a Ternary, as it would resolve to a simple true or false. This is because an if, else or else if would otherwise allow for endless routes to be taken.");

/**
 * QUESTION #4 -
 * What are some of the main reasons to use a function?
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

("Functions are recyclable and therefore can be invoked multiple times throughout a program for a variety of results. The results depend on the parameters with which the function is called.");

/**
 * QUESTION #5 -
 * Which of the following answers allows JavaScript to programmatically generate a new HTML element?
 *
 * A) dom.createElement('div');
 * B) document.element('div');
 * C) document.createElement('div');
 * D) document.cloneElement('div');
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

("C");

/**
 * QUESTION #6 -
 * What does the word DOM mean in JS?
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

("Document Object Model");

/**
 * QUESTION #7 -
 * What is the output of the function?
 *
 * Answer Type: String (Add Answer Between Quotes, Whitespace Ignored)
 */

function testQuestionSeven() {
  let statement = "Assessments are fun, right?!";

  if (statement === true) {
    console.log("Yes!");
  } else {
    console.log("No!");
  }
}

("In this example, the statement variable is set equal to a string and therefore cannot equal true/false as these are different data types. The output would be 'No!' .");

/**
 * QUESTION #8 -
 * What do the following things have in common? 1.14, 10, 10009, 10.19919292
 *
 * Answer Type: String (Add Answer Between Quotes)
 * Hint: Think of their general TYPE....
 */

("They are all the type 'Number' ");

/**
 * QUESTION #9 -
 * What is the purpose of an IIFE? (Immediately Invoked Function Expressions)
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

("The purpose of an IIFE is to close off the global name space of the file you're working in, preventing outside files/code from accessing or overwriting variables in your current js file.");

/**
 * QUESTION #10 -
 * What is the output of the following conditional?
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

let value = "CODEM-9";
switch (value) {
  case "CODEM7":
    console.log("The answer is cupcakes!");
  case "CODEM8":
    console.log("The answer is pancakes!");
  case "CODEM9":
    console.log("The answer is french fries!");
  default:
    console.log("We are out of food...");
}

(" 'We are out of food...' ");

/**
 * QUESTION #11 -
 * Write a function that takes a height, and a width, and creates that amount of squares in a grid.
 *
 * Answer Type: Function
 */

let gridConfig = {
  width: 10,
  height: 10,
};

let grid = document.querySelector(".grid-container");

function makeGrid(width, height) {
  for (let i = 0; i < height; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    for (let j = 0; j < width; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
}

makeGrid(gridConfig.width, gridConfig.height);

/**
 * QUESTION #12 -
 * What is the difference between a global and a local variable?
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

("A global variable executes at the top of a program and ceases to exist when the program runs its very last line of code. Due to their global nature, they can be used in functions alongside local variables.")
("A local variable is declared within a function and is only avaible to that block of code/function. It ceases to exist once that specific function runs its last line of code.")

/**
 * QUESTION #13 - (EXTRA CREDIT!)
 * What is the default method of a fetch request?
 *
 * A) GET
 * B) POST
 * C) PATCH
 * D) DELETE
 *
 * Answer Type: String (Add Answer Between Quotes)
 */

(" The default method of a feth request is: A) GET .")

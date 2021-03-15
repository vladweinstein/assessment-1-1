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

"A method is a line of code that will always execute a specific action without argument, like creating a new html element from within js. A function primarely relies on arguments to choose whether or not to execute a line of code."

/**
 * QUESTION #2 -
 * What is wrong with the following for loop?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let timesToLoop = 15;
for (let i = 0; i = timesToLoop; i++) {
    console.log('I am looping!');
}

"The second argument in the for loop should be ' i < timesToLoop' for the function to successfully loop."

/**
 * QUESTION #3 -
 * Which type of conditional do you use when you want to assign a value to a variable based on a two-path conditional?
 * (Two path conditional means that there's only true or false, and no additional routes the conditional can take.)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"const"

/**
 * QUESTION #4 -
 * What are some of the main reasons to use a function? 
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"The main reasons to use a function are to see if variable(s) against certain arguments execute as truthy or falsy. Functions can trigger alternating event listeners based on different sets of arguments and the route the function ends up running."

"Can we do a segment on technical writing? I apoligize in advance."

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

"C"

/**
 * QUESTION #6 -
 * What does the word DOM mean in JS?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"Document Object Model"

/**
 * QUESTION #7 -
 * What is the output of the function?
 * 
 * Answer Type: String (Add Answer Between Quotes, Whitespace Ignored)
 */

function testQuestionSeven() {
    let statement = "Assessments are fun, right?!";

    if (statement === true) {
        console.log('Yes!');
    } else {
        console.log('No!');
    }
}

" 'Yes!' "

/**
 * QUESTION #8 -
 * What do the following things have in common? 1.14, 10, 10009, 10.19919292
 * 
 * Answer Type: String (Add Answer Between Quotes)
 * Hint: Think of their general TYPE....
 */

"They are all the type 'Number' "

/**
 * QUESTION #9 -
 * What is the purpose of an IIFE? (Immediately Invoked Function Expressions)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"An IIFE allows for declared variables at the top of a js file to be used in global scope for the rest the js file, throughout any function."

/**
 * QUESTION #10 -
 * What is the output of the following conditional?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let value = 'CODEM-9';
switch (value) {
    case "CODEM7":
        console.log('The answer is cupcakes!');
    case "CODEM8":
        console.log('The answer is pancakes!');
    case "CODEM9":
        console.log('The answer is french fries!');
    default:
        console.log('We are out of food...');
};

" 'We are out of food...' "

/**
 * QUESTION #11 -
 * Write a function that takes a height, and a width, and creates that amount of squares in a grid. 
 * 
 * Answer Type: Function
 */

function createGrid(width, height) {
    

}

"Brain fart - also made my PAM linking to html inputWidth/Height instead of div's/squares.. will have to study up this one. Sorry!"

/**
 * QUESTION #12 -
 * What is the difference between a global and a local variable?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A global variable can be part of any line of code within the js file. A local variable is only avaiable to the function they live within."

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

"C"
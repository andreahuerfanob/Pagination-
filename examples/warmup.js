/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * List Section Selection - JS
 * 
/* Variables to store buttons */
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
/* Variable to store NodeList of DOM elements */
const listItems = document.querySelectorAll(".item");
// Helpful log statement
console.log(listItems);
/* Variable to store the number of items to show at any given time */
const perPage = 2;
// 1. Create a function called sectionSelection - Give it two parameters: list, section
const sectionSelection = (list, section) => {
  // Inside the function body, do the following tasks
  // 1a. Uncomment the following two variables and place them inside the function body.
  const startIndex = section * perPage - perPage;
  const endIndex = section * perPage - 1;
};
// 1b. Loop over the list parameter and set the style.color of each list item to 'whitesmoke'

// 1c. Loop over the list parameter again
// Add a conditional inside the loop
// If the current loop index is >= the `startIndex` variable && the current loop index <= the `endIndex` variable
// Set the style.color of the the list item to 'green', or your favorite color

// 2. Invoke the sectionSelection function in the event listeners below
// Be sure to pass in arguments: the `listItems` variable and the targeted section - 1, 2, or 3

/**
 * Event listeners for buttons - Invoke your functions in the body of the callbacks in the event listeners below
 */

/* btn1 listener */
btn1.addEventListener("click", () => {
  // Invoke your sectionSelection function here - Arguments: listItems, 1

  // Helpful log statement to test function
  console.log("First button is functional!");
});

/* btn2 listener */
btn2.addEventListener("click", () => {
  // Invoke your sectionSelection function here - Arguments: listItems, 2

  // Helpful log statement to test function
  console.log("Second button is functional!");
});

/* btn3 listener */
btn3.addEventListener("click", () => {
  // Invoke your sectionSelection function here - Arguments: listItems, 3

  // Helpful log statement to test function
  console.log("Third button is functional!");
});

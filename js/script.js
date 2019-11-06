/***
FSJS project 2 - List Filter and Pagination
***/
/*** 
   Add global variables that store the DOM elements needed to reference and/or manipulate. 
***/

// Variable to store nodeList of DOM elements:
const studentList = document.querySelector(".student-list");
// Helpful log statement:
const studentItem = studentList.children;
// Variable to store the number of items to show at any given time
const perPage = 10;
/*** 
   `showPage` function: hide all of the items in the list except for the ten you want to show. 
  list of 54 students, last page = only displays four.
     - 1st student = index of 0.
***/
const showPage = (list, page) => {
      const startIndex = (page * perPage) - perPage;
      const endIndex = page * perPage;}
  // loop over list
  // if index >= 1st index = show
  // AND if index <= last index show
  for (let i = 0; i < list.length; i++) {
    if (i >= PerPage) {
      list[i].style.display = "none";
    }
  }
};
showPage();

/***- function `parameter` goes in the parens when you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Remember to delete the comments that came with this file, and replace them with your own code comments.

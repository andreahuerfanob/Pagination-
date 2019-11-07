/***
FSJS project 2 - List Filter and Pagination
***/
/*** 
   Add global variables that store the DOM elements needed to reference and/or manipulate. 
***/
// Variable to store nodeList of DOM elements:
const studentList = document.querySelector(".student-list");
const items = document.querySelectorAll('.student-item');
// Variable to store the number of items to show at any given time
const perPage = 10;
// var to start page number with:
const startPageNumber = 1;
/*** 
   `showPage` function: hide all items in list except for 10 to show. 
     - 1st student = index of 0.
***/
const showPage = (list, page) => {
  // variables to retrieve the index for 1st & last student on a particular page.
  const startIndex = page * perPage - perPage;
  const endIndex = page * perPage;
  // loop over list
  // if index >= 1st index = show
  // AND if index <= last index show
  // = show students based on page # selected.
  for (let i = 0; i < list.length; i++) {
    if (i >= firstIndex && i < lastIndex) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
/*** 
   Create `appendPageLinks function`: generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = // //single list parameter to represent the actual list of students:
(list) => {
  showPage(items, 1); // showPage function 
  const totalPages = Math.ceil(list.length / perPage);  // round up and store in totalPages

// elements for pagination
const div = document.createElement('div');
div.className = 'pagination';
const pageDiv = document.querySelector('.page');
pageDiv.appendChild(div);
const ulLinks = document.createElement('ul');
   div.appendChild(ulLinks);
  
/// here starts the shitshow: 
   for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    ulPagLinks.appendChild(li);
    const a = document.createElement('a');
    li.appendChild(a);
    a.textContent = i;
    a.href = '#';
    const firstA = document.querySelector('a');
    firstA.className = 'active';
    const aList = document.querySelectorAll('a');
    //Adding an event listener to each link
    for (let j = 1; j <= aList.length; j++) {
       a.addEventListener('click', (event) => {
          showPage(studentList, j);
          for (let k = 0; k < aList.length; k++) {
             aList[k].className = '';
          }
          event.target.className = 'active';
    });
    }
 }
}
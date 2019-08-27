// Stuff that needs to be done: 
// - add a bookmark
      //C need to confirm added to server
      //C cancel button
      //C need to add to local store
// - see a list of bookmarks at page open
      //C desendents successfully showing
      //C connect to API and 'get' (i think this is correct - review slides again)
// - remove bookmarks from list
      //- use 'delete' fetch method
// - receive feedback when can't submit a bookmark
      //- doesn't let you submit if not a url, title
      //- prevent submit if rating isn't complete (find a way to make that part "required")
// - minimum rating filter
// - ONLY IF TIME: edit rating and description of bookmark in list
// - ONLY IF TIME: all the other features on the prev. thing 
// - Use store.adding to toggle the hide page. 
// - find and fix all pbtags

//used to start the page and call other pages

// global strftime, cuid, bookmarks
'use strict';

$(document).ready(function() {
  bookmarks.bindEventListeners(),
  // is there another error we need to add to the below? pbtag
  api.getItems()
    .then((items) => {
    //pbtag sort by time added
    // let newArray = items.sort(function(a,b) {
    //   return b-a;
    // });
      items.forEach((item) => store.addBookmark(item));
      bookmarks.render();
    })
    .catch(err => console.log(err.message));
  console.log('document is ready');
})
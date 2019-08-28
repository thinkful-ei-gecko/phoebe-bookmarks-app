// Before submit: test again all requirements

// Stuff that needs to be done: 
// C add a bookmark
      //C need to confirm added to server
      //C cancel button
      //C need to add to local store
// C see a list of bookmarks at page open
      //C desendents successfully showing
      //C connect to API and 'get' (i think this is correct - review slides again)
// C remove bookmarks from list
      //C use 'delete' fetch method
      //C have it return the correct thing from the store 
// - receive feedback when can't submit a bookmark
      //- doesn't let you submit if not a url, title
      //- prevent submit if rating isn't complete (find a way to make that part "required")
// C minimum rating filter
// - find and fix all pbtags
// - ONLY IF TIME: edit rating and description of bookmark in list
// - ONLY IF TIME: all the other features on the prev. thing 
// - Use store.adding to toggle the hide page.
// - make sure that every time render runs it is placing the bookmarks in the correct order
// mockflow: https://wireframepro.mockflow.com/editor.jsp?editor=off&perm=Owner&projectid=M0dc674d4151aad4bbcb5dd3cb93841cf1566693933014&publicid=e38c24fe142a438e9de76e49bd5f9b84#/page/D03c154e8e07a840496c2d6f6fa411812/sidebar/off
// - max lines of desctipion??? 

//used to start the page and call other pages

// global strftime, cuid, bookmarks
'use strict';

$(document).ready(function() {
  bookmarks.bindEventListeners(),
  // is there another error we need to add to the below? pbtag
  api.getItems()
    .then((items) => {
    //Sorted and thus displayed by newest to oldest
      let newArray = items.sort(function(a,b) {
        return b-a;
      });
      console.log({newArray});
      items.forEach((item) => store.addBookmark(item));
      bookmarks.render();
    })
    .catch(err => console.log(err.message));
  console.log('document is ready');
});

//pbtag more error checking needs to go here 
//Used to store, alter the store

'use strict';

const store = (function () {
  let adding = false;

  const addBookmark = function(bookmark) {
    if (bookmark) {
      console.log('`store.addBookmark` runs');
      this.bookmarks.unshift(bookmark);
    } 
    else {
      let obj = api.getItems()
      let index = obj.length - 1;
      this.bookmarks.unshift(obj[index]);
    }
  };

  return {
    bookmarks: [],
    adding,
    addBookmark
  };
})();
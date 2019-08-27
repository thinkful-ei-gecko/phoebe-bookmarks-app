//Used to store, alter the store

'use strict';

const store = (function () {
  let adding = false;

  const addBookmark = function(bookmark) {
    console.log('`store.addBookmark` runs');
    this.bookmarks.unshift(bookmark); 
    // else {
    //   let arr = api.getItems();
    //   console.log({arr});
    //   let index = arr.length - 1;
    //   this.bookmarks.unshift(arr[index]);
    // }
  };

  const findAndDelete = function(id) {
    //alternative: filter out item to delete: this.items = this.items.filter(item => item.id !== id);
    let index = this.bookmarks.findIndex(bookmark => bookmark.id === id);
    this.bookmarks.splice(index, 1);
  };

  return {
    bookmarks: [],
    filterBy: false,
    adding,
    addBookmark,
    findAndDelete
  };
})();
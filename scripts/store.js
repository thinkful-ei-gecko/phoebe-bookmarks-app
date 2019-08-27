//Used to store, alter the store
// eslint-disable-next-line no-unused-vars

'use strict';

const store = (function () {
  
  const setError = function(error) {
    this.error = error;
  };

  const addBookmark = function(bookmark) {
    console.log('`store.addBookmark` runs');
    this.bookmarks.unshift(bookmark);
  };

  const findAndDelete = function(id) {
    //alternative: filter out item to delete: this.items = this.items.filter(item => item.id !== id);
    let index = this.bookmarks.findIndex(bookmark => bookmark.id === id);
    this.bookmarks.splice(index, 1);
  };

  return {
    bookmarks: [],
    filterBy: false,
    adding: false,
    error: null,

    setError,
    addBookmark,
    findAndDelete
  };
})();
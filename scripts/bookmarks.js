//Used to generate/render

'use strict';

const bookmarks = (function () {
  //partially functional! 
  function render() {
    console.log('`render` runs');
    renderHeaderView();
    renderBookmarks();
  }

  //functional
  function renderHeaderView() {
    $('#main-view').html(`
      <form class="space-between">
        <input class="top-buttons" id="new-bookmark" value="+ New" type="button">
        <div>
        <label for="filter-select">Sort by:</label>
        <select id="filter-select">
          <option class="filter-option" value="1" id="js-toggle-dropdown">View All</option>
          <option class="filter-option" value="5">★★★★★</option>
          <option class="filter-option" value="4">★★★★</option>
          <option class="filter-option" value="3">★★★</option>
          <option class="filter-option" value="2">★★</option>
        </select>
        </div>
      </form>
      <div id="js-bookmarks">
      </div>
    `);
  }

  function renderBookmarks() {
    let bookmarks = [...store.bookmarks];

    if (store.filter) {
      bookmarks = bookmarks.filter(bookmark => bookmark.display === true);
    }
    $('#js-bookmarks').empty();
    $('#js-bookmarks').html(createAccordion(bookmarks));
  }

  //functional!! 
  function toggleMainView () {
    console.log('`toggleMainView` hello!');
    $('#main-view').toggle();
  }

  // Function allows you to add listeners and expand the Accordion. Need to update code (just copy/pasted).
  //pbtag... if time edit to hide old when new is clicked
  const handleAccordion = function () {
    $('#main-view').on('click', '.accordion', function () {
      // document.getElementsByClassName('active').removeClass('active');
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }; 

  //pbtag
  const createAccordion = function(array) {
    console.log('`createAccordion` runs');
    console.log({array});
    let bookmarksDisplay = array.map(item => createAccordionHtml(item.id, item.title, item.rating, item.url, item.desc));
    return bookmarksDisplay.join('');
  };

  //functional
  const createAccordionHtml = function(id, title, rating, url, description) {
    console.log('`createAccordionHtml` runs');
    return `
      <button class="accordion"><span class="bm-title">${title}</span><span class="bm-rating">${rating}</span></button>
      <div class="panel" data-bookmark-id="${id}">
        <div class="space-between">
          <button id="bm-url"><a href='${url}'>Visit Site</a></button>
          <button class="bm-delete">delete</button>
        </div>
        <p class="description" id="bm-description">${description}</p>
      </div>
    `;
  };

  //functional
  function handleCreateNew() {
    $('#main-view').on('click', '#new-bookmark', event => {
      console.log('handlecreatenew ran');
      toggleMainView();
      generateForm();
    });
  }

  //functional
  function generateForm() {
    console.log('generateForm ran');
    $('#add-view').html(`
      <form id="new-bookmark-form">
        <h2>Add New Bookmark:</h2>
        <input type="url" id="new-bookmark-url" name="url" placeholder="Enter link here" required>
        <fieldset>
          <input type="text" id="new-bookmark-title" name="title" value="" placeholder="Bookmark Title" required>
          <fieldset id="new-bookmark-rating" class="rate">
            <input type="radio" id="star5" name="rating" value="5" required>
            <label for="star5">5 stars</label>
            <input type="radio" id="star4" name="rating" value="4">
            <label for="star4">4 stars</label>
            <input type="radio" id="star3" name="rating" value="3">
            <label for="star3">3 stars</label>
            <input type="radio" id="star2" name="rating" value="2">
            <label for="star2">2 stars</label>
            <input type="radio" id="star1" name="rating" value="1">
            <label for="star1">1 star</label>
          </fieldset>
          <textarea id="new-bookmark-description" name="desc" placeholder="Enter description here (optional)"></textarea>
          <input class="hidden" name="display" value="true">
          <div class="space-around">
            <button type="button" id="cancel-new">Cancel</button>
            <button type="submit" id="submit-new">Create</button>
          </div>
        </fieldset>
      </form>
    `)
  }
  
  //functional
  function handleSubmit() {
    $('#add-view').on('click', '#submit-new', event => {
      event.preventDefault();
      console.log('`handleSubmit` runs');
      let formElement = $('#new-bookmark-form')[0];
      let serializedJson = form.serializeJson(formElement);
      api.addBookmark(serializedJson)
        .then((newItem) => {
          store.addBookmark(newItem);
          $('#add-view').empty();
          render();
          toggleMainView();
          //expand when added! 
        });
    });
  }

  //functional 
  function handleCancel() {
    $('#add-view').on('click', '#cancel-new', event => {
      event.preventDefault();
      $('#add-view').empty();
      toggleMainView();
    });
  }

  function getItemIdFromElement(item) {
    return $(item)
      .closest('.panel')
      .data('bookmark-id');
  }

  function handleDelete() {
    $('#main-view').on('click', '.bm-delete', function() {
      console.log(event.target.value);
      let id = getItemIdFromElement(event.target);
      api.deleteBookmark(id)
        .then(() => {
          store.findAndDelete(id);
          render();
        })
        .catch((err) => {
          //pbtag render error functions
        });
    });
  }

  function setDisplayFilter(filterValue) {
    console.log('`setDisplayFilter` runs');
    store.bookmarks.forEach(bookmark => {
      (bookmark.rating >= filterValue) ? bookmark.display = true : bookmark.display = false;
    });
    //run function to hide all display:false 
  }

  //filter by button
  function handleFilterBy() {
    $('#main-view').on('change', '#filter-select', function() {
      console.log(`filter selected: ${event.target.value}`);
      let filterValue = event.target.value;
      if (filterValue === '1') {
        store.filter = false;
      }
      else {
        store.filter = true;
        setDisplayFilter(filterValue);
      }
      renderBookmarks();
    });
  }

  function bindEventListeners () {
    //list listeners here 
    handleAccordion();
    handleCreateNew();
    handleSubmit();
    handleCancel();
    handleDelete();
    handleFilterBy();
  }

  return {
    render, 
    toggleMainView,
    bindEventListeners,
    generateForm,
  };

})();
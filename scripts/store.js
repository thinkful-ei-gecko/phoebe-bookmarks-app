'use strict';

const store = (function () {
  const createAccordianHtml = function(url, rating, title, description) {
    //use a forEach method if necessary! Not sure how this will be used, just wanted to get the accordian html
    <button class="accordion"><span id='${title}'>${title}</span><span id="${title}-rating"></span></button>
    <div class="panel">
      <button id="${title}-url"><a href='url'>Visit Site</a></button>
      <p class="description" id="${title}-description">${description}</p>
    </div>
  };

  return {
    createAccordianHtml
  }
})();
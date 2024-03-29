'use strict';

//called in bookmarks
const form = (function () {
  
  const serializeJson = function(form) {
    const formData = new FormData(form);
    const o = {};
    formData.forEach((val,name) => o[name] = val);
    return JSON.stringify(o);
  };

  return {
    serializeJson
  };
})();
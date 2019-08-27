//Used for changes to the store/CRUD method functions 

'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function (){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/phoebe';

  //if there's an non-202 error, capture it and display in the data. Otherwise, return the parsed results. 
  const listApiFetch = function(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };

          if (!res.headers.get('content-type').includes('json')) {
            error.message= res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  const getItems = function() {
    console.log('`getItems` runs');
    return listApiFetch(BASE_URL + '/bookmarks');
  };

  const addBookmark = function(stringifiedObj) {
    console.log('`api.addBookmark` runs');
    return listApiFetch(BASE_URL + '/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: stringifiedObj
    });
  };

  const deleteBookmark = function(id) {
    console.log('`api.deleteBookmark` runs');
    return listApiFetch(BASE_URL + '/bookmarks' + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  };
  
  return {
    getItems,
    addBookmark, 
    deleteBookmark
  };
})();
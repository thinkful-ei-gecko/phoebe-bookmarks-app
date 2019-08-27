//Used for changes to the store/CRUD method functions 

'use strict';

const api = (function (){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/phoebe';

  //pbtag review the code below for understanding 
  //if there's an non-202 error, capture it and display in the data. Otherwise, return the parsed results. 
  function  listApiFetch (...args) {
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
  }

  function getItems () {
    console.log('`getItems` runs');
    return listApiFetch(BASE_URL + '/bookmarks')
  }

  function addBookmark (stringifiedObj) {
    console.log('`api.addBookmark` runs')
    return listApiFetch(BASE_URL + '/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: stringifiedObj
    });
  }

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
  }
})();
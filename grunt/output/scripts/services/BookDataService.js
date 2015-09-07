angular.module('myApp')
  .factory('BookDataService', function ($http) {

    var serverUrl = '/api/books/';

    return {
      getBooks: function () {
        return $http.get(serverUrl)
          .then(function (response) {
            return response.data;
          });
      },
      getBookByIsbn: function (isbn) {
        return $http.get(serverUrl + isbn)
          .then(function (response) {
            return response.data;
          });
      },
      saveBook: function (book) {
        return $http.put(serverUrl + book.isbn,book);
      },
      createBook: function (book) {
        return $http.post(serverUrl,book);
      }
    }
  });
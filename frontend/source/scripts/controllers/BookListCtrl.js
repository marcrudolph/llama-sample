angular.module('myApp')
  .controller('BookListCtrl', function ($scope,BookDataService) {
    BookDataService.getBooks()
      .then(function(data){
        $scope.books = data;
      });
  });
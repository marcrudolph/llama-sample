angular.module('myApp')
  .controller('BookEditCtrl',function ($scope, $routeParams, $location,BookDataService) {
    BookDataService.getBookByIsbn($routeParams.isbn)
      .then(function(book){
        $scope.book = book;
      });


    $scope.saveBook = function(){
      BookDataService.saveBook($scope.book)
        .then(function(success){
          if(success){
            $location.path('/');
          }
        });
    }

  });
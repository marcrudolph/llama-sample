angular.module('myApp')
  .controller('BookDetailCtrl',function ($scope, $routeParams, $location,BookDataService) {
    $scope.isbn = $routeParams.isbn;


    BookDataService.getBookByIsbn($routeParams.isbn)
      .then(function(book){
        $scope.book = book;
      });


    $scope.saveBook = function(){
      BookDataService.save($scope.book)
        .then(function(success){
          if(success){
            $location.path('/');
          }
        });
    }

  });
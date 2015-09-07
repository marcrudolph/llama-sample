angular.module('myApp')
  .controller('BookCreateCtrl',function ($scope,  $location,BookDataService) {
    $scope.createBook = function(){
      BookDataService.createBook($scope.book)
        .then(function(success){
          if(success){
            $location.path('/');
          }
        });
    }

  });
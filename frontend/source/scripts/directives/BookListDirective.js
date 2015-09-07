angular.module('myApp')
.directive('bookList', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/bookList.html'
    }
  })
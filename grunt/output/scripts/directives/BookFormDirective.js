angular.module('myApp')
.directive('bookForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/bookForm.html'
    }
  });
angular.module('myApp')
.directive('bookCreateView', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/BookCreateViewDirective.html'
    }
  });
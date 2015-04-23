angular.module('myApp')
.directive('bookEditView', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/BookEditViewDirective.html'
    }
  });
angular.module('colorpicker')
  .controller('colorsCtrl', function ($scope, userService) {
    $scope.user = userService.getUser();
  });
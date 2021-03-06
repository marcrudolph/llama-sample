angular.module('robinboehm.colorpicker', []);
'use strict';
angular.module('robinboehm.colorpicker').directive('colorpicker', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/colorPicker.html',
    scope: {
      r: '@initR',
      g: '@initG',
      b: '@initB',
      a: '@initA'
    }
  };
});
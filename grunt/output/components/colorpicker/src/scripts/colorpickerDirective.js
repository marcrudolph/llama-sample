angular.module('colorpicker')
  .directive('colorpicker', function(){

    // DDO - Directive Definition Object
    return {
      restrict: 'E',
      templateUrl: 'components/colorpicker/src/templates/colorpickerDirective.html',
      scope: {
        color : '=colorData'
      }
    }
  });
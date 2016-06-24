var myApp=angular.module( 'myApp', [] );

myApp.controller( 'fridayController', [ '$scope', function( $scope ){
  // get user input on button click
  $scope.getUserInput = function()
  {
    console.log( 'in getUserInput: ' + $scope.inputModel1 );
  };
}]);

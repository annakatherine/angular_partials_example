var myApp=angular.module( 'myApp', [] );

myApp.controller( 'assignmentController', [ '$scope', '$http', function( $scope, $http ){
  $scope.assignmentArray=[];
  // get user input on button click
  $scope.addAssignment = function(){
    event.preventDefault();
    var assignmentObject = {
      assignment: $scope.assignmentId,
      name: $scope.student_name,
      score: $scope.score,
      date_completed: $scope.date_completed,
      completed: $scope.completed
    };
    $http({
      method: 'POST',
      url: ('/postAssignment'),
      data: assignmentObject
    });//end of htt post call
    $scope.assignmentId='';
    $scope.student_name='';
    $scope.score='';
    $scope.date_completed='';
    $scope.completed='';
  };// end addAssignment
  $scope.getAssignments = function(){
    $http({
      method: 'GET',
      url: ('/getAssignment'),
    }).then(function (response) {
      $scope.assignmentArray = response.data;
    },
    function myError( response ){
      console.log( response.statusText );
    });
  };
}]); //end of controller

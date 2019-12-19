var shoutyApp = angular.module('shoutyApp', []);

shoutyApp.controller('MainController', function($scope) {
  var size = 5;
  $scope.currentSize = size;
  $scope.user = 'Anonymous';
  $scope.shouts = [{
    'user': 'Gungor Budak',
    'message': 'Hello world'
  }];
  $scope.shout = function() {
    if ($scope.message.length > 0) {
      $scope.shouts.unshift({
        'user': $scope.user,
        'message': $scope.message
      });
      $scope.message = '';
      $scope.currentSize = size;
    }
  };
  $scope.showMore = function() {
    $scope.currentSize += size;
  };
});
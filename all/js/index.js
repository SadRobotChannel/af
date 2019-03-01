angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFaucet   = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.sushi = [
    { name: 'Cali Roll', fish: 'Crab', frequency: 2 },
    { name: 'Philly', fish: 'Tuna', frequency: 4 },
    { name: 'Tiger', fish: 'Eel', frequency: 7 },
    { name: 'Rainbow', fish: 'Variety', frequency: 6 }
  ];

});

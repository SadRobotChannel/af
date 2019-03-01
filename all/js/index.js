angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFaucet   = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.sushi = [
    { name: '<a href="http://bit.ly/www-bitcoinsfor-me" target="_blank">BitcoinsFor.me</a>', fish: 'BTC', frequency: '5 minutes' },
    { name: 'Philly', fish: 'Tuna', frequency: 4 },
    { name: 'Tiger', fish: 'Eel', frequency: 7 },
    { name: 'Rainbow', fish: 'Variety', frequency: 6 }
  ];

});

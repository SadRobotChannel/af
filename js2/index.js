// there is probably a better way to do table double-sorting
// but this worked for me

// the important thing is that when the user changes pages,
// the table rows remain in the DOM

// this allows the user to manipulate the table rows
// and change pages without losing their changes
// ex: a checkbox to delete the row

// initialize the angular app
angular
	.module('sampleApp', ['ui.bootstrap'])
	.factory('peopleFactory', peopleFactory)
	.controller('mainController', mainController)
;

function mainController($scope, $filter, peopleFactory) {
	
	// set the default sort types
	// '-' at the beginning of the string sorts in reverse
	// orderBy: also accepts a boolean to sort in reverse
	// but the boolean sorts all categories in reverse
	// in this case we only want to sort the first category in reverse
	$scope.sortType = '-birthday';
	// the table will first be sorted by 'sortType' and then by 'secondSortType'
	// followed by 'thirdSortType'
	$scope.secondSortType = 'lastName';
	$scope.thirdSortType = 'firstName';
	// set the default search/filter term
	$scope.filterTable = '';
	
	// get the people data
	$scope.peopleArray = peopleFactory;
	//console.log($scope.dataArray);
	
	// pagination settings
	$scope.currentPage = 1;
	// max size of the pagination bar
	$scope.maxPaginationSize = 100;
	$scope.itemsPerPage = 10;
	
	// update the beginning and end points for shown people
	// this will be called when the user changes page in the pagination bar
	$scope.updatePageIndexes = function () {
		$scope.firstIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
		$scope.lastIndex = $scope.currentPage * $scope.itemsPerPage;
	};
	$scope.updatePageIndexes();
	
	// return 1 if the element is filtered
	// used to hide elements that do not match the search filter
	$scope.filterSort = function(element) {
		if ($filter('filter')([element], $scope.filterTable).length > 0) {
			return 1;
		}
		return 2;
	};
	
	// string manipulation functions
	// primarily used for sorting the table
	function matchFirstChar(c, string) {
		return (string.charAt(0) == c);
	}
	
	function removeFirstChar(string) {
		return string.slice(1);
	}
	
	function removeDash(label) {
		if (matchFirstChar('-', label)) {
			return removeFirstChar(label);
		}
		return label;
	}
	function addDash(label) {
		if (!matchFirstChar('-', label)) {
			return '-' + label;
		}
		return label;
	}
	
	// formatting functions
	// for displaying table headers and tooltips
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	function makeReadableLabel(label) {
		var formatted = label;
		switch (label) {
			case 'firstName':
				formatted = 'first name';
				break;
			case 'lastName':
				formatted = 'last name';
		}
		return formatted;
	}
	
	// sort functions
	// add or remove '-' to sort up or down
	$scope.sortReverse = function(set) {
		set = set || false;
		if (set || !matchFirstChar('-', $scope.sortType)) {
			$scope.sortType = addDash($scope.sortType);
		} else {
			$scope.sortType = removeDash($scope.sortType);
		}
	};
	
	// sort a column with a single data attribute
	$scope.singleSort = function(label) {
		if ($scope.sortType == label) {
			$scope.sortReverse();
		} else {
			$scope.sortType = label;
		}
	};
	
	// sort a column with two data attributes
	// example: first name and last name
	$scope.doubleSort = function(label1, label2) {
		if ($scope.sortType == ('-' + label1)) {
			$scope.sortType = label2;
		} else if ($scope.sortType == ('-' + label2)) {
			$scope.sortType = label1;
		} else if ($scope.sortType != label1 && $scope.sortType != label2) {
			$scope.sortType = label1;
		} else {
			$scope.sortReverse();
		}
	};
	
	// boolean functions for detecting how a column is sorted
	// used for the up and down carets next to each column header
	$scope.sortDescend = function(label1, label2) {
		label2 = label2 || '';
		return ($scope.sortType == label1 || $scope.sortType == label2);
	};
	
	$scope.sortAscend = function(label1, label2) {
		label2 = label2 || '';
		return ($scope.sortType == ('-' + label1) || $scope.sortType == ('-' + label2));
	};
	
	// show a tooltip displaying how a column is sorted
	$scope.sortTooltip = function(label1, label2) {
		label2 = label2 || '';
		
		var order = 'descending';
		if (matchFirstChar('-', $scope.sortType)) {
			order = 'ascending';
		}
		
		var baseSortType = removeDash($scope.sortType);
		if (label1 == baseSortType || label2 == baseSortType) {
			return capitalizeFirstLetter((makeReadableLabel(baseSortType)) + ' ' + order);
		}
		return 'Sort by ' + makeReadableLabel(label1) + ' or ' + makeReadableLabel(label2);
	};
	
	// data manipulation
	// functions for adding data attributes
	// we use these to add string attributes so that the user can filter the data more easily
	addFormattedDate = function(attributeToAdd, attributeToRead, dataArray) {
		var monthNames = [
			"January", "February", "March",
			"April", "May", "June", "July",
			"August", "September", "October",
			"November", "December"
		];
		var tempDate;
		for (var i = 0; i < dataArray.length; i++) {
			tempDate = new Date(dataArray[i][attributeToRead]);
			// will add string in the format 'September 29'
			dataArray[i][attributeToAdd] = monthNames[tempDate.getMonth()] + ' ' + tempDate.getDate() + ', ' + tempDate.getFullYear();
		}
	}
	addBooleanText = function(attributeToAdd, attributeToRead, dataArray, trueText, falseText) {
		for (var i = 0; i < dataArray.length; i++) {
			if (dataArray[i][attributeToRead]) {
				dataArray[i][attributeToAdd] = trueText;
			} else {
				dataArray[i][attributeToAdd] = falseText;
			}
		}
	}
	// because our first and last names are separate,
	// we use this function to add a fullName attribute
	// so that the user can filter by full names
	addCombinedAttribute = function(attributeToAdd, firstAttributeToCombine, secondAttributeToCombine, dataArray) {
		for (var i = 0; i < dataArray.length; i++) {
			dataArray[i][attributeToAdd] = dataArray[i][firstAttributeToCombine] + " " + dataArray[i][secondAttributeToCombine];
		}
	}
	addFormattedDate('formattedBirthday', 'birthday', $scope.peopleArray);
	addBooleanText('citizenText', 'citizen', $scope.peopleArray, 'United States', 'Other');
	addCombinedAttribute('fullName', 'firstName', 'lastName', $scope.peopleArray);
	
}

// returns an array of random people
// data generation is slow,
// this is what causes the delay when loading the page
// in reality, this factory would connect
// to a database and return that data
function peopleFactory() {
	
	// return random first name
	generateFirstName = function() {
		var names = ["James",
		             "Christopher",
		             "Ronald",
		             "Mary",
		             "Lisa",
		             "Michelle",
		             "John",
		             "Daniel",
		             "Anthony",
		             "Patricia",
		             "Nancy",
		             "Laura",
		             "Robert",
		             "Paul",
		             "Kevin",
		             "Linda",
		             "Karen",
		             "Sarah",
		             "Michael",
		             "Mark",
		             "Jason",
		             "Barbara",
		             "Betty",
		             "Kimberly",
		             "William",
		             "Donald",
		             "Jeff",
		             "Elizabeth",
		             "Helen",
		             "Deborah",
		             "David",
		             "George",
		             "Jennifer",
		             "Sandra",
		             "Richard",
		             "Kenneth",
		             "Maria",
		             "Donna",
		             "Charles",
		             "Steven",
		             "Susan",
		             "Carol",
		             "Joseph",
		             "Edward",
		             "Margaret",
		             "Ruth",
		             "Thomas",
		             "Brian",
		             "Dorothy",
		             "Sharon"];
		return names[Math.floor(Math.random()*names.length)];
	};
	
	// return random last name
	generateLastName = function() {
		var names = ["Smith",
		             "Anderson",
		             "Clark",
		             "Wright",
		             "Mitchell",
		             "Johnson",
		             "Thomas",
		             "Rodriguez",
		             "Lopez",
		             "Perez",
		             "Williams",
		             "Jackson",
		             "Lewis",
		             "Hill",
		             "Roberts",
		             "Jones",
		             "White",
		             "Lee",
		             "Scott",
		             "Turner",
		             "Brown",
		             "Harris",
		             "Walker",
		             "Green",
		             "Phillips",
		             "Davis",
		             "Martin",
		             "Hall",
		             "Adams",
		             "Campbell",
		             "Miller",
		             "Thompson",
		             "Allen",
		             "Baker",
		             "Parker",
		             "Wilson",
		             "Garcia",
		             "Young",
		             "Gonzalez",
		             "Evans",
		             "Moore",
		             "Martinez",
		             "Hernandez",
		             "Nelson",
		             "Edwards",
		             "Taylor",
		             "Robinson",
		             "King",
		             "Carter",
		             "Collins"];
		return names[Math.floor(Math.random()*names.length)];
	};
	
	// randome date
	generateDate = function() {
		return new Date(Math.round(Math.random()*100) + 1900,
										Math.round(Math.random()*12),
										Math.round(Math.random()*28));
	};
	
	// return random gender
	generateBoolean = function() {
		if (Math.round(Math.random())) {
			return true;
		} else {
			return false;
		}
	};
	
	// return random food
	generateFood = function() {
		var food = ["pizza",
								"ice cream",
								"french fries",
								"hamburger",
								"cheeseburger",
								"chicken",
								"pork",
								"mac n cheese"];
		return food[Math.floor(Math.random()*food.length)];
	};
	
	// return random food
	generateDrink = function() {
		var drink = ["beer",
								 "soda",
								 "milkshake",
								 "water",
								 "milk",
								 "juice",
								 "iced tea",
								 "coffee"];
		return drink[Math.floor(Math.random()*drink.length)];
	};
	
	buildPerson = function() {
		return {
			firstName: generateFirstName(),
			lastName: generateLastName(),
			birthday: generateDate(),
			citizen: generateBoolean(),
			food: generateFood(),
			drink: generateDrink()
		};
	}
	
	createPeopleArray = function(num) {
		var peopleArray = [];
		for (var i=0; i<num; i++) {
			peopleArray.push(buildPerson());
		}
		return peopleArray;
	}
	
	return createPeopleArray(100);
	
}
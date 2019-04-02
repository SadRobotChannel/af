var grid=$('.grid');
var filter=$('.options input');
var suche=$('.quicksearch');
var qsRegex;
var buttonFilter;

grid.isotope({
	itemSelector: '.element-item',
	filter: function() {
	 // console.log(searchResult);
		var searchResult = qsRegex ? $(this).text().match( qsRegex ) : true;
		var buttonResult = buttonFilter ? $(this).is( buttonFilter ) : true;

		return searchResult && buttonResult;
	}
});


// use value of search field to filter
var quicksearch = suche.keyup( debounce( function() {
	qsRegex = new RegExp( quicksearch.val(), 'gi' );
	grid.isotope();
}, 200 ) );


// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
	var timeout;
	return function debounced() {
	if ( timeout ) {
		clearTimeout( timeout );
	}
	function delayed() {
		fn();
		timeout = null;
	}
	timeout = setTimeout( delayed, threshold || 100 );
	};
}

$('#shuffle').click(function(){
	grid.isotope('shuffle');
});


filter.change(function(){
	var filters = [];

	filter.filter(':checked').each(function(){
		filters.push( this.value );
	});
	 //filters = filters.join(', '); 	//OR
filters = filters.join(''); 		//AND
buttonFilter = filters;
	grid.isotope();
});

// filter with selects and checkboxes
var $checkboxes = $('.options input');
var $output = $('.output');

$checkboxes.change( function() {
  // map input values to an array
  var inclusives = [];
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine inclusive filters
  var filterValue = inclusives.length ? inclusives.join(', ') : '*';

  $output.text( filterValue );
  $grid.isotope({ filter: filterValue });
});
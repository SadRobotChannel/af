
	/* Sort function */
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("le-Table-1");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


  /* Search/filter function */
  function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#le-Table-1 tbody").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
      var thirdCol = rows[i].cells[2].textContent.toUpperCase();
      var sixthCol = rows[i].cells[5].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}
document.querySelector('#le-Input-1').addEventListener('keyup', filterTable, false);
	
function content(elem) {
	}	
	
	
	 /* checkbox filter */ 
function filter_type(box) {
			 var cbs = document.getElementsByTagName('input');
			 var all_checked_types = [];
			 for(var i=0; i < cbs.length; i++) {
				 if(cbs[i].type == "checkbox") {
						 if(cbs[i].name.match(/^filter/)) {
								 if(cbs[i].checked) {
									 all_checked_types.push(cbs[i].value);
								  }
							  }
					   }
			  }
			 if (all_checked_types.length > 0) {
				 $('#le-Table-1 tr').each(function (i, row) {
					 var $tds = $(this).find('td')
					 if ($tds.length) {
						var type = $tds[2].innerText;
						console.log(type)
						if(!(type && all_checked_types.indexOf(type) >= 0)) {
							$(this).hide();
						 }
						 else {
							$(this).show();
						 }
					  }
				  });
				  
			  }
				else {
					$('#le-Table-1 tr').each(function (i, row) {
						var $tds = $(this).find('td'),
						type = $tds.eq(2).text();
						$(this).show();
					 });
				}
				return true;
			}
	
/* clickable row */
	jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});
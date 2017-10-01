$(document).ready(function(){

var n = 0;
var type =

$('#add').click(function() {
	// updates the body's html with a value from the colors array
	$('body').addClass('bg-'+n);

	// increments n
	n++;

	// if n is > 5, reset n
	if(n > 9	) {
		n = 0;
	}

	if(n == 1) {
		$('.whole2').addClass('whole_2');
		;
	}

	if(n == 2) {
		$('.whole3').addClass('whole_3');

		;
	}

	if(n == 3) {
		$('.whole4').addClass('whole_4');

		;
	}
	  if(n == 4) {
		$('.whole5').addClass('whole_5');

		;
	}
	 if(n == 5) {
		$('.whole6').addClass('whole_6');

		;
	}
	if(n == 6) {
		$('.whole7').addClass('whole_7');

		;
	}
	  if(n == 7) {
		$('.whole8').addClass('whole_8');

		;
	}

	 if(n == 8) {
		$('.whole9').addClass('whole_9');

		;
	}
	   if(n == 9) {
		$('.whole10').addClass('whole_10');

		;
	}
	  
			  
});  
});

$(document).ready(function(){

var n = 0;
var type =

$('#subtract').click(function() {
	// updates the body's html with a value from the colors array
$('body').removeClass();
	$('body').addClass('bg-'+n);

	// increments n
	n++;

	// if n is > 5, reset n
	if(n > 11	) {
		n = 0;
	}

	if(n == 10) {
		$('.whole2').removeClass('whole_2');
		;
	}



	if(n == 9) {
		$('.whole3').removeClass('whole_3');

		;
	}

	if(n == 8) {
		$('.whole4').removeClass('whole_4');

		;
	}
	  if(n == 7) {
		$('.whole5').removeClass('whole_5');

		;
	}
	 if(n == 6) {
		$('.whole6').removeClass('whole_6');

		;
	}
	if(n == 5) {
		$('.whole7').removeClass('whole_7');

		;
	}
	  if(n == 4) {
		$('.whole8').removeClass('whole_8');

		;
	}

	 if(n == 3) {
		$('.whole9').removeClass('whole_9');

		;
	}
	   if(n == 2) {
		$('.whole10').removeClass('whole_10');

		;
	}
	  
});
});
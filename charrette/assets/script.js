$(document).ready(function(){

	/*---------1---------*/

	   var button1= false;
    $("#button1").click(function(){
        
        if (button1==true) {
            $(this).css("background-color", "#9DE0AD");
            button1=false;
        }
        else {
            $(this).css("background-color", "#FF9966");
            button1=true;
        }
    });
    

	/*---------6---------*/
	$('#button6').click(function() {
		setInterval(function(){ alert("( ͡° ͜ʖ ͡°)       |°з°|"); }, 3000);
	});

	/*---------7---------*/

  var button7= false;
    $("#button7").click(function(){
        
        if (button7==true) {
            $("#triangle").css("border-radius", "0px");
            button7=false;
        }
        else {
            $("#triangle").css("border-radius", "125px");
            button7=true;
        }
    });

    /*---------8---------*/

  var button8= false;
    $("#button8").click(function(){
        
        if (button8==true) {
            $("#square").css("border-radius", "125px");
            button8=false;
        }
        else {
            $("#square").css("border-radius", "0px");
            button8=true;
        }
    });

/*---------10---------*/

$('#bar').on('click', function() {
			$(this).toggleClass('clicked');
			
});
/*---------15---------*/

$("#yess").click(function(){
        $(this).append("I");
    });


   /*---------17---------*/

$('#bar17').on('click', function() {
            $(this).toggleClass('clicked');
            
});


 /*---------18---------*/

$('.square18').on('click', function() {
            $(this).toggleClass('clicked');
            
});


/*---------20---------*/
$("#button20").click(function () {
       alert("BE GONE");
   });

 /*---------21---------*/

$('.square21').on('click', function() {
            $(this).toggleClass('clicked');
            
});

 /*---------22---------*/

$('.square22').on('click', function() {
            $(this).toggleClass('clicked');
            
});
/*---------28---------*/

$('#bar28').on('click', function() {
            $(this).toggleClass('clicked');
            
});

/*---------29---------*/

$('#button29').on('click', function() {
            $('#button30').toggleClass('clicked');
            
});

/*---------30---------*/

$('#button30').on('click', function() {
            $('#button29').toggleClass('clicked');
            
});


/*---------28---------*/

$('.square32').on('click', function() {
            $(this).toggleClass('clicked');
            
});

});






   
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


   









	// $('#button-4').mouseover(function() {
	// 	$('.item').animate({
	// 		marginLeft: '1in'
	// 	}, 1000 );
	// });
});

   
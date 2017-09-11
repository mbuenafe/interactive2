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


/*---------32---------*/

$('.square32').on('click', function() {
            $(this).toggleClass('clicked');
            
});

    /*---------38---------*/
    $('#button38').click(function() {
        setInterval(function(){ alert("(*ゝω・)ﾉ"); }, 1000);
    });


/*---------40---------*/

 $("#button40").click(function(){
        $(this).animate({height: "100px"});
        $(this).animate({width: "200px"});
    });


 /*---------41---------*/

$("#bar41").click(function(){
     $(this).toggleClass('clicked');
     });
$("#bar41-1").click(function(){
     $(this).toggleClass('clicked');
     });

$("#bar41-2").click(function(){
     $(this).toggleClass('clicked');
     });

$("#bar41-3").click(function(){
     $(this).toggleClass('clicked');
     });
/*---------42---------*/

$("#button42").click(function(){
    //Animação com loop infinito (até clicar)
    $("#d2").toggleClass("rotating");
    $("#button42").toggleClass("spinEffect");
  });
/*---------43---------*/

 $("#button43").click(function(){
        $(this).animate({height: "500px"});
        $(this).animate({width: "500px"});
    });
/*---------44---------*/

 $("#button44").hover(function(){
        $(this).animate({height: "1000px"});
        $(this).animate({width: "500px"});
    });

/*---------45---------*/

 $("#button45").click(function(){
        $(this).animate({height: "100px"});
        $(this).animate({width: "500px"});
    });


/*---------47---------*/

$("#button47").click(function(){
    //Animação com loop infinito (até clicar)
    $("#d2").toggleClass("rotating");
    $("#button47").toggleClass("spinEffect2");
  });

$("#button48").click(function(){
    //Animação com loop infinito (até clicar)
    $("#d2").toggleClass("rotating");
    $("#button48").toggleClass("spinEffect3");
  });

 $('#button49').click(function(){
      $(this).animate({width: '1420px'}, 1600);
      $(this).animate({width: '50px'}, 1600);
  });

 $("#button50").click(function(){
    //Animação com loop infinito (até clicar)
    $("#d2").toggleClass("rotating");
    $("#button50").toggleClass("spinEffect4");
  });

});















   
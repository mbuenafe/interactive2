$(document).ready(function () {
    // Handler for .ready() called.
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $('.slide-3').offset().top
        }, 'slow');
    });

    $(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
});

    $("video").prop('muted', false);

  $("#mute-video").click( function (){
    if( $("video").prop('muted') ) {
          $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });

  $("#mute-video").click(function(){
     $(this).text(function(_, oldText) {
         return oldText === 'Sound OFF' ? 'Sound ON' : 'Sound OFF';
     });
});


});


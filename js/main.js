
$('.navbar li:nth-child(2) a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -50);
});

$('.navbar li:nth-child(3) a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -50);
});

$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
    $('.thumbnail').hover(
        function(){
          if ($(window).width() >=768) {
            $(this).find('.caption')
            .slideDown(250);
             // .fadeIn(400) 
          }    
        },
        function(){
            $(this).find('.caption')
            .slideUp(250); 
            // .fadeOut(500)
        }
    ); 
});



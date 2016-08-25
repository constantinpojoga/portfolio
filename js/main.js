// $('#nav').affix({
//       offset: {
//         top: $('section:nth-child(1)').outerHeight()
//       }
// }); 

console.log($('section:nth-child(1)').outerHeight());


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

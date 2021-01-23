// rescue button

//arm button with overlay to put code in


// redirected to comfort notifications

$(".brn-armed").click(function(){
    $(this).text('Contacting Authorities...');

    var delay = 1000;
    var url = 'comfort.html'
    setTimeout(function(){
        window.location = url; }, delay );
})
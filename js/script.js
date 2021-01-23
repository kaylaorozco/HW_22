// rescue button

//arm button with overlay to put code in


// redirected to comfort notifications

$(".btn-armed").click(function(){
    $(this).text('Contacting Authorities...');

    var delay = 6500;
    var url = 'https://kaylaorozco.github.io/HW_22/comfort.html'
    setTimeout(function(){
        window.location = url; }, delay );
    })

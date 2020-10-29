    $('.from-left').hover(function() {

    $(this).find('span').eq(0).animate({
    
        width: '100px'
    },200);
    
    }, function () {
    
        $(this).find('span').eq(0).animate({
    
            width: '0'
        },200);
        
    
    })
    function myFunction() {
        alert("Your Buying Has Been Confirmed");
      }
    
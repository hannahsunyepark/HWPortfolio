$(".column1").on("click", function(){
    if ($('.column1').hasClass("closed")){
        $(".column1").css("left", "0");
    }
    else {
        $(".column1").css("left", "0");
        $(".column2").css("left", "0");
        $(".column4").css("left", "0");
    }
 
});

$(".column2").on("click", function(){
    if ($('.column2').hasClass("closed")){
        $(".column2").css("left", "0");
    }
    else {
        $(".column2").css("left", "0");
        $('.column1').css("left", "calc(-100vw + 180px)");
        $(".column4").css("left", "0");
    }

});


$(".column4").on("click", function(){
    if ($('.column4').hasClass("closed")){
        $(".column4").css("left", "0");
    }
    else {
        $('.column1').css("left", "calc(-100vw + 180px)");
        $('.column2').css("left", "calc(-100vw + 190px)");
        $(".column2").hasClass("closed");
        $(".columm1").hasClass("closed");
    }    
});


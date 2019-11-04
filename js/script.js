$(".column1").on("click", function(){
    
    $(".column1").css("left", "0");
    $(".column2").css("left", "0");
    $(".column4").css("left", "0");

});

$(".column2").on("click", function(){

    $(".column2").css("left", "0");
    $('.column1').css("left", "calc(-100vw + 12%)");
    $(".column4").css("left", "0");

});

$(".column4").on("click", function(){

    $('.column1').css("left", "calc(-100vw + 12%)");
    $('.column2').css("left", "calc(-100vw + 13%)");


});






// $(".column1").on("click", function(){
//     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
//     if (w<800) {
//         console.log("no")
//         $(".column1").css("top", "8%");
//         $(".column2").css("top", "4%");
//         $(".column4").css("top", "0");
    
//     }
//     else {
//             $(".column1").css("left", "0");
//             $(".column2").css("left", "0");
//             $(".column4").css("left", "0");
//     }
// });


// $(".column2").on("click", function(){
//     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
//     if (w<800) {
//         console.log("here")
//         $(".column2").css("top", "4%");
//         $('.column1').css("top", "calc(68vh + 200px)");
//         $(".column4").css("left", "0");
    
//     }
//     else {
//         $(".column2").css("left", "0");
//         $('.column1').css("left", "calc(-100vw + 180px)");
//         $(".column4").css("left", "0");
//     }
    

// });


// $(".column4").on("click", function(){

//     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
//     if (w<800) {
//         console.log("bye")
//         $(".column2").css("top", "calc(50vh + 210px");
//         $('.column1').css("top", "calc(68vh + 200px)");
    
//     }
//     else {
//         $('.column1').css("left", "calc(-100vw + 180px)");
//         $('.column2').css("left", "calc(-100vw + 190px)");
//     }
    
    
//     // $(".column2").hasClass("closed");
//     // $(".columm1").hasClass("closed");

// });
// var mql = window.matchMedia('(max-width: 800px)');
// mql.addListener(function (){
//     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
//     console.log(w)
//     if (w>800) {
//     console.log("mqlistener")
//         $(".column1").css("top", "0");
//         $(".column2").css("top", "0");
//         $(".column4").css("top", "0");
//     }
//     else {
//         $(".column1").css("top", "8%");
//         $(".column2").css("top", "4.5%");
//         $(".column4").css("top", "0");
// }

// })
    


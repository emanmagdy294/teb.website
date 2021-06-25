/** Section 2  **/
$("#one").click(function(){
    $("#content-one").slideToggle(500),
    $("#content-two").slideUp(500),
    $("#content-three").slideUp(500),
    $("#content-four").slideUp(500)    
})

$("#two").click(function(){
    $("#content-two").slideToggle(500),
    $("#content-one").slideUp(500),
    $("#content-three").slideUp(500),
    $("#content-four").slideUp(500)  
})
$("#three").click(function(){
    $("#content-three").slideToggle(500),
    $("#content-one").slideUp(500),
    $("#content-two").slideUp(500),
    $("#content-four").slideUp(500)
})
$("#four").click(function(){
    $("#content-four").slideToggle(500),
    $("#content-one").slideUp(500),
    $("#content-three").slideUp(500),
    $("#content-two").slideUp(500)
});

$(document).ready(function(){
    $("#content-three").slideUp(),
    $("#content-two").slideUp(),
    $("#content-four").slideUp()
    })

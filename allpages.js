/*let aboutOffset = $("#about").offset().top;
$(window).scroll(function(){
let wScroll = $(window).scrollTop();
if(wScroll > aboutOffset - 50)
{
    $("#main-nav").css("backgroundColor" , "red");
    $("#btnUp").fadeIn(500);
}
else
{
    $("#main-nav").css("backgroundColor" , "transparent");
    $("#btnUp").fadeOut(500);

}
})

$("#btnUp").click(function(){
    $("html , body") .animate({scrollTop:0} , 2000);
})*/
/********************************************************************/
/* SIDE BOX */

$("#openSlide").click(function(){
    if($(".Box").hasClass("test")){
        $(".Box").removeClass("test")
    }
    else{
        $(".Box").addClass("test")
    }
    })

/* href */
$("a").click(function(e){
    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html , body") .animate({scrollTop:sectionOffset} , 2000);
})

/***********************************************************/
/* announce */
var closeBtn = document.getElementById("colse");
var lightBoxItem = document.getElementById("lightBoxItem");

function closeSlide()
{
  lightBoxContainer.style.display="none";
}
closeBtn.addEventListener("click" , closeSlide);

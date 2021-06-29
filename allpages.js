let aboutOffset = $("#about").offset().top;
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
})
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
/* loading screen */
// $(document).ready(function(){
// $("#load").fadeOut(1000,function
//     (){
//         $("body").css("overflow","auto")
//     });
// });



// $(window).on("load",function(){
//     $("#load").fadeOut("slow");
// });


let loading=document.getElementById("load");
window.addEventListener('load',function(){
    loading.style.display='none';
})
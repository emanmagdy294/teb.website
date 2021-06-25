var closeBtn = document.getElementById("colse");
var lightBoxItem = document.getElementById("lightBoxItem");

function closeSlide()
{
  lightBoxContainer.style.display="none";
}
closeBtn.addEventListener("click" , closeSlide);

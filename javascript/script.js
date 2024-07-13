var thumb=document.querySelectorAll(".thumb")
var mainImage=document.querySelector("#main-image")

for (var i=0;i<=thumb.length;i++){
    thumb[i].addEventListener("click",function (){
        mainImage.src=this.src
    })
}
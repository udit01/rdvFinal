video = document.getElementById("bg_video")

function detectmob() {
   console.log(window.innerWidth);
     console.log(window.innerHeight);
   if($(window).width() <= 1200 || $(window).height() <= 1200) {
     return true;
   } else {
     return false;
   }
}

if (detectmob())
{
  console.log("video removed");
  video.remove();
}

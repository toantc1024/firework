// Set the date we're counting down to
document.getElementById("itimer").src = "./timer.html";
var countDownDate = new Date("Nov 27, 2021 11:06:00").getTime();
localStorage.setItem("TIME_TO_STOP",false);
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time


     var now = new Date().getTime();
   // console.log(data.datetime);
   //  console.log(now);
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    var y = setInterval(function() {
        // Get today's date and time
           var nowy = new Date().getTime();
         // console.log(data.datetime);
         //  console.log(now);
        // Find the distance between now and the count down date
        let extra_w = 1080000 ;
        let extra_t = countDownDate - nowy;
        if(extra_t<-1080000){
            extra_w =0;
        }
        //console.log(extra_w);
        var distancey = countDownDate+extra_w - nowy;
        
        // Time calculations for days, hours, minutes and seconds
      
        // If the count down is over, write some text 
        if (distancey < 0) {
          clearInterval(y);
          document.getElementById("itimer").src = "./music-player/index.html";
          document.getElementById("loading_page").style.display = "block";
          document.getElementById("loading_page").style.opacity = "0.88";
    

      }
      }, 1000);
    document.getElementById("loading_page").style.display = "none";
    document.getElementById("itimer").src = "about:blank";
}
}, 1000);
// Set the date we're counting down to
document.getElementById("itimer").src = "./timer.html";
var countDownDate = new Date("Feb 1, 2022 00:00:00").getTime();
localStorage.setItem("TIME_TO_STOP",false);   localStorage.setItem("START",false);
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time


     var now = new Date().getTime();
   // console.log(data.datetime);
   //  console.log(now);
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);	
    var y = setInterval(function() {
        // Get today's date and time
           var nowy = new Date().getTime();
         // console.log(data.datetime);
         //  console.log(now);
         console.log(nowy);
  
        // Find the distance between now and the count down date
        let extra_w = 900000;
        let extra_t = countDownDate - nowy;
        if(extra_t<-900000){
            extra_w =0;
        }
        //console.log(extra_w);
        var distancey = countDownDate+extra_w - nowy;
        console.log(distancey);
        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distancey % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distancey % (1000 * 60)) / 1000);
        switch(minutes){
          case 14:
            switch(seconds){
              case 0:
                store.state.config.size = 1;
                store.state.config.shell = "Crysanthemum";   
                break;
              case 10:
                store.state.config.shell = "Ghost";
                break;
              case 15: 
                store.state.config.shell = "Strobe";
                break;
              case 20:
                store.state.config.shell = "Crysanthemum";
                break;
              case 25:
                store.state.config.shell = "Crackle";
                break;
              case 30:
                store.state.config.shell = "Ring";
                break;  
              case 35:
                store.state.config.shell = "Ghost";
                break;  
              case 45:
                store.state.config.shell = "Crysanthemum";
                break;  
              case 50:
                store.state.config.shell = "Strobe";
                break;
              case 55:
                store.state.config.finale = true;
                break;
              case 52:
                store.state.config.finale = false;
                store.state.config.shell = "Crysanthemum";
                break;  
              }
            break;
          case 13:
            switch(seconds){
              case 5:
                store.state.config.shell = "Ring";
                break;
              case 10:
                store.state.config.shell = "Willow";
                break;
              case 15:
                store.state.config.shell = "Ghost";
                break;  
              case 20:
                store.state.config.shell = "Crackle";
                break;
              case 30:
                store.state.config.shell = "Crysanthemum";
                break;
              case 32:
                store.state.config.shell = "Ghost";
                break;
              case 35:
                store.state.config.shell = "Crackle";
                break;
              case 40:
                store.state.config.shell = "Floral";
                break;
              case 50: 
                store.state.config.shell = "Ghost";
                break;
            } 
            break;
          case 12:
              switch(seconds){
                case 59:
                  store.state.config.size = 2;
                  store.state.config.shell = "Floral";
                  break;
                case 54:
                  store.state.config.shell = "Crossette";
                  break;
                case 48:
                  store.state.config.shell = "Ghost";
                  break;
                case 30:
                  store.state.config.shell = "Strobe";
                  break;
                case 15:
                  store.state.config.size = 3;
                  store.state.config.shell = "Floral";
                  break;
                case 10:
                  store.state.config.size = 2;
                  store.state.config.shell = "Crackle";
                  break;
                case 5: 
                  store.state.config.shell = "Willow";
            }
            break;
          case 11:
              switch(seconds){
                case 55:
                  store.state.config.shell = "Horse Tail";
                  store.state.config.size = 3;
                  break;
                case 48:
                  store.state.config.shell = "Strobe";
                  break;
                case 35:
                  store.state.config.size  = 4;
                  store.state.config.shell = "Ghost";
                  break;
                case 25:
                  store.state.config.size = 3;
                  store.state.config.size = "Floral";
                  break;
                case 10:
                  store.state.config.size = 4;
                  store.state.config.size = "Palm";
                  break;
                case 0:
                  store.state.config.size = 1;
                  store.state.config.shell = "Crysanthemum";
                  store.state.config.finale = true;
                  break;
                }
                break;
              case 10:
                switch(seconds){
                  case 53:
                    store.state.config.finale = false;
                    store.state.config.shell = "Ring";
                    store.state.config.size = 2;
                    break;
                  case 48:
                    store.state.config.shell = "Floral";
                    store.state.config.size=4;
                    break;
                  }
                break;
              case 0:
                switch(seconds){
                  case 50:
                    store.state.config.shell = "Random";
                    store.state.config.size = 1;
                    store.state.config.finale = true;
                  case 0:
                    store.state.config.finale = false;
                }
                break;
}
        console.log(minutes+" "+seconds);
        // If the count down is over, write some text 
        if (distancey < 0) {
          clearInterval(y);
          document.getElementById("itimer").src = "./happy.html";
          document.getElementById("loading_page").style.display = "block";
          document.getElementById("loading_page").style.opacity = "0.88";
          toggleSound();

      }
      }, 1000);
    document.getElementById("loading_page").style.display = "none";
    document.getElementById("itimer").src = "about:blank";
    toggleSound();
}
}, 1000);
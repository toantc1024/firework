var cowHead = $(".cowHead");
var cowTail = $(".cowTail");
var cowBell = $(".cowBell");
var smallCowHead = $(".small-cowHead");
var smallCowTail = $(".small-cowTail");

var duckHead = $(".duckHead");
var smallDuckHead1 = $(".small-duckHead1");
var smallDuckHead2 = $(".small-duckHead2");

var duckWing = $(".duckWing");
var smallDuckWing1 = $(".small-duckWing1");
var smallDuckWing2 = $(".small-duckWing2");

var chickenHead = $(".chickenHead");
var chickenWing = $(".chickenWing");
var smallerChickenHead = $(".smaller-ChickenHead");
var smallerChickenWing = $(".smaller-chickenWing");

var smallestChickenHead1 = $(".smallest-chickenHead1");
var smallestChickenHead2 = $(".smallest-chickenHead2");
var smallestChickenHead3 = $(".smallest-chickenHead3");

var smallestChickenWing1 = $(".smallest-chickenWing1");
var smallestChickenWing2 = $(".smallest-chickenWing2");
var smallestChickenWing3 = $(".smallest-chickenWing3");

var sunFlowerHead1 = $(".sunflowerHead1");
var sunFlowerHead2 = $(".sunflowerHead2");
var sunFlowerHead3 = $(".sunflowerHead3");

var sunflowerLeafRight1 = $(".sunflowerLeafRight1");
var sunflowerLeafRight2 = $(".sunflowerLeafRight2");
var sunflowerLeafRight3 = $(".sunflowerLeafRight3");

var sunflowerLeafLeft1 = $(".sunflowerLeafLeft1");
var sunflowerLeafLeft2 = $(".sunflowerLeafLeft2");
var sunflowerLeafLeft3 = $(".sunflowerLeafLeft3");

var apple1 = $(".apple1");
var apple2 = $(".apple2");
var apple3 = $(".apple3");
var apple4 = $(".apple4");
var apple5 = $(".apple5");
var apple6 = $(".apple6");
var apple7 = $(".apple7");
var apple8 = $(".apple8");
var apple9 = $(".apple9");
var apple10 = $(".apple10");

var tree = $(".tree");
var tree2 = $(".tree2");

var textShower = $(".text-shower");

var moo1 = $(".moo1");
var moo2 = $(".moo2");
var moo3 = $(".moo3");

// The cows surely appreciate some nice music :)
var audioSrcs = [ 
   {
     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/595322/old-mcdonald.mp3', // From: https://www.youtube.com/watch?v=i5LH0Rq6FRU
     name: 'old-mcdonald.mp3'
   },
   {
     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/595322/happy-fun.mp3', // From: http://freemusicarchive.org/music/Scott_Holmes/Corporate__Motivational_Music/Scott_Holmes_-_Happy_Ending
     name: 'happy-fun.mp3'
   },
   {
     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/595322/ukulele.mp3', // From: https://www.bensound.com/royalty-free-music/track/ukulele
     name: 'ukulele.mp3'
   },
   {
     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/595322/hip.mp3', // From: http://musicpleer.audio/#!0368e03e5fd5bec0e2aff1d482954ce0
     name: 'hip.mp3'
   }

];
// global variables
var audioSrcsCounter = 0;
var audio;
var ctx;
var audioSrc;
var analyser;
var frequencyData;

function isTouchDevice() {
   if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) { 
      return true;
   } else {
      return false;

   }
}

var audioSrcsCounter = 0;

var contextClass = (window.AudioContext ||  window.webkitAudioContext || window.mozAudioContext ||  window.oAudioContext || window.msAudioContext);
if (!contextClass) {
   $(".support-msg").show();
} else {

   function generateAudio() {
      // audio initialization
      audio = new Audio();
      audio.crossOrigin = 'anonymous';
      audio.src = audioSrcs[0].src;
      audio.controls = false;
      audio.loop = true;
      audio.autoplay = false;
      audio.volume = 0.50;

      ctx = new (window.AudioContext || window.webkitAudioContext)();

      audioSrc = ctx.createMediaElementSource(audio);
      analyser = ctx.createAnalyser();

      audioSrc.connect(analyser);

      audioSrc.connect(ctx.destination);

      frequencyData = new Uint8Array(analyser.frequencyBinCount);
   }

   // render 
   function renderFrame() {

      requestAnimationFrame(renderFrame);

      analyser.getByteFrequencyData(frequencyData);


      // music visualization
      bars = 4;
      for (var i = 0; i < bars; i++) {
         barHeight = (frequencyData[i] / 10) + "px";
         $(".music-visualizer span").eq(i).css("height", barHeight);
      }



      var cowRotation = frequencyData[3] / 17;
      var cowTailRotation = "-" + frequencyData[5] / 16;

      var smallCowRotation = "-" + frequencyData[5] / 12;
      var smallCowTailRotation = frequencyData[5] / 15;

      var duckRotation = "-" + frequencyData[5] / 10;
      var smallDuckRotation = frequencyData[5] / 15;

      var chickenRotation = frequencyData[5] / 15;
      var chickenWingRotation = frequencyData[3] / 17;

      var sunFlowerLeafRotation = frequencyData[3] / 17;


      TweenLite.to(cowHead, 0, {
         rotation: cowRotation, 
         transformOrigin: "50% 0%",
         ease: Power0.easeNone
      });

      TweenLite.to(cowBell, 0, {
         y: "-" + cowRotation / 4,
         x: "-" + cowRotation / 4,
         rotation: cowRotation, 
         transformOrigin: "50% 0%",
         ease: Power0.easeNone
      });

      TweenLite.to(cowTail, 0, {
         rotation: cowTailRotation, 
         transformOrigin: "100% 0%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallCowHead, 0, {
         rotation: smallCowRotation, 
         transformOrigin: "50% 0%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallCowTail, 0, {
         rotation: smallCowTailRotation, 
         transformOrigin: "100% 0%",
         ease: Power0.easeNone
      });



      TweenLite.to(duckHead, 0, {
         rotation: duckRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallDuckHead1, 0, {
         rotation: smallDuckRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallDuckHead2, 0, {
         rotation: smallDuckRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(duckWing, 0, {
         y: "-" + chickenWingRotation / 6,
         x: chickenWingRotation / 4,
         rotation: "-" + chickenWingRotation, 
         transformOrigin: "0% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallDuckWing1, 0, {
         y: "-" + chickenWingRotation / 6,
         x: chickenWingRotation / 4,
         rotation: "-" + chickenWingRotation, 
         transformOrigin: "0% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallDuckWing2, 0, {
         y: "-" + chickenWingRotation / 6,
         x: chickenWingRotation / 4,
         rotation: "-" + chickenWingRotation, 
         transformOrigin: "0% 50%",
         ease: Power0.easeNone
      });



      TweenLite.to(chickenHead, 0, {
         rotation: chickenRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(chickenWing, 0, {
         y: "-" + chickenWingRotation / 4,
         x: "-" + chickenWingRotation / 4,
         rotation: chickenWingRotation, 
         transformOrigin: "100% 50%",
         ease: Power0.easeNone
      });


      TweenLite.to(smallerChickenHead, 0, {
         rotation: chickenRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallerChickenWing, 0, {
         y: "-" + chickenWingRotation / 4,
         x: "-" + chickenWingRotation / 4,
         rotation: chickenWingRotation, 
         transformOrigin: "100% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallestChickenHead1, 0, {
         rotation: chickenRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallestChickenHead2, 0, {
         rotation: chickenRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallestChickenHead3, 0, {
         rotation: chickenRotation, 
         transformOrigin: "50% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallestChickenWing1, 0, {
         y: "-" + chickenWingRotation / 4,
         x: "-" + chickenWingRotation / 4,
         rotation: chickenWingRotation, 
         transformOrigin: "100% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallestChickenWing2, 0, {
         y: "-" + chickenWingRotation / 4,
         x: "-" + chickenWingRotation / 4,
         rotation: chickenWingRotation, 
         transformOrigin: "100% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(smallestChickenWing3, 0, {
         y: "-" + chickenWingRotation / 4,
         x: "-" + chickenWingRotation / 4,
         rotation: chickenWingRotation, 
         transformOrigin: "100% 50%",
         ease: Power0.easeNone
      });




      TweenLite.to(sunFlowerHead1, 0, {
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(sunFlowerHead2, 0, {
         rotation: "-" + chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(sunFlowerHead3, 0, {
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });



      TweenLite.to(sunflowerLeafRight1, 0, {
         y: sunFlowerLeafRotation / 10,
         x: sunFlowerLeafRotation / 4,
         rotation: sunFlowerLeafRotation, 
         transformOrigin: "0%% 0%",
         ease: Power0.easeNone
      });

      TweenLite.to(sunflowerLeafRight2, 0, {
         y: sunFlowerLeafRotation / 10,
         x: sunFlowerLeafRotation / 4,
         rotation: sunFlowerLeafRotation, 
         transformOrigin: "0%% 0%",
         ease: Power0.easeNone
      });

      TweenLite.to(sunflowerLeafRight3, 0, {
         y: sunFlowerLeafRotation / 10,
         x: sunFlowerLeafRotation / 4,
         rotation: sunFlowerLeafRotation, 
         transformOrigin: "0%% 0%",
         ease: Power0.easeNone
      });

      TweenLite.to(sunflowerLeafLeft1, 0, {
         y: "-" + sunFlowerLeafRotation / 4,
         x: "-" + sunFlowerLeafRotation / 10,
         rotation: sunFlowerLeafRotation, 
         transformOrigin: "100%% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(sunflowerLeafLeft2, 0, {
         y: "-" + sunFlowerLeafRotation / 4,
         x: "-" + sunFlowerLeafRotation / 10,
         rotation: sunFlowerLeafRotation, 
         transformOrigin: "100%% 100%",
         ease: Power0.easeNone
      });

      TweenLite.to(sunflowerLeafLeft3, 0, {
         y: "-" + sunFlowerLeafRotation / 4,
         x: "-" + sunFlowerLeafRotation / 10,
         rotation: sunFlowerLeafRotation, 
         transformOrigin: "100%% 100%",
         ease: Power0.easeNone
      });



      TweenLite.to(apple1, 0, {
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple2, 0, {
         rotation: "-" +chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple3, 0, {
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple4, 0, {
         rotation: "-" + chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple5, 0, {
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple6, 0, {
         rotation: "-" +chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple7, 0, {
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple8, 0, {
         rotation: "-" + chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple9, 0, {
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(apple10, 0, {
         rotation: "-" + chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(tree, 0, {
         y: "-" + chickenWingRotation / 4,
         x: chickenWingRotation / 4,
         rotation: "-" + chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

      TweenLite.to(tree2, 0, {
         y: "-" + chickenWingRotation / 4,
         x: "-" + chickenWingRotation / 4,
         rotation: chickenRotation * 2, 
         transformOrigin: "50% 50%",
         ease: Power0.easeNone
      });

   }


   $("#muteAudio").on('click', function() {
      audio.pause();
   });

   $(".music-visualizer").on('click', function() {
      togglePause();
   });

   $(".play-pause").on('click', function() {
      togglePause();
   });

   function togglePause() {
      if (audio.paused && audio.currentTime > 0 && !audio.ended) {
         audio.play();
         $("#pause").addClass("active");
         $("#play").removeClass("active");
      } else {
         audio.pause();
         $("#play").addClass("active");
         $("#pause").removeClass("active");
      }
   }

   $(".prev").on('click', function() {

      if(audioSrcsCounter === 0) {
         audioSrcsCounter = audioSrcs.length - 1;
      } else {
         audioSrcsCounter--;
      }

      audio.src = audioSrcs[audioSrcsCounter].src;
      if (audio.paused) {
         audio.play();
         $("#pause").addClass("active");
         $("#play").removeClass("active");
      } 
      generateList();

   });

   $(".next").on('click', function() {
      if(audioSrcsCounter == audioSrcs.length - 1) {
         audioSrcsCounter = 0
      } else {
         audioSrcsCounter++;
      }

      audio.src = audioSrcs[audioSrcsCounter].src;
      if (audio.paused) {
         audio.play();
         $("#pause").addClass("active");
         $("#play").removeClass("active");
      } 

      generateList();
   });

   $('#list').on('click', '#list-items li', function() {
      var audioSrcData = $(this).attr("data-audioSrc");

      audioSrcsCounter = audioSrcData;
      audio.src = audioSrcs[audioSrcsCounter].src;
      audio.play();

      console.log(audioSrcsCounter);

      $("#pause").addClass("active");
      $("#play").removeClass("active");

      generateList();
   });
   $(".list-of-songs").on('click touchstart', function() {
      $(this).addClass("not-seen-up")
      $('#list').removeClass("closed");
   });

   $("#list-close-icon").on('click touchstart', function() {
      $('#list').addClass("closed");
      $(".list-of-songs").removeClass("not-seen-up")
   });

   document.querySelector('input[type=range]').addEventListener('input', function() {
      this.setAttribute('value', this.value);
      audio.volume = this.value;
      $(".volume-value").html(Math.ceil(this.value * 100));
   });

   var list = document.getElementById("list-items");

   function generateList() {
      list.innerHTML = "";
      for(var i = 0; i < audioSrcs.length; i++) {
          var li = document.createElement("li");
          li.innerHTML = i + 1 + ". " + audioSrcs[i].name;
          li.setAttribute("data-audioSrc", i);
          if(i == audioSrcsCounter)
            li.className = "active";
          list.appendChild(li);
      }
   }

   generateList();


   URL = URL || webkitURL;

   function handleFileSelect(e) {

       var musicFiles = document.getElementById("files"),
      filesLength = musicFiles.files.length;
      console.log(filesLength);
      for (var i = 0; i < filesLength; i++) {

         console.log(musicFiles.files[i].type);

         if(musicFiles.files[i].type == 'audio/mp3' || musicFiles.files[i].type == 'audio/mpeg') {
            playFile(musicFiles.files[i]);
         } else {
            var errorTimeline = new TimelineLite();

            mcdonaldTimeline.call(changeText, ["The file " + musicFiles.files[i].name + " is not .mp3"]);

            mcdonaldTimeline.add( 
               TweenLite.to(textShower, 3, {
                  opacity: 1,
                  scale: 1,
                  ease: Elastic.easeOut.config(1, 0.3)
               })
            );

            mcdonaldTimeline.add( 
               TweenLite.to(textShower, 1, {
                  opacity: 0,
                  scale: 0,
                  ease: Back.easeOut.config(1.7)
               }) 
            );
         }
      }
      musicFiles.value = "";

   }

   function playFile(file) {

       var src = URL.createObjectURL(file);

       audioSrcs.push({
         src: src,
         name: file.name
       });

       generateList();
   }

   document.getElementById('files').addEventListener('change', handleFileSelect, false);

   // browser tab handling
     var hidden, visibilityChange; 
     if (typeof document.hidden !== "undefined") { 
         hidden = "hidden";
         visibilityChange = "visibilitychange";
     } else if (typeof document.msHidden !== "undefined") {
         hidden = "msHidden";
         visibilityChange = "msvisibilitychange";
     } else if (typeof document.webkitHidden !== "undefined") {
         hidden = "webkitHidden";
         visibilityChange = "webkitvisibilitychange";
     }

     //function handleVisibilityChange() {
     //    if (document[hidden]) {
     //         audio.pause();
     //    } else {
     //        audio.play();
     //    }
     //}

     // document.addEventListener(visibilityChange, handleVisibilityChange, false);

   var mcdonaldTimeline = new TimelineLite();

  function runIntro() {
    mcdonaldTimeline.call(changeText, ["Bật âm thanh lớn hơn!"]).to(textShower, 3, {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeOut.config(1, 0.3)
    }).to(textShower, 1, {
      opacity: 0,
      scale: 0,
      ease: Back.easeOut.config(1.7)
    }).call(changeText, ["Các bé bò sẽ rất trân trọng điều đó!"]).to(textShower, 3, {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeOut.config(1, 0.3)
    }).to(textShower, 1, {
      opacity: 0,
      scale: 0,
      ease: Back.easeOut.config(1.7)
    }).to(moo1, 6, {
      opacity: 1,
      y: "-30",
      ease: Elastic.easeOut.config(1, 0.3)
    }, 'showMoo').to(moo2, 2, {
      opacity: 1,
      y: "-30",
      ease: Elastic.easeOut.config(1, 0.3)
    }, 'showMoo').to(moo3, 4, {
      opacity: 1,
      y: "-30",
      ease: Elastic.easeOut.config(1, 0.3)
    }, 'showMoo').to(moo1, 1, {
      opacity: 0,
      y: "0",
      ease: Back.easeOut.config(1.7)
    }, 'hideMoo').to(moo2, 0.5, {
      opacity: 0,
      y: "0",
      ease: Back.easeOut.config(1.7)
    }, 'hideMoo').to(moo3, 0.75, {
      opacity: 0,
      y: "0",
      ease: Back.easeOut.config(1.7)
    }, 'hideMoo');

    mcdonaldTimeline.pause();

    setTimeout(function () {
      mcdonaldTimeline.resume();
    }, 1000);
  }


  function changeText(newText) {
    textShower.text(newText);
  }

  // var canPlay = audio.play();

  //if (canPlay !== undefined) {
  //  canPlay.then(function() {
      // Autoplay is ok.
  //    renderFrame();
  //    runIntro();
  //  }).catch(function(error) {
      // Autoplay was prevented.
  //    $('.click-to-play').show();
  //  });
  //}
   
  $('.click-to-play').show();
  document.getElementById('click-to-play').addEventListener('click', function () {
    $('.click-to-play').hide();
     generateAudio();
     audio.play();
     renderFrame();
     runIntro();
  });


}
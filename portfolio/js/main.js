// let tl = new TimelineMax({options});
// let tween = TweenMax.to($(".introBox"), 1, {
//   x: '-=50', // Tween to the current x value minus 50
//   y: '+=50', // Tween to the current y value plus 50
//   onComplete: myFunction,
//   ease:Back.easeOut
// });
// tl.add(tween, 1);

//TOP MENU
$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

$(document).ready(function(){
  $(".playHover").hide();
  event.preventDefault();
});
$(document).ready(function(){
  $(".workHover").hide();
  event.preventDefault();
});
$(document).ready(function(){
  $(".navbar").hide();
  event.preventDefault();
});

$(document).ready(function(){
  $(".playHover").delay(15000).show(1000);
});
$(document).ready(function(){
  $(".workHover").delay(13000).show(1000);
});

$(document).ready(function(){
  $(".navbar").delay(14000).show(1000);
});




// $(document).ready(function() {
//   $("body").delay(1000).fadeIn(500);
// });
// $(document).ready(function() {
//   $("body").delay(11500).fadeOut(500);
// });

$(document).ready(function() {
  $("body").delay(1000).blur("8px");
});

// FADING IN/OUT "HELLO, FRIEND."
$(document).ready(function() {
  $(".contentPost").delay(1000).fadeIn(500);
});
$(document).ready(function() {
  $(".contentPost").delay(2500).fadeOut(500);
});

// FADING IN/OUT "WELCOME TO MY PORTFOLIO"
$(document).ready(function() {
  $(".contentPost1").delay(5000).fadeIn(500);
});
$(document).ready(function() {
  $(".contentPost1").delay(2500).fadeOut(500);
});

// FADING IN/OUT "HOPE YOU ENJOY"
$(document).ready(function() {
  $(".contentPost2").delay(9000).fadeIn(500);
});
$(document).ready(function() {
  $(".contentPost2").delay(2500).fadeOut(500);
});

// let noScale = document.getElementsByClassName("");
//
//

// Blur / Focus HOVER OPP CLASS
$(document).ready(function() {
  $(".workHover").hover(function () {
    $(".playHover").css("filter", "blur(4px)");
}, function(){
  $(".playHover").css("filter", "initial");
    })
  });
$(document).ready(function() {
  $(".playHover").hover(function () {
    $(".workHover").css("filter", "blur(4px)");
  }, function(){
    $(".workHover").css("filter", "initial");
  })
});


//INITIAL CLICK OPEN HALF
let step = true;
$(document).ready(function() {
  $(".workHover").click(function () {
    if (step === true) {
      $(".playHover").fadeOut(1000);
      $(".workHover").css("clip-path", "initial");
      $(".workHover").css("z-index", "2");
      $(".workHover").css("width", "825px");
      $(".workHover").css("height", "525px");
      $(".workHover").css("left", "-90px");
      $(".workHover").css("bottom", "-70px");
      $(".workHover").css("transition", "2s");
      step = !step;
    } else {
      $(".workHover").css("clip-path", "polygon(100% 0, 0 0, 0 100%)");
      $(".workHover").css("z-index", "1");
      $(".workHover").css("width", "550px");
      $(".workHover").css("height", "350px");
      $(".workHover").css("left", "initial");
      $(".workHover").css("bottom", "5px");
      $(".workHover").css("transition", "2s");
      $(".playHover").fadeIn(2000);
      step = !step;
    }
  })
});

$(document).ready(function() {
  $(".playHover").click(function () {
    if (step === true) {
      $(".workHover").fadeOut(1000);
      $(".playHover").css("clip-path", "initial");
      $(".playHover").css("z-index", "2");
      $(".playHover").css("right", "-90px");
      $(".playHover").css("top", "-20x");
      $(".playHover").css("width", "825px");
      $(".playHover").css("height", "525px");
      $(".playHover").css("transition", "2s");
      step = !step;
    } else {
      $(".playHover").css("clip-path", "polygon(100% 0, 0% 100%, 100% 100%)");
      $(".playHover").css("z-index", "1");
      $(".playHover").css("width", "550px");
      $(".playHover").css("height", "350px");
      $(".playHover").css("right", "10px");
      $(".playHover").css("top", "5px");
      $(".playHover").css("transition", "2s");
      $(".workHover").fadeIn(2000);
      step = !step;
    }
  })
});



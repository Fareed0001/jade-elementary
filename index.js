document.addEventListener('DOMContentLoaded', () => {

  //===== MICRO-SLIDER begin
  const __ms = document.querySelector('.micro-slider');
  const __msSlider = new MicroSlider(__ms, {
    indicators: false,
    indicatorText: ''
  });
  const hammer = new Hammer(__ms);
  const __msTimer = 2000;
  let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);

  //detect mouseenter event
  __ms.onmouseenter = function (e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' mouse detected');
  }

  //detect mouseleave event
  __ms.onmouseleave = function (e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' mouse detected');
  }

  //detect mouseclick event
  __ms.onclick = function (e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' mouse detected');
  }

  //detect gesture tap event with hammer js library
  hammer.on('tap', function (e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' gesture detected');
  });

  //detect gesture swipe event with hammer js library
  hammer.on('swipe', function (e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' gesture detected');
  });

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach(el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  //===== MICRO-SLIDER end

});

// CONTACT START 
$(".form-submit-btn").on('click', function() {
  alert("Your message would be sent via mail");
  location.reload();
});
// CONTACT END 

// RESUME START 
$(".resume-div").css({"height" : "30rem", "overflow" : "hidden"});
$(".resume-link, .resume-top-header, .resume-icon").on("click", function () {
  $(".resume-div").css({"height" : "100%", "overflow" : "hidden"});
});

$(".resume-close-icon").on("click", function () {
  $(".resume-div").css({"height" : "30rem", "overflow" : "hidden"});
  $('html, body').animate({
    scrollTop: $("#third-div").offset().top
  }, 0); // Adjust the duration as needed
});
// RESUME END 

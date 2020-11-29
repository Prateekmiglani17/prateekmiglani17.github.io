let app = document.getElementById("app");

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

var typewriter = new Typewriter(app, {
  loop: true,
});

// if(!(/Android|webOS|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
//   $.scrollify({
//         section : ".section",
//         sectionName : "section-name",
//         interstitialSection : "",
//         easing: "easeOutExpo",
//         scrollSpeed: 200,
//         offset : 0,
//         scrollbars: true,
//         standardScrollElements: "",
//         setHeights: true,
//         overflowScroll: true,
//         updateHash: true,
//         touchScroll:true
//     });
// }

// .typeString("Hello World!")
//   .pauseFor(2000)
//   .deleteAll()

typewriter
  .typeString(
    "I am a <strong> Microsoft Fundamental Certified Aspirant .</strong> "
  )
  .pauseFor(2000)
  .deleteChars(43)
  .typeString("<strong> Enthusiastic Programmer.</strong>")
  .pauseFor(2000)
  .deleteChars(25)
  .typeString("<strong> Creative Designer.</strong>")
  .pauseFor(2000)
  .deleteChars(19)
  .typeString("<strong> Team Player.</strong>")
  .pauseFor(2000)
  .start();

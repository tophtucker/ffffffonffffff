var τ = 2 * Math.PI,
    ξ = Math.random;

document.addEventListener("DOMContentLoaded", function() {
  var 〇 = document.querySelector("div"),
      w = window.innerWidth,
      h = window.innerHeight;

  var x = w * ξ(),
      y = h * ξ();

  var ẋ = w * ξ(),
      ẏ = h * ξ();

  var θ = τ * ξ();

  〇.setAttribute("style",
      "transform: translate(-50%,-50%) "
               + "rotate(" + θ + "rad); "
    + "left: "   + x +"px; "
    + "top: "    + y +"px; "
    + "width: "  + ẋ +"px; "
    + "height: " + ẏ +"px; ");

  〇.addEventListener("click", function() {
    location.reload();
  });
});

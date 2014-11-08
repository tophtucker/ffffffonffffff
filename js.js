var ᴨ = Math.PI,
    ξ = Math.random;

document.addEventListener("DOMContentLoaded", function() {
  var 〇 = document.querySelector("div"),
      w = window.innerWidth,
      h = window.innerHeight;

  var x = Math.round(w * ξ()),
      y = Math.round(h * ξ());

  var ẋ = Math.round(w * ξ()),
      ẏ = Math.round(h * ξ());

  var θ = Math.round(2 * ᴨ * ξ());

  〇.setAttribute("style","transform: translate(-50%,-50%) rotate("+θ+"rad); left: "+x+"px; top: "+y+"px; width: "+ẋ+"px; height: "+ẏ+"px;");
});

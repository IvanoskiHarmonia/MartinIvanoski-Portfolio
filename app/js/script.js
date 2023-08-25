var prevScrollpos = window.scrollY;

window.onscroll = function() {
  navbarAnimation();
  starParallax();
}

function starParallax() {
  var scrolled = window.scrollY;
  var stars = document.getElementById('background-stars');

  var xPosition = scrolled * 0 + 'px';
  var yPosition = scrolled * 1 + 'px';

  stars.style.backgroundPosition = xPosition + ' ' + yPosition + ', ' + xPosition + ' ' + yPosition + ', ' + xPosition + ' ' + yPosition + ', ' + xPosition + ' ' + yPosition;
}

function navbarAnimation() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
  
function redirect(link) {
  window.open(link, '_blank');
}
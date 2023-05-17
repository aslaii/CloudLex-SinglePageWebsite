

//typed.js
var typed = new Typed(".typing-text", {
    strings: [".NET Programming", "Routing and Switching", "Web Development", "Music", "Games"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


  //home background
function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor(Math.random() * 20 + 1), { y: from }, { y: to,
      onComplete: animateWithRandomNumber,
      onCompleteParams: [myClass, from, to],
      ease: Linear.easeNone });
  }
  
  const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].
  forEach(e => animateWithRandomNumber(e, -1080, 1080));
  const itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].
  forEach(e => animateWithRandomNumber(e, 1080, -1080));


  //tilt js
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});


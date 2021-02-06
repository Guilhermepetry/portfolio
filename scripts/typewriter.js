var type = document.getElementById("typewriter");

var app = new Typewriter(type, {
  loop: false,
  delay: 75,
});

app
  .pauseFor(1000)
  .typeString("Olá! <br>")
  .pauseFor(200)
  .typeString(
    "Eu sou <strong>Guilherme Petry</strong>, desenvolvedor front-end."
  )
  .pauseFor(1000)
  .start();
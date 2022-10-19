const body = document.querySelector('body');
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
setInterval(() => {
    if (prefersColorScheme.matches) {
        body.classList.add('dark');
        document.getElementById("bio").style.color = "white";
        document.getElementById("app").style.color = "white";
        
    } else {
        body.classList.remove('dark');
        document.getElementById("bio").style.color = "black";
        document.getElementById("app").style.color = "black";
    }
}, 1000);


/// Typewriter
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desenvolvedor Full Stack!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Profissão <strong>Programador</strong>')
    .pauseFor(2500)
    .deleteChars(11)
    .typeString('<strong>Design Gráfico</strong>')
    .pauseFor(2500)
    .start();
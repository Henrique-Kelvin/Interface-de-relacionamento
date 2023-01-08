var nome = window.prompt('Qual é o seu nome?');
window.alert('É um prazer te conhecer, ' + nome + '!');
var idade = window.prompt('Quantos anos você tem?');
window.alert('Que legal, você tem ' + idade + ' anos de idade!');
window.alert('Que falta de educação a minha, deixe eu me apresentar...');
window.alert('Olá, eu sou o computador que este usuário usa!');
window.prompt('Você conhece o usuário deste computador?');
window.alert('Que legal que você conhece ele!');
window.prompt('Sabia que ele me fala muito sobre você, ' + nome + '?');
window.alert('Pois é, ele fala bastante de você!');
window.alert('Ele gosta muito de você!');
window.prompt('Posso te mostrar o que ele fala de você?');
window.alert('Então, irei te mostra o que fala de você para mim, ao som desta musica que vai tocar agora!');

$('button').on(onmouseover, function() {
    $(this).animate({
        'top': Math.random() * document.getElementById('content').clientHeight + "px",
        'left': Math.random() * document.getElementById('content').clientWidth + "px"
    },  "medium");
})
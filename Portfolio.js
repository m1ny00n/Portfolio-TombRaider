var icon1 = "Imagens/Icon1.png";
var icon2 = "Imagens/Icon2.png";
var icon3 = "Imagens/Icon3.png";
var icon4 = "Imagens/Icon4.png";

function alterar(){
    document.getElementById("icon1").src = icon1;
    let aux = icon1;
    icon1 = icon2;
    icon2 = icon3;
    icon3 = icon4;
    icon4 = aux;
}

//-------------------------------------------------------------------------

var curtida = 1817;

function curtir(){
    document.getElementById("curtida").innerHTML = ++curtida;
    document.getElementById("curtir").innerHTML = "Curtido! ♥";
    document.getElementById("curtir").disabled = true;
}

//-------------------------------------------------------------------------

const modoescuro = document.querySelector('.modoescuro');
modoescuro.addEventListener('click', function() {
    document.body.classList.toggle('escuro');
    if (document.body.classList.contains('escuro')) {
        modoescuro.textContent = 'Alterar para Modo Claro';
    } else {
        modoescuro.textContent = 'Alterar para Modo Escuro';
    }
});
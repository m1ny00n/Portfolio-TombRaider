let icon1 = "Imagens/Icon1.png";
let icon2 = "Imagens/Icon2.png";
let icon3 = "Imagens/Icon3.png";
let icon4 = "Imagens/Icon4.png";

const imgPerfil = document.getElementById("icon1");
const btnAlterar = document.querySelector('.alterar');
const btnCurtir = document.getElementById("curtir");
const spanCurtida = document.getElementById("curtida");
const btnModoEscuro = document.querySelector('.modoescuro');
const btnVoltar = document.querySelector('.voltar');

// Função para alternar as fotos do perfil
if (btnAlterar) {
    btnAlterar.addEventListener('click', () => {
        imgPerfil.src = icon2;
        let aux = icon1;
        icon1 = icon2;
        icon2 = icon3;
        icon3 = icon4;
        icon4 = aux;
    });
}

// Lógica de curtidas
let numCurtidas = 1817;

if (btnCurtir) {
    btnCurtir.addEventListener('click', () => {
        numCurtidas++;
        spanCurtida.textContent = numCurtidas;
        btnCurtir.textContent = "Curtido! ♥";
        btnCurtir.disabled = true;
    });
}

// Modo Escuro / Claro (Agora usando a classe 'claro')
if (btnModoEscuro) {
    btnModoEscuro.addEventListener('click', () => {
        document.body.classList.toggle('claro');
        const isClaro = document.body.classList.contains('claro');
        btnModoEscuro.textContent = isClaro ? 'Alterar para Modo Survivor' : 'Alterar para Modo Claro';
    });
}

// Botão Voltar
if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
        window.location.href = 'Inicialportfolio.html';
    });
}

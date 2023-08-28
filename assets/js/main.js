const botaoSobre = document.querySelector(".btn__sobre");

botaoSobre.addEventListener("click", () => {
    window.location.href="sobre.html";
});

// #############################################################################
// Botões de injeção
// #############################################################################

const botoes = document.querySelectorAll(".botoes");
let adrenalina = false;
let amor = false;
let nostalgia = false;
let brasil = false;
let batidao = false;
let tudo = false;

botoes.forEach(botao => {
    botao.addEventListener("click", () =>{
        if (botao.querySelector(".icons").classList.contains("svg-white")){
            botao.querySelector(".text-center").classList.remove("text-white");
            botao.querySelector(".text-center").classList.add("text-black");
            botao.querySelector(".icons").classList.remove("svg-white");
            botao.classList.remove("botao-pressionado");
            removeConfig(botao.getAttribute("id"));
        } else {
            botao.querySelector(".icons").classList.add("svg-white");
            botao.querySelector(".text-center").classList.remove("text-black");
            botao.querySelector(".text-center").classList.add("text-white");
            botao.classList.add("botao-pressionado");
            addConfig(botao.getAttribute("id"));
        }
    });
});

function addConfig(contexto){
    switch (contexto) {
        case "btn_adrenalina":
            adrenalina = true;
            break;
        case "btn_amor":
            amor = true;
            break;
        case "btn_nostalgia":
            nostalgia = true;
            break;
        case "btn_brasil":
            brasil = true;
            break;
        case "btn_batidao":
            batidao = true;
            break;
        case "btn_tudo":
            tudo = true;
            break;
    
        default:
            break;
    }
};

function removeConfig(contexto){
    switch (contexto) {
        case "btn_adrenalina":
            adrenalina = false;
            break;
        case "btn_amor":
            amor = false;
            break;
        case "btn_nostalgia":
            nostalgia = false;
            break;
        case "btn_brasil":
            brasil = false;
            break;
        case "btn_batidao":
            batidao = false;
            break;
        case "btn_tudo":
            tudo = false;
            break;
    
        default:
            break;
    }
}

// #############################################################################
// Botão atualizar
// #############################################################################

const botaoAtualizar = document.querySelector(".btn-atualizar");
const textoAtualizar = document.querySelector(".text-atualizar");
const logoYoutube = document.querySelector(".logo-youtube");
const iframe = document.querySelector(".iframe");
const iframeContainer = document.querySelector(".iframe-container");

botaoAtualizar.addEventListener("click", atualizaVideo);
textoAtualizar.addEventListener("click", atualizaVideo);

function atualizaVideo(){
    logoYoutube.classList.add("d-none");
    iframeContainer.classList.remove("d-none");
}

// #############################################################################
// Footer
// #############################################################################

const botaoGitHub = document.querySelector(".btn-github");
const botaoLinkedin = document.querySelector(".btn-linkedin");

botaoGitHub.addEventListener("click", () =>{
    window.open('https://github.com/marcos-bento/musica-grude', 'NovaJanela');
});

botaoLinkedin.addEventListener("click", ()=>{
    window.open('https://www.linkedin.com/in/marcosluizdev/', 'NovaJanela');
});

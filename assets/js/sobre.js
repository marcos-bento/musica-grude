const botaoSobre = document.querySelector(".btn__sobre");
const botaoYoutube = document.querySelector(".btn-youtube");
const botaoLogo = document.querySelector(".btn-logo");

botaoLogo.addEventListener("click", home);
botaoYoutube.addEventListener("click", home);
botaoSobre.addEventListener("click", home);

function home(){
    window.location.href="index.html";
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

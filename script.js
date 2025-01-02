// Função para redirecionar para o instagram
function redirecionarParaPagina1() {
    // Redireciona para outra página
    window.open("https://www.instagram.com/dev_fabioguimaraes/", "_blank");
}

// Função para redirecionar para o linkedin
function redirecionarParaPagina2() {
    // Redireciona para outra página
    window.open("https://www.linkedin.com/in/fabioguimaraes1/", "_blank");
}

// Função para redirecionar para o github
function redirecionarParaPagina3() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTG/FabioHTG", "_blank"); 
}

// Função para redirecionar para o gmail
function redirecionarParaPagina4() {
  // Redireciona para outra página
  window.open("mailto:fabio8henrique@gmail.com", "_blank");
}

// Função para redirecionar para o youtube
function redirecionarParaPagina5() {
    // Redireciona para outra página
    window.open("https://www.youtube.com/@dev_fabioguimaraes", "_blank");
}

// Função para redirecionar para o github login modavo
function redirecionarParaPagina6() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/Tela-De-Login-Modavo", "_blank");
}

// Função para redirecionar para o site login modavo
function redirecionarParaPagina7() {
    // Redireciona para outra página
    window.open("https://tela-de-login-modavo.netlify.app", "_blank");
}

// Função para redirecionar para o github cadastro modavo
function redirecionarParaPagina8() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/Tela-De-Cadastro-Modavo", "_blank");
}

// Função para redirecionar para o site cadastro modavo
function redirecionarParaPagina9() {
    // Redireciona para outra página
    window.open("https://tela-de-cadastro-modavo.netlify.app", "_blank");
}

// Função para redirecionar para o github catalago de musicas videoke
function redirecionarParaPagina10() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/CatalagoVideoke", "_blank");
}

// Função para redirecionar para o site catalago de musicas videoke
function redirecionarParaPagina11() {
    // Redireciona para outra página
    window.open("https://catalagovideokeguimaraes.netlify.app/", "_blank");
}

// Função para redirecionar para o github Contagem Regressiva De Namoro
function redirecionarParaPagina12() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/Contagem-Regressiva-De-Namoro", "_blank");
}

// Função para redirecionar para o site Contagem Regressiva De Namoro
function redirecionarParaPagina13() {
    // Redireciona para outra página
    window.open("https://contagem-regressiva-de-namoro.netlify.app", "_blank");
}

// Função para redirecionar para o whatsapp
function redirecionarParaPagina14() {
    // Redireciona para outra página
    window.open("https://wa.me/5521966487406", "_blank");
}



// Função para mover cards
let currentIndex = 0; 

const moveCarousel = (direction) => {
    const carousel = document.getElementById('carousel');
    const cards = document.querySelectorAll('#card');
    const totalCards = cards.length;
    
    currentIndex += direction; 

    if (currentIndex < 0) {
        currentIndex = totalCards - 1; 
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; 
    }

    const offset = -currentIndex * 300; 
    carousel.style.transform = `translateX(${offset}px)`; 
};
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

// Função para redirecionar para o github cardapio digital
function redirecionarParaPagina6() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/Cardapio-Digital", "_blank");
}

// Função para redirecionar para o site cardapio digital
function redirecionarParaPagina7() {
    // Redireciona para outra página
    window.open("https://cardapiodigitalfg.netlify.app/", "_blank");
}

// Função para redirecionar para o github dgmarketing
function redirecionarParaPagina8() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/AgenciaDGMarketing", "_blank");
}

// Função para redirecionar para o site dgmarketing
function redirecionarParaPagina9() {
    // Redireciona para outra página
    window.open("https://agenciadgmarketing.netlify.app/", "_blank");
}

// Função para redirecionar para o github catalago de musicas videoke
function redirecionarParaPagina10() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/CatalagoVideoke", "_blank");
}

// Função para redirecionar para o site catalago de musicas videoke
function redirecionarParaPagina11() {
    // Redireciona para outra página
    window.open("https://catalagovideoke.netlify.app/", "_blank");
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

// Função para redirecionar para o github qrcode
function redirecionarParaPagina15() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTGuimaraes/Gerador-QrCode", "_blank");
}

// Função para redirecionar para o site qrcode
function redirecionarParaPagina16() {
    // Redireciona para outra página
    window.open("https://geradorqrcodefg.netlify.app/", "_blank");
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
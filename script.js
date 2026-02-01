const btnServicos = document.getElementById('menuServicos');
const listaServicos = document.getElementById('listaServicos');
const container = document.getElementById('dropdownContainer');

// Abre ao clicar
btnServicos.addEventListener('click', (e) => {
    e.stopPropagation();
    listaServicos.classList.toggle('show');
});

// Fecha ao tirar o mouse da área do menu
container.addEventListener('mouseleave', () => {
    listaServicos.classList.remove('show');
});

// Fecha ao clicar fora
window.addEventListener('click', (e) => {
    if (!btnServicos.contains(e.target)) {
        listaServicos.classList.remove('show');
    }
});

// Efeito no Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.padding = '10px 8%';
        nav.style.background = '#000';
    } else {
        nav.style.padding = '15px 8%';
        nav.style.background = 'rgba(15, 15, 15, 0.98)';
    }
});
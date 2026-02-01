const dropdownContainer = document.getElementById('dropdownContainer');
const listaServicos = document.getElementById('listaServicos');
const btnServicos = document.getElementById('btnServicos');

// Abre ao clicar
btnServicos.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    listaServicos.classList.toggle('show');
});

// Fecha ao sair de toda a área (botão + lista)
dropdownContainer.addEventListener('mouseleave', function() {
    listaServicos.classList.remove('show');
});

// Fecha ao clicar fora
document.addEventListener('click', function(e) {
    if (!dropdownContainer.contains(e.target)) {
        listaServicos.classList.remove('show');
    }
});

// Header dinâmico no scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000000';
        navbar.style.padding = '12px 8%';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '20px 8%';
    }
});
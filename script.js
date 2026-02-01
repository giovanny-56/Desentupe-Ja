// Efeito de mudança de cor no header ao rolar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 10%';
        navbar.style.background = '#ffffff';
    } else {
        navbar.style.padding = '20px 10%';
    }
});

// Revelar elementos ao rolar (animação simples)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
const menuServicos = document.getElementById('menuServicos');
const listaServicos = document.getElementById('listaServicos');
const dropdownContainer = document.querySelector('.dropdown');

// Abrir/Fechar ao clicar no botão "Serviços"
menuServicos.addEventListener('click', function(e) {
    e.stopPropagation();
    listaServicos.classList.toggle('show');
});

// Fechar automaticamente quando o mouse sai da área do menu (Evita ficar travado)
dropdownContainer.addEventListener('mouseleave', function() {
    listaServicos.classList.remove('show');
});

// Fechar se clicar em qualquer outro lugar da tela
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (listaServicos.classList.contains('show')) {
            listaServicos.classList.remove('show');
        }
    }
}
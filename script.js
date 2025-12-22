// Efeito de encolher o Header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Sistema de FAQ Interativo (Acordeão)
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('i');
        
        // Verifica se já está aberto
        const isOpen = answer.style.display === 'block';
        
        // Fecha todos antes de abrir o novo (opcional, para organização)
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question i').forEach(i => i.classList.replace('fa-minus', 'fa-plus'));

        // Abre ou fecha o clicado
        if (!isOpen) {
            answer.style.display = 'block';
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    });
});

// Suavização de links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

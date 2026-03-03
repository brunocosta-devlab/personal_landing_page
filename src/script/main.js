// Seleciona os elementos
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

// Função para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Impede o scroll do corpo quando o menu está aberto
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
});

// Fecha o menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
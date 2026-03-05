// Seleciona os elementos
const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

// Função para abrir/fechar o menu
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Impede o scroll do corpo quando o menu está aberto
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
});

// Fecha o menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
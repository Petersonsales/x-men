document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });

        card.addEventListener('click', () => {
            alert(`Você clicou no personagem: ${card.querySelector('h3').textContent}`);
        });
    });
});

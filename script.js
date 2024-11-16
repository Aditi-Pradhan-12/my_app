document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Adventurous spirit with a passion for exploring new places.",
        "Enjoys learning about different cultures and trying new cuisines.",
        "Independent and curious traveler eager for new experiences."
    ];

    const factDisplay = document.getElementById('factDisplay');
    const generateFactButton = document.getElementById('generateFact');

    generateFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });
});

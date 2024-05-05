const searchInput = document.getElementById('searchInput');
const buttonList = document.getElementById('buttonList');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    const buttons = Array.from(buttonList.getElementsByTagName('button'));
    
    buttons.sort((buttonA, buttonB) => {
        const textA = buttonA.textContent.trim().toLowerCase();
        const textB = buttonB.textContent.trim().toLowerCase();

        if (textA.includes(searchTerm) && !textB.includes(searchTerm)) {
            return -1;
        } else if (!textA.includes(searchTerm) && textB.includes(searchTerm)) {
            return 1;
        } else {
            return 0;
        }
    });

    while (buttonList.firstChild) {
        buttonList.removeChild(buttonList.firstChild);
    }

    buttons.forEach(button => {
        buttonList.appendChild(button.parentNode);
    });
});

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const firstButton = buttonList.querySelector('button');
        if (firstButton) {
            firstButton.focus();
        }
    }
});

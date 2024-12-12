document.addEventListener("DOMContentLoaded", () => {

    const progressBar = document.getElementById("progressBar");
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
        } else {
            progress += 1;
            progressBar.style.width = `${progress}%`;
        }
    }, 100); 

    // Tips Rotator
    const tips = [
        "Tip 1: Press F to interact.",
        "Tip 2: Use the map to navigate.",
        "Tip 3: Join our Discord for updates.",
        "Tip 4: Customize your character at the shop.",
        "Tip 5: Remember to save your progress!",
        "Tip 6: Respect the rules for better gameplay.",
        "Tip 7: Try out new activities available in-game."
    ];

    let tipIndex = 0;
    const tipElement = document.getElementById("tips");
    setInterval(() => {
        tipElement.textContent = tips[tipIndex];
        tipIndex = (tipIndex + 1) % tips.length;
    }, 4000); 

    //Keybinds
    const keybinds = [
        { key: 'W', action: 'Move Forward' },
        { key: 'A', action: 'Move Left' },
        { key: 'S', action: 'Move Back' },
        { key: 'D', action: 'Move Right' },
        { key: 'F', action: 'Interact' },
        { key: 'G', action: 'Open Inventory' },
        { key: 'H', action: 'Honk Horn' }
    ];

    const keybindsContainer = document.querySelector('.keybinds');
    keybinds.forEach(keybind => {
        const keybindSpan = document.createElement('span');
        keybindSpan.textContent = `${keybind.key} - ${keybind.action}`;
        keybindsContainer.appendChild(keybindSpan);
    });
});


window.addEventListener('message', function(event) {
    if (event.data.type === 'setPlayerName') {
        document.getElementById('playerName').textContent = event.data.playerName;
    }
});

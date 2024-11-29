function toggleBackground() {
    const body = document.body;
    const currentBg = body.style.backgroundColor;
    
    if (currentBg === 'white' || currentBg === '#ffffff') {
        body.style.backgroundColor = ''; // Reset to original color
    } else {
        body.style.backgroundColor = 'white';
    }
}

// Add background toggle button when page loads
window.addEventListener('DOMContentLoaded', () => {
    const bgToggle = document.createElement('button');
    bgToggle.className = 'bg-toggle';
    bgToggle.innerHTML = 'Toggle Background';
    bgToggle.onclick = toggleBackground;
    bgToggle.style.position = 'fixed';
    bgToggle.style.bottom = '20px';
    bgToggle.style.right = '20px';
    bgToggle.style.padding = '10px';
    bgToggle.style.borderRadius = '5px';
    bgToggle.style.cursor = 'pointer';
    document.body.appendChild(bgToggle);
});

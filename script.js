const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');
const response = document.getElementById('response');

// Event listener for the "No" button to swap positions
noButton.addEventListener('mouseenter', () => {
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);

    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);
    } else {
        cta.insertBefore(yesButton, noButton);
    }
});

// Event listener for the "Yes" button to show "I love you too" message
yesButton.addEventListener('click', () => {
    response.textContent = 'I love you too ❤️';
    response.style.color = 'red';  // Optional: Make the message stand out
    response.style.fontSize = '24px';  // Optional: Adjust font size
});

💖 Romantic Proposal Page by Abhishek Mishra
A playful and romantic HTML, CSS, and JavaScript web page designed to ask the big question: "Will you be my Girlfriend?" This page features a beautiful background, heart emojis, interactive buttons, and a fun twist with a little JavaScript magic to make the "No" button move when hovered over.

📝 Project Overview
This project is an engaging and heartfelt proposal web page that plays a little trick on the user. The "No" button shifts positions when hovered over, making it hard to reject the proposal! The page is designed to be responsive, interactive, and elegant with soft romantic colors, smooth hover effects, and heart emojis.

🚀 Features
Romantic Design: The page is styled with a soft, romantic background, heart emojis, and elegant fonts.
Interactive Buttons: The "Yes" and "No" buttons have hover effects, and the "No" button moves when the user tries to hover over it, creating a fun interaction.
JavaScript: A simple script that adds a playful element to the "No" button when the mouse hovers over it.
Responsive: The layout is fully responsive and works on both desktop and mobile devices.
Heart Emoji Integration: 💖 Hearts are used in the text to emphasize the romantic theme.
🛠️ Technologies Used
HTML5: Structure of the web page.
CSS3: External styles for fonts, buttons, and background.
JavaScript: Logic to make the "No" button move when hovered over.
Google Fonts: Using Dancing Script and Poppins for typography.
📁 Project Structure
graphql
Copy code
romantic-proposal/
├── index.html          # The main HTML file
├── styles.css          # External CSS for styling
├── script.js           # JavaScript for interactive behavior
└── README.md           # Project documentation
🎨 How to Use
Clone the repository or download the project files.

bash
Copy code
git clone https://github.com/abhishek-mishra/romantic-proposal.git
Open index.html in your browser to view the page.

Customize the text, background, or behavior as per your preference.

🖼️ Screenshots
Desktop View:


Mobile View:


💻 JavaScript Fun
The script makes the "No" button swap positions with the "Yes" button when hovered over, making it a playful challenge to say "No". Here's the key part of the JavaScript in script.js:

js
Copy code
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');

noButton.addEventListener('mouseenter', () => {
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);

    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);
    } else {
        cta.insertBefore(yesButton, noButton);
    }
});
This simple code creates a dynamic experience, swapping the buttons based on their position when the mouse hovers over the "No" button.

🎨 Customization
You can easily customize:

Background Image: Change the image URL in styles.css to something more personal.
Text: Modify the headings in index.html.
Button Colors: Adjust the button styles in styles.css.
🖥️ Development Setup
Open the project in your favorite code editor (VSCode, Sublime, etc.).
Modify the index.html, styles.css, and script.js to personalize the experience.
Open index.html in your browser to see the changes.
📄 License
This project is licensed under the MIT License. Feel free to use and customize it for personal or educational purposes.

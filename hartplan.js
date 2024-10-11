const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdown-menu');

const toggleMenu = () => {
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
};

const checkWidth = () => {
    if (window.innerWidth > 768) {
        dropdownMenu.style.display = 'none';
    }
};

hamburger.addEventListener('click', toggleMenu);
window.addEventListener('resize', checkWidth);

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('#hamburger')) {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
});

// home page background image change


const backgrounds = [
    'url("./Images/Homepage.jpg")',
    'url("./Images/pexels-19x14-8478237.jpg")',
    'url("./Images/pexels-anastasia-shuraeva-8470886.jpg  ")'
];




const headings = [
    'Welcome to Hartplan',
    'Explore Our services',
    'Join Us Today'
];

const texts = [
    'Find out what makes us unique.',
    'Discover our amazing services and offers.',
    'Get in touch to learn more about us.'
];

const buttons = [
    { text: 'Learn More', href: './hartplan.html' },
    { text: 'View Services', href: './services.html' },
    { text: 'Contact Us', href: './contactus.html' }
];

let currentIndex = 0;

function switchContent() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.getElementById('background').style.backgroundImage = backgrounds[currentIndex];
    document.getElementById('heading').textContent = headings[currentIndex];
    document.getElementById('text').textContent = texts[currentIndex];
    
    const button = document.getElementById('button');
    button.textContent = buttons[currentIndex].text;
    button.href = buttons[currentIndex].href;
}

// Switch content every 5 seconds
setInterval(switchContent, 5000);  // 5000 milliseconds = 5 seconds

// Initial load
switchContent();

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



  
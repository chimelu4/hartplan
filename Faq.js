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

/*
document.querySelectorAll('.faq h3').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        const sign = item.querySelector('.dropdown-sign');
        const isOpen = content.style.display === 'block';
        document.querySelectorAll('.faq p').forEach(p => p.style.display = 'none');
        document.querySelectorAll('.dropdown-sign').forEach(s => s.textContent = '>');
        content.style.display = isOpen ? 'none' : 'block';
        sign.textContent = isOpen ? '>' : 'v';
    });
});

*/

document.querySelectorAll('.faq h3').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        const img = item.querySelector('.dropdown-sign img');
        const isOpen = content.style.display === 'block';

        // Close all other content sections
        document.querySelectorAll('.faq p').forEach(p => p.style.display = 'none');
        
        // Reset all dropdown images to the closed state
        document.querySelectorAll('.dropdown-sign img').forEach(i => i.src = './Images/icons8-chevron-right-50.png');

        // Toggle the current content section
        content.style.display = isOpen ? 'none' : 'block';
        
        // Switch the image source based on the dropdown state
        img.src = isOpen ? './Images/icons8-chevron-right-50.png' : './Images/icons8-chevron-down-50.png';
    });
});

//toggle for notification menu

const notification = document.querySelector('.notification');
const popup = document.querySelector('.popup');

// Function to toggle the popup visibility
const togglePopup = () => {
    popup.classList.toggle('show');
};

// Event listener for clicking the notification icon
notification.addEventListener('click', () => {
    togglePopup();
});

// Event listener to close the popup when clicking outside
document.addEventListener('click', (event) => {
    if (!notification.contains(event.target) && !popup.contains(event.target)) {
        popup.classList.remove('show');
    }
});


//toggle for profile menu

const profile = document.querySelector('.profile');
const open_profile = document.querySelector('.open_profile');

// Function to toggle the popup visibility
const toggleopen_profile= () => {
    open_profile.classList.toggle('show');
};

// Event listener for clicking the notification icon
profile.addEventListener('click', () => {
    toggleopen_profile();
});

// Event listener to close the popup when clicking outside
document.addEventListener('click', (event) => {
    if (!profile.contains(event.target) && !open_profile.contains(event.target)) {
        open_profile.classList.remove('show');
    }
});


//toggle for Trail menu
const section = document.querySelector('.trial');
const svgIcon = document.querySelector('.cancel-option');

// Function to toggle the visibility of the section
const toggleSectionVisibility = () => {
    section.classList.toggle('invisible');
};

// Event listener for clicking the SVG icon
svgIcon.addEventListener('click', () => {
    toggleSectionVisibility();
});

const circleSvg = document.querySelector('.circle-svg');
const helpCus = document.querySelector('.help_cus');


// Collapse crad for account setup
const arrowIcon = document.getElementById('arrowIcon');
const setupGuide = document.getElementById('setupGuide');

arrowIcon.addEventListener('click', function() {
    setupGuide.classList.toggle('hide-card');
});

document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle-click');
    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.toggle('hide-content');
            }
        });
    });
});









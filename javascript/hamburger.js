const menuBtn = document.querySelector('.hamburger-btn');
const moreInfoDropdown = document.querySelector('.dropdown-content');

function handleClick() {
    moreInfoDropdown.classList.toggle('show')
}

menuBtn.addEventListener('click', handleClick);
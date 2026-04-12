const menuBtn = document.querySelector('.hamburger-btn');
const dropdown = document.querySelector('.dropdown-content');

function handleClick() {
    dropdown.classList.toggle('show')
}

menuBtn.addEventListener('click', handleClick);
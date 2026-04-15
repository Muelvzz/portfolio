const moreInfoBtn = document.querySelector('.more-info-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const dropdown = document.querySelector('.more-info-dropdown');

const eduBtn = document.querySelector('.edu-btn')
const leadBtn = document.querySelector('.lead-btn')
const certBtn = document.querySelector('.cert-btn')

const educationContainer = document.querySelector('.education-container')
const leadershipContainer = document.querySelector('.leadership-container')
const certificationContainer = document.querySelector('.certification-container')

function handleEduc() {
    educationContainer.classList.add('show')
    leadershipContainer.classList.remove('show')
    certificationContainer.classList.remove('show')
}

function handleLead() {
    educationContainer.classList.remove('show')
    leadershipContainer.classList.add('show')
    certificationContainer.classList.remove('show')
}

function handleCert() {
    educationContainer.classList.remove('show')
    leadershipContainer.classList.remove('show')
    certificationContainer.classList.add('show')
}

function handleClick() {
    const isOpen = dropdown.classList.contains('show');
    if (isOpen) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');

        educationContainer.classList.add('show');
        leadershipContainer.classList.remove('show');
        certificationContainer.classList.remove('show');
    }
}

function closeModal() {
    dropdown.classList.remove('show')
}

moreInfoBtn.addEventListener('click', handleClick);
cancelBtn.addEventListener('click', closeModal);

eduBtn.addEventListener('click', handleEduc);
leadBtn.addEventListener('click', handleLead);
certBtn.addEventListener('click', handleCert);
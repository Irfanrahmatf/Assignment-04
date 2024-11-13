// Profile data object
const profileData = {
    name: 'Your Name',
    role: 'Front End Developer',
    availability: 'Full Time',
    age: 25,
    location: 'Jakarta, Indonesia',
    experience: 3,
    email: 'developer@example.com'
};

const profileElements = {
    name: document.querySelector('#profileName'),
    role: document.querySelector('#profileRole'),
    availability: document.querySelector('#profileAvailability'),
    age: document.querySelector('#profileAge'),
    location: document.querySelector('#profileLocation'),
    experience: document.querySelector('#profileExperience'),
    email: document.querySelector('#profileEmail')
};

const updateForm = document.querySelector('#updateForm');

function updateProfileDisplay() {
    for (const [key, element] of Object.entries(profileElements)) {
        if (element) {
            element.textContent = profileData[key];
        }
    }
}

function saveToLocalStorage() {
    localStorage.setItem('profileData', JSON.stringify(profileData));
}

function loadFromLocalStorage() {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
        Object.assign(profileData, JSON.parse(storedData));
        updateProfileDisplay();
    }
}

// Form submission
updateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    for (const key of Object.keys(profileElements)) {
        const inputElement = document.querySelector(`#${key}`);
        if (inputElement) {
            profileData[key] = inputElement.value;
        }
    }
    updateProfileDisplay();
    saveToLocalStorage();
    this.reset();
});

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

updateProfileDisplay();
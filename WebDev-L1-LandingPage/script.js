// --- DOM Elements & State Infrastructure ---
const modal = document.getElementById('applicationModal');
const trackSelect = document.getElementById('selectedTrack');
const form = document.getElementById('internshipForm');
const navLinks = document.getElementById('navLinks');
const burgerMenu = document.getElementById('burgerMenu');
const themeToggle = document.getElementById('themeToggle');
const closeModalBtn = document.getElementById('closeModalBtn');

// Project Data Object Store
const trackData = {
    'Web Development': {
        title: "Web Development Project Track",
        desc: "Get comprehensive experience constructing structural interfaces and highly semantic designs.",
        tasks: [
            "Task 1: Landing Page UI layout building using basic HTML5 and clean modern CSS structures.",
            "Task 2: Build a Personal Portfolio Web App featuring modular components and structural grid setups.",
            "Task 3: Dynamic Calculator Engine deployment parsing programmatic expressions using JavaScript modules."
        ]
    },
    'Data Science': {
        title: "Data Science Project Track",
        desc: "Examine complex data pipelines and build robust intelligent evaluation engines.",
        tasks: [
            "Task 1: Iris Flower Classification mapping clustering matrices with python libraries.",
            "Task 2: Unemployment Data Analysis parsing multi-layered parameters and visual graphing trends.",
            "Task 3: Car Price Prediction utilizing regression trees and feature weight normalization."
        ]
    },
    'Java Development': {
        title: "Java Development Project Track",
        desc: "Design clean backend logic compilation steps and programmatic terminal structures.",
        tasks: [
            "Task 1: Online Examination processing engine tracking secure dynamic session states.",
            "Task 2: Digital Reservation Matrix implementing user verification loops.",
            "Task 3: ATM Interface simulation processing real-time relational variable operations."
        ]
    },
    'Android Development': {
        title: "Android Development Project Track",
        desc: "Architect reactive system layouts and component lifecycles for mobile environments.",
        tasks: [
            "Task 1: Standard Unit Converter layout utilizing modular constraint design views.",
            "Task 2: Smart StopWatch Tracker utilizing operational background execution thread rules.",
            "Task 3: Interactive Quiz App structuring data bundle persistence parameters across system displays."
        ]
    }
};

// --- Theme Toggling Setup ---
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    
    if (targetTheme === 'dark') {
        themeToggle.innerHTML = '☀️ <span>Light Mode</span>';
    } else {
        themeToggle.innerHTML = '🌙 <span>Dark Mode</span>';
    }
}
themeToggle.addEventListener('click', toggleTheme);

// --- Mobile Navigation Menu Toggle ---
function toggleMenu() {
    if (window.innerWidth <= 768) {
        navLinks.classList.toggle('active');
    }
}
burgerMenu.addEventListener('click', toggleMenu);

// Close menu when clicking link items on mobile layout view
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// --- Dynamic Task Switching Setup ---
function switchTaskTab(trackName, btnElement) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const data = trackData[trackName];
    document.getElementById('taskTrackTitle').textContent = data.title;
    document.getElementById('taskTrackDesc').textContent = data.desc;

    const listContainer = document.getElementById('taskListItems');
    listContainer.innerHTML = ''; // Clear container bounds
    
    data.tasks.forEach(taskText => {
        const li = document.createElement('li');
        li.textContent = taskText;
        listContainer.appendChild(li);
    });
}

// Bind clicks to task explorer tabs dynamically
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const trackName = this.getAttribute('data-track');
        switchTaskTab(trackName, this);
    });
});

// --- Modal System Window Open/Close Configuration ---
function openApplication(domainName) {
    modal.style.display = 'flex';
    trackSelect.value = domainName;
}

function closeApplication() {
    modal.style.display = 'none';
    form.reset();
}

// Add triggers for all individual card buttons
document.querySelectorAll('.apply-now-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const domain = this.getAttribute('data-domain');
        openApplication(domain);
    });
});

closeModalBtn.addEventListener('click', closeApplication);

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeApplication();
    }
});

// --- Application Registration Form Submit ---
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('fullName').value;
    const chosenDomain = trackSelect.value;
    
    alert(`Success! Thank you, ${name}. Your application parameters for the ${chosenDomain} track have been securely collected.`);
    closeApplication();
});

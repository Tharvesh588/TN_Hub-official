const courseContent = {
    'HTML': {
        modules: [
            ['Module 1', 'Introduction to HTML'],
            ['Module 2', 'HTML Tags and Attributes'],
            ['Module 3', 'HTML Editors'],
            ['Module 4', 'Creating First HTML'],
            ['Module 5', 'Lorem Ipsum - Context'],
            ['Module 6', 'Creating Forms and Tables'],
            ['Module 7', 'Inspecting HTML for Perticular Webpages'],
            ['Module 8', 'Complete HTML Project']
        ],
        startLink: 'https://html.com/'
    },
    'CSS': {
        modules: [
            ['Module 1', 'Introduction to CSS'],
            ['Module 2', 'Selectors and Syntax'],
            ['Module 3', 'CSS Linking Method'],
            ['Module 4', 'Creating style.css'],
            ['Module 5', 'What Can CSS Do?'],
            ['Module 7', 'Complete CSS Project']
        ],
        startLink: 'https://yourwebsite.com/css-course'
    },
    'Bootstrap': {
        modules: [
            ['Module 1', 'Installing Bootstrap'],
            ['Module 2', 'Typography'],
            ['Module 3', 'Background Colors'],
            ['Module 4', 'Simple Blog Layout'],
            ['Module 5', 'Padding'],
            ['Module 6', 'Adding Colors'],
            ['Module 7', 'Flexbox Layout']
            ['Module 8', 'Responsive Design with Bootstrap'],
            ['Module 9', 'Flexbox Layout (Continued)'],
            ['Module 10', 'Grid System'],
            ['Module 11', 'Navigation Bar']
            ['Module 12', 'Forms'],
            ['Module 13', 'Column for Large Devices'],
            ['Module 14', 'Fixed and Sticky Header']
            ['Module 15', 'Height and Width Classes']
        ],
        startLink: 'https://youtu.be/AS5NRIo_Vyo?si=A8I5cN71cZwc2Uq5'
    },
    'Python': {
        modules: [
            ['Module 1', 'Python Basics'],
            ['Module 2', 'Quick Commands'],
            ['Module 3', 'More Stuff with File Handling'],
            ['Module 4', 'Python Functions'],
            ['Module 5', 'Python Classes'],
            ['Module 6', 'Python Modules'],
            ['Module 7', 'Basic Python Projects for Resume'],
            ['Module 8', 'Uplodad Python Project to Github']
        ],
        startLink: 'Python/day1.html'
    },
    /*'AI Python': {
        modules: [
            ['Module 1', 'Python AI Basics'],
            ['Module 2', 'Libraries - Part 1'],
            ['Module 3', 'Libraries - Part 2'],
            ['Module 4', 'Creating ML Models'],
            ['Module 5', 'Complete AI Project']
        ],
        startLink: 'https://yourwebsite.com/ai-python-course'
    },
    'ML Python': {
        modules: [
            ['Module 1', 'Python ML Basics'],
            ['Module 2', 'Libraries - Part 1'],
            ['Module 3', 'Libraries - Part 2'],
            ['Module 4', 'Creating Models'],
            ['Module 5', 'Complete ML Project']
        ],
        startLink: 'https://yourwebsite.com/ml-python-course'
    },
    'Frontend Dev': {
        modules: [
            ['Module 1', 'Intro to Front-End Dev'],
            ['Module 2', 'Basic HTML'],
            ['Module 3', 'Basic CSS'],
            ['Module 4', 'JavaScript Basics'],
            ['Module 5', 'Complete Frontend Project']
        ],
        startLink: 'https://yourwebsite.com/frontend-dev-course'
    },
    'Flask Dev': {
        modules: [
            ['Module 1', 'Introduction to Flask'],
            ['Module 2', 'Creating Your First App'],
            ['Module 3', 'Flask Templates'],
            ['Module 4', 'Complete Flask Project']
        ],
        startLink: 'https://yourwebsite.com/flask-dev-course'
    },
    'Arduino': {
        modules: [
            ['Module 1', 'Introduction to Arduino'],
            ['Module 2', 'Setting Up'],
            ['Module 3', 'Creating Simple Projects'],
            ['Module 4', 'Complete Arduino Project']
        ],
        startLink: 'https://yourwebsite.com/embedded-arduino-course'
    }*/
};

function openPopup(course) {
    document.getElementById('course-title').innerText = course + " Course - Table of Contents";

    const contentTable = document.getElementById('course-content');
    contentTable.innerHTML = '';  // Clear previous content

    courseContent[course].modules.forEach((module) => {
        const row = contentTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = module[0];
        cell2.textContent = module[1];
    });

    // Set the link for the "Start Learning" button
    document.getElementById('start-learning-link').href = courseContent[course].startLink;

    document.getElementById('popup').style.display = "flex";
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}

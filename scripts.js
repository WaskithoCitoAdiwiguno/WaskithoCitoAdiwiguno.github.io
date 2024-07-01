document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const response = await fetch('https://130.162.195.228/mhs714220019/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            console.log(response);
            if (response.ok) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Login failed');
            }
        });
    }

    const coursesContainer = document.getElementById('courses-container');

    if (coursesContainer) {
        fetchCourses();
    }

    async function fetchCourses() {
        const response = await fetch('https://130.162.195.228/mhs714220019/courses');
        const courses = await response.json();

        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            courseElement.innerHTML = `
                <h2>${course.course_name}</h2>
                <p>Teacher: ${course.teacher}</p>
            `;
            coursesContainer.appendChild(courseElement);
        });
    }
});

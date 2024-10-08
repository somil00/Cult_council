document.addEventListener('DOMContentLoaded', function() {
    fetch('data/team.json')
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.getElementById('team-members');
            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('team-member');
                memberDiv.innerHTML = `<h3>${member.name}</h3><p>${member.position}</p>`;
                teamContainer.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error loading team data:', error));
});

// Highlight active section in the navigation bar
const sections = document.querySelectorAll('.section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });
});

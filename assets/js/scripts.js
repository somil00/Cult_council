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

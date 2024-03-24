document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("members-display");
    const membersData = fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            data.members.forEach(member => {
                const memberCard = document.createElement("div");
                memberCard.classList.add("card");
                memberCard.innerHTML = `
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                    <!-- Add more details here as needed -->
                    <img src="${member.image}" alt="${member.name} Logo">
                `;
                display.appendChild(memberCard);
            });
        })
        .catch(error => console.error("Error fetching members data:", error));
});

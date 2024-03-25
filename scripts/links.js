document.addEventListener('DOMContentLoaded', function () {
    const baseURL = "https://raulsouza7.github.io/wdd230/"; // Use your project's base URL
    const linksURL = `${baseURL}data/links.json`;

    async function getLinks() {
        try {
            const response = await fetch(linksURL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayLinks(data.weeks);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    function displayLinks(weeks) {
        const activitiesSection = document.querySelector('.left-card ul');
        activitiesSection.innerHTML = ''; // Clear existing content

        weeks.forEach(week => {
            const weekItem = document.createElement('li');
            weekItem.innerHTML = `${week.week}: `; // Set the week title

            week.links.forEach((link, index) => {
                // Handle link creation
                const anchor = document.createElement('a');
                anchor.textContent = link.title; // Set link title

                // Determine if the URL is absolute or relative
                anchor.href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;

                // Open external links in a new tab, adding rel for security
                if (link.url.startsWith('http')) {
                    anchor.target = '_blank';
                    anchor.rel = 'noopener noreferrer';
                }

                weekItem.appendChild(anchor); // Append the anchor to the list item

                // Append separators between links, but not after the last link
                if (index < week.links.length - 1) {
                    weekItem.appendChild(document.createTextNode(' | '));
                }
            });

            activitiesSection.appendChild(weekItem); // Add the list item to the UL
        });
    }

    getLinks(); // Fetch and display links
});

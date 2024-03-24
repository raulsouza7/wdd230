// Define the base URL for your GitHub Pages repository
const baseURL = "https://raulsouza7.github.io/wdd230/";

// Define the URL for the JSON data file
const linksURL = `${baseURL}data/links.json`;

// Function to fetch and display dynamic activity links
async function getLinks() {
    try {
        // Fetch data from the JSON file
        const response = await fetch(linksURL);
        if (response.ok) {
            // Convert response to JSON
            const data = await response.json();
            // Display activity links
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to dynamically build and display activity links in the learning activities section
function displayLinks(weeks) {
    const learningActivitiesContainer = document.getElementById('learning-activities-container');
    learningActivitiesContainer.innerHTML = ''; // Clear the existing content in the learning activities container

    weeks.forEach(week => {
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        learningActivitiesContainer.appendChild(weekTitle);

        const weekLinks = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            weekLinks.appendChild(listItem);
        });

        learningActivitiesContainer.appendChild(weekLinks);
    });
}

// Call the function to fetch and display activity links
getLinks();

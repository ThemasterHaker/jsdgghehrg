// Define a list of websites to search within
const websites = [
  { name: "Example Site 1", url: "https://www.example.com" },
  { name: "Example Site 2", url: "https://www.example2.com" },
  // Add more websites as needed
];

// Function to perform search
function search() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (query === '') {
    resultsDiv.innerHTML = '<p>Please enter a search query</p>';
    return;
  }

  let found = false;
  websites.forEach(site => {
    // Simulating a search on each website
    // In a real-world scenario, you would need to implement web scraping or use APIs to search within websites
    // For simplicity, we'll just check if the query appears in the website's name
    if (site.name.toLowerCase().includes(query)) {
      resultsDiv.innerHTML += `<p><a href="${site.url}" target="_blank">${site.name}</a></p>`;
      found = true;
    }
  });

  if (!found) {
    resultsDiv.innerHTML = '<p>No results found</p>';
  }
}

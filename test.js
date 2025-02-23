// test.js
// This interactive test program lets the user input commands to either filter by class and rarity or perform a search.
// It then calls the Brawlers Microservice API and prints the returned JSON data.

const axios = require('axios');
const readline = require('readline');

// Create readline interface for interactive user input.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Base URL for the microservice.
const BASE_URL = 'http://localhost:3000/brawlers';

// Function to prompt the user for input and handle commands.
function promptUser() {
  rl.question(
    "\nEnter a command ('filter', 'search', or 'exit'): ",
    (command) => {
      if (command.toLowerCase() === 'exit') {
        console.log("Exiting test program.");
        rl.close();
        return;
      } else if (command.toLowerCase() === 'filter') {
        // If the user wants to filter by type and rarity, ask for those values.
        rl.question("Enter brawler class (or leave blank for none): ", (brawlerClass) => {
          rl.question("Enter rarity (or leave blank for none): ", (rarity) => {
            // Build URL with query parameters as needed.
            let url = BASE_URL;
            let queryParams = [];
            if (brawlerClass.trim() !== '') {
              queryParams.push(`type=${encodeURIComponent(brawlerClass.trim())}`);
            }
            if (rarity.trim() !== '') {
              queryParams.push(`rarity=${encodeURIComponent(rarity.trim())}`);
            }
            if (queryParams.length > 0) {
              url += '?' + queryParams.join('&');
            }
            // Make API call with the built URL.
            axios.get(url)
              .then(response => {
                console.log("\n--- Filter Results ---");
                console.log("URL Requested: " + url);
                console.log("Expected: Array of brawler objects matching the filter.");
                console.log("Received:");
                console.log(JSON.stringify(response.data, null, 2));
                promptUser(); // Prompt for the next command.
              })
              .catch(error => {
                console.error("Error fetching filtered data:", error.message);
                promptUser();
              });
          });
        });
      } else if (command.toLowerCase() === 'search') {
        // If the user wants to search by name.
        rl.question("Enter Brawler Name: ", (term) => {
          // Build URL for search.
          const url = `${BASE_URL}?search=${encodeURIComponent(term.trim())}`;
          axios.get(url)
            .then(response => {
              console.log("\n--- Search Results ---");
              console.log("URL Requested: " + url);
              console.log("Expected: Array of brawler objects containing the search term in their name.");
              console.log("Received:");
              console.log(JSON.stringify(response.data, null, 2));
              promptUser(); // Prompt for the next command.
            })
            .catch(error => {
              console.error("Error fetching search data:", error.message);
              promptUser();
            });
        });
      } else {
        console.log("Invalid command. Please enter 'filter', 'search', or 'exit'.");
        promptUser();
      }
    }
  );
}

// Start the interactive prompt.
console.log("Interactive Test Program for the Brawlers Microservice API");
promptUser();
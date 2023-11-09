// Function to fetch and extract emails from a JSON file
function extractEmailsFromJSONFile() {
    fetch('data.json') // Replace 'data.json' with the path to your JSON file
        .then((response) => response.json())
        .then((data) => {
            // Extract email addresses from the JSON data
            const emails = data.map((item) => item.email);

            // Display the extracted email addresses
            console.log('Extracted Email Addresses:');
            emails.forEach((email) => {
                console.log(email);
            });
        })
        .catch((error) => {
            console.error('Error fetching JSON file:', error);
        });
}

// Call the function to start the process
extractEmailsFromJSONFile();

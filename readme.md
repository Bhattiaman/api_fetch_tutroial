# React code for fetch data

```import React, { useEffect } from 'react';
import axios from 'axios';

const ApiFetch = () => {
  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',  // Ensure you are using the correct URL
    headers: {
      'x-rapidapi-key': 'ec8a1aeb8bmshd9e0d4352a55b6ap122c23jsn4207f0074b62',
      'x-rapidapi-host': 'quotes15.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Start Learning to Fetch Data from API</h1>
    </>
  );
};

export default ApiFetch;

```

# Profile Card

This is a simple web page that displays a user profile card. The profile data is dynamically fetched from the GitHub API.


# Fetch API Example

This is a basic example of how to use the `fetch` API with `async/await` to retrieve data from a GitHub user profile and log the data to the console.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Example of using async/await and fetch API

        // Function to fetch data from GitHub API
        async function getData() {
            // Sending a GET request to the GitHub API
            let response = await fetch('https://api.github.com/users/bhattiaman');
            
            // Parsing the response as JSON
            let data = await response.json();
            
            // Logging the fetched data to the console
            console.log(data);
            
            // Logging the response object itself
            console.log(response);  
        }

        // Calling the function to execute the fetch request
        getData(); 

        // Scenario:
        // 1. Prepare the URL / API endpoint (synchronous)
        // 2. Use 'await' to fetch data (asynchronous network call)
        // 3. Process the fetched data (synchronous)
    </script>
</body>
</html>


## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Card</title>
    <!-- Link to external stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="card">
    <div class="profile-image">
        <img id="profile-image" src="https://via.placeholder.com/150" alt="Profile Image">
    </div>
    <div class="profile-details">
        <h2 class="name" id="name">John Doe</h2>
        <p class="followers" id="followers">Followers: 500</p>
        <p class="bio" id="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <p class="email" id="email">Email: johndoe@example.com</p>
    </div>
</div>

<script>
    const requestUrl = 'https://api.github.com/users/bhattiaman';
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', requestUrl);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            
            // Dynamically update the profile card with the fetched data
            document.getElementById('name').textContent = data.name || data.login;
            document.getElementById('followers').textContent = 'Followers: ' + data.followers;
            document.getElementById('bio').textContent = data.bio || 'No bio available';
            document.getElementById('email').textContent = data.email || 'No public email';
            document.getElementById('profile-image').src = data.avatar_url || 'No public email';
        } else if (xhr.readyState === 4) {
            console.error('Error: Unable to fetch data');
        }
    };
    
    xhr.send();
</script>

</body>
</html>
```

### Explanation:
- Markdown uses triple backticks (```) for code blocks. Inside this, I kept your HTML code intact, which will allow the reader to view your code in a structured way.
- Headings (`#`, `##`, etc.) are used to break sections down (e.g., "Profile Card", "HTML Structure", "Usage").
- Inline comments and explanations are added in appropriate sections to describe the functionality.

This format is commonly used in `README.md` files to explain how the code works and how to use it.

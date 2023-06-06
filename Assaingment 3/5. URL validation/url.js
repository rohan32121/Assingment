// 5. URL validation.

// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.

function validateURL(url) {
    var pattern = /^https?:\/\/[a-zA-Z0-9_\-]+(\.[a-zA-Z]+)+$/;
    if (pattern.test(url)) {
      console.log(`The URL '${url}' is valid.`);
    } else {
      console.log(`The URL '${url}' is not valid.`);
    }
  }
  
  
  validateURL("http://www.example.com");  
  validateURL("https://openai.com");       
  validateURL("https://www.example.com");  
  validateURL("http://123.456");         
  validateURL("https://example");          
  validateURL("ftp://www.example.com");      
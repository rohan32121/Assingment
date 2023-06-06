// 6. LinkedIn Profile URL Validator.

// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.


// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or

function validateLinkedInURL(url) {
    var pattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (pattern.test(url)) {
      return "Valid LinkedIn profile URL";
    } else {
      return "Invalid LinkedIn profile URL";
    }
  }
  
  // Example usage
  console.log(validateLinkedInURL("https://www.linkedin.com/in/rohan")); 
  console.log(validateLinkedInURL("https://www.linkedin.com/in/priti")); 
  console.log(validateLinkedInURL("https://www.linkedin.com/in/kishor")); 
  console.log(validateLinkedInURL("https://www.linkedin.com/in/kiran/")); 
  
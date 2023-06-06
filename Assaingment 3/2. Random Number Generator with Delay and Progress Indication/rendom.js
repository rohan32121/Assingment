// 2. Random Number Generator with Delay and Progress Indication:

// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

function generateRandomNumber(delay) {
    function displayCountdown(seconds) {
      for (let i = seconds; i > 0; i--) {
        setTimeout(() => {
          console.log(`Generating random number in ${i} seconds...`);
        }, (seconds - i) * 1000);
      }
    }
  
    function generateNumber() {
      displayCountdown(delay);
      setTimeout(() => {
        console.log("Generating random number...");
        const randomNum = Math.floor(Math.random() * 100) + 1; 
        console.log(`Random number generated: ${randomNum}`);
      }, delay * 1000);
    }
  
    generateNumber();
  }
  
  let delay = 3; 
  generateRandomNumber(delay);
  
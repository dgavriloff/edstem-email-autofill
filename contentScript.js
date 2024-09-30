window.onload = () => {
  chrome.storage.sync.get("savedEmail", (data) => {
    // Try to find the email input element
    const emailInput = document.querySelector("#x1"); // Target input by ID
    const continueButton = document.querySelector("button.start-btn");

    // Log if the input element was found or not
    if (emailInput) {
      console.log("Email input found:", emailInput);

      // Log the saved email from storage
      if (data.savedEmail) {
        console.log("Saved email found:", data.savedEmail);
        simulateTyping(emailInput, data.savedEmail);
        setTimeout(() => { //give time for typing to finish
          if (continueButton) {
            continueButton.click();
          } else {
            console.log("Form not found.");
          }
        }, 1000);
      } else {
        console.log("No saved email in storage.");
      }
    } else {
      console.log("Email input not found, trying again");
      
      setTimeout(() => { //Refresh script if input not found on initial load
        window.onload();
      }, 500);
    }
  });
};

// Function to simulate user typing since the page doesnt like me setting the inputs value like this: input.value = 'hello'
function simulateTyping(inputElement, text) {
  inputElement.focus(); // Focus the input element
  inputElement.value = ""; // Clear the input field

  let index = 0;

  // Function to simulate typing each character
  const typeNextChar = () => {
    if (index < text.length) {
      // Set the value of the input element to the current substring
      inputElement.value += text.charAt(index);
      index++;

      // Dispatch input event to update any listeners
      const event = new Event("input", { bubbles: true });
      inputElement.dispatchEvent(event);

      // Call this function again after a short delay
      setTimeout(typeNextChar, 10); // Adjust typing speed here (100ms)
    } else {
      console.log("Finished typing:", inputElement.value);
    }
  };

  // Start the typing simulation
  typeNextChar();
}

document.addEventListener("DOMContentLoaded", () => {
  // Load saved email when the popup opens
  chrome.storage.sync.get("savedEmail", (data) => {
    if (data.savedEmail) {
      document.getElementById("emailInput").value = data.savedEmail;
    }
  });

  // Save the new email when the button is clicked
  document.getElementById("saveEmail").addEventListener("click", () => {
    const email = document.getElementById("emailInput").value;
    chrome.storage.sync.set({ savedEmail: email }, () => {
      alert("Email saved!");
    });
  });
});

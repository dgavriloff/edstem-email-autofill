# Chrome Extension: Auto Email Filler

## Description
This Chrome extension automatically fills in an email input field on specified web pages using a saved email address from Chrome's storage. It simulates user typing to enhance user experience and bypasses the need for manual entry.

## Features
- Automatically retrieves a saved email from Chrome storage.
- Fills the email input field with the retrieved email.
- Simulates user typing to bypass submission restrictions.
- Easy to customize for different input fields and websites.

## Prerequisites
- Google Chrome browser installed on your machine.

## Installation

### Without Chrome Web Store

1. **Clone or Download the Repository:**
   - Clone this repository using Git:
     ```bash
     git clone https://github.com/dgavriloff/auto-email-filler.git
     ```
   - Or, download the ZIP file from the repository and extract it to a directory on your computer.

2. **Navigate to the Extension Directory:**
   - Open a terminal or command prompt and navigate to the directory where the extension files are located.

3. **Open Chrome:**
   - Launch Google Chrome.

4. **Open the Extensions Page:**
   - Go to `chrome://extensions/`.

5. **Enable Developer Mode:**
   - Toggle the switch in the top right corner to enable Developer mode.

6. **Load Unpacked Extension:**
   - Click on "Load unpacked" and select the directory containing your extension files.

7. **Use the Extension:**
   - Navigate to a webpage with an email input field where the extension is set to operate.
   - Wait for the extension to automatically fill in the email address.

## Usage
- The extension will automatically fill in the email input field after loading the page.
- If the input field is not found, the extension will retry until the input field is available.
- You can customize the input field selector in the `content.js` file as needed.

## Code Overview
- **`manifest.json`**: The manifest file that defines the extension's metadata, permissions, and background scripts.
- **`content.js`**: The main script that retrieves the saved email and fills the input field.
- **`background.js`**: (If applicable) Background script to manage extension events.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any feature requests or bug reports.

## License
This project is licensed under the MIT License


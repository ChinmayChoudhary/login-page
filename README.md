# login-page
# Login System with Remember Me Feature

This is a simple login system with a "Remember Me" feature implemented using HTML, CSS, and JavaScript. The system allows users to log in with their email and password, optionally remembering their email for future logins. After a successful login, the user is redirected to a welcome page.

## Features

- **Email and Password Input**: Users can enter their email and password to log in.
- **Remember Me**: Users can check the "Remember Me" option to store their email for future logins.
- **Show/Hide Password**: A toggle option allows users to show or hide the password.
- **Validation**: Validates form input fields to ensure they are not empty.
- **Redirection**: Redirects users to a welcome page upon successful login.

## Files Included

- `login.html`: The main login page where users enter their credentials.
- `welcome.html`: A welcome page displayed after successful login.
- `validation.js`: JavaScript file for form validation, error handling, and client-side logic.
- `style.css`: CSS file for styling the login page and welcome page.

## Getting Started

### Prerequisites

To run this project, you need a modern web browser like Google Chrome, Mozilla Firefox, Microsoft Edge, etc.

### Installation

1. **Clone the repository** or download the project files.
    ```bash
    git clone https://github.com/your-username/login-system.git
    ```

2. **Open the project directory** and navigate to the files.
    ```bash
    cd login-system
    ```

3. **Open `login.html`** in your preferred web browser.

### Usage

1. **Login**:
   - Open `login.html` in your browser.
   - Enter your **email** and **password**.
   - (Optional) Check the "Remember Me" checkbox to save your email for future logins.
   - Click the **Login** button.
   
2. **After Successful Login**:
   - If the email and password are valid, you will be redirected to the `welcome.html` page.
   - The `welcome.html` page confirms a successful login.

3. **Remember Me Feature**:
   - If "Remember Me" is checked, your email will be saved in the browser's local storage. The next time you open the `login.html` page, the email field will be pre-filled.

### Customization

- **Modify Styles**: To change the appearance, edit the `style.css` file.
- **JavaScript Logic**: Adjust the login logic and validation rules in the `validation.js` file.

### Project Structure

```plaintext
.
├── index.html          # Main login page
├── welcome.html        # Welcome page after successful login
├── validation.js       # JavaScript file for form validation and logic
├── style.css           # CSS file for styling
└── README.md           # Readme file

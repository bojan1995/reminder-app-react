Todo Reminder App
A simple Todo Reminder application that helps you remind English words and their corresponding Macedonian translations. The app also includes functionality to remind coding-related tasks. It is built using React.js and deployed on GitHub Pages.

Features
Word Reminder: Add and view English words with their Macedonian translations.
Task Reminder: Add coding-related tasks and keep track of them.
Delete and Edit: You can delete or edit reminders as per your requirements.
Mobile Friendly: Fully responsive design optimized for both desktop and mobile use.
Demo
You can view the app live at: https://bojan1995.github.io/reminder-app-react/

Technologies Used
React.js: JavaScript library for building user interfaces.
Axios: To handle API requests (optional, if used for future expansions).
React Router: For handling navigation (if applicable in future versions).
gh-pages: For deploying the app to GitHub Pages.
Installation
To run this app locally, follow the steps below:

Prerequisites
Make sure you have Node.js and npm installed. You can check if they're installed by running the following commands:

bash
Copy code
node -v
npm -v
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/bojan1995/reminder-app-react.git
cd reminder-app-react
Install the dependencies:

Run the following command to install all necessary dependencies:

bash
Copy code
npm install
Start the development server:

To run the app locally, use the following command:

bash
Copy code
npm start
This will start the app on http://localhost:3000 by default.

How to Use
Add a Word Reminder: Enter the English word and its Macedonian translation in the input fields and click "Add Reminder" to add it to the list.
Add a Task Reminder: Type your coding task in the task input field and click "Add Task."
Edit a Reminder: Click the "Edit" button next to a reminder to modify its details.
Delete a Reminder: Click the "Delete" button next to a reminder to remove it from the list.
Deployment
This project is deployed using GitHub Pages. The deployment process is automated through the gh-pages package.

To deploy your changes, run:

bash
Copy code
npm run deploy
This will build the app and push the build folder to the gh-pages branch of the repository.

Contributing
If you'd like to contribute to the development of this project, feel free to fork the repository, create a branch, and submit a pull request. Please ensure your code adheres to the following guidelines:

Use proper indentation and formatting.
Provide clear, descriptive commit messages.
Ensure your changes do not break the current functionality (tests are appreciated).
License
This project is licensed under the MIT License.

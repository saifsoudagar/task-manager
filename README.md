Task Manager with Weather Integration
This is a Task Management Application with added functionality to check the weather for a specific city. The app is built with React and integrates Redux for state management, Firebase for authentication, and local storage for task persistence. The app includes features such as dark mode, task filtering, weather information fetching, and a responsive user interface.

Features
Task Management: Add, delete, mark tasks as completed, and set tasks as important.
Weather Integration: Fetch real-time weather for a specified city using an API.
Dark Mode: Toggle between light and dark themes.
Authentication: Firebase authentication to secure access to the app.
Responsive Design: Mobile-friendly layout.
Local Storage: Tasks persist between sessions.
Tech Stack
React.js: Front-end framework.
Redux: State management.
TailwindCSS: Styling.
Firebase: User authentication.
LocalStorage: Task persistence.
Weather API: Fetches real-time weather data.
Prerequisites
Ensure you have the following installed on your system:

Node.js (v14 or higher)
npm or yarn
Firebase project setup (see instructions below)
Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/task-manager-weather.git
cd task-manager-weather
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Firebase
Go to the Firebase Console.
Create a new project.
Enable Authentication and choose the desired providers (e.g., Email/Password).
Add a new web app to your project and copy the Firebase configuration.
Replace the placeholder Firebase config in src/firebase-config.js:
javascript
Copy
Edit
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
4. Set Up the Weather API
Sign up for a weather API provider like OpenWeather.
Generate an API key.
Replace the placeholder key in your weather action file (src/actions/weatherActions.js):
javascript
Copy
Edit
const API_KEY = "your-weather-api-key";
5. Start the Development Server
bash
Copy
Edit
npm start
The app will run on http://localhost:3000.

Running in Production
To build and deploy the app:

Build the project:

bash
Copy
Edit
npm run build
Deploy the build folder to your hosting provider (e.g., Firebase Hosting, Netlify, or Vercel).

Usage
Adding Tasks
Type a task in the input field.
Click "Add Task" to save it.
Filtering Tasks
Use the sidebar to filter tasks by "All" or "Important."
Checking Weather
Enter a city name in the weather input field.
Click "Get Weather" to fetch the current weather.
Dark Mode
Toggle the dark mode button in the navigation bar to switch themes.
Folder Structure
plaintext
Copy
Edit
src
├── actions         # Redux actions
├── components      # Reusable components (TaskList, AddTask, Sidebar, Navbar, etc.)
├── reducers        # Redux reducers
├── styles          # TailwindCSS configurations
├── firebase-config # Firebase setup
├── App.js          # Main app component
└── index.js        # Entry point
Contributing
Fork the repository.
Create a new branch: git checkout -b feature-name.
Make changes and commit: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
OpenWeather API
Firebase
TailwindCSS

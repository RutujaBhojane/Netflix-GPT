...
# Netflix GPT

- Create React App
- Install tailwindCSS
- Build the Header
- Routing of App
- Build Login Form
- Create Sign Up Form
- Form Validation
- useRef Hook
- Firebase Configuration
- Deployed App to Production using Firebase
- Create SignUp User Account
- Implement Sign In user API
- Create Redux Store with userSlice
- Implemented Sign Out
- Update Profile API
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- BugFix: Unsubscribed to the onAuthStateChanged callback
- Add hard coded values to the constants.js file
- 



...
# Features

- Login / Sign Up Page
    - Sign In /Sign Up Form
    - Redirect to Browse Page (once logged in)

- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestions
            - MovieLists * N

- NetflixGPT 
    - Search Bar
    - Movie Suggestions


# Firebase Commands to deploy App

- Install firebase CLI - npm install -g firebase-tools
- Firebase Login - firebase login
- Initialize Firebase - firebase init 
- Deploy Command - npm run build then firebase deploy
# Student Firebase

This project demonstrates Firebase authentication and student management using Firebase services.

## Features
- User authentication (sign-in, sign-up, logout)
- Firebase configuration setup
- Basic UI for authentication and student management

## Folder Structure
```
Student-Firebase/
│── card.html
│── README.md
│── Fireabse Basics/
│   ├── authentication/
│   │   ├── authFire.js
│   │   ├── firebaseConfig.js
│   │   ├── index.html
│   ├── student/
│   │   ├── firebaseConfig.js
│   │   ├── index.html
│   │   ├── index.js
```

## Setup Instructions
1. Clone this repository.
   ```bash
   git clone https://github.com/chrixjohn/Student-Firebase.git
   ```
2. Navigate to the project folder.
   ```sh
   cd Student-Firebase
   ```
3. Set up Firebase:
   - Add url in all files
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable Authentication (Email/Password or other providers).
   - Add database url in `card.html`.
   - Copy Firebase config and replace it in `firebaseConfig.js` files.
4. Open `index.html` in a browser to test authentication and student management features.

## Technologies Used
- HTML, CSS, JavaScript
- Firebase Authentication

## License
This project is licensed under the MIT License.
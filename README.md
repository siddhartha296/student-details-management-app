# Student Management Portal 🧑🏼‍🎓

A React-based **Student Management Portal** designed to manage student registrations, attendance, and marks efficiently.,***The above is the src folder in the project*** The application includes user authentication, CRUD operations on student data, and attendance/marks management. It is fully functional and deployed using **Firebase Hosting**.

---

## Live Demo 🌍
Access the live version of the application here: [Student Management Portal](https://student-details-management-b8.web.app)

---

## Features 🚀
- **User Authentication**: Secured with Firebase Authentication for role-based access.
- **Register Students**: Add new student details, ensuring a unique Student ID.
- **View Student Details**: Display all registered students and their respective details.
- **Edit Student Details**: Update or modify existing student data.
- **Record Attendance**: Mark attendance using a dynamic, color-coded interface.
- **View Attendance**: Retrieve and display attendance records for specific dates.
- **Record Marks**: Save subject-wise marks for students.
- **View Marks**: Display detailed marks data per student.

## Tech Stack 🛠️
- **Frontend**: React.js
- **Backend**: Firebase (Firestore Database, Authentication)
- **Deployment**: Firebase Hosting
- **Styling**: CSS (global.css)

---

## Prerequisites 📋
Ensure the following tools are installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Firebase CLI](https://firebase.google.com/docs/cli)

---

## Installation 🖥️

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication** and **Firestore Database**.
   - Replace the Firebase configuration in `src/firebase.js` with your project details.

5. Start the application locally:
   ```bash
   npm start
   ```

---

## Deployment 🌐

1. Build the application:
   ```bash
   npm run build
   ```
2. Initialize Firebase Hosting:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project.
   - Set the `build` directory as the public directory.
   - Enable single-page application (SPA) routing.

3. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

---

## Folder Structure 📂
```
.
├── public                 # Static assets
├── src
│   ├── components         # Individual React components
│   │   ├── Login.js       # User login component
│   │   ├── RegisterStudent.js # Register a new student
│   │   ├── StudentDetails.js  # View and edit student details
│   │   ├── RecordAttendance.js # Attendance marking system
│   │   ├── ViewAttendance.js   # View attendance records
│   │   ├── RecordMarks.js      # Marks recording interface
│   │   ├── ViewMarks.js        # View student marks
│   │   ├── EditStudent.js      # Edit a student’s data
│   ├── global.css         # Global styles for the application
│   ├── firebase.js        # Firebase configuration
│   ├── App.js             # Main application file
│   ├── index.js           # Entry point for React
├── package.json           # Project metadata and dependencies
├── firebase.json          # Firebase Hosting configuration
├── README.md              # Project documentation
```

---

## Components Breakdown 📦

### 1. **Login**  
   - Allows user authentication using Firebase Authentication.  
   - Redirects authenticated users to the main dashboard.  

### 2. **RegisterStudent**  
   - Enables users to add new students with a unique Student ID.  
   - Form validation ensures required fields are filled.  

### 3. **StudentDetails**  
   - Displays a list of all registered students.  
   - Includes an edit button to update student data.  

### 4. **RecordAttendance**  
   - Displays all student IDs as buttons.  
   - Dynamically marks a student as present (green) or absent (red).  

### 5. **ViewAttendance**  
   - Fetches and displays attendance for a specific date.  

### 6. **RecordMarks**  
   - A form to input marks for each subject per student.  
   - Saves data to Firestore.  

### 7. **ViewMarks**  
   - Displays marks of all subjects for each student in a readable format.  

### 8. **EditStudent**  
   - Loads a selected student’s details in a form for updating.  
   - Ensures unique Student IDs are not accidentally overwritten.



## Author ✍️

**Siddhartha Pittala**  
- IT Department, VRSEC  
- GitHub: [Siddhartha's GitHub](https://github.com/siddhartha296)  
- LinkedIn: [Siddhartha Pittala](www.linkedin.com/in/siddhartha-pittala-036001254)  

Replace `<repository-url>` with your GitHub repository link, and `<firebase-deployment-url>` with the Firebase hosting URL. Let me know if you need further modifications! 😊

# student-details-management-app
a react application to manage student details with , login system , registering student, student details , recording attendance and recording marks of the student .
### README.md

```markdown
# Student Management Portal 🧑🏼‍🎓

This is a React-based **Student Management Portal** designed to manage student registrations, attendance, and marks. It includes features such as registering students, viewing and editing student details, recording attendance, and recording/viewing marks. The app is fully functional and deployed on **Firebase Hosting**.

## Features 🚀
- **User Authentication**: Secured with Firebase Authentication.
- **Register Students**: Add student details with a unique ID.
- **View Student Details**: Display all registered students and their information.
- **Edit Student Details**: Update the existing details of a student.
- **Record Attendance**: Mark attendance with a dynamic interface.
- **View Attendance**: Display attendance for selected dates.
- **Record Marks**: Record subject-wise marks for students.
- **View Marks**: View detailed marks of students.

## Tech Stack 🛠️
- **Frontend**: React.js
- **Backend**: Firebase (Firestore Database, Authentication)
- **Deployment**: Firebase Hosting
- **Styling**: CSS (global.css)

## Prerequisites 📋
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Firebase CLI](https://firebase.google.com/docs/cli)

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
4. Configure Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore Database.
   - Update the Firebase configuration in `src/firebase.js`.

5. Start the application locally:
   ```bash
   npm start
   ```

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
   - Choose `yes` for single-page application routing.
3. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## Folder Structure 📂
```
.
├── public                 # Static assets
├── src
│   ├── components         # React components (Login, RegisterStudent, etc.)
│   ├── global.css         # Global styles
│   ├── firebase.js        # Firebase configuration
│   ├── App.js             # Main application file
│   ├── index.js           # Entry point
├── package.json           # Project metadata and dependencies
├── firebase.json          # Firebase Hosting configuration
├── README.md              # Project documentation
```

## Live Demo 🌍
Access the live version of the application here: [Student Management Portal](<firebase-deployment-url>)

## Author ✍️
**Siddhartha Pittala**  
- IT Department, VRSEC  
- GitHub: [Siddhartha's GitHub](https://github.com/<your-github-username>)  
- LinkedIn: [Siddhartha Pittala](https://www.linkedin.com/in/<your-linkedin-username>)  

---

Made with ❤️ in the IT Department, VRSEC.
``` 

### Steps to Use:
1. Replace `<repository-url>` with your GitHub repository URL.
2. Replace `<firebase-deployment-url>` with your Firebase hosting URL.
3. Update your GitHub and LinkedIn links if you wish to include them.

Let me know if you’d like further customizations! 😊

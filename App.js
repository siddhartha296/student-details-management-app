// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './global.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Login from './components/login';
import RegisterStudent from './components/RegisterStudent';
import StudentDetails from './components/StudentDetails';
import RecordAttendance from './components/RecordAttendance';
import ViewAttendance from './components/ViewAttendance';
import RecordMarks from './components/RecordMarks';
import ViewMarks from './components/ViewMarks';
import EditStudent from './components/EditStudent';

function App() {
  const [user, setUser] = useState(null);

  // Check for user authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ padding: '20px' }}>Student Management Portal 🧑🏼‍🎓</h1>

        {user ? (
          <>
            {/* Navigation Links for authenticated users */}
            <nav style={{ marginBottom: '20px' }}>
              <Link to="/" style={{ marginRight: '15px' }}>Register Student</Link>
              <Link to="/student-details" style={{ marginRight: '15px' }}>View Student Details</Link>
              <Link to="/record-attendance" style={{ marginRight: '15px' }}>Record Attendance</Link>
              <Link to="/view-attendance" style={{ marginRight: '15px' }}>View Attendance</Link>
              <Link to="/record-marks" style={{ marginRight: '15px' }}>Record Marks</Link>
              <Link to="/view-marks" style={{ marginRight: '15px' }}>View Marks</Link>
              <button onClick={() => auth.signOut()}>Logout</button>
            </nav>
            
            {/* Route Definitions for authenticated users */}
            <Routes>
              <Route path="/" element={<RegisterStudent />} />
              <Route path="/student-details" element={<StudentDetails />} />
              <Route path="/record-attendance" element={<RecordAttendance />} />
              <Route path="/view-attendance" element={<ViewAttendance />} />
              <Route path="/record-marks" element={<RecordMarks />} />
              <Route path="/view-marks" element={<ViewMarks />} />
              <Route path="/edit-student/:id" element={<EditStudent />} />
              <Route path="/login" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <>
            {/* Redirect to Login if not authenticated */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </>
        )}

        {/* Footer positioned at the bottom */}
        <footer
          style={{
            position: 'relative',
            marginTop: 'auto',
            textAlign: 'center',
            backgroundColor: '#333', // Optional
            color: 'white', // Optional
            padding: '20px 0',
          }}
        >
          <p>Made by Siddhartha Pittala, IT Dept, VRSEC</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

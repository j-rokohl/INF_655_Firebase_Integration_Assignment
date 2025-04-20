import React from "react";
import BigCard from "../components/shared/BigCard";

export default function HomePage() {

return (
    <>
    <div className="App">
    <BigCard>
        <h2>About Task Manager</h2>

        <p>Continue building your Task Manager React application from the midterm by integrating Firebase Authentication and Firestore. This will allow users to sign up, log in, and manage their own tasks securely using Firebase.</p>
        <p>Assignment Requirements</p>

        <ol>
        <li>Firebase Setup - 5 Points
        <ul>
        <li>Create a Firebase project.</li>
        <li>Enable Email/Password Authentication.</li>
        <li>Set up Firestore Database.</li>
        <li>Connect Firebase to your existing React project.</li>
        </ul>
        </li>
        <li>User Authentication - 10 Points
        <ul>
        <li>Implement Sign-Up and Login forms using Firebase Authentication.</li>
        <li>Show a simple dashboard or welcome message after login.</li>
        <li>Protect your task manager route so only logged-in users can access it.</li>
        <li>Add a Logout button.</li>
        </ul>
        </li>
        <li>Firestore Integration for Task Data - 10 Points
        <ul>
        <li>Store new tasks in Firestore with fields: userId, taskName, taskDescription, createdAt.</li>
        <li>Fetch and display tasks only for the logged-in user.</li>
        <li>Tasks should load automatically after login and reflect updates in real-time.</li>
        </ul>
        </li>
        <li>Delete Task Functionality - 5 Points
        <ul>
        <li>Allow users to delete tasks from Firestore.</li>
        <li>Add a confirmation prompt before deletion.</li>
        <li>Update the UI instantly after deleting a task.</li>
        </ul>
        </li>
        </ol>

        <p><strong>Deliverables</strong></p>
        <ul>
        <li>Push your final code to your existing GitHub repo.</li>
        <li>Submit the GitHub repo link.</li>
        </ul>
    </BigCard>
    </div>
    </>
    )
}
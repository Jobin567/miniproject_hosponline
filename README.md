🏥 Hosponline – Hospital Management System
Hosponline is a fully responsive hospital management web application that simplifies and modernizes hospital services. It allows patients to easily book appointments, view doctor specialities, and get support — all from the convenience of their devices.

🌐 Live Demo
👉 Visit Hosponline            https://miniproject-hosponline-frontend1final-1wsbar5kt.vercel.app/

📌 Table of Contents
Features

Tech Stack

How to Use

Deployment

Folder Structure

License

✅ Features
🔐 User registration and login

🩺 View doctor specialities and availability

📅 Book appointments online

📊 Access reports (for users/admin)

📍 Google Maps location embedded

🤖 Integrated chatbot (for quick help)

📢 Newsletter subscription

📦 Easy return & exchange policies

💬 24/7 support display

📱 Fully responsive UI design

🛠️ Tech Stack
Frontend:

React.js

React Router DOM

Axios

Tailwind CSS / Bootstrap

Backend:

Node.js

Express.js

MongoDB (via Mongoose)

Deployment:

Frontend: Vercel

Backend: Render

Chatbot: Botpress

Database: MongoDB Atlas

▶️ How to Use
Visit the homepage: View specialties and hospital information.

Book appointments: Choose department, doctor, and slot.

Get confirmation: Email or UI confirmation for scheduled booking.

Admin Dashboard (if available): Manage users, appointments, and slots.

Use chatbot: Get instant answers for basic queries.

🚀 Deployment Configuration
📄 For React Router to work on Vercel:
Make sure you’ve added a vercel.json in your root folder:

json
Copy
Edit
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
This ensures pages like /reports or /booking are correctly routed through React Router even on refresh.

📂 Folder Structure
bash
Copy
Edit
hosponline/
├── frontend/         # React code
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.jsx
├── backend/          # Node + Express code
│   ├── models/
│   ├── routes/
│   └── server.js
└── vercel.json       # Vercel routing setup
📄 License
This project is licensed under the MIT License – feel free to use, adapt, and improve it for educational or production purposes.

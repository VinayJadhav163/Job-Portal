<a name="top"></a>
# JOB-PORTAL

*Empowering Careers, Connecting Talent with Opportunity*

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=render)](https://job-portal-vj-1cbe.onrender.com/)

---

### **Built with the tools and technologies:**

![Node.js](https://img.shields.io/badge/Node.js-black?logo=node.js&style=flat)
![Express](https://img.shields.io/badge/Express.js-grey?logo=express&style=flat)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?logo=mongodb&style=flat)
![JWT](https://img.shields.io/badge/JWT-black?logo=jsonwebtokens&style=flat)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&style=flat)
![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&style=flat)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)


---

## 📑 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contribution](#contribution)
- [License](#license)

---

## Overview

**Job-Portal** is a comprehensive developer tool designed to streamline job management and enhance user experience in job searching.

### ❓ Why Job-Portal?

This project simplifies the job application process for both users and administrators. The core features include:

- ✨ **Frontend Setup**: Utilizes Vite and ESLint for efficient development and improved code quality.
- 💠 **Responsive Design**: Integrates Tailwind CSS for a cohesive and modern user interface.
- 🔄 **State Management**: Employs Redux for centralized state management, enhancing data flow.
- 🔐 **Secure Authentication**: Implements JWT for user authentication and role-based access control.
- 🗂️ **Dynamic Job Management**: Facilitates job posting, application tracking, and company management.
- 🧑‍💻 **User-Friendly Interface**: Provides intuitive components for seamless navigation and interaction.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language**: MERN Stack
- **Package Manager**: npm

---

### Installation

Build Job-Portal from the source and install dependencies:

1. **Clone the repository**:

```bash
git clone https://github.com/VinayJadhav613/Job-Portal
```

2. **Navigate to the project directory**:
```bash
cd Job-Portal
```

4. **Install the dependencies**:
Using npm:
```bash
npm install
```
---

### Usage
Run the project with:
```bash
npm start
```

---

### Testing
Job-portal uses the test framework. Run the test suite with:
```bash
npm test
```

---

### Features
👤 User Authentication with JWT (Login/Register)

🧑‍💼 Role-Based Access (Admin, Company, Candidate)

📄 Resume Upload and Download

📝 Job Post Creation, Editing, and Deletion

🔍 Job Search with Filters (location, category, salary, etc.)

📬 Apply to Jobs and Track Application Status

📊 Company and Candidate Dashboards

📧 Email Notifications for Candidates

💾 Saved Jobs Functionality

🔐 Secure API with Role Validation

---

### Project Structure
```text
job-portal/
├── backend/
│   ├── controllers/
│   ├── frontend/             <-- React frontend inside backend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── redux/
│   │   │   └── App.jsx
│   │   ├── vite.config.js
│   ├── middlewares/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── utils/
│   │   ├── cloudinary.js
│   │   ├── datauri.js
│   │   └── db.js
│   ├── .env
│   ├── .gitignore
│   ├── build-frontend.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── render.yaml
│   └── README.md
```
---

### Contribution
Contributions are welcome! Here's how you can help:

1. Fork the repository.

2. Create a new branch: git checkout -b feature-name.

3. Commit your changes: git commit -m "Add feature".

4. Push to the branch: git push origin feature-name.

5. Open a pull request.

Please ensure your code is clean and properly documented.

---

### License
This project is licensed under the MIT License.

---

[🔝 Back to Top](#top)


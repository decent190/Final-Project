# Final Year Project Documentation

## Project Overview
This project is a full-stack web application designed to provide an interactive learning platform. It consists of a React-based client and a Node.js/Express backend server. The platform allows users to sign up, sign in, access lessons, take quizzes, and track their progress through a dashboard.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (sign up, sign in)
- Interactive lessons and quizzes
- Progress tracking dashboard
- Responsive and modern UI

## Project Structure
```
final year project/
├── client/           # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   └── Components/
│   └── ...
├── Server/           # Backend (Node.js + Express)
│   ├── controller/
│   ├── model/
│   ├── routes/
│   └── index.js
└── README.md         # Project documentation
```

## Installation
### Prerequisites
- Node.js (v16 or above)
- npm or yarn

### Backend Setup
1. Navigate to the `Server` directory:
   ```sh
   cd Server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Usage
- Open your browser and go to `http://localhost:5173` (or the port shown in your terminal) to access the frontend.
- The backend runs on `http://localhost:5000` by default.


## Application Routes & API Endpoints

### Frontend (React) Routes
| Route           | Description                                 |
|-----------------|---------------------------------------------|
| `/`             | Landing page (introduction, call to action) |
| `/intro`        | Introduction to Classes lesson              |
| `/signup`       | User registration page                      |
| `/login`        | User login page                             |
| `/about`        | About the platform                          |
| `/dashboard`    | User dashboard (progress, navigation)       |
| `/quiz`         | Quiz page (interactive quizzes)             |
| `/lesson`       | Lessons overview/content                    |
| `/challenge`    | Coding or conceptual challenges             |

### Backend (Express API) Endpoints
| Endpoint                | Method | Description                      |
|-------------------------|--------|----------------------------------|
| `/api/auth/signup`      | POST   | Register a new user              |
| `/api/auth/signin`      | POST   | Login for existing users         |

> More endpoints and features can be added as the project grows.

## Technologies Used
- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express
- **Database:** (Specify if using MongoDB, MySQL, etc.)

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
Specify your license here (e.g., MIT License).

---

**For any questions or issues, please contact the project maintainer.**

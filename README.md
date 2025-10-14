# User Directory Application

A full-stack User Directory application built with React.js, Node.js (Express), and MySQL. This application allows you to perform CRUD operations on users with pagination support.

## Features

- View a paginated list of users (5 users per page)
- Add new users with name, email, and department
- Edit existing user information
- Delete users
- Responsive design with Tailwind CSS
- Client-side form validation
- Error handling and user feedback

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL Server (v5.7 or higher)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the MySQL database:
   - Create a new MySQL database named `user_directory`
   - Update the database configuration in `server.js` if needed (default is root with no password)
   - Run the SQL commands from `setup-db.sql` to create the required table

4. Start the backend server:
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:5000`

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
user-directory/
├── backend/               # Node.js/Express backend
│   ├── node_modules/     # Backend dependencies
│   ├── server.js         # Main server file
│   └── setup-db.sql      # Database setup script
└── frontend/             # React frontend
    ├── public/           # Static files
    └── src/
        ├── components/   # React components
        │   ├── AddUserForm.js
        │   └── UserList.js
        ├── App.js        # Main App component
        └── index.js      # Entry point
```

## API Endpoints

- `GET /api/users` - Get paginated list of users
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
  - Axios for HTTP requests

- **Backend**:
  - Node.js
  - Express.js
  - MySQL2 (MySQL client for Node.js)
  - CORS middleware

## License

This project is open source and available under the MIT License.

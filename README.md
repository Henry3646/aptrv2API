# Job Application Tracker API

A RESTful API for tracking job applications built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- CRUD operations for job applications
- Job status tracking (Applied, Interview, Offer, Rejected, Wishlist)
- Contact management for each job application
- Secure API with JWT authentication

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd job-tracker-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. For production
   ```
   npm start
   ```

## API Endpoints

### Users

- `POST /api/users` - Register a new user
- `POST /api/users/login` - Login a user
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Jobs

- `GET /api/jobs` - Get all jobs (protected)
- `POST /api/jobs` - Create a new job (protected)
- `GET /api/jobs/:id` - Get a job by ID (protected)
- `PUT /api/jobs/:id` - Update a job (protected)
- `DELETE /api/jobs/:id` - Delete a job (protected)

## Schema

### User

- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required, hashed)
- `timestamps`: Boolean

### Job

- `company`: String (required)
- `position`: String (required)
- `jobUrl`: String
- `description`: String
- `location`: String
- `salary`: String
- `status`: String (enum: ['Applied', 'Interview', 'Offer', 'Rejected', 'Wishlist'])
- `notes`: String
- `contactName`: String
- `contactEmail`: String
- `contactPhone`: String
- `applicationDate`: Date
- `interviewDate`: Date
- `timestamps`: Boolean

## License

ISC 
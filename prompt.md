Step 1: Project Initialization

Purpose: Set up the project structure and install necessary dependencies.

Steps:
Initialize the project with npm init -y.
Install core dependencies: express, mongoose, dotenv, bcryptjs, jsonwebtoken.
Install development dependencies: nodemon for 
auto-restarting the server during development.

Why:
These dependencies are essential for building a REST API.
express handles routing, mongoose connects to MongoDB, dotenv manages environment variables, bcryptjs hashes passwords, and jsonwebtoken handles authentication.

-------------------------------------------------------------

Step 2: Folder and File Structure
Purpose: Organize the project for scalability and maintainability.

Structure:
src/
├── config/          # Database connection and configuration
├── controllers/     # Business logic for routes
├── middlewares/     # Middleware for authentication and validation
├── models/          # Mongoose schemas for MongoDB collections
├── routes/          # Route definitions
├── utils/           # Utility functions (e.g., JWT helpers)
└── index.js         # Entry point of the application


Why:
A modular structure ensures that each part of the application is isolated and easier to manage.
It allows for adding new features without cluttering the codebase.



-------------------------------------------------------

Step 3: Database Connection
Purpose: Connect to MongoDB using Mongoose.

Steps:
Create a db.js file in the config folder.
Use Mongoose to connect to the database using a connection string stored in the .env file.

Why:
MongoDB is a NoSQL database that stores data in a flexible, JSON-like format.
Mongoose provides an abstraction layer for interacting with MongoDB, making it easier to define schemas and perform CRUD operations.



---------------------------------------------------------
Step 4: Models

Purpose: Define the structure of the data stored in MongoDB.

Steps:
Create a User model with fields for name, email, and password.
Create a Todo model with fields for title, description, completed, and a reference to the User.

Why:
Models define the shape of the data and enforce validation rules.
Associating todos with users ensures that each user can only access their own data.



*-------------------------------------------------------

Step 5: Authentication

Purpose: Secure the API using JWT authentication.

Steps:
Create a register route to allow users to sign up.
Hash passwords using bcryptjs before saving them to the database.
Create a login route to authenticate users and generate a JWT token.
Store the JWT secret in the .env file.

Why:
Authentication ensures that only authorized users can access the API.
JWT tokens are stateless and scalable, making them ideal for REST APIs.


------------------------------------------------------

Step 6: Middleware
Purpose: Add reusable logic for request validation and authentication.

Steps:
Create an authMiddleware to verify JWT tokens and attach the user ID to the request object.
Use this middleware to protect routes that require authentication.

Why:
Middleware centralizes common logic, reducing duplication.
Protecting routes ensures that only authenticated users can access sensitive data.






------------------------------------------------------

Step 7: Routes
Purpose: Define endpoints for user authentication and todo management.

Steps:
Create authRoutes for user registration and login.
Create todoRoutes for CRUD operations on todos.
Use the authMiddleware to protect the todo routes.

Why:
Routes define the API's interface, specifying how clients can interact with the server.
Separating routes into files keeps the code organized.





---------------------------------------------------------


Step 8: Controllers
Purpose: Implement the business logic for each route.

Steps:
Create authController with functions for registering and logging in users.
Create todoController with functions for creating, reading, updating, and deleting todos.

Why:
Controllers separate the business logic from the route definitions, making the code easier to test and maintain.





------------------------------------------------------------


Step 9: Pagination and Filtering

Purpose: Enhance the API to handle large datasets efficiently.

Steps:
Add query parameters for page and limit to the GET /todos route.
Add a completed filter to retrieve todos based on their status.

Why:
Pagination ensures that clients can fetch data in manageable chunks.
Filtering allows users to retrieve specific subsets of data.





----------------------------------------------------
Step 10: Testing
Purpose: Verify that the API works as expected.
Steps:
Use Postman to test each route:
Register a user.
Log in and retrieve a JWT token.
Access protected routes using the token.
Perform CRUD operations on todos.
Check for edge cases, such as invalid input or unauthorized access.
Why:
Testing ensures that the API meets the requirements and handles errors gracefully.

-------------------------------------------------------------
Step 11: Documentation
Purpose: Provide clear instructions for using the API.
Steps:
Create a README.md file with details about each route, including:
HTTP method
URL
Required headers
Request body
Example responses
Why:
Documentation helps developers understand how to use the API.
It serves as a reference for future development.






--------------------------------------------



Step 12: Scalability
Purpose: Prepare the API for future features.
Steps:
Use environment variables for configuration (e.g., database URI, JWT secret).
Follow the MVC (Model-View-Controller) pattern to keep the code modular.
Add error-handling middleware to centralize error responses.
Why:
A scalable architecture makes it easier to add new features without breaking existing functionality.

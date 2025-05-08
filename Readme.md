# Todo List API
[project link](https://roadmap.sh/projects/todo-list-api)
## User Routes

### Register a User
- **POST** `/test/user`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }


 1. Login a User
POST /login
Body
{
  "email": "john@example.com",
  "password": "password123"
}

2.Access a Protected Route  GET /protected
Headers
Authorization: Bearer your_jwt_token

Todo Routes
Create a Todo
POST /todos
Headers
Authorization: Bearer your_jwt_token

Body
{
  "title": "Learn Node.js",
  "description": "Complete the Node.js tutorial"
}

Get All Todos
GET /todos
Headers
Authorization: Bearer your_jwt_token

Get Todos with Pagination and Filtering
GET /todos?page=1&limit=5&completed=false
Headers:

Authorization: Bearer your_jwt_token

Update a Todo
PUT /todos/:id

Authorization: Bearer your_jwt_token

Body
{
  "title": "Learn Express.js",
  "description": "Complete the Express.js tutorial",
  "completed": true
}

Delete a Todo
DELETE /todos/:id

Headers
Authorization: Bearer your_jwt_token

-----
Let me know if you need help with anything else or if you’d like to add more features!---
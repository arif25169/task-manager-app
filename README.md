# Task Manager App

Task Manager App is a simple task management system built with Laravel for the backend and React.js for the frontend. It provides task creation, updating, deletion, and authentication features.

## Getting Started

The easiest way to run this project is with Docker Compose. Simply run:

```sh
docker-compose up -d
```

After a while, the project will be accessible at:  
👉 [http://localhost:5173/](http://localhost:5173/)

### Default Credentials:
Since MySQL is included in the Docker setup, you can log in using:  
- **Email:** `admin@mail.com`  
- **Password:** `admin1234`

---

## Backend

The backend is built using **Laravel** and provides authentication, user registration, and task management.

### Task API Endpoints

Task-related operations require authentication using Laravel **Sanctum** middleware. The available API endpoints include:

- **List tasks:** `GET /tasks`
- **Create a new task:** `POST /tasks`
- **View a specific task:** `GET /tasks/{id}`
- **Update a task:** `PUT /tasks/{id}`
- **Delete a task:** `DELETE /tasks/{id}`

### Running API Tests
Basic unit tests are included for API endpoints. Run the following command:

```sh
php artisan test --filter TaskControllerTest
```

---

## Frontend

The frontend is built using **React.js** with **Vite** for fast development and optimized builds.

### Features:
- **State Management:** Zustand is used for efficient and lightweight state handling.
- **UI Components:** The interface is built using Ant Design (**antd**) with reusable components.
- **Form Validation:** All forms include validation for better user experience.
- **Pagination:** Implemented for better performance when handling large datasets.
- **Search with Debounce:** A custom hook is created for debounced search to reduce API calls.
- **Unauthorized Access Prevention:** Routes are protected to prevent unauthorized users from accessing restricted pages.

---

## License

This project is open-source and available for customization. Contributions are welcome!

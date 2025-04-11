# Banking App Backend

This is the backend part of the Banking App project. It is built using Express.js and TypeScript.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd banking-app/backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## API Endpoints

### Account Operations

- **GET /api/accounts/:id**
  - Description: Retrieve account details by account ID.
  - Response: Account details in JSON format.

- **POST /api/accounts**
  - Description: Create a new account.
  - Request Body: Account information in JSON format.
  - Response: Created account details in JSON format.

### Transaction Operations

- **POST /api/transactions**
  - Description: Create a new transaction.
  - Request Body: Transaction details in JSON format.
  - Response: Created transaction details in JSON format.

## Folder Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application.
  - **controllers/**: Contains controllers for handling requests.
  - **routes/**: Contains route definitions.
  - **types/**: Contains TypeScript interfaces for data structures.

## Technologies Used

- Express.js
- TypeScript

## License

This project is licensed under the MIT License.
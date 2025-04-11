# Banking App

This project is a banking application built with Astro for the frontend and Express.js for the backend. It provides functionalities for managing banking operations such as account details and transactions.

## Project Structure

```
banking-app
├── backend          # Backend application using Express.js
│   ├── src
│   │   ├── app.ts                  # Entry point for the backend application
│   │   ├── controllers              # Contains controllers for handling requests
│   │   ├── routes                   # Defines the routes for the backend
│   │   └── types                    # TypeScript interfaces for data structures
│   ├── package.json                 # NPM configuration for the backend
│   ├── tsconfig.json                # TypeScript configuration for the backend
│   └── README.md                    # Documentation for the backend
├── frontend         # Frontend application using Astro
│   ├── src
│   │   ├── components               # Reusable components for the frontend
│   │   ├── layouts                  # Layouts for structuring pages
│   │   ├── pages                    # Pages of the frontend application
│   │   └── styles                   # Global styles for the frontend
│   ├── package.json                 # NPM configuration for the frontend
│   └── README.md                    # Documentation for the frontend
└── README.md         # Overview of the entire banking app project
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd banking-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

### API Endpoints

Refer to the backend README for a list of available API endpoints and their usage.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

### License

This project is licensed under the MIT License.
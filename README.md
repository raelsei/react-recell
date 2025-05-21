# Recell

### 1. Cloning the Project and Changing Directory

```bash
git clone https://github.com/korayguler/react-recell
cd react-recell
```

### 2. Installing Dependencies

```bash
npm install
```

### 3. Starting the Project

This project uses the `concurrently` package to run both a JSON server and a Vite development server at the same time. To start the project, run the following command:

```bash
npm start
```

This command will run the following two commands simultaneously:

- Vite development server: For the frontend React application (http://localhost:3000)
- JSON server: For the mock API (http://localhost:3001)

### 4. Building the Project

```bash
npm run build
```

This command will generate the compiled files in the `dist` folder.

### 5. Testing the Project

```bash
npm test
```

This command will run the tests.

### Key Technologies Used in the Project

#### React

- **React**: A JavaScript library used to build user interfaces. It forms the main structure of the project.

#### Vite

- **Vite**: A tool used to quickly develop and configure React applications. It is faster than Webpack and offers a modern development experience.

#### Zustand

- **Zustand**: A small and flexible library used for global state management. It makes state management in React simple and performant. In this project, Zustand is used for the shopping cart and other global states.

#### React Query (TanStack Query)

- **@tanstack/react-query**: A library used for fetching, caching, synchronizing, and updating server data. This project uses React Query to manage API requests and data caches.

#### Tailwind CSS

- **Tailwind CSS**: A utility-first CSS framework used to quickly add styles. It allows you to add styles faster and more organized while writing CSS in the project.

#### Jest and Testing Library

- **Jest**: A popular test framework used to test JavaScript code.
- **@testing-library/react**: A library used to test React components. In the project, Jest and Testing Library are used together to write unit tests.

#### Prettier and ESLint

- **Prettier**: A tool that automatically formats your code.
- **ESLint**: Analyzes your JavaScript code to find possible errors and ensures code standardization.

#### JSON Server

- **JSON Server**: Used to create a simple REST API. This project uses JSON Server as a mock API service.

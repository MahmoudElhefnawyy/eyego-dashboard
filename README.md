# Eyego - Frontend Internship Technical Task

A responsive dashboard application built with Next.js, Redux Toolkit, and Tailwind CSS as part of a technical evaluation.

##  Project Features

- User Authentication: Mocked user login and logout functionality using Redux for state management.
- Protected Routes: The main dashboard is only accessible to authenticated users.
- Responsive design for optimal viewing on various devices.
- State management using Redux Toolkit.
- Styled with Tailwind CSS for a modern look and feel.
- Dynamic Data Table: Displays user data with client-side sorting, multi-column filtering, and pagination.
- Data Visualization: A bar chart visualizes the distribution of users by role using Recharts.
- Data Export: Functionality to export table data to both PDF and Excel (XLSX) formats.
- Dockerized: The application is fully containerized with a multi-stage Dockerfile for easy deployment and testing.
- Git Flow: The project adheres to the Git Flow branching strategy with clear, feature-based commits.

##  Getting Started

This section contains instructions for running the Eyego Dashboard project.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Docker Desktop (for running the containerized version)

### Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running with Docker

To run the application using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t eyego-dashboard .
   ```
   2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 eyego-dashboard
    ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦Project Structure

- `components/`: Reusable React components.
- `pages/`: Next.js pages and API routes.
- `store/`: Redux Toolkit store configuration and slices.
- `styles/`: Global and component-specific styles using Tailwind CSS.
- `public/`: Static assets like images and fonts.
- `utils/`: Utility functions and helpers.

## 🛠Technologies Used

- Next.js
- React
- Redux Toolkit
- Tailwind CSS
- Docker
- Recharts
## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
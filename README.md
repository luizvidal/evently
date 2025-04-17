# Evently Docker Setup

This repository contains Docker configuration for running the Evently application with Docker Compose.

## Security Considerations

This setup prioritizes security by:

1. Using specific versions of Docker images to avoid unexpected changes
2. Using distroless images for the Java backend to minimize attack surface
3. Properly managing dependencies within the project files rather than at build time
4. Using `--legacy-peer-deps` for the frontend to handle React 19 compatibility issues

## Components

- **Frontend**: Next.js application
- **Backend**: Spring Boot application
- **Database**: PostgreSQL

## Prerequisites

- Docker and Docker Compose installed on your machine
- Git (to clone the repository)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd evently
   ```

2. Start the application using Docker Compose:
   ```bash
   docker-compose up -d
   ```

   This will:
   - Build and start the PostgreSQL database
   - Build and start the Spring Boot backend
   - Build and start the Next.js frontend

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - PostgreSQL Database: localhost:54321 (accessible with database tools like pgAdmin or DBeaver)

## Environment Variables

### PostgreSQL
- `POSTGRES_DB`: Database name (default: evently)
- `POSTGRES_USER`: Database user (default: evently)
- `POSTGRES_PASSWORD`: Database password (default: evently_password)

### Backend
- `SPRING_DATASOURCE_URL`: JDBC URL for PostgreSQL
- `SPRING_DATASOURCE_USERNAME`: Database username
- `SPRING_DATASOURCE_PASSWORD`: Database password
- `SPRING_JPA_HIBERNATE_DDL_AUTO`: Hibernate DDL auto (default: update)

### Frontend
- `NEXT_PUBLIC_API_URL`: URL of the backend API

## Stopping the Application

To stop the application:
```bash
docker-compose down
```

To stop the application and remove volumes (this will delete the database data):
```bash
docker-compose down -v
```

## Development

For development purposes, you can run each component separately:

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

### Database
```bash
docker-compose up postgres -d
```

You can connect to the database using:
- Host: localhost
- Port: 54321
- Database: evently
- Username: evently
- Password: evently_password

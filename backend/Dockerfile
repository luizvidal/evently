FROM maven:3.9.9-eclipse-temurin-21-alpine AS build

WORKDIR /app

# Copy the Maven wrapper and POM file
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src/ src/

# Build the application
RUN ./mvnw package -DskipTests

# Runtime stage - using Google's distroless Java image for better security
FROM gcr.io/distroless/java21-debian12

WORKDIR /app

# Copy the built JAR file
COPY --from=build /app/target/*.jar app.jar

# Set the entrypoint
ENTRYPOINT ["java", "-jar", "app.jar"]

# Expose the port
EXPOSE 8080

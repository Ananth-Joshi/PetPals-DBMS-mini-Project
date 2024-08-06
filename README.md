# PetPals: Animal Rescue and Shelter Management System

PetPals is an Animal Rescue and Shelter Management project that provides a comprehensive system for managing animal rescue operations. The application includes the following key features:

## Tables

- **PET**
- **VOLUNTEERS**
- **ALLOCATION**
- **DONATION**
- **CENTER**

## User Roles and Functionality

### Normal Users
- Can view details of the tables in case of emergency or an injured animal.
- Can directly contact volunteers based on the provided details.

### Rescue Center Admins
- Can add or delete data related to pets, volunteers, allocations, donations, and centers
- Manage the overall operations of the rescue center

## Authentication

PetPals uses JSON Web Tokens (JWT) for authentication, ensuring secure access to the application's features.

## Getting Started

To run the PetPals application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/PetPals.git
   ```
2. **Install dependencies**:
   ```bash
   cd PetPals
   npm install
   ```
3. **Set up the environment variables**:

Create a .env file in the root of the project with the following variables:
    ```bash
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    JWT_SECRET=your_jwt_secret
    ```
4. **Run the application**:
Use the commands.sql file if you need some default values and use this command to run the application:
    ```bash
    npm start
    ```

## Database Schema Diagram
![schema](https://github.com/user-attachments/assets/f6468945-c484-4b65-97ac-61d4df90a05f)



# PetPals: Animal Rescue and Shelter Management System

PetPals is an Animal Rescue and Shelter Management project that provides a comprehensive system for managing animal rescue. The application includes the following key features:

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

## Screenshots
![image](https://github.com/user-attachments/assets/aca122ce-db02-4e40-8164-74a77c1819af)
![image](https://github.com/user-attachments/assets/b02ad232-b23c-4aa4-b0f3-11c21c9024ee)
![image](https://github.com/user-attachments/assets/d6ec26f4-bc46-4e5e-9a26-9a913a298d15)
![image](https://github.com/user-attachments/assets/09dc130f-b1f8-4ec4-a581-3a241a616607)
![image](https://github.com/user-attachments/assets/2b28742c-a7b1-45ce-abdc-c7a1202ade03)






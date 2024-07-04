# Inventory Management System

## Admin Credentials:
- **Email**: admin@gmail.com
- **Password**: P@ssw0rd

## Requirements:
- Design and develop an application using the full-stack.
- Users can view all their inventory products, stocks, order, vendor details on the dashboard.
- Users can create, update, delete, and view all their inventory product details on the dashboard (**CRUD**).
- Enables users to track inventory stocks, including quantities, locations, and product details on individual components.
- Shows related notifications or alerts to refill stocking and avoid running out of stock.
- Allows users to track purchase orders for inventory, including supplier information, order status, and delivery dates.
- Generates reports and analytics on important inventory details like stock levels, turnover rates, and inventory value.

## Backend Development Approach:
- Completed setting up the development environment with **Node.js** and **Express.js** for creating RESTful APIs to handle requests and responses.
- Completed setting up **MongoDB** for storing and managing tasks, user data, and authentication details.
- Implemented **JWT** and **Bcrypt** for secure access.

## Postman Documentation:
[Postman Documentation](https://documenter.getpostman.com/view/34987093/2sA3dxEXmC)

## Technologies Used:
- **Backend Language**: Node.js
- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Other Technologies**: Postman for API documentation

## API Endpoints:
- `/api/create-product` - This API is used to create a product
  - **METHOD**: POST
  - **ACCESS**: Admin

- `/api/getProduct` - This API is used to fetch the products
  - **METHOD**: GET
  - **ACCESS**: Users

- `/api/update-product/:id` - This API is used to update the products
  - **METHOD**: PUT
  - **ACCESS**: Users

- `/api/deleteProduct/:id` - This API is used to delete the products
  - **METHOD**: DELETE
  - **ACCESS**: Users

- `/api/create-vendor` - This API is used to create the vendor
  - **METHOD**: POST
  - **ACCESS**: Admin

- `/api/get-vendor` - This API is used to get the available vendors
  - **METHOD**: GET
  - **ACCESS**: Users

- `/api/create-order` - This API is used to create the order
  - **METHOD**: POST
  - **ACCESS**: Admin

- `/api/get-order` - This API is used to get the available orders
  - **METHOD**: GET
  - **ACCESS**: Users

- `/api/auth/register-user` - This API is used to register a user
  - **METHOD**: POST

- `/api/auth/signin-user` - This API is used to sign in as a user
  - **METHOD**: POST

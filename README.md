**Inventory Management System**

Admin Credentials- **email- admin@gmail.com, password- P@ssw0rd**

Requirements:

Design and develop an Application using the full-stack.
Users can view all their inventory products, stocks, order, vendor details on the dashboard.
Users can create, update , delete , view all their inventory product details on the dashboard (CRUD).
Enables users to track inventory stocks, including quantities, locations, and product details on individual components.
Show related notifications or alerts refill stocking and avoid running out of stock.
Allows users track purchase orders for inventory, including supplier information, order status, and delivery dates
Generate reports and analytics on important inventory details like stock levels, turnover rates, and inventory value.

###Backend Development Approach:

Completed setting up the development environment with NodeJS, and necessary dependencies. Analysed the project requirements.

**Postman Documentation**

    https://documenter.getpostman.com/view/34987093/2sA3dxEXmC

**Technologies Used:**

- Backend Language: Node.js
- Backend Framework: Express.js
- Database: MongoDB
- Other Technologies: Postman for API documentation

## API Endpoints
1. /api/create-product
           - This API is used to create a product
           - METHOD: POST
           - ACCESS: Admin
2. /api/getProduct
           - This API is used to fetch the products
           - METHOD: GET
           - ACCESS: Users
3. /api/update-product/:id
           - This API is used to update the products
           - METHOD: PUT
           - ACCESS: Users
4. /api/deleteProduct/:id
           - This API is used to delete the products
           - METHOD: DELETE
           - ACCESS: Users
5. /api/create-vendor
           - This API is used to create the vendor
           - METHOD: POST
           - ACCESS: Admin     
6. /api/get-vendor
           - This API is used to get the available vendors
           - METHOD: GET
           - ACCESS: Users
7. /api/create-order
           - This API is used to create the order
           - METHOD: POST
           - ACCESS: Admin
8. /api/get-order
           - This API is used to get the available orders
           - METHOD: GET
           - ACCESS: Users
9. /api/auth/register-user
           - This API is used to get the register a user
           - METHOD: POST
10. /api/auth/signin-user
           - This API is used to signin as a user
           - METHOD: POST
    

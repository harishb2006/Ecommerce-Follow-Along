# Ecommerce Follow Along Project
Welcome to the **Ecommerce Follow Along Project**, this is a hands-on project where we will build a complete e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

## Milestone 1: Project Overview

#### 1. Understanding the MERN Stack:
 **MongoDB :** A database for storing application data in a flexible, document based format.
 **Express.js :** A backend web application framework for building APIs and handling server logics.
 **React.js :** A framework library for building User Interfaces.
 **Node.js :** A runtime environment that allows javascript to run on the server.
 
#### 2. REST API Structure  
REST APIs are used to allow communication between the frontend and backend.  
We’ll create APIs for:  
- **User Authentication**: Allowing users to register and log in.  
- **Product Management**: Adding, updating, and retrieving product data.  
- **Order Handling**: Managing customer orders.

#### 3. Database Schema Design  
We’ll learn how to design and organize data using MongoDB. A schema helps us define how the data is stored and related.  


#### 4. Authentication  
Authentication ensures only the right people can access certain features. For example:  
- Users need to log in to place orders or see their personal data.  
- It keeps the app secure by verifying users’ identities.


## Milestone 3 :
Set up dedicated folders for organizing backend code effectively. Initialized and configured a Node.js server to handle API requests. Connected the application to MongoDB to store and manage data. Implemented basic error handling to ensure smooth server operation.

## Milestone 4 :
created a User Model to define how user data is structured in the database also developed a User Controller to manage user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.

## Milestone 5: Sign-Up Page and Form Validation

- **Sign-Up Page**: Developed a user-friendly registration page.
- **Form Validation**: Implemented validation for user inputs.


## Milestone 6: Password Encryption and User Data Storage

- **Password Encryption**: Used bcrypt to hash passwords.
- **User Data Storage**: Saved user data securely in the database.


## Milestone 7: User Login Endpoint and Credential Validation

- **Login Endpoint**: Created a backend endpoint for user login.
- **User Data Retrieval**: Retrieved user records based on credentials.
- **Password Validation**: Compared hashed passwords securely.
- **Authentication Response**: Provided feedback based on login success.
- **Security Measures**: Implemented protections against common threats.
- **Testing**: Verified login functionality.


## Milestone 8: Card Component Creation and Homepage Layout

- **Card Component**: Developed a reusable product card component.
- **Dynamic Rendering**: Implemented mapping for product display.
- **Homepage Layout**: Designed a responsive grid layout.
- **User Experience**: Enhanced browsing and interaction.
- **Testing**: Verified card rendering and layout consistency.



## Milestone 9: Product Form Creation and Image Uploads

- **Product Form**: Designed a form for product details.
- **Multiple Image Uploads**: Enabled users to upload multiple images.
- **Form Validation**: Added validation for product inputs.
- **Admin Access**: Discussed restricting uploads to admins.
- **Testing**: Verified form functionality and image uploads.


## Milestone 10: Product Schema and API Endpoint Creation

- **Product Schema**: Defined product data structure with Mongoose.
- **API Endpoint**: Created a POST endpoint for product data.
- **Data Validation**: Ensured valid data is saved in the database.
- **Testing**: Verified endpoint functionality with Postman.
- **Future Enhancements**: Discussed admin restrictions and user roles.




## Milestone 11: Fetching and Displaying Products

- **Backend API**: Created an endpoint to send all product data from MongoDB.
- **Frontend Data Fetching**: Implemented a function to retrieve product data from the backend.
- **Understanding Data Flow**: Learned how to send, receive, and display data using API calls.


## Milestone 12: My Products Page with User-Specific Product Display

- **Endpoint Creation**: Developed a GET endpoint to fetch all products associated with the logged-in user's email from MongoDB.
- **Frontend Integration**: Wrote a function in the frontend to retrieve user-specific product data from the backend.
- **Dynamic Display**: Utilized the existing product card component to dynamically display the fetched products on the "My Products" page.
- **Data Filtering**: Implemented filtering logic on the backend to ensure only products associated with the user's email are retrieved.
- **Testing**: Verified the functionality of the endpoint and the dynamic display using browser tools and Postman.
- **Future Enhancements**: Considered adding options for editing or deleting user-specific products.


---

## Milestone 13: Product Update Endpoint and Form Auto-fill

- **Update Endpoint**: Developed a PUT endpoint to receive updated product data and modify the corresponding document in MongoDB.
- **Frontend Integration**: Added an "Edit" button to the product card. Clicking it pre-fills the product form with existing data for editing.
- **Form Auto-fill**: Implemented functionality to populate the product form with the selected product's details, enabling easy modification.
- **Data Persistence**: Ensured that the updated product data is correctly saved to the MongoDB database.
- **Testing**: Verified the update functionality using Postman and by testing the edit flow in the application.


## Milestone 14: Product Delete Endpoint

- **Delete Endpoint**: Created a DELETE endpoint to remove a product from MongoDB based on its ID.
- **Frontend Integration**: Added a "Delete" button to the product card. Clicking it triggers the deletion of the corresponding product.
- **Confirmation**: Implemented a confirmation dialog before deleting a product to prevent accidental deletions.
- **Data Removal**: Ensured that the product is successfully removed from the MongoDB database.
- **Testing**: Verified the delete functionality using Postman and by testing the delete flow in the application.


# Milestone 15

- Create a reusable Navbar component with links to all pages.  
- Integrate the Navbar component across multiple pages for smooth navigation.  

**Steps:**  
1. **Create Navbar Component:**  
   - Design a Navbar with links to:  
     - Home  
     - My Products  
     - Add Product  
     - Cart  
   - Ensure the Navbar is responsive and works on all screen sizes.  

2. **Integration:**  
   - Add the Navbar component to all pages of the application.  
   - Ensure smooth and easy navigation between pages.  

# Milestone 16 
  
- Create a dedicated page to display detailed information about a single product.  
- Add functionality to select quantity and an "Add to Cart" button.  

**Steps:**  
1. **Product Info Page:**  
   - Design a new page to display all details of a product (e.g., name, description, price, image, etc.).  
   - Add a quantity selector and an "Add to Cart" button.  

2. **Functionality:**  
   - Allow users to choose the quantity of the product.  
   - Implement the "Add to Cart" button to store the selected product and quantity.  

# Milestone 17

- Modify the user schema to store cart products.  
- Write a backend endpoint to receive and store product details in the cart.  

**Steps:**  
1. **Schema Update:**  
   - Update the user schema to include a field for storing cart products.  

2. **Backend Endpoint:**  
   - Create an endpoint to receive product details (e.g., product ID, quantity) and store them in the user's cart in the database.  

# Milestone 18

- Create a backend endpoint to handle requests from the cart page.  
- Write logic to fetch all products inside the user's cart based on their email.  

**Steps:**  
1. **Backend Endpoint:**  
   - Create an endpoint to receive requests from the cart page.  
   - Fetch all products stored in the user's cart using their email.  

2. **Frontend Integration:**  
   - Use the fetched data to display products dynamically on the cart page.  

# Milestone 19  

- Created a cart page to display products from the cart.  
- Added `+` and `-` buttons to increase or decrease product quantity.  
- Built a backend endpoint to handle quantity updates.  
- Improved cart functionality with dynamic updates.

# Milestone 20

1. **Backend:**
   - Create an endpoint to send user data via email.

2. **Frontend:**
   - Design a profile page to display:
     - **Section 1:** Profile photo, name, and email.
     - **Section 2:** Addresses with a button to "Add address."
   - If no address is found, display "No address found."


# Milestone 21  

- Create a frontend form to collect address details.  
- Store the input address in a state and handle navigation to the form page.  

**Steps:**  
1. **Address Form:**  
   - Design a form to collect:  
     - Country  
     - City  
     - Address Line 1  
     - Address Line 2  
     - Zip Code  
     - Address Type  

2. **State Management:**  
   - Create a state to store the input address details.  

3. **Navigation:**  
   - When clicking "Add Address" in the profile, navigate to the address form page.  

# Milestone 22 

- Create a backend endpoint to store the address received from the frontend form inside the user profile in the database.  

**Steps:**  
1. **Backend Endpoint:**  
   - Create an endpoint to receive address details (country, city, address1, address2, zip code, address type) from the frontend form.  
   - Add the received address to the address array in the user collection.  

2. **Database Update:**  
   - Ensure the address is saved and linked to the specific user profile.  

# Milestone 23:
-Milestone 23 focuses on implementing the order placement flow. A "Place Order" button will be added to the cart page, which, when clicked, navigates to the "Select Address" page. This page will display all available addresses associated with the user, allowing them to choose one. A backend endpoint will be created to retrieve and send all user addresses to the frontend, ensuring seamless address selection before order confirmation.

# Milestone 24:
The Order Summary page will provide users with a clear overview of their purchase before finalizing the order. It will display all the products being ordered, including their details such as name, quantity, and price. Below the product list, the selected delivery address will be shown to ensure the user reviews it before proceeding. The total cart value will also be displayed, giving a complete cost breakdown. At the bottom of the page, a "Place Order" button will be available, allowing the user to confirm and complete their purchase seamlessly.

# Milestone 25:
This endpoint allows users to place orders by sending product details, user information, and address details. The system retrieves the user's _id using their email and processes each product as a separate order while maintaining the same address. Each order is stored in the MongoDB orders collection using the previously defined Order schema. This ensures that every product is tracked as an independent order while linking all orders to the same user and delivery address.

# Milestone 26:
This endpoint allows retrieval of a user's order history using their email address. When a request is made, the server first searches for the user's _id based on the provided email. Once the _id is obtained, it queries the database to fetch all orders associated with that user. The response includes the complete list of orders, enabling seamless tracking of purchase history. This functionality ensures efficient data retrieval while maintaining a user-friendly experience.

# Milestone 27:
Milestone 27 focuses on implementing the My Orders page in the e-commerce project. This involves sending a GET request to the /my-orders endpoint, where the user's email is passed to retrieve all their orders from the database. The fetched orders will then be displayed dynamically on the My Orders page, ensuring users can easily view their purchase history. Additionally, a navigation link to this page will be added to the navbar for better accessibility. This update enhances the user experience by providing a dedicated section for order tracking and management.

# Milestone 28:
Milestone 28 enhances the My Orders page by adding a Cancel Order button for each active order. This button will allow users to cancel an order if it has not already been canceled. If an order is already marked as canceled, the button will not be displayed. To achieve this, a new API endpoint will be created to handle order cancellations. When a user clicks the cancel button, the order ID will be sent to this endpoint, which will retrieve the order, update its status to canceled, and save the changes. This feature improves order management and gives users more control over their purchases.

# Milestone 29 - PayPal Integration Setup:
In this milestone, we set up the PayPal sandbox environment for online payments. First, create a PayPal account and access the PayPal Developer Dashboard. From there, locate the sandbox accounts section, copy the UserID, and save it. Additionally, retrieve and save the client ID from the sandbox account. On the order confirmation page, implement two payment options: Cash on Delivery (COD) and online payment. Use radio buttons to toggle between these options, ensuring that the PayPal payment buttons appear when online payment is selected. In the next milestone, we will implement the functionality to display and process PayPal online payments.

# Milestone 30 - Implementing PayPal Online Payments
In this milestone, we integrate PayPal online payments into our project. Using the previously created PayPal sandbox account and client ID, implement the PayPal API to enable online transactions. Install the react-paypal-js NPM package, which provides the PayPalScriptProvider component to display various payment methods, including credit and debit cards. This step will enhance your understanding of integrating online payments seamlessly into your application.

# Milestone 31
In this milestone, we set up global state management in our React application using the react-redux package. First, we installed react-redux via npm. Then, we created a new folder named store containing two files: store.js and userActions.js. Inside store.js, we defined a userReducer function responsible for managing the user's email in the global state and configured the Redux store using this reducer. In userActions.js, we created an action creator function named setEmail to dispatch actions that update the email value in the store. Finally, in index.js, we wrapped the root <App /> component with Redux’s <Provider> component and passed the store as a prop to ensure the global state is accessible throughout the application. This setup allows us to manage and access the user's email globally using Redux.

# Milestone 32
In Milestone 32, we implemented global state management to handle user authentication by storing the user's email after login. When the user logs in successfully, we use the dispatch method from Redux to store their email in a global state using a slice (userSlice). This allows us to access the email across different components using the useSelector hook. By doing this, we avoid passing props manually and ensure a consistent user context throughout the application. This email is then used to filter and fetch data specific to the logged-in user in other pages, enhancing both security and user experience.
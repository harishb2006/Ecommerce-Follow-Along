# ⭐ Ecommerce Follow Along Project ⭐

Welcome to the Ecommerce Follow Along Project! This hands-on project focuses on building a complete e-commerce application using the *MERN stack* (MongoDB, Express.js, React.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

---

## ⭐ Milestone 1: Project Overview

### 🌟 M1. Understanding the MERN Stack
- *MongoDB*: A database for storing application data in a flexible, document-based format.
- *Express.js*: A backend web application framework for building APIs and handling server logic.
- *React.js*: A framework/library for building user interfaces.
- *Node.js*: A runtime environment that allows JavaScript to run on the server.

### 🌟 M2. REST API Structure
- *User Authentication*: Allowing users to register and log in.
- *Product Management*: Adding, updating, and retrieving product data.
- *Order Handling*: Managing customer orders.

### 🌟 M3. Database Schema Design
- Learn how to design and organize data using MongoDB.
- Define schemas to store and manage data relationships.

### 🌟 M4. Authentication
- Ensure users log in to access personal data and place orders.
- Enhance security by verifying user identities.

---

## ⭐ Milestone 2: Project Setup and Login Page Development

### 🌟 1. Project Folder Structure
- Organized the project into separate *frontend* and *backend* directories.
- Separated concerns for better maintainability.

### 🌟 2. React Frontend Setup
- Initialized a new React application for the user interface.

### 🌟 3. Node.js Backend Setup
- Created a simple Node.js server using *Express.js*.
- Established API routes for handling user authentication and data management.

### 🌟 4. Tailwind CSS Configuration
- Configured Tailwind CSS for utility-first styling.
- Enabled rapid and responsive design.

### 🌟 5. Login Page Development
- Developed a *functional login form* for user authentication.
- Ensured *responsive design* using Tailwind CSS.

---

## ⭐ Milestone 3: Backend Configuration & Database Setup
- Created dedicated folders to *organize backend code* efficiently.
- Initialized and configured a *Node.js server* for handling API requests.
- Connected the application to *MongoDB* for data storage.
- Implemented *basic error handling* for smooth server operation.

---

## ⭐ Milestone 4: User Model & File Uploads
- Created a *User Model* to define how user data is structured in MongoDB.
- Developed a *User Controller* to manage user interactions, such as adding or retrieving data.
- Configured *Multer* for file uploads, enabling users to store files such as images.

---

## ⭐ Milestone 5: Sign-Up Page Development
- Built a *user registration form* using HTML and CSS.
- Implemented *form validation* for:
  - Correct email format.
  - Secure password input.
- Enhanced user experience by preventing errors.
- Committed and pushed all changes to the repository.

---

## ⭐ Milestone 6: Backend Signup API
- Created a *secure signup API* for user registration.
- *Encrypted passwords* using bcrypt before saving them to MongoDB.
- Ensured *secure authentication* and *data privacy*.
- Committed and pushed all changes.

---

## ⭐ Milestone 7: User Login Authentication
- Implemented *secure user authentication* by:
  - Validating credentials.
  - Comparing encrypted passwords using *bcrypt*.
- Authentication flow:
  - Retrieve user data from the database.
  - Hash the entered password and compare it with the stored hash.
  - Grant access if credentials match; otherwise, return an error.
- *Enhances security* and protects user data.

---

## ⭐ Milestone 8: UI Components & Homepage Layout

### 🌟 1. Create the Card Component
- Design a *reusable card component* with props for product details (e.g., name, image, price).

### 🌟 2. Design the Homepage Layout
- Set up a *grid layout* or *flexbox* for displaying multiple cards neatly.

---

## ⭐ Milestone 9: Creating a Product Form

### Why Create a Product Form?
The Product Form is essential for adding new products to the database. It allows users to input product details, which will be stored in MongoDB Atlas and displayed on the Products Home Page.

### Key Features of the Product Form:
- *Product Details Input*: The form collects essential details like:
  - Product Name
  - Price
  - Category
  - Description
  - Stock Availability
- *Data Storage*: The entered data will be saved in MongoDB Atlas.
- *Future Enhancements (for experimentation)*:
  - *Admin Access*: Only admins can upload products.
  - *Shop Profiles*: A user with a "Shop Profile" can add and manage products.

### Steps to Implement:
1. *Create a Product Form in React/HTML* to collect product details.
2. *Handle Form Submission* to store the product data in MongoDB.
3. *Restrict Access (Optional Enhancements)* based on user roles (Admin/Shop).

---

## ⭐ Milestone 10: Product Schema & Backend Endpoint

### 1. Product Schema
Define the structure for product data (e.g., name, description, price) with validation for required fields and correct data types.

### 2. Endpoint Creation
Build a POST endpoint to receive product data, validate it, and save it to MongoDB.

### 3. Validation
Ensure only valid data is saved, which helps maintain data integrity and prevent errors.

---

## ⭐ Milestone 11: My Products Page

We created a *My Products* page that displays a list of products created by the user. The page fetches products from the database based on the user's email and displays them in a grid layout. This allows users to view and manage their products efficiently.

---

## ⭐ Milestone 12: Displaying Products on My Products Page

- Implemented logic to fetch and display products on the *My Products* page.
- Ensured a clean and user-friendly UI for product management.

---

## ⭐ Milestone 13: Update Product Functionality

- Implemented an *Update Product* feature allowing users to edit product details.
- The update form dynamically loads existing product data.
- API calls ensure changes are saved to the database, maintaining data integrity.

---

## ⭐ Milestone 14: Delete Product Functionality

- Integrated *Delete Product* functionality, enabling users to remove products permanently.
- Added a *confirmation prompt* to prevent accidental deletions.
- Ensured a smooth and secure product removal process.

---
## Milestone 15:
- Implement a responsive navigation bar using React and Tailwind CSS to enable smooth navigation between different pages in the application.

---
## Milestone 16:
- In this milestone, we create a product details page displaying all product data, including description, category, price, and tags, with quantity selection and an Add to Cart button. 🚀
---
---
## Milestone 17:
In this milestone, we designed the cart schema to store product details in a user's cart, including product ID, name, quantity, price, and total. The schema also tracks the total amount for the cart and associates the cart with a specific user.

---

---
## Milestone 18: 
In this milestone, we created a **GET `/cart`** endpoint to fetch the user's cart details, including product information and total amount. The endpoint ensures that only authenticated users can access their cart and retrieves the cart data from the database.

---

---
## Milestone 19:
In this milestone, we created a cart page to display the products in the user's cart. The page includes + and - buttons to adjust product quantities. We also implemented PUT /cart/update-quantity endpoints to update the product quantities in the cart, ensuring seamless communication between the frontend and backend.

---

---
## Milestone 20:

In this milestone, we created a GET /user/profile endpoint to fetch the user's profile details, including their name, email, profile photo, and addresses. Additionally, a functionality to send the user’s data via email was implemented. On the frontend, we created a profile page that displays the user’s profile photo, name, email in one section, and addresses in another. If no addresses are found, a "No address found" message is displayed, along with an "Add Address" button.

---
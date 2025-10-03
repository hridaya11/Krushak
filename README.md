# Krushak 🛒 | Bridging the Gap Between Farmers and Consumers

In today's agricultural landscape, farmers often face challenges in getting fair prices due to multiple layers of middlemen. **Krushak** was built to solve this problem. It is a full-stack MERN platform designed to empower farmers by providing them with a direct-to-consumer marketplace.

This project goes beyond a simple e-commerce site by integrating real-time communication, data analytics, and essential tools like weather updates, creating a complete digital ecosystem for modern agriculture.

**Live Demo:** [Link to your deployed site on Vercel/Netlify] *(Your link here!)*

---

## Core Features

### 🛍️ E-Commerce & Marketplace
- **Direct Selling & Buying:** A multi-vendor marketplace where farmers can create their own shop, list products, and manage inventory.
- **Complete Shopping Experience:** Users can browse products, add items to a cart and wishlist, and complete secure online payments.
- **Order Management:** Full order tracking for both buyers and sellers.

### 💬 Community & Communication
- **Real-Time Chat:** A dedicated Socket.IO server powers a live chat feature, enabling direct communication between buyers and sellers.
- **Reviews & Ratings:** A two-way review system to build trust and transparency within the community.

### 📈 Data & Insights
- **Seller Dashboard:** An analytical dashboard for farmers to track their sales, view earnings, and analyze product performance with interactive charts.
- **Withdrawal System:** Farmers can securely withdraw their earnings.
- **Admin Panel:** A comprehensive dashboard for platform administrators to manage users, oversee all products, and view platform-wide analytics.

### 🛠️ Farmer Utilities
- **Weather API:** Integrated real-time weather updates to help farmers with crop planning.
- **Farming News:** A news feed with relevant agricultural articles and updates.

---

## Tech Stack & Architecture

This application is built using a modern, scalable architecture, separating concerns into three distinct services.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

-   **Frontend:** React, Redux Toolkit (for state management), React Router, TailwindCSS, Axios
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose
-   **Real-Time Engine:** Socket.IO
-   **Payment Gateway:** Stripe
-   **Image Hosting:** Cloudinary

### System Architecture

```
+------------------+      +-------------------+      +---------------------+
|                  |      |                   |      |                     |
|   React Client   |----->|   Node.js/Express |----->|      MongoDB        |
| (localhost:3000) |      |   API Server      |      |     (Database)      |
|                  |      | (localhost:8000)  |      |                     |
+--------^---------+      +-------------------+      +---------------------+
         |
         | Real-time
         | (WebSockets)
         |
+--------|---------+
|                  |
|  Socket.IO Server|
| (localhost:4000) |
|                  |
+------------------+
```

---

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   Node.js (v16 or higher) & npm
-   MongoDB (a local instance or a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
-   A free account with [Stripe](https://stripe.com/) and [Cloudinary](https://cloudinary.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/iffat1404/FarmKart.git
    cd FarmKart
    ```

2.  **Setup the Backend:**
    ```sh
    cd backend
    npm install
    ```
    -   Create a `.env` file in the `/backend` directory and add the following variables:
        ```env
        DB_URI=<Your_MongoDB_Connection_String>
        PORT=8000

        STRIPE_API_KEY=<Your_Stripe_Publishable_Key>
        STRIPE_SECRET_KEY=<Your_Stripe_Secret_Key>
        
        JWT_SECRET=<Create_A_Strong_JWT_Secret>
        JWT_EXPIRE=5d

        CLOUDINARY_NAME=<Your_Cloudinary_Name>
        CLOUDINARY_API_KEY=<Your_Cloudinary_Api_Key>
        CLOUDINARY_API_SECRET=<Your_Cloudinary_Api_Secret>
        ```

3.  **Setup the Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```
    - The frontend will automatically proxy requests to the backend server running on port 8000.

4.  **Setup the Socket Server:**
    ```sh
    cd ../socket
    npm install
    ```

### Running the Application

You must run all three services concurrently in **three separate terminals**.

1.  **Start the Backend Server:**
    ```sh
    # from the /backend directory
    npm run dev
    ```

2.  **Start the Socket Server:**
    ```sh
    # from the /socket directory
    node index.js
    ```

3.  **Start the Frontend Client:**
    ```sh
    # from the /frontend directory
    npm start
    ```

Your application should now be live!
-   Frontend running on `http://localhost:3000`
-   Backend API on `http://localhost:8000`
-   Socket Server on `http://localhost:4000`

---

## Screenshots

<details>
<summary>Click to view application screenshots</summary>



</details>

---

## Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## License

This project is distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

Iffat - [Your Portfolio Link] - [Your Email Address]

Project Link: [https://github.com/iffat1404/FarmKart](https://github.com/iffat1404/FarmKart)

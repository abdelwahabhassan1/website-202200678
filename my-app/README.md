# Car Dealership Website

This is a car dealership web application where users can browse available cars, add them to their cart, proceed to checkout, and finalize a reservation.

## Features
- **Browse Cars**: Users can view the list of cars available for sale and add them to the cart.
- **Cart Management**: Users can add or remove items from the cart.
- **Proceed to Checkout**: After adding cars to the cart, users can proceed to the checkout page to input their personal information and confirm their reservation.
- **Reservation Confirmation**: After the user confirms their details, they receive a success message with their reservation information.
- **Persistent Cart**: Cart items are saved in `localStorage`, so they persist even after a page reload.

/src
  /components
    Cart.js          - Handles the cart page with item management.
    CheckoutPage.js  - Collects user information for reservation.
    Home.js          - Displays the list of cars for sale.
    LoginPage.js     - Login page functionality.
    SignUpPage.js    - Sign-up page functionality.
    AboutUs.js       - A page that provides information about the dealership.
    Reservations.js  - Displays reservation confirmation.
  App.js            - Main component that handles routing and state.
  index.js          - Entry point for the React application.


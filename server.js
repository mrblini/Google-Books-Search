const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ ROUTES (api & view):
// Add routes, both API and view
app.use(routes);

// ------------ Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google_books_db");




// routes:
// ========================== SAVE new book to the DBa
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

// app.get("/data", (req, res) => {
//     res.json({
//         text: 'hello'
//     });
// })

// ========================== SAVE A BOOK
// app.post("/api/books", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })

// ========================== SHOW SAVED BOOKS 
// app.get("/api/books", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })

// ========================== DELETE a book from the database by Mongo _id.
// app.post("/api/books/:id", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })

// ========================== *
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// ~~~~~~~~~~~~~~~~~~~~~~~~~ 


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
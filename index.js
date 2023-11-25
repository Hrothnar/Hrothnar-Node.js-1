const express = require("express"); // import express module
const cors = require("cors");       // import cors module

const app = express();

const corsOptions = {origin: "http://localhost:8090"}; // set origin 

app.use(cors(corsOptions));

app.use(express.json()); // parse requests of content-type - application/json

app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

app.get("/", (req, res) => { // simple route
    res.json({ message: "Welcome to REST API application." });
});

const PORT = process.env.PORT || "8080"; // set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



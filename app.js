const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();


////////// All stuff below is skeleton to bring in passport file. Uncomment when needed ////////////
// const passport = require("./config/passport");

// // Command to start passport //
// app.use(passport.initialize());
/////////////////////////////   END    ///////////////////////////////


// Allow blob responses to be readable //
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set up app using cors to prevent who can hit API //
app.use(cors(
    {origin : process.env.CORS_URI}
));

// Generate logs for express app //
app.use(morgan("combined"));

// Modularise routes into their own directory for cleaner code //
app.use(require("./routes"));

// Quicker loading of public files //
app.use(express.static("public"));

// Create and use error handling middleware //
app.use(require("./middleware/error_handler_middleware"));

module.exports = app;
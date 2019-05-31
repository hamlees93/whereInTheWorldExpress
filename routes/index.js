const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserRoutes = require("./user_routes");
const PostRoutes = require("./post_routes");

// A test route to see if the API is responding without having to be authenticated
router.get("/", (req, res) => res.send("Welcome"));

// The route for users. A user will have to be authenitcated before accessing any of these //
router.use(
    "/users",
    // passport.authenticate("jwt", { 
    //     session: false,
    //     failureRedirect: '/login'
    // }), 
    UserRoutes
);

// The route for all the posts. Can see all posts and indiviudal posts without being authenticated
// Cannot delete, edit or post unless you're logged in
router.use(
    "/posts",
    PostRoutes
);

module.exports = router;